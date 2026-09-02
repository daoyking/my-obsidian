---
title: RAG
aliases: [检索增强生成, Retrieval-Augmented Generation]
type: concept
tags: [ai, llm, rag, retrieval]
created: 2026-08-07
updated: 2026-09-01
sources: ["[[raw/papers/ai-agents-in-depth]]", "[[raw/articles/ai-hot-2026-08-27]]", "[[raw/articles/awesome-llm-apps]]"]
status: active
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

## 进阶路线：21 个可运行样例构成的 RAG 阶梯（2026-09-01）

来自 [[raw/articles/awesome-llm-apps]] 的 `rag_tutorials`（21 个端到端可跑的项目）。这是目前见过最完整的 RAG 实践阶梯——每一级都对应上面「核心管道」里某个环节的升级：

| 阶梯 | 项目 | 解决什么问题 |
|---|---|---|
| ① 最小流水线 | Basic RAG Chain | 分块 → 嵌入 → 检索 → 生成，跑通即懂 |
| ② 检索质量 | Hybrid Search RAG / Local Hybrid Search RAG | 稠密+稀疏混合，纯向量检索召回不全 |
| ③ 自我纠错 | Corrective RAG（CRAG） | 检索结果打分，不合格就改写查询重试 |
| ④ 工具化（Agentic） | Agentic RAG with Reasoning / Agentic RAG with Embedding Gemma（全本地） | 检索变成 Agent 可按需调用的工具，而非一次性拼上下文 |
| ⑤ 结构化与拒答 | Typed Agentic RAG with Pydantic AI | 输出带精确引用的结构化答案，证据不足时**拒答** |
| ⑥ 多模态 | Multimodal Agentic RAG / Vision RAG | 文本+PDF+图像+音频+视频统一检索 |
| ⑦ 路由与多源 | RAG with Database Routing / Autonomous RAG | 按问题路由到正确数据源，本地无果回退网页 |
| ⑧ 图谱与多跳 | Knowledge Graph RAG with Citations | 多跳推理 + 可验证来源归属 |
| ⑨ 工程化 | RAG-as-a-Service（50 行生产级） / Contextual AI RAG Agent（托管式） | 从 demo 到服务 |
| ⑩ 可诊断 | RAG Failure Diagnostics Clinic | 系统性定位管线错在哪 |

**关键范式跃迁**：④（检索工具化）是分水岭——这正对应上面「智能体化 RAG」一节。而 ⑤ 的「证据不足时拒答」是被严重低估的工程实践：RAG 系统最贵的失败不是答错，是**自信地答错**。

## 相关概念

- [[记忆系统]] · [[上下文工程]] · [[知识编辑]] · [[Agent]] · [[语义搜索]] · [[向量数据库]] · [[嵌入]]

## 相关实体

- [[awesome-llm-apps]] · [[Python]]

## 相关主题

- [[AI-Agents-in-Depth]] · [[AI]]

## 来源

- [[raw/papers/ai-agents-in-depth]]（第 3 章 3.2-3.3）
- [[raw/articles/awesome-llm-apps]]（RAG 分类，21 个教程）
- [[raw/articles/ai-hot-2026-08-27]]
