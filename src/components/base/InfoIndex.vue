<script setup>
// 无需额外脚本
</script>

<template>
  <div class="min-h-screen bg-base-100">
    <div class="container mx-auto px-4 py-8">
      <!-- 引入模块化组件 -->
      <HomeHeader />
      <HomeIntroduction />
      <HomeTechStack />
      <HomeQuickStart />
      <HomeStructure />
      <HomeFooter />

      <!-- 页面状态信息 -->
      <PageStatus
        page-path="/"
        last-edited="2025-04-20 15:21"
      />
    </div>
  </div>
</template>

<style scoped>
</style>
