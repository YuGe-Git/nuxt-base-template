<script setup>
// 通用加载动画覆盖层组件
defineProps({
  // 加载提示文本
  loadingText: {
    type: String,
    default: '加载中...',
  },
  // 图标尺寸，支持lg、md、sm
  spinnerSize: {
    type: String,
    default: 'lg',
  },
  // 是否显示文本
  showText: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div class="loading-overlay fixed inset-0 flex flex-col items-center justify-center bg-base-100 z-50">
    <div :class="`loading loading-spinner loading-${spinnerSize} text-primary`" />
    <p v-if="showText" class="mt-4 text-base-content/70">
      {{ loadingText }}
    </p>
  </div>
</template>

<style scoped>
.loading-overlay {
  animation: fadeIn 0.2s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
