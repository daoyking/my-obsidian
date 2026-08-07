---
title: Agent安全
aliases: [智能体安全, Agent Safety]
type: concept
tags: [ai, llm, agent, security]
created: 2026-08-07
updated: 2026-08-07
sources: ["[[raw/articles/dive-into-llms-overview]]"]
status: seed
---

# Agent 安全（智能体安全）

## 定义

大模型作为 Agent 进入开放环境（调用工具、操作文件、控制 GUI）后面临的安全风险与防护：提示注入、权限滥用、数据外泄、工具误用、间接注入等。

## 为什么重要

- Agent 能「做事」，风险远大于纯对话：一旦被劫持可造成实际损害
- 是 LLM 迈向「未来操作系统」必须解决的核心问题
- 与 [[越狱攻击]]、[[RLHF]] 对齐构成完整攻防

## 核心风险

- **提示注入（Prompt Injection）**：恶意内容劫持 Agent 指令（直接/间接）
- **权限失控**：Agent 拥有过高权限时误操作
- **数据外泄**：Agent 被诱导泄露上下文/凭证
- **工具滥用**：被诱导调用危险工具
- **多轮诱导**：分步突破

## dive-into-llms 第 10 章

来自 [[raw/articles/dive-into-llms-overview]]：大模型在开放智能体场景中能否意识到风险威胁。

## 防护方向

- 最小权限原则、工具白名单
- 输入/输出审查、人在回路（关键操作确认）
- 沙箱隔离、审计日志

## 相关概念

- [[Agent]] · [[越狱攻击]] · [[RLHF]] · [[隐写术]]

## 相关主题

- [[动手学大模型]]

## 来源

- [[raw/articles/dive-into-llms-overview]]（第 10 章）
