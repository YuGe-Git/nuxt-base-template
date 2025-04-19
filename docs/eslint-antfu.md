# Nuxt-Base-Template ESLint 配置说明

本项目使用了 [Anthony Fu](https://github.com/antfu) 的 ESLint 配置（[@antfu/eslint-config](https://github.com/antfu/eslint-config)），这是一套基于个人偏好的"无需思考"的 ESLint 配置，具有严格但实用的规则集。

## 配置概述

本项目的 ESLint 配置基于 ESLint 9.x，与 Nuxt 3 完美集成，提供了全面的代码风格和质量检查能力。

### 基本配置文件

项目根目录的 `eslint.config.mjs` 文件定义了项目的 ESLint 配置：

```js
import antfu from '@antfu/eslint-config'

export default antfu({
  // 启用基本功能
  vue: true,
  typescript: true,

  // 自定义规则
  rules: {
    'vue/multi-word-component-names': ['error', {
      ignores: ['Index', 'Layout', 'Error'],
    }],
  },

  // 忽略文件
  ignores: [
    'dist',
    '.nuxt',
    'node_modules',
    '.output',
  ],
})
```

### Nuxt 集成

在 `nuxt.config.ts` 中，我们配置了 ESLint 与 Nuxt 的集成：

```js
// ESLint 配置
eslint: {
  config: {
    // 关闭默认配置（默认情况下，此模块会使用推荐的规则安装 JS、TS 和 Vue 插件）
    standalone: false,
  },
},
```

## 启用的主要功能

### 1. TypeScript 支持

通过设置 `typescript: true`，启用了完整的 TypeScript 支持，包括：

- 类型检查
- 接口和类型定义规范
- 类型导入和导出规则
- TypeScript 特定功能的最佳实践

### 2. Vue 支持

通过设置 `vue: true`，启用了 Vue 相关的规则，包括：

- 组件属性顺序和格式
- Vue 模板语法检查
- Vue 生命周期和数据管理规范
- 单文件组件 (SFC) 的标签顺序（要求 `<script>` 位于 `<template>` 之前）

### 3. 自定义规则

#### Vue 组件命名规则

```js
'vue/multi-word-component-names': ['error', {
  ignores: ['Index', 'Layout', 'Error'],
}],
```

此规则要求所有 Vue 组件使用多单词命名（如 `UserProfile` 而非 `User`），但忽略了以下特殊组件：
- `Index`：通常用作页面的主入口组件
- `Layout`：布局组件
- `Error`：错误页面组件

## Anthony Fu 配置特点

[@antfu/eslint-config](https://github.com/antfu/eslint-config) 具有以下特点：

1. **预设为最佳实践**：规则集被精心挑选，无需进行大量自定义
2. **平衡实用性与严格性**：严格性足以捕获常见错误，但不会过于严格导致开发困难
3. **统一代码风格**：强制实施一致的代码格式和风格
4. **支持现代 ECMAScript 特性**：鼓励使用现代 JavaScript/TypeScript 功能
5. **Vue 3 & Nuxt 3 集成**：针对 Vue 生态系统优化

## 主要规则集

虽然 [@antfu/eslint-config](https://github.com/antfu/eslint-config) 包含了数百条规则，但以下是一些影响较大的核心规则：

### JavaScript/TypeScript 规则

- 使用 `const` 优先于 `let`（优先使用不可变变量）
- 强制使用严格相等 (`===` 而非 `==`)
- 禁止未使用的变量和导入
- 箭头函数的一致风格
- 一致的括号和缩进风格
- 对象和数组的一致格式化
- Promise 和异步函数的正确使用
- 避免使用 `any` 类型

### Vue 规则

- 组件名称使用 PascalCase
- Props 定义使用详细的类型定义
- 避免在模板中使用复杂表达式
- 单文件组件标签顺序：`<script>` → `<template>` → `<style>`
- 组件属性和方法的一致排序

## 使用技巧

### VS Code 集成

为获得最佳体验，建议在 VS Code 中启用 ESLint 插件，并进行以下设置：

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

这将允许在保存文件时自动修复 ESLint 错误。

### 命令行使用

检查和修复 ESLint 错误：

```bash
# 检查错误
pnpm lint

# 自动修复
pnpm lint:fix
```

## 常见问题解决

### 规则冲突

如果发现规则冲突或误报，可以通过以下方式临时禁用规则：

```js
// eslint-disable-next-line vue/multi-word-component-names
export default defineComponent({
  // ...
})
```

### 自定义规则

如果需要添加或修改规则，可以编辑 `eslint.config.mjs` 文件中的 `rules` 部分。例如：

```js
rules: {
  'vue/multi-word-component-names': 'off',  // 完全禁用规则
  'no-console': ['warn'],  // 将 console 使用降级为警告
},
```

## 参考资源

- [ESLint 官方文档](https://eslint.org/)
- [Anthony Fu 的 ESLint 配置](https://github.com/antfu/eslint-config)
- [Vue ESLint 插件](https://eslint.vuejs.org/)
- [TypeScript ESLint 插件](https://typescript-eslint.io/)
