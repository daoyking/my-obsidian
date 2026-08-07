---
title: 知识库总索引
type: topic
tags: [index, moc]
created: 2026-08-07
updated: 2026-08-07
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

- （待补充）

## 维护说明

- 本索引由 AI 维护，人类一般不手动编辑。
- 新增页面后 AI 自动出现在上方 Dataview 查询中。
- 详细规则见 [[CLAUDE]]。
