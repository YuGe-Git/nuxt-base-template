<script setup>
// 目录树节点组件
defineProps({
  path: {
    type: String,
    required: true,
  },
  description: String,
  isFile: Boolean,
  indentLevel: Number,
})
</script>

<template>
  <div class="mb-2">
    <div class="flex items-center">
      <Icon
        :name="isFile ? 'hugeicons:legal-document-01' : 'hugeicons:structure-folder'"
        class="mr-1"
        :class="isFile ? 'text-base-content opacity-60' : 'text-primary'"
      />
      <span :class="{ 'font-semibold': !isFile }">{{ path }}</span>
      <span v-if="description" class="ml-2 text-xs opacity-60">{{ description }}</span>
    </div>
  </div>
</template>
