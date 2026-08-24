---
title: 多文档 RAG
aliases: [多文档检索增强, Multi-Document RAG, MultiVector RAG]
type: concept
tags: [ai, rag, retrieval, multimodal, colbert]
created: 2026-08-24
updated: 2026-08-24
sources: ["[[raw/articles/ai-hot-2026-08-19]]"]
status: seed
---

# 多文档 RAG

## 定义

利用多向量检索（MultiVector Retrieval）增强的 RAG 架构，典型实现为 ColBERT 风格的晚期交互检索（Late Interaction Retrieval）。与单一向量 embedding 相比，多向量方法对每个文档片段保留更细粒度的 token 级表示，在检索精度上有显著优势。

## 核心方法

- **Sentence Transformers v6.0 MultiVectorEncoder**：支持加载 PyLate、Stanford-NLP ColBERT 及 colpali-engine 检查点，实现 ColBERT 式晚期交互检索
- **多向量编码**：文档和查询均被编码为 token-level 向量集合，通过 MaxSim 等操作计算相关性
- **检索精度优势**：相比单一向量 embedding，在复杂查询场景下检索精度显著提升

## 与标准 RAG 的关系

- 标准 RAG 使用单一向量 embedding，检索速度快但粒度较粗
- 多文档 RAG 保留 token 级信息，牺牲部分效率换取更高精度
- 适合对检索精度要求高的场景（如法律、医疗、技术文档）

## 相关概念

- [[检索增强]] · [[向量数据库]] · [[嵌入]] · [[句子变换器-v6.0]]

## 来源

- [[raw/articles/ai-hot-2026-08-19]]（Sentence Transformers v6.0 新增 MultiVectorEncoder）
