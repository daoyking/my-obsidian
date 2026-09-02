---
title: 生成式UI
aliases: [Generative UI, Agentic Frontend, 生成式界面, 智能体前端]
type: concept
tags: [ai, llm, agent, frontend, ui]
created: 2026-09-01
updated: 2026-09-02
sources: ["[[raw/articles/awesome-llm-apps]]", "[[raw/articles/awesome-llm-apps-generative-ui]]"]
status: active
---

# 生成式 UI（Generative UI / Agentic Frontend）

> **本页是概览**：回答「是什么、为什么重要」。落地选型与协议细节见 [[生成式UI渲染协议]]（五层抽象阶梯 + Vue 3 落地方案）。

## 定义

Agent 的输出不是纯文本，而是**可交互的 UI 组件**——表单、卡片、图表、看板、可编辑计划。模型在对话过程中直接渲染出界面，用户在这个界面上继续与 Agent 协作，而不是读一段描述再自己动手。

## 为什么重要

- **这是前端工程师在 Agent 时代的主战场**。过去二十年我们写的是「人驱动界面」，现在要写的是「模型驱动界面」——组件要能被模型生成、被模型理解、被模型增量修改。
- 纯文本输出是 Agent 能力的瓶颈：一段预算分析文字，远不如一张可拖拽、可改参数、实时重算的图表卡片有用。
- 在 [[awesome-llm-apps]] 中，Generative UI 已**独立成一个分类**（`generative_ui_agents`，**8 个项目**，2026-09-02 实测），说明它不再是实验品而是稳定范式。

## 核心机制

1. **结构化输出 → 组件映射**：模型输出符合 schema 的 JSON（组件类型 + props），前端按 schema 渲染——依赖 [[结构化输出]] 的可靠性
2. **工具调用即 UI 事件**：Agent 的每次工具调用渲染成一张「工作区卡片」，过程可见可回溯
3. **双向协作**：UI 上的用户操作回流成对话上下文（如看板拖卡片 → Agent 知道任务状态变了）
4. **协议层**：[[AG-UI]]（事件流传输）、[[A2UI]]（声明式组件树）、MCP Apps（把 UI 作为 MCP 资源返回）——与 [[MCP]]、[[Agent-Plugins]] 同属 Agent 交互标准化浪潮

> ⚠️ 容易误解的一点：**这四种机制不是并列选项，而是一条从「前端控制」到「Agent 控制」的光谱**。判断一个方案在哪一层、该选哪一层，见 [[生成式UI渲染协议]] 的五层抽象阶梯与选型决策树。

## 示例（来自 [[raw/articles/awesome-llm-apps-generative-ui]]，8 个全量）

| 项目 | 做什么 | 关键形式 | 层级 |
|---|---|---|---|
| Generative UI Starter Project | 对话式看板，人和 Agent 共同操作 | 共享状态（+ [[A2UI]] 双模式） | L2 / L3 |
| AI Financial Coach Agent | 预算/储蓄/负债计划渲染成卡片 | 工具渲染卡片 | L1 |
| AI Dashboard Canvas Agent | 图表、KPI 持续写入可寻址画布 | Agentic Canvas | L2+ |
| AI Deep Research Agent | 每次工具调用渲染成工作区卡片 | 过程可视化 + sidecar 工作区 | L1 |
| AI Knowledge Explorer | 文件/代码 → 可探索的知识图谱 | 共享状态图 | L2 |
| AI MCP App Builder | 描述一个 MCP app，Agent 在 E2B 沙箱里现写 | 现场生成应用 | L5 |
| AI Shadcn Component Generator | 聊出生产可用的 shadcn 组件 | Schema 驱动组件合成 | L3 |
| MCP Apps Generative UI Showcase | 订机票/酒店/看板在聊天里跑起来 | 沙箱 iframe 应用 | L4 |

## 我的观点

- 生成式 UI = **前端工程 + 上下文工程**的交叉地带：组件设计不再只给人看，还要给模型看（schema 是否好生成、props 是否好推理）。这是 [[上下文工程]] 在 UI 层的延伸。
- 对求职定位的启发：我能讲的差异化故事正是「能把 Agent 的输出做成真正好用的界面」——纯后端 Agent 工程师做不了，纯前端又不懂 Agent。
- 风险：这类组件高度依赖模型的结构化输出稳定性，需要 schema 校验 + 降级渲染（否则一次格式错误整个界面崩）。

## 待研究问题

- [x] ~~MCP Apps 与 AG-UI 协议的具体差异？~~ → 已解答：**不是竞争关系，是分层互补**。AG-UI 在传输层承载 L1–L3，MCP Apps 在 L4 解决「工具自带 UI 资源」。详见 [[生成式UI渲染协议]] 的协议对照表
- [x] ~~在 Vue 3 里实现「schema → 组件」渲染层的最佳实践？~~ → 已给出方案：[[CopilotKit]] 是 React-only，但 AG-UI 传输层无关，Vue 3 自研客户端约 200 行。见 [[生成式UI渲染协议]] 的 Vue 3 落地方案（含 `useAGUI` composable、Catalog 类型绑定、降级渲染、iframe 桥四段代码）
- [ ] 降级策略：模型输出非法 JSON 时如何优雅兜底？（部分解答：折叠 JSON 卡 + 重试按钮，见 [[生成式UI渲染协议]]；尚缺自校正循环的成功率数据）

## 相关概念

- [[生成式UI渲染协议]]（落地选型）· [[结构化输出]] · [[人机协同]] · [[Agent]] · [[MCP]] · [[Agent-Plugins]] · [[上下文工程]] · [[工具调用]] · [[界面世界模型]]

## 相关实体

- [[AG-UI]] · [[A2UI]] · [[CopilotKit]] · [[LangGraph]] · [[awesome-llm-apps]] · [[Vue]] · [[React]] · [[Vercel-AI-SDK]] · [[Mastra]] · [[TypeScript]] · [[Element-Plus]]

## 来源

- [[raw/articles/awesome-llm-apps]]（Generative UI and Agentic Frontends 分类，顶层条目）
- [[raw/articles/awesome-llm-apps-generative-ui]]（2026-09-02 深挖：8 个项目 README 全文 + 文件清单 + 各项目 "Gen UI concept" 官方定性）
