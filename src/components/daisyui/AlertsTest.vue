<script setup lang="ts">
// 提示组件测试
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">
      <Icon name="hugeicons:notification-01" class="inline-block mr-2" />
      提示组件
    </h2>

    <!-- 基础提示 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">
        基础提示
      </h3>
      <div class="flex flex-col gap-4">
        <div class="alert">
          <Icon name="hugeicons:information-circle" />
          <span>默认提示：这是一个普通提示消息。</span>
        </div>
        <div class="alert alert-info">
          <Icon name="hugeicons:information-circle" />
          <span>信息提示：这是一条信息提示消息。</span>
        </div>
        <div class="alert alert-success">
          <Icon name="hugeicons:tick-01" />
          <span>成功提示：操作已成功完成。</span>
        </div>
        <div class="alert alert-warning">
          <Icon name="hugeicons:notification-01" />
          <span>警告提示：请注意此操作可能有风险。</span>
        </div>
        <div class="alert alert-error">
          <Icon name="hugeicons:cancel-01" />
          <span>错误提示：操作失败，请重试。</span>
        </div>
      </div>
    </div>

    <!-- 带操作按钮的提示 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">
        带操作提示
      </h3>
      <div class="flex flex-col gap-4">
        <div class="alert">
          <Icon name="hugeicons:information-circle" />
          <span>有新的软件更新可用。</span>
          <div>
            <button class="btn btn-sm">
              现在更新
            </button>
            <button class="btn btn-sm btn-ghost">
              稍后
            </button>
          </div>
        </div>
        <div class="alert alert-success">
          <Icon name="hugeicons:tick-01" />
          <span>文件上传成功！</span>
          <div>
            <button class="btn btn-sm">
              查看
            </button>
            <button class="btn btn-sm btn-ghost">
              关闭
            </button>
          </div>
        </div>
        <div class="alert alert-error">
          <Icon name="hugeicons:cancel-01" />
          <span>文件删除后无法恢复。</span>
          <div>
            <button class="btn btn-sm">
              确认删除
            </button>
            <button class="btn btn-sm btn-ghost">
              取消
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast 提示 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">
        Toast 提示
      </h3>
      <div class="flex flex-col gap-4">
        <div class="toast">
          <div class="alert alert-info">
            <span>新消息通知</span>
          </div>
        </div>
        <div class="toast toast-top toast-end">
          <div class="alert alert-success">
            <span>操作成功</span>
          </div>
        </div>
        <div class="toast toast-bottom toast-start">
          <div class="alert alert-error">
            <span>出现错误</span>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <div class="badge badge-info">
          说明: Toast 位置演示，实际使用时应当一次只显示一个 Toast
        </div>
      </div>
    </div>

    <!-- 带标题的提示 -->
    <div>
      <h3 class="text-xl font-semibold mb-4">
        带标题的提示
      </h3>
      <div class="flex flex-col gap-4">
        <div class="alert alert-info">
          <div>
            <h3 class="font-bold">
              新功能通知!
            </h3>
            <div class="text-sm">
              我们刚刚发布了新版本，包含多项改进和新功能。
            </div>
          </div>
          <button class="btn btn-sm">
            了解更多
          </button>
        </div>
        <div class="alert alert-warning">
          <div>
            <h3 class="font-bold">
              系统维护通知
            </h3>
            <div class="text-sm">
              系统将于今晚22:00-23:00进行维护，期间服务可能不可用。
            </div>
          </div>
          <button class="btn btn-sm">
            添加日历提醒
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.toast {
  position: relative;
  right: auto;
  bottom: auto;
  top: auto;
  left: auto;
  margin: 0.5rem 0;
}
</style>
