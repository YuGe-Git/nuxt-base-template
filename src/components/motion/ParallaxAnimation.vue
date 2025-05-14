<script setup lang="ts">
import { motion, useScroll, useTransform } from 'motion-v'
import { onMounted, ref } from 'vue'

defineOptions({
  ssr: false, // 禁用服务器端渲染
})

// 获取容器元素
const containerRef = ref<HTMLElement | null>(null)
const contentHeight = ref(1000) // 默认内容高度

// 滚动监听
const { scrollY } = useScroll({
  container: containerRef,
  offset: ['start', 'end'],
})

// 创建用于视差效果的变换值
const backgroundY = useTransform(
  scrollY,
  [0, contentHeight.value],
  ['0%', '20%'],
)

const midgroundY = useTransform(
  scrollY,
  [0, contentHeight.value],
  ['0%', '40%'],
)

const foregroundY = useTransform(
  scrollY,
  [0, contentHeight.value],
  ['0%', '60%'],
)

// 文本淡入淡出和移动效果
const heading1Opacity = useTransform(
  scrollY,
  [0, 200, 400],
  [0, 1, 0],
)

const heading1Y = useTransform(
  scrollY,
  [0, 200, 400],
  ['50px', '0px', '-50px'],
)

const heading2Opacity = useTransform(
  scrollY,
  [200, 400, 600],
  [0, 1, 0],
)

const heading2Y = useTransform(
  scrollY,
  [200, 400, 600],
  ['50px', '0px', '-50px'],
)

const heading3Opacity = useTransform(
  scrollY,
  [400, 600, 800],
  [0, 1, 0],
)

const heading3Y = useTransform(
  scrollY,
  [400, 600, 800],
  ['50px', '0px', '-50px'],
)

// 更新容器高度
onMounted(() => {
  if (containerRef.value) {
    contentHeight.value = containerRef.value.scrollHeight
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
      <motion
        class="absolute inset-0 w-full h-full"
        :style="{ y: backgroundY }"
      >
        <div class="absolute inset-0">
          <div class="absolute top-[10%] left-[20%] w-24 h-24 rounded-full bg-blue-500 opacity-20" />
          <div class="absolute top-[30%] right-[15%] w-32 h-32 rounded-full bg-indigo-500 opacity-20" />
          <div class="absolute bottom-[25%] left-[40%] w-48 h-48 rounded-full bg-purple-500 opacity-20" />
        </div>
      </motion>

      <!-- 中景层 (中速) -->
      <motion
        class="absolute inset-0 w-full h-full"
        :style="{ y: midgroundY }"
      >
        <div class="absolute inset-0">
          <div class="absolute top-[15%] left-[30%] w-16 h-16 rounded-full bg-blue-500 opacity-40" />
          <div class="absolute top-[50%] right-[25%] w-20 h-20 rounded-full bg-indigo-500 opacity-40" />
          <div class="absolute bottom-[20%] left-[15%] w-32 h-32 rounded-full bg-purple-500 opacity-40" />
        </div>
      </motion>

      <!-- 前景层 (最快) -->
      <motion
        class="absolute inset-0 w-full h-full pointer-events-none"
        :style="{ y: foregroundY }"
      >
        <div class="absolute inset-0">
          <div class="absolute top-[20%] left-[50%] w-10 h-10 rounded-full bg-blue-500 opacity-60" />
          <div class="absolute top-[40%] right-[30%] w-12 h-12 rounded-full bg-indigo-500 opacity-60" />
          <div class="absolute bottom-[30%] left-[25%] w-16 h-16 rounded-full bg-purple-500 opacity-60" />
        </div>
      </motion>

      <!-- 文本内容 -->
      <div class="relative min-h-[1000px] flex flex-col items-center justify-start pt-36 px-8 text-white">
        <motion
          class="w-full max-w-2xl mb-64 text-center"
          :style="{ opacity: heading1Opacity, y: heading1Y }"
        >
          <h3 class="text-4xl font-bold mb-4">
            视差滚动效果
          </h3>
          <p class="text-xl opacity-80">
            视差滚动是一种网页设计技术，当用户滚动页面时，背景内容的移动速度比前景内容慢，创造出深度错觉。
          </p>
        </motion>

        <motion
          class="w-full max-w-2xl mb-64 text-center"
          :style="{ opacity: heading2Opacity, y: heading2Y }"
        >
          <h3 class="text-4xl font-bold mb-4">
            多层次动画
          </h3>
          <p class="text-xl opacity-80">
            通过将页面元素分成移动速度不同的层，可以创建出引人入胜的深度感和沉浸式体验。
          </p>
        </motion>

        <motion
          class="w-full max-w-2xl mb-64 text-center"
          :style="{ opacity: heading3Opacity, y: heading3Y }"
        >
          <h3 class="text-4xl font-bold mb-4">
            滚动变换
          </h3>
          <p class="text-xl opacity-80">
            使用Motion库的useTransform，我们可以将滚动位置映射到任何CSS属性，实现各种令人惊叹的效果。
          </p>
        </motion>
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
