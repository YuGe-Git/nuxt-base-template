<script setup>
import { computed, ref } from 'vue'
import { allIcons } from '~/components/base/data/hugeicons'

// 搜索状态
const searchQuery = ref('')
const page = ref(1)
const perPage = 48 // 增加每页显示数量

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
  }
}

function nextPage() {
  if (page.value < totalPages.value) {
    page.value++
  }
}
</script>

<template>
  <div class="min-h-screen bg-base-100 p-4">
    <div class="container mx-auto">
      <!-- 导航返回 -->
      <div class="mb-4">
        <BaseUiBackToTestCenter />
      </div>

      <!-- 标题 -->
      <h1 class="text-3xl font-bold text-center mb-4">
        <Icon name="hugeicons:image-01" class="text-4xl" />
        Hugeicons 图标测试
      </h1>
      <p class="text-center opacity-70 mb-4">
        本页面展示了Hugeicons图标库的图标，便于开发时参考使用
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
        <!-- 使用说明 - 占1份 -->
        <div class="lg:col-span-1">
          <div class="card bg-base-200 shadow p-4 h-full">
            <h3 class="text-lg font-bold mb-2 flex items-center">
              <Icon name="hugeicons:information-circle" class="mr-2" />
              使用方法
            </h3>
            <div class="mockup-code bg-base-300 text-base-content mb-2 text-sm">
              <pre><code>&lt;Icon name="hugeicons:图标名称" /&gt;</code></pre>
            </div>
            <div class="text-sm mb-3">
              点击图标可复制完整图标名称（包含前缀）
            </div>
            <div class="flex gap-2 flex-wrap">
              <a
                href="https://icon-sets.iconify.design/hugeicons/"
                target="_blank"
                class="btn btn-xs"
              >
                <Icon name="hugeicons:link-01" class="mr-1" />
                图标集
              </a>
              <a
                href="https://hugeicons.com/icons"
                target="_blank"
                class="btn btn-xs"
              >
                <Icon name="hugeicons:link-01" class="mr-1" />
                官网
              </a>
            </div>
          </div>
        </div>

        <!-- 图标展示卡片 - 占3份 -->
        <div class="lg:col-span-3">
          <!-- 搜索和统计 -->
          <div class="card bg-base-200 shadow p-4 mb-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div class="flex-1">
                <BaseUiIconSearch v-model="searchQuery" />
              </div>
              <div class="badge badge-lg">
                共 {{ allIcons.length }} 个图标，显示 {{ filteredIcons.length }} 个
              </div>
            </div>
          </div>

          <!-- 图标网格 -->
          <div class="card bg-base-200 shadow">
            <div class="card-body p-4">
              <h2 class="card-title text-lg">
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
              <BaseUiIconGrid
                v-if="filteredIcons.length > 0"
                :icons="paginatedIcons"
                icon-size="text-xl"
              />

              <!-- 分页控制 -->
              <BaseUiIconPagination
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
