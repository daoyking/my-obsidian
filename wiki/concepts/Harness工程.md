---
title: Harness 工程
aliases: [Harness Engineering, Harness, 框架工程]
type: concept
tags: [ai, llm, agent, engineering, harness]
created: 2026-08-07
updated: 2026-08-22
sources: ["[[raw/papers/ai-agents-in-depth]]", "[[raw/articles/ai-hot-2026-08-11]]", "[[raw/articles/ai-hot-2026-08-13]]", "[[raw/articles/ai-hot-2026-08-14]]", "[[raw/articles/ai-hot-2026-08-22]]", "[[raw/articles/ai-hot-2026-09-03]]"]
status: active
---

# Harness 工程

## 定义

在 LLM 之外、围绕模型构建的工程层（提示词、工具、记忆、编排、护栏等），用于补足模型当前还做不稳的能力。它是「模型之外的竞争力」。核心思想：模型此刻的能力边界，就是 Harness 此刻的价值所在。

## 为什么重要

- 模型在快速进化，但工程时间尺度上仍有大量做不稳的事——Harness 先补上
- 不是对「苦涩的教训」（bitter lesson，即算力/模型规模终将胜出）的抵抗，而是该教训在工程时间尺度上的实践
- 模型每内化一层能力，Harness 就卸下一层，转而兜底新的能力前沿——能力演进可追踪

## 核心机制（Harness 五功能）

来自 [[raw/papers/ai-agents-in-depth]] 第 1 章：Harness 围绕模型提供五个功能（上下文管理、工具、记忆、编排、护栏），核心原则是「让模型专注它现在能做好的，其余由工程兜底」。

```
[模型 LLM] ← 被 Harness 包裹
   上下文管理 · 工具 · 记忆 · 编排模式 · 护栏
```

## 编排模式：工作流 vs 自主

- **工作流（Workflow）**：预定义步骤、确定性高、可控
- **自主（Autonomous）**：模型自规划、灵活但可靠性低
- 实践中按任务可靠性要求在两者间取舍

## 与苦涩教训的关系

bitter lesson 指出：长期看，靠算力+通用方法的模型终将超越手工技巧。Harness 不否定它，而是承认「长期对，但当下模型还不够」，用工程补足当下的缺口，并随模型进步持续退让。

## 近期动态

- **Linear Agent 的边界设计（2026-08-11）**：Linear 未为 Agent 编写固定路径，而是通过系统提示词（沟通风格 / 硬性边界 / 概念解释）、工具设计（把约束编码进参数，使无效操作难以执行）、产品模型、运行范围及底层自定义 harness 划定边界；并引入"系统技能"作为组合单元按需渐进加载，避免一次性暴露过多上下文。见 [[raw/articles/ai-hot-2026-08-11]]。
- **OpenChamber 代理开发环境（2026-08-11）**：跨桌面 / 浏览器 / 手机 / VS Code 的代理优先 IDE，支持会话目标、多模型并行融合、变更走查、issue→PR 全流程、定时任务，基于 OpenCode SDK，本地存储 + Private Relay 端到端加密。见 [[raw/articles/ai-hot-2026-08-11]] · [[Coding-Agent]]。
- **AutoGPT 用门控机制管理 AI 生成的 PR（2026-08-13）**：AutoGPT 维护者发现 AI 智能体不会主动阅读文档，因此把指令放进 `AGENTS.md` 和技能文件并置于代码目录旁；通过强制 PR 模板、测试计划、CI 覆盖率门槛、CLA 签名等门控机制把 AI 提交的 PR 从"不可用"转变为"可用但不符合路线图"。**CLA 签名因需浏览器和 OAuth 流程，被用作区分人类与智能体的"人类探测器"**——这是把"人在回路"约束编码进工程流程（而非依赖 AI 自觉）的 Harness 实践。见 [[raw/articles/ai-hot-2026-08-13]] · [[Agent持续进化]] · [[Coding-Agent]]。
- **DeepSeek Harness v0.1"一切皆插件"（2026-08-14）**：DeepSeek 以 MIT 许可证开源的智能体框架，基于 Cordis 元框架构建。核心设计"一切皆插件"——模型、工具、技能、会话、沙箱、文件系统、循环、编排及 UI **九大要素全部插件化**，无任何"硬编码"特例。这是 Harness 五功能（上下文 / 工具 / 记忆 / 编排 / 护栏）的极致插件化表达——把"模型本身"也插件化（而不仅是工具/记忆），是对"模型 × Harness 协同"的激进推演。见 [[DeepSeek-Harness]] · [[raw/articles/ai-hot-2026-08-14]] · [[Agent持续进化]]。
- **Boris Cherny 让 Claude 接管应用日常维护（2026-08-14）**：通过 Slack 频道运行崩溃模糊测试、重复代码统一、死代码移除等日常任务，数周内自动开出 388 个 PR，其中 180 个经 Claude Code Review 和人工审核后合并。Claude 通常一次就能改对，出错时通过调整例程次日改进。这是 Harness 在"日常维护"场景的实证——**Agent 在"重复性 / 边界明确"任务上已达生产可用**（180/388 ≈ 46% 合并率），但 Harness 仍需提供"例程可调整"的反馈通道。见 [[raw/articles/ai-hot-2026-08-14]] · [[Coding-Agent]] · [[Agent持续进化]]。
- **Anthropic AI 原生 SDLC 实战手册（2026-08-22）**：Anthropic 发布 AI 原生 SDLC 手册，将传统六阶段软件开发生命周期重构为 AI 嵌入各环的闭环流程。核心思路：当代代码不再瓶颈时，规划/审查/部署等人速环节成为新约束，需通过 Claude 将需求压缩为 `intent.md`、以技能编码标准、用持续评测替代阶段门控，并保留人工对关键代码的审查。这是 [[Harness工程]] 在企业级 SDLC 场景的实证——"把流程编码进 AI 工作流"而非依赖人工纪律。见 [[raw/articles/ai-hot-2026-08-22]] · [[Agent]] · [[Coding-Agent]]。
- **Google harness 工程定义 + ADK 2.0 / Antigravity SDK（2026-09-03）**：Google 员工 Shir Meir Lador 正式介绍 harness 工程概念——用确定性组件包裹 LLM，包括编排层、执行沙箱、状态持久化和验证工具，让 Agent 不需逐行人工审查即可安全生成代码。ADK 2.0 与 Antigravity SDK 用于演示自动修复编码循环。见 [[raw/articles/ai-hot-2026-09-03]]。

## 相关概念

- [[Agent]] · [[上下文工程]] · [[ReAct]] · [[Agent安全]]

## 相关主题

- [[AI-Agents-in-Depth]]

## 来源

- [[raw/papers/ai-agents-in-depth]]（第 1 章 1.2）
- [[raw/articles/ai-hot-2026-08-11]]（Linear Agent 构建方法、OpenChamber 代理开发环境）
- [[raw/articles/ai-hot-2026-08-13]]（AutoGPT 用 AGENTS.md 和技能门控管理 AI 生成的 PR）
- [[raw/articles/ai-hot-2026-08-14]]（DeepSeek Harness v0.1"一切皆插件"、Boris Cherny 388 PR 实践）
- [[raw/articles/ai-hot-2026-08-22]]（Anthropic AI 原生 SDLC 实战手册：将六阶段 SDLC 重构为 AI 嵌入闭环流程）
