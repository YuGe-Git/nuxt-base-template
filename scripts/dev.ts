import { spawn } from 'node:child_process'
import * as nConsole from 'node:console'
import * as nProcess from 'node:process'
import { log, printSeparator, sleep, startTask } from './utils'

/**
 * 解析命令行参数
 */
function parseArgs(): { port?: string, host?: string } {
  const args = nProcess.argv.slice(2)
  const portIndex = args.findIndex(arg => arg === '--port' || arg === '-p')
  const hostIndex = args.findIndex(arg => arg === '--host' || arg === '-h')

  return {
    port: portIndex !== -1 && args[portIndex + 1] ? args[portIndex + 1] : undefined,
    host: hostIndex !== -1 && args[hostIndex + 1] ? args[hostIndex + 1] : undefined,
  }
}

/**
 * 执行 Nuxt 开发服务器
 */
async function dev() {
  const { port, host } = parseArgs()

  try {
    // 开始任务
    await startTask('🚀 启动 Nuxt 开发服务器...')

    // 构建命令
    const args = ['dev']
    if (port)
      args.push('--port', port)
    if (host)
      args.push('--host', host)

    // 执行命令
    log.info(`🚀 执行: nuxt ${args.join(' ')}`)
    log.info('按 Ctrl+C 停止开发服务器')

    printSeparator()
    await sleep(500)

    try {
      // 使用spawn代替execSync以监听输出
      const nuxtProcess = spawn('nuxt', args, {
        stdio: ['inherit', 'pipe', 'pipe'],
        shell: true,
      })

      let nitroBuilt = false
      let startupCompleted = false

      // 监听stdout输出
      nuxtProcess.stdout.on('data', (data) => {
        const output = data.toString()
        nProcess.stdout.write(output)

        // 检测服务器各阶段启动状态
        if (output.includes('Nuxt Nitro server built')) {
          nitroBuilt = true
        }

        if (output.includes('Vite server warmed up')) {
          // 如果Nitro已构建完成且尚未显示启动完成提示
          if (nitroBuilt && !startupCompleted) {
            startupCompleted = true

            // 稍微延迟显示完成消息，确保在Vite warmed up后显示
            setTimeout(() => {
              printSeparator()
              log.success('✨ Nuxt开发服务器启动完成！')
              printSeparator()
            }, 100)
          }
        }
      })

      // 监听stderr输出
      nuxtProcess.stderr.on('data', (data) => {
        nProcess.stderr.write(data.toString())
      })

      // 处理进程退出
      nuxtProcess.on('close', (code) => {
        if (code === 0 || code === null) {
          log.info('👋 开发服务器已正常停止')
        }
        else {
          log.warning(`⚠️ 开发服务器退出，退出码: ${code}`)
        }
        printSeparator()
      })

      // 监听SIGINT信号(Ctrl+C)以优雅地关闭
      // 使用nProcess
      nProcess.on?.('SIGINT', () => {
        log.info('接收到停止信号，正在关闭开发服务器...')
        nuxtProcess.kill('SIGTERM')
      })
    }
    catch (error) {
      log.error('❌ 开发服务器启动失败:')
      nConsole.error(error)
      printSeparator()
    }
  }
  catch (error) {
    log.error('❌ 脚本执行过程中出错:')
    nConsole.error(error)
    printSeparator()
  }
}

// 执行开发服务器
dev()
