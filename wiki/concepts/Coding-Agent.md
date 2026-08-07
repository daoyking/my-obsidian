---
title: Coding Agent
aliases: [代码Agent, 编程Agent]
type: concept
tags: [ai, llm, agent, coding]
created: 2026-08-07
updated: 2026-08-07
sources: ["[[raw/papers/ai-agents-in-depth]]"]
status: active
---

# Coding Agent

## 定义

以写代码/改代码为核心能力的 Agent。代码不仅是输出产物，更是 Agent 的「元能力」——思考工具、业务约束、系统适配器、生成式 UI，甚至「代码创造代码」（Agent 自举）。

## 为什么重要

- Coding 是 Agent 最成熟的能力域，也是理解 Agent 机制的最佳入口（Claude Code、Cursor、WorkBuddy）
- 代码即思考：让模型用代码推理（计算、验证）比纯文本推理更可靠
- 前端工程师的强相关：日常用的 AI 编码工具都是 Coding Agent

## 核心要点（第 5 章）

来自 [[raw/papers/ai-agents-in-depth]]：
- **Sessionless 设计**：每次任务独立，避免跨会话状态污染
- **整体流程**：理解需求 → 检索代码 → 编辑 → 测试 → 修复
- **Harness 实践**：文件编辑工具、搜索工具是 Coding Agent 的关键基建
- **故障与错误恢复**：失败回滚、重试策略
- **代码的六重角色**：思考工具 / 业务规则约束 / 多媒体生成 / 系统适配器 / 生成式 UI / Agent 自举

## 与本知识库的关联

- 本库的 Ingest/Lint 流程就是由 Coding Agent（WorkBuddy）执行的
- Skill 沉淀 = 「代码作为程序记忆」（见 [[记忆系统]]）

## 主流工具

- [[Claude-Code]]（Anthropic，CLI 原生）
- [[Cursor]]（AI 原生编辑器，基于 VS Code 分支）
- WorkBuddy（本知识库的日常驱动 Agent）
- GitHub Copilot（斜杠命令工作流：/plan /spar /autopilot）

## 相关概念

- [[Agent]] · [[Harness工程]] · [[上下文工程]] · [[记忆系统]] · [[Agent-Plugins]]

## 相关主题

- [[AI-Agents-in-Depth]] · [[AI资讯]]

## 来源

- [[raw/papers/ai-agents-in-depth]]（第 5 章）
- [[raw/articles/ai-hot-2026-08-07]]（Cursor Router、Claude Code v2.1.223、GitHub Copilot 斜杠命令等）
