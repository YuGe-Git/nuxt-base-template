# 贡献指南

感谢您对 Nuxt-Base-Template 项目的兴趣！我们非常欢迎社区成员参与贡献。本文档将指导您如何参与项目开发。

## 行为准则

参与本项目的所有贡献者都应遵循友好、包容的态度。我们希望创建一个积极的环境，让每个人都能自由表达想法并做出贡献。

## 如何贡献

您可以通过多种方式为项目做出贡献：

1. **报告Bug**
2. **提交功能请求**
3. **编写代码**
4. **改进文档**
5. **帮助其他用户**

## 开发流程

### 环境设置

1. Fork项目仓库
2. 克隆您的Fork到本地
   ```bash
   git clone https://github.com/YuGe-Git/nuxt-base-template.git
   cd nuxt-base-template
   ```
3. 安装依赖
   ```bash
   pnpm install
   ```
4. 创建一个新分支
   ```bash
   git checkout -b feature/your-feature-name
   # 或
   git checkout -b fix/issue-you-are-fixing
   ```

### 代码规范

本项目使用ESLint和TypeScript进行代码规范检查。请确保您的代码符合这些规范：

- 遵循[@antfu/eslint-config](https://github.com/antfu/eslint-config)规则
- 编写类型安全的代码，充分利用TypeScript
- 保持代码简洁和模块化
- 为公共API添加适当的文档注释

运行代码检查：

```bash
pnpm lint
```

自动修复代码：

```bash
pnpm lint:fix

```

更多命令请参考 [scripts.md](docs/scripts.md)

### 组件开发规范

1. **单一职责原则**：每个组件应该只做一件事
2. **组件命名**：使用PascalCase命名组件
3. **文件结构**：保持组件目录结构一致，按功能/模块分组
4. **Props类型定义**：为所有props提供正确的类型定义
5. **测试覆盖**：为组件添加适当的单元测试

### 提交规范

提交消息应遵循以下格式：

```
<类型>(<范围>): <描述>

[可选的详细描述]

[可选的关闭问题引用]
```

类型包括：
- **feat**: 新功能
- **fix**: 修复Bug
- **docs**: 文档更改
- **style**: 不影响代码含义的更改（空格、格式等）
- **refactor**: 既不修复Bug也不添加功能的代码更改
- **perf**: 提高性能的代码更改
- **test**: 添加或修正测试
- **chore**: 对构建过程或辅助工具的更改

### 提交Pull Request

1. 确保您的分支是基于最新的`main`分支
2. 确保您的变更通过了所有测试
3. 提交PR到`main`分支
4. 在PR描述中详细说明您的更改
5. 如果解决了某个Issue，请在PR描述中引用该Issue（例如：`closes #123`）

## 功能开发指南

### 近期计划功能

如果您想参与开发近期计划的功能，请参考以下建议：

#### Prisma ORM 集成

- 建议查看Nuxt和Prisma的官方文档
- 实现类型安全的数据库访问层
- 提供基本的CRUD操作示例

#### 统一状态管理

- 使用Pinia作为状态管理解决方案
- 实现持久化存储
- 创建类型安全的store模板

#### 组件库扩展

- 参考`src/components/base`目录了解现有组件
- 确保新组件遵循项目的设计系统
- 为每个组件提供文档和使用示例

### 中期和长期计划

对于中期和长期计划的功能，建议先开issue讨论实现方案，以确保与项目方向一致。

## 报告问题

报告问题时，请使用GitHub Issues，并提供以下信息：

1. 问题的简明描述
2. 重现步骤
3. 预期行为vs实际行为
4. 相关的日志或截图
5. 系统环境（浏览器、操作系统等）

## 联系方式

如有任何问题，可以通过以下方式联系项目维护者：

- GitHub Issues
- [邮件联系](mailto:your-email@example.com)（请替换为您的邮箱）

感谢您的贡献！

---

本文档基于[Contributor Covenant](https://www.contributor-covenant.org/) 