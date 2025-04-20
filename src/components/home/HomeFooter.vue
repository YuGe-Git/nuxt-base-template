<script setup lang="ts">
// 页脚组件
const links = [
  { name: '查看文档', icon: 'hugeicons:legal-document-01', url: '#' },
  { name: 'GitHub', icon: 'hugeicons:github', url: 'https://github.com' },
  { name: '测试页面', icon: 'hugeicons:test-tube-01', url: '/test', isInternal: true },
]
</script>

<template>
  <div class="mt-16 mb-8">
    <!-- 分隔线 -->
    <div class="divider my-6" />

    <!-- 行动按钮 -->
    <div class="flex justify-center gap-4 flex-wrap mb-8">
      <NuxtLink
        v-for="link in links"
        :key="link.name"
        :to="link.url"
        :target="link.isInternal ? '_self' : '_blank'"
        class="btn btn-lg gap-2"
        :class="[link.name === 'GitHub' ? 'bg-base-200 border-base-300 hover:bg-base-300'
          : link.name === '测试页面' ? 'btn-accent' : 'btn-neutral']"
      >
        <Icon :name="link.icon" />
        {{ link.name }}
      </NuxtLink>
    </div>

    <!-- 版权信息 -->
    <div class="text-center text-base-content/50 text-sm">
      <p>Nuxt Base Template</p>
      <p class="mt-1">
        基于 Nuxt 3 构建的现代化前端开发模板
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
