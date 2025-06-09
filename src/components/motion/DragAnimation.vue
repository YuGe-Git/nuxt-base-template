<script setup lang="ts">
import { motion } from 'motion-v'
import { ref } from 'vue'

defineOptions({
  ssr: false, // 禁用服务器端渲染
})

// 拖拽状态
const isDragging = ref(false)
const position = ref({ x: 0, y: 0 })

// 卡片属性
const cardRotate = ref(0)
const cardShadow = ref('0px 5px 10px rgba(0, 0, 0, 0.1)')

// 监听拖拽状态
function onDragStart() {
  isDragging.value = true
}

function onDragEnd() {
  isDragging.value = false
  // 复位旋转角度
  cardRotate.value = 0
  cardShadow.value = '0px 5px 10px rgba(0, 0, 0, 0.1)'
}

// 拖拽中更新信息
function onDrag(event: any) {
  position.value = {
    x: event.x,
    y: event.y,
  }

  // 根据拖拽方向设置卡片旋转
  if (event.delta.x !== 0) {
    cardRotate.value = event.delta.x * 0.1
    cardShadow.value = `${event.delta.x > 0 ? '-' : ''}5px 10px 15px rgba(0, 0, 0, 0.2)`
  }
}
</script>

<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-6">
      拖拽动画示例
    </h2>

    <!-- 拖拽交互区域 -->
    <div class="flex justify-center items-center min-h-[300px] py-6 relative">
      <!-- 提示文本 -->
      <div
        v-if="!isDragging"
        class="absolute text-base-content/70 pointer-events-none flex items-center justify-center w-full h-full"
      >
        <div class="flex flex-col items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
          </svg>
          <span>点击并拖拽下方卡片</span>
        </div>
      </div>

      <!-- 拖拽卡片 -->
      <div 
        v-motion
        :drag="true"
        :drag-momentum="false"
        @dragstart="onDragStart"
        @drag="onDrag"
        @dragend="onDragEnd"
        :animate="{ rotate: cardRotate }"
        :style="{ boxShadow: cardShadow }"
        class="bg-white p-6 rounded-lg shadow-md w-64 h-48 flex items-center justify-center text-center cursor-move border border-gray-200"
      >
        <div class="space-y-2">
          <h3 class="text-xl font-semibold">可拖拽卡片</h3>
          <p class="text-sm text-gray-500">拖拽我来感受动画效果</p>
          <div v-if="isDragging" class="text-xs text-blue-500 mt-2">
            位置: X:{{ Math.round(position.x) }}, Y:{{ Math.round(position.y) }}
          </div>
        </div>
      </div>
    </div>

    <!-- 拖拽状态信息 -->
    <div v-if="isDragging" class="mt-8 p-4 bg-blue-50 rounded-lg">
      <div class="text-center text-blue-600 font-medium">
        当前正在拖拽
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
</style>
