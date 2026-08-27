---
title: Agent
aliases: [智能体, AI Agent, LLM Agent]
type: concept
tags: [ai, llm, agent]
created: 2026-08-07
updated: 2026-08-27 2026-08-07
sources: ["[[raw/articles/ai-hot-2026-08-27]]]"]]", "[[raw/papers/ai-agents-in-depth]]"]
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

## 相关概念

- [[ReAct]] · [[Harness工程]] · [[上下文工程]] · [[MCP]] · [[记忆系统]] · [[多模态大模型]] · [[Agent安全]] · [[思维链]] · [[Coding-Agent]]

## 相关主题

- [[动手学大模型]] · [[AI-Agents-in-Depth]] · [[AI]]

## 来源

- [[raw/articles/dive-into-llms-overview]]（第 9 章）
- [[raw/papers/ai-agents-in-depth]]
