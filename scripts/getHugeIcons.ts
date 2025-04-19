/**
 * 获取Hugeicons图标名称
 * 从node_modules/@iconify-json/hugeicons/icons.json中读取图标数据
 * 并将图标名称保存到src/components/base/data文件夹中
 */

import { promises as fs } from 'node:fs'
import { join, resolve } from 'node:path'
import * as nProcess from 'node:process'

// 导入工具函数
import { log, printSeparator, startTask } from './utils'

// 当前工作目录
const cwd = nProcess.cwd()
const SOURCE_PATH = resolve(cwd, 'node_modules/@iconify-json/hugeicons/icons.json')
const TARGET_DIR = resolve(cwd, 'src/components/base/data')
const TARGET_FILE = join(TARGET_DIR, 'hugeicons.ts')

async function main() {
  try {
    await startTask('获取Hugeicons图标数据')

    // 检查图标源文件是否存在
    try {
      await fs.access(SOURCE_PATH)
    }
    catch {
      log.error('未找到Hugeicons图标文件')
      log.error(`路径: ${SOURCE_PATH}`)
      log.info('请确认已安装@iconify-json/hugeicons包')
      nProcess.exit(1)
    }

    // 创建目标目录（如果不存在）
    try {
      await fs.access(TARGET_DIR)
    }
    catch {
      log.info(`创建目录: ${TARGET_DIR}`)
      await fs.mkdir(TARGET_DIR, { recursive: true })
    }

    // 读取图标数据
    log.info('读取Hugeicons图标数据...')
    const iconData = JSON.parse(await fs.readFile(SOURCE_PATH, 'utf-8'))

    // 提取所有图标名称
    const iconNames = Object.keys(iconData.icons || {})
    log.success(`找到${iconNames.length}个图标`)

    // 生成TypeScript文件内容
    const fileContent = `/**
 * Hugeicons图标数据
 * 自动从@iconify-json/hugeicons包生成
 * 生成时间: ${new Date().toLocaleString()}
 * 总图标数: ${iconNames.length}
 */

// 所有图标名称
export const allIcons = ${JSON.stringify(iconNames, null, 2)}
`

    // 写入文件
    await fs.writeFile(TARGET_FILE, fileContent)
    log.success(`图标数据已保存到: ${TARGET_FILE}`)
    printSeparator()

    // 添加使用示例注释
    log.info('使用示例:')
    log.info('1. 在Vue组件中导入:')
    log.info('   import { allIcons } from \'~/components/base/data/hugeicons\'')
    printSeparator()
  }
  catch (error) {
    log.error(`执行过程中发生错误: ${error instanceof Error ? error.message : String(error)}`)
    nProcess.exit(1)
  }
}

// 执行主函数
main()
