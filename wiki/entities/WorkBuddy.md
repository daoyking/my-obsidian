---
title: WorkBuddy
aliases: [工作伙伴, WorkBuddy AI]
type: entity
tags: [tool, ai-assistant, automation, agent-platform]
created: 2026-08-17
updated: 2026-08-17
sources: []
status: seed
---

# WorkBuddy

## 是什么

AI 助手平台，提供 Agent 运行时、Skill 系统、Connector（连接器）生态与定时自动化（Automation）调度。本 vault 的「自维护」机制即由 WorkBuddy 的自动化任务驱动——存 `~/.workbuddy/` 下，独立于 vault 本体。

> seed 页：仅条目化定位，待后续补充平台能力清单与版本细节。

## 核心特性

- **Skill 系统**：可复用工作流封装（如 [[obsidian-llm-wiki]] 即一个 skill）
- **Connector 生态**：连接飞书 / GitHub / 百度网盘 / 邮箱等外部服务
- **Automation 调度**：cron 式定时任务，支持一次性与循环（RFC 5545 RRULE）
- **记忆与身份**：`SOUL.md` / `IDENTITY.md` / `USER.md` 跨会话持续身份与偏好

## 适用场景

- 个人 AI 助手与自动化编排
- 知识库自维护（本 vault 的每日 Ingest / 每周 Lint / 每日日记均由 WorkBuddy automation 驱动）
- 多 Connector 协同的端到端工程闭环

## 在我项目中的使用

- 作为主力 Agent 工具维护本 vault、推进 hmnmt.com 复刻与求职 portfolio
- 自动化任务清单见 [[CLAUDE]] §10

## 相关实体

- [[obsidian-llm-wiki]] · [[Obsidian]] · [[Agent持续进化]]

## 来源

- 工具本体：WorkBuddy 桌面端
