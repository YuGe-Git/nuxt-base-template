<script setup lang="ts">
/**
 * 页面状态组件 - 显示页面最后编辑时间和开发状态
 */
defineProps({
  // 页面路径，用于在不同页面显示不同的编辑时间
  pagePath: {
    type: String,
    required: true,
  },
  // 最后编辑时间，格式：YYYY-MM-DD，如果不提供则显示当前日期
  lastEdited: {
    type: String,
    default: () => new Date().toISOString().split('T')[0],
  },
  // 是否显示开发中状态
  showDevStatus: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div class="page-status mt-12 pt-6 border-t border-base-300">
    <div class="text-xs text-base-content/50 flex flex-col sm:flex-row justify-between items-center gap-3">
      <!-- 开发状态提示 -->
      <div v-if="showDevStatus" class="dev-status flex items-center">
        <span class="relative flex h-2 w-2 mr-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning opacity-75" />
          <span class="relative inline-flex rounded-full h-2 w-2 bg-warning" />
        </span>
        <span>此页面正在开发中，内容和功能可能会有变动</span>
      </div>

      <!-- 编辑时间信息 -->
      <div class="edit-time flex items-center">
        <Icon name="hugeicons:edit-04" class="w-3 h-3 mr-1 opacity-70" />
        <span>最后更新: {{ lastEdited }}</span>
      </div>
    </div>

    <!-- 反馈链接 -->
    <div v-if="showDevStatus" class="text-xs text-right mt-1">
      <a
        href="https://github.com/YuGe-Git/nuxt-base-template/issues"
        target="_blank"
        class="text-primary hover:underline flex items-center justify-end"
      >
        <Icon name="hugeicons:message-circle-02" class="w-3 h-3 mr-1" />
        <span>反馈问题或建议</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.page-status {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
</style>
