---
title: Claude Code
aliases: [Claude Code CLI, Anthropic Claude Code]
type: entity
tags: [ai, coding, agent, cli, tool, anthropic]
created: 2026-08-08
updated: 2026-08-22
sources: ["[[raw/articles/ai-hot-2026-08-07]]", "[[raw/articles/ai-hot-2026-08-08]]", "[[raw/articles/ai-hot-2026-08-10]]", "[[raw/articles/ai-hot-2026-08-11]]", "[[raw/articles/ai-hot-2026-08-13]]", "[[raw/articles/ai-hot-2026-08-14]]", "[[raw/articles/ai-hot-2026-08-15]]", "[[raw/articles/ai-hot-2026-08-19]]", "[[raw/articles/ai-hot-2026-08-21]]", "[[raw/articles/ai-hot-2026-08-22]]"]
status: active
---

# Claude Code

## 是什么

Anthropic 推出的命令行 AI 编码代理，以 Claude 模型为核心，支持终端内对话式编程、代码库理解、文件编辑和命令执行。是 [[Coding-Agent]] 领域的主流工具之一。

## 核心特性

- 终端原生：在 CLI 中运行，直接操作文件系统和执行命令
- 代码库感知：能理解大型项目结构和上下文
- 安全控制：市场（marketplace）权限管理，支持已知/屏蔽市场仓库
- v2.1.223（2026-08-07）：新增 `owner/*` 通配符条目，可批量允许或阻止 GitHub 组织下的所有市场仓库；修复多项安全漏洞
- 会话间互发消息（2026-08-08）：多会话协作新功能——一个会话可将摘要发送给另一个会话（非完整历史/文件），接收方在任务进行中实时获取，避免跨会话重复解释上下文
- **auto 模式默认开启（2026-08-10 公告，下周生效）**：在 Anthropic 宣布通过模型训练基本解决提示注入威胁后（见 [[提示注入]]），Claude Code 的 auto 模式将于下周默认开启——安全护城河筑牢后才放开自主执行权限，是"安全先行、自主后至"的工程范例
- **auto 模式默认开启原理（2026-08-11）**：Anthropic 公开 auto 模式的判定机制——哪些操作可"安全运行"而无需逐次审批；这是 2026-08-10 提示注入基本解决后的产品化落地，安全护城河筑牢才放开自主执行（见 [[提示注入]] · [[Agent安全]]）
- **未发布研究版 Claude 突破黎曼 zeta 零点下界（2026-08-11）**：Anthropic 员工让 Claude 挑战黎曼猜想虽未成功，但一个未发布研究版在相关问题上将满足黎曼猜想的 zeta 零点比例下界从 41.6% 提升至 67.2%，展示前沿模型在纯数学推理上的潜力
- **v2.1.229（2026-08-13）**：
  - 新增**远程控制会话恢复**（远程断线后可恢复会话）
  - 新增**自托管 runner 的服务器端 hook 支持**
  - 新增**插件市场命令源**（marketplace 作为命令来源）
  - 修复：长响应流式输出丢失 / 窄终端渲染崩溃 / Windows 扩展路径崩溃
  - 改进：工作流扇出复用缓存提示前缀；`/commit-push-pr` 对危险 git/gh 命令不再自动批准（安全收紧）
- 支持 MCP 连接器扩展能力
- **产品线扩展（2026-08-13）**：Claude in Chrome 侧边栏升级为 [[Claude-Cowork]] 会话，与 Claude Code 形成"浏览器 / 终端"场景互补
- **v2.1.232（2026-08-14）**：
  - **默认启用 Subagent forking**——子代理可继承完整对话与提示缓存；交互会话中的非队友代理默认后台运行
  - 新增 **GitLab token 密钥脱敏**
  - 新增**插件市场 GitLab 仓库克隆支持**
  - 修复：PowerShell 与 Windows 权限绕过、嵌套 git 仓库信任继承等多项安全漏洞
- **v2.1.233（2026-08-15）**：
  - 为 `--worktree` 标志和 agents 视图新增 **GitLab 合并请求 URL 支持**（延续 08-14 的 GitLab 适配线）
  - 新增可选的 **forward_user_identity 网关设置**，可按用户归因支出（企业成本治理）
- **会话 token 价值最大化（2026-08-15 官方指南）**：token 成本由模型 / 输入输出 token / 提示缓存三因素决定，**输出 token 价格约为输入的 5 倍**
  - 任务间运行 `/clear` 减少无关上下文回传，降低 token 用量
  - 会话中途切换模型或 effort 级别会**破坏提示缓存**，增加成本
  - 这是本库 [[Agent持续进化]] 四法中「经验→参数」的成本侧实践——缓存复用是 Agent 经济性的关键
- **Gmail / Google Drive 连接器（2026-08-19）**：Claude 可直接在 Gmail 中发送邮件并管理 Google Drive 文件；回复邮件时自动起草、发送，用户可控制审批时机；所有付费套餐可用。这是 Claude 产品线向生产力场景扩展的又一里程碑——从终端编码 → 浏览器办公 → 邮件/文档管理，形成"终端 + 浏览器 + 生产力工具"三场景闭环
- **Claude Tag 担任 CI/CD 一线响应者（2026-08-19）**：Anthropic CI 工程师用 Claude Tag 构建值班智能体，事故后中位 14 分钟发布首份证据分析，最快案例 3 分钟内验证修复并确认错误率恢复基线；通过 Slack / Datadog / Grafana 工具访问及 GitHub 技能文件实现；Anthropic 已发布通用设置套件供其他团队部署。这是 [[Claude-Tag]] 在生产环境的高价值实践——"AI 接管运维值班"从概念进入实证
- **v2.1.237（2026-08-21）**：
  - 修复使用 LLM 网关或自定义 base URL 的会话中的提示词缓存问题
  - 新增内置**"简洁"输出风格**——直接给出结果，跳过开场白和叙述
- **v2.1.238（2026-08-21）**：
  - 新增 keybindingFlavor 设置（可设为 "readline" 使 Ctrl+W 删除至前一个空白符）
  - 为插件市场引入 headersHelper 以生成 HTTP 头
- **v2.1.239（2026-08-22）**：
  - 成本估算（/cost、状态栏、--max-budget-usd）现包含数据驻留工作区 1.1 倍美国专属推理溢价
  - 为 Bedrock、Vertex、Foundry 等新增全屏渲染器
  - 修复多项 Bug
  - 来源：[[raw/articles/ai-hot-2026-08-22]]

## 适用场景

- 大型代码库的 AI 辅助开发和重构
- 终端工作流中的编码 Agent
- 本知识库的 Ingest/Lint 流程可由 Claude Code 驱动（与 WorkBuddy 类似）

## 在我项目中的使用

> 关联到 projects/ 下的具体项目。

- 日常 AI 辅助编码工具之一，与 [[Cursor]] 互补
- 本库 [[Agent持续进化]] 四法中「经验→程序」的 Skill 沉淀工具

## 相关实体

- [[Cursor]] · [[Vscode]] · [[Claude-Cowork]]（同属 Claude 产品线，浏览器 / 终端场景互补）· [[Claude-Tag]]（Claude 产品线在 Slack 数据分析场景的延伸）

## 相关概念

- [[Coding-Agent]] · [[Harness工程]] · [[上下文工程]] · [[MCP]] · [[Agent持续进化]] · [[提示注入]] · [[Agent安全]]

## 来源

- [[raw/articles/ai-hot-2026-08-07]]（Claude Code v2.1.223 发布）
- [[raw/articles/ai-hot-2026-08-08]]（Claude Code 会话间互发消息）
- [[raw/articles/ai-hot-2026-08-10]]（auto 模式下周默认开启）
- [[raw/articles/ai-hot-2026-08-11]]（auto 模式默认开启原理、Claude 研究版突破黎曼 zeta 零点下界）
- [[raw/articles/ai-hot-2026-08-13]]（Claude Code v2.1.229 发布 + Claude Cowork 产品线扩展）
- [[raw/articles/ai-hot-2026-08-14]]（Claude Code v2.1.232：默认启用 Subagent forking + GitLab 支持与多项安全修复）
- [[raw/articles/ai-hot-2026-08-15]]（Claude Code v2.1.233：GitLab MR 支持 + forward_user_identity 网关；会话 token 价值最大化指南）
- [[raw/articles/ai-hot-2026-08-19]]（Gmail / Google Drive 连接器 + Claude Tag CI/CD 一线响应者实践）
- [[raw/articles/ai-hot-2026-08-21]]（Claude Code v2.1.237/v2.1.238 发布：简洁输出风格 + readline 键位 + 提示词缓存修复）
- [[raw/articles/ai-hot-2026-08-22]]（Claude Code v2.1.239：成本估算升级 + Bedrock/Vertex/Foundry 全屏渲染器）
- [[raw/papers/ai-agents-in-depth]]（Coding Agent 章节参考）
