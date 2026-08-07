---
title: RAG
aliases: [检索增强生成, Retrieval-Augmented Generation]
type: concept
tags: [ai, llm, rag, retrieval]
created: 2026-08-07
updated: 2026-08-07
sources: ["[[raw/papers/ai-agents-in-depth]]"]
status: seed
---

# RAG（检索增强生成）

## 定义

在生成回答前，先从外部知识库检索相关片段，拼入上下文，让模型基于检索内容作答。解决模型知识过时、领域不全、幻觉的问题。

## 与 LLM Wiki 的对比

- RAG：**查询时**临时检索+拼凑，无积累，每次从零
- 卡帕西 LLM Wiki：**导入时**预先编译成结构化 wiki，持续积累
- 本知识库选择 LLM Wiki 而非纯 RAG（见 [[CLAUDE]]）

## 核心管道（《AI Agents in Depth》第 3 章）

来自 [[raw/papers/ai-agents-in-depth]]：
1. **文档分块（Chunking）**
2. **稠密嵌入**：语义检索
3. **稀疏嵌入**：精确关键词匹配
4. **混合检索**：两者结合
5. **多模态信息提取**
6. 进阶：结构化索引、文件系统范式、**智能体化 RAG**（把检索工具化，Agent 按需调用而非一次性拼入）

## 演进

- 扁平文本 RAG → 结构化知识组织
- 一次性检索 → Agent 主动检索（工具化）
- 静态库 → 带治理的时效知识库

## 相关概念

- [[记忆系统]] · [[上下文工程]] · [[知识编辑]] · [[Agent]]

## 相关主题

- [[AI-Agents-in-Depth]] · [[AI]]

## 来源

- [[raw/papers/ai-agents-in-depth]]（第 3 章 3.2-3.3）
