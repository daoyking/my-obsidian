---
title: release_radar_agent
aliases: [Release Radar, 常驻依赖巡检 Agent, 依赖发布雷达]
type: entity
tags: [github, awesome-llm-apps, google-adk, always-on, scheduler, fastapi, dependency, github-releases]
created: 2026-09-05
updated: 2026-09-05
sources: ["https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/always_on_agents/release_radar_agent"]
status: active
repo: "https://github.com/Shubhamsaboo/awesome-llm-apps"
---

# release_radar_agent

## 是什么

Release Radar —— 基于 **Google ADK** 的「常驻依赖简报 Agent」。读取项目 `requirements.txt` 或 `package.json`，把依赖映射到 GitHub 仓库，对比最近的 GitHub Releases，只报告**需要关注的变更**：breaking change、deprecation、security fix、yanked、major 升级。可交互（ADK Web）或作为 FastAPI 调度服务；样例模式确定性、不发任何 GitHub 请求。

## 核心特性

- **清单解析**：Python requirements + npm dependencies / devDependencies
- **GitHub Release 扫描**：GitHub REST API（可选 token 提额）
- **影响排序**：对 security / breaking / yanked / major / deprecation 信号打分
- **噪声过滤**：丢弃无影响信号的例行 patch / minor 发布
- **文本 + HTML 简报**：按依赖分组，含版本差、原因、影响、release 链接
- **ADK root_agent** + **调度钩子**（HTTP / Pub/Sub）+ **opt-in 投递**（Gmail / Webhook，需显式配置）

## 架构与代码要点

- `radar.py`：`parse_manifest()` 支持 requirements.txt + package.json；`KNOWN_GITHUB_REPOS` 内置映射（anthropic / fastapi / google-adk / langchain / openai / pydantic / react / requests / urllib3 / vite / zod）；`version_delta()` 计算 major / minor / patch / same / older；`fetch_github_releases()` 用标准库 `urllib`（零额外依赖）带可选 token；`build_release_candidates()` 把依赖 join 到 releases，跳过 same / older 与 prerelease / draft
- `ranker.py`：对 release 做影响分类 + 噪声过滤（patch / minor 无信号则丢弃）
- `delivery.py`：`render_brief()` 文本 / HTML + `send_brief()` 投递
- `agent.py`：ADK `root_agent`，交互式依赖问答
- `scheduler_api.py`：FastAPI，暴露 `/release-radar/trigger`、`/dry-run`、`/pubsub`
- **安全设计**：manifest 仅从 `RELEASE_RADAR_MANIFEST` 环境变量读取，请求体不能指定任意本地文件路径；`dry_run` 默认 true，投递需双护栏（`dry_run=false` + 渠道已配）

## 调度方式

- 本地：`uvicorn scheduler_api:app`，`curl /release-radar/dry-run?top_n=5&live=false` 预览；`RELEASE_RADAR_LIVE_GITHUB=true` + `RELEASE_RADAR_MANIFEST=/abs/path` 启用真实扫描
- 云：Cloud Run + Cloud Scheduler 调 `/trigger` 或 `/pubsub`，工作日晨间 `0 9 * * 1-5`
- 测试：`pytest tests/unit`（确定性样例 + 投递安全 patch 网络）

## 适用场景

- 给个人 / 团队项目做「依赖安全与 breaking 变更」定时巡检
- 复刻范式：manifest → release diff → rank → brief，全部用标准库、可离线样例

## 在本库中的使用（关联本库 4 项自动化）

与本库已激活的 4 项定时自动化高度同构：

- **周一 Lint + GitHub digest 自动化** ↔ Release Radar 的「周期扫 GitHub → 生成 digest」：可直接借用其 `version_delta` + 影响排序逻辑，把「GitHub digest」升级为「依赖 breaking / security 变更告警」
- **每日 22:00 KB 变更日志自动化** ↔ 同属「周期扫描外部源 → 产出变更简报」
- 可借鉴其**双护栏安全设计**（dry_run 默认开 + 路径白名单）写进本库自动化，避免误投递

## 相关实体

- [[always_on_hn_briefing_agent]]（同仓的常驻 HN 简报 Agent）· [[awesome-agentic-ai-zh]] · [[Python]] · [[Vite]] · [[Node.js]]

## 来源

- 仓库：`always_on_agents/release_radar_agent`（awesome-llm-apps，2026-07-16 提交，2026-07-23 修 version 提取 bug #1020）
- README + radar.py 快照（2026-09-05 WebFetch）
