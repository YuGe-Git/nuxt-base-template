<script setup>
// 内容淡入动画包装组件
defineProps({
  // 动画延迟时间（毫秒）
  delay: {
    type: Number,
    default: 0,
  },
  // 动画持续时间（秒）
  duration: {
    type: Number,
    default: 0.45,
  },
})
</script>

<template>
  <div
    class="animate-fade-in"
    :style="{
      '--animation-delay': `${delay}ms`,
      '--animation-duration': `${duration}s`,
    }"
  >
    <slot />
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn var(--animation-duration, 0.6s) ease-out;
  animation-delay: var(--animation-delay, 0ms);
  animation-fill-mode: both;
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
</style>
