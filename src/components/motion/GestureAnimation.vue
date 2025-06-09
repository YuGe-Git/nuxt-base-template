<script setup lang="ts">
import { motion } from 'motion-v'
import { reactive, ref } from 'vue'

defineOptions({
  ssr: false, // 禁用服务器端渲染
})

// 3D卡片状态
const cardRotateX = ref(0)
const cardRotateY = ref(0)
const cardScale = ref(1)

// 拖动状态
const isDragging = ref(false)

// 跟踪点
const trailPoints = reactive<Array<{ id: number, x: number, y: number }>>([])
const maxTrailPoints = 10
let pointCounter = 0

// 拖动方块列表
const blocks = reactive([
  { id: 1, color: 'bg-blue-500' },
  { id: 2, color: 'bg-red-500' },
  { id: 3, color: 'bg-green-500' },
  { id: 4, color: 'bg-purple-500' },
])

function onDrag(event: any) {
  // 添加轨迹点
  if (isDragging.value) {
    pointCounter++
    const newPoint = {
      id: pointCounter,
      x: event.x,
      y: event.y,
    }

    trailPoints.unshift(newPoint)

    // 限制轨迹点数量
    if (trailPoints.length > maxTrailPoints) {
      trailPoints.pop()
    }
  }

  // 更新卡片旋转角度
  const centerX = window.innerWidth / 2
  const centerY = window.innerHeight / 3

  cardRotateX.value = ((event.y - centerY) / 10) * -1
  cardRotateY.value = (event.x - centerX) / 10
  cardScale.value = isDragging.value ? 0.95 : 1
}

function startDrag() {
  isDragging.value = true
}

function endDrag() {
  isDragging.value = false
  // 重置卡片旋转
  cardRotateX.value = 0
  cardRotateY.value = 0
  cardScale.value = 1
}
</script>

<template>
  <section>
    <h2 class="text-2xl font-semibold mb-4">
      手势和拖拽动画
    </h2>

    <div class="mb-6 space-y-2">
      <div class="text-sm text-gray-500">
        拖拽下方彩色方块体验拖拽交互，或拖动中心元素查看跟随效果和3D卡片效果
      </div>

      <!-- 拖拽区域 -->
      <div class="w-full h-[60vh] bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg relative overflow-hidden">
        <!-- 3D卡片 -->
        <div class="absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2 perspective-1000 w-64 h-80">
          <div
            v-motion
            :initial="{ rotateX: 0, rotateY: 0, scale: 1 }"
            :style="{
              rotateX: `${cardRotateX}deg`,
              rotateY: `${cardRotateY}deg`,
              scale: cardScale,
            }"
            class="w-full h-full bg-white shadow-xl rounded-xl overflow-hidden border-2 border-gray-200"
          >
            <div class="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white p-4 text-center">
              <div>
                <div class="text-2xl font-bold mb-2">
                  手势交互卡片
                </div>
                <div class="text-sm opacity-80">
                  使用Motion-v实现3D旋转效果
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 跟踪点效果 -->
        <div
          v-for="(point, i) in trailPoints"
          :key="point.id"
          v-motion
          :initial="{ opacity: 1, scale: 1 }"
          :animate="{ opacity: 1 - (i * 0.1), scale: 1 - (i * 0.05) }"
          :transition="{ duration: 0.5 }"
          class="absolute rounded-full bg-blue-500"
          :style="{
            left: `${point.x}px`,
            top: `${point.y}px`,
            width: '12px',
            height: '12px',
            transform: 'translate(-50%, -50%)',
            zIndex: maxTrailPoints - i,
          }"
        ></div>

        <!-- 中心拖拽元素 -->
        <div
          v-motion
          :drag="true"
          :drag-momentum="false"
          :while-hover="{ scale: 1.2 }"
          :while-tap="{ scale: 0.9 }"
          class="absolute left-1/2 top-1/2 w-12 h-12 bg-blue-600 rounded-full cursor-move flex items-center justify-center text-white font-bold z-50"
          style="transform: translate(-50%, -50%);"
          @dragstart="startDrag"
          @drag="onDrag"
          @dragend="endDrag"
        >
          拖我
        </div>

        <!-- 自由拖拽区块 -->
        <div class="absolute bottom-8 right-8 space-y-4">
          <div class="text-sm font-medium text-gray-600 mb-2">
            可拖动区块：
          </div>
          <div class="flex flex-wrap gap-4">
            <div
              v-for="block in blocks"
              :key="block.id"
              v-motion
              :drag="true"
              :drag-momentum="false"
              :while-hover="{ scale: 1.1 }"
              :while-drag="{ scale: 0.95, zIndex: 50 }"
              class="w-16 h-16 rounded-md cursor-move flex items-center justify-center text-white shadow-md"
              :class="[block.color]"
            >
              {{ block.id }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
</style>
