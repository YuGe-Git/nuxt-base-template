<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  ssr: false, // 禁用服务器端渲染
})

// 控制不同卡片的翻转状态
const flippedCards = ref<Record<string, boolean>>({
  card1: false,
  card2: false,
  card3: false,
})

// 翻转卡片
function toggleCard(cardId: string) {
  flippedCards.value[cardId] = !flippedCards.value[cardId]
}

// 卡片数据
const cards = [
  {
    id: 'card1',
    frontTitle: '3D翻转卡片',
    frontDesc: '点击卡片查看背面内容',
    frontColor: 'bg-gradient-to-r from-indigo-500 to-purple-500',
    frontIcon: 'hugeicons:rotate-01',
    backTitle: '技术说明',
    backDesc: '使用CSS 3D变换和过渡效果实现流畅的翻转动画',
    backColor: 'bg-gradient-to-r from-purple-500 to-indigo-500',
    backIcon: 'hugeicons:code',
  },
  {
    id: 'card2',
    frontTitle: '响应式设计',
    frontDesc: '适配各种屏幕尺寸',
    frontColor: 'bg-gradient-to-r from-pink-500 to-rose-500',
    frontIcon: 'hugeicons:mobile-phone-landscape',
    backTitle: '使用方法',
    backDesc: '只需点击卡片即可触发3D旋转效果，再次点击返回正面',
    backColor: 'bg-gradient-to-r from-rose-500 to-pink-500',
    backIcon: 'hugeicons:cursor-01',
  },
  {
    id: 'card3',
    frontTitle: '精美动画',
    frontDesc: '带有弹性过渡效果',
    frontColor: 'bg-gradient-to-r from-cyan-500 to-blue-500',
    frontIcon: 'hugeicons:square',
    backTitle: '应用场景',
    backDesc: '适用于展示产品信息、用户资料、游戏卡牌等多种场景',
    backColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    backIcon: 'hugeicons:store-01',
  },
]
</script>

<template>
  <section>
    <h2 class="text-2xl font-semibold mb-4">
      3D翻转卡片
    </h2>

    <div class="flex flex-wrap justify-center gap-6 mb-8">
      <div
        v-for="card in cards"
        :key="card.id"
        class="flip-card-container"
        @click="toggleCard(card.id)"
      >
        <div
          class="flip-card"
          :class="{ 'is-flipped': flippedCards[card.id] }"
        >
          <!-- 卡片正面 -->
          <div class="flip-card-front" :class="card.frontColor">
            <div class="flip-card-content">
              <div class="icon-container">
                <Icon :name="card.frontIcon" class="text-white w-8 h-8" />
              </div>
              <h3 class="text-xl font-bold text-white mb-2">
                {{ card.frontTitle }}
              </h3>
              <p class="text-white/80 text-sm">
                {{ card.frontDesc }}
              </p>
            </div>
          </div>

          <!-- 卡片背面 -->
          <div class="flip-card-back" :class="card.backColor">
            <div class="flip-card-content">
              <div class="icon-container">
                <Icon :name="card.backIcon" class="text-white w-8 h-8" />
              </div>
              <h3 class="text-xl font-bold text-white mb-2">
                {{ card.backTitle }}
              </h3>
              <p class="text-white/80 text-sm">
                {{ card.backDesc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center text-gray-500 text-sm">
      点击卡片触发3D翻转效果，再次点击返回
    </div>
  </section>
</template>

<style scoped>
.flip-card-container {
  perspective: 1000px;
  width: 250px;
  height: 300px;
  cursor: pointer;
  margin-bottom: 10px;
}

.flip-card {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
}

.flip-card.is-flipped {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flip-card-front {
  transform: rotateY(0deg);
}

.flip-card-back {
  transform: rotateY(180deg);
}

.flip-card-content {
  padding: 24px;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.icon-container {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  backdrop-filter: blur(4px);
}
</style>
