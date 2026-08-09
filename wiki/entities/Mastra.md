---
title: Mastra
aliases: [Mastra AI, Mastra.js]
type: entity
tags: [agent, typescript, 编排, framework]
created: 2026-08-09
updated: 2026-08-09
sources: [[Agent开发学习计划]]
status: seed
---

# Mastra

> TS 原生的 Agent 开发框架（22k+ star），提供 agent loop / memory / workflow / RAG / MCP，配套 Studio 调试与一键部署。

## 是什么
面向 TypeScript 开发者的 Agent 全栈框架，让前端工程师用熟悉的语言补齐「编排层」能力，无需切 Python。

## 核心特性
- Agent：封装 system prompt + tools + memory。
- Workflow：多步有状态编排（对应 [[ReAct]] 循环）。
- Memory：对话与长期记忆管理（见 [[记忆系统]]）。
- RAG：内置向量检索（见 [[RAG]]）。
- MCP：对接 MCP 工具生态（见 [[MCP]]）。
- Studio：本地调试与可视化。

## 适用场景
- 学习计划 W4：从「单工具助手」升级到「多步编排 Agent」。
- 个人 / 内部项目快速落地；复杂企业编排仍建议评估 LangGraph 后端。

## 在我项目中的使用
- 学习计划 W4 编排与记忆阶段的核心框架。

## 相关实体
- [[Vercel AI SDK]]（交互层，互补）
- [[Agent]] · [[RAG]] · [[MCP]] · [[记忆系统]] · [[函数调用]]

## 来源
- [[Agent开发学习计划]]；Mastra 官方文档
