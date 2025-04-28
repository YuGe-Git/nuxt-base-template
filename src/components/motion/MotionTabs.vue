<script setup lang="ts">
import type { Component } from 'vue'
import { defineEmits, defineProps } from 'vue'
import BasicAnimation from '~/components/motion/BasicAnimation.vue'
import ColorAnimation from '~/components/motion/ColorAnimation.vue'
import GestureAnimation from '~/components/motion/GestureAnimation.vue'
import ScrollAnimation from '~/components/motion/ScrollAnimation.vue'
import SequenceAnimation from '~/components/motion/SequenceAnimation.vue'
import TransformAnimation from '~/components/motion/TransformAnimation.vue'

interface Tab {
  id: string
  label: string
  icon: string
  description: string
  component: Component
}

interface TransitionOption {
  name: string
  label: string
}

// Props 和 Emits 定义
const props = defineProps<{
  activeTab: string
  transitionName: string
}>()

const emit = defineEmits<{
  'update:activeTab': [tabId: string]
  'update:transitionName': [name: string]
}>()

// 所有可用的动画测试选项卡
const tabs: Tab[] = [
  { id: 'basic', label: '基础动画', icon: 'hugeicons:play-square', description: '简单的元素显示/隐藏和过渡效果', component: BasicAnimation },
  { id: 'gesture', label: '手势动画', icon: 'hugeicons:cursor-click-02', description: '响应悬停、点击等用户交互的动画', component: GestureAnimation },
  { id: 'transform', label: '变形动画', icon: 'hugeicons:square-rotation', description: '旋转、缩放、弹跳等常见的变形动画', component: TransformAnimation },
  { id: 'color', label: '颜色动画', icon: 'hugeicons:color-palette', description: '背景渐变和文字颜色过渡效果', component: ColorAnimation },
  { id: 'sequence', label: '序列动画', icon: 'hugeicons:slider-02', description: '按预定顺序逐步播放的动画效果', component: SequenceAnimation },
  { id: 'scroll', label: '滚动动画', icon: 'hugeicons:scroll', description: '元素进入视口时触发的动画效果', component: ScrollAnimation },
]

// 可选的过渡动画
const transitions: TransitionOption[] = [
  { name: 'fade', label: '淡入淡出' },
  { name: 'slide-left', label: '左侧滑入' },
  { name: 'slide-right', label: '右侧滑入' },
  { name: 'zoom-in', label: '放大进入' },
  { name: 'zoom-out', label: '缩小进入' },
]

// 设置激活选项卡
function setActiveTab(tabId: string) {
  emit('update:activeTab', tabId)
}

function handleTransitionChange(event: Event) {
  const target = event.target as HTMLSelectElement
  emit('update:transitionName', target.value)
}

const currentTab = computed(() => tabs.find(t => t.id === props.activeTab))
</script>

<template>
  <div>
    <!-- 过渡动画选择 -->
    <div class="mb-6 flex justify-end items-center">
      <div class="flex items-center gap-2">
        <label for="transition-select" class="text-sm font-medium">切换动画:</label>
        <select
          id="transition-select"
          :value="props.transitionName"
          class="select select-bordered select-sm"
          @change="handleTransitionChange"
        >
          <option v-for="t in transitions" :key="t.name" :value="t.name">
            {{ t.label }}
          </option>
        </select>
      </div>
    </div>

    <!-- 选项卡导航 -->
    <div class="tabs tabs-boxed justify-center mb-6 overflow-x-auto p-1 bg-base-200 rounded-box">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="tab gap-2 transition-all duration-200"
        :class="[props.activeTab === tab.id ? 'tab-active' : '']"
        @click="setActiveTab(tab.id)"
      >
        <Icon :name="tab.icon" />
        <span class="hidden sm:inline">{{ tab.label }}</span>
        <span class="inline sm:hidden">{{ tab.label.slice(0, 2) }}</span>
      </button>
    </div>

    <!-- 当前选项卡描述 -->
    <div v-if="currentTab" class="alert bg-base-200 mb-6">
      <Icon :name="currentTab.icon" />
      <span>{{ currentTab.description }}</span>
    </div>
  </div>
</template>
