import { execSync } from 'node:child_process'
import * as nConsole from 'node:console'
import * as nProcess from 'node:process'
import { log, printSeparator, sleep, startTask } from './utils'

/**
 * 解析命令行参数
 */
function parseArgs(): { analyze?: boolean } {
  const args = nProcess.argv.slice(2)
  return {
    analyze: args.includes('--analyze'),
  }
}

/**
 * 执行 Nuxt 构建
 * @param {object} options - 构建选项
 * @param {boolean} [options.analyze] - 是否启用分析模式
 * @param {boolean} [options.showStartTask] - 是否显示开始任务的提示
 * @returns {Promise<boolean>} 构建是否成功
 */
export async function buildNuxtApp(options?: { analyze?: boolean, showStartTask?: boolean }): Promise<boolean> {
  const args = parseArgs()
  const analyze = options?.analyze ?? args.analyze
  const showStartTask = options?.showStartTask ?? true

  try {
    // 开始任务（可选）
    if (showStartTask) {
      await startTask('🏗️ 开始构建 Nuxt 应用...')
    }

    // 构建命令
    const buildCommand = `nuxt build${analyze ? ' --analyze' : ''}`

    // 执行构建
    log.info(`🚀 执行: ${buildCommand}`)

    printSeparator()
    await sleep(500)

    try {
      execSync(buildCommand, { stdio: 'inherit' })
      log.success('✅ Nuxt 应用构建成功！')
      printSeparator() // 确保在成功时也打印分隔符
      return true
    }
    catch (error) {
      log.error('❌ 构建过程中出错:')
      nConsole.error(error)
      printSeparator()
      return false
    }
  }
  catch (error) {
    log.error('❌ 脚本执行过程中出错:')
    nConsole.error(error)
    printSeparator()
    return false
  }
}

// 只在直接运行此文件时执行构建
// 判断是否是直接通过命令行运行此文件
if (nProcess.argv[1] === import.meta.url || nProcess.argv[1]?.endsWith('build.ts')) {
  buildNuxtApp()
}
