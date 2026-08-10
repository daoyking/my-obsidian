---
type: source
ingested: 2026-08-10
source_repo: "https://github.com/daoyking/learning-ai-agent"
source_type: github-weekly
period: "2026-08-03 ~ 2026-08-10"
---

# GitHub 周动态：daoyking/learning-ai-agent（2026-08-10）

> 本周（2026-08-03 ~ 2026-08-10）learning-ai-agent 仓库重要变更快照。

## 仓库概要

AI Agent 开发学习路线工程集，按六周计划组织，每周一个独立工程，覆盖流式聊天 → RAG → 多步编排 → 评测可观测 → 作品集的完整 Agent 开发学习路径。

## 工程结构

```
learning-ai-agent/
├── w2-agent-chat/       # Vercel AI SDK 流式聊天 + 工具调用
├── w3-rag-qa/           # 检索增强生成问答（纯内存向量库）
├── w4-resume-scorer/    # Mastra 多步编排 Agent（Agent 版 + Workflow 版）
├── w5-agent-eval/       # 评测(eval) + 零依赖可观测 Tracer + Langfuse 条件式导出
├── w6-portfolio/        # 自包含作品集站点 + 录屏清单
├── agent-starter/       # 脚手架
├── resume-sources/      # 简历源文件
└── 金道洋-前端开发工程师-简历.html/pdf
```

## 本周重要变更（3 commits）

### 1. AI Agent 学习路线工程集初始提交（89b587b9）

**这是本周最重要的变更**——完整的学习路线工程集首次推送到 GitHub。

- **w2-agent-chat**: Vercel AI SDK 流式聊天 + 工具调用
- **w3-rag-qa**: 检索增强生成问答
- **w4-resume-scorer**: Mastra 多步编排 Agent（Agent 版 + Workflow 版，loadData→score）
- **w5-agent-eval**: 评测(eval) + 零依赖可观测 Tracer + Langfuse 条件式导出
- **w6-portfolio**: 自包含作品集站点 + 录屏清单
- W2-W4 各补离线 CI 评测回归数据集

### 2. W5 评测管线重构 + W6 作品集证据补充（d49813ad）

- **W5**: 抽离 `src/cli.ts`，`runEval` 导出 `renderEvalReport`，tsc 干净、离线单测通过
  - 关键决策：CLI 独立避免 TLA（Top-Level Await）问题
- **W6**: 新增「护栏证据」节
  - eval-report 离线示例
  - 真实 trace 时间线 waterfall
- **W6**: 作品卡/页脚相对链接改为 GitHub 绝对 URL，便于部署后跳转
- 提交 learning-AI 全量源码到 GitHub

### 3. 简历页加入作品集 + 页脚链接修复（12b6a352）

- 复制简历 HTML 为 `w6-portfolio/resume.html`（自包含，无相对资源依赖）
- 页脚「简历」链接改为 `https://daoyking.github.io/learning-ai-agent/resume.html`

## 无新 Release

本周无新 release 发布。

## 与知识库的关联

本仓库的工程与知识库中以下页面直接配套：
- [[Agent开发学习计划]] — 六周路线图
- [[W2-每日任务卡]] / [[W3-每日任务卡]] / [[W4-每日任务卡]] — 每周执行卡
- [[Vercel-AI-SDK]] / [[Mastra]] / [[函数调用]] / [[RAG]] — 关联概念与实体
