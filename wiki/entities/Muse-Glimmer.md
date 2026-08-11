---
title: Muse Glimmer
aliases: [Muse Glimmer, Meta Muse Glimmer]
type: entity
tags: [ai, model, multimodal, meta, open-source, agent]
created: 2026-08-11
updated: 2026-08-11
sources: ["[[raw/articles/ai-hot-2026-08-11]]"]
status: seed
---

# Muse Glimmer

## 是什么

Meta（Meta Superintelligence Labs）推出的开放权重、300 亿（30B）参数多模态模型，专为**本地、常驻运行的智能体工作流**优化。2026-08-11 经 AI HOT 日报收录。模型设计为完全在消费级硬件（如 Mac 或配备高性能 GPU 的 PC）上运行，以 Apache 2.0 许可证发布权重。[[SGLang]] 在发布当日提供 Day-0 推理支持。

## 核心特性

- **参数规模**：30B 参数多模态模型
- **上下文窗口**：128k+ token
- **本地优先**：专为本地、常驻运行的 Agent 工作流设计，可在消费级硬件全量运行
- **多模态**：多模态模型（具体模态组合待原文补充）
- **开放权重 + Apache 2.0**：以宽松许可证发布权重，可自由使用、修改、商用
- **Agent 用例对标领先**：在关键智能体用例和基准测试中与同尺寸领先模型相比表现出色
- **Day-0 推理支持**：[[SGLang]] 与 Meta 合作在发布当日提供推理引擎支持，针对本地 Agent 工作流优化

## 适用场景

- 本地常驻 Agent 工作流（隐私优先、离线可用的智能体）
- 消费级硬件上的多模态 Agent 部署（Mac / 高性能 GPU PC）
- 开源 Agent 生态的本地推理基座
- 长上下文（128k+）的 Agent 任务编排

## 在我项目中的使用

> 关联到 projects/ 下的具体项目。

- （暂无直接使用）作为本地多模态 Agent 推理模型的候选持续关注；本库 [[Agent持续进化]] 与本地 Agent 工作流理念高度相关——Muse Glimmer 是「本地常驻 Agent」这一范式的开放权重基座，值得在 W6 作品集中评估是否作为本地推理后端

## 相关实体

- [[SGLang]]（Day-0 推理支持）· [[AI]]

## 相关概念

- [[多模态大模型]] · [[Agent]] · [[Agent持续进化]]

## 相关主题

- [[AI资讯]] · [[AI]]

## 开源 vs 开放权重的争议

来自 [[raw/articles/ai-hot-2026-08-11]]（Gary Marcus 剖析）：Muse Glimmer 是"开放权重"而非"开源"——仅发布训练后权重，不公开训练数据/预处理/训练算法，用户无法自由修改或深入调查。Gary Marcus 以 Muse Glimmer 为例证，指出开放权重模型在透明度与可定制性上与真正开源存在根本差异。

**定位**：这一区分对开发者选型与监管者评估有直接影响——"Apache 2.0 开放权重"在许可证层面宽松，但在可理解性/可审计性上仍受限。

## 来源

- [[raw/articles/ai-hot-2026-08-11]]（Meta 发布 Muse Glimmer、SGLang Day-0 支持、Gary Marcus 开源≠开放权重）
