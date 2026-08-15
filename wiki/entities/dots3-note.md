---
title: dots3-note
aliases: [dots3-note, dots3 note, 小红书 dots3-note, dots3 系列]
type: entity
tags: [ai, llm, model, moe, multimodal, xiaohongshu, open-weights]
created: 2026-08-16
updated: 2026-08-16
sources: ["[[raw/articles/ai-hot-2026-08-15]]"]
status: seed
---

# dots3-note

## 是什么

小红书 dots 团队开源的 dots3 系列最轻量模型（Preview 预览版），定位长程智能体与多模态推理。与同团队专注语音合成的 [[dots-tts]] 不同，dots3-note 是通用多模态大模型。

## 核心特性

来自 [[raw/articles/ai-hot-2026-08-15]]：

- **架构**：总参数 280B MoE，激活参数仅 **16B**——延续"总参数大 / 激活小"的 MoE 开源趋势
- **上下文**：512K token
- **多模态**：文本 + 视觉 + 语音原生理解
- **优化方向**：复杂推理与长程 Agent 任务
- **定位**：dots3 系列最轻量模型，Preview 预览版

## 适用场景

- 长程 Agent 工作流（512K 上下文 + 16B 激活，兼顾长上下文与推理成本）
- 多模态理解任务（文/视/音统一）
- 复杂推理任务

## 在我项目中的使用

> 关联到 projects/ 下的具体项目。

- （暂无直接使用）作为多模态 Agent 模型候选关注；16B 激活参数对常驻 Agent 工作流的算力门槛友好

## 相关实体

- [[dots-tts]]（同团队，但 dots-tts 是 TTS 模型，dots3-note 是通用多模态 LLM）· [[Nemotron]] · [[Qwen]] · [[Ling]]（同属 MoE 开源模型，激活参数梯度对照）

## 相关概念

- [[开放权重]] · [[多模态大模型]] · [[Agent]]

## 相关主题

- [[AI资讯]]

## 来源

- [[raw/articles/ai-hot-2026-08-15]]（dots3-note Preview 开源）
