---
title: awesome-llm-apps
aliases: [Awesome-LLM-Apps, Awesome LLM Apps, Unwind AI]
type: entity
tags: [github, awesome-list, agent, rag, mcp, generative-ui, python, 资源导航]
created: 2026-09-01
updated: 2026-09-02
sources: ["[[raw/articles/awesome-llm-apps]]"]
status: active
repo: "https://github.com/Shubhamsaboo/awesome-llm-apps"
stars: 135538
---

# awesome-llm-apps

## 是什么

由 Shubhamsaboo（Unwind AI）维护的 LLM 应用代码合集：**100+ 个开源 AI Agent、Agent Skills 与 RAG 应用，全部手工搭建、端到端实测、Apache-2.0 协议**。2026-09-01 快照：135,538 stars / 19,926 forks / 主语言 Python / 创建于 2024-04-29 / 最近 push 2026-08-31。

与常见的 awesome-list（只给链接）不同，本仓库每个条目都是**仓库内可运行的代码目录**——clone 下来装依赖就能跑，且明确允许「fork it, ship it, sell it」。是 Agent 学习路线里最直接的**可运行样例库**。

## 核心特性

### 1. 按形态分层的目录结构（2026-09-01 实测条目数）

| 分类 | 目录 | 条目 | 定位 |
|---|---|---|---|
| 🧩 Agent Skills | `agent_skills` | 6 | 给编码 Agent 装技能，一条 `npx skills add` 安装 |
| 🌱 Starter | `starter_ai_agents` | 13 | 单文件 agent，一个 API key 就能跑 |
| 🚀 Advanced（单 Agent） | `advanced_ai_agents/single_agent_apps` | 12 | 工具 + 记忆 + 多步推理 |
| 🚀 Advanced（多 Agent） | `advanced_ai_agents/multi_agent_apps` | 5 | 多 agent 协作流水线 |
| 🤝 Agent Teams | `.../agent_teams` | 13 | 角色化团队（法务/招聘/教研/竞品） |
| 🛰️ Always-on | `always_on_agents` | 2 | 定时/事件驱动的后台 agent |
| 🗣️ Voice | `voice_ai_agents` | 4 | 实时语音 API，speech-in / speech-out |
| 🖼️ Generative UI | `generative_ui_agents` | 7 | 输出交互式 UI 而非纯文本 |
| 🎮 Game-playing | `.../autonomous_game_playing_agent_apps` | 3 | 端到端玩游戏 |
| ♾️ MCP | `mcp_ai_agents` | 6 | 通过 [[MCP]] 接外部工具与数据 |
| 📀 RAG | `rag_tutorials` | 21 | 从最小链到 agentic / 多源 / 图谱 |
| 💾 Memory | `.../llm_apps_with_memory_tutorials` | 6 | 跨会话记忆 |
| 💬 Chat with X | `.../chat_with_X_tutorials` | 6 | 任意数据源变聊天界面 |
| 🎯 优化 | `.../llm_optimization_tools` | 2 | token / 上下文成本优化 |
| 🔧 微调 | `.../llm_finetuning_tutorials` | 2 | LoRA 微调配方 |
| 🧑‍🏫 框架课 | `ai_agent_framework_crash_course` | 2 | Google ADK / OpenAI Agents SDK |

### 2. 三个值得注意的新趋势

- **Agent Skills 成为一等公民**：`npx skills add <url>` 直接给 Claude Code / Codex / Cursor 装能力，每个 skill 都要过「安全 + eval」CI 门禁。这与本库 [[Agent-Plugins]] 概念完全合流——技能不再是提示词，而是带代码与评测的可分发单元。
- **Always-on Agent 独立成类**：从「人问一句答一句」转向「后台常驻、主动推送」。见 [[常驻Agent]]。
- **Generative UI / Agentic Frontend 独立成类**：Agent 输出开始是 UI 组件（卡片、图表、看板、表单），不只是文本。见 [[生成式UI]]——这是前端工程师在 Agent 时代的主战场。

### 3. RAG 部分的深度（21 个教程 = 最好的 RAG 进阶阶梯）

从 `rag_chain`（最小流水线）→ `hybrid_search_rag`（关键词+向量）→ `corrective_rag`（自我打分重试）→ `agentic_rag_*`（检索工具化）→ `multimodal_agentic_rag`（多模态）→ `knowledge_graph_rag_citations`（多跳+可验证引用）→ `rag_failure_diagnostics_clinic`（系统性诊断失败原因）。

详见 [[RAG]] 的「进阶路线」节。

## 适用场景

- **照着抄一个能跑的 Agent**：想做「多 Agent 团队」「语音客服」「本地 RAG」时，先在这里找一个最接近的样例再改
- **学习路线配套实验**：[[Agent开发学习计划-Python路线]] 的每周动手环节可直接用这里的样例替代纯手写
- **技术选型参考**：同一需求（如 RAG）有 21 种实现变体，对比着看能快速理解每种范式的取舍
- **前端视角切入**：`generative_ui_agents` 下的 7 个项目是「Agent 输出 UI」的最佳参考实现

## 在本库中的使用

- 与 [[awesome-agi-agents]]（Agent 生态横向清单）、[[public-apis]]（免费 API 数据源）形成「**数据源 → 可运行样例 → 生态全景**」的完整资源链
- 与 [[AI工具集]]（2023 年书签导航）互补：那批是产品，这批是代码
- 对应概念页：[[Agent]] · [[RAG]] · [[MCP]] · [[生成式UI]] · [[常驻Agent]] · [[记忆系统]] · [[多智能体系统]] · [[上下文工程]] · [[Agent-Plugins]] · [[工具调用]]
- 关联实体：[[Python]] · [[Mastra]] · [[Vercel-AI-SDK]] · [[Claude-Code]] · [[OpenAI]] · [[Gemini]] · [[DeepSeek]]

## 我的观点

- 这个仓库的价值不在「star 数高」，而在**每个样例都端到端跑通**——这是 awesome 类仓库里极稀缺的。学习 Agent 时最贵的不是想法，是把想法跑通的工程细节。
- 对我（前端转型 Agent 应用工程）最有价值的两块：`generative_ui_agents`（我的主场）和 `rag_tutorials`（21 个变体直接构成 RAG 能力的完整阶梯）。
- 值得警惕：样例多是 Streamlit 原型，离生产还差「鉴权、限流、成本控制、评测、可观测」——[[Agent评估]] 与 [[可观测性]] 仍需自己补。

## 待研究问题

- [ ] `generative_ui_agents` 的 7 个项目用的什么协议渲染 UI？（MCP Apps / AG-UI / 自定义？）能否复用到 Vue 3 前端？
- [ ] `trust_gated_agent_team` 的哈希链审计日志怎么实现？能否作为 [[Agent安全]] 的落地参考？
- [ ] Agent Skills 的「安全 + eval CI 门禁」具体检查什么？能否套用到我自己的 Skill 上？
- [ ] `rag_failure_diagnostics_clinic` 诊断维度有哪些？可否整理成一份 RAG 自查清单？

## 相关实体

- [[awesome-agi-agents]] · [[public-apis]] · [[awesome-agentic-ai-zh]] · [[Python]] · [[Mastra]] · [[Vercel-AI-SDK]]

## 来源

- README 全文快照：[[raw/articles/awesome-llm-apps]]（2026-09-01，`gh api` 获取，24.8KB，含目录条目数实测）
- 仓库：<https://github.com/Shubhamsaboo/awesome-llm-apps>
- 配套教程站：<https://www.theunwindai.com>
