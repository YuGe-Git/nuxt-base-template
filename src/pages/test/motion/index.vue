<script setup lang="ts">
import BasicAnimation from '@/components/motion/BasicAnimation.vue'
import ColorAnimation from '@/components/motion/ColorAnimation.vue'
import DragAnimation from '@/components/motion/DragAnimation.vue'
import FlipCardAnimation from '@/components/motion/FlipCardAnimation.vue'
import GestureAnimation from '@/components/motion/GestureAnimation.vue'
import LayoutAnimation from '@/components/motion/LayoutAnimation.vue'
import ParallaxAnimation from '@/components/motion/ParallaxAnimation.vue'
import ParallaxCards from '@/components/motion/ParallaxCards.vue'
import ScrollAnimation from '@/components/motion/ScrollAnimation.vue'
import ScrollLinkAnimation from '@/components/motion/ScrollLinkAnimation.vue'
import SequenceAnimation from '@/components/motion/SequenceAnimation.vue'
import TransformAnimation from '@/components/motion/TransformAnimation.vue'
import TypingAnimation from '@/components/motion/TypingAnimation.vue'
import VariantsAnimation from '@/components/motion/VariantsAnimation.vue'
import { computed, markRaw, onMounted, reactive, ref } from 'vue'

defineOptions({
  ssr: false, // 禁用服务器端渲染
})

// 当前激活的选项卡
const activeTab = ref('basic')
// 添加页面加载动画效果
const isLoading = ref(true)

// 所有可用的测试选项卡
const tabs = reactive([
  {
    key: 'basic',
    label: '基础动画',
    icon: 'hugeicons:play-square',
    description: '简单的元素显示/隐藏和过渡效果',
    component: markRaw(BasicAnimation),
  },
  {
    key: 'transform',
    label: '变形动画',
    icon: 'hugeicons:cube',
    description: '旋转、缩放、弹跳等常见的变形动画',
    component: markRaw(TransformAnimation),
  },
  {
    key: 'color',
    label: '颜色动画',
    icon: 'hugeicons:colors',
    description: '背景渐变和文字颜色过渡效果',
    component: markRaw(ColorAnimation),
  },
  {
    key: 'sequence',
    label: '序列动画',
    icon: 'hugeicons:sliders-horizontal',
    description: '按预定顺序逐步播放的动画效果',
    component: markRaw(SequenceAnimation),
  },
  {
    key: 'gesture',
    label: '手势动画',
    icon: 'hugeicons:cursor-01',
    description: '展示基于手势交互的复杂动画效果',
    component: markRaw(GestureAnimation),
  },
  {
    key: 'drag',
    label: '拖拽动画',
    icon: 'hugeicons:arrow-expand',
    description: '展示可拖拽元素的交互动画效果',
    component: markRaw(DragAnimation),
  },
  {
    key: 'scroll',
    label: '滚动动画',
    icon: 'hugeicons:scroll',
    description: '元素进入视口时触发的动画效果',
    component: markRaw(ScrollAnimation),
  },
  {
    key: 'variants',
    label: '变体动画',
    icon: 'hugeicons:structure-01',
    description: '使用预设的命名变体控制动画状态切换',
    component: markRaw(VariantsAnimation),
  },
  {
    key: 'layout',
    label: '布局动画',
    icon: 'hugeicons:layout-01',
    description: '列表和网格布局变化时的过渡动画',
    component: markRaw(LayoutAnimation),
  },
  {
    key: 'scrollLink',
    label: '滚动链接',
    icon: 'hugeicons:link-01',
    description: '与页面滚动位置直接关联的动画效果',
    component: markRaw(ScrollLinkAnimation),
  },
  {
    key: 'parallax',
    label: '视差效果',
    icon: 'hugeicons:layers-01',
    description: '创建深度感和沉浸式滚动体验的动画',
    component: markRaw(ParallaxAnimation),
  },
  {
    key: 'typing',
    label: '打字效果',
    icon: 'hugeicons:keyboard',
    description: '模拟真实打字的文本动画效果',
    component: markRaw(TypingAnimation),
  },
  {
    key: 'parallaxCards',
    label: '3D卡片',
    icon: 'hugeicons:material-and-texture',
    description: '具有视差效果的3D交互卡片',
    component: markRaw(ParallaxCards),
  },
  {
    key: 'flipCards',
    label: '翻转卡片',
    icon: 'hugeicons:rotate-01',
    description: '3D翻转卡片动画效果',
    component: markRaw(FlipCardAnimation),
  },
])

// 可选的过渡动画
const transitions = reactive([
  { name: 'fade', label: '淡入淡出' },
  { name: 'slide-left', label: '左侧滑入' },
  { name: 'slide-right', label: '右侧滑入' },
  { name: 'zoom', label: '缩放' },
  { name: 'none', label: '无动画' },
])
const currentTransition = ref('fade')

// 当前活动组件
const currentComponent = computed(() => {
  const tab = tabs.find(t => t.key === activeTab.value)
  return tab ? tab.component : null
})

// 当前选项卡信息
const currentTabInfo = computed(() => {
  return tabs.find(t => t.key === activeTab.value)
})

// 设置激活选项卡
function setActiveTab(tabId: string) {
  activeTab.value = tabId
}

// 设置动画过渡效果
function setTransition(name: string) {
  currentTransition.value = name
}

// 模拟页面加载
onMounted(() => {
  // 移除加载状态
  setTimeout(() => {
    isLoading.value = false
  }, 300)
})
</script>

<template>
  <div class="min-h-screen bg-base-100 transition-all duration-300 relative">
    <!-- 加载状态 -->
    <LoadingOverlay
      v-if="isLoading"
      loading-text="加载动画组件..."
    />

    <!-- 页面内容 -->
    <FadeInContent v-else :duration="0.5">
      <div class="p-4">
        <div class="container mx-auto">
          <!-- 顶部导航区域 -->
          <div class="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <BackToTestCenter />
          </div>

          <!-- 标题 -->
          <div class="text-center mb-8">
            <h1 class="text-3xl sm:text-4xl font-bold mb-2 flex items-center justify-center gap-3">
              <Icon name="hugeicons:gif-01" class="inline-block text-primary" />
              <span><span class="text-primary">动画测试</span></span>
            </h1>
            <p class="text-base-content/60 max-w-xl mx-auto">
              此页面展示了Motion for Vue的各种动画效果，可以点击下方标签切换不同类型的动画
            </p>
          </div>

          <!-- 过渡动画选择 -->
          <div class="flex justify-end mb-4">
            <div class="dropdown dropdown-end">
              <div tabindex="0" role="button" class="btn btn-sm btn-outline gap-2">
                <Icon name="hugeicons:exchange-01" />
                <span>过渡效果: {{ transitions.find(t => t.name === currentTransition)?.label }}</span>
              </div>
              <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52">
                <li v-for="transition in transitions" :key="transition.name">
                  <a :class="{ active: currentTransition === transition.name }" @click="setTransition(transition.name)">
                    {{ transition.label }}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <!-- 选项卡导航 -->
          <div class="tabs tabs-boxed justify-center mb-6 overflow-x-auto p-1 bg-base-200 rounded-box">
            <button
              v-for="tab in tabs"
              :key="tab.key"
              class="tab gap-2 transition-all duration-200"
              :class="[activeTab === tab.key ? 'tab-active' : '']"
              @click="setActiveTab(tab.key)"
            >
              <Icon :name="tab.icon" />
              <span class="hidden sm:inline">{{ tab.label }}</span>
              <span class="inline sm:hidden">{{ tab.label.slice(0, 2) }}</span>
            </button>
          </div>

          <!-- 当前选项卡描述 -->
          <div class="alert bg-base-200 mb-6">
            <Icon v-if="currentTabInfo" :name="currentTabInfo.icon" />
            <span>{{ currentTabInfo?.description }}</span>
          </div>

          <!-- 选项卡内容区域 -->
          <div class="card bg-base-200 shadow-xl border border-base-300 transition-all duration-300">
            <div class="card-body">
              <!-- 动画组件展示区域 -->
              <ClientOnly>
                <Transition :name="currentTransition === 'none' ? '' : currentTransition" mode="out-in">
                  <component :is="currentComponent" :key="activeTab" />
                </Transition>
              </ClientOnly>
            </div>
          </div>

          <!-- 页脚 -->
          <div class="mt-10 text-center text-base-content/50 text-sm">
            <p>基于 Motion-v 动画库构建</p>
            <p class="mt-1">
              适用于 Nuxt 3 的动画展示
            </p>
          </div>

          <!-- 页面状态 -->
          <PageStatus
            page-path="/test/motion"
            last-edited="2024-07-01 08:30:00"
          />
        </div>
      </div>
    </FadeInContent>
  </div>
</template>

<style scoped>
/* 淡入淡出过渡 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 左侧滑入过渡 */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-left-enter-from {
  transform: translateX(-20px);
  opacity: 0;
}

.slide-left-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

/* 右侧滑入过渡 */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-right-enter-from {
  transform: translateX(20px);
  opacity: 0;
}

.slide-right-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

/* 缩放过渡 */
.zoom-enter-active,
.zoom-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.zoom-enter-from,
.zoom-leave-to {
  transform: scale(0.95);
  opacity: 0;
}
</style>
