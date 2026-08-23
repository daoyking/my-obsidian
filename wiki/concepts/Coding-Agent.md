---
title: Coding Agent
aliases: [代码Agent, 编程Agent]
type: concept
tags: [ai, llm, agent, coding]
created: 2026-08-07
updated: 2026-08-22
sources: ["[[raw/papers/ai-agents-in-depth]]", "[[raw/articles/ai-hot-2026-08-07]]", "[[raw/articles/ai-hot-2026-08-08]]", "[[raw/articles/ai-hot-2026-08-11]]", "[[raw/articles/ai-hot-2026-08-13]]", "[[raw/articles/ai-hot-2026-08-14]]", "[[raw/articles/ai-hot-2026-08-15]]", "[[raw/articles/ai-hot-2026-08-22]]"]
status: active
---

# Coding Agent

## 定义

以写代码/改代码为核心能力的 Agent。代码不仅是输出产物，更是 Agent 的「元能力」——思考工具、业务约束、系统适配器、生成式 UI，甚至「代码创造代码」（Agent 自举）。

## 为什么重要

- Coding 是 Agent 最成熟的能力域，也是理解 Agent 机制的最佳入口（Claude Code、Cursor、WorkBuddy）
- 代码即思考：让模型用代码推理（计算、验证）比纯文本推理更可靠
- 前端工程师的强相关：日常用的 AI 编码工具都是 Coding Agent

## 核心要点（第 5 章）

来自 [[raw/papers/ai-agents-in-depth]]：
- **Sessionless 设计**：每次任务独立，避免跨会话状态污染
- **整体流程**：理解需求 → 检索代码 → 编辑 → 测试 → 修复
- **Harness 实践**：文件编辑工具、搜索工具是 Coding Agent 的关键基建
- **故障与错误恢复**：失败回滚、重试策略
- **代码的六重角色**：思考工具 / 业务规则约束 / 多媒体生成 / 系统适配器 / 生成式 UI / Agent 自举

## 与本知识库的关联

- 本库的 Ingest/Lint 流程就是由 Coding Agent（WorkBuddy）执行的
- Skill 沉淀 = 「代码作为程序记忆」（见 [[记忆系统]]）

## 主流工具

- [[Claude-Code]]（Anthropic，CLI 原生）
- [[Cursor]]（AI 原生编辑器，基于 VS Code 分支）
- WorkBuddy（本知识库的日常驱动 Agent）
- GitHub Copilot（斜杠命令工作流：/plan /spar /autopilot）

## 相关概念

- [[Agent]] · [[Harness工程]] · [[上下文工程]] · [[记忆系统]] · [[Agent-Plugins]]

## 相关主题

- [[AI-Agents-in-Depth]] · [[AI资讯]]

## 近期动态

- **Claude Code 会话间互发消息**（2026-08-08）：多会话协作新功能，会话间可发送摘要消息实现跨会话任务委派。见 [[raw/articles/ai-hot-2026-08-08]]。
- **Databricks 规模化管控 AI 编程成本**（2026-08-08）：通过成本追踪、工具选型与使用策略，在团队扩大时维持代码质量与效率同时控制支出。见 [[raw/articles/ai-hot-2026-08-08]]。
- **OpenChamber 基于代理的开发环境（2026-08-11）**：跨桌面 / 浏览器 / 手机 / VS Code，支持会话目标、多模型并行融合、变更走查、issue→PR 全流程、定时任务，基于 OpenCode SDK，本地存储 + Private Relay 加密。见 [[raw/articles/ai-hot-2026-08-11]]。
- **Claude Code 自动模式默认开启原理（2026-08-11）**：Anthropic 公开 auto 模式的安全判定机制（什么操作可安全运行），是提示注入基本解决后的产品化落地。见 [[Claude-Code]] · [[raw/articles/ai-hot-2026-08-11]]。
- **Linear 如何构建 Linear Agent（2026-08-11）**：通过系统提示词 / 工具设计 / 产品模型 / 运行范围 / 底层 harness 划定边界，系统技能渐进加载避免一次性暴露过多上下文——是 Harness 边界设计的实例。见 [[Harness工程]] · [[raw/articles/ai-hot-2026-08-11]]。
- **Claude Code v2.1.229（2026-08-13）**：新增远程控制会话恢复、自托管 runner 服务器端 hook、插件市场命令源；改进工作流扇出复用缓存提示前缀；`/commit-push-pr` 对危险 git/gh 命令不再自动批准（安全收紧）。见 [[Claude-Code]] · [[raw/articles/ai-hot-2026-08-13]]。
- **AutoGPT 用 AGENTS.md 和技能门控管理 AI 生成的 PR（2026-08-13）**：维护者发现 AI 智能体不会主动阅读文档，把指令放进 AGENTS.md 和技能文件置于代码目录旁；通过 PR 模板、测试计划、CI 覆盖率、CLA 签名等门控将 AI 提交的 PR 从"不可用"变为"可用但不符合路线图"。CLA 因需浏览器 OAuth 被用作"人类探测器"。见 [[Harness工程]] · [[Agent持续进化]] · [[raw/articles/ai-hot-2026-08-13]]。
- **RingCentral 全员 AI 原生工作流（2026-08-13）**：通过全员发放 ChatGPT Work 和 Codex，推动从工程到运营的 AI 原生开发，AI-Native Challenge 让数千名员工（含非技术人员）交付可运行项目。见 [[raw/articles/ai-hot-2026-08-13]]。
- **DeepSeek Harness v0.1"一切皆插件"（2026-08-14）**：MIT 开源智能体框架，基于 Cordis 元框架；模型 / 工具 / 技能 / 会话 / 沙箱 / 文件系统 / 循环 / 编排 / UI 九大要素全部插件化。是把 [[Harness工程]] 推到极致的 Agent 框架，Coding Agent 可作为其"宿主"。见 [[DeepSeek-Harness]] · [[raw/articles/ai-hot-2026-08-14]]。
- **Cursor builds 云智能体加速（2026-08-14）**：后台持续准备就绪的开发环境副本，云智能体启动速度最高提升 3 倍；内部环境启动快 10 倍，首 token 快 3 倍；8 月 17 日默认启用。见 [[Cursor]] · [[raw/articles/ai-hot-2026-08-14]]。
- **Cursor 获 AIUC-1 安全认证（2026-08-14）**：通过智能体安全与可靠性独立审查；100+ 财富 500 强 CISO 参与制定；MITRE / 云安全联盟 / 斯坦福支持；千个场景全通过；每季度复测 + 年度审计。**Agent 安全进入认证化阶段**。见 [[Cursor]] · [[Agent安全]] · [[raw/articles/ai-hot-2026-08-14]]。
- **Claude Code v2.1.232（2026-08-14）**：默认启用 subagent forking（子代理继承完整对话+提示缓存，非队友代理后台运行）；新增 GitLab token 脱敏 + 插件市场 GitLab 克隆；修复 PowerShell / Windows 权限绕过、嵌套 git 仓库信任继承等安全漏洞。见 [[Claude-Code]] · [[raw/articles/ai-hot-2026-08-14]]。
- **Boris Cherny 让 Claude 接管应用日常维护（2026-08-14）**：Slack 频道运行崩溃模糊测试 / 重复代码统一 / 死代码移除；数周开 388 PR，180 个经 Claude Code Review + 人工审核合并（46% 合并率）；Claude 通常一次改对，出错时调整例程次日改进。**Coding Agent 在"日常维护"场景达生产可用**。见 [[Harness工程]] · [[raw/articles/ai-hot-2026-08-14]]。
- **JetBrains CTO 详谈 Claude Fable 5 部署（2026-08-14）**：用私有仓库评测前沿模型；Claude Fable 5 Python 通过率 44.3% vs Opus 4.8 28.2%（+16pp），解题步骤减 22%；偏好零数据保留，接受有限审查调查最严重问题。是 Coding Agent 工具选型的企业级评测范例。见 [[raw/articles/ai-hot-2026-08-14]]。
- **Cursor 正式被 SpaceX 收购（2026-08-15）** ⭐：完成自 4 月启动的收购流程，成为 SpaceX 旗下 AI 编码能力线；合并后获得全球最大 GPU 集群，构建更强且更低成本模型；[[Grok]] 4.6 是合作早期成果。**这是 Coding Agent 领域迄今最大并购**——标志 AI 编码工具从独立产品走向"算力巨头 × 编码能力"垂直整合。见 [[Cursor]] · [[raw/articles/ai-hot-2026-08-15]]。
- **Claude Code v2.1.233（2026-08-15）**：为 --worktree 标志和 agents 视图新增 GitLab 合并请求 URL 支持（延续 08-14 GitLab 适配线）；新增可选 forward_user_identity 网关设置按用户归因支出（企业成本治理）。见 [[Claude-Code]] · [[raw/articles/ai-hot-2026-08-15]]。
- **Claude Code 会话 token 价值最大化指南（2026-08-15）**：输出 token 价格约为输入 5 倍；任务间 /clear 减少无关上下文回传；会话中途切换模型/effort 级别会破坏提示缓存增加成本。是 Coding Agent 经济性（缓存复用）的官方实践。见 [[Claude-Code]] · [[raw/articles/ai-hot-2026-08-15]]。
- **GLM-5.3 编程能力开源第一（2026-08-15）**：智谱 [[GLM]]-5.3 编程能力较前代提升 50%，Terminal Bench 3.0 开源第一，接近 Claude Fable 5；涌现网络安全能力（CyberGym 84.5%）；上线 [[ZCode]]/AutoClaw；权重两周后开源。见 [[GLM]] · [[ZCode]] · [[raw/articles/ai-hot-2026-08-15]]。
- **Claude Code v2.1.239（2026-08-22）**：成本估算（/cost、状态栏、--max-budget-usd）现包含数据驻留工作区 1.1 倍美国专属推理溢价，并为 Bedrock/Vertex/Foundry 等新增全屏渲染器。见 [[Claude-Code]] · [[raw/articles/ai-hot-2026-08-22]]。

## 来源

- [[raw/papers/ai-agents-in-depth]]（第 5 章）
- [[raw/articles/ai-hot-2026-08-07]]（Cursor Router、Claude Code v2.1.223、GitHub Copilot 斜杠命令等）
- [[raw/articles/ai-hot-2026-08-08]]（Claude Code 会话间互发消息、Databricks AI 编程成本管控）
- [[raw/articles/ai-hot-2026-08-11]]（OpenChamber、Claude Code auto 原理、Linear Agent 构建方法）
- [[raw/articles/ai-hot-2026-08-13]]（Claude Code v2.1.229、AutoGPT AI PR 门控、RingCentral AI 原生工作流）
- [[raw/articles/ai-hot-2026-08-14]]（DeepSeek Harness v0.1、Cursor builds + AIUC-1、Claude Code v2.1.232、Boris Cherny 388 PR、JetBrains Claude Fable 5 部署）
- [[raw/articles/ai-hot-2026-08-15]]（Cursor 被 SpaceX 收购、Claude Code v2.1.233 + token 价值指南、GLM-5.3 编程开源第一）
- [[raw/articles/ai-hot-2026-08-22]]（Claude Code v2.1.239 成本估算升级 + Bedrock/Vertex/Foundry 渲染器）
