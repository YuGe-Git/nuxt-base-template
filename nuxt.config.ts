import tailwindcss from '@tailwindcss/vite'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 兼容性日期，指定使用的 Nuxt 功能集
  // 加载的 Nuxt 模块
  modules: [
    '@nuxt/eslint', // ESLint 集成
    '@nuxt/icon', // 图标支持
  ],
  // 自动导入狗都不用
  // components: [
  //   {
  //     path: '~/components',
  //   },
  // ],
  // 启用开发工具
  devtools: { enabled: true },
  // CSS 全局文件
  css: [
    '~/assets/css/main.css',
  ],
  // 源代码目录
  srcDir: 'src/',
  compatibilityDate: '2024-11-01',
  // Vite 配置
  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: true, // 启用 sourcemap
    },
  },
  // ESLint 配置
  eslint: {
    config: {
      // 关闭默认配置（默认情况下，此模块会使用推荐的规则安装 JS、TS 和 Vue 插件）
      standalone: false,
    },
  },
  icon: {
    mode: 'css',
    cssLayer: 'base',
    serverBundle: {
      collections: ['Hugeicons'],
    },
  },
})
