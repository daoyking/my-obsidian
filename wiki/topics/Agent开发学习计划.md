---
title: Agent 开发学习计划
aliases: [Agent开发学习路线, 前端转 Agent 学习计划]
type: topic
tags: [agent, 学习计划, 前端, 求职]
created: 2026-08-09
updated: 2026-08-09
sources: [[AI-Agents-in-Depth]], [[动手学大模型]], [[AI]]
status: active
---

# Agent 开发学习计划

> 为前端开发工程师（React / Vue / Svelte / SolidJS / TS / Vite / Node）量身定制的 Agent 开发学习路线，结合转岗市场数据与可用学习资源，目标是在求职期内产出可演示的 Agent 应用作品集。

## 背景

AI Agent / AI 应用工程师是 2025–2026 增速最陡的技术岗位：智能体人才需求同比 **+244%~310%**，供需比约 **1:8**，薪酬较传统岗位溢价 **+20%~58%**。约 **45%** 的 Agent 人才来自前端 / 后端工程师内部转岗——前端转型应用层是被市场验证的优势赛道（见 [[AI]]、[[Agent]]）。

核心判断：**前端工程师不必补深算法**，应把 React / TS / 流式 UI / API 集成的优势直接嫁接到 Agent 的「交互层 + 编排层」，走「AI 应用工程师 / AI 全栈」而非「模型研究员」路线。

## 关键子主题

### 一、六周路线图（可压缩到 4 周冲刺 / 拉长到 8 周）

| 周 | 主题 | 关键交付（可演示） | 推荐资源 | 预计耗时 |
|---|---|---|---|---|
| W1 | 概念奠基 | 概念笔记 + 能口述 Agent 循环 | HF Agents Course Unit1 + 吴恩达 Agentic AI（旁听，不手写 Python） | 8–10h |
| W2 | 最小可聊 | 流式聊天机器人（网页，GitHub） | [[Vercel-AI-SDK]] useChat / streamText | 10h |
| W3 | 工具调用 + RAG | 流式 RAG 问答站（带引用 + 工具时间线 UI，检索即工具） | [[RAG]] + 向量库 + 嵌入；参考 [[函数调用]] [[ReAct]] | 12h |
| W4 | 编排与记忆 | 多步 Agent（读简历→抓 JD→打分→建议） | [[Mastra]]（agent loop / memory / workflow）+ 对照 [[Claude-Code]] 学任务拆解 | 12h |
| W5 | 评测与可观测 | eval 工具箱（LLM-as-judge 评测 + 自建 Trace / AI SDK telemetry） | [[Agent评估]] + [[可观测性]] + AI SDK telemetry | 12h |
| W6 | 作品集交付 ✅ | 整合 w2–w5 的统一作品集（`learning-AI/w6-portfolio/` 自包含站点）+ evals + observability + 录屏 | [[W6-每日任务卡]] | 15h |

> **进度跟踪（2026-08-09）**：W1 概念 → W2 流式聊天（`w2-agent-chat`）→ W3 RAG（`w3-rag-qa`）→ W4 编排（`w4-resume-scorer`，Mastra）→ W5 评测可观测（`w5-agent-eval`，LLM-as-judge + 自建 Tracer / telemetry）→ **W6 作品集交付（`w6-portfolio`）已完成主体**。全部工程可运行、配套 README，并沉淀为知识库任务卡（[[W2-每日任务卡]]～[[W6-每日任务卡]]）。配套工程集 [[learning-ai-agent]]。

### 二、技能优先级（P0 必学 / P1 重要 / P2 延后）

- **P0**：LLM API 调用、Prompt Engineering、Tool / Function Calling（[[函数调用]]）、流式 UI 与交互可视化、≥1 个可演示作品集。
- **P1**：RAG（[[RAG]]）、Agent 编排（LangGraph / [[Mastra]]）、Memory（[[记忆系统]]）、向量数据库、评测与可观测（[[Agent评估]]）。
- **P2（求职期延后）**：Python 深度、线性代数 / 微积分等算法数学、模型微调 / 自训（LoRA / QLoRA）、分布式训练。

> 避坑：先别啃 Python 与数学，那是算法岗路径，ROI 低且易劝退；微调对求职期作品集无必要，检索（RAG）已足够。

### 三、推荐资源栈（前端向）

1. 概念：Hugging Face Agents Course Unit 1 + 吴恩达 Agentic AI（看懂词汇即可）
2. 交互层：[[Vercel-AI-SDK]]（useChat / streamText / Tools / AI Elements）
3. 编排层：[[Mastra]]（TS 原生，agent loop / memory / workflow / RAG / [[MCP]]，Studio 调试）
4. 原理兜底：Datawhale `hello-agents` 第 4 / 8 / 10 章（ReAct / 记忆检索 / MCP），跳过 Agentic-RL
5. 交付：一个真实项目 + evals + observability
- 风险：Mastra v1 较新、生产部署文档偏薄，适合个人 / 内部项目；复杂编排仍评估 LangGraph 后端。

### 四、作品集方向（发挥前端优势）

1. **AI 简历优化器**：上传简历 → Agent 抓 JD + 打分 + 改写，前端做对比视图（兼具求职利器）。
2. **Agent 开发工具面板**：自然语言生成 Vite 配置 / React 组件并实时预览，展示复合能力。
3. **流式 RAG 问答站**：小领域文档做带引用、流式输出、工具时间线的可交互页。

### 五、市场与契合度（数据依据）

- 需求增速 +244%~310%；供需比 1:8；薪酬溢价 +20%~58%。
- JD 最高频两项：**RAG + Agent 编排**（学习投入优先级最高）。
- 约 45% Agent 人才来自前端 / 后端转岗，路径已被验证；3–6 个月可完成转型。
- 前端在快速原型、交互设计、系统集成（API / 全栈）上的积累与 Agent 产品高度契合。

## 我的观点

- **用差异打差异**：别和算法背景拼底层模型，要在「把 AI 做成好用的产品」上建立护城河——流式渲染、工具调用可视化、human-in-the-loop 审批 UI 恰是前端独占优势区。
- **先 TS 后 Python**：用已有技术栈最快拿到正反馈，再补 Python 仅够「读 / 改 / 跑」即可。
- **作品集 > 证书**：每个阶段留一个能跑的 demo（网页 + GitHub + 录屏），比完课证管用。
- **评测与可观测被普遍忽视**：从 W5 起就养成给 Agent 写 eval、接 observability 的习惯，是高级分水岭。

## 待研究问题

- Mastra 与 LangGraph（JS 版）在生产编排上的成熟度差距到底多大？
- 纯 TS 端到端 Agent 实战教程缺位，是否值得自己沉淀一套模板反哺 [[AI]] 主题？
- 求职市场对本「前端 + Agent」复合岗的具体 JD 画像（需 BOSS 直聘 / 猎聘季报交叉验证）。

## 来源

- 团队调研产出（用户研究员 / 竞品分析师 / 数据分析师，2026-08-09）
- 知识库既有主题：[[AI-Agents-in-Depth]]、[[动手学大模型]]、[[AI]]、[[Agent]]、[[RAG]]、[[ReAct]]、[[MCP]]、[[记忆系统]]
