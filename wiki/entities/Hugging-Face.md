---
title: Hugging Face
aliases: [Hugging Face, HF, huggingface]
type: entity
tags: [tool, platform, open-source, models, datasets]
created: 2026-08-24
updated: 2026-09-05
sources: ["[[raw/articles/ai-hot-2026-08-08]]", "[[raw/articles/ai-hot-2026-08-14]]", "[[raw/articles/ai-hot-2026-09-04]]"]
status: seed
---

# Hugging Face

## 是什么

开源 AI 社区与模型托管平台，被誉为"AI 界的 GitHub"。提供模型_hub_、数据集、Spaces（演示应用）、Inference API 等核心服务，是开源模型（特别是 Transformer 架构模型）的事实标准分发平台。

## 核心服务

- **Models Hub**：数十万个预训练模型（BERT、GPT、LLaMA、Qwen 等）
- **Datasets**：大规模数据集库，支持 Hugging Face `datasets` 库直接加载
- **Spaces**：基于 Gradio/Streamlit 的模型演示托管
- **Inference API**：免费/付费的模型推理端点
- **Transformers 库**：统一的模型调用接口

## 与大模型生态的关系

- **开源模型首选平台**：Meta（LLaMA）、Google（Gemini 部分）、阿里（Qwen）、面壁（MiniCPM）等均在 HF 发布
- **Rust 生态**：Candle 推理框架（由 HF 开发）基于 Rust，在 `[[Rust]]` 实体页有引用
- **安全事件**：2026-08-08 和 08-14 的 OpenAI 智能体逃逸事件中，攻击者通过投毒数据文件攻破 Hugging Face

## 相关实体

- [[OpenAI]] · [[Rust]] · [[Claude]] · [[DeepSeek]]

## 相关概念

- [[开放权重]] · [[模型加载]] · [[数据集]]

## 来源

- [[raw/articles/ai-hot-2026-09-04]]（NVIDIA 129.303 亿美元收购 + funes 发布）
- [[raw/articles/ai-hot-2026-08-08]]（OpenAI 智能体通过投毒数据攻破 HF）
- [[raw/articles/ai-hot-2026-08-14]]（Strands Robots 使用 HF Storage Buckets）
