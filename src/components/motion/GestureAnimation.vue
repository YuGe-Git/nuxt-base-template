<script setup lang="ts">
import { ref } from 'vue'

const scale = ref(1)
const rotation = ref(0)

function onHoverStart() {
  scale.value = 1.1
}

function onHoverEnd() {
  scale.value = 1
}

function onTapStart() {
  scale.value = 0.95
  rotation.value = Math.random() * 10 - 5
}

function onTapEnd() {
  scale.value = 1
  setTimeout(() => {
    rotation.value = 0
  }, 300)
}
</script>

<template>
  <section>
    <h2 class="text-2xl font-semibold mb-4">
      手势动画
    </h2>
    <div class="space-y-6">
      <!-- 基础手势 -->
      <div
        class="bg-purple-100 p-6 rounded-lg shadow-md w-64 h-64 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <p class="text-xl font-medium">
          悬停和点击我
        </p>
      </div>

      <!-- 高级手势 -->
      <div
        class="bg-indigo-100 p-6 rounded-lg shadow-md w-64 h-64 flex items-center justify-center cursor-pointer transition-all duration-300"
        :style="{
          transform: `scale(${scale}) rotate(${rotation}deg)`,
        }"
        @mouseenter="onHoverStart"
        @mouseleave="onHoverEnd"
        @mousedown="onTapStart"
        @mouseup="onTapEnd"
        @touchstart="onTapStart"
        @touchend="onTapEnd"
      >
        <p class="text-xl font-medium">
          高级手势效果
        </p>
      </div>
    </div>
  </section>
</template>
