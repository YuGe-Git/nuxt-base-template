<script setup lang="ts">
// 定义基本的props接口
defineProps({
  mode: {
    type: String as () => 'wait' | 'popLayout' | 'sync' | undefined,
    default: undefined,
  },
})
</script>

<template>
  <!-- 直接使用Vue内置的transition-group代替AnimatePresence -->
  <transition-group :mode="mode === 'wait' ? 'out-in' : undefined">
    <slot />
  </transition-group>
</template>
