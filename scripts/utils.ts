import { execSync } from 'node:child_process'
import * as nConsole from 'node:console'
import { existsSync } from 'node:fs'
import * as nProcess from 'node:process'

/**
 * 等待指定的毫秒数
 * @param ms 等待的毫秒数
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * 打印彩色消息的工具对象
 */
export const log = {
  info: (msg: string) => nConsole.log(`\x1B[36m${msg}\x1B[0m`),
  success: (msg: string) => nConsole.log(`\x1B[32m${msg}\x1B[0m`),
  warning: (msg: string) => nConsole.log(`\x1B[33m${msg}\x1B[0m`),
  error: (msg: string) => nConsole.log(`\x1B[31m${msg}\x1B[0m`),
}

/**
 * 等待直到目录被删除，有超时检查
 * @param path 要检查的路径
 * @param timeoutMs 超时时间（毫秒）
 * @param checkIntervalMs 检查间隔（毫秒）
 * @returns 是否成功删除
 */
export async function waitUntilRemoved(
  path: string,
  timeoutMs: number = 20000,
  checkIntervalMs: number = 500,
): Promise<boolean> {
  const startTime = Date.now()

  while (existsSync(path)) {
    nProcess.stdout.write('.')

    // 检查是否超时
    if (Date.now() - startTime > timeoutMs) {
      nConsole.log('\n⚠️ 删除操作超时！')
      return false
    }

    await sleep(checkIntervalMs)
  }

  if (nProcess.stdout.moveCursor) {
    nProcess.stdout.moveCursor(0, -1) // 上移一行
    nProcess.stdout.clearLine(1) // 清除该行
  }

  return true
}

/**
 * 打印分隔线
 */
export function printSeparator(): void {
  log.info('===============================================')
}

/**
 * 清理控制台并开始新任务
 * @param taskName 任务名称
 */
export async function startTask(taskName: string): Promise<void> {
  // 使用适合当前操作系统的清屏方法
  if (nProcess.platform === 'win32') {
    // Windows系统使用CMD清屏命令
    try {
      execSync('cls', { stdio: 'inherit' })
    }
    catch {
      // 如果执行失败，回退到传统方法
      nConsole.clear()
    }
  }
  else {
    // 非Windows系统使用ANSI转义序列清屏（更彻底）
    nProcess.stdout.write('\x1Bc')
  }

  printSeparator()
  log.info(taskName)
  await sleep(500)
}
