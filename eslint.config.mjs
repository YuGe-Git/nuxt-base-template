// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // Vue 相关规则
    'vue/multi-word-component-names': ['error', {
      ignores: ['Index', 'Layout', 'Error'],
    }],
    'vue/require-default-export': 'off', // 允许非默认导出的组件

    // TypeScript 相关规则
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-non-null-assertion': 'warn',

    // JavaScript 通用规则
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'warn',
    'prefer-const': 'error',

  },
})
