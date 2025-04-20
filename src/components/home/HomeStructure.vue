<script setup lang="ts">
// 目录结构组件
// 定义目录结构
const directories = [
  {
    path: 'src/',
    description: '源代码目录，包含所有应用代码',
    children: [
      { path: 'components/', description: '可复用组件目录' },
      { path: 'pages/', description: '页面路由组件' },
      { path: 'layouts/', description: '布局组件' },
      { path: 'composables/', description: '可复用组合式函数' },
      { path: 'utils/', description: '工具函数' },
      { path: 'middleware/', description: '路由中间件' },
      { path: 'plugins/', description: '应用插件' },
      { path: 'assets/', description: '静态资源文件' },
      { path: 'public/', description: '公共文件，不经过构建处理' },
      { path: 'types/', description: 'TypeScript 类型定义' },
      { path: 'server/', description: '服务器端代码' },
    ],
  },
  {
    path: 'scripts/',
    description: '构建和开发脚本',
    children: [
      { path: 'dev.ts', description: '开发环境启动脚本' },
      { path: 'build.ts', description: '生产环境构建脚本' },
      { path: 'start.ts', description: '生产环境启动脚本' },
      { path: 'lint.ts', description: '代码检查脚本' },
      { path: 'clear.ts', description: '清理缓存和临时文件' },
    ],
  },
  {
    path: 'docs/',
    description: '项目文档',
    children: [
      { path: 'scripts.md', description: '脚本使用文档' },
      { path: 'eslint-antfu.md', description: 'ESLint配置文档' },
    ],
  },
]
</script>

<template>
  <div class="mb-12">
    <h2 class="text-2xl font-bold mb-6 text-base-content flex items-center">
      <Icon name="hugeicons:structure-01" class="mr-2 text-primary" />
      目录结构
    </h2>

    <div class="card bg-base-200 shadow-md hover:shadow-lg transition-all duration-300">
      <div class="card-body">
        <p class="mb-6 opacity-80">
          项目采用模块化的目录结构，遵循Nuxt 3的最佳实践，方便组织和管理大型应用。
        </p>

        <!-- 目录结构树 -->
        <div class="bg-base-300 p-4 rounded-lg mb-6 overflow-x-auto">
          <div class="font-mono text-sm">
            <div class="mb-3">
              <Icon name="hugeicons:structure-folder" class="mr-1 text-primary" />
              <span class="font-semibold">nuxt-base-template/</span>
            </div>

            <div v-for="(dir, index) in directories" :key="index" class="ml-6 mb-4">
              <div class="flex items-start">
                <Icon name="hugeicons:structure-folder" class="mr-1 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div class="flex items-center">
                    <span class="font-semibold">{{ dir.path }}</span>
                    <span class="ml-2 text-xs opacity-60">{{ dir.description }}</span>
                  </div>

                  <div v-for="(child, childIndex) in dir.children" :key="childIndex" class="ml-6 mt-1">
                    <div class="flex items-center">
                      <Icon
                        :name="child.path.endsWith('/') ? 'hugeicons:structure-folder' : 'hugeicons:legal-document-01'"
                        class="mr-1 flex-shrink-0"
                        :class="child.path.endsWith('/') ? 'text-primary' : 'text-base-content opacity-60'"
                      />
                      <span>{{ child.path }}</span>
                      <span class="ml-2 text-xs opacity-60">{{ child.description }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="alert bg-base-300 border-l-4 border-secondary">
          <div class="flex items-center gap-3">
            <Icon name="hugeicons:information-circle" class="text-secondary" />
            <span>遵循<strong>单一职责原则</strong>，一个文件只做一件事，使代码更易于维护和测试。</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
