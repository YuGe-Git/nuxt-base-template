<script setup lang="ts">
// 快速开始指南组件
const codeSteps = [
  { code: 'git clone https://github.com/yourusername/nuxt-base-template.git', desc: '从GitHub克隆代码库' },
  { code: 'cd nuxt-base-template', desc: '进入项目目录' },
  { code: 'pnpm install', desc: '安装项目依赖' },
  { code: 'pnpm dev', desc: '启动开发服务器' },
]

// 开发命令列表
const devCommands = [
  { name: 'dev', desc: '启动开发服务器', command: 'pnpm dev' },
  { name: 'build', desc: '构建生产版本', command: 'pnpm build' },
  { name: 'start', desc: '启动生产服务器', command: 'pnpm start' },
  { name: 'lint', desc: '运行代码检查', command: 'pnpm lint' },
  { name: 'lint:fix', desc: '修复代码问题', command: 'pnpm lint:fix' },
  { name: 'clear', desc: '清理缓存和临时文件', command: 'pnpm clear' },
]
</script>

<template>
  <div class="mb-12">
    <h2 class="text-2xl font-bold mb-6 text-base-content flex items-center">
      <Icon name="hugeicons:rocket-01" class="mr-2 text-primary" />
      快速开始
    </h2>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- 安装步骤 -->
      <div class="card bg-base-200 shadow-md hover:shadow-lg transition-all duration-300">
        <div class="card-body">
          <h3 class="card-title text-xl mb-4">
            <Icon name="hugeicons:download-01" class="mr-2" />
            安装步骤
          </h3>

          <div class="mockup-code bg-base-300 text-base-content w-full mb-4">
            <div v-for="(step, index) in codeSteps" :key="index" class="relative">
              <pre data-prefix="$"><code>{{ step.code }}</code></pre>
              <span class="absolute right-4 top-1/2 -translate-y-1/2 text-xs opacity-60">{{ step.desc }}</span>
            </div>
          </div>

          <div class="alert bg-base-300 flex items-center">
            <Icon name="hugeicons:information-circle" />
            <span class="text-sm">当看到 <code class="bg-neutral-focus px-1 rounded text-xs mx-1">http://localhost:3000</code> 时，可以在浏览器中访问项目</span>
          </div>
        </div>
      </div>

      <!-- 常用命令 -->
      <div class="card bg-base-200 shadow-md hover:shadow-lg transition-all duration-300">
        <div class="card-body">
          <h3 class="card-title text-xl mb-4">
            <Icon name="hugeicons:command-line" class="mr-2" />
            常用命令
          </h3>

          <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
              <thead>
                <tr>
                  <th>命令</th>
                  <th>描述</th>
                  <th class="hidden sm:table-cell">
                    用法
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(cmd, index) in devCommands" :key="index">
                  <td class="font-mono text-sm">
                    {{ cmd.name }}
                  </td>
                  <td class="text-sm">
                    {{ cmd.desc }}
                  </td>
                  <td class="hidden sm:table-cell">
                    <code class="bg-base-300 px-2 py-1 rounded text-xs">{{ cmd.command }}</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
