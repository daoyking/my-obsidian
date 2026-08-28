---
title: GLM
aliases: [智谱 GLM, GLM 模型, Z.ai GLM, ChatGLM]
type: entity
tags: [ai, llm, model, zhipu, glm, open-weights, coding]
created: 2026-08-16
updated: 2026-08-28
sources: ["[[raw/articles/ai-hot-2026-08-28]]", "[[raw/articles/ai-hot-2026-08-27]]]", "[[raw/articles/ai-hot-2026-08-15]]"]]", "[[raw/articles/ai-hot-2026-08-15]]"]
status: active
---

# GLM（智谱）

## 是什么

智谱（GLM / Z.ai）推出的大语言模型家族，是国产前沿模型多极化的重要一极。GLM 系列以编程与智能体能力见长，配套 [[ZCode]] 编码智能体工具，形成"模型 × 工具"协同生态。

## 核心特性

- **后训练 Scaling**：GLM-5.3 基于与 GLM-5.2 相同基座，通过极致后训练 Scaling 提升智能上界
- **编程能力**：GLM-5.3 编程能力较前代提升 50%，Terminal Bench 3.0 等基准开源第一，接近 Claude Fable 5
- **安全能力涌现**：白盒代码审查持平 Mythos 5，CyberGym 测试 84.5%——编程模型涌现网络安全能力是新现象
- **开放权重**：GLM-5.3 权重将在发布两周后开源
- **工具生态**：GLM-5.3 即日上线 [[ZCode]]、AutoClaw 等工具

## 版本演进（追踪）
- **GLM-5.3-Flash（2026-08-27）：** 320B-A18B 原生多模态，AA 指数 57 分与 Claude Opus 4.8 持平；定价为 GLM-5.3 的 1/10，限时折扣内为 Opus 4.8 的 1/40；稀疏+线性注意力混合架构，推理跑在国产芯片集群。见 [[raw/articles/ai-hot-2026-08-27]]。

- **GLM-5.2（2026-08-12 前后）**：ZCode 四大功能（Goal / Subagents / Remote Control / 闲时任务）针对 GLM 优化；Z.ai Code Bench 测试中 GLM-5.2 + ZCode 较 GLM-5.2 + Claude Code 通过率高 2.39%，缓存命中率超 98%。见 [[raw/articles/ai-hot-2026-08-12]]。
- **GLM-5.3（2026-08-15）**：编程能力开源第一（Terminal Bench 3.0），接近 Claude Fable 5；涌现网络安全能力（CyberGym 84.5%）；权重两周后开源；上线 ZCode / AutoClaw。见 [[raw/articles/ai-hot-2026-08-15]]。

## 适用场景

- 编码智能体工作流（配合 [[ZCode]]）
- 代码安全审查（CyberGym 84.5%，白盒审查持平 Mythos 5）
- 国产前沿模型选型的开源候选

## 在我项目中的使用

> 关联到 projects/ 下的具体项目。

- （暂无直接使用）作为国产开源编程模型候选关注；GLM-5.3 + ZCode 在 Code Bench 上略胜 Claude Code 组合验证"模型 × 工具协同"价值

## 相关实体

- [[ZCode]]（GLM 配套编码智能体）· [[Claude-Code]]（直接对照基准）· [[Cursor]] · [[Qwen]] · [[DeepSeek]]（同属国产开源前沿模型多极化）· [[Grok]] · [[Gemini]]

## 相关概念

- [[开放权重]] · [[Coding-Agent]] · [[Harness工程]] · [[Agent安全]]（网络安全能力涌现）

## 相关主题

- [[AI资讯]]

## 来源

- [[raw/articles/ai-hot-2026-08-28]]（无新动态，保留 08-27 内容）
- [[raw/articles/ai-hot-2026-08-12]]（GLM-5.2 + ZCode 四大功能与协同性能数据）
- [[raw/articles/ai-hot-2026-08-15]]（GLM-5.3 发布：编程开源第一 + 网络安全能力涌现 + 权重两周后开源）
