<script setup>
import { computed, ref } from 'vue'
import { allIcons } from '~/components/base/data/hugeicons'

// 搜索状态
const searchQuery = ref('')
const page = ref(1)
const perPage = 80 // 增加每页显示数量以充分利用空间

// 根据搜索过滤图标
const filteredIcons = computed(() => {
  if (!searchQuery.value)
    return allIcons

  return allIcons.filter(icon =>
    icon.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
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
  }
}

function nextPage() {
  if (page.value < totalPages.value) {
    page.value++
    scrollToTop()
  }
}

// 切换页面时滚动到顶部
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="bg-base-100 p-4 pb-8">
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
          <div class="card bg-base-200 shadow-md">
            <div class="card-body p-4">
              <h2 class="card-title text-lg mb-4">
                {{ searchQuery ? '搜索结果' : '所有图标' }}
                <div class="badge badge-primary">
                  {{ filteredIcons.length }}
                </div>
              </h2>

              <!-- 未找到结果提示 -->
              <div v-if="filteredIcons.length === 0" class="alert alert-warning">
                <Icon name="hugeicons:information-square" />
                <span>未找到匹配的图标，请尝试其他关键词</span>
              </div>

              <!-- 图标网格 -->
              <IconGrid
                v-if="filteredIcons.length > 0"
                :icons="paginatedIcons"
                icon-size="text-xl"
              />

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
  </div>
</template>

<style scoped>
</style>
