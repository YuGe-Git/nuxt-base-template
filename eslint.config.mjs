// @ts-check
import antfu from '@antfu/eslint-config'

// 支持 Nuxt 的 Anthony Fu ESLint 配置
export default antfu({
  // 启用基本功能
  vue: true,
  typescript: true,

  // 自定义规则
  rules: {
    'vue/multi-word-component-names': ['error', {
      ignores: ['Index', 'Layout', 'Error', 'test'],
    }],
  },

  // 忽略文件
  ignores: [
    'dist',
    '.nuxt',
    'node_modules',
    '.output',
    '**/*.md', // 忽略所有 Markdown 文件
    'package.json', // 忽略 package.json 文件
  ],
})
