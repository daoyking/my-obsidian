---
title: Cursor
aliases: [Cursor IDE, Cursor Editor]
type: entity
tags: [ai, coding, ide, agent, tool]
created: 2026-08-08
updated: 2026-08-08
sources: ["[[raw/articles/ai-hot-2026-08-07]]"]
status: seed
---

# Cursor

## 是什么

AI 原生代码编辑器，基于 VS Code 分支构建，以 AI 编码能力为核心。支持多模型切换、智能代码补全、对话式编程和自动化代码修改。

## 核心特性

- **Cursor Router**：通过 Compass 复杂度预测器为每个对话轮次匹配最合适的模型
  - Auto Intelligence 模式：用户满意度超过 Fable，成本降低 68%
  - Auto Balance 模式：低于 Opus 4.8 成本 41%，表现更优
  - 从实时流量中学习模型在不同任务类别上的表现差异，数据驱动替代基准分数
- 多模型支持：可在不同任务中切换前沿模型
- 对话式编程：自然语言描述需求，AI 直接修改代码

## 适用场景

- 日常编码辅助：补全、重构、调试
- 复杂任务拆解：通过 AI 理解大型代码库
- 模型路由优化：不同复杂度任务自动匹配成本最优模型

## 在我项目中的使用

> 关联到 projects/ 下的具体项目。

- 与 [[Claude-Code]] 同属 [[Coding-Agent]] 工具生态，日常 AI 辅助编码的备选方案

## 相关实体

- [[Claude-Code]] · [[Vscode]]

## 相关概念

- [[Coding-Agent]] · [[上下文工程]] · [[Harness工程]]

## 来源

- [[raw/articles/ai-hot-2026-08-07]]（Cursor Router 如何为任务选择合适模型）
