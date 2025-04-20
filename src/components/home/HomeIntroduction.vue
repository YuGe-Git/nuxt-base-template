<script setup lang="ts">
// 项目介绍组件
</script>

<template>
  <div class="mb-12">
    <h2 class="text-2xl font-bold mb-6 text-base-content flex items-center">
      <Icon name="hugeicons:information-circle" class="mr-2 text-primary" />
      项目介绍
    </h2>

    <div class="card bg-base-200 shadow-md hover:shadow-lg transition-all duration-300">
      <div class="card-body">
        <p class="mb-6 opacity-80">
          这是一个基于 Nuxt 3 的快速开发模板，集成了多种常用工具和配置，帮助您快速启动新项目。精心设计的架构和预配置环境让您专注于业务逻辑开发，而不是繁琐的环境搭建。
        </p>

        <div class="alert bg-base-300 text-base-content border-l-4 border-primary">
          <div class="flex items-center gap-3">
            <Icon name="hugeicons:idea" class="text-primary" />
            <span>该模板已预配置好常用开发环境，可以直接开始您的业务逻辑开发。</span>
          </div>
        </div>

        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="flex items-start gap-3">
            <Icon name="hugeicons:payment-success-01" class="text-success text-xl flex-shrink-0 mt-1" />
            <div>
              <h3 class="font-semibold">
                快速开发
              </h3>
              <p class="opacity-70 text-sm">
                预配置环境和工具链，无需从零开始搭建
              </p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <Icon name="hugeicons:payment-success-01" class="text-success text-xl flex-shrink-0 mt-1" />
            <div>
              <h3 class="font-semibold">
                模块化架构
              </h3>
              <p class="opacity-70 text-sm">
                优化的目录结构，符合最佳实践
              </p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <Icon name="hugeicons:payment-success-01" class="text-success text-xl flex-shrink-0 mt-1" />
            <div>
              <h3 class="font-semibold">
                开发体验
              </h3>
              <p class="opacity-70 text-sm">
                热重载、自动导入、代码提示等增强体验
              </p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <Icon name="hugeicons:payment-success-01" class="text-success text-xl flex-shrink-0 mt-1" />
            <div>
              <h3 class="font-semibold">
                性能优化
              </h3>
              <p class="opacity-70 text-sm">
                内置性能优化策略，构建更快的应用
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
