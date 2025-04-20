<script setup lang="ts">
// 目录结构组件
import DirectoryStructure from './DirectoryStructure.vue'
</script>

<template>
  <div class="mb-12">
    <h2 class="text-2xl font-bold mb-6 text-base-content flex items-center">
      <Icon name="hugeicons:structure-01" class="mr-2 text-primary" />
      目录结构
    </h2>

    <DirectoryStructure />
  </div>
</template>

<style scoped>
.ml-18 {
  margin-left: 4.5rem;
}
</style>
