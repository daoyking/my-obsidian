---
title: Double-blind评估
aliases: [双盲评测, 加密盒子评测]
type: concept
tags: [ai, evaluation, agent-eval, double-blind]
created: 2026-08-28
updated: 2026-08-28
sources: ["[[raw/articles/ai-hot-2026-08-28]]"]
status: seed
---

# Double-blind评估（双盲评测）

## 定义

双盲评测是一种前沿 AI 模型评估方法，将外部评测限制在加密"盒子"中，防止模型提前看到测试题，从而获得更真实的性能评估。

## 核心机制

- **加密隔离**：评测环境完全隔离，模型无法访问测试题目
- **双盲设计**：评估者与被评估模型均不知晓具体测试内容
- **试点合作**：Google DeepMind 与新加坡 AI 安全研究所、OpenMined、AVERI、MLCommons 合作试点
- **首次应用**：针对专有前沿 AI 模型（如 Gemini Flash Lite）的全球首个双盲评测

## 意义

双盲评测解决了传统 AI 基准测试的"数据污染"问题——模型可能在训练过程中偶然接触到测试题，导致基准分数失真。这是 [[Agent评估]] 方法论的重要演进。

## 相关概念

- [[Agent评估]]
- [[基准测试]]
- [[负责任AI]]

## 来源

- [[raw/articles/ai-hot-2026-08-28]] — AI HOT 日报 2026-08-28
