<script setup lang="ts">
import { onMounted, ref } from 'vue'
// 导入所有动画组件
import BasicAnimation from '~/components/motion/BasicAnimation.vue'
import ColorAnimation from '~/components/motion/ColorAnimation.vue'
import GestureAnimation from '~/components/motion/GestureAnimation.vue'
import ScrollAnimation from '~/components/motion/ScrollAnimation.vue'
import SequenceAnimation from '~/components/motion/SequenceAnimation.vue'
import TransformAnimation from '~/components/motion/TransformAnimation.vue'

// 页面加载动画效果
const isLoading = ref(true)

// 模拟页面加载
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 300)
})
</script>

<template>
  <div class="min-h-screen bg-base-100 transition-all duration-300">
    <!-- 加载状态 -->
    <LoadingOverlay
      v-if="isLoading"
      loading-text="加载动画示例..."
    />

    <!-- 页面内容 -->
    <FadeInContent v-else :duration="0.6">
      <div class="p-6">
        <div class="container mx-auto max-w-4xl">
          <!-- 导航返回 -->
          <div class="mb-6">
            <NuxtLink to="/test" class="btn btn-outline btn-sm gap-2 glass transition-all hover:scale-105">
              <Icon name="hugeicons:arrow-left-01" />
              返回测试中心
            </NuxtLink>
          </div>

          <!-- 标题区 -->
          <div class="text-center mb-10">
            <h1 class="text-4xl font-bold mb-3 flex items-center justify-center">
              <Icon name="hugeicons:gif-square" class="text-primary text-3xl mr-3" />
              Motion动画示例
            </h1>
            <p class="text-base-content/70 max-w-xl mx-auto">
              多种CSS和JavaScript动画效果展示
            </p>
            <div class="divider max-w-md mx-auto" />
          </div>

          <div class="space-y-16">
            <!-- 基础动画 -->
            <BasicAnimation />

            <!-- 手势动画 -->
            <GestureAnimation />

            <!-- 变形动画 -->
            <TransformAnimation />

            <!-- 颜色动画 -->
            <ColorAnimation />

            <!-- 序列动画 -->
            <SequenceAnimation />

            <!-- 滚动动画 (放在最后，以便有足够的滚动空间) -->
            <ScrollAnimation />
          </div>

          <!-- 页脚 -->
          <div class="text-center mt-16 opacity-70 text-sm">
            <p>Motion动画示例 · Nuxt Base Template</p>
          </div>

          <!-- 页面状态 -->
          <PageStatus
            page-path="/test/motion"
            last-edited="2025-04-28 12:35:00"
          />
        </div>
      </div>
    </FadeInContent>
  </div>
</template>
