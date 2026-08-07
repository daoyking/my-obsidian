---
title: Claude Code
aliases: [Claude Code CLI, Anthropic Claude Code]
type: entity
tags: [ai, coding, agent, cli, tool, anthropic]
created: 2026-08-08
updated: 2026-08-08
sources: ["[[raw/articles/ai-hot-2026-08-07]]", "[[raw/papers/ai-agents-in-depth]]"]
status: seed
---

# Claude Code

## 是什么

Anthropic 推出的命令行 AI 编码代理，以 Claude 模型为核心，支持终端内对话式编程、代码库理解、文件编辑和命令执行。是 [[Coding-Agent]] 领域的主流工具之一。

## 核心特性

- 终端原生：在 CLI 中运行，直接操作文件系统和执行命令
- 代码库感知：能理解大型项目结构和上下文
- 安全控制：市场（marketplace）权限管理，支持已知/屏蔽市场仓库
- v2.1.223（2026-08-07）：新增 `owner/*` 通配符条目，可批量允许或阻止 GitHub 组织下的所有市场仓库；修复多项安全漏洞
- 支持 MCP 连接器扩展能力

## 适用场景

- 大型代码库的 AI 辅助开发和重构
- 终端工作流中的编码 Agent
- 本知识库的 Ingest/Lint 流程可由 Claude Code 驱动（与 WorkBuddy 类似）

## 在我项目中的使用

> 关联到 projects/ 下的具体项目。

- 日常 AI 辅助编码工具之一，与 [[Cursor]] 互补
- 本库 [[Agent持续进化]] 四法中「经验→程序」的 Skill 沉淀工具

## 相关实体

- [[Cursor]] · [[Vscode]]

## 相关概念

- [[Coding-Agent]] · [[Harness工程]] · [[上下文工程]] · [[MCP]] · [[Agent持续进化]]

## 来源

- [[raw/articles/ai-hot-2026-08-07]]（Claude Code v2.1.223 发布）
- [[raw/papers/ai-agents-in-depth]]（Coding Agent 章节参考）
