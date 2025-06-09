<script setup lang="ts">
import { motion } from 'motion-v'
import { ref } from 'vue'

defineOptions({
  ssr: false, // 禁用服务器端渲染
})

const isVisible = ref(false)

function toggleVisibility() {
  isVisible.value = !isVisible.value
}
</script>

<template>
  <section>
    <h2 class="text-2xl font-semibold mb-4">
      基础动画
    </h2>
    <button
      class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-4"
      @click="toggleVisibility"
    >
      切换显示
    </button>

    <div v-if="isVisible" class="h-64 w-64 flex items-center justify-center">
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.8 }"
        :animate="{ opacity: 1, scale: 1 }"
        :exit="{ opacity: 0, scale: 0.8 }"
        :transition="{ type: 'spring', stiffness: 100 }"
        class="bg-gray-100 p-6 rounded-lg shadow-md w-full h-full flex items-center justify-center"
      >
        <p class="text-xl font-medium">
          我出现了！
        </p>
      </div>
    </div>
  </section>
</template>
