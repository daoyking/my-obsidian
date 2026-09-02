---
title: Ollama
aliases: [Ollama 本地推理]
type: entity
tags: [local-llm, inference, runtime, local-first, embedding]
created: 2026-09-02
updated: 2026-09-02
sources: ["[[raw/articles/awesome-llm-apps-rag-tutorials]]"]
status: active
---

# Ollama

## 是什么

本地大模型运行时。一条命令拉模型、起服务，暴露 OpenAI 兼容的 HTTP API（`http://localhost:11434`）。把「跑一个本地模型」的门槛压到接近零，是**本地优先**策略的基础设施。

## 我的本地部署

- 服务地址：`http://localhost:11434`
- 已装模型：`qwen3:8b` · `qwen3.5:9b` · `qwen2.5:14b` · `deepseek-r1:7b` · `qwen3:14b-unlimited` · `gemma4:12b-mlx-unlimited` · `qwen2.5-coder:14b-unlimited`
- 嵌入模型：`nomic-embed-text`（[[RAG]] 管线默认嵌入）
- 调用方式：`curl http://localhost:11434/api/generate`

## 在 RAG 管线里的角色

[[RAG实验路线]] 里所有本地阶段都跑在它上面：

| 环节 | 用哪个模型 | 备注 |
|---|---|---|
| 生成 | `qwen3:8b`（默认）/ `qwen2.5:14b`（质量优先） | 8b 延迟低，14b 答案质量明显更好 |
| 嵌入 | `nomic-embed-text` | 中文表现一般，需与 `bge-m3` 对比（见路线 Stage 1） |
| 重排序 | 暂无合适本地模型 | CPU 上延迟过高，见 [[重排序]] 的取舍 |
| 图谱抽取 | `qwen3:8b` | 质量待验证，是路线 Stage 4 的待研究问题 |

## 工程要点

- **模型名带 suffix 的是变体**：`xxx-unlimited` 通常指解除上下文/输出长度限制的自制变体，不是官方模型
- **并发能力弱**：单卡串行推理，多个请求会排队。做评测跑批时要串行，别指望并发加速
- **内存驻留**：默认模型卸载超时 5 分钟，频繁切换模型会反复加载，评测脚本里要固定模型
- **与云端的分工**：本地跑批评测（慢但免费），线上交互走云端（本地自托管 OmniRoute `localhost:20128`）

## 我的观点

Ollama 最大的价值不是省钱，是**让「断网也能演示」成为默认状态**。做 portfolio 演示时，能离线跑通这件事本身就是说服力。

它的局限也很明确：**只解决了「能不能跑」，没解决「跑得好不好」**。小模型（8b 级）做复杂推理、结构化输出、实体关系抽取时质量下降明显，别指望用一个本地模型覆盖全部环节——混合调度（本地跑批 + 云端精调）才是现实解。

## 相关概念

- [[RAG]] · [[重排序]] · [[嵌入]] · [[向量数据库]] · [[量化]] · [[Agent评估]]

## 相关实体

- [[Qdrant]] · [[Mastra]] · [[Vercel-AI-SDK]] · [[awesome-llm-apps]]

## 相关主题

- [[RAG实验路线]] · [[Agent开发学习计划-Python路线]]

## 来源

- [[raw/articles/awesome-llm-apps-rag-tutorials]]（24 个 RAG 样例中 6 个基于 Ollama）
