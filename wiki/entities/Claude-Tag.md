---
title: Claude Tag
aliases: [Claude-Tag, Claude Tag 公开测试版]
type: entity
tags: [ai, agent, slack, analytics, anthropic]
created: 2026-08-15
updated: 2026-08-15
sources: ["[[raw/articles/ai-hot-2026-08-14]]"]
status: seed
---

# Claude Tag

## 是什么

Anthropic 推出的 Claude Tag（公开测试版）是 Slack 中部署数据分析智能体的基础能力。让非分析师也能通过 Slack 用自然语言提问，基于受治理的语义层获得数据答案。Anthropic 数据团队已在内部用 Claude Tag 部署自助式数据分析智能体。

## 核心特性

- **Slack 原生**：在 Slack 中以 @tag 方式召唤数据分析智能体
- **受治理的语义层**：非分析师提问也走治理过的语义模型，避免直接 SQL 滥用
- **技能文件持续刷新**：把技能文件视为"持续刷新的内容"而非一次性配置
- **接入内部知识索引**：不仅连接数仓，还接入内部知识索引（文档 / 决策记录 / 业务术语）
- **五项关键设计**：技能文件持续刷新 / 分析技能（预测 / 留存 / 漏斗）/ 内部知识索引 / 权限 / 数据新鲜度 / 可观测性

## 适用场景

- 企业内部自助式数据分析（非分析师提问）
- Slack 工作流中嵌入数据查询能力
- 受治理的"自然语言→SQL"中介层

## 在我项目中的使用

> 关联到 projects/ 下的具体项目。

- 暂无直接使用；但其"技能文件持续刷新 + 内部知识索引"设计对 WorkBuddy Skill 体系演进有借鉴价值

## 相关实体

- [[Claude-Code]] · [[Claude-Cowork]]（同属 Claude 产品线，分别覆盖终端 / 浏览器 / 协作平台三场景）

## 相关概念

- [[Agent]] · [[Harness工程]] · [[上下文工程]] · [[记忆系统]] · [[Agent安全]]（权限与数据治理是核心）

## 来源

- [[raw/articles/ai-hot-2026-08-14]]（Anthropic 在 Slack 用 Claude Tag 部署自助式数据分析智能体）
