---
title: SGLang
aliases: [SGLang, sglang, SGLang 推理引擎]
type: entity
tags: [ai, inference, framework, llm, open-source]
created: 2026-08-11
updated: 2026-08-12
sources: ["[[raw/articles/ai-hot-2026-08-11]]", "[[raw/articles/ai-hot-2026-08-08]]", "[[raw/articles/ai-hot-2026-08-12]]"]
status: active
---

# SGLang

## 是什么

开源的 LLM 推理引擎/框架，提供高性能推理服务，支持结构化生成、RadixAttention 等优化。由 LMSYS（Chatbot Arena 团队）发起。SGLang 已连续为多款新发布模型提供 Day-0 推理支持（[[Muse-Glimmer]]、[[Nemotron]] 3.5 Lightning），并主导 Unified Radix Cache 等推理系统研究。

## 核心特性

- **Day-0 支持**：对新发布模型在当日提供推理引擎适配
  - 2026-08-11 对 [[Muse-Glimmer]] 30B 多模态模型 + 128k 上下文的支持
  - 2026-08-12 对 [[Nemotron]] 3.5 Lightning（30B 总 / 3B 激活 MoE，1M 上下文）的支持，提供 BF16 和 NVFP4 权重推理，支持 MTP/DFlash/DSpark 三种投机解码，OpenAI 兼容 API 接入
- **针对本地智能体工作流优化**：SGLang × Muse Glimmer / Nemotron 均明确面向本地、常驻运行的 Agent 推理场景
- **高性能算子集成**：2026-08-08 腾讯混元 HPC-Ops 开源算子库（Dynamic Attention + Fused MoE）集成至 SGLang 主分支，在 Hy3 上最高降低 TPOT 48.8%
- **Unified Radix Cache（2026-08-12，LMSYS 团队）**：用单一 token 键控 radix 拓扑统一管理混合模型的 FULL、SWA 和 MAMBA 组件缓存，各组件独立执行路径、滑动窗口和检查点复用语义——为混合架构模型的前缀缓存提供单一树结构方案
- 结构化生成、RadixAttention 等推理优化能力

## 适用场景

- 新模型的快速推理适配（Day-0 支持）
- 本地 Agent 工作流的推理后端
- 大规模 LLM 服务的性能优化
- 长上下文多模态模型的推理部署
- 混合架构（FULL+SWA+MAMBA）模型的前缀缓存统一管理

## 在我项目中的使用

> 关联到 projects/ 下的具体项目。

- （暂无直接使用）作为本地 Agent 推理引擎的候选持续关注；与 [[Muse-Glimmer]] / [[Nemotron]] 的 Day-0 组合是「本地常驻多模态 Agent」推理栈的开放方案，值得在 W6 作品集评估

## 相关实体

- [[Muse-Glimmer]]（Day-0 支持对象）· [[Nemotron]]（Day-0 支持对象）· [[AI]]

## 相关概念

- [[Agent]] · [[多模态大模型]] · [[Agent持续进化]]

## 相关主题

- [[AI资讯]]

## 来源

- [[raw/articles/ai-hot-2026-08-11]]（SGLang 为 Muse Glimmer 提供 Day-0 支持）
- [[raw/articles/ai-hot-2026-08-08]]（腾讯混元 HPC-Ops × SGLang 集成）
- [[raw/articles/ai-hot-2026-08-12]]（SGLang Day-0 支持 Nemotron 3.5 Lightning + LMSYS 提出 Unified Radix Cache）
