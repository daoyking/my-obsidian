---
title: Agent 评估（Eval）
aliases: [Agent评估, LLM评测, eval, LLM-as-judge]
type: concept
tags: [agent, 评测, eval, 质量]
created: 2026-08-09
updated: 2026-08-09
sources: [[W5-每日任务卡]], [[可观测性]], [[Agent]]
status: active
---

# Agent 评估（Eval）

> 用程序化方式衡量 LLM / Agent 输出质量，替代纯人工抽查，使「Agent 好不好」可量化、可回归。是 [[W5-每日任务卡]] 的核心主题之一，也是把 Demo 推向产品的质量护栏。

## 两种流派

1. **确定性指标（程序化、零成本）**
   - 精确匹配 / 包含关键词 / 正则 / JSON schema 校验。
   - 工具类正确性：如「结果 == 84」「是否调用了 `calculator`」。
   - 优点：稳定、可离线、无额外开销；缺点：只能评「对错」，评不了「好坏」。

2. **LLM-as-judge（本课采用）**
   - 用另一个 LLM 当评审员，按 rubric 对输出打 0–10 分，并给 `passed` + 一句 `reasoning`。
   - 实现：`generateObject({ model, schema, system, prompt })`，schema 用 zod 且字段加 `.describe()` 更稳。
   - 优点：能评相关性 / 安全性 / 格式等主观维度；缺点：评审本身有偏差、有调用成本、可能自我偏好。

## 数据集（eval set）

每条用例 = `{ id, input, context?, criteria: [{ name, description, weight? }] }`：
- `criteria` 即评审标准，带 `weight` 可做加权均分；
- 标准一旦定下，就作为「回归基线」——每次改 prompt / 工具后重跑，分数低于阈值即告警。

## 回归与 CI

- 把同一数据集接进 CI：每次 PR 跑 `npm test`（离线用 mock judge），真实评测可定时跑。
- 配合 [[可观测性]] 的 trace，能定位「哪条用例掉分、卡在哪一步」。

## 参考工具

- 自写（本课 `w5-agent-eval`）：`generateObject` + zod 足够起步。
- 框架：`promptfoo`（多 prompt/模型横评）、`deepeval`、`rai`、`Giskard`。

## 关联

- 执行卡：[[W5-每日任务卡]]
- 互补概念：[[可观测性]]（评测看「结果好不好」，可观测看「过程对不对」）
- 上层：[[Agent]] · [[Agent开发学习计划]]
