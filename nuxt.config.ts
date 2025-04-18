// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 兼容性日期，指定使用的 Nuxt 功能集
  compatibilityDate: '2024-11-01',
  // 启用开发工具
  devtools: { enabled: true },
  // 加载的 Nuxt 模块
  modules: [
    '@nuxt/eslint', // ESLint 集成
    '@nuxt/icon'    // 图标支持
  ],
  // 源代码目录
  srcDir: 'src/',
  // ESLint 配置
  eslint: {
    config: {
      stylistic: true // 启用样式规则
    }
  },
})