---
title: Nemotron
aliases: [Nemotron 3.5 Lightning, Nemotron 4, NVIDIA Nemotron]
type: entity
tags: [ai, llm, model, nvidia, open-weights, moe]
created: 2026-08-12
updated: 2026-08-12
sources: ["[[raw/articles/ai-hot-2026-08-12]]"]
status: seed
---

# Nemotron

## 是什么

NVIDIA 自研的开源大模型系列，面向本地智能体（Agent）与边缘部署场景设计。当前公开版本为 Nemotron 3.5 Lightning（30B MoE），并在研发万亿参数的 Nemotron 4 系列。

## 核心特性

### Nemotron 3.5 Lightning（2026-08-12 发布）

来自 [[raw/articles/ai-hot-2026-08-12]]：

- **架构**：30B 总参数的混合专家（MoE）模型，推理时仅激活 3B 参数；专为常驻智能体（always-on agent）设计
- **性能**：相比同类开源模型，token 生成速度最高提升 4 倍，任务完成时间缩短 30%
- **开放权重**：支持用户微调以匹配特定任务（见 [[开放权重]]）
- **部署载体**：可在 RTX PC、DGX Spark 及 Jetson 等设备上运行，主打本地/边缘
- **长上下文**：支持最长 1M token 上下文
- **权重格式**：Hugging Face 提供 BF16 和 NVFP4 权重
- **投机解码**：支持 MTP、DFlash、DSpark 三种投机解码技术
- **API 兼容**：可通过 OpenAI 兼容 API 接入智能体工作流
- **推理引擎**：[[SGLang]] 提供 Day-0 推理支持

### Nemotron 4（研发中）

来自 [[raw/articles/ai-hot-2026-08-12]]：

- 规模最大的模型预计至少 **1 万亿参数**，目标挑战全球顶级开源模型
- 最终训练尚未完成，最早可能 2026 年秋末准备就绪
- Gary Marcus 透露：英伟达将发布**真正开源（非仅开放权重）**的 Nemotron 新版本，可能削弱合作伙伴 OpenAI 和 Anthropic 的地位——这若属实，是 [[开放权重]] 边界的重要突破

## 适用场景

- 本地常驻 Agent 的推理后端（与 [[Muse-Glimmer]] 定位类似，但来自 NVIDIA 官方）
- RTX PC / Jetson 等边缘设备的 AI 工作流
- 需要长上下文（1M token）的 Agent 任务
- 通过 OpenAI 兼容 API 接入现有智能体编排框架

## 在我项目中的使用

> 关联到 projects/ 下的具体项目。

- （暂无直接使用）作为本地 Agent 推理模型的候选持续关注；与 [[Muse-Glimmer]] + [[SGLang]] 组合形成对照（NVIDIA 官方栈 vs Meta 开放权重栈）

## 相关实体

- [[SGLang]]（Day-0 推理支持）· [[Muse-Glimmer]]（同定位对照）· [[AI]]

## 相关概念

- [[开放权重]] · [[Agent]] · [[多模态大模型]] · [[Agent持续进化]]

## 相关主题

- [[AI资讯]]

## 来源

- [[raw/articles/ai-hot-2026-08-12]]（Nemotron 3.5 Lightning 发布、SGLang Day-0 支持、Nemotron 4 万亿参数规划、Gary Marcus 透露真开源动向）
