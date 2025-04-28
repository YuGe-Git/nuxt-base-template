<script setup lang="ts">
import { ref } from 'vue'

type AnimationName = 'rotate' | 'pulse' | 'bounce' | 'ping'

const isPlaying = ref(true)
const currentAnimation = ref<AnimationName>('rotate')

const animations: Record<AnimationName, string> = {
  rotate: 'animate-spin',
  pulse: 'animate-pulse',
  bounce: 'animate-bounce',
  ping: 'animate-ping',
}

function toggleAnimation() {
  isPlaying.value = !isPlaying.value
}

function changeAnimation(animation: AnimationName) {
  currentAnimation.value = animation
}
</script>

<template>
  <section>
    <h2 class="text-2xl font-semibold mb-4">
      变形动画
    </h2>

    <!-- 动画控制 -->
    <div class="mb-6 flex space-x-2">
      <button
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        @click="toggleAnimation"
      >
        {{ isPlaying ? '暂停' : '播放' }}
      </button>

      <div class="flex space-x-2">
        <button
          v-for="(_, name) in animations"
          :key="name"
          class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          :class="{ 'bg-gray-400': currentAnimation === name }"
          @click="changeAnimation(name)"
        >
          {{ name }}
        </button>
      </div>
    </div>

    <!-- 动画展示区 -->
    <div
      class="bg-amber-100 p-6 rounded-lg shadow-md w-64 h-64 flex items-center justify-center"
      :class="isPlaying ? animations[currentAnimation] : ''"
      :style="currentAnimation === 'rotate' ? 'animation-duration: 2s; animation-iteration-count: infinite; animation-timing-function: linear;' : ''"
    >
      <p class="text-xl font-medium">
        {{ currentAnimation }}动画
      </p>
    </div>
  </section>
</template>
