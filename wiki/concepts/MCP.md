---
title: MCP
aliases: [Model Context Protocol, 模型上下文协议]
type: concept
tags: [ai, llm, agent, tool, mcp]
created: 2026-08-07
updated: 2026-08-07
sources: ["[[raw/papers/ai-agents-in-depth]]"]
status: active
---

# MCP（Model Context Protocol）

## 定义

Anthropic 提出的开放协议，标准化 LLM/Agent 与外部工具、数据源的连接方式。把「工具接入」从每个 Agent 各自实现，变成统一协议——工具方实现一次 MCP server，任何支持 MCP 的 Agent 都能用。

## 为什么重要

- 解决工具生态碎片化：之前每家 Agent 框架自定义工具格式
- 让工具可复用、可共享，形成生态
- WorkBuddy/Claude Code 的 connector 体系即 MCP 思想的实践

## 核心机制

- **MCP Server**：暴露工具/资源/Prompt 的服务端
- **MCP Client**：Agent 侧，发现并调用 server 提供的能力
- 传输：stdio / HTTP+SSE
- 工具发现：Agent 按需查询 server 能力（呼应 [[上下文工程]] 的 Skills 按需加载）

## 工具生态的挑战

来自 [[raw/papers/ai-agents-in-depth]] 第 4 章 4.3：工具数量增长后，选择哪个工具、如何描述工具让模型选对，成为新难题——催生「主动工具发现」。

## 相关概念

- [[Agent]] · [[上下文工程]] · [[Harness工程]]

## 相关主题

- [[AI-Agents-in-Depth]] · [[AI]]

## 来源

- [[raw/papers/ai-agents-in-depth]]（第 4 章 4.3）
