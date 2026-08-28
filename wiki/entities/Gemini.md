---
title: Gemini
aliases: [Google Gemini, Gemini 模型]
type: entity
tags: [ai, llm, google, multimodal, agent]
created: 2026-08-15
updated: 2026-08-28
sources: ["[[raw/articles/ai-hot-2026-08-28]]", "[[raw/articles/ai-hot-2026-08-27]]]", "[[raw/articles/ai-hot-2026-08-15]]"]]", "[[raw/articles/ai-hot-2026-08-15]]"]
status: active
---

# Gemini

## 是什么

Google DeepMind 推出的多模态大模型家族，是 Google AI 战略的核心模型线。Gemini 系列覆盖 Flash（工作模型，主打编程与智能体）、Pro、Ultra 等多个层级，并深度集成进 Google 全家桶（Search / Sheets / Workspace / Cloud / Ads 等）。

## 核心特性

- **多模态原生**：文本 / 图像 / 音频 / 视频统一编码
- **长上下文**：原生支持超长上下文（百万级 token）
- **编程与智能体优先**：3.7 Flash 主打编程与 Agent 任务，定价为前代一半
- **Google 生态集成**：Search / Sheets / Workspace / Cloud / Ads / Database Migration Service 等深度内嵌
- **Gemini 月活破 10 亿**（2026-08-12）：Google 增长最快产品，第 14 个达 10 亿用户里程碑的产品

## 版本演进（追踪）
- **Gemini Omni 1.1 Flash（2026-08-28）：** 更强生成式视频控制能力——场景扩展（10s×4 累计至 40s）、指定首尾帧平滑过渡、4K 高清输出。见 [[raw/articles/ai-hot-2026-08-28]]。
- **Gemini 3.5 Transcribe（2026-08-27）：** 高精度语音转文本模型，流式 WER 4.0%、非流式 2.6%，支持 85+ 语言、自定义词汇及三人说话人识别。见 [[raw/articles/ai-hot-2026-08-27]]。

- **Gemini 3.7 Flash（2026-08-14）**：距 3.6 Flash 仅三周，主打编程与智能体任务；输入 $0.75 / 百万 token，输出 $3.75 / 百万 token（3.6 Flash 一半价格）
- **Gemini 3.7 Flash 全面上线 Pro 与 Ultra 用户（2026-08-15）**：3.7 Flash 向 Gemini 聊天中的 Pro 和 Ultra 用户开放，提升多步骤任务推理与准确性（如智能整合数十个文件和邮件为一份主文档）。同时 **Gemini Spark 运行于 3.7 Flash**，通过改进对 Google Workspace 应用的工具调用让个人 AI 智能体更精准。见 [[raw/articles/ai-hot-2026-08-15]]。
- **Gemini 月活破 10 亿（2026-08-12）**：见 [[raw/articles/ai-hot-2026-08-12]]
- **Gemini 助力 Database Migration Service（2026-08-12）**：将 Oracle/SQL Server 存储过程转 PostgreSQL PL/pgSQL，见 [[raw/articles/ai-hot-2026-08-12]]
- **AMIE 实时临床视频问诊（2026-08-12）**：基于 Gemini + Project Astra 构建医疗 AI，见 [[AMIE]] · [[raw/articles/ai-hot-2026-08-12]]

## 适用场景

- 编程与 Agent 任务（3.7 Flash 主战场）
- 多模态内容理解与生成
- Google 生态内的工作流自动化（Sheets canvas、Workspace AI 等）

## 在我项目中的使用

> 关联到 projects/ 下的具体项目。

- 暂无直接使用；WorkBuddy Skill 体系暂未接入 Gemini 模型线，但 [[OpenRouter]] Auto 路由器可路由到 Gemini

## 相关实体

- [[AMIE]] · [[OpenRouter]] · [[Grok]] · [[Qwen]] · [[Claude-Code]]（同属前沿模型生态，多极化竞争）
- [[Cursor]]（Cursor Router 可路由到 Gemini）

## 相关概念

- [[多模态大模型]] · [[Agent]] · [[Coding-Agent]] · [[开放权重]]（Gemini 不开放权重，仅 API / 闭源）

## 来源

- [[raw/articles/ai-hot-2026-08-28]]（Gemini Omni 1.1 Flash + Google Earth AI 行星预测引擎 PPE + 双盲评测试点）
- [[raw/articles/ai-hot-2026-08-14]]（Gemini 3.7 Flash 发布）
- [[raw/articles/ai-hot-2026-08-15]]（Gemini 3.7 Flash 全面上线 Pro/Ultra 用户 + Gemini Spark 运行于 3.7 Flash）
- [[raw/articles/ai-hot-2026-08-12]]（Gemini 月活破 10 亿 · Database Migration Service · AMIE）
