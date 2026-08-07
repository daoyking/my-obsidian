---
title: Prompt工程
aliases: [Prompt Engineering, 提示工程]
type: concept
tags: [ai, llm, prompting]
created: 2026-08-07
updated: 2026-08-07
sources: ["[[raw/articles/dive-into-llms-overview]]"]
status: seed
---

# Prompt 工程

## 定义

通过设计和优化输入给大模型的提示词（Prompt），引导模型产出更准确、更可控输出的技术。是使用 LLM 成本最低、收益最直接的杠杆。

## 为什么重要

- 同一模型，好 Prompt 与差 Prompt 效果天差地别
- 不改模型权重即可改善行为
- 是 [[Agent]] 规划、[[思维链]] 推理的基础载体

## 核心手法

- **角色设定**：明确模型身份与约束
- **Few-shot**：给少量示例引导格式/风格
- **CoT**：要求逐步推理（见 [[思维链]]）
- **结构化输出**：要求 JSON / 表格
- **负向约束**：明确「不要做什么」
- **分隔符**：用 ```、--- 隔开指令与数据，防注入

## dive-into-llms 第 2 章

来自 [[raw/articles/dive-into-llms-overview]]：提示学习与思维链，揭示提示词（如「鼓励」）对回答的微妙影响。

## 相关概念

- [[思维链]] · [[Agent]] · [[越狱攻击]]（Prompt 注入是攻击面）

## 相关主题

- [[动手学大模型]]

## 来源

- [[raw/articles/dive-into-llms-overview]]（第 2 章）
