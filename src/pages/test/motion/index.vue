<script setup lang="ts">
import type { Component } from 'vue'
import { AnimatePresence, motion } from 'motion-v' // 手动导入
import { computed, defineAsyncComponent, onMounted, ref } from 'vue'
import MotionTabs from '~/components/motion/MotionTabs.vue'

// 异步加载动画组件，提高初始加载性能
const animationComponents: Record<string, Component> = {
  basic: defineAsyncComponent(() => import('~/components/motion/BasicAnimation.vue')),
  gesture: defineAsyncComponent(() => import('~/components/motion/GestureAnimation.vue')),
  transform: defineAsyncComponent(() => import('~/components/motion/TransformAnimation.vue')),
  color: defineAsyncComponent(() => import('~/components/motion/ColorAnimation.vue')),
  sequence: defineAsyncComponent(() => import('~/components/motion/SequenceAnimation.vue')),
  scroll: defineAsyncComponent(() => import('~/components/motion/ScrollAnimation.vue')),
}

// 页面状态
const isLoading = ref(true)
const activeTab = ref('basic')
const transitionName = ref('fade') // 默认过渡动画

// 动画变体定义
const transitionVariants = computed(() => {
  switch (transitionName.value) {
    case 'slide-left':
      return {
        initial: { opacity: 0, x: 30 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -30 },
      }
    case 'slide-right':
      return {
        initial: { opacity: 0, x: -30 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 30 },
      }
    case 'zoom-in':
      return {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 1.05 },
      }
    case 'zoom-out':
      return {
        initial: { opacity: 0, scale: 1.05 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
      }
    case 'fade':
    default:
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
  }
})

// 模拟页面加载
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 300)
})

// 获取当前激活的组件
const ActiveComponent = computed(() => animationComponents[activeTab.value])
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
              探索CSS和JavaScript驱动的各种动画效果 (motion-v)
            </p>
            <div class="divider max-w-md mx-auto" />
          </div>

          <!-- 选项卡导航和动画选择 -->
          <MotionTabs
            v-model:active-tab="activeTab"
            v-model:transition-name="transitionName"
          />

          <!-- 选项卡内容区域 -->
          <div class="card bg-base-200 shadow-xl border border-base-300 transition-all duration-300 min-h-[300px] overflow-hidden">
            <div class="card-body">
              <AnimatePresence>
                <motion.div
                  :key="activeTab"
                  :initial="transitionVariants.initial"
                  :animate="transitionVariants.animate"
                  :exit="transitionVariants.exit"
                  :transition="{ duration: 0.3, ease: 'easeInOut' }"
                  class="w-full"
                >
                  <component :is="ActiveComponent" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <!-- 页脚 -->
          <div class="text-center mt-16 opacity-70 text-sm">
            <p>Motion动画示例 · Nuxt Base Template</p>
          </div>

          <!-- 页面状态 -->
          <PageStatus
            page-path="/test/motion"
            last-edited="2025-04-28 13:10:00"
          />
        </div>
      </div>
    </FadeInContent>
  </div>
</template>

<style scoped>
/* 这里可以保留一些页面特有的样式，但移除之前的 transition 相关类 */
</style>
