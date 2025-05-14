<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

defineOptions({
  ssr: false, // 禁用服务器端渲染
})

// 获取容器元素
const containerRef = ref<HTMLElement | null>(null)
const scrollY = ref(0)

// 更新滚动位置
function handleScroll(event: Event) {
  if (containerRef.value) {
    scrollY.value = containerRef.value.scrollTop
  }
}

// 根据滚动位置计算变换
function calculateTransform(start: number, end: number, scrollMin: number, scrollMax: number) {
  // 计算滚动百分比，限制在0-1范围内
  const scrollPercent = Math.max(0, Math.min(1, (scrollY.value - scrollMin) / (scrollMax - scrollMin)))
  // 计算映射值
  return start + (end - start) * scrollPercent
}

// 背景层位置（最慢）
const backgroundY = computed(() => {
  return `transform: translateY(${calculateTransform(0, 20, 0, 1000)}%)`
})

// 中间层位置（中速）
const midgroundY = computed(() => {
  return `transform: translateY(${calculateTransform(0, 40, 0, 1000)}%)`
})

// 前景层位置（最快）
const foregroundY = computed(() => {
  return `transform: translateY(${calculateTransform(0, 60, 0, 1000)}%)`
})

// 文本淡入淡出和移动效果
const heading1Style = computed(() => {
  const opacity = calculateTransform(0, 1, 0, 200)
  const y = calculateTransform(50, 0, 0, 200)
  return {
    opacity: scrollY.value > 400 ? calculateTransform(1, 0, 200, 400) : opacity,
    transform: `translateY(${scrollY.value > 400 ? calculateTransform(0, -50, 200, 400) : y}px)`,
  }
})

const heading2Style = computed(() => {
  const opacity = calculateTransform(0, 1, 200, 400)
  const y = calculateTransform(50, 0, 200, 400)
  return {
    opacity: scrollY.value > 600 ? calculateTransform(1, 0, 400, 600) : opacity,
    transform: `translateY(${scrollY.value > 600 ? calculateTransform(0, -50, 400, 600) : y}px)`,
  }
})

const heading3Style = computed(() => {
  const opacity = calculateTransform(0, 1, 400, 600)
  const y = calculateTransform(50, 0, 400, 600)
  return {
    opacity: scrollY.value > 800 ? calculateTransform(1, 0, 600, 800) : opacity,
    transform: `translateY(${scrollY.value > 800 ? calculateTransform(0, -50, 600, 800) : y}px)`,
  }
})

onMounted(() => {
  if (containerRef.value) {
    containerRef.value.addEventListener('scroll', handleScroll)
  }
})
</script>

<template>
  <section>
    <h2 class="text-2xl font-semibold mb-4">
      视差滚动动画
    </h2>

    <div class="mb-2 text-sm text-gray-500">
      滚动下方区域，观察元素以不同速度移动产生的视差效果
    </div>

    <!-- 视差滚动容器 -->
    <div
      ref="containerRef"
      class="w-full h-[60vh] overflow-y-auto overflow-x-hidden bg-gradient-to-b from-sky-900 to-indigo-900 rounded-lg relative"
    >
      <!-- 背景层 (最慢) -->
      <div
        class="absolute inset-0 w-full h-full transition-transform duration-100"
        :style="backgroundY"
      >
        <div class="absolute inset-0">
          <div class="absolute top-[10%] left-[20%] w-24 h-24 rounded-full bg-blue-500 opacity-20" />
          <div class="absolute top-[30%] right-[15%] w-32 h-32 rounded-full bg-indigo-500 opacity-20" />
          <div class="absolute bottom-[25%] left-[40%] w-48 h-48 rounded-full bg-purple-500 opacity-20" />
        </div>
      </div>

      <!-- 中景层 (中速) -->
      <div
        class="absolute inset-0 w-full h-full transition-transform duration-100"
        :style="midgroundY"
      >
        <div class="absolute inset-0">
          <div class="absolute top-[15%] left-[30%] w-16 h-16 rounded-full bg-blue-500 opacity-40" />
          <div class="absolute top-[50%] right-[25%] w-20 h-20 rounded-full bg-indigo-500 opacity-40" />
          <div class="absolute bottom-[20%] left-[15%] w-32 h-32 rounded-full bg-purple-500 opacity-40" />
        </div>
      </div>

      <!-- 前景层 (最快) -->
      <div
        class="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-100"
        :style="foregroundY"
      >
        <div class="absolute inset-0">
          <div class="absolute top-[20%] left-[50%] w-10 h-10 rounded-full bg-blue-500 opacity-60" />
          <div class="absolute top-[40%] right-[30%] w-12 h-12 rounded-full bg-indigo-500 opacity-60" />
          <div class="absolute bottom-[30%] left-[25%] w-16 h-16 rounded-full bg-purple-500 opacity-60" />
        </div>
      </div>

      <!-- 文本内容 -->
      <div class="relative min-h-[1000px] flex flex-col items-center justify-start pt-36 px-8 text-white">
        <div
          class="w-full max-w-2xl mb-64 text-center transition-all duration-200"
          :style="heading1Style"
        >
          <h3 class="text-4xl font-bold mb-4">
            视差滚动效果
          </h3>
          <p class="text-xl opacity-80">
            视差滚动是一种网页设计技术，当用户滚动页面时，背景内容的移动速度比前景内容慢，创造出深度错觉。
          </p>
        </div>

        <div
          class="w-full max-w-2xl mb-64 text-center transition-all duration-200"
          :style="heading2Style"
        >
          <h3 class="text-4xl font-bold mb-4">
            多层次动画
          </h3>
          <p class="text-xl opacity-80">
            通过将页面元素分成移动速度不同的层，可以创建出引人入胜的深度感和沉浸式体验。
          </p>
        </div>

        <div
          class="w-full max-w-2xl mb-64 text-center transition-all duration-200"
          :style="heading3Style"
        >
          <h3 class="text-4xl font-bold mb-4">
            滚动变换
          </h3>
          <p class="text-xl opacity-80">
            使用滚动位置计算，我们可以将滚动位置映射到任何CSS属性，实现各种令人惊叹的效果。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 自定义滚动条样式 */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>
