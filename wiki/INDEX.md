---
title: 知识库总索引
type: topic
tags: [index, moc]
created: 2026-08-07
updated: 2026-09-01
sources: []
status: active
---

# 🗂️ my-obsidian 总索引

> 本文件是整个知识库的导航目录，由 AI 在每次 Ingest / Lint 时维护。从这里出发可以到达任何页面。

## 入口

- 🖥 **[[工作台]]** — 科技风 HUD 状态面板（实时统计/最近更新/缺口/快速入口）
- 📥 **导入新资料** → 放入 `raw/`，参考 [[CLAUDE]] 的 Ingest 流程
- ❓ **提问查询** → AI 读本索引定位页面后综合回答，参考 Query 流程
- 🔧 **健康检查** → 执行 Lint，结果见 [[LOG]]

## 知识地图

### 概念 Concepts
```dataview
TABLE tags, updated, status
FROM "wiki/concepts"
SORT updated DESC
```

### 实体 Entities
```dataview
TABLE tags, updated, status
FROM "wiki/entities"
SORT updated DESC
```

### 主题 Topics
```dataview
TABLE tags, updated, status
FROM "wiki/topics"
SORT updated DESC
```

### 问答回填 QA
```dataview
TABLE updated
FROM "wiki/qa"
SORT updated DESC
```

- [[前端转AI全栈学习计划]] — 180天19阶段学习路线（Python/FastAPI/MySQL/Vue3/Agent/RAG/Agent/运维/企业级）

### 项目 Projects
```dataview
TABLE tags, updated
FROM "projects"
SORT updated DESC
```

### 每日笔记 Daily
```dataview
LIST
FROM "daily"
SORT file.name DESC
LIMIT 10
```

## 待研究问题

> 由 AI 在 Lint 与 Query 中累积，主人择优深入。

- [[生成式UI]] 走的是 MCP Apps 还是 AG-UI？在 Vue 3 里如何实现 schema→组件渲染层？
- ~~[[awesome-llm-apps]] 里 `trust_gated_agent_team` 的哈希链审计日志怎么实现？~~ → 已展开为 [[哈希链审计]]（2026-09-02）。遗留子问题：外部锚定的最轻实现？信任评分怎么来？
- Agent Skills 的「安全 + eval CI 门禁」具体检查什么？能否套用在我自己的 `~/.workbuddy/skills/` 上？
- [[常驻Agent]] 的「值不值得打扰」判断如何量化？成本控制与幂等策略？
- 上下文优化工具（TOON / Headroom）声称降本 30–90%，缺少第三方基准验证，需实测（见 [[上下文工程]]）
- 「RAG vs 预编译 LLM Wiki」在同一语料（本 vault）上的量化对比——[[RAG实验路线]] Stage 1 完成后即可做
- 中文语料下 BM25 与稠密检索的最优融合比例是否与英文不同？（见 [[RAG实验路线]]）
- 哈希链审计的外部锚定最轻实现是什么？推到公开 git 仓库够不够？（见 [[哈希链审计]]）
- Agent 行为日志的规范化规则有无事实标准？（类比 SBOM / SLSA provenance）

## 维护说明

- 本索引由 AI 维护，人类一般不手动编辑。
- 新增页面后 AI 自动出现在上方 Dataview 查询中。
- 详细规则见 [[CLAUDE]]。
