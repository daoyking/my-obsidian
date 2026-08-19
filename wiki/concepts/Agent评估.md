---
title: Agent 评估
aliases: [Agent Evaluation, Agent评估, 评估]
type: concept
tags: [ai, llm, agent, evaluation]
created: 2026-08-07
updated: 2026-08-19
sources: ["[[raw/papers/ai-agents-in-depth]]", "[[raw/articles/ai-hot-2026-08-11]]"]
status: seed
---

# Agent 评估

## 定义

系统衡量 Agent 能力与质量的方法论：构建评估环境、设计任务数据集、定义指标、自动化评估，并把评估结果反馈到模型选型与系统改进。

## 为什么重要

- Agent 能力是多维的（规划、工具、记忆、可靠性），不能只看单点 demo
- 没有评估就没有改进——评估驱动选型与迭代
- 是 Agent 工程闭环的关键一环

## 核心组成（《AI Agents in Depth》第 6 章）

来自 [[raw/papers/ai-agents-in-depth]]：
1. **自动评估环境**：工具调用型 / 人机交互型
2. **任务数据集设计**：精确性、层次化复杂度、可验证性、分布系统性
3. **评估指标体系**：成功率、步数、成本、延迟等
4. **LLM-as-a-Judge**：用 LLM 自动打分；配对比较与模型排名
5. **可观测性**：轨迹、消融、AB 测试、双层特性开关
6. **仿真环境**：从评估到后训练的桥梁

## 从 Benchmark 到改进

读懂 Benchmark 报告 → 发现问题 → 构建改进假设 → 数据驱动决策 → 持续迭代。

## 社区驱动的模型排行榜（2026-08-11）

来自 [[raw/articles/ai-hot-2026-08-11]]：

LatentRank 聚合多家可信榜单，采用 Bradley-Terry 成对比较算法，并加入先验限制小样本结果，以解决不同榜单规模、领先幅度和模型缺失带来的评分偏差。当前榜单 Opus 5 超过 Fable 5 居前。

**定位**：模型排名的本质是"用可比较的信号聚合主观评测"——与本页 LLM-as-a-Judge 的配对比较、模型排名一脉相承；社区消费数据驱动的 [[OpenRouter]] Auto 路由器则是"评估 → 选型"的自动化闭环。

## AI 评测设计方法论（2026-08-19）

来自 [[raw/articles/ai-hot-2026-08-19]]（Google AI DEV）：

**核心主张**：设计 AI 评测，先求清晰，再谈可视化。

- 用开源评测框架 **Inspect AI** 和 **Harbor** 评估 agent 技能
- 借助 Google Sheets 和 Data Studio 进行可视化分析
- 强调评测目标（eval goal）先行：明确要回答什么问题，再设计任务与指标
- 可视化是次要的——先确保评估逻辑清晰，再追求呈现形式

**定位**：这与本库 [[Agent评估]] 的"从 Benchmark 到改进"闭环高度一致——评估的终点是驱动改进，而非展示漂亮图表。Inspect AI 作为开源框架（与商业评测服务形成对照），对本库自维护的 [[Agent开发工程师面试宝典]] 等资产也有复用价值。

**对本库的启示**：本库 Wiki 的事实性校验可借鉴"先求清晰"思路——Lint 的悬空/孤立检测是"清晰"层，可视化呈现（如 INDEX 的 Dataview 聚合）是次要层。

## 相关概念

- [[Agent]] · [[Harness工程]] · [[RLHF]]（评估信号用于训练）

## 相关主题

- [[AI-Agents-in-Depth]]

## 来源

- [[raw/papers/ai-agents-in-depth]]（第 6 章）
- [[raw/articles/ai-hot-2026-08-11]]（LatentRank 聚合排行榜：Bradley-Terry 成对比较）
- [[raw/articles/ai-hot-2026-08-19]]（AI 评测设计：先求清晰再谈可视化；Inspect AI + Harbor 评估 agent 技能 + Google Sheets/Data Studio 可视化）
