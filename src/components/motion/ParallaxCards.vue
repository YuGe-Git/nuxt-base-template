<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from 'vue'

defineOptions({
  ssr: false, // 禁用服务器端渲染
})

// 卡片数据
const cards = reactive([
  {
    id: 1,
    title: '3D卡片效果',
    description: '移动鼠标查看视差效果',
    color: 'bg-gradient-to-br from-pink-500 to-orange-400',
    icon: 'hugeicons:design-01',
  },
  {
    id: 2,
    title: '层叠视差',
    description: '不同层次以不同速度移动',
    color: 'bg-gradient-to-br from-blue-500 to-purple-500',
    icon: 'hugeicons:layers-01',
  },
  {
    id: 3,
    title: '动感交互',
    description: '鼠标悬停时有额外效果',
    color: 'bg-gradient-to-br from-green-500 to-cyan-400',
    icon: 'hugeicons:cursor-01',
  },
])

// 鼠标位置
const mouseX = ref(0)
const mouseY = ref(0)
const windowWidth = ref(0)
const windowHeight = ref(0)

// 活跃的卡片
const activeCardIndex = ref(-1)

// 跟踪鼠标位置
function handleMouseMove(e: MouseEvent) {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
}

// 计算卡片旋转角度
function getCardRotation(cardIndex: number) {
  if (windowWidth.value === 0 || windowHeight.value === 0) {
    return 'transform: rotateX(0deg) rotateY(0deg) translateZ(0px)'
  }

  // 根据鼠标位置计算旋转角度
  const cardOffset = (cardIndex - 1) * 100
  const relativeX = (mouseX.value - cardOffset) / windowWidth.value
  const relativeY = mouseY.value / windowHeight.value

  // 最大旋转角度为10度
  const rotateY = (relativeX - 0.5) * 20
  const rotateX = (0.5 - relativeY) * 20
  const translateZ = 10 + cardIndex * 5

  return `transform: rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`
}

// 获取鼠标位置与元素的距离，用于发光效果
function getGlowPosition(cardIndex: number) {
  // 使用鼠标相对位置创建发光效果
  const card = document.querySelector(`.card-${cardIndex}`)
  if (!card) {
    return 'background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 80%)'
  }

  const rect = card.getBoundingClientRect()
  const x = mouseX.value - rect.left
  const y = mouseY.value - rect.top

  const percentX = Math.max(0, Math.min(100, (x / rect.width) * 100))
  const percentY = Math.max(0, Math.min(100, (y / rect.height) * 100))

  return `background: radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 80%)`
}

// 设置窗口大小
function updateWindowSize() {
  windowWidth.value = window.innerWidth
  windowHeight.value = window.innerHeight
}

// 设置活跃卡片
function setActiveCard(index: number) {
  activeCardIndex.value = index
}

// 清除活跃卡片
function clearActiveCard() {
  activeCardIndex.value = -1
}

// 获取装饰元素样式
function getDecorStyle1() {
  return `transform: translateX(${(mouseX.value / windowWidth.value) * -15}px) translateY(${(mouseY.value / windowHeight.value) * -15}px)`
}

function getDecorStyle2() {
  return `transform: translateX(${(mouseX.value / windowWidth.value) * 10}px) translateY(${(mouseY.value / windowHeight.value) * 10}px)`
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('resize', updateWindowSize)
  updateWindowSize()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('resize', updateWindowSize)
})
</script>

<template>
  <section>
    <h2 class="text-2xl font-semibold mb-4">
      3D视差卡片
    </h2>

    <div class="flex flex-wrap justify-center gap-6 mb-6">
      <div
        v-for="(card, index) in cards"
        :key="card.id"
        :class="`card-${index}`"
        class="card-parallax relative w-72 h-72 rounded-xl overflow-hidden cursor-pointer shadow-xl transition-all duration-300"
        :style="getCardRotation(index)"
        @mouseenter="setActiveCard(index)"
        @mouseleave="clearActiveCard()"
      >
        <!-- 卡片背景 -->
        <div
          class="absolute inset-0 w-full h-full p-6 flex flex-col justify-between"
          :class="card.color"
        >
          <!-- 发光效果层 -->
          <div
            class="absolute inset-0 opacity-0 hover:opacity-40 transition-opacity duration-300 bg-white mix-blend-overlay"
            :style="getGlowPosition(index)"
          />

          <!-- 卡片内容层 -->
          <div class="flex justify-between items-start z-10">
            <h3 class="text-2xl font-bold text-white">
              {{ card.title }}
            </h3>
            <div class="p-2 bg-white/25 rounded-full backdrop-blur-sm">
              <Icon :name="card.icon" class="text-white w-6 h-6" />
            </div>
          </div>

          <div class="z-10">
            <p class="text-white/85 mb-4">
              {{ card.description }}
            </p>
            <div
              class="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full inline-block"
            >
              <span class="text-white text-sm font-medium">卡片 #{{ card.id }}</span>
            </div>
          </div>
        </div>

        <!-- 装饰元素 -->
        <div
          class="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm z-0 transition-transform duration-300 ease-out"
          :style="getDecorStyle1()"
        />
        <div
          class="absolute -left-5 -bottom-5 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm z-0 transition-transform duration-300 ease-out"
          :style="getDecorStyle2()"
        />
      </div>
    </div>

    <div class="text-center text-gray-500 text-sm">
      移动鼠标体验3D视差效果，悬停卡片查看更多交互
    </div>
  </section>
</template>

<style scoped>
.card-parallax {
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: transform 0.3s ease-out;
}

.card-parallax:hover {
  transform: scale(1.05) translateZ(30px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.card-parallax {
  animation: fadeIn 0.3s ease-out forwards;
}
</style>
