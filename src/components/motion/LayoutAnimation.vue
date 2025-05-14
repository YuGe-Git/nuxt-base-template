<script setup lang="ts">
import { motion } from 'motion-v'
import { ref } from 'vue'

interface Item {
  id: number
  color: string
  size: 'small' | 'medium' | 'large'
}

// 初始化项目列表
const items = ref<Item[]>([
  { id: 1, color: 'bg-red-500', size: 'small' },
  { id: 2, color: 'bg-blue-500', size: 'medium' },
  { id: 3, color: 'bg-green-500', size: 'large' },
  { id: 4, color: 'bg-yellow-500', size: 'small' },
  { id: 5, color: 'bg-purple-500', size: 'medium' },
  { id: 6, color: 'bg-pink-500', size: 'large' },
])

// 布局配置
const isCompact = ref(false)
const sortBy = ref<'id' | 'size' | 'color'>('id')

// 调整项目大小
function getSize(size: 'small' | 'medium' | 'large'): string {
  switch (size) {
    case 'small': return isCompact.value ? 'h-16 w-16' : 'h-20 w-20'
    case 'medium': return isCompact.value ? 'h-20 w-20' : 'h-28 w-28'
    case 'large': return isCompact.value ? 'h-24 w-24' : 'h-36 w-36'
  }
}

// 随机改变颜色和大小
function shuffleItems() {
  const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-cyan-500']
  const sizes = ['small', 'medium', 'large']

  items.value = items.value.map(item => ({
    ...item,
    color: colors[Math.floor(Math.random() * colors.length)],
    size: sizes[Math.floor(Math.random() * sizes.length)] as 'small' | 'medium' | 'large',
  }))
}

// 根据选择的属性排序项目
function sortItems() {
  if (sortBy.value === 'id') {
    items.value.sort((a, b) => a.id - b.id)
  }
  else if (sortBy.value === 'size') {
    const sizeOrder = { small: 1, medium: 2, large: 3 }
    items.value.sort((a, b) => sizeOrder[a.size] - sizeOrder[b.size])
  }
  else if (sortBy.value === 'color') {
    items.value.sort((a, b) => a.color.localeCompare(b.color))
  }
}

// 切换布局
function toggleLayout() {
  isCompact.value = !isCompact.value
}

// 更改排序方式
function changeSortBy(by: 'id' | 'size' | 'color') {
  sortBy.value = by
  sortItems()
}
</script>

<template>
  <section>
    <h2 class="text-2xl font-semibold mb-4">
      布局动画
    </h2>

    <div class="mb-4 flex flex-wrap gap-2">
      <button
        class="btn btn-sm bg-primary text-white"
        @click="toggleLayout"
      >
        {{ isCompact ? '扩展布局' : '紧凑布局' }}
      </button>

      <button
        class="btn btn-sm btn-outline"
        @click="shuffleItems"
      >
        随机属性
      </button>

      <div class="divider divider-horizontal" />

      <div class="flex items-center gap-2">
        <span class="text-sm">排序:</span>
        <div class="join">
          <button
            class="btn btn-xs join-item"
            :class="sortBy === 'id' ? 'btn-active' : ''"
            @click="changeSortBy('id')"
          >
            编号
          </button>
          <button
            class="btn btn-xs join-item"
            :class="sortBy === 'size' ? 'btn-active' : ''"
            @click="changeSortBy('size')"
          >
            大小
          </button>
          <button
            class="btn btn-xs join-item"
            :class="sortBy === 'color' ? 'btn-active' : ''"
            @click="changeSortBy('color')"
          >
            颜色
          </button>
        </div>
      </div>
    </div>

    <div class="mb-2 text-sm text-gray-500">
      点击上方按钮，观察元素如何平滑过渡到新位置和大小
    </div>

    <!-- 布局容器 -->
    <div
      class="p-4 bg-base-200 rounded-lg min-h-[300px] transition-all"
      :class="isCompact ? 'gap-2' : 'gap-4'"
    >
      <div class="flex flex-wrap justify-center gap-4">
        <motion.div
          v-for="item in items"
          :key="item.id"
          :layout="true"
          :layout-id="`item-${item.id}`"
          :transition="{ type: 'spring', stiffness: 300, damping: 30 }"
          class="rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-xl transition-colors" :class="[
            item.color,
            getSize(item.size),
          ]"
          :while-hover="{ scale: 1.05, boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }"
        >
          {{ item.id }}
        </motion.div>
      </div>
    </div>
  </section>
</template>
