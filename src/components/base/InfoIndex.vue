<script setup>
// 无需额外脚本
</script>

<template>
  <div class="min-h-screen bg-base-100">
    <div class="container mx-auto px-4 py-10">
      <!-- 标题区域 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-3 text-base-content">
          <Icon name="hugeicons:align-right" /> Nuxt-Base-Template
        </h1>
        <div class="divider w-24 mx-auto my-4 opacity-30" />
        <p class="text-lg opacity-70 max-w-xl mx-auto">
          基于 Nuxt 3 的现代化开发模板，快速启动您的下一个项目
        </p>
      </div>

      <!-- 主要内容区域 -->
      <div class="grid grid-cols-1 md:grid-cols-6 gap-8 mb-12">
        <!-- 项目介绍卡片 -->
        <div class="md:col-span-3">
          <div class="card bg-base-200 shadow-md hover:shadow-lg transition-all duration-300">
            <div class="card-body">
              <h2 class="card-title text-2xl mb-4 text-base-content">
                <span class="i-heroicons-information-circle mr-2 opacity-70" />
                项目介绍
              </h2>
              <p class="mb-6 opacity-80">
                这是一个基于 Nuxt 3 的快速开发模板，集成了多种常用工具和配置，帮助您快速启动新项目。精心设计的架构和预配置环境让您专注于业务逻辑开发，而不是繁琐的环境搭建。
              </p>

              <div class="alert bg-base-300 text-base-content border-l-4 border-neutral mb-4">
                <span class="flex items-center">
                  <span class="i-heroicons-light-bulb mr-2 opacity-70" />
                  该模板已预配置好常用开发环境，可以直接开始您的业务逻辑开发。
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- 快速开始卡片 -->
        <div class="md:col-span-3">
          <div class="card bg-base-200 shadow-md hover:shadow-lg transition-all duration-300">
            <div class="card-body">
              <h2 class="card-title text-2xl mb-4 text-base-content">
                <span class="i-heroicons-rocket-launch mr-2 opacity-70" />
                快速开始
              </h2>
              <div class="mockup-code bg-base-300 text-base-content w-full overflow-x-hidden">
                <pre class="overflow-x-auto"><code>git clone https://github.com/yourusername/nuxt-base-template.git</code></pre>
                <pre class="overflow-x-auto"><code>pnpm install</code></pre>
                <pre class="overflow-x-auto"><code>pnpm dev</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 主要特性区域 -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold mb-6 text-base-content flex items-center">
          <span class="i-heroicons-star mr-2 opacity-70" />
          主要特性
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="card bg-base-200 shadow-sm hover:shadow-md transition-all">
            <div class="card-body">
              <h3 class="card-title text-base-content">
                <span class="i-heroicons-code-bracket-square mr-2 opacity-70" />
                最新技术栈
              </h3>
              <p class="opacity-80">
                基于 Nuxt 3 最新版本，使用 Vue 3 生态系统，享受现代化前端开发体验。
              </p>
            </div>
          </div>

          <div class="card bg-base-200 shadow-sm hover:shadow-md transition-all">
            <div class="card-body">
              <h3 class="card-title text-base-content">
                <span class="i-heroicons-document-check mr-2 opacity-70" />
                TypeScript 支持
              </h3>
              <p class="opacity-80">
                集成 TypeScript，提供类型安全和智能代码提示，提高开发效率和代码质量。
              </p>
            </div>
          </div>

          <div class="card bg-base-200 shadow-sm hover:shadow-md transition-all">
            <div class="card-body">
              <h3 class="card-title text-base-content">
                <span class="i-heroicons-check-badge mr-2 opacity-70" />
                代码规范检查
              </h3>
              <p class="opacity-80">
                集成 ESLint 代码规范检查，保持代码一致性和质量，减少潜在问题。
              </p>
            </div>
          </div>

          <div class="card bg-base-200 shadow-sm hover:shadow-md transition-all">
            <div class="card-body">
              <h3 class="card-title text-base-content">
                <span class="i-heroicons-paint-brush mr-2 opacity-70" />
                UI 框架集成
              </h3>
              <p class="opacity-80">
                集成 Tailwind CSS + DaisyUI 组件库，快速构建美观且响应式的用户界面。
              </p>
            </div>
          </div>

          <div class="card bg-base-200 shadow-sm hover:shadow-md transition-all">
            <div class="card-body">
              <h3 class="card-title text-base-content">
                <span class="i-heroicons-folder mr-2 opacity-70" />
                优化的目录结构
              </h3>
              <p class="opacity-80">
                经过精心设计的目录结构，符合最佳实践，便于组织和管理大型应用。
              </p>
            </div>
          </div>

          <div class="card bg-base-200 shadow-sm hover:shadow-md transition-all">
            <div class="card-body">
              <h3 class="card-title text-base-content">
                <span class="i-heroicons-arrow-path mr-2 opacity-70" />
                自动导入
              </h3>
              <p class="opacity-80">
                自动导入组件和工具函数，减少样板代码，提高开发体验和效率。
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 行动按钮区域 -->
      <div class="flex justify-center gap-4 mt-8 flex-wrap">
        <button class="btn btn-neutral btn-lg gap-2">
          <span class="i-heroicons-document-text" />
          查看文档
        </button>
        <button class="btn bg-base-200 border-base-300 btn-lg gap-2 hover:bg-base-300">
          <span class="i-heroicons-code-bracket" />
          GitHub
        </button>
        <NuxtLink to="/test" class="btn btn-accent btn-lg gap-2">
          <Icon name="hugeicons:image-01" />
          测试页面
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
