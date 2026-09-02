---
title: Agent Plugins
aliases: [Agent插件, 智能体插件规范]
type: concept
tags: [ai, agent, plugin, standard, mcp]
created: 2026-08-08
updated: 2026-09-01
sources: ["[[raw/articles/ai-hot-2026-08-07]]", "[[raw/articles/awesome-llm-apps]]"]
status: active
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

## 生态验证：Agent Skills 已经落地（2026-09-01）

来自 [[raw/articles/awesome-llm-apps]] 的 `agent_skills` 目录，可以看到「技能」从规范走向实际分发：

- **安装方式**：`npx skills add <github-url>` —— 一条命令给 Claude Code / Codex / Cursor 装能力
- **质量要求**：每个 skill 都含真实代码，并通过「**安全 + eval 的 CI 门禁**」——技能不再是提示词片段，而是带测试的可分发单元
- **样例**：Project Graveyard（副项目复盘）、Scope Creep Detector（diff 意图一致性检查）、Commit Archaeologist（代码考古）、Dependency Doctor（依赖体检）、Advisor-Orchestrator-Worker（异构模型三元结构）、Self-Improving Agent Skills（用 Gemini + ADK 自动优化技能）

**对本页的意义**：说明「技能化」已是行业共识的落地形态，Agent Plugins 要解决的是**跨平台的打包分发标准**——上面「与本知识库的关联」一节的判断得到印证。

**Self-Improving Agent Skills 值得单独注意**：技能可以反过来用 eval 驱动自动优化自己，这正是 [[Agent持续进化]] 中「经验→程序」环节的自动化闭环。

## 待研究问题

- [ ] 安全 + eval 的 CI 门禁具体检查哪些项？能否套用到我自己的 `~/.workbuddy/skills/`？
- [ ] `npx skills add` 安装后的目录结构与 plugin.json 是否一致？

## 相关概念

- [[MCP]] · [[Agent]] · [[Coding-Agent]] · [[Agent持续进化]] · [[Agent评估]] · [[上下文工程]]

## 相关实体

- [[awesome-llm-apps]] · [[Claude-Code]] · [[WorkBuddy]] · [[obsidian-llm-wiki]]

## 来源

- [[raw/articles/ai-hot-2026-08-07]]（Agent Plugins 1.0.0 发布条目）
- [[raw/articles/awesome-llm-apps]]（Agent Skills 分类，6 个项目）
