<script setup lang="ts">
// 按钮组件测试
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">
      <Icon name="hugeicons:square-01" class="inline-block mr-2" />
      按钮组件
    </h2>

    <!-- 按钮风格 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">
        按钮风格
      </h3>
      <div class="flex flex-wrap gap-2">
        <button class="btn">
          默认按钮
        </button>
        <button class="btn btn-neutral">
          中性按钮
        </button>
        <button class="btn btn-primary">
          主要按钮
        </button>
        <button class="btn btn-secondary">
          次要按钮
        </button>
        <button class="btn btn-accent">
          强调按钮
        </button>
        <button class="btn btn-ghost">
          幽灵按钮
        </button>
        <button class="btn btn-link">
          链接按钮
        </button>
      </div>
    </div>

    <!-- 按钮状态 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">
        按钮状态
      </h3>
      <div class="flex flex-wrap gap-2">
        <button class="btn btn-primary">
          普通状态
        </button>
        <button class="btn btn-primary btn-active">
          激活状态
        </button>
        <button class="btn btn-primary btn-disabled">
          禁用状态
        </button>
        <button class="btn btn-primary loading">
          加载状态
        </button>
        <button class="btn btn-outline btn-primary">
          轮廓按钮
        </button>
        <button class="btn btn-primary no-animation">
          无动画
        </button>
      </div>
    </div>

    <!-- 按钮尺寸 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">
        按钮尺寸
      </h3>
      <div class="flex flex-wrap gap-2 items-center">
        <button class="btn btn-xs">
          超小按钮
        </button>
        <button class="btn btn-sm">
          小按钮
        </button>
        <button class="btn">
          常规按钮
        </button>
        <button class="btn btn-lg">
          大按钮
        </button>
        <button class="btn btn-wide">
          宽按钮
        </button>
        <button class="btn btn-block">
          块级按钮
        </button>
      </div>
    </div>

    <!-- 按钮组 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">
        按钮组
      </h3>
      <div class="join mb-4">
        <button class="join-item btn">
          按钮1
        </button>
        <button class="join-item btn">
          按钮2
        </button>
        <button class="join-item btn">
          按钮3
        </button>
      </div>
      <div class="join">
        <button class="join-item btn btn-primary">
          按钮1
        </button>
        <button class="join-item btn btn-primary">
          按钮2
        </button>
        <button class="join-item btn btn-primary">
          按钮3
        </button>
      </div>
    </div>

    <!-- 带图标按钮 -->
    <div>
      <h3 class="text-xl font-semibold mb-4">
        带图标按钮
      </h3>
      <div class="flex flex-wrap gap-2">
        <button class="btn btn-primary gap-2">
          <Icon name="hugeicons:add-01" />
          添加
        </button>
        <button class="btn btn-error gap-2">
          <Icon name="hugeicons:delete-01" />
          删除
        </button>
        <button class="btn btn-success gap-2">
          <Icon name="hugeicons:tick-01" />
          确认
        </button>
        <button class="btn btn-warning gap-2">
          <Icon name="hugeicons:notification-01" />
          警告
        </button>
        <button class="btn btn-info gap-2">
          <Icon name="hugeicons:information-circle" />
          信息
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
