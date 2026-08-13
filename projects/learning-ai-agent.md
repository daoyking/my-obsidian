---
title: learning-ai-agent
type: project
tags: [ai-agent, learning, vercel-ai-sdk, mastra, rag, eval, observability]
created: 2026-08-10
updated: 2026-08-13
sources: ["[[raw/articles/github-learning-ai-agent-2026-08-10]]", "[[raw/articles/github-learning-ai-agent-2026-08-13]]"]
status: active
tech_stack: [TypeScript, Vercel AI SDK, Mastra, Vite, Node.js, DeepSeek]
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
- **真实评测（DeepSeek）+ 作品集实跑证据**: W2-W5 全部用 DeepSeek 跑通真实评测（通过率均 100%，加权均分 9.8 / 9.7 / 8.98 / 9.8），作品集从「离线示例」替换为「真实报告 + 6-span trace 瀑布」，可演示性大幅提升
- **DeepSeek 适配方法论**: judge 改用 `generateText` 抽 JSON + zod 校验（绕开不支持 `json_schema`）；W3 embedding 改为零依赖本地字符哈希向量（绕开无 embedding 接口）；agent 加 `maxSteps` + 工具结果兜底（绕开调工具后不续写）

## 本周变更（2026-08-06 ~ 2026-08-13）

> 详见 `[[raw/articles/github-learning-ai-agent-2026-08-13]]`（本周新增聚焦 08-10；08-09 初始工程集见上周 `[[raw/articles/github-learning-ai-agent-2026-08-10]]`）

### W5 真实评测跑通 + 作品集替换为实跑证据（f96990c，08-10）⭐ 重大里程碑
- W5 judge 改用 `generateText` 抽 JSON + zod 校验（DeepSeek 不支持 `json_schema`）
- W5 agent 加 `toolChoice: 'required'` + 工具结果兜底合成
- W5 runEval 把 Agent 真实 toolCalls 喂给 judge（评测方法论修正）
- **W5 真实 eval 跑通：通过率 100%、加权均分 9.8/10**
- W6 作品集 `eval-report.md` 换为真实报告 + 真实 6-span trace 瀑布

### W2-W4 真实评测跑通并补进作品集（c228647，08-10）⭐ 重大
- 修复 `runEval` 未导出 `llmJudge` 的阻断（W2/W3/W4 `run.ts` 复用）
- 修复 judge 对 DeepSeek 越界 score 健壮性（夹取 `[0, 10]`）
- W3 embedding 改为零依赖本地字符哈希向量（DeepSeek 无 embedding）
- W2/W3 agent 加 `maxSteps` + 工具结果兜底；W4 修正 Mastra `toolCalls` 提取（`payload.toolName`）
- **三份真实评测报告**（100% / 10、100% / 9.7、100% / 8.98）补进 w6-portfolio
- `index.html` 新增 W2-W4 跨周回归区块

### 移除私有 .workbuddy 记忆（e1463c7，08-10）
- `.gitignore` 忽略 `.workbuddy/`，`git rm --cached` 取消跟踪（磁盘保留，历史留痕）

### 真实评测结果汇总

| 工程 | 通过率 | 加权均分 | 关键修正 |
|---|---|---|---|
| W2 流式聊天 | 100% | 10.0 / 10 | `maxSteps` + 工具结果兜底 |
| W3 RAG | 100% | 9.7 / 10 | 零依赖本地字符哈希向量 |
| W4 Mastra 编排 | 100% | 8.98 / 10 | `payload.toolName` 提取修正 |
| W5 评测可观测 | 100% | 9.8 / 10 | `generateText` + zod + `toolChoice:'required'` |

## 踩坑记录

- **TLA（Top-Level Await）问题**: W5 评测管线最初在模块顶层使用 await 导致 tsc 报错，解决方案是抽离 CLI 入口、导出纯函数
- **GitHub Pages 相对路径**: 作品集部署到 GitHub Pages 后，相对链接可能失效，需改为绝对 URL
- **DeepSeek 不支持 `json_schema`**: judge 不能用结构化输出，改用 `generateText` 抽 JSON + zod 校验
- **DeepSeek 不提供 embedding 接口**: W3 RAG 不能用模型 embedding，改为零依赖本地字符哈希向量
- **DeepSeek 调工具后不续写回答**: agent 需加 `maxSteps` + 工具结果综合兜底，强制合成最终回答
- **DeepSeek judge 越界 score**: 模型偶发输出超 10 分，judge 需夹取 `[0, 10]` 保证健壮性
- **Mastra toolCalls 提取路径**: W4 需从 `payload.toolName` 取，非顶层字段
- **评测方法论修正**: 评测的不是「能不能调工具」而是「调了工具后回答质量」——runEval 应把真实 toolCalls 喂给 judge
- **公开仓库泄露私有记忆**: `.workbuddy/memory/*.md` 含 Agent 工程私有数据，需加入 `.gitignore` + `git rm --cached`（不强制改写历史）

## 复盘结论

- Agent 学习路线应按「能力递进」组织：交互→检索→编排→评测→展示
- 评测和可观测不是可选项，是 Agent 工程的「护栏」——W5 的 Tracer + eval 是整个路线的关键差异化
- 自包含部署（无相对依赖）是作品集的最佳实践，降低部署摩擦
- **真实评测 > 离线示例**：用真实模型跑通评测后，作品集从「示例数据」升级为「实跑证据」，可演示性与可信度质的提升
- **模型能力差异要前置适配**：DeepSeek 与 Vercel AI SDK 默认假设（json_schema / embedding / 工具后续写）有多处偏差，每个偏差都需显式兜底，应在选型阶段就列清模型能力清单

## 相关概念

- [[函数调用]] · [[RAG]] · [[ReAct]] · [[Agent评估]] · [[记忆系统]]

## 相关实体

- [[Vercel-AI-SDK]] · [[Mastra]] · [[Agent]]

## 来源

- `[[raw/articles/github-learning-ai-agent-2026-08-10]]`
