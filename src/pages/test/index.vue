<script setup lang="ts">
// 测试页面配置
const testPages = [
  {
    title: '组件测试',
    description: 'DaisyUI组件和主题展示',
    path: '/test/daisyui',
    icon: 'hugeicons:component-01',
  },
  {
    title: '图标测试',
    description: 'Hugeicons图标库展示',
    path: '/test/nuxt/icon',
    icon: 'hugeicons:image-01',
  },
]
</script>

<template>
  <div class="min-h-screen bg-base-100 p-6">
    <div class="container mx-auto">
      <!-- 导航返回 -->
      <div class="mb-6">
        <NuxtLink to="/" class="btn btn-outline btn-sm gap-2">
          <Icon name="hugeicons:arrow-left-01" />
          返回首页
        </NuxtLink>
      </div>

      <!-- 标题 -->
      <h1 class="text-3xl font-bold mb-8 text-center">
        <Icon name="hugeicons:test-tube-01" class="inline-block mr-2" />
        测试页面中心
      </h1>

      <!-- 测试页面卡片 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="page in testPages"
          :key="page.path"
          :to="page.path"
          class="card bg-base-200 shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div class="card-body">
            <h2 class="card-title">
              <Icon :name="page.icon" class="mr-2" />
              {{ page.title }}
            </h2>
            <p class="opacity-70">
              {{ page.description }}
            </p>
            <div class="card-actions justify-end mt-4">
              <span class="btn btn-primary btn-sm">
                查看
                <Icon name="hugeicons:arrow-right-01" class="ml-1" />
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
