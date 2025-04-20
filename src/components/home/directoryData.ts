// 定义目录结构（保留数据结构定义以便未来动态生成）
export const directories = [
  {
    path: 'nuxt-base-template/',
    description: '项目根目录',
    children: [
      {
        path: 'src/',
        description: '源代码目录，包含所有应用代码',
        children: [
          {
            path: 'components/',
            description: '可复用组件目录',
            children: [
              { path: 'base/', description: '基础组件' },
              { path: 'daisyui/', description: 'DaisyUI组件示例' },
              { path: 'home/', description: '首页相关组件' },
              { path: 'ui/', description: 'UI通用组件' },
            ],
          },
          {
            path: 'pages/',
            description: '页面路由组件',
            children: [
              { path: 'test/', description: '测试页面' },
              { path: 'index.vue', description: '首页', isFile: true },
            ],
          },
          { path: 'layouts/', description: '布局组件' },
          { path: 'composables/', description: '可复用组合式函数' },
          { path: 'utils/', description: '工具函数' },
          { path: 'middleware/', description: '路由中间件' },
          { path: 'plugins/', description: '应用插件' },
          { path: 'assets/', description: '静态资源文件' },
          { path: 'public/', description: '公共文件，不经过构建处理' },
          { path: 'types/', description: 'TypeScript 类型定义' },
          {
            path: 'server/',
            description: '服务器端代码',
            children: [
              { path: 'api/', description: 'API接口' },
              { path: 'middleware/', description: '服务端中间件' },
              { path: 'plugins/', description: '服务端插件' },
              { path: 'routes/', description: '服务端路由' },
              { path: 'services/', description: '服务端层' },
              { path: 'tsconfig.json', description: 'TypeScript配置', isFile: true },
            ],
          },
          { path: 'app.config.ts', description: '应用配置文件', isFile: true },
          { path: 'app.vue', description: '应用入口组件', isFile: true },
        ],
      },
      {
        path: 'scripts/',
        description: '构建和开发脚本',
        children: [
          { path: 'dev.ts', description: '开发环境启动脚本', isFile: true },
          { path: 'build.ts', description: '生产环境构建脚本', isFile: true },
          { path: 'start.ts', description: '生产环境启动脚本', isFile: true },
          { path: 'lint.ts', description: '代码检查脚本', isFile: true },
          { path: 'clear.ts', description: '清理缓存和临时文件', isFile: true },
          { path: 'utils.ts', description: '脚本工具函数', isFile: true },
          { path: 'getHugeIcons.ts', description: '获取图标数据脚本', isFile: true },
        ],
      },
      {
        path: 'docs/',
        description: '项目文档',
        children: [
          { path: 'scripts.md', description: '脚本使用文档', isFile: true },
          { path: 'eslint-antfu.md', description: 'ESLint配置文档', isFile: true },
        ],
      },
    ],
  },
]
