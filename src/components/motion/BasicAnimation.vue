<script setup lang="ts">
import { ref } from 'vue'

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

    <div
      v-if="isVisible"
      class="bg-gray-100 p-6 rounded-lg shadow-md w-64 h-64 flex items-center justify-center transition-all duration-300"
      :style="{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.8)',
      }"
    >
      <p class="text-xl font-medium">
        我出现了！
      </p>
    </div>
  </section>
</template>
