<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { allIcons } from '~/components/base/data/hugeicons'

// 页面初始加载状态
const pageLoading = ref(true)

// 搜索状态
const searchQuery = ref('')
const page = ref(1)
const perPage = 80 // 每页显示数量
const isLoading = ref(false) // 加载状态
const showTopButton = ref(false) // 显示返回顶部按钮

// 初始页面加载
onMounted(() => {
  // 页面加载完成后延迟移除加载状态
  setTimeout(() => {
    pageLoading.value = false
  }, 300)
})

// 根据搜索过滤图标
const filteredIcons = computed(() => {
  if (!searchQuery.value)
    return allIcons

  return allIcons.filter(icon =>
    icon.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})

// 当搜索条件变化时，重置页码
watch(searchQuery, () => {
  page.value = 1
  // 模拟加载效果
  simulateLoading()
})

// 分页显示的图标
const paginatedIcons = computed(() => {
  const start = (page.value - 1) * perPage
  const end = start + perPage
  return filteredIcons.value.slice(start, end)
})

// 总页数
const totalPages = computed(() => {
  return Math.ceil(filteredIcons.value.length / perPage)
})

// 页面导航
function prevPage() {
  if (page.value > 1) {
    page.value--
    scrollToTop()
    simulateLoading()
  }
}

function nextPage() {
  if (page.value < totalPages.value) {
    page.value++
    scrollToTop()
    simulateLoading()
  }
}

// 返回顶部
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// 模拟加载效果
function simulateLoading() {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 300)
}

// 监听滚动事件，显示/隐藏返回顶部按钮
if (typeof window !== 'undefined') {
  window.addEventListener('scroll', () => {
    showTopButton.value = window.scrollY > 300
  })
}
</script>

<template>
  <div class="bg-base-100 relative">
    <!-- 页面加载状态 -->
    <LoadingOverlay
      v-if="pageLoading"
      loading-text="加载图标库..."
    />

    <!-- 页面内容 -->
    <FadeInContent v-else>
      <div class="p-4 pb-8">
        <div class="container mx-auto">
          <!-- 导航返回 -->
          <div class="mb-6">
            <BackToTestCenter />
          </div>

          <!-- 标题 -->
          <h1 class="text-3xl font-bold text-center mb-6">
            <Icon name="hugeicons:image-01" class="text-4xl text-primary" />
            Hugeicons 图标测试
          </h1>
          <p class="text-center opacity-70 mb-8">
            本页面展示了Hugeicons图标库的图标，便于开发时参考使用
          </p>

          <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
            <!-- 使用说明 - 占1份 -->
            <div class="lg:col-span-1">
              <div class="card bg-base-200 shadow-md p-4 h-full sticky top-4">
                <h3 class="text-lg font-bold mb-4 flex items-center">
                  <Icon name="hugeicons:information-circle" class="mr-2 text-primary" />
                  使用方法
                </h3>
                <div class="mockup-code bg-base-300 text-base-content mb-4 text-sm">
                  <pre><code>&lt;Icon name="hugeicons:图标名称" /&gt;</code></pre>
                </div>
                <div class="text-sm mb-5 opacity-80">
                  点击图标可复制完整图标名称（包含前缀）
                </div>
                <div class="flex gap-2 flex-wrap">
                  <a
                    href="https://icon-sets.iconify.design/hugeicons/"
                    target="_blank"
                    class="btn btn-sm btn-outline"
                  >
                    <Icon name="hugeicons:link-01" class="mr-1" />
                    图标集
                  </a>
                  <a
                    href="https://hugeicons.com/icons"
                    target="_blank"
                    class="btn btn-sm btn-outline"
                  >
                    <Icon name="hugeicons:link-01" class="mr-1" />
                    官网
                  </a>
                </div>
              </div>
            </div>

            <!-- 图标展示卡片 - 占4份 -->
            <div class="lg:col-span-4">
              <!-- 搜索和统计 -->
              <div class="card bg-base-200 shadow-md p-4 mb-6">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div class="flex-1">
                    <IconSearch v-model="searchQuery" />
                  </div>
                  <div class="badge badge-lg badge-primary gap-1">
                    <Icon name="hugeicons:information-circle" />
                    共 {{ allIcons.length }} 个图标，显示 {{ filteredIcons.length }} 个
                  </div>
                </div>
              </div>

              <!-- 图标网格 -->
              <div class="card bg-base-200 shadow-md overflow-hidden">
                <div class="card-body p-4">
                  <h2 class="card-title text-lg mb-4">
                    {{ searchQuery ? '搜索结果' : '所有图标' }}
                    <div class="badge badge-primary">
                      {{ filteredIcons.length }}
                    </div>
                  </h2>

                  <!-- 图标内容区域 - 添加最小高度确保页面稳定 -->
                  <div class="icon-content-area">
                    <!-- 加载中状态 -->
                    <div v-if="isLoading" class="flex justify-center items-center h-[750px]">
                      <div class="loading loading-spinner loading-lg text-primary" />
                    </div>

                    <!-- 未找到结果提示 -->
                    <div v-else-if="filteredIcons.length === 0" class="alert alert-warning h-[750px] flex items-center justify-center">
                      <Icon name="hugeicons:information-square" />
                      <span>未找到匹配的图标，请尝试其他关键词</span>
                    </div>

                    <!-- 图标网格 -->
                    <div v-else class="icon-grid-container">
                      <IconGrid
                        :icons="paginatedIcons"
                        icon-size="text-xl"
                      />
                    </div>
                  </div>

                  <!-- 分页控制 -->
                  <IconPagination
                    :current-page="page"
                    :total-pages="totalPages"
                    @prev-page="prevPage"
                    @next-page="nextPage"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 返回顶部按钮 -->
        <button
          v-show="showTopButton"
          class="btn btn-circle btn-primary fixed bottom-4 right-4 z-50 shadow-lg back-to-top"
          @click="scrollToTop"
        >
          <Icon name="hugeicons:arrow-up-01" class="text-lg" />
        </button>

        <!-- 页脚 -->
        <div class="mt-10 text-center text-base-content/50 text-sm">
          <p>基于 @nuxt/icon v1.12.0 构建</p>
          <p class="mt-1">
            使用 @iconify-json/hugeicons v1.2.4 和 @iconify/json v2.2.329
          </p>
          <p class="mt-1">
            适用于 Nuxt 3 的图标展示
          </p>
        </div>

        <!-- 页面状态 -->
        <PageStatus
          page-path="/test/nuxt/icon"
          last-edited="2025-04-20 20:46:00"
        />
      </div>
    </FadeInContent>
  </div>
</template>

<style scoped>
/* 确保内容区域高度稳定 */
.icon-content-area {
  height: 750px; /* 固定高度而不是最小高度 */
  position: relative;
  overflow: hidden; /* 防止内容溢出 */
}

.icon-grid-container {
  height: 1000px;
  overflow-y: auto; /* 添加垂直滚动条 */
  transition: opacity 0.3s ease-in-out;
  padding-right: 4px; /* 为滚动条预留空间 */
}

/* 自定义滚动条样式 */
.icon-grid-container::-webkit-scrollbar {
  width: 6px;
}

.icon-grid-container::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}

.icon-grid-container::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.icon-grid-container::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.2);
}

.back-to-top {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>
