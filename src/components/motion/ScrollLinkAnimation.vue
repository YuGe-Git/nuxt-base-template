<script setup lang="ts">
import { motion } from 'motion-v'
import { onMounted, onUnmounted, ref } from 'vue'

const containerRef = ref(null)
const scrollY = ref(0)
const scrollYProgress = ref(0)

function updateScroll() {
  if (!containerRef.value)
    return

  const container = containerRef.value as HTMLElement | null
  if (!container)
    return

  const { scrollTop, scrollHeight, clientHeight } = container

  scrollY.value = scrollTop
  scrollYProgress.value = Math.min(scrollTop / (scrollHeight - clientHeight), 1)
}

onMounted(() => {
  const container = containerRef.value as HTMLElement | null
  if (container) {
    container.addEventListener('scroll', updateScroll)
  }
})

onUnmounted(() => {
  const container = containerRef.value as HTMLElement | null
  if (container) {
    container.removeEventListener('scroll', updateScroll)
  }
})
</script>

<template>
  <section>
    <h2 class="text-2xl font-semibold mb-4">
      滚动链接动画
    </h2>

    <div class="mb-2 text-sm text-gray-500">
      滚动下方内容，观察进度条和固定元素的动画效果
    </div>

    <!-- 滚动容器 -->
    <div class="relative border border-base-300 rounded-lg overflow-hidden bg-base-100">
      <!-- 固定进度指示器 -->
      <div class="sticky top-0 left-0 w-full h-2 bg-base-300 z-10">
        <motion.div
          class="h-full bg-primary"
          :style="{ width: `${scrollYProgress * 100}%` }"
        />
      </div>

      <!-- 滚动内容 -->
      <div
        ref="containerRef"
        class="h-80 overflow-y-auto px-6 py-4"
        @scroll.passive="updateScroll"
      >
        <div class="mb-6">
          <h3 class="text-xl font-medium mb-2">
            滚动链接动画
          </h3>
          <p class="mb-3">
            滚动链接动画是将动画效果与页面滚动位置直接关联的技术。
          </p>
          <p class="mb-3">
            这种动画会随着用户滚动页面而自动进行变化，创造出流畅、直观的用户体验。
          </p>
        </div>

        <!-- 随滚动位置变化的元素 -->
        <div class="flex justify-center my-8">
          <motion.div
            class="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold shadow-xl"
            :style="{
              scale: 1 + scrollYProgress * 0.5,
              rotate: scrollYProgress * 180,
              opacity: 0.5 + scrollYProgress * 0.5,
            }"
          >
            {{ Math.round(scrollYProgress * 100) }}%
          </motion.div>
        </div>

        <!-- 多段内容便于滚动 -->
        <div v-for="n in 5" :key="n" class="mb-8">
          <h4 class="text-lg font-medium mb-2">
            滚动示例段落 {{ n }}
          </h4>
          <p class="mb-2">
            当您滚动此内容时，顶部的进度条和中间的方块会随着滚动位置变化而产生动画效果。
          </p>
          <p>滚动位置：{{ Math.round(scrollY) }}px</p>
          <p>滚动进度：{{ Math.round(scrollYProgress * 100) }}%</p>
        </div>

        <!-- 最终效果说明 -->
        <div class="py-8 text-center">
          <p class="text-lg font-medium">
            您已滚动到底部!
          </p>
          <p>动画进度：100%</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.3);
}
</style>
