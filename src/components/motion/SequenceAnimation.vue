<script setup lang="ts">
import { onMounted, ref } from 'vue'

const steps = [
  { id: 1, text: '第一步', visible: false },
  { id: 2, text: '第二步', visible: false },
  { id: 3, text: '第三步', visible: false },
  { id: 4, text: '第四步', visible: false },
]

const isPlaying = ref(false)
const currentStep = ref(0)
const intervalId = ref<number | null>(null)

function startSequence() {
  if (isPlaying.value)
    return

  isPlaying.value = true
  currentStep.value = 0

  // 重置所有步骤
  steps.forEach((step) => {
    step.visible = false
  })

  // 开始动画序列
  intervalId.value = window.setInterval(() => {
    if (currentStep.value < steps.length) {
      steps[currentStep.value].visible = true
      currentStep.value++
    }
    else {
      stopSequence()
    }
  }, 800)
}

function stopSequence() {
  if (intervalId.value !== null) {
    clearInterval(intervalId.value)
    intervalId.value = null
  }
  isPlaying.value = false
}

// 组件卸载时清除定时器
onMounted(() => {
  return () => {
    if (intervalId.value !== null) {
      clearInterval(intervalId.value)
    }
  }
})
</script>

<template>
  <section>
    <h2 class="text-2xl font-semibold mb-4">
      序列动画
    </h2>

    <div class="mb-4">
      <button
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="isPlaying"
        @click="startSequence"
      >
        播放序列
      </button>
    </div>

    <div class="space-y-3 max-w-md">
      <div
        v-for="step in steps"
        :key="step.id"
        class="flex items-center bg-white p-4 rounded-lg shadow-md transition-all duration-500 border-l-4"
        :class="{
          'opacity-100 translate-x-0 border-green-500': step.visible,
          'opacity-30 -translate-x-4 border-gray-200': !step.visible,
        }"
      >
        <div
          class="w-8 h-8 rounded-full flex items-center justify-center mr-4 transition-colors duration-500"
          :class="step.visible ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'"
        >
          {{ step.id }}
        </div>
        <div class="text-lg">
          {{ step.text }}
        </div>
      </div>
    </div>
  </section>
</template>
