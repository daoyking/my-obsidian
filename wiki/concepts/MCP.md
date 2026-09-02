---
title: MCP
aliases: [Model Context Protocol, 模型上下文协议]
type: concept
tags: [ai, llm, agent, tool, mcp]
created: 2026-08-07
updated: 2026-09-01
sources: ["[[raw/papers/ai-agents-in-depth]]", "[[raw/articles/ai-hot-2026-08-07]]", "[[raw/articles/awesome-llm-apps]]"]
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

## 实践样例（2026-09-01）

来自 [[raw/articles/awesome-llm-apps]] 的 `mcp_ai_agents`（6 个项目），覆盖 MCP 的典型用法层次：

| 项目 | 用法层次 |
|---|---|
| Browser MCP Agent | 用自然语言经 MCP 驱动真实浏览器（工具型 server） |
| GitHub MCP Agent | 数据型 server：用自然语言探索分析任意仓库 |
| Notion MCP Agent | 数据型 server：终端里聊 Notion 页面 |
| AI Travel Planner MCP Agent | 多 server 组合：实时 Airbnb + Google Maps |
| Multi-MCP Agent Router | **路由模式**：多个专家 agent 各挂自己的 MCP server——正面回应上面「工具数量增长后的选择难题」 |
| OpenAI Remote MCP Tool Bridge | 协议桥接：OpenAI function calling 直连远端 MCP server |

**值得注意**：Multi-MCP Agent Router 给出的解法是「按 server 拆分专家 agent」，而不是「把所有工具塞进一个 agent 的上下文」——这与 [[上下文工程]]「子 Agent 上下文隔离优于压缩」是同一条原则。

另外 `generative_ui_agents` 下的 MCP App Builder / MCP Apps Showcase 说明 MCP 已从「工具协议」扩展到「UI 协议」——server 可以返回可交互界面，见 [[生成式UI]]。

## 相关概念

- [[Agent]] · [[上下文工程]] · [[Harness工程]] · [[Agent-Plugins]]（打包分发标准，与 MCP 互补） · [[生成式UI]] · [[工具调用]]

## 相关实体

- [[awesome-llm-apps]]

## 相关主题

- [[AI-Agents-in-Depth]] · [[AI]] · [[AI资讯]]

## 来源

- [[raw/papers/ai-agents-in-depth]]（第 4 章 4.3）
- [[raw/articles/ai-hot-2026-08-07]]（Agent Plugins 1.0.0 与 MCP 的互补关系）
- [[raw/articles/awesome-llm-apps]]（MCP AI Agents 分类，6 个项目）
