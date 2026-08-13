---
title: Qwen
aliases: [Qwen, 通义千问, Qwen3.8, Qwen3.8-2.4T-A95B, Qwen-Max]
type: entity
tags: [ai, llm, model, alibaba, open-weights, moe]
created: 2026-08-13
updated: 2026-08-13
sources: ["[[raw/articles/ai-hot-2026-08-13]]", "[[raw/articles/ai-hot-2026-08-08]]"]
status: active
---

# Qwen

## 是什么

阿里巴巴通义千问大模型系列，覆盖从轻量到旗舰的全谱系。2026-08-13 开放的 **Qwen3.8-2.4T-A95B** 是 Qwen-Max 级别模型**首次开源**——总参数 2.4T（MoE 架构）、每 Token 激活 95B、原生 262,144 Token 上下文并可扩展至 1,010,000 Token，标志着阿里把旗舰级模型推向开放权重生态。Qwen 系列还包含 [[Qwen-MM-Plugins]]（多模态智能体插件）与 Qwen3.8-MAX（思考研究 + 定时任务 + 办公助理 + 语音通话等 Agent 化产品形态）。

## 核心特性

- **Qwen3.8-2.4T-A95B（2026-08-13 开源）**
  - 总参数 2.4T MoE，每 Token 激活 95B——目前 Qwen 最大的开源模型
  - 原生 256K 上下文，可扩展至 1.01M Token
  - Qwen-Max 级别模型首次开源，把旗舰能力推向 [[开放权重]] 生态
  - [[SGLang]] 与 Miles 提供 Day-0 推理支持，采用混合注意力架构
- **Qwen3.8-MAX（2026-08-08 产品化）**
  - 思考研究（强化推理 + 工具调用）
  - 定时任务（周期自动执行）
  - 办公助理（连接日历/备忘录 + 操作浏览器）
  - 语音通话（7×24）

## 适用场景

- 长上下文（256K~1M）文档处理与代码库理解
- 旗舰级开源 MoE 模型的本地 / 私有化部署
- 多模态智能体工作流（搭配 Qwen-MM-Plugins）

## 在我项目中的使用

> 关联到 projects/ 下的具体项目。

- （暂无直接使用）作为开放权重旗舰模型持续关注；2.4T 总参数 / 95B 激活的 MoE 配置是本地常驻 Agent 推理算力门槛的重要参照

## 相关实体

- [[SGLang]]（Day-0 推理支持）· [[Ling]]（同属国内开放权重 MoE 谱系对照）· [[Nemotron]]（开放权重 MoE 同期竞品）· [[Muse-Glimmer]]（开放权重多模态对照）· [[AI]]

## 相关概念

- [[开放权重]] · [[Agent]] · [[多模态大模型]] · [[Agent持续进化]]

## 相关主题

- [[AI资讯]]

## 来源

- [[raw/articles/ai-hot-2026-08-13]]（Qwen3.8-2.4T-A95B 开源 + SGLang Day-0 支持）
- [[raw/articles/ai-hot-2026-08-08]]（Qwen3.8-MAX + 多项新功能 + Qwen-MM-Plugins）
