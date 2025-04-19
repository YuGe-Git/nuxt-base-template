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

    // 变量命名规则
    'camelcase': ['error', {
      properties: 'never',
      ignoreDestructuring: true,
      ignoreImports: true,
      ignoreGlobals: true,
    }],

    // Node.js 变量命名前缀规则（使用 n 前缀）
    'n/prefer-global/buffer': ['error', 'never'],
    'n/prefer-global/console': ['error', 'never'],
    'n/prefer-global/process': ['error', 'never'],
    'n/prefer-global/url-search-params': ['error', 'never'],
    'n/prefer-global/url': ['error', 'never'],

    // 强制 Node.js 导入使用 n 前缀
    'n/no-deprecated-api': 'error',
    'n/no-exports-assign': 'error',
    'n/no-unpublished-require': 'off',
    'n/no-unpublished-import': 'off',
  },

  // 环境配置
  languageOptions: {
    globals: {
      // 添加 Node.js 全局变量支持
      process: 'readonly',
      __dirname: 'readonly',
      __filename: 'readonly',
      require: 'readonly',
      module: 'readonly',
      exports: 'readonly',
    },
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
