# 自定义脚本文档

本项目包含一套自定义 TypeScript 脚本，旨在提供增强的开发体验和更清晰的输出。这些脚本位于 `scripts` 目录下。

## 开发服务器 (`dev.ts`)

用于启动Nuxt开发服务器的增强脚本。

### 用法

```bash
# 基本用法
pnpm dev

# 指定端口
pnpm dev -- --port 3001
# 或简写
pnpm dev -- -p 3001

# 指定主机地址（用于局域网访问）
pnpm dev -- --host 0.0.0.0
# 或简写
pnpm dev -- -h 0.0.0.0

# 组合使用
pnpm dev -- --port 3001 --host 0.0.0.0
```

### 特性

- 清晰的启动和状态信息
- 服务器完全启动后显示完成提示
- 优雅的错误处理和服务器停止逻辑
- 实时显示Nuxt输出

## 构建工具 (`build.ts`)

用于构建Nuxt应用的增强脚本。

### 用法

```bash
# 基本构建
pnpm build

# 分析构建结果
pnpm build -- --analyze
```

### 特性

- 清晰的构建状态和进度输出
- 详细的成功/失败反馈
- 支持构建分析模式

## 生产服务器 (`start.ts`)

用于启动生产环境服务器的智能脚本。

### 用法

```bash
# 基本用法
pnpm start

# 指定端口
pnpm start -- --port 3001
# 或简写
pnpm start -- -p 3001

# 指定主机地址
pnpm start -- --host 0.0.0.0
# 或简写
pnpm start -- -h 0.0.0.0

# 强制重新构建后启动
pnpm start -- --force
# 或简写
pnpm start -- -f
```

### 特性

- 自动检测是否需要先构建应用
- 支持强制重新构建选项
- 清晰的启动和状态信息
- 优雅的服务器停止处理

## 代码规范检查 (`lint.ts`)

用于运行ESLint代码规范检查的脚本。

### 用法

```bash
# 检查代码规范
pnpm lint

# 检查并自动修复问题
pnpm lint:fix

# 检查特定路径
pnpm lint -- src/components
```

### 特性

- 清晰的检查结果输出
- 自动修复选项
- 支持检查特定路径

## 项目清理 (`clear.ts`)

用于清理项目并重置开发环境的高级脚本。

### 用法

```bash
# 基本清理
pnpm clear

# 包括删除锁文件（谨慎使用）
pnpm clear -- --remove-lock
```

### 特性

- 删除 node_modules、.nuxt 和 .output 目录
- 等待确认目录完全删除后继续
- 重新安装依赖
- 可选删除锁文件（用于解决依赖问题）

## 工具函数 (`utils.ts`)

为所有脚本提供共享工具函数的模块。

### 主要功能

- 彩色日志输出
- 分隔符打印
- 异步等待函数
- 任务开始和状态管理 