<script setup lang="ts">
// 卡片组件测试
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">
      <Icon name="hugeicons:credit-card" class="inline-block mr-2" />
      卡片组件
    </h2>

    <!-- 基础卡片 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">
        基础卡片
      </h3>
      <div class="card bg-base-300 max-w-md mx-auto">
        <div class="card-body">
          <h2 class="card-title">
            基础卡片
          </h2>
          <p>这是一个简单的卡片示例，只包含标题和内容。</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">
              确认
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 带图片卡片 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">
        带图片卡片
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- 图片在上 -->
        <div class="card bg-base-300">
          <figure>
            <div class="bg-gray-400 h-48 w-full flex items-center justify-center">
              <Icon name="hugeicons:image-01" class="text-4xl opacity-50" />
            </div>
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              图片在上的卡片
            </h2>
            <p>图片位于卡片顶部的布局示例</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">
                查看
              </button>
            </div>
          </div>
        </div>

        <!-- 图片在下 -->
        <div class="card bg-base-300">
          <div class="card-body">
            <h2 class="card-title">
              图片在下的卡片
            </h2>
            <p>图片位于卡片底部的布局示例</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">
                查看
              </button>
            </div>
          </div>
          <figure>
            <div class="bg-gray-400 h-48 w-full flex items-center justify-center">
              <Icon name="hugeicons:image-01" class="text-4xl opacity-50" />
            </div>
          </figure>
        </div>
      </div>
    </div>

    <!-- 横向卡片 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">
        横向卡片
      </h3>
      <div class="card card-side bg-base-300 shadow-md">
        <figure class="w-1/3">
          <div class="bg-gray-400 h-full w-full flex items-center justify-center">
            <Icon name="hugeicons:image-01" class="text-4xl opacity-50" />
          </div>
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            横向布局卡片
          </h2>
          <p>适合展示带缩略图的内容列表</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">
              查看
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 叠加卡片 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">
        图片叠加卡片
      </h3>
      <div class="card w-full bg-base-100 shadow-xl image-full max-w-md mx-auto">
        <figure>
          <div class="bg-gray-400 h-48 w-full flex items-center justify-center">
            <Icon name="hugeicons:image-01" class="text-6xl opacity-30" />
          </div>
        </figure>
        <div class="card-body justify-end">
          <h2 class="card-title text-white">
            图片叠加效果
          </h2>
          <p class="text-white">
            内容叠加在背景图片上
          </p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">
              查看
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 自定义颜色卡片 -->
    <div>
      <h3 class="text-xl font-semibold mb-4">
        不同风格卡片
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="card bg-primary text-primary-content">
          <div class="card-body">
            <h2 class="card-title">
              主色卡片
            </h2>
            <p>使用 primary 类的卡片</p>
            <div class="card-actions justify-end">
              <button class="btn">
                查看
              </button>
            </div>
          </div>
        </div>

        <div class="card bg-secondary text-secondary-content">
          <div class="card-body">
            <h2 class="card-title">
              次要色卡片
            </h2>
            <p>使用 secondary 类的卡片</p>
            <div class="card-actions justify-end">
              <button class="btn">
                查看
              </button>
            </div>
          </div>
        </div>

        <div class="card bg-accent text-accent-content">
          <div class="card-body">
            <h2 class="card-title">
              强调色卡片
            </h2>
            <p>使用 accent 类的卡片</p>
            <div class="card-actions justify-end">
              <button class="btn">
                查看
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
