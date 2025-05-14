<script setup lang="ts">
import { nextTick, ref } from 'vue'

const steps = [
  { id: 1, text: '第一步', visible: false },
  { id: 2, text: '第二步', visible: false },
  { id: 3, text: '第三步', visible: false },
  { id: 4, text: '第四步', visible: false },
]

const isPlaying = ref(false)
const staggerDelayMs = 150
const transitionDurationMs = 500

async function startSequence() {
  if (isPlaying.value)
    return

  isPlaying.value = true

  steps.forEach((step) => {
    step.visible = false
  })

  await nextTick()

  steps.forEach((step) => {
    step.visible = true
  })

  const totalDuration = (steps.length - 1) * staggerDelayMs + transitionDurationMs + 100
  setTimeout(() => {
    isPlaying.value = false
  }, totalDuration)
}
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
        {{ isPlaying ? '播放中...' : '播放序列' }}
      </button>
    </div>

    <div class="space-y-3 max-w-md">
      <div
        v-for="(step, index) in steps"
        :key="step.id"
        class="flex items-center bg-white p-4 rounded-lg shadow-md transition-all border-l-4"
        :style="{
          transitionDuration: `${transitionDurationMs}ms`,
          transitionDelay: `${index * staggerDelayMs}ms`,
        }"
        :class="{
          'opacity-100 translate-x-0 border-green-500': step.visible,
          'opacity-30 -translate-x-4 border-gray-200': !step.visible,
        }"
      >
        <div
          class="w-8 h-8 rounded-full flex items-center justify-center mr-4 transition-colors"
          :style="{
            transitionDuration: `${transitionDurationMs}ms`,
            transitionDelay: `${index * staggerDelayMs}ms`,
          }"
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
