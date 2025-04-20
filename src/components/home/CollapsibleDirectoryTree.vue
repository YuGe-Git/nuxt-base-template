<script setup>
// 可折叠目录树组件
import { ref } from 'vue'

// 通过name属性定义组件名称，使递归引用生效
defineOptions({
  name: 'CollapsibleDirectoryTree',
})

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

// 跟踪每个折叠项的状态
const openItems = ref({})

// 切换折叠状态
function toggleItem(key, event) {
  event.stopPropagation()
  openItems.value[key] = !openItems.value[key]
}

// 创建唯一键
function getItemKey(item, index) {
  return `${item.path}-${index}`
}

// 获取缩进类
function getIndentClass(level) {
  if (level === 0)
    return ''
  return `ml-${level * 4}`
}

// 获取文件图标
function getFileIcon(item) {
  if (item.isFile) {
    if (item.path.endsWith('.vue'))
      return 'hugeicons:code'
    if (item.path.endsWith('.ts') || item.path.endsWith('.js'))
      return 'hugeicons:javascript-language'
    if (item.path.endsWith('.md'))
      return 'hugeicons:legal-document-01'
    if (item.path.endsWith('.json'))
      return 'hugeicons:brackets-curly'
    return 'hugeicons:document-01'
  }
  return 'hugeicons:structure-folder'
}

// 获取图标颜色
function getIconColorClass(item) {
  if (item.isFile) {
    if (item.path.endsWith('.vue'))
      return 'text-success'
    if (item.path.endsWith('.ts') || item.path.endsWith('.js'))
      return 'text-warning'
    if (item.path.endsWith('.md'))
      return 'text-info'
    return 'text-base-content/70'
  }
  return 'text-primary'
}
</script>

<template>
  <div>
    <template v-for="(item, index) in items" :key="`dir-${level}-${index}`">
      <!-- 目录或文件项 -->
      <div :class="getIndentClass(level)">
        <!-- 对于有子项的目录，使用可折叠组件 -->
        <div
          v-if="!item.isFile && item.children && item.children.length > 0"
          class="collapse bg-base-100 border-base-300 rounded-md mb-2"
          :class="[
            { 'border': level > 0, 'border-0': level === 0 },
            openItems[getItemKey(item, index)] ? 'collapse-open' : '',
            level === 0 ? 'collapse-open' : 'collapse-arrow',
          ]"
          @click="toggleItem(getItemKey(item, index), $event)"
        >
          <div class="collapse-title py-2 px-3 font-mono text-sm flex items-center gap-2">
            <Icon
              :name="getFileIcon(item)"
              class="w-4 h-4"
              :class="getIconColorClass(item)"
            />
            <span class="font-semibold">{{ item.path }}</span>
            <span v-if="item.description" class="text-xs opacity-60 font-normal">{{ item.description }}</span>
          </div>
          <div class="collapse-content pb-1 pt-0" @click.stop>
            <!-- 递归渲染子目录 -->
            <CollapsibleDirectoryTree
              :items="item.children"
              :level="level + 1"
            />
          </div>
        </div>

        <!-- 对于文件或无子项的目录，显示普通项 -->
        <div
          v-else
          class="flex items-center py-2 px-3 mb-2 font-mono text-sm"
          :class="{ 'bg-base-100 rounded-md': level > 0 }"
        >
          <Icon
            :name="getFileIcon(item)"
            class="w-4 h-4 mr-2"
            :class="getIconColorClass(item)"
          />
          <span :class="{ 'font-semibold': !item.isFile }">{{ item.path }}</span>
          <span v-if="item.description" class="ml-2 text-xs opacity-60">{{ item.description }}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
/* 自定义缩进类 */
.ml-4 {
  margin-left: 1rem;
}
.ml-8 {
  margin-left: 2rem;
}
.ml-12 {
  margin-left: 3rem;
}
.ml-16 {
  margin-left: 4rem;
}
.ml-20 {
  margin-left: 5rem;
}

/* 改进折叠组件样式 */
.collapse-title {
  min-height: auto;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.collapse-arrow .collapse-title:after {
  top: 1rem;
  right: 1.2rem;
  width: 0.75rem;
  height: 0.75rem;
}

.collapse {
  transition: box-shadow 0.2s;
}

.collapse:focus {
  box-shadow: 0 0 0 1px var(--fallback-p, oklch(var(--p)/0.2));
}
</style>
