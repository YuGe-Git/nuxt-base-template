<script setup>
import DirectoryTreeItem from './DirectoryTreeItem.vue'

// 定义属性
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  level: {
    type: Number,
    default: 0,
  },
})

// 缩进级别映射 - 修改缩进逻辑
const indentMap = {
  0: '', // 根级别无缩进
  1: 'ml-6', // 第一级
  2: 'ml-12', // 第二级
  3: 'ml-18', // 第三级
  4: 'ml-24', // 第四级
}

// 获取缩进类
function getIndentClass(level, path) {
  // 特殊处理根级别的"nuxt-base-template/"
  if (level === 0 && path === 'nuxt-base-template/') {
    return 'root-level'
  }
  return indentMap[level] || 'ml-24'
}
</script>

<template>
  <div>
    <template v-for="(item, index) in items" :key="`dir-${level}-${index}`">
      <!-- 当前目录项 -->
      <div :id="`dir-${level}-${index}`" :class="getIndentClass(level, item.path)">
        <DirectoryTreeItem
          :path="item.path"
          :description="item.description"
          :is-file="item.isFile"
        />
      </div>

      <!-- 递归渲染子目录 -->
      <DirectoryTree
        v-if="item.children && item.children.length > 0"
        :items="item.children"
        :level="level + 1"
      />
    </template>
  </div>
</template>

<style scoped>
/* 自定义缩进类 */
.ml-18 {
  margin-left: 4.5rem;
}
.ml-24 {
  margin-left: 6rem;
}
.root-level {
  margin-left: 0;
  padding-left: 0;
}
</style>
