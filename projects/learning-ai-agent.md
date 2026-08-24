---
title: learning-ai-agent
type: project
tags: [ai-agent, learning, vercel-ai-sdk, mastra, rag, eval, observability]
created: 2026-08-10
updated: 2026-08-24
sources: ["[[raw/articles/github-learning-ai-agent-2026-08-10]]", "[[raw/articles/github-learning-ai-agent-2026-08-13]]", "[[raw/articles/github-learning-ai-agent-2026-08-17]]", "[[raw/articles/github-learning-ai-agent-2026-08-24]]"]
status: active
tech_stack: [TypeScript, Vercel AI SDK, Mastra, Vite, Node.js, DeepSeek, agentmemory]
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

## 本周变更（2026-08-17 ~ 2026-08-24）

> 详见 `[[raw/articles/github-learning-ai-agent-2026-08-24]]`（本周聚焦 W6 作品集四提交：技术栈总览 + 移动端适配 + 记忆方案对比图）

### W6 作品集纵深打磨（08-18，四条提交）⭐

- **fd041c1d**: Hero 技术栈标签流（React/Vue3/Svelte/TS/Vite/Node/Express/Vercel AI SDK/Mastra/LangGraph/RAG/OTel）+ 移动端汉堡导航 + 「录屏前自检清单」可勾选 checklist
- **51661c64**: 主题自适应返回顶部悬浮按钮 + 导航/CTA 加「简历 ↗」外链指向 resume.html
- **f3684150**: #memory 拆分为两张并列 SVG（记忆方案对比 + RAG 效率三层）+ hover 高亮交互
- **95494f22**: 新增 #memory 章节，内联 SVG 对比图（四方案卡 + 混合推荐 + RAG 三层要点），导航新增「记忆方案」锚点

### 上周已记录（08-10 ~ 08-17，详见 `[[raw/articles/github-learning-ai-agent-2026-08-17]]`）

- 0938a7e（08-13）: W2 接入 agentmemory 长期记忆 + 修复 W2/W3 的 OpenAI baseURL 空值崩溃

## 关键设计

- **「计划→执行卡→代码」闭环**: [[Agent开发学习计划]] → W2-W6 每日任务卡 → 对应工程，形成完整学习闭环
- **W2-W4 离线 CI 评测**: 各工程配备离线 CI 评测回归数据集，确保代码质量可验证
- **W5 零依赖可观测 Tracer**: 不依赖外部服务的自研 Tracer，Langfuse 作为条件式导出（可选）
- **W6 自包含作品集**: 作品集站点无相对资源依赖，简历 HTML 自包含，便于 GitHub Pages 部署
- **CLI 独立避免 TLA**: W5 评测管线抽离 `src/cli.ts`，`runEval` 导出 `renderEvalReport`，避免 Top-Level Await 问题
- **真实评测（DeepSeek）+ 作品集实跑证据**: W2-W5 全部用 DeepSeek 跑通真实评测（通过率均 100%，加权均分 9.8 / 9.7 / 8.98 / 9.8），作品集从「离线示例」替换为「真实报告 + 6-span trace 瀑布」，可演示性大幅提升
- **DeepSeek 适配方法论**: judge 改用 `generateText` 抽 JSON + zod 校验（绕开不支持 `json_schema`）；W3 embedding 改为零依赖本地字符哈希向量（绕开无 embedding 接口）；agent 加 `maxSteps` + 工具结果兜底（绕开调工具后不续写）
- **W2 长期记忆（agentmemory）**: 对话前用最后一条用户消息召回相关历史记忆注入 system prompt，对话后 `onFinish` 把本轮内容写入记忆；本地向量化免费无需 key；`isMemoryAvailable()` 健康检查 + 服务不可用时静默降级（聊天功能不受影响）——生产级 Agent 记忆模块的标准范式
- **W6 作品集可视化叙事**: 技术栈标签流 + 记忆方案对比 SVG + RAG 效率三层图，强化作品集的可视化呈现与叙事闭环

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
- **OPENAI_BASE_URL 空值崩溃**: `@ai-sdk/openai` 的 `createOpenAI` 在 `baseURL` 为 `undefined` 字面量（而非「未传」）时模块加载即崩；修复用 `process.env.OPENAI_BASE_URL || undefined`——`||` 在左侧 falsy 时返回右侧 `undefined`，语义等价「不传字段」。JS 中 `undefined` 作为属性值与「属性不存在」在严格类型库里有差异，`||` 是惯用「真值才传」模式

## 复盘结论

- Agent 学习路线应按「能力递进」组织：交互→检索→编排→评测→展示
- 评测和可观测不是可选项，是 Agent 工程的「护栏」——W5 的 Tracer + eval 是整个路线的关键差异化
- 自包含部署（无相对依赖）是作品集的最佳实践，降低部署摩擦
- **真实评测 > 离线示例**：用真实模型跑通评测后，作品集从「示例数据」升级为「实跑证据」，可演示性与可信度质的提升
- **模型能力差异要前置适配**：DeepSeek 与 Vercel AI SDK 默认假设（json_schema / embedding / 工具后续写）有多处偏差，每个偏差都需显式兜底，应在选型阶段就列清模型能力清单
- **长期记忆要可降级**：记忆服务是「增强」而非「必需」，`isMemoryAvailable()` 健康检查 + 静默降级（服务挂了主功能不受影响）是生产级 Agent 记忆模块的标准范式——记忆召回/存入失败只告警不阻断主流程
- **环境变量空值要显式处理**：`process.env.X` 在未设置时是 `undefined`，但直接赋给严格类型库的字段会触发「undefined 值 vs 未传」歧义，`|| undefined` 是安全惯用法

## 相关概念

- [[函数调用]] · [[RAG]] · [[ReAct]] · [[Agent评估]] · [[记忆系统]]

## 相关实体

- [[Vercel-AI-SDK]] · [[Mastra]] · [[Agent]]

## 来源

- `[[raw/articles/github-learning-ai-agent-2026-08-10]]`
