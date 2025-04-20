<script setup>
import { directories } from './directoryData'
import DirectoryTree from './DirectoryTree.vue'
</script>

<template>
  <div class="card bg-base-200 shadow-md hover:shadow-lg transition-all duration-300">
    <div class="card-body">
      <p class="mb-6 opacity-80">
        项目采用模块化的目录结构，遵循Nuxt 3的最佳实践，方便组织和管理大型应用。
      </p>

      <!-- 目录结构树 -->
      <div class="bg-base-300 p-4 rounded-lg mb-6 overflow-x-auto">
        <div class="font-mono text-sm">
          <DirectoryTree :items="directories" />
        </div>
      </div>

      <div class="alert bg-base-300 border-l-4 border-secondary">
        <div class="flex items-center gap-3">
          <Icon name="hugeicons:information-circle" class="text-secondary" />
          <span>遵循<strong>单一职责原则</strong>，一个文件只做一件事，使代码更易于维护和测试。</span>
        </div>
      </div>
    </div>
  </div>
</template>
