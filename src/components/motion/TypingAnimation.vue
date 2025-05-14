<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

defineOptions({
  ssr: false, // 禁用服务器端渲染
})

// 要展示的文本列表
const texts = [
  '欢迎使用Nuxt3动画组件',
  '基于Motion-v动画库构建',
  '支持多种动画效果',
  '优雅的文本打字动画',
  '简单易用的API',
]

// 当前状态
const currentTextIndex = ref(0)
const currentCharIndex = ref(0)
const isDeleting = ref(false)
const isWaiting = ref(false)
const typingSpeed = ref(100) // 打字速度（毫秒/字符）

// 当前显示的文本
const displayText = computed(() => {
  return texts[currentTextIndex.value].substring(0, currentCharIndex.value)
})

// 将文本拆分为字符数组，用于单独设置动画
const displayTextArray = computed(() => {
  return displayText.value.split('')
})

// 光标闪烁状态
const cursorVisible = ref(true)
let cursorBlinkInterval: number | null = null

// 文本滚动函数
function textScroll() {
  const currentText = texts[currentTextIndex.value]

  if (!isDeleting.value) {
    // 正在打字
    if (currentCharIndex.value < currentText.length) {
      currentCharIndex.value++
      typingSpeed.value = 80 + Math.random() * 50 // 随机速度，模拟真实打字
    }
    else {
      // 打字完成，等待片刻后开始删除
      isWaiting.value = true
      setTimeout(() => {
        isWaiting.value = false
        isDeleting.value = true
        typingSpeed.value = 50 // 删除速度更快
      }, 1500)
    }
  }
  else {
    // 正在删除
    if (currentCharIndex.value > 0) {
      currentCharIndex.value--
      typingSpeed.value = 30 + Math.random() * 20 // 删除速度
    }
    else {
      // 删除完成，切换到下一个文本
      isDeleting.value = false
      currentTextIndex.value = (currentTextIndex.value + 1) % texts.length
      typingSpeed.value = 100 // 重新开始打字的速度
    }
  }
}

// 控制打字动画的定时器
let typingTimer: number | null = null

// 启动打字动画
function startTypingAnimation() {
  if (typingTimer) {
    clearTimeout(typingTimer)
  }

  function tick() {
    if (!isWaiting.value) {
      textScroll()
    }
    typingTimer = window.setTimeout(tick, typingSpeed.value)
  }

  tick()
}

// 启动光标闪烁
function startCursorBlink() {
  cursorBlinkInterval = window.setInterval(() => {
    cursorVisible.value = !cursorVisible.value
  }, 500)
}

// 预设动画样式
const animationStyles = ref([
  { name: '默认', class: '' },
  { name: '彩色', class: 'text-gradient' },
  { name: '霓虹', class: 'neon-text' },
  { name: '跳动', class: 'bouncy-text' },
])

const selectedStyle = ref(animationStyles.value[0])

function selectStyle(style: typeof animationStyles.value[0]) {
  selectedStyle.value = style
}

// 生成字符延迟样式
function getCharDelay(index: number) {
  if (selectedStyle.value.name !== '跳动')
    return {}

  return {
    animationDelay: `${index * 0.05}s`,
  }
}

// 生命周期钩子
onMounted(() => {
  startTypingAnimation()
  startCursorBlink()
})

onUnmounted(() => {
  if (typingTimer) {
    clearTimeout(typingTimer)
  }
  if (cursorBlinkInterval) {
    clearInterval(cursorBlinkInterval)
  }
})
</script>

<template>
  <section>
    <h2 class="text-2xl font-semibold mb-4">
      打字动画效果
    </h2>

    <div class="mb-6">
      <div class="tabs tabs-boxed mb-4">
        <button
          v-for="style in animationStyles"
          :key="style.name"
          class="tab"
          :class="{ 'tab-active': selectedStyle.name === style.name }"
          @click="selectStyle(style)"
        >
          {{ style.name }}
        </button>
      </div>

      <div class="flex items-center justify-center min-h-[150px] bg-base-200 rounded-lg p-8 text-center">
        <h3 class="text-3xl font-medium">
          <template v-if="selectedStyle.name === '跳动'">
            <span
              v-for="(char, index) in displayTextArray"
              :key="index"
              class="inline-block bouncy-char"
              :style="getCharDelay(index)"
            >
              {{ char }}
            </span>
          </template>
          <span v-else :class="selectedStyle.class">{{ displayText }}</span>
          <span class="cursor" :class="{ 'cursor-visible': cursorVisible, 'cursor-hidden': !cursorVisible }">|</span>
        </h3>
      </div>
    </div>

    <div class="text-sm text-gray-500 mt-4">
      <p class="text-center">
        打字动画模拟真实人类打字行为，适用于聊天机器人、命令行界面等场景
      </p>
    </div>
  </section>
</template>

<style scoped>
.cursor {
  display: inline-block;
  margin-left: 1px;
  font-weight: bold;
  transition: opacity 0.1s;
}

.cursor-visible {
  opacity: 1;
}

.cursor-hidden {
  opacity: 0;
}

.text-gradient {
  background: linear-gradient(to right, #ff7e5f, #feb47b, #ffcb80, #7fc29b, #2c9fa3);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: animate-gradient 5s linear infinite;
  background-size: 200% auto;
}

.neon-text {
  color: #fff;
  text-shadow: 0 0 5px #fff,
               0 0 10px #0fa,
               0 0 15px #0fa,
               0 0 20px #0fa;
}

.bouncy-text {
  animation: letter-bounce 0.3s ease infinite alternate;
}

.bouncy-char {
  display: inline-block;
  animation: letter-bounce 0.3s ease infinite alternate;
}

@keyframes animate-gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes letter-bounce {
  from { transform: translateY(0); }
  to { transform: translateY(-3px); }
}
</style>
