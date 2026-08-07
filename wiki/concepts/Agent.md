---
title: Agent
aliases: [智能体, AI Agent, LLM Agent]
type: concept
tags: [ai, llm, agent]
created: 2026-08-07
updated: 2026-08-07
sources: ["[[raw/articles/dive-into-llms-overview]]"]
status: seed
---

# Agent（智能体）

## 定义

以 LLM 为大脑，能感知环境、规划步骤、调用工具、执行动作以完成目标的自主系统。核心循环：感知 → 规划 → 行动 → 观察。

## 为什么重要

- 让 LLM 从「对话」走向「做事」，是 AI 落地的关键形态
- 前端工程师强相关：GUI Agent 操作界面、浏览器自动化
- 本知识库的维护本身就在用 Agent（WorkBuddy / Claude Code）

## 核心机制

- **规划（Planning）**：任务分解、ReAct（推理+行动交替）
- **工具调用**：Function Calling、MCP
- **记忆**：短期上下文 + 长期向量记忆
- **行动**：调用 API、操作 GUI、读写文件
- 形态：单 Agent / 多 Agent 协作

## dive-into-llms 第 9 章

来自 [[raw/articles/dive-into-llms-overview]]：GUI 智能体——让 AI Agent 替你点外卖、回消息、购物比价。与 [[多模态大模型]] 视觉理解结合。

## 相关概念

- [[多模态大模型]] · [[Agent安全]] · [[思维链]]（规划基础）

## 相关主题

- [[动手学大模型]] · [[AI]]

## 来源

- [[raw/articles/dive-into-llms-overview]]（第 9 章）
