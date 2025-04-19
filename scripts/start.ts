import { execSync } from 'node:child_process'
import * as nConsole from 'node:console'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import * as nProcess from 'node:process'
// 导入build模块，以复用构建逻辑
import { buildNuxtApp } from './build'

import { log, printSeparator, sleep, startTask } from './utils'

/**
 * 解析命令行参数
 */
function parseArgs(): { port?: string, host?: string, force?: boolean } {
  const args = nProcess.argv.slice(2)
  const portIndex = args.findIndex(arg => arg === '--port' || arg === '-p')
  const hostIndex = args.findIndex(arg => arg === '--host' || arg === '-h')

  return {
    port: portIndex !== -1 && args[portIndex + 1] ? args[portIndex + 1] : undefined,
    host: hostIndex !== -1 && args[hostIndex + 1] ? args[hostIndex + 1] : undefined,
    force: args.includes('--force') || args.includes('-f'),
  }
}

/**
 * 启动Nuxt生产服务器
 */
async function start() {
  const { port, host, force } = parseArgs()
  const rootDir = nProcess.cwd()
  const outputPath = join(rootDir, '.output/server/index.mjs')

  try {
    // 开始任务
    await startTask('🚀 启动 Nuxt 生产服务器...')

    // 检查构建文件是否存在
    if (!existsSync(outputPath) || force) {
      log.info('📦 没有找到构建文件或强制重新构建')
      log.info('🏗️ 先执行构建...')
      printSeparator()

      // 调用build模块进行构建
      const buildSuccess = await buildNuxtApp()
      if (!buildSuccess) {
        log.error('❌ 构建失败，无法启动服务器')
        printSeparator()
        return
      }

      // 重新启动任务以保持输出清晰
      await startTask('🚀 启动 Nuxt 生产服务器...')
    }

    // 构建启动命令
    let startCommand = `node ${outputPath}`
    if (port)
      startCommand += ` --port ${port}`
    if (host)
      startCommand += ` --host ${host}`

    // 执行启动命令
    log.info(`🚀 执行: ${startCommand}`)
    log.info('按 Ctrl+C 停止服务器')

    printSeparator()
    await sleep(500)

    try {
      // 启动服务器并保持进程运行
      execSync(startCommand, { stdio: 'inherit' })
    }
    catch (error) {
      // 用户使用Ctrl+C停止服务器时会到这里
      if (error instanceof Error && error.message.includes('SIGINT')) {
        log.info('👋 服务器已停止')
      }
      else {
        log.error('❌ 服务器启动失败:')
        nConsole.error(error)
      }
      printSeparator()
    }
  }
  catch (error) {
    log.error('❌ 脚本执行过程中出错:')
    nConsole.error(error)
    printSeparator()
  }
}

// 执行启动
start()
