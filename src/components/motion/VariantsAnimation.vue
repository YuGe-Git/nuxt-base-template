<script setup lang="ts">
import { ref } from 'vue'

// 定义动画变体配置
const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
}

// 定义子项目变体
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  hover: { color: '#3498db' },
}

// 当前激活的变体
const currentVariant = ref('hidden')

// 切换变体
function setVariant(variant: string) {
  currentVariant.value = variant
}

// 示例数据
const items = [
  '变体动画允许定义多个命名的动画状态',
  '可以轻松在不同动画状态之间切换',
  '支持子元素动画的编排和统一控制',
  '可以创建复杂的联动动画效果',
]
</script>

<template>
  <div class="p-8">
    <h2 class="text-2xl font-bold mb-6">
      变体动画示例
    </h2>

    <!-- 变体控制按钮 -->
    <div class="flex flex-wrap gap-2 mb-6">
      <button
        class="btn btn-sm"
        :class="currentVariant === 'hidden' ? 'btn-primary' : 'btn-outline'"
        @click="setVariant('hidden')"
      >
        隐藏
      </button>
      <button
        class="btn btn-sm"
        :class="currentVariant === 'visible' ? 'btn-primary' : 'btn-outline'"
        @click="setVariant('visible')"
      >
        显示
      </button>
    </div>

    <!-- 主动画容器 -->
    <div
      v-motion
      class="p-6 bg-base-200 rounded-lg shadow-lg"
      :variants="variants"
      :animate="currentVariant"
    >
      <h3 class="text-xl font-semibold mb-4">
        变体动画特性
      </h3>

      <!-- 子项目列表，会从父元素继承变体状态 -->
      <ul v-motion class="space-y-3">
        <li
          v-for="(item, index) in items"
          :key="index"
          v-motion
          class="flex items-center p-3 bg-base-300 rounded"
          :variants="itemVariants"
          :custom="index"
          whileHover="hover"
          whileTap="tap"
        >
          <div
            v-motion
            class="w-2 h-2 bg-primary rounded-full mr-3"
            :initial="{ scale: 0 }"
            :animate="{ scale: 1 }"
            :transition="{ delay: index * 0.2 }"
          />
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
