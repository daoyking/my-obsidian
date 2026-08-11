---
title: awesome-agentic-ai-zh
aliases: [Agentic AI 中文学习地图, AI Agent 学习地图]
type: entity
tags: [github, awesome-list, agentic-ai, 学习路线图, 中文]
created: 2026-08-11
updated: 2026-08-11
sources: ["[[raw/articles/awesome-agentic-ai-zh]]"]
status: active
repo: "https://github.com/WenyuChiou/awesome-agentic-ai-zh"
stars: 5159
---

# awesome-agentic-ai-zh

## 是什么

三语（繁中 canonical / 简中 / English，三版完整维护）Agentic AI 学习地图：从「LLM 是什么、token 怎么算」走到「能设计 multi-agent 系统」。核心是三件事：**学习路线图 + 240+ 资源 curation + 简单 illustrative 案例**。2026-08-11 快照 5159 stars、701 forks，MIT 协议。

## 核心特性

- **8 阶段 + 2 条学习路径**：
  - 共用基础 Stage 0-2：基础准备（Python/CLI/git/API）→ LLM 基础（token/各家 LLM/本地 LLM）→ Prompt 设计（系统 prompt/few-shot/CoT）
  - **Track A — CLI Power User**（8-10 周）：用现成 CLI agent（Claude Code、Codex、Gemini CLI）做事，A1 选型 → A2 工作流 → A3 接入生产
  - **Track B — Agent Builder**（主干部最少 16-22 周、现实 5-7 个月）：从零造 agent，Stage 3 工具使用与第一个 Agent（function calling + ReAct + 5 个动手练习）→ 4 框架（LangGraph/AutoGen/CrewAI/Smolagents）→ 5 Claude Code 生态 → 6 上下文管理（RAG 与记忆）→ 7 多 Agent 与生产（eval/observability）→ 7.5 进阶概念（PAR loop、agent-as-judge）→ 8 Agent Interfaces（Computer Use/Browser Use/Sandbox）
- **两个共用 hub**：Stage 5（Claude Code 生态：MCP/Skills/Plugins/Subagents）与 Stage 8（Agent Interfaces），Track A/B 都学、视角不同
- **240+ 精选 projects + 77 个中文生态 MCP/Skill catalog**（DeepSeek/Zhipu/Kimi），每个附星等、适合谁、教什么、怎么跑（含 Ollama/llama.cpp/MLX 本地 LLM）
- **23 个动手练习**（70-150 行 starter + dual-path Ollama/Anthropic SDK 对照 + mock-based test），并有「正确学习法」方法论（先看 signature 自己重写、卡住才对答案）
- **5 条延伸路线**：研究人员 / 开发者 / 教师 / 知识工作者 / 日常使用者
- **三層概念進化框架**：prompt engineering → context engineering → harness engineering（与本库 [[Prompt工程]] / [[上下文工程]] / [[Harness工程]] 概念页直接对应）
- 提供 7 步打造第一个 AI Agent 的跨 Stage 完整示例（~300 行真实代码）

## 适用场景

- 想系统学 Agentic AI 的 Python 开发者：按 Stage 顺序或按 Track 走
- 与 [[Agent开发学习计划-Python路线]]（12 周、Swift 开发者向）高度互补：本路线图 Stage 3-8 几乎逐周对应计划的 W2-W11（Tool Calling → 框架 → MCP → 记忆/RAG → 可靠性/多 Agent）
- Track A 适合想先「用起来」再「搞懂内部」的人；Stage 5/8 与计划 Week 5-7（MCP/桥接 macOS 能力）同主题

## 在本库中的使用

- 作为 [[Agent开发学习计划-Python路线]] 的「外部镜像路线图」：计划里的每周末尾资源可对照本仓库对应 Stage 补课
- 与 [[四位AI讲师学习资料整理]]（讲师资源）互补：本仓库是「结构化路线图 + 动手练习」，讲师资料是「视频/课程资源」
- 对应概念页：[[Agent]] · [[函数调用]] · [[ReAct]] · [[MCP]] · [[RAG]] · [[记忆系统]] · [[上下文工程]] · [[Harness工程]] · [[Prompt工程]] · [[Agent评估]] · [[思维链]] · [[Agent安全]]

## 相关实体

- [[awesome-agi-agents]]（Agent 生态全景）· [[public-apis]]（API 数据源）· [[Claude-Code]] · [[Mastra]] · [[Coding-Agent]]

## 来源

- README 全文快照：[[raw/articles/awesome-agentic-ai-zh]]（2026-08-11，gh api 获取）
- 仓库：<https://github.com/WenyuChiou/awesome-agentic-ai-zh>
