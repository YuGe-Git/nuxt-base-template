<script setup lang="ts">
// 当前激活的选项卡
const activeTab = ref('buttons')
// 添加页面加载动画效果
const isLoading = ref(true)

// 所有可用的测试选项卡
const tabs = [
  { id: 'buttons', label: '按钮组件', icon: 'hugeicons:square-01', description: '展示各种按钮样式、状态和尺寸的示例' },
  { id: 'cards', label: '卡片组件', icon: 'hugeicons:credit-card', description: '展示各种卡片布局和样式的示例' },
  { id: 'forms', label: '表单组件', icon: 'hugeicons:inbox', description: '展示输入框、选择器等表单元素的示例' },
  { id: 'alerts', label: '提示组件', icon: 'hugeicons:notification-01', description: '展示各种警告、成功、错误等提示组件' },
  { id: 'modals', label: '模态框', icon: 'hugeicons:information-square', description: '展示不同类型和尺寸的模态对话框' },
]

// 设置激活选项卡
function setActiveTab(tabId: string) {
  activeTab.value = tabId
}

// 模拟页面加载
onMounted(() => {
  // 0.8秒后移除加载状态
  setTimeout(() => {
    isLoading.value = false
  }, 800)
})
</script>

<template>
  <div class="min-h-screen bg-base-100 transition-all duration-300 relative">
    <!-- 加载状态 -->
    <div v-if="isLoading" class="fixed inset-0 flex flex-col items-center justify-center bg-base-100 z-50">
      <div class="loading loading-spinner loading-lg text-primary" />
      <p class="mt-4 text-base-content/70">
        加载组件库...
      </p>
    </div>

    <!-- 页面内容 -->
    <div v-else class="p-4 animate-fade-in">
      <div class="container mx-auto">
        <!-- 顶部导航区域 -->
        <div class="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <BackToTestCenter />

          <!-- 主题切换器 -->
          <ThemeSwitcher />
        </div>

        <!-- 标题 -->
        <div class="text-center mb-8">
          <h1 class="text-3xl sm:text-4xl font-bold mb-2 flex items-center justify-center gap-3">
            <Icon name="hugeicons:workflow-square-01" class="inline-block text-primary" />
            <span> <span class="text-primary">组件测试</span></span>
          </h1>
          <p class="text-base-content/60 max-w-xl mx-auto">
            探索组件库的丰富功能，测试不同主题下的组件效果和交互
          </p>
        </div>

        <!-- 选项卡导航 -->
        <div class="tabs tabs-boxed justify-center mb-6 overflow-x-auto p-1 bg-base-200 rounded-box">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            class="tab gap-2 transition-all duration-200"
            :class="[activeTab === tab.id ? 'tab-active' : '']"
            @click="setActiveTab(tab.id)"
          >
            <Icon :name="tab.icon" />
            <span class="hidden sm:inline">{{ tab.label }}</span>
            <span class="inline sm:hidden">{{ tab.label.slice(0, 2) }}</span>
          </button>
        </div>

        <!-- 当前选项卡描述 -->
        <div class="alert bg-base-200 mb-6">
          <Icon :name="tabs.find(t => t.id === activeTab)?.icon" />
          <span>{{ tabs.find(t => t.id === activeTab)?.description }}</span>
        </div>

        <!-- 选项卡内容区域 -->
        <div class="card bg-base-200 shadow-xl border border-base-300 transition-all duration-300">
          <div class="card-body">
            <!-- 不同组件测试内容 -->
            <Transition name="fade" mode="out-in">
              <ButtonsTest v-if="activeTab === 'buttons'" />
              <CardsTest v-else-if="activeTab === 'cards'" />
              <FormsTest v-else-if="activeTab === 'forms'" />
              <AlertsTest v-else-if="activeTab === 'alerts'" />
              <ModalsTest v-else-if="activeTab === 'modals'" />
            </Transition>
          </div>
        </div>

        <!-- 页脚 -->
        <div class="mt-10 text-center text-base-content/50 text-sm">
          <p>基于  v5.0.27 和 Tailwind CSS v4.1.4 构建</p>
          <p class="mt-1">
            适用于 Nuxt 3 的组件展示
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
