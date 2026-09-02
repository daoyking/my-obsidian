---
title: 生成式UI
aliases: [Generative UI, Agentic Frontend, 生成式界面, 智能体前端]
type: concept
tags: [ai, llm, agent, frontend, ui]
created: 2026-09-01
updated: 2026-09-02
sources: ["[[raw/articles/awesome-llm-apps]]"]
status: active
---

# 生成式 UI（Generative UI / Agentic Frontend）

## 定义

Agent 的输出不是纯文本，而是**可交互的 UI 组件**——表单、卡片、图表、看板、可编辑计划。模型在对话过程中直接渲染出界面，用户在这个界面上继续与 Agent 协作，而不是读一段描述再自己动手。

## 为什么重要

- **这是前端工程师在 Agent 时代的主战场**。过去二十年我们写的是「人驱动界面」，现在要写的是「模型驱动界面」——组件要能被模型生成、被模型理解、被模型增量修改。
- 纯文本输出是 Agent 能力的瓶颈：一段预算分析文字，远不如一张可拖拽、可改参数、实时重算的图表卡片有用。
- 在 [[awesome-llm-apps]] 中，Generative UI 已**独立成一个分类**（`generative_ui_agents`，7 个项目），说明它不再是实验品而是稳定范式。

## 核心机制

1. **结构化输出 → 组件映射**：模型输出符合 schema 的 JSON（组件类型 + props），前端按 schema 渲染
2. **工具调用即 UI 事件**：Agent 的每次工具调用渲染成一张「工作区卡片」，过程可见可回溯
3. **双向协作**：UI 上的用户操作回流成对话上下文（如看板拖卡片 → Agent 知道任务状态变了）
4. **协议层**：MCP Apps（把 UI 作为 MCP 资源返回）、AG-UI（Agent-UI 交互协议）——与 [[MCP]]、[[Agent-Plugins]] 同属 Agent 交互标准化浪潮

## 示例（来自 [[raw/articles/awesome-llm-apps]]）

| 项目 | 做什么 | 关键形式 |
|---|---|---|
| Generative UI Starter Project | 对话式看板，人和 Agent 共同操作 | 可编辑状态 |
| AI Financial Coach Agent | 预算/储蓄/负债计划渲染成卡片 | 结构化数据卡 |
| AI Dashboard Canvas Agent | 对话描述仪表盘，图表在画布上组装 | 图表生成 |
| AI MCP App Builder | 描述一个 MCP app，返回活的沙箱实例 | 应用生成 |
| AI Shadcn Component Generator | 聊出生产可用的 shadcn 组件 | 代码生成 |
| AI Deep Research Agent | 每次工具调用渲染成工作区卡片 | 过程可视化 |

## 我的观点

- 生成式 UI = **前端工程 + 上下文工程**的交叉地带：组件设计不再只给人看，还要给模型看（schema 是否好生成、props 是否好推理）。这是 [[上下文工程]] 在 UI 层的延伸。
- 对求职定位的启发：我能讲的差异化故事正是「能把 Agent 的输出做成真正好用的界面」——纯后端 Agent 工程师做不了，纯前端又不懂 Agent。
- 风险：这类组件高度依赖模型的结构化输出稳定性，需要 schema 校验 + 降级渲染（否则一次格式错误整个界面崩）。

## 待研究问题

- [ ] MCP Apps 与 AG-UI 协议的具体差异？哪个生态更成熟？
- [ ] 在 Vue 3 里实现「schema → 组件」渲染层的最佳实践？（对比 React/shadcn 生态）
- [ ] 降级策略：模型输出非法 JSON 时如何优雅兜底？

## 相关概念

- [[Agent]] · [[MCP]] · [[Agent-Plugins]] · [[上下文工程]] · [[工具调用]] · [[界面世界模型]]

## 相关实体

- [[awesome-llm-apps]] · [[Vue]] · [[React]] · [[Vercel-AI-SDK]] · [[Mastra]] · [[TypeScript]]

## 来源

- [[raw/articles/awesome-llm-apps]]（Generative UI and Agentic Frontends 分类，7 个项目）
