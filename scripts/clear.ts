import { execSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { rm } from 'node:fs/promises'
import { join } from 'node:path'
import { log, printSeparator, sleep, startTask, waitUntilRemoved } from './utils'

/**
 * 解析命令行参数
 */
function parseArgs(): { removeLockFile: boolean } {
  const args = process.argv.slice(2)
  return {
    removeLockFile: args.includes('--remove-lock'),
  }
}

/**
 * 主清理函数
 */
async function clear() {
  const rootDir = process.cwd()
  const nodeModulesPath = join(rootDir, 'node_modules')
  const nuxtPath = join(rootDir, '.nuxt')
  const outputPath = join(rootDir, '.output')
  const lockFilePath = join(rootDir, 'pnpm-lock.yaml')

  const { removeLockFile } = parseArgs()

  try {
    // 开始任务
    await startTask('🧹 开始清理项目...')

    // 删除 node_modules 目录
    if (existsSync(nodeModulesPath)) {
      log.info('📦 删除 node_modules 目录...')
      await rm(nodeModulesPath, { recursive: true, force: true })

      // 等待确认目录被完全删除
      log.info('⏳ 等待确认 node_modules 完全删除')
      const removed = await waitUntilRemoved(nodeModulesPath)

      if (!removed) {
        log.warning('⚠️ node_modules 可能未完全删除，但将继续执行')
      }
      else {
        log.success('✅ node_modules 已完全删除')
      }
    }

    // 删除 .nuxt 目录
    if (existsSync(nuxtPath)) {
      log.info('🗑️ 删除 .nuxt 目录...')
      await rm(nuxtPath, { recursive: true, force: true })
      log.success('✅ .nuxt 目录已删除')
    }

    // 删除 .output 目录
    if (existsSync(outputPath)) {
      log.info('🗑️ 删除 .output 目录...')
      await rm(outputPath, { recursive: true, force: true })
      log.success('✅ .output 目录已删除')
    }

    // 是否删除 pnpm-lock.yaml 文件
    if (removeLockFile && existsSync(lockFilePath)) {
      log.warning('⚠️ 删除 pnpm-lock.yaml 文件...')
      log.warning('注意: 删除锁文件可能会导致依赖版本不一致问题')
      await rm(lockFilePath, { force: true })
      log.success('✅ pnpm-lock.yaml 已删除')
    }
    else if (existsSync(lockFilePath)) {
      log.info('ℹ️ 保留 pnpm-lock.yaml 文件 (确保依赖版本一致性)')
      log.info('   如需删除锁文件，请使用参数: --remove-lock')
    }

    // 等待
    printSeparator()
    await sleep(500)

    // 安装依赖
    log.info('📥 重新安装依赖...')
    execSync('pnpm install', { stdio: 'inherit' })

    log.success('🎉 清理完成！项目已恢复干净状态')
    printSeparator()
  }
  catch (error) {
    log.error('❌ 清理过程中出错:')
    console.error(error)
    printSeparator()
  }
}

// 执行清理
clear()
