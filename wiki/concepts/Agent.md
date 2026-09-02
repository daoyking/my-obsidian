---
title: Agent
aliases: [智能体, AI Agent, LLM Agent]
type: concept
tags: [ai, llm, agent]
created: 2026-08-07
updated: 2026-09-01
sources: ["[[raw/papers/ai-agents-in-depth]]", "[[raw/articles/dive-into-llms-overview]]", "[[raw/articles/ai-hot-2026-08-27]]", "[[raw/articles/awesome-llm-apps]]"]
status: active
---

# Agent（智能体）

## 定义

以 LLM 为大脑，能感知环境、规划步骤、调用工具、执行动作以完成目标的自主系统。现代 Agent = LLM + 上下文 + 工具（《AI Agents in Depth》）。核心循环是 [[ReAct]]：思考 → 行动 → 观察。

## 为什么重要

- 让 LLM 从「对话」走向「做事」，是 AI 落地的关键形态
- 前端工程师强相关：GUI Agent 操作界面、浏览器自动化
- 本知识库的维护本身就在用 Agent（WorkBuddy / Claude Code）

## 核心机制

- **规划（Planning）**：任务分解、[[ReAct]] 循环
- **工具调用**：Function Calling、[[MCP]]
- **记忆**：短期上下文 + 长期记忆（见 [[记忆系统]]）
- **行动**：调用 API、操作 GUI、读写文件
- **能力边界由 [[Harness工程]] 兜底**：模型做不稳的由工程补足

## 两个来源视角

- [[raw/articles/dive-into-llms-overview]] 第 9 章：GUI 智能体实践，与 [[多模态大模型]] 结合
- [[raw/papers/ai-agents-in-depth]]：Agent 工程全栈——[[上下文工程]]、[[Harness工程]]、[[Coding-Agent]]、[[Agent持续进化]]

## Agent 应用形态谱系（2026-09-01）

来自 [[raw/articles/awesome-llm-apps]]（100+ 可运行样例的分类结构）。Agent 已经分化出若干稳定形态，判断一个需求该用哪种形态，是 Agent 工程的第一步：

| 形态 | 特征 | 目录 / 条目数 |
|---|---|---|
| **单 Agent + 工具** | 一个 LLM 循环调用工具完成目标 | `single_agent_apps` 12 |
| **多 Agent 协作** | 角色分工 + 编排（流水线/会审/路由） | `multi_agent_apps` + `agent_teams` 18 |
| **常驻后台** | 定时/事件触发，主动推送，见 [[常驻Agent]] | `always_on_agents` 2 |
| **语音** | 实时语音 API，speech-in / speech-out，延迟敏感 | `voice_ai_agents` 4 |
| **生成式 UI** | 输出可交互组件而非文本，见 [[生成式UI]] | `generative_ui_agents` **8** |
| **MCP 连接型** | 通过 [[MCP]] 接外部工具与数据 | `mcp_ai_agents` 6 |
| **检索增强（RAG）** | 外部知识检索，见 [[RAG]] | `rag_tutorials` 21 |
| **带记忆** | 跨会话持久化，见 [[记忆系统]] | `llm_apps_with_memory_tutorials` 6 |
| **编码 Agent 技能** | 给编码 Agent 装能力，见 [[Agent-Plugins]] | `agent_skills` 6 |
| **自主游戏** | 端到端玩游戏，检验推理与策略 | `autonomous_game_playing_agent_apps` 3 |

**观察 1**：形态之间不互斥，而是叠加（一个语音 Agent 可以同时是 RAG + 多 Agent + 常驻）。真正的架构决策是「**这个任务需要叠加哪几层**」，而非「用不用 Agent」。

**观察 2（2026-09-02 补充）**：上表按**任务形态**分类，但还有一个与之正交的维度常被忽略——**输出形态**。同一个任务，Agent 可以输出纯文本、工具卡片、共享状态组件树，也可以输出一个完整沙箱应用。这个维度有独立的选型逻辑（控制权 vs 风险面的权衡），见 [[生成式UI渲染协议]] 的五层抽象阶梯。**先定任务形态，再定输出形态**，是两个串行的架构决策。

## 相关概念

- [[ReAct]] · [[Harness工程]] · [[上下文工程]] · [[MCP]] · [[记忆系统]] · [[多模态大模型]] · [[Agent安全]] · [[思维链]] · [[Coding-Agent]] · [[常驻Agent]] · [[生成式UI]] · [[生成式UI渲染协议]] · [[结构化输出]] · [[人机协同]] · [[RAG]] · [[Agent评估]]

## 相关实体

- [[AG-UI]] · [[A2UI]] · [[CopilotKit]] · [[LangGraph]] · [[awesome-llm-apps]]

## 相关主题

- [[动手学大模型]] · [[AI-Agents-in-Depth]] · [[AI]]

## 来源

- [[raw/articles/dive-into-llms-overview]]（第 9 章）
- [[raw/papers/ai-agents-in-depth]]
- [[raw/articles/awesome-llm-apps]]（全部 16 个分类的目录结构）
- [[raw/articles/awesome-llm-apps-generative-ui]]（生成式 UI 形态的 8 个样例深挖）
