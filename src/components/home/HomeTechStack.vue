<script setup lang="ts">
// 技术栈展示组件
// 定义技术栈项
const techItems = [
  {
    title: '最新技术栈',
    icon: 'hugeicons:code',
    description: '基于 Nuxt 3 最新版本，使用 Vue 3 生态系统，享受现代化前端开发体验。',
  },
  {
    title: 'TypeScript 支持',
    icon: 'hugeicons:code',
    description: '集成 TypeScript，提供类型安全和智能代码提示，提高开发效率和代码质量。',
  },
  {
    title: '代码规范检查',
    icon: 'hugeicons:audit-01',
    description: '集成 ESLint 代码规范检查，保持代码一致性和质量，减少潜在问题。',
  },
  {
    title: 'UI 框架集成',
    icon: 'hugeicons:text-color',
    description: '集成 Tailwind CSS + DaisyUI 组件库，快速构建美观且响应式的用户界面。',
  },
  {
    title: '目录结构优化',
    icon: 'hugeicons:structure-folder',
    description: '经过精心设计的目录结构，符合最佳实践，便于组织和管理大型应用。',
  },
  {
    title: '自动导入功能',
    icon: 'hugeicons:arrow-reload-horizontal',
    description: '自动导入组件和工具函数，减少样板代码，提高开发体验和效率。',
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
        class="card bg-base-200 shadow-sm hover:shadow-md transition-all border border-base-300"
      >
        <div class="card-body">
          <h3 class="card-title text-base-content">
            <Icon :name="item.icon" class="mr-2 text-primary" />
            {{ item.title }}
          </h3>
          <p class="opacity-80 text-sm">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
