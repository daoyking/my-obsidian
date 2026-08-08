---
title: AI
aliases: [人工智能, LLM, 大模型]
type: topic
tags: [ai, llm, topic]
created: 2022-09-19
updated: 2026-08-08
sources: ["[[raw/articles/ai-hot-2026-08-07]]"]
status: active
---

# AI

## 背景

持续跟踪人工智能与大语言模型（LLM）的发展，并探索其与前端工程化的结合点。日常通过 AI HOT 日报关注动态，并使用 WorkBuddy / Claude Code 等 Agent 协助工作。

## 关键子主题

- **LLM 基础**：Transformer、上下文窗口、Token、推理 vs 训练
- **训练与对齐**：[[微调]]（SFT/LoRA）· [[RLHF]]（PPO 对齐）· [[蒸馏]]
- **提示与推理**：[[思维链]]（CoT）· Prompt 工程
- **安全攻防**：[[越狱攻击]] · [[模型水印]] · [[隐写术]] · [[Agent安全]]
- **能力扩展**：[[多模态大模型]] · [[Agent]] · [[ReAct]] · [[MCP]] · [[知识编辑]]
- **Agent 工程**：[[Harness工程]] · [[上下文工程]] · [[记忆系统]] · [[Coding-Agent]] · [[Agent持续进化]] · [[提示注入]]
- **Agent 与工具调用**：Function Calling、[[MCP]]、Claude Code、WorkBuddy
- **知识管理**：卡帕西 LLM Wiki 方法（本知识库的奠基理论，见 [[CLAUDE]]）
- **前端 × AI**：AI 辅助编码、AI 生成 UI、Copilot 集成
- **AI 通识与战略**：[[AI素养]] · [[AI战略]] · [[AI转型]] · [[负责任AI]]（源自 [[吴恩达]] [[AI-for-Everyone]]）

## 每日动态

- [[AI资讯]] — 每日 AI HOT 日报 Ingest 汇总（自动化 08:00 驱动），重要事件同步编译到本页及相关实体/概念页

## 学习资源

- [[动手学大模型]]（dive-into-llms，11 章全栈 LLM 实践，偏能力点）
- [[AI-Agents-in-Depth]]（316 页 Agent 工程专著，偏系统工程，以 Harness 工程为主线）
- [[AI-for-Everyone]]（吴恩达非技术向 AI 通识课，偏素养 / 战略 / 负责任 AI）

## 我的观点

- LLM Wiki 模式优于纯 RAG：知识持续积累而非每次从零检索
- AI 适合做「簿记」（交叉引用、一致性维护），人类负责思考与判断
- 前端工程师的下一个增长点是把 AI 能力嵌入产品与工作流

## 待研究问题

- 如何让本 wiki 的 Ingest / Lint 更自动化？
- 本地嵌入模型（Smart Connections）与远程模型的取舍
- AI 生成代码的可维护性与审核流程

## 来源

- 卡帕西 LLM Wiki Gist
- AI HOT 日报（日常追踪，见 [[AI资讯]]）
- [[raw/articles/dive-into-llms-overview]]（《动手学大模型》教程）
- [[raw/papers/ai-agents-in-depth]]（《AI Agents in Depth》专著）
- [[raw/articles/ai-hot-2026-08-07]]（AI HOT 日报 2026-08-07）
- [[raw/articles/ai-for-everyone]]（Coursera: AI for Everyone，吴恩达）
