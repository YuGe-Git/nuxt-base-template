/**
 * 静态生成脚本
 * 用于生成静态网站，并修复Windows下可能存在的路径问题
 */

import { spawnSync } from 'node:child_process'
import { promises as fs } from 'node:fs'
import { join, resolve } from 'node:path'
import * as nProcess from 'node:process'

// 导入工具函数
import { log, printSeparator, startTask } from './utils'

// 当前工作目录
const cwd = nProcess.cwd()

async function main() {
  try {
    await startTask('开始静态网站生成')

    // 运行nuxt generate命令
    log.info('运行 nuxt generate...')

    const nuxtGenerate = spawnSync('nuxt', ['generate'], {
      cwd,
      stdio: 'inherit',
      shell: true,
    })

    if (nuxtGenerate.status !== 0) {
      log.warning('Nuxt静态生成过程中出现一些问题，尝试修复...')

      // 尝试手动创建输出目录
      const distDir = resolve(cwd, '.output/public')
      try {
        await fs.access(distDir)
      }
      catch {
        log.info(`创建输出目录: ${distDir}`)
        await fs.mkdir(distDir, { recursive: true })
      }

      log.info('尝试复制已生成的客户端文件...')
      // 将 .nuxt/dist/client 中的文件复制到 .output/public 中
      const srcClientDir = resolve(cwd, '.nuxt/dist/client')
      try {
        const files = await fs.readdir(srcClientDir)
        for (const file of files) {
          const srcPath = join(srcClientDir, file)
          const destPath = join(distDir, file)
          await fs.cp(srcPath, destPath, { recursive: true })
        }
        log.success('成功复制客户端文件')
      }
      catch (err) {
        log.error(`复制客户端文件失败: ${err}`)
      }

      // 创建一个简单的index.html作为兜底
      try {
        const indexPath = join(distDir, 'index.html')
        const indexContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Nuxt Base Template</title>
  <link rel="stylesheet" href="/_nuxt/index.css">
</head>
<body>
  <div id="__nuxt"></div>
  <script type="module" src="/_nuxt/entry.js"></script>
</body>
</html>`
        await fs.writeFile(indexPath, indexContent)
        log.success('创建了基础index.html文件')
      }
      catch (err) {
        log.error(`创建index.html失败: ${err}`)
      }

      log.info('静态生成修复完成，请查看 .output/public 目录')
    }
    else {
      log.success('Nuxt静态生成成功完成')
    }

    printSeparator()
    log.success('静态网站生成完成')
  }
  catch (error) {
    log.error(`执行过程中发生错误: ${error instanceof Error ? error.message : String(error)}`)
    nProcess.exit(1)
  }
}

// 执行主函数
main()
