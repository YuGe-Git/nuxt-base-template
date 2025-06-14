# Nuxt 基础模板

> **开发状态提示**：当前项目正在积极开发中，功能和文档会持续更新。
    如果您在使用过程中遇到任何问题或有改进建议，欢迎[提交 Issues](https://github.com/YuGe-Git/nuxt-base-template/issues)。您的反馈对我非常宝贵！

> **AI 支持**：本项目内容的 80% 由 AI 提供支持，包括代码生成、文档编写和最佳实践建议。

一个预配置的 Nuxt 3 应用程序模板，集成了现代化开发工具和最佳实践。

## 特性

- 基于 **Nuxt 3** 框架
- 使用 **TypeScript** 提供类型安全
- **Tailwind CSS v4** 和 **DaisyUI** 用于响应式设计
- **ESLint** 集成，使用 **@antfu/eslint-config** 规则集
- 自定义 **TypeScript 脚本工具** 用于更好的开发体验
- 图标支持通过 **@nuxt/icon**
- 默认启用 **Nuxt Devtools**

## 未来开发计划

项目团队计划在未来版本中实现以下功能和改进：

### 近期计划
- **Prisma ORM 集成** - 添加数据库支持，包含自动生成的类型安全查询
- **统一状态管理** - 增强Pinia集成，优化状态管理模式和持久化
- **组件库扩展** - 扩充基础UI组件，添加更多实用组件和复合组件
- **目录结构优化** - 改进模块化组织，提高大型应用可维护性
- **路由中间件增强** - 添加更多实用中间件，支持路由级别的状态控制

### 中期计划
- **认证与授权系统** - 集成灵活的用户认证和权限控制
- **API集成层** - 添加类型安全的API调用模式和自动错误处理
- **单元测试框架** - 集成Vitest，提供组件和工具函数测试
- **国际化支持** - 添加多语言支持，包含中英文基础翻译
- **主题系统增强** - 支持自定义主题，提供更多预设主题

### 长期计划
- **微服务架构支持** - 添加模块化API服务集成
- **高级缓存策略** - 实现智能缓存和状态持久化
- **PWA支持** - 添加离线支持和应用安装功能
- **性能优化** - 代码分割、延迟加载和预加载策略
- **CI/CD配置** - 提供GitHub Actions工作流程
- **Docker部署支持** - 添加容器化部署配置
- **SEO优化** - 集成元数据和结构化数据支持

> **参与贡献**: 我们欢迎社区贡献！如果您有兴趣参与上述任何功能的开发，请查看我们的[贡献指南](CONTRIBUTING.md)。

## 开始使用

### 系统要求

- Node.js v18+
- npm 或 pnpm (推荐使用 pnpm)

### 安装

```bash
# 克隆仓库
git clone <repository-url>
cd nuxt-base-template

# 安装依赖
pnpm install
```

## 开发

启动开发服务器：

```bash
# 开发模式
pnpm dev

# 指定端口和主机
pnpm dev -- --port 3001 --host 0.0.0.0
```

## 构建与部署

```bash
# 构建应用
pnpm build

# 启动生产服务器(如果需要会先构建)
pnpm start

# 强制重新构建并启动
pnpm start -- --force
```

## 可用命令

> **注意**：使用以下自定义命令前，请先全局安装 tsx：
> ```bash
> npm install -g tsx
> # 或使用 yarn
> yarn global add tsx
> # 或使用 pnpm
> pnpm add -g tsx
> ```

| 命令 | 描述 |
| ---- | ---- |
| `pnpm dev` | 启动开发服务器 |
| `pnpm build` | 构建生产版本 |
| `pnpm build -- --analyze` | 构建并分析打包结果 |
| `pnpm start` | 启动生产服务器 |
| `pnpm start -- --force` | 强制重新构建并启动服务器 |
| `pnpm generate` | 生成静态网站 |
| `pnpm preview` | 预览构建结果 |
| `pnpm lint` | 运行代码规范检查 |
| `pnpm lint:fix` | 运行代码规范检查并自动修复 |
| `pnpm clear` | 清理项目，删除 node_modules、.nuxt 和 .output 目录并重新安装依赖 |

更多关于自定义脚本的详细信息，请参阅 [脚本文档](docs/scripts.md)。

## 项目结构

```
nuxt-base-template/
├── .output/           # 构建输出目录
├── .nuxt/             # Nuxt 临时文件
├── docs/              # 项目文档
│   ├── eslint-antfu.md # ESLint 配置文档
│   └── scripts.md     # 自定义脚本文档
├── node_modules/      # 依赖项
├── scripts/           # 自定义 TypeScript 脚本
│   ├── build.ts       # 构建脚本
│   ├── clear.ts       # 清理脚本
│   ├── dev.ts         # 开发服务器脚本
│   ├── lint.ts        # 代码规范检查脚本
│   ├── start.ts       # 生产服务器启动脚本
│   └── utils.ts       # 共享工具函数
├── src/               # 源代码目录
│   ├── app.vue        # 应用入口组件
│   ├── app.config.ts  # 应用配置
│   ├── assets/        # 静态资源
│   ├── components/    # Vue 组件
│   ├── composables/   # 组合式函数
│   ├── layouts/       # 布局组件
│   ├── middleware/    # 中间件
│   ├── pages/         # 路由页面
│   ├── plugins/       # 插件
│   ├── public/        # 公共文件
│   ├── server/        # 服务器端代码
│   ├── types/         # 类型定义
│   └── utils/         # 工具函数
├── .gitignore         # Git 忽略文件
├── eslint.config.mjs  # ESLint 配置
├── nuxt.config.ts     # Nuxt 配置
├── package.json       # 项目依赖和脚本
├── pnpm-lock.yaml     # 依赖锁定文件
├── README.md          # 项目文档
└── tsconfig.json      # TypeScript 配置
```

## 自定义脚本

项目使用自定义 TypeScript 脚本来增强开发体验：

### 开发服务器 (`dev.ts`)

为开发环境提供增强的启动体验，包括：
- 清晰的状态输出
- 启动完成提示
- 支持 `--port` 和 `--host` 参数

### 构建工具 (`build.ts`)

增强的构建流程，包括：
- 清晰的构建状态输出
- 支持 `--analyze` 参数进行包分析
- 详细的构建成功/失败反馈

### 生产服务器 (`start.ts`)

智能的生产环境服务器启动脚本：
- 自动检测是否需要先构建应用
- 支持 `--port`、`--host` 和 `--force` 参数
- 优雅的停止服务器处理

### 项目清理 (`clear.ts`)

高级项目清理工具：
- 删除 node_modules、.nuxt 和 .output 目录
- 重新安装依赖
- 可选删除锁文件 (`--remove-lock`)

详细信息请参阅 [脚本文档](docs/scripts.md)。

## Tailwind CSS 配置

项目使用 Tailwind CSS v4 并集成了 DaisyUI 组件库。Tailwind 的 sourcemap 警告已被抑制，以提供更清晰的构建输出。

## ESLint 配置

项目使用 @antfu/eslint-config 规则集，详细配置请参考 [docs/eslint-antfu.md](docs/eslint-antfu.md)。

## 许可证

[MIT](LICENSE)

---

创建者：YuGe
