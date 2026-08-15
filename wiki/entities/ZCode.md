---
title: ZCode
aliases: [ZCode, 智谱 ZCode, Z.ai ZCode]
type: entity
tags: [ai, coding-agent, glm, zhipu, tool]
created: 2026-08-12
updated: 2026-08-16
sources: ["[[raw/articles/ai-hot-2026-08-12]]", "[[raw/articles/ai-hot-2026-08-15]]"]
status: seed
---

# ZCode

## 是什么

智谱（GLM / Z.ai）推出的编码智能体工具，针对 [[GLM]] 系列模型深度优化。2026-08-12 全面升级，上线 Goal、Subagents、Remote Control 与闲时任务四大功能，定位为 GLM 生态的 [[Coding-Agent]]。

## 核心特性

来自 [[raw/articles/ai-hot-2026-08-12]]：

### 四大新功能（2026-08-12）

- **Goal**：目标导向的任务执行模式
- **Subagents**：子智能体协作（多 Agent 编排）
- **Remote Control**：远程控制能力
- **闲时任务**：利用空闲算力执行后台任务

### 性能数据

- 在 Z.ai Code Bench 测试中，**GLM-5.2 + ZCode 较 GLM-5.2 + Claude Code 任务整体通过率高 2.39%**
- ZCode 缓存命中率超 98%
- 叠加 1.5 倍限时额度加成后，GLM Coding Plan 整体使用量接近常规额度的 1.8 倍

### GLM-5.3 上线（2026-08-15）

来自 [[raw/articles/ai-hot-2026-08-15]]：

- [[GLM]]-5.3 即日起上线 **ZCode、AutoClaw 等工具**
- GLM-5.3 编程能力较前代提升 50%，Terminal Bench 3.0 开源第一，接近 Claude Fable 5
- 涌现网络安全能力：白盒代码审查持平 Mythos 5，CyberGym 84.5%
- 权重将在两周后开源
- **定位**：GLM-5.3 + ZCode 进一步验证"模型 × 工具协同"——编程模型同时涌现安全审查能力，意味着 ZCode/AutoClaw 工具链可向代码安全场景延伸

## 适用场景

- GLM 生态用户的编码智能体工作流
- 需要子智能体协作的多步骤开发任务
- 利用闲时算力的后台自动化

## 在我项目中的使用

> 关联到 projects/ 下的具体项目。

- （暂无直接使用，但作为 [[Coding-Agent]] 生态的重要一员关注）GLM-5.2 + ZCode 在 Code Bench 上略胜 Claude Code 组合值得关注——模型 × 工具的协同优化可能比单独比模型更重要

## 相关实体

- [[GLM]]（配套模型家族）· [[Claude-Code]]（直接对照基准）· [[Cursor]] · [[AI]]

## 相关概念

- [[Coding-Agent]] · [[Harness工程]] · [[上下文工程]] · [[Agent持续进化]] · [[Agent安全]]（GLM-5.3 涌现网络安全能力）

## 相关主题

- [[AI资讯]]

## 来源

- [[raw/articles/ai-hot-2026-08-12]]（ZCode 四大功能上线 + GLM-5.2 协同性能数据）
- [[raw/articles/ai-hot-2026-08-15]]（GLM-5.3 上线 ZCode/AutoClaw + 编程开源第一 + 网络安全能力涌现）
