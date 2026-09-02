---
title: LangGraph
aliases: [LangGraph框架, LangGraph Python]
type: entity
tags: [framework, agent, orchestration, langchain, python, state-machine]
created: 2026-09-02
updated: 2026-09-02
sources: ["[[raw/articles/awesome-llm-apps-generative-ui]]"]
status: seed
---

# LangGraph

## 一句话

LangChain 团队出品的**有状态 Agent 编排框架**——把 Agent 建模成一张图（节点 = 计算步骤，边 = 流转条件），而非一条固定链路。有 Python 与 JS 双版本。

## 核心抽象

| 概念 | 作用 |
|---|---|
| **State** | 全局共享、可持久化的状态对象（TypedDict / Pydantic） |
| **Node** | 一个计算步骤（调模型、调工具、纯函数） |
| **Edge** | 节点间的流转，可以是普通边或**条件边**（由状态决定下一步） |
| **Checkpointer** | 状态持久化，支撑断点续跑、时间旅行、人工介入 |
| **Interrupt** | 在节点前/后暂停，等待人工输入后恢复 |

## 为什么它在生成式 UI 场景高频出现

[[awesome-llm-apps]] 的 `generative_ui_agents` 8 个样例里，**4 个的 Agent 后端是 LangGraph（Python）**：

- `ai-deep-research-agent` — Deep Agent + 虚拟文件系统 + 工具渲染卡
- `ai-knowledge-explorer` — 知识图谱抽取，状态双向同步
- `ai-shadcn-component-generator` — 返回结构化 UI
- `generative-ui-starter-project` — 看板共享状态 + [[A2UI]]

原因很直接：**LangGraph 的 State 与生成式 UI 的 L2「共享状态」是同一个东西**。State 通过 Checkpointer 天然可持久化、可增量更新，正好对上 [[AG-UI]] 的 `STATE_SNAPSHOT` / `STATE_DELTA`。而 `Interrupt` 又直接对应 [[人机协同]] 的审批卡。

前端通过 [[CopilotKit]] 的 `LangGraphHttpAgent` 接入，协议层走 AG-UI。

## 与同类框架的对照

| 框架 | 编排模型 | 特点 |
|---|---|---|
| LangGraph | 显式图 + 状态机 | 控制力最强，学习曲线也最陡 |
| [[Mastra]] | TS 工作流 + Agent | TypeScript 原生，前端友好 |
| CrewAI | 角色分工 | 上手快，控制粒度粗 |

## 我的观点

- LangGraph 的「图」心智模型对前端工程师意外地亲切——本质上就是一个带状态的状态机，和 Vue Router / XState 的思路相通。
- 但它是 **Python 优先**，这意味着前端工程师要同时维护 Python agent 与 TS 前端，[[CopilotKit]] 那套 `npm run install:agent` 把 Python 环境藏进 npm script 的做法，正是为了解决这个痛感。
- 对我（前端背景 + TS 栈）而言，如果不需要 LangGraph 特有的图控制力，[[Mastra]] 或 [[Vercel-AI-SDK]] 的 TS 原生路线摩擦更小。

## 待研究问题

- [ ] LangGraph 的 `Interrupt` 与 AG-UI `RUN_FINISHED.interrupt` 的映射细节？
- [ ] State 的 JSON Patch 增量是由框架自动产出还是需自行 diff？
- [ ] JS 版 LangGraph 与 Python 版的功能对等度如何？

## 相关概念

- [[生成式UI渲染协议]] · [[多智能体系统]] · [[人机协同]] · [[工具调用]] · [[Agent]]

## 相关实体

- [[CopilotKit]] · [[AG-UI]] · [[A2UI]] · [[Mastra]] · [[Vercel-AI-SDK]] · [[awesome-llm-apps]] · [[awesome-agi-agents]]

## 来源

- 官方文档：<https://langchain-ai.github.io/langgraph/>
- [[raw/articles/awesome-llm-apps-generative-ui]]（4 个样例的 Built With 与架构章节）
