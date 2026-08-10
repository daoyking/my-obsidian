---
title: RLHF
aliases: [基于人类反馈的强化学习, Reinforcement Learning from Human Feedback, PPO对齐]
type: concept
tags: [ai, llm, training, alignment, rlhf]
created: 2026-08-07
updated: 2026-08-07
sources: ["[[raw/articles/dive-into-llms-overview]]", "[[raw/papers/ai-agents-in-depth]]"]
status: active
---

# RLHF（基于人类反馈的强化学习）

## 定义

用人类对模型输出的偏好（好坏排序）训练一个奖励模型，再用强化学习（如 PPO）优化大模型，使其输出更符合人类价值观与意图。是 ChatGPT 类模型「对齐」的关键技术。

## 为什么重要

- 单纯 SFT 只学会「怎么回答」，RLHF 学会「回答得多好、多安全、多有用」
- 是目前主流对齐范式（与 DPO 等替代方案并存）
- 直接关系模型的安全性、可控性

## 核心机制（三阶段）

1. **SFT**：监督微调得到初始策略模型（见 [[微调]]）
2. **奖励模型（RM）**：用人类标注的「偏好对」训练，给输出打分
3. **强化学习**：用 PPO 等算法，以 RM 的分数为奖励，优化策略模型

```
人类偏好数据 → 训练奖励模型 RM
                  ↓
策略模型生成 → RM 打分 → PPO 更新策略模型
```

## dive-into-llms 第 11 章

来自 [[raw/articles/dive-into-llms-overview]]：基于 PPO 的 RLHF 实验指南，聚焦安全对齐。

## 替代/演进

- **DPO**（Direct Preference Optimization）：绕过显式 RM，直接用偏好数据优化，更简单稳定
- **RLAIF**：用 AI 代替人类给反馈
- **Constitutional AI**（Anthropic）：基于宪法的自我修正

## 多轮任务的信用分配（《AI Agents in Depth》第 7 章）

来自 [[raw/papers/ai-agents-in-depth]]：Agent 多轮任务的核心挑战是信用分配——
- **过程奖励 vs 结果奖励**：只奖励最终结果易稀疏，过程奖励更密但难设计
- **RLVP（验证路径惩罚）与部分奖励**：奖励结果、约束过程
- RL 学工具调用：让模型在实践中学会何时调用哪个工具
- 与 [[Agent持续进化]] 呼应：轨迹信号既可写参数，也可沉淀为知识/指令/程序

## 相关概念

- [[微调]] · [[安全对齐]] · [[越狱攻击]]（对齐的反面攻防）· [[Agent持续进化]] · [[蒸馏]]

## 相关主题

- [[动手学大模型]]

## 来源

- [[raw/articles/dive-into-llms-overview]]（dive-into-llms 第 11 章）
