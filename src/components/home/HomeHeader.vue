<script setup lang="ts">
// 首页头部组件 - 包含项目标题和简介
const links = [
  { name: '查看文档', icon: 'hugeicons:legal-document-01', url: '#' },
  { name: 'GitHub', icon: 'hugeicons:github', url: 'https://github.com' },
  { name: '测试页面', icon: 'hugeicons:test-tube-01', url: '/test', isInternal: true },
]
</script>

<template>
  <div class="text-center py-12 mb-8 bg-base-200 rounded-xl">
    <h1 class="text-4xl sm:text-5xl font-bold mb-4 text-base-content flex items-center justify-center gap-3">
      <Icon name="hugeicons:code" class="text-primary" />
      Nuxt-Base-Template
    </h1>
    <div class="divider w-24 mx-auto my-4 opacity-30" />
    <p class="text-lg opacity-70 max-w-xl mx-auto px-4 mb-8">
      基于 Nuxt 3 的现代化开发模板，快速启动您的下一个项目
    </p>

    <!-- 行动按钮 -->
    <div class="flex justify-center gap-4 flex-wrap mt-6">
      <NuxtLink
        v-for="link in links"
        :key="link.name"
        :to="link.url"
        :target="link.isInternal ? '_self' : '_blank'"
        class="btn btn-md gap-2"
        :class="[link.name === 'GitHub' ? 'bg-base-200 border-base-300 hover:bg-base-300'
          : link.name === '测试页面' ? 'btn-accent' : 'btn-neutral']"
      >
        <Icon :name="link.icon" class="w-5 h-5" />
        {{ link.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.btn {
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
</style>
