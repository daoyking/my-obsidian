---
title: Obsidian
aliases: [Obsidian.md, 黑曜石笔记]
type: entity
tags: [tool, note-taking, knowledge-base, markdown, pkm]
created: 2026-08-17
updated: 2026-08-17
sources: []
status: seed
---

# Obsidian

## 是什么

基于本地 Markdown 文件 + 双链（`[[wikilink]]`）的个人知识管理软件。文件以纯文本存储于本地文件夹（vault），不锁定格式、可被任意编辑器与脚本读写——是本知识库（`my-obsidian` vault）的运行平台。

> seed 页：仅条目化定位，待后续 Ingest 补全插件生态与工作流细节。

## 核心特性

- **本地优先**：纯 Markdown 文件，无数据库、无锁定，脚本与 Git 友好
- **双链与反向链接**：`[[页面]]` 自动建立双向关联，图谱可视化
- **YAML frontmatter**：每页可带结构化元数据（本 vault 规范见 [[CLAUDE]] §3）
- **插件生态**：Templater（模板）/ Dataview（查询聚合）/ Smart Connections（语义检索）/ Linter（格式规范）/ Excalidraw（画布）
- **多 Agent 接入**：任何能读写文件的 AI 智能体均可维护 vault，CLAUDE.md 作为接入 Schema

## 适用场景

- 个人知识库 / 第二大脑
- 与 LLM 协作的自维护 Wiki（本 vault 即此范式实例，见 [[obsidian-llm-wiki]]）

## 在我项目中的使用

- 本 vault（`my-obsidian`）即 Obsidian vault 实例，iCloud Drive 同步于 Mac/iPhone 间
- 维护引擎：[[obsidian-llm-wiki]] skill + WorkBuddy 自动化

## 相关实体

- [[obsidian-llm-wiki]] · [[WorkBuddy]]

## 来源

- 官网：<https://obsidian.md>
