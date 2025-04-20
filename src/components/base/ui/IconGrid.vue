<script setup>
import { ref } from 'vue'

defineProps({
  icons: {
    type: Array,
    required: true,
  },
  gridCols: {
    type: String,
    default: 'grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10',
  },
  iconSize: {
    type: String,
    default: 'text-xl',
  },
})

const selectedIcon = ref(null)

function copyIconName(iconName) {
  navigator.clipboard.writeText(`hugeicons:${iconName}`)
  selectedIcon.value = iconName
  setTimeout(() => {
    selectedIcon.value = null
  }, 2000)
}
</script>

<template>
  <div :class="`grid ${gridCols} gap-3`">
    <div
      v-for="icon in icons"
      :key="icon"
      class="flex flex-col items-center p-3 bg-base-100 rounded-md hover:bg-base-300 cursor-pointer transition-all hover:shadow-md"
      @click="copyIconName(icon)"
    >
      <div :class="`${iconSize} mb-2 icon-container`">
        <Icon :name="`hugeicons:${icon}`" />
      </div>
      <div class="text-xs text-center opacity-70 truncate w-full">
        {{ icon }}
      </div>
      <div v-if="selectedIcon === icon" class="badge badge-success mt-1 badge-sm animate-pulse">
        已复制!
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-container {
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
