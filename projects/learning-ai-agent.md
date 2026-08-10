---
title: learning-ai-agent
type: project
tags: [ai-agent, learning, vercel-ai-sdk, mastra, rag, eval, observability]
created: 2026-08-10
updated: 2026-08-10
sources: ["[[raw/articles/github-learning-ai-agent-2026-08-10]]"]
status: active
tech_stack: [TypeScript, Vercel AI SDK, Mastra, Vite, Node.js]
repo: "https://github.com/daoyking/learning-ai-agent"
---

# learning-ai-agent

## 背景

AI Agent 开发学习路线工程集，按六周计划组织，每周一个独立工程，覆盖流式聊天 → RAG → 多步编排 → 评测可观测 → 作品集的完整 Agent 开发学习路径。与知识库中的 [[Agent开发学习计划]] 和 W2-W6 每日任务卡直接配套。

## 技术栈

- TypeScript + Vite + Node.js
- Vercel AI SDK（W2 流式聊天 + W3 RAG）
- Mastra（W4 多步编排）
- 自研零依赖可观测 Tracer（W5）
- Langfuse 条件式导出（W5）

## 工程结构

| 工程 | 主题 | 说明 |
|---|---|---|
| w2-agent-chat | 流式聊天 + 工具调用 | Vercel AI SDK 流式聊天 + 工具 |
| w3-rag-qa | 检索增强生成 | RAG 问答（纯内存向量库）|
| w4-resume-scorer | 多步编排 | Mastra Agent 版 + Workflow 版（loadData→score）|
| w5-agent-eval | 评测 + 可观测 | eval + 零依赖 Tracer + Langfuse 条件式导出 |
| w6-portfolio | 作品集 | 自包含站点 + 录屏清单 + 简历页 |

## 关键设计

- **「计划→执行卡→代码」闭环**: [[Agent开发学习计划]] → W2-W6 每日任务卡 → 对应工程，形成完整学习闭环
- **W2-W4 离线 CI 评测**: 各工程配备离线 CI 评测回归数据集，确保代码质量可验证
- **W5 零依赖可观测 Tracer**: 不依赖外部服务的自研 Tracer，Langfuse 作为条件式导出（可选）
- **W6 自包含作品集**: 作品集站点无相对资源依赖，简历 HTML 自包含，便于 GitHub Pages 部署
- **CLI 独立避免 TLA**: W5 评测管线抽离 `src/cli.ts`，`runEval` 导出 `renderEvalReport`，避免 Top-Level Await 问题

## 本周变更（2026-08-03 ~ 2026-08-10）

> 详见 `[[raw/articles/github-learning-ai-agent-2026-08-10]]`

### 初始工程集提交（89b587b9）
- 完整六周学习路线工程集首次推送到 GitHub
- W2-W5 各工程源码 + W6 作品集 + 简历文件
- W2-W4 各补离线 CI 评测回归数据集

### W5 评测管线重构（d49813ad）
- 抽离 `src/cli.ts`，`runEval` 导出 `renderEvalReport`
- tsc 干净、离线单测通过
- W6 新增「护栏证据」节：eval-report 离线示例 + 真实 trace 时间线 waterfall
- 作品卡/页脚相对链接改为 GitHub 绝对 URL

### 简历页 + 页脚修复（12b6a352）
- 复制简历 HTML 为 `w6-portfolio/resume.html`（自包含）
- 页脚「简历」链接改为 GitHub Pages 绝对 URL

## 踩坑记录

- **TLA（Top-Level Await）问题**: W5 评测管线最初在模块顶层使用 await 导致 tsc 报错，解决方案是抽离 CLI 入口、导出纯函数
- **GitHub Pages 相对路径**: 作品集部署到 GitHub Pages 后，相对链接可能失效，需改为绝对 URL

## 复盘结论

- Agent 学习路线应按「能力递进」组织：交互→检索→编排→评测→展示
- 评测和可观测不是可选项，是 Agent 工程的「护栏」——W5 的 Tracer + eval 是整个路线的关键差异化
- 自包含部署（无相对依赖）是作品集的最佳实践，降低部署摩擦

## 相关概念

- [[函数调用]] · [[RAG]] · [[ReAct]] · [[Agent评估]] · [[记忆系统]]

## 相关实体

- [[Vercel-AI-SDK]] · [[Mastra]] · [[Agent]]

## 来源

- `[[raw/articles/github-learning-ai-agent-2026-08-10]]`
