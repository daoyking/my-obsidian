---
title: Ling
aliases: [Ling-3.0-tiny, 蚂蚁百灵 Ling, Ling 3.0]
type: entity
tags: [ai, llm, model, ant-group, open-weights, moe]
created: 2026-08-12
updated: 2026-08-12
sources: ["[[raw/articles/ai-hot-2026-08-12]]"]
status: seed
---

# Ling（蚂蚁百灵）

## 是什么

蚂蚁百灵（Ant Group）开源的大语言模型系列。2026-08-12 开源的 Ling-3.0-tiny 是一款原生混合推理模型，主打「极低激活参数 + 中等总参数」的高效推理。

## 核心特性

来自 [[raw/articles/ai-hot-2026-08-12]]：

- **架构**：总参数 7.9B，推理时仅激活 **1.3B 参数**的原生混合推理模型
- **三档精度**：同步提供 BF16、FP8 和 INT4 三个版本，适配不同部署场景
- **定位**：面向真实任务的轻量级推理，激活参数极低意味着推理成本与延迟可控

## 适用场景

- 资源受限环境下的真实任务推理（1.3B 激活参数显著降低算力门槛）
- 需要 INT4 量化的边缘部署
- 与 [[Nemotron]] 3.5 Lightning（3B 激活）、[[Muse-Glimmer]]（30B 全量）形成「激活参数梯度」对照

## 在我项目中的使用

> 关联到 projects/ 下的具体项目。

- （暂无直接使用）作为轻量级本地推理模型的候选关注；1.3B 激活参数对消费级硬件友好

## 相关实体

- [[Nemotron]]（同属 MoE 开源模型对照）· [[Muse-Glimmer]] · [[AI]]

## 相关概念

- [[开放权重]] · [[Agent]] · [[微调]]

## 相关主题

- [[AI资讯]]

## 来源

- [[raw/articles/ai-hot-2026-08-12]]（Ling-3.0-tiny 正式开源）
