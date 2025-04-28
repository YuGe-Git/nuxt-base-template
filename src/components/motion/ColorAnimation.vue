<script setup lang="ts">
import { computed, ref } from 'vue'

const gradientPos = ref(0)
const isPulsing = ref(true)

// 计算渐变角度
const gradientAngle = computed(() => {
  return `${gradientPos.value % 360}deg`
})

// 自动更新渐变位置
if (typeof window !== 'undefined') {
  setInterval(() => {
    if (isPulsing.value) {
      gradientPos.value = (gradientPos.value + 1) % 360
    }
  }, 50)
}

function togglePulsing() {
  isPulsing.value = !isPulsing.value
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
          class="w-64 h-64 rounded-lg shadow-md flex items-center justify-center overflow-hidden"
          :style="{
            background: `linear-gradient(${gradientAngle},
              #ff6b6b, #feca57, #48dbfb, #1dd1a1, #5f27cd, #ff6b6b)`,
            backgroundSize: '400% 400%',
          }"
        >
          <button
            class="bg-white/30 backdrop-blur-sm px-4 py-2 rounded text-white shadow hover:bg-white/40"
            @click="togglePulsing"
          >
            {{ isPulsing ? '暂停' : '播放' }}
          </button>
        </div>
      </div>

      <!-- 文字颜色动画 -->
      <div>
        <h3 class="text-xl mb-2">
          文字颜色
        </h3>
        <div
          class="text-transparent bg-clip-text text-4xl font-bold inline-block"
          :style="{
            background: `linear-gradient(${gradientAngle},
              #ff6b6b, #feca57, #48dbfb, #1dd1a1, #5f27cd, #ff6b6b)`,
            backgroundSize: '400% 400%',
          }"
        >
          炫彩文字
        </div>
      </div>
    </div>
  </section>
</template>
