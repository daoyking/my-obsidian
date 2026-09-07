---
title: 常驻Agent
aliases: [Always-on Agent, 后台智能体, 常驻智能体, 主动式Agent]
type: concept
tags: [ai, llm, agent, automation, scheduling]
created: 2026-09-01
updated: 2026-09-06
sources: ["[[raw/articles/awesome-llm-apps]]", "https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/always_on_agents"]
status: active
---

# 常驻 Agent（Always-on Agent）

## 定义

在后台按**计划（定时）或事件**持续运行的 Agent：监控变化中的上下文，自主判断什么值得注意，并**主动**推送更新、产物或动作——而不是等人来问一句才答一句。

> 来自 [[raw/articles/awesome-llm-apps]] 的定义：「Background agents that run on schedules or events, monitor changing context, decide what needs attention, and proactively deliver updates, artifacts, or actions.」

## 为什么重要

- 交互范式从**拉取（pull）**转向**推送（push）**：Agent 的价值不再只在「你问它才答」，而在「你睡觉时它已经把活干完了」。
- 这是 Agent 从「玩具/工具」走向「同事」的关键一步——具备主动性与持续在场。
- 在 [[awesome-llm-apps]] 中已独立成类（`always_on_agents`），说明它是稳定的应用形态而非概念炒作。

## 核心机制

1. **触发器**：定时（cron / RRULE）或事件（webhook、新邮件、依赖发布、价格变动）
2. **监控与差异检测**：拉取目标源 → 与上次状态对比 → 判断「是否值得打扰人」
3. **判断阈值**：这是最难的部分——不设阈值会变成噪音轰炸，设太严会漏掉重要变化
4. **产物交付**：简报 / 报告 / 卡片 / 直接动作（发 Slack、发邮件、提 PR）
5. **状态持久化**：跨运行记忆「上次处理到哪」，依赖 [[记忆系统]]

## 示例（来自 [[raw/articles/awesome-llm-apps]]）

- **Always-on Hacker News Briefing Agent**：定时侦察 → 排序好的每日简报 → 推送 Slack 或邮件
- **Release Radar Agent**：盯依赖发布 → 简报 breaking / deprecated / security / 大版本变更

## 实现解剖（awesome-llm-apps 两套样例，源码级）

把 `always_on_hn_briefing_agent` 与 `release_radar_agent` 的源码抽象成**可复用的 6 层模板**——两者同构，仅 Scout/Rank 不同：

1. **采集 Scout**：标准库 `urllib` 直连，零重依赖。`hn_briefing/scout.py` 抓 `news.ycombinator.com/news` 并用 `HNFrontPageParser(HTMLParser)` 解析标题/分数/评论；`release_radar/radar.py` 调 GitHub REST Releases（`ThreadPoolExecutor` 并发，可选 Bearer token 提额度）。二者都支持 **sample 确定性模式**（不联网也能跑测试）。
2. **排序 Rank**：`hn_briefing` 加权 = 关键词命中×16 + min(评论,150)/3 + min(分数,500)/10 + max(0,35−rank)；`release_radar/ranker.py` 用信号词典打分——安全修复 100 / 破坏性 90 / 撤回 85 / 大版本 70 / 废弃 60，并**丢弃纯 patch 噪声**（classify 无信号即丢弃）。
3. **LLM 层**：Google ADK `LlmAgent`（`gemini-3-flash-preview`）暴露 `root_agent`，工具函数（`preview_agent_builder_brief` / `preview_dependency_brief`）包成「对话可调用 + 调度可调用」统一入口。
4. **渲染**：同时产 text + HTML brief（条目/理由/信号/链接/next_actions）。
5. **调度 Scheduler API**：FastAPI 暴露 `/health`、`/dry-run`(GET)、`/trigger`(POST)、`/pubsub`(POST)；Cloud Scheduler cron `0 9 * * 1-5` 或本地 `cron-job.org` 触发。
6. **投递 Delivery**：Gmail（OAuth refresh token，multipart text+html）或通用 webhook（路由 Slack/Linear/Jira/内部）。**双闸门**：`dry_run=false` 且至少一个 provider 配齐才真正发送。

**安全纪律**：`dry_run` 默认 true、投递默认关；先渲染后投递，渲染成功才允许发送。这是生产级常驻 Agent 的底线，本库 4 项自动化应原样搬入。

## 与本知识库的映射（已在跑的实例）

本库的自动化体系就是一个生产级常驻 Agent 集群（见 [[CLAUDE]] 第 10 节）：

| 任务 | 频率 | 触发器 | 产物 |
|---|---|---|---|
| 每日 AI 资讯 Ingest | 08:00 | 定时 | `raw/articles/ai-hot-*.md` + wiki 页面 + commit |
| 每周 Lint 体检 | 周一 09:00 | 定时 | 悬空/孤立/frontmatter 报告 + 修复 + commit |
| 每周 GitHub 动态 | 周一 10:00 | 定时 | 仓库变更 Ingest 进 `projects/` |
| 每日变更日记 | 22:00 | 定时 | `daily/YYYY-MM-DD.md` |

**差异点**：本库的自动化是「固定 prompt + 固定 schedule」，而真正的常驻 Agent 应具备第 3 步——**自主判断值与不值**。目前是「每次都跑，无变化也记一条」，还没做到「无变化就不打扰」。

## 我的观点

- 常驻 Agent 的工程难点不在模型，在**噪音控制与幂等**（重复运行不能产生重复产物）。本库的 daily 日记用「无变更也记一条」保持连续性，这是有意的取舍——宁可冗余也不漏。
- 把「Agent 主动推送」和「human-in-the-loop 确认」结合好，是这类系统能不能真被日常使用的分水岭。
- 对求职作品的启发：一个「每天自动生成并推送的简报 Agent」比一个「聊天机器人」更能体现 Agent 工程能力——它有调度、有状态、有产物。

## 待研究问题

- [ ] 「值不值得打扰」的判断如何量化？能否用轻量打分模型做阈值？
- [ ] 常驻 Agent 的成本控制（每天跑 = 每天烧 token），什么情况下该降级为规则触发？
- [ ] 失败重试与幂等：定时任务失败后的补跑策略？

## 相关概念

- [[Agent]] · [[记忆系统]] · [[Agent评估]] · [[可观测性]] · [[上下文工程]] · [[Harness工程]]

## 相关实体

- [[awesome-llm-apps]] · [[WorkBuddy]] · [[Mastra]] · [[Python]]

## 来源

- [[raw/articles/awesome-llm-apps]]（Always-on Agents 分类，2 个项目）
- 本库实践：[[CLAUDE]] 第 10 节（自动维护机制）
