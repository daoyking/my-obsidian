---
title: Andrej Karpathy
aliases: [Karpathy, 卡帕西]
type: entity
tags: [ai, person, educator, llm, instructor]
created: 2026-08-11
updated: 2026-08-11
sources: ["~/about-project/about-AI/四位AI讲师学习资料整理.md"]
status: active
---

# Andrej Karpathy

## 是什么

前 OpenAI 创始成员、特斯拉 AI 总监（Autopilot 负责人），现创立 AI 教育公司 Eureka Labs。以「边写代码边讲」的视频风格著称，从零手搓神经网络与 GPT，是 LLM 底层原理领域影响力最大的独立讲师。「卡帕西 LLM Wiki 方法」正是以他命名（见 [[CLAUDE]]）。

## 核心特性

- **LLM 原理教学三件套**（Agent 开发者最优先）：《Intro to LLMs》1h（token/训练三阶段/LLM OS 心智模型）、《Deep Dive into LLMs like ChatGPT》3.5h（幻觉/推理/工具使用/Agent 方向）、《Let's build GPT》2h（跟写 nanoGPT，看懂 transformer）
- **《Neural Networks: Zero to Hero》系列**：micrograd → makemore → GPT → Tokenizer → GPT-2，完整的手搓路线（对不训练模型的人全刷 ROI 低）
- **开源仓库**：nanoGPT（62k stars）、micrograd（100 行自动求导）、makemore、minbpe（BPE 分词）、llm.c（纯 C/CUDA 训练）、nanochat（2025-10 发布，单节点全流程 LLM 演示）
- **《Software 2.0》博客**：「AI 编程 = 用数据写软件」的源头论述，理解 Agent 时代编程范式
- 2023 年起转向 AI 教育：Eureka Labs 的 LLM101n 课程（截至 2026 年正文未发布）

## 适用场景

- Agent 开发初学者建立 LLM 心智模型（对应 [[Agent开发学习计划-Python路线]] Week 1）
- 理解 API 背后原理、幻觉成因与缓解、上下文工程（Week 8-9 前看 Deep Dive）
- 想看懂 transformer 内部机制时跟敲 Let's build GPT（Week 8 后有余力）

## 在本库中的使用

- [[四位AI讲师学习资料整理]]：定位「补原理」，与 [[吴恩达]]（应用）、[[李宏毅]]（直觉）、[[李沐]]（细节）互补
- 对应概念页：[[Agent]] · [[RLHF]] · [[思维链]] · [[上下文工程]]
- 「卡帕西 LLM Wiki 方法」是本知识库的构建方法学（见 [[CLAUDE]] 与 [[Agent持续进化]]）

## 相关实体

- [[吴恩达]] · [[李宏毅]] · [[李沐]]

## 相关主题

- [[四位AI讲师学习资料整理]] · [[Agent开发学习计划-Python路线]] · [[动手学大模型]]

## 来源

- `~/about-project/about-AI/四位AI讲师学习资料整理.md`（2026-08-11）
