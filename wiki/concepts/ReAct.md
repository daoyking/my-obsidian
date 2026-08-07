---
title: ReAct
aliases: [ReAct循环, Reasoning+Acting, 思考行动观察循环]
type: concept
tags: [ai, llm, agent, react]
created: 2026-08-07
updated: 2026-08-07
sources: ["[[raw/papers/ai-agents-in-depth]]"]
status: active
---

# ReAct（Reasoning + Acting）

## 定义

Agent 的核心循环：「思考（Reason）→ 行动（Act）→ 观察（Observe）」的迭代过程。模型先推理下一步该做什么，执行动作（通常调用工具），观察结果，再进入下一轮推理。

## 为什么重要

- 是现代 LLM Agent 的事实标准执行范式
- 把「推理」与「行动」交织，比纯思考（易空转）或纯行动（易盲目）都可靠
- 区分三个层次的学习信号：任务内上下文适应、跨任务外部产物（artifact）更新、训练周期参数更新

## 核心循环

```
Thought: 我需要查 X
Action: 调用工具 search("X")
Observation: 工具返回结果 ...
Thought: 根据结果，下一步该 Y
Action: ...
...
```

## 与思维链的关系

- [[思维链]]（CoT）是「纯推理」——只思考不行动
- ReAct 是「推理+行动」——思考后能调用工具改变世界状态
- CoT 是 ReAct 的推理子环节

## 在 Harness 中的位置

ReAct 循环由 [[Harness工程]] 驱动：Harness 负责解析模型输出的 Thought/Action、执行工具、把 Observation 喂回上下文。见 [[上下文工程]]。

## 相关概念

- [[Agent]] · [[思维链]] · [[Harness工程]] · [[上下文工程]]

## 相关主题

- [[AI-Agents-in-Depth]] · [[动手学大模型]]

## 来源

- [[raw/papers/ai-agents-in-depth]]（第 1 章 1.1.5）
