<script setup lang="ts">
import { onMounted, ref } from 'vue'

// 页面加载状态
const pageLoading = ref(true)

// 初始页面加载
onMounted(() => {
  // 页面加载完成后延迟移除加载状态
  setTimeout(() => {
    pageLoading.value = false
  }, 300)
})
</script>

<template>
  <div class="relative">
    <!-- 页面加载状态 -->
    <LoadingOverlay
      v-if="pageLoading"
      loading-text="加载首页内容..."
    />

    <!-- 页面内容 -->
    <FadeInContent v-else>
      <InfoIndex />
    </FadeInContent>
  </div>
</template>

<style scoped>
/* 首页 */
</style>
