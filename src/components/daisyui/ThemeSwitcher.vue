<script setup lang="ts">
import { computed, onMounted, ref } from '#imports'

// 主题分类
const themeCategories = {
  light: ['light', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'lemonade'],
  dark: ['dark', 'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'forest', 'aqua', 'black', 'luxury', 'dracula', 'night', 'coffee'],
  colorful: ['pastel', 'fantasy', 'wireframe', 'cmyk', 'autumn', 'business', 'acid', 'winter', 'garden', 'lofi'],
}

// 定义分类类型
type ThemeCategory = 'light' | 'dark' | 'colorful' | ''

// 初始化当前主题
const currentTheme = ref(localStorage.getItem('theme') || 'light')

// 计算当前主题所属分类
const currentCategory = computed(() => {
  if (themeCategories.light.includes(currentTheme.value))
    return 'light'
  if (themeCategories.dark.includes(currentTheme.value))
    return 'dark'
  return 'colorful'
})

// 当前显示的分类
const activeCategory = ref<ThemeCategory>('')

// 切换分类显示
function setActiveCategory(category: ThemeCategory) {
  activeCategory.value = activeCategory.value === category ? '' : category
}

// 切换主题
function setTheme(theme: string) {
  currentTheme.value = theme

  // 设置文档主题
  if (typeof window !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme)
    // 保存到本地存储
    localStorage.setItem('theme', theme)
  }
}

// 在组件挂载时设置主题
onMounted(() => {
  setTheme(currentTheme.value)
  // 默认显示当前主题所属的分类
  activeCategory.value = currentCategory.value as ThemeCategory
})
</script>

<template>
  <div class="dropdown dropdown-end">
    <!-- 触发按钮 -->
    <label tabindex="0" class="btn btn-ghost m-1 gap-2">
      <Icon name="hugeicons:paint-brush-01" />
      <span class="hidden sm:inline">主题</span>
      <span
        class="badge badge-sm" :class="{
          'badge-primary': currentCategory === 'light',
          'badge-secondary': currentCategory === 'dark',
          'badge-accent': currentCategory === 'colorful',
        }"
      >{{ currentTheme }}</span>
    </label>

    <!-- 下拉内容 -->
    <div tabindex="0" class="dropdown-content z-[1] shadow bg-base-200 rounded-box p-3 w-72">
      <!-- 分类选项卡 -->
      <div class="tabs tabs-boxed mb-3">
        <button
          class="tab flex-1 gap-1"
          :class="activeCategory === 'light' ? 'tab-active' : ''"
          @click="setActiveCategory('light')"
        >
          <Icon name="hugeicons:sun-01" class="text-sm" />
          明亮
        </button>
        <button
          class="tab flex-1 gap-1"
          :class="activeCategory === 'dark' ? 'tab-active' : ''"
          @click="setActiveCategory('dark')"
        >
          <Icon name="hugeicons:moon-01" class="text-sm" />
          暗黑
        </button>
        <button
          class="tab flex-1 gap-1"
          :class="activeCategory === 'colorful' ? 'tab-active' : ''"
          @click="setActiveCategory('colorful')"
        >
          <Icon name="hugeicons:color" class="text-sm" />
          彩色
        </button>
      </div>

      <!-- 主题网格 - 明亮主题 -->
      <div v-if="activeCategory === 'light'" class="grid grid-cols-3 gap-2">
        <button
          v-for="theme in themeCategories.light"
          :key="theme"
          class="btn btn-sm h-auto flex-col py-2 gap-1 border"
          :class="currentTheme === theme ? 'btn-primary' : 'btn-ghost'"
          @click="setTheme(theme)"
        >
          <div class="w-full h-4 rounded bg-base-100 border" :data-theme="theme" />
          <span class="capitalize text-xs">{{ theme }}</span>
        </button>
      </div>

      <!-- 主题网格 - 暗黑主题 -->
      <div v-if="activeCategory === 'dark'" class="grid grid-cols-3 gap-2">
        <button
          v-for="theme in themeCategories.dark"
          :key="theme"
          class="btn btn-sm h-auto flex-col py-2 gap-1 border"
          :class="currentTheme === theme ? 'btn-primary' : 'btn-ghost'"
          @click="setTheme(theme)"
        >
          <div class="w-full h-4 rounded bg-base-100 border" :data-theme="theme" />
          <span class="capitalize text-xs">{{ theme }}</span>
        </button>
      </div>

      <!-- 主题网格 - 彩色主题 -->
      <div v-if="activeCategory === 'colorful'" class="grid grid-cols-3 gap-2">
        <button
          v-for="theme in themeCategories.colorful"
          :key="theme"
          class="btn btn-sm h-auto flex-col py-2 gap-1 border"
          :class="currentTheme === theme ? 'btn-primary' : 'btn-ghost'"
          @click="setTheme(theme)"
        >
          <div class="w-full h-4 rounded bg-base-100 border" :data-theme="theme" />
          <span class="capitalize text-xs">{{ theme }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
