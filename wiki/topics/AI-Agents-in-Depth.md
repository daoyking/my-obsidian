---
title: AI Agents in Depth（深入浅出 AI Agent）
aliases: [AI-Agents-in-Depth, 深入浅出AI Agent]
type: topic
tags: [ai, llm, agent, book]
created: 2026-08-07
updated: 2026-08-07
sources: ["[[raw/papers/ai-agents-in-depth]]"]
status: active
---

# AI Agents in Depth（深入浅出 AI Agent）

## 背景

一本 316 页的 AI Agent 工程实践专著，从 Agent 基础到后训练、持续进化、GUI Agent 全栈覆盖。以 **Harness 工程**为主线：模型做不稳的，Harness 先补上；模型每内化一层，Harness 就卸下一层。来源 [[raw/papers/ai-agents-in-depth]]。

## 章节地图（9 章）

1. **Agent 入门** → [[Agent]] · [[ReAct]] · [[Harness工程]] · 编排模式
2. **上下文工程**（全书最关键）→ [[上下文工程]] · [[提示注入]] · Skills · 状态栏 · 压缩
3. **记忆与知识库** → [[记忆系统]] · [[RAG]]（待建）· 知识组织
4. **工具** → [[MCP]] · 工具设计 · 事件驱动异步 Agent
5. **Coding Agent** → [[Coding-Agent]]
6. **Agent 评估** → [[Agent评估]] · LLM-as-a-Judge
7. **模型后训练** → [[微调]] · [[RLHF]] · 多轮信用分配
8. **持续进化** → [[Agent持续进化]]（经验→知识/指令/程序/参数）
9. **Computer Use** → GUI 自动化 Agent

## 我的观点

- 本书最大贡献是「Harness 工程」框架：把 Agent 能力拆成「模型能做的」+「工程兜底的」，让能力演进可追踪
- 第 2 章上下文工程是全书重心——Agent 的能力上限由上下文决定，不是模型本身
- 与 [[动手学大模型]] 互补：那本偏 LLM 能力点（微调/水印/越狱），这本偏 Agent 系统工程
- 前端工程师视角：第 5 章 Coding Agent、第 9 章 GUI Agent 与日常工具链最相关

## 待研究问题

- Harness 五功能在 WorkBuddy/Claude Code 里如何体现？
- 上下文压缩的「子 Agent 隔离优于压缩」如何应用到本知识库的 Ingest？
- 持续进化四法中「经验→程序」对应本库的 Skill 沉淀

## 相关概念

- [[Harness工程]] · [[上下文工程]] · [[ReAct]] · [[MCP]] · [[记忆系统]] · [[提示注入]]

## 相关主题

- [[AI]] · [[动手学大模型]]

## 来源

- [[raw/papers/ai-agents-in-depth]]
