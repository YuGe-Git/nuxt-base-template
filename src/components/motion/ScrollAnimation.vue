<script setup lang="ts">
import { onMounted, ref } from 'vue'

const items = ref([
  { id: 1, visible: false },
  { id: 2, visible: false },
  { id: 3, visible: false },
  { id: 4, visible: false },
])

// 使用Intersection Observer实现滚动动画
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = Number(entry.target.getAttribute('data-id'))
        const item = items.value.find(i => i.id === id)
        if (item) {
          setTimeout(() => {
            item.visible = true
          }, id * 150)
        }
      }
    })
  }, { threshold: 0.2 })

  // 观察所有滚动元素
  setTimeout(() => {
    document.querySelectorAll('.scroll-item').forEach((el) => {
      observer.observe(el)
    })
  }, 100)
})
</script>

<template>
  <section>
    <h2 class="text-2xl font-semibold mb-4">
      滚动动画
    </h2>
    <div class="space-y-4">
      <div
        v-for="item in items"
        :key="item.id"
        :data-id="item.id"
        class="scroll-item bg-green-100 p-6 rounded-lg shadow-md transition-all duration-500"
        :class="item.visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'"
      >
        <p class="text-lg">
          滚动元素 {{ item.id }}
        </p>
      </div>
    </div>

    <div class="mt-8 text-sm text-gray-500">
      向下滚动查看更多动画效果
    </div>
  </section>
</template>
