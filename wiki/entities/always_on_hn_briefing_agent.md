---
title: always_on_hn_briefing_agent
aliases: [AgentScout, HN Briefing Agent, 常驻 Hacker News 简报 Agent]
type: entity
tags: [github, awesome-llm-apps, google-adk, always-on, scheduler, fastapi, hacker-news]
created: 2026-09-05
updated: 2026-09-05
sources: ["https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/always_on_agents/always_on_hn_briefing_agent"]
status: active
repo: "https://github.com/Shubhamsaboo/awesome-llm-apps"
---

# always_on_hn_briefing_agent

## 是什么

AgentScout —— 基于 **Google ADK** 的「常驻（always-on）Hacker News 简报 Agent」。扫描 HN 上关于 AI agents / MCP / coding agents / workflow automation / LLM apps 的高信号帖子，按相关度、点赞、评论、首页位置打分排序，生成纯文本 + HTML 简报（含摘要、链接、下一步动作）。可作为 ADK Web 交互式 Agent，也可作为 FastAPI 调度后端由 Cloud Scheduler 定时触发，并通过 Gmail / Slack / Linear / Jira / Webhook 投递。

## 核心特性

- **HN 监控**：从确定性样例数据或 HN 真实首页抓取 AI agent / LLM app 故事
- **信号排序**：按相关度、points、comments、首页位置打分
- **简报生成**：文本 + HTML，含摘要 / 链接 / next_actions
- **ADK root_agent**：暴露 `root_agent` 供 ADK Web 交互问答
- **调度后端**：FastAPI 暴露 HTTP + Pub/Sub 端点，可挂 Cloud Run + Cloud Scheduler
- **安全投递**：默认 dry-run，除非显式配置凭证且 `dry_run=false` 才真正投递

## 架构与代码要点

- `scheduler_api.py`：`uvicorn scheduler_api:app`，核心函数 `run_scheduled_scout(payload)`，路由：
  - `GET /health`
  - `GET /agent-scout/dry-run?top_n=3&live=false`（预览，不投递）
  - `POST /agent-scout/trigger`（Cloud Scheduler 直接 HTTP 触发）
  - `POST /agent-scout/pubsub`（Cloud Scheduler → Pub/Sub push，base64 JSON）
  - payload：`dry_run`（默认 true）、`live`（覆盖实时 HN）、`top_n`（夹紧 1-10）
- `scout.py`：`run_ambient_scout(live, top_n)` 执行抓取 → 过滤 → 排序 → 渲染
- `delivery.py`：`send_brief(brief)` 走 Gmail API 或 `AGENTSCOUT_WEBHOOK_URL`
- **dry-run 安全护栏**：`dry_run=false` 且至少一个投递渠道（Gmail/Webhook）已配置才发；否则返回 skipped

## 调度方式

- 本地：`uvicorn scheduler_api:app --port 8000`，curl 触发（可 dry_run 预览）
- 云：`Cloud Run` 部署 + `Cloud Scheduler` 调 `/trigger` 或 `/pubsub`
- 推荐工作日晨间 cron：`0 9 * * 1-5`

## 适用场景

- 想低成本复刻「定时抓取 → LLM 摘要 → 多渠道投递」的常驻资讯 Agent
- 与 [[Coding-Agent]] / [[awesome-agentic-ai-zh]] 同属 awesome-llm-apps 的 agent 范式

## 在本库中的使用（关联本库 4 项自动化）

本库已激活的 4 项定时自动化与该 Agent 是**同一范式**——只是底座不同：

- **每日 08:00 双源 AI 资讯自动化** ↔ AgentScout 的「定时扫 HN → LLM 摘要 → 投递」：可直接借鉴其 `dry_run` 安全护栏与 `next_actions` 结构，给资讯简报加「下一步动作」字段
- **每日 08:00 Mac/iPhone 应用推荐自动化** ↔ 同属「定时抓取外部源 → 生成推荐简报」
- 差异：本库用 **WorkBuddy 自动化**（cron 内置、本地优先）而非 Google ADK + Cloud Run；若未来要把简报做成可对话的 `root_agent` 式交互，可参考其 ADK Web 形态

## 相关实体

- [[release_radar_agent]]（同仓的常驻依赖巡检 Agent）· [[awesome-agentic-ai-zh]] · [[Coding-Agent]] · [[Qwen-UI-Agent]]

## 来源

- 仓库：`always_on_agents/always_on_hn_briefing_agent`（awesome-llm-apps，2026-06-15 提交）
- README + scheduler_api.py 快照（2026-09-05 WebFetch）
