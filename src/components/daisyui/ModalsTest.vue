<script setup lang="ts">
// 控制各个模态框的显示状态
const showBasicModal = ref(false)
const showCustomModal = ref(false)
const showResponsiveModal = ref(false)
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">
      <Icon name="hugeicons:square" class="inline-block mr-2" />
      模态框组件
    </h2>

    <!-- 模态框触发按钮 -->
    <div class="flex flex-wrap gap-4 mb-8">
      <button class="btn btn-primary" @click="showBasicModal = true">
        基础模态框
      </button>
      <button class="btn btn-secondary" @click="showCustomModal = true">
        自定义模态框
      </button>
      <button class="btn btn-accent" @click="showResponsiveModal = true">
        响应式模态框
      </button>
    </div>

    <!-- 基础模态框 -->
    <dialog class="modal" :class="[showBasicModal ? 'modal-open' : '']">
      <div class="modal-box">
        <h3 class="font-bold text-lg">
          基础模态框
        </h3>
        <p class="py-4">
          这是一个简单的模态框示例，展示了基本的模态框结构和用法。
        </p>
        <div class="modal-action">
          <button class="btn" @click="showBasicModal = false">
            关闭
          </button>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop" @click="showBasicModal = false">
        <button>关闭</button>
      </form>
    </dialog>

    <!-- 自定义模态框 -->
    <dialog class="modal" :class="[showCustomModal ? 'modal-open' : '']">
      <div class="modal-box">
        <h3 class="font-bold text-lg text-primary">
          自定义模态框
        </h3>
        <div class="py-4">
          <p class="mb-4">
            这是一个包含更多元素的模态框示例：
          </p>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">您的电子邮箱</span>
            </label>
            <input type="email" placeholder="例如：your@email.com" class="input input-bordered w-full">
          </div>
          <div class="form-control mt-3">
            <label class="cursor-pointer label justify-start gap-2">
              <input type="checkbox" :checked="true" class="checkbox checkbox-primary">
              <span class="label-text">订阅我们的新闻通讯</span>
            </label>
          </div>
        </div>
        <div class="modal-action">
          <button class="btn btn-primary">
            确认
          </button>
          <button class="btn" @click="showCustomModal = false">
            取消
          </button>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop" @click="showCustomModal = false">
        <button>关闭</button>
      </form>
    </dialog>

    <!-- 响应式模态框 -->
    <dialog class="modal" :class="[showResponsiveModal ? 'modal-open' : '']">
      <div class="modal-box w-11/12 max-w-3xl">
        <h3 class="font-bold text-lg">
          响应式大尺寸模态框
        </h3>
        <div class="py-4">
          <p class="mb-4">
            这是一个更大尺寸的模态框，适合展示更多内容:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="card bg-base-200">
              <div class="card-body">
                <h2 class="card-title">
                  功能 1
                </h2>
                <p>这里是功能 1 的详细说明内容，可以添加更多文字描述。</p>
              </div>
            </div>
            <div class="card bg-base-200">
              <div class="card-body">
                <h2 class="card-title">
                  功能 2
                </h2>
                <p>这里是功能 2 的详细说明内容，可以添加更多文字描述。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-action">
          <button class="btn btn-primary">
            确认
          </button>
          <button class="btn" @click="showResponsiveModal = false">
            取消
          </button>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop" @click="showResponsiveModal = false">
        <button>关闭</button>
      </form>
    </dialog>

    <!-- 说明 -->
    <div class="alert alert-info mt-8">
      <Icon name="hugeicons:information-circle" />
      <div>
        <h3 class="font-bold">
          提示
        </h3>
        <div class="text-sm">
          点击模态框外部区域或关闭按钮可关闭模态框
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
