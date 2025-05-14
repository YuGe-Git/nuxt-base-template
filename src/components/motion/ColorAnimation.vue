<script setup lang="ts">
import { computed, onUnmounted, ref } from 'vue'

const hueRotate = ref(0)
const isAnimatingText = ref(true)

// 使用色相旋转实现连续颜色变化
const filterStyle = computed(() => {
  return `hue-rotate(${hueRotate.value}deg)`
})

// 自动更新色相旋转角度
let animationFrameId: number | null = null
function animateHue() {
  if (isAnimatingText.value) {
    hueRotate.value = (hueRotate.value + 1) % 360
    animationFrameId = requestAnimationFrame(animateHue)
  }
}

if (typeof window !== 'undefined') {
  animateHue() // 开始动画
}

onUnmounted(() => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
  }
})

function toggleTextAnimation() {
  isAnimatingText.value = !isAnimatingText.value
  if (isAnimatingText.value) {
    animateHue() // 重新开始动画
  }
  else if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
  }
}

// --- 背景渐变部分 ---
const gradientPos = ref(0)
const isPulsingBg = ref(true)
const gradientAngle = computed(() => `${gradientPos.value % 360}deg`)

if (typeof window !== 'undefined') {
  setInterval(() => {
    if (isPulsingBg.value) {
      gradientPos.value = (gradientPos.value + 1) % 360
    }
  }, 50)
}

function toggleBgPulsing() {
  isPulsingBg.value = !isPulsingBg.value
}
</script>

<template>
  <section>
    <h2 class="text-2xl font-semibold mb-4">
      颜色动画
    </h2>

    <div class="space-y-6">
      <!-- 渐变背景动画 -->
      <div>
        <h3 class="text-xl mb-2">
          渐变背景
        </h3>
        <div
          class="w-64 h-64 rounded-lg shadow-md flex items-center justify-center overflow-hidden relative"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 animate-hue-rotate" />
          <div
            class="absolute inset-0 transition-opacity duration-500"
            :style="{
              background: `linear-gradient(${gradientAngle},
                rgba(255, 107, 107, 0.8),
                rgba(254, 202, 87, 0.8),
                rgba(72, 219, 251, 0.8),
                rgba(29, 209, 161, 0.8),
                rgba(95, 39, 205, 0.8),
                rgba(255, 107, 107, 0.8))`,
              backgroundSize: '200% 200%',
              opacity: isPulsingBg ? 1 : 0,
            }"
          />
          <button
            class="relative z-10 bg-white/30 backdrop-blur-sm px-4 py-2 rounded text-white shadow hover:bg-white/40"
            @click="toggleBgPulsing"
          >
            {{ isPulsingBg ? '叠加层: 开' : '叠加层: 关' }}
          </button>
        </div>
      </div>

      <!-- 文字颜色动画 -->
      <div>
        <h3 class="text-xl mb-2">
          文字颜色
        </h3>
        <div class="flex items-center gap-4">
          <div
            class="text-4xl font-bold bg-gradient-to-r from-lime-400 via-emerald-500 to-cyan-500 bg-clip-text text-transparent"
            :style="{ filter: filterStyle }"
          >
            炫彩文字
          </div>
          <button
            class="btn btn-xs btn-outline"
            @click="toggleTextAnimation"
          >
            {{ isAnimatingText ? '暂停' : '播放' }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes hue-rotate {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}

.animate-hue-rotate {
  animation: hue-rotate 10s linear infinite;
}
</style>
