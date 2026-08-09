---
title: Vercel AI SDK
aliases: [AI SDK, Vercel AI SDK v6]
type: entity
tags: [agent, typescript, 前端, sdk]
created: 2026-08-09
updated: 2026-08-09
sources: [[Agent开发学习计划]]
status: seed
---

# Vercel AI SDK

> 面向前端 / 全栈（TS / React / Next.js / SvelteKit）的 AI 应用开发 SDK，约 2000 万月下载，是前端背景者承接 Agent 交互层的最短路径。

## 是什么
一套统一多家模型（OpenAI / Anthropic / Google 等）调用的 TypeScript 工具库，覆盖流式生成、工具调用、多模态与 AI UI 组件。

## 核心特性
- `streamText`：服务端流式文本生成（SSE）。
- `useChat`：React 聊天 UI 钩子，开箱即用的流式对话。
- `ToolLoopAgent` / Tools：声明式工具调用，LLM 自行决定触发函数。
- `AI Elements`：可嵌入的 AI 交互组件（含工具调用可视化）。

## 适用场景
- 想用 React / Next.js 快速做出带流式 UI 与工具调用的 AI 助手（见 [[Agent开发学习计划]] W2–W3）。
- 前端转 Agent 的「交互层」首选，几乎零切换成本。

## 在我项目中的使用
- 学习计划 W2（最小可聊）、W3（工具调用）的核心载体。

## 相关实体
- [[Mastra]]（编排层，互补）
- [[函数调用]]（SDK 内 Tools 机制）
- [[Agent]] · [[React]] · [[TypeScript]]

## 来源
- [[Agent开发学习计划]]；Vercel AI SDK 官方文档
