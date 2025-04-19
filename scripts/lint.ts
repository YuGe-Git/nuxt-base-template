import { execSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { log, printSeparator, sleep, startTask } from './utils'

/**
 * 解析命令行参数
 */
function parseArgs(): { fix: boolean, path?: string } {
  const args = process.argv.slice(2)
  return {
    fix: args.includes('--fix'),
    path: args.find(arg => !arg.startsWith('--')),
  }
}

/**
 * 执行 ESLint
 */
async function lint() {
  const rootDir = process.cwd()
  const eslintConfigPath = join(rootDir, 'eslint.config.mjs')
  const { fix, path } = parseArgs()

  try {
    // 开始任务
    await startTask(`🔍 开始${fix ? '修复' : '检查'}代码规范...`)

    // 验证 ESLint 配置文件存在
    if (!existsSync(eslintConfigPath)) {
      log.warning('⚠️ 未找到 eslint.config.mjs 配置文件')
      log.info('将使用默认配置进行检查')
    }
    else {
      log.info('✅ 已找到 ESLint 配置文件')
    }

    printSeparator()
    await sleep(500)

    // 构建 ESLint 命令
    const targetPath = path || '.'
    const fixFlag = fix ? ' --fix' : ''
    const eslintCommand = `eslint ${targetPath}${fixFlag}`

    // 执行 ESLint
    log.info(`🚀 执行: ${eslintCommand}`)
    try {
      execSync(eslintCommand, { stdio: 'inherit' })
      log.success('✅ ESLint 检查完成，未发现问题！')
    }
    catch {
      // ESLint 返回非零退出码时会抛出错误，但我们不想因此终止脚本
      log.warning('⚠️ ESLint 发现了一些问题')
      log.info('查看上方输出了解详情')

      // 如果是修复模式，提示用户
      if (fix) {
        log.info('部分问题已自动修复，但可能仍有需要手动解决的问题')
      }
      else {
        log.info('可以使用 --fix 参数尝试自动修复部分问题')
      }
    }

    printSeparator()
  }
  catch (error) {
    log.error('❌ 执行过程中出错:')
    console.error(error)
    printSeparator()
  }
}

// 执行 ESLint
lint()
