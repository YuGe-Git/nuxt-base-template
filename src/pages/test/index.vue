<script setup lang="ts">
import { onMounted, ref } from 'vue'

// 测试页面配置
const testPages = [
  {
    title: '组件测试',
    description: 'DaisyUI组件和主题展示',
    path: '/test/daisyui',
    icon: 'hugeicons:legal-document-01',
    badge: 'UI 组件',
    color: 'bg-gradient-to-r from-indigo-500 to-purple-500',
  },
  {
    title: '图标测试',
    description: 'Hugeicons图标库展示',
    path: '/test/nuxt/icon',
    icon: 'hugeicons:image-01',
    badge: '4386个图标',
    color: 'bg-gradient-to-r from-blue-500 to-cyan-500',
  },
]

// 页面加载动画效果
const isLoading = ref(true)
const hoveredCard = ref('')

// 模拟页面加载
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 300)
})

function setHoveredCard(path: string) {
  hoveredCard.value = path
}

function clearHoveredCard() {
  hoveredCard.value = ''
}
</script>

<template>
  <div class="min-h-screen bg-base-100 transition-all duration-300">
    <!-- 加载状态 -->
    <LoadingOverlay
      v-if="isLoading"
      loading-text="加载测试中心..."
    />

    <!-- 页面内容 -->
    <FadeInContent v-else :duration="0.6">
      <div class="p-6">
        <div class="container mx-auto max-w-4xl">
          <!-- 导航返回 -->
          <div class="mb-6">
            <NuxtLink to="/" class="btn btn-outline btn-sm gap-2 glass transition-all hover:scale-105">
              <Icon name="hugeicons:arrow-left-01" />
              返回首页
            </NuxtLink>
          </div>

          <!-- 标题区 -->
          <div class="text-center mb-10">
            <h1 class="text-4xl font-bold mb-3 flex items-center justify-center">
              <Icon name="hugeicons:test-tube-01" class="text-primary text-3xl mr-3" />
              测试页面中心
            </h1>
            <p class="text-base-content/70 max-w-xl mx-auto">
              选择以下任一模块进行功能测试和展示
            </p>
            <div class="divider max-w-md mx-auto" />
          </div>

          <!-- 测试页面卡片 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <NuxtLink
              v-for="page in testPages"
              :key="page.path"
              :to="page.path"
              class="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-base-300"
              :class="{ 'transform translate-y-[-5px]': hoveredCard === page.path }"
              @mouseenter="setHoveredCard(page.path)"
              @mouseleave="clearHoveredCard()"
            >
              <!-- 卡片顶部装饰条 -->
              <div class="h-2 w-full" :class="page.color" />

              <div class="card-body">
                <div class="flex justify-between items-start">
                  <h2 class="card-title text-xl group">
                    <Icon :name="page.icon" class="mr-2 text-primary group-hover:animate-pulse" />
                    {{ page.title }}
                  </h2>
                  <div class="badge badge-sm" :class="page.color.includes('indigo') ? 'badge-primary' : 'badge-secondary'">
                    {{ page.badge }}
                  </div>
                </div>

                <p class="opacity-70 mt-2 mb-4">
                  {{ page.description }}
                </p>

                <div class="card-actions justify-end mt-auto">
                  <button class="btn btn-sm bg-base-100 gap-2">
                    查看
                    <Icon
                      name="hugeicons:arrow-right-01"
                      class="transition-transform duration-300"
                      :class="{ 'translate-x-1': hoveredCard === page.path }"
                    />
                  </button>
                </div>
              </div>
            </NuxtLink>
          </div>

          <!-- 页脚 -->
          <div class="text-center mt-16 opacity-70 text-sm">
            <p>测试中心 · Nuxt Base Template</p>
          </div>
        </div>
      </div>
    </FadeInContent>
  </div>
</template>

<style scoped>
.btn-outline:hover {
  box-shadow: 0 0 10px rgba(var(--p), 0.3);
}
</style>
