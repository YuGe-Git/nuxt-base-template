import tailwindcss from '@tailwindcss/vite'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 兼容性日期，指定使用的 Nuxt 功能集
  compatibilityDate: '2024-11-01',
  // 加载的 Nuxt 模块
  modules: [
    '@nuxt/eslint', // ESLint 集成
    '@nuxt/icon', // 图标支持
    'motion-v/nuxt', // Motion for Vue
  ],

  // 启用组件自动导入
  components: [
    {
      path: '~/components',
      // 禁用组件名称前缀，使组件导入时不需要加目录前缀（例如ui/Button→Button而不是UiButton）
      pathPrefix: false,
    },
  ],
  // 启用开发工具
  devtools: { enabled: true },
  // CSS 全局文件
  css: [
    '~/assets/css/main.css',
  ],
  // 源代码目录
  srcDir: 'src/',

  // 添加nitro配置，修复静态生成
  nitro: {
    preset: 'static',
    prerender: {
      failOnError: false,
      routes: [
        '/',
        '/test',
        '/test/daisyui',
        '/test/nuxt/icon',
        '/test/motion',
      ],
    },
  },

  // Vite 配置
  vite: {
    plugins: [
      tailwindcss(),
      // 自定义Vite插件：用于过滤Tailwind CSS的sourcemap警告
      {
        // 插件名称，用于在构建日志中标识
        name: 'vite-plugin-ignore-tailwind-sourcemap-warnings',
        // 仅在构建阶段应用此插件，开发模式下不启用
        apply: 'build',
        // 在Vite配置解析完成后执行
        configResolved(config) {
          // 保存原始的警告处理函数
          const originalOnWarn = config.build.rollupOptions.onwarn
          // 重写警告处理函数
          config.build.rollupOptions.onwarn = (warning, warn) => {
            // 过滤掉特定的Tailwind CSS sourcemap警告
            // 这些警告是由于Tailwind CSS v4在生成嵌套CSS时没有正确生成sourcemap导致的
            if (
              warning.code === 'SOURCEMAP_BROKEN'
              && warning.plugin === '@tailwindcss/vite:generate:build'
            ) {
              return // 忽略此警告，不进行任何输出
            }
            // 处理其他类型的警告
            if (originalOnWarn) {
              // 如果存在原始警告处理函数，则调用它
              originalOnWarn(warning, warn)
            }
            else {
              // 否则使用默认的警告处理逻辑
              warn(warning)
            }
          }
        },
      },
    ],
    css: {
      devSourcemap: true, // 启用 CSS 的 sourceMap
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
      collections: ['hugeicons'],
    },
  },
})
