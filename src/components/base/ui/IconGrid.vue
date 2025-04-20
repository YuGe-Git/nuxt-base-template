<script setup>
import { onBeforeUpdate, ref } from 'vue'

defineProps({
  icons: {
    type: Array,
    required: true,
  },
  gridCols: {
    type: String,
    default: 'grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10',
  },
  iconSize: {
    type: String,
    default: 'text-xl',
  },
})

const selectedIcon = ref(null)
const animatingItems = ref([])

// 在更新前重置动画状态
onBeforeUpdate(() => {
  animatingItems.value = []
})

function copyIconName(iconName) {
  navigator.clipboard.writeText(`hugeicons:${iconName}`)
  selectedIcon.value = iconName
  setTimeout(() => {
    selectedIcon.value = null
  }, 2000)
}

// 生成随机延迟，使图标按顺序出现
function getAnimationDelay(index) {
  const baseDelay = Math.min(index * 10, 500) // 最大延迟500ms
  return `${baseDelay}ms`
}

// 记录正在动画的项目
function onAnimationStart(index) {
  animatingItems.value.push(index)
}

// 移除已完成动画的项目
function onAnimationEnd(index) {
  const itemIndex = animatingItems.value.indexOf(index)
  if (itemIndex !== -1) {
    animatingItems.value.splice(itemIndex, 1)
  }
}
</script>

<template>
  <div :class="`grid ${gridCols} gap-3`">
    <div
      v-for="(icon, index) in icons"
      :key="icon"
      class="icon-card flex flex-col items-center p-3 bg-base-100 rounded-md hover:bg-base-300 cursor-pointer transition-all hover:shadow-md"
      :style="{ animationDelay: getAnimationDelay(index) }"
      @click="copyIconName(icon)"
      @animationstart="onAnimationStart(index)"
      @animationend="onAnimationEnd(index)"
    >
      <div :class="`${iconSize} mb-2 icon-container`">
        <Icon :name="`hugeicons:${icon}`" />
      </div>
      <div class="text-xs text-center opacity-70 truncate w-full">
        {{ icon }}
      </div>
      <div
        v-if="selectedIcon === icon"
        class="badge badge-success mt-1 badge-sm copy-badge"
      >
        已复制!
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-container {
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-card {
  animation: fade-in-up 0.3s ease-out forwards;
  opacity: 0;
  transform: translateY(10px);
}

.copy-badge {
  animation: pulse 1s ease-in-out infinite;
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}
</style>
