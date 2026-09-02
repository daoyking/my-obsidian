---
title: Qdrant
aliases: [Qdrant 向量数据库]
type: entity
tags: [vector-db, retrieval, rust, rag, filtering]
created: 2026-09-02
updated: 2026-09-02
sources: ["[[raw/articles/awesome-llm-apps-rag-tutorials]]"]
status: active
---

# Qdrant

## 是什么

用 Rust 写的开源向量数据库。主打**带过滤的向量检索**——在相似度搜索的同时支持结构化条件过滤（payload filter），这是它相对纯向量库的核心差异点。

## 在 awesome-llm-apps 里的地位

[[raw/articles/awesome-llm-apps-rag-tutorials]] 的 24 个 RAG 样例中，**Qdrant 出现 8 次**，是使用频次最高的向量库（LanceDB 2 次、PgVector 1 次）。涵盖本地 RAG、Agentic RAG、CRAG 纠错、图谱引用等多种范式——说明它在这个生态里是**事实默认选项**。

## 为什么是它，而非其他

| 维度 | Qdrant | LanceDB | PgVector | ChromaDB |
|---|---|---|---|---|
| 部署形态 | 服务 / 本地文件 | 嵌入式文件 | Postgres 扩展 | 服务 / 嵌入式 |
| 过滤能力 | 强（payload index） | 中 | 强（SQL 生态） | 中 |
| 运维成本 | 中（需起服务） | 极低 | 依赖 PG | 低 |
| 适合场景 | 生产、需要复杂过滤 | 本地实验、零运维 | 已有 PG 的团队 | 快速原型 |

## 与我的栈的关系

- [[RAG实验路线]] Stage 0 选 **LanceDB**（零运维，本地文件即可），Stage 3 之后如果需要 payload 过滤做多源路由，再迁 [[Qdrant]]
- 已在跑的其他向量设施：AnythingLLM 用 ChromaDB（Odysseus 的 8100 端口）承载 7315 份文档
- **选择原则**：实验阶段优先零运维，上生产再考虑过滤能力。不要一开始就上重组件

## 工程要点

- payload filter 必须建索引，否则过滤会退化成全表扫描
- 支持量化（scalar / binary），大库场景下内存占用可降数倍，代价是精度
- 本地模式（`:memory:` 或本地路径）适合评测跑批，避免起服务

## 我的观点

选型上我倾向**「先 LanceDB 后 Qdrant」**：RAG 的前 80% 收益来自分块、嵌入、重排序，而不是向量库本身的差异。等到真正需要「按元数据分库路由」（见 [[RAG实验路线]] Stage 3）时，Qdrant 的过滤能力才成为硬需求——那时候再迁，迁移成本也可控。

## 相关概念

- [[向量数据库]] · [[RAG]] · [[嵌入]] · [[语义搜索]] · [[重排序]] · [[量化]]

## 相关实体

- [[Ollama]] · [[Mastra]] · [[awesome-llm-apps]] · [[LangGraph]]

## 相关主题

- [[RAG实验路线]]

## 来源

- [[raw/articles/awesome-llm-apps-rag-tutorials]]（24 个样例的向量库使用统计）
