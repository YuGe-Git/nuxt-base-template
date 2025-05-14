<script setup lang="ts">
defineOptions({
  ssr: false,
})
</script>

<template>
  <ClientOnly>
    <div class="container mx-auto p-6">
      <h1 class="text-3xl font-bold mb-4">
        简单动画测试
      </h1>
      <p class="text-gray-600 mb-6">
        这是一个最简单的动画测试页面，不使用complex motion组件
      </p>

      <div class="card bg-base-200 p-6">
        <div class="animate-bounce w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white">
          Test
        </div>
      </div>

      <div class="mt-6">
        <NuxtLink to="/test/motion" class="btn btn-primary">
          返回完整测试
        </NuxtLink>
      </div>
    </div>
  </ClientOnly>
</template>
