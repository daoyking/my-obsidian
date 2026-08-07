---
title: Agent Plugins
aliases: [Agent插件, 智能体插件规范]
type: concept
tags: [ai, agent, plugin, standard, mcp]
created: 2026-08-08
updated: 2026-08-08
sources: ["[[raw/articles/ai-hot-2026-08-07]]"]
status: seed
---

# Agent Plugins

## 定义

Agent Plugins 是一项由谷歌、亚马逊、微软等公司共同支持的中立目录规范，将 Agent Skills 和 [[MCP]] 服务器打包为单一可移植单元。通过标准化的 `plugin.json` 清单和固定目录布局，让开发者一次打包即可在不同 AI 编码智能体和 IDE 中使用。

## 为什么重要

- 解决 Agent 工具生态碎片化：之前每个 Agent 平台（Claude Code、Cursor、WorkBuddy 等）各有自己的技能/插件格式
- 与 [[MCP]] 互补：MCP 管工具调用协议，Agent Plugins 管打包分发——一个管「怎么连」，一个管「怎么装」
- 谷歌作为核心维护者加入，并在 Agents CLI 和 Data Agent Kit 中提供支持，表明行业级投入
- 对 Skill 生态影响深远：若 WorkBuddy skills 能适配 plugin.json 清单，即可跨平台复用

## 核心机制

- **plugin.json 清单**：描述插件元数据、技能定义、MCP 服务器配置
- **固定目录布局**：标准化文件结构，Agent 运行时按约定发现并加载
- **Agent Skills + MCP 统一**：一个插件包内可同时包含声明式技能和 MCP 服务器

## 与本知识库的关联

- 本库的 [[Agent持续进化]] 四法中「经验→程序」对应 Skill 沉淀，Agent Plugins 可能是 Skill 跨平台分发的标准化载体
- 与 [[MCP]] 的关系待深入研究：是互补层还是包含关系？

## 相关概念

- [[MCP]] · [[Agent]] · [[Coding-Agent]] · [[Agent持续进化]]

## 来源

- [[raw/articles/ai-hot-2026-08-07]]（Agent Plugins 1.0.0 发布条目）
