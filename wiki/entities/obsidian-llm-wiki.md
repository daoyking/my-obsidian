---
title: obsidian-llm-wiki
aliases: [LLM Wiki Skill, 卡帕西 LLM Wiki 方法 skill, Obsidian 自维护知识库 skill]
type: entity
tags: [skill, obsidian, knowledge-base, llm-wiki, automation, workbuddy]
created: 2026-08-17
updated: 2026-08-17
sources: ["~/.workbuddy/skills/obsidian-llm-wiki/"]
status: seed
---

# obsidian-llm-wiki

## 是什么

WorkBuddy Skill，基于 Andrej Karpathy 提出的「LLM Wiki」方法实现的 Obsidian 知识库自维护引擎。本 vault 即由该 skill 驱动持续「编译」生长——人类负责策展与判断，AI 负责簿记（交叉引用、一致性维护、孤立节点清理、frontmatter 补全）。是「经验→知识」自动化落地的具体载体。

> seed 页：仅条目化定位与在本 vault 中的角色，待后续补充 skill 版本演进与操作细节。

## 核心特性

- **四大核心操作**：Ingest（导入）/ Query（查询）/ File Back（回填）/ Lint（自检），定义见本 vault `[[CLAUDE]]` Schema §4
- **三层架构**：raw/（不可变原始层）+ wiki/（AI 编译本体）+ CLAUDE.md（Schema 层）
- **健康检查脚本**：`scripts/lint_wiki.sh` 报告悬空链接 / 孤立页 / frontmatter 缺失
- **自动化编排**：配合 WorkBuddy automation 调度每日 Ingest / 每周 Lint / 每周 GitHub 动态 / 每日变更日记

## 适用场景

- 个人知识库的自生长维护（替代 RAG 临时整理）
- 把聊天/剪藏/代码库等异构素材持续编译成结构化 Wiki
- 多 Agent 接入同一 vault 时的 Schema 对齐（CLAUDE.md 作为接入协议）

## 在我项目中的使用

- 本 vault（`my-obsidian`）即该 skill 的运行实例：[[CLAUDE]] 是 Schema、`wiki/LOG.md` 是操作日志、`scripts/lint_wiki.sh` 每周一定时体检
- 在 [[Agent持续进化]] 中作为「技能文件 = 可执行程序记忆」的实例被引用

## 相关实体

- [[Obsidian]] · [[WorkBuddy]] · [[Agent持续进化]]

## 相关概念

- [[记忆系统]] · [[持续学习]]

## 来源

- Skill 本体：`~/.workbuddy/skills/obsidian-llm-wiki/`（含 `SKILL.md`、`scripts/lint_wiki.sh`、`references/operations.md`）
- 方法论：Andrej Karpathy「LLM Wiki」方法（raw → wiki → CLAUDE.md 三层编译）
