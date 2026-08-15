---
title: DeepSeek
aliases: [深度求索, DeepSeek 模型, DeepSeek-V4]
type: entity
tags: [ai, llm, model, deepseek, open-weights, moe]
created: 2026-08-16
updated: 2026-08-16
sources: ["[[raw/articles/ai-hot-2026-08-13]]", "[[raw/articles/ai-hot-2026-08-15]]"]
status: seed
---

# DeepSeek（深度求索）

## 是什么

DeepSeek（深度求索）推出的大语言模型家族，以 MIT 开源协议与高性价比著称，是国产开源前沿模型的重要一极。需注意区分：本页追踪 DeepSeek **模型线**（V4 Pro / V4 Flash 等），与同公司的智能体框架 [[DeepSeek-Harness]] 是不同产品。

## 核心特性

- **MIT 开源**：保持宽松开源协议
- **1M 上下文**：V4 Pro 支持百万级 token 上下文
- **三档推理强度**：低 / 高 / 最大，适配不同任务复杂度
- **智能体优先**：V4 Pro 更侧重编码、工具调用与智能体工作流
- **高性价比**：通过推理平台（如硅基流动）提供 Day-0 支持与低定价

## 版本演进（追踪）

- **DeepSeek V4 Pro（2026-08-13 技巧与观点提及，08-15 硅基流动 Day-0 上线）**：
  - 1M 上下文窗口，低/高/最大三档推理强度
  - 侧重编码、工具调用与智能体工作流
  - MIT 开源；硅基流动 SiliconFlow Day-0 支持
  - 定价：输入 $1.32/M、输出 $3.96/M、缓存命中 $0.44/M
  - 与 [[Grok]] 4.6 同日（2 小时间隔）发布，双双逼近 Claude Fable 5 体验。见 [[raw/articles/ai-hot-2026-08-13]]。
  - 硅基流动 Day-0 上线详情见 [[raw/articles/ai-hot-2026-08-15]]。
- **DeepSeek V4 Flash-0731**：面向追求速度与成本效益的日常生产场景。见 [[raw/articles/ai-hot-2026-08-15]]。

## 适用场景

- 长上下文智能体工作流（1M 上下文 + 工具调用优先）
- 编码与 Agent 任务（V4 Pro 侧重方向）
- 成本敏感的生产部署（MIT 开源 + 低定价）

## 在我项目中的使用

> 关联到 projects/ 下的具体项目。

- learning-ai-agent 工程曾用 DeepSeek 跑通 W2-W5 真实评测（100% 通过率），验证其对 Vercel AI SDK / Mastra 工具链的适配性。见 [[raw/articles/github-learning-ai-agent-2026-08-13]]。

## 相关实体

- [[DeepSeek-Harness]]（同公司智能体框架，"一切皆插件"，基于 Cordis）· [[Grok]]（同日发布对照）· [[GLM]] · [[Qwen]]（同属国产开源前沿模型多极化）· [[Claude-Code]]（逼近对象）

## 相关概念

- [[开放权重]] · [[Coding-Agent]] · [[Agent]]

## 相关主题

- [[AI资讯]]

## 来源

- [[raw/articles/ai-hot-2026-08-13]]（DeepSeek V4 Pro 与 Grok 4.6 同日发布，逼近 Claude Fable 5）
- [[raw/articles/ai-hot-2026-08-15]]（DeepSeek V4 Pro 登陆硅基流动，1M 上下文 + Day-0 + 定价）
