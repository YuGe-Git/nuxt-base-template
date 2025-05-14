// 处理Nuxt图标加载错误
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  // 我们只在客户端时执行，此时可以直接使用window
  if (typeof window !== 'undefined') {
    // 在DOM中添加一些样式，隐藏图标加载错误
    const style = document.createElement('style')
    style.innerHTML = `
      /* 隐藏与图标相关的错误信息 */
      [data-v-app] .nuxt-icon svg[style*="display: none"] {
        display: inline-block !important;
        opacity: 0.5;
        width: 1em;
        height: 1em;
      }
    `
    document.head.appendChild(style)
  }
})
