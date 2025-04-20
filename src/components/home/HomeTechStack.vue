<script setup lang="ts">
// 技术栈展示组件
// 定义技术栈项
const techItems = [
  {
    title: '最新技术栈',
    icon: 'hugeicons:layers-01',
    description: '基于 Nuxt 3.16 和 Vue 3.5，采用现代化前端架构，享受最新技术带来的开发体验。',
    version: 'Nuxt 3.16.2 + Vue 3.5.13',
  },
  {
    title: 'TypeScript 支持',
    icon: 'hugeicons:code',
    description: '内置 TypeScript 5.8 支持，提供类型安全和智能代码提示，减少错误提高开发效率。',
    version: 'TypeScript 5.8.3',
  },
  {
    title: '代码规范工具链',
    icon: 'hugeicons:audit-01',
    description: '集成 ESLint 9 和 Antfu 配置，保持代码一致性和质量，自动化代码规范检查。',
    version: 'ESLint 9.24.0',
  },
  {
    title: '现代化 UI 框架',
    icon: 'hugeicons:grid',
    description: '集成 Tailwind CSS 4 和 DaisyUI 5，快速构建美观响应式界面，无需编写复杂CSS。',
    version: 'Tailwind 4.1.4 + DaisyUI 5.0.27',
  },
  {
    title: '高效图标系统',
    icon: 'hugeicons:image-01',
    description: '集成 Nuxt Icon 模块，轻松使用海量图标库，支持按需加载，提升网站视觉表现力。',
    version: '@nuxt/icon 1.12.0',
  },
  {
    title: 'Vue Router 整合',
    icon: 'hugeicons:gps-01',
    description: '内置最新的 Vue Router 4，支持动态路由、嵌套路由和路由守卫，轻松构建复杂应用。',
    version: 'Vue Router 4.5.0',
  },
]
</script>

<template>
  <div class="mb-12">
    <h2 class="text-2xl font-bold mb-6 text-base-content flex items-center">
      <Icon name="hugeicons:zap" class="mr-2 text-primary" />
      技术栈
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="(item, index) in techItems"
        :key="index"
        class="card bg-base-200 shadow-sm hover:shadow-md transition-all border border-base-300 h-full"
      >
        <div class="card-body">
          <h3 class="card-title text-base-content flex items-center">
            <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-2">
              <Icon :name="item.icon" class="text-primary" />
            </div>
            {{ item.title }}
          </h3>
          <p class="opacity-80 text-sm mt-2">
            {{ item.description }}
          </p>
          <p v-if="item.version" class="mt-2 text-xs badge badge-primary badge-outline">
            {{ item.version }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-body {
  padding: 1.25rem;
}
</style>
