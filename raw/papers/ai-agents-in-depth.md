---
title: 《AI Agents in Depth（深入浅出 AI Agent）》源快照
type: source
tags: [source, ai, llm, agent, book]
ingested: 2026-08-07
source_file: "/Users/jindy/Downloads/about-jindy/AI-Agents-in-Depth-zh-CN.pdf"
pages: 316
---

# 《AI Agents in Depth（深入浅出 AI Agent）》

> 本文件是 raw/ 原始层，AI 只读不改。来源：本地 PDF（316 页）。

## 定位

一本体系完整的 AI Agent 工程实践专著，从 Agent 基础到后训练、持续进化、GUI Agent，覆盖 Harness 工程、上下文工程、工具、记忆与知识库、评估、模型后训练等全栈主题。以「Harness 工程」为主线：模型做不稳的，Harness 先补上；模型每内化一层，Harness 就卸下一层。

## 全书结构（9 章）

1. **AI Agent 入门**：现代 Agent = LLM + 上下文 + 工具；观察空间/动作空间；ReAct 循环（思考→行动→观察）；Harness 工程五功能；编排模式（工作流 vs 自主）；护栏与安全
2. **上下文工程**（全书最关键）：API 消息四种角色；KV Cache 友好设计；提示工程（人格/结构/Few-shot/工具定义）；提示注入；Agent Skills 按需加载；Agent 状态栏；上下文压缩（分层压缩、子 Agent 隔离优于压缩）
3. **用户记忆和知识库**：记忆三层次评估框架；四种存储格式；认知类型（情景/语义/程序）；RAG（分块/稠密嵌入/稀疏嵌入/混合检索/多模态）；知识组织（结构化索引、文件系统范式、智能体化 RAG）
4. **工具**：工具分类；设计原则（粒度/通用性/描述艺术/参数保真）；MCP 工具生态；感知/执行/协作工具；事件驱动异步 Agent；主动工具发现
5. **Coding Agent 与代码生成**：Coding 是 Agent 基础能力；Sessionless 设计；文件编辑工具；代码作为思考工具/业务约束/生成式 UI/Agent 自举
6. **Agent 的评估**：自动评估环境；任务数据集设计；LLM-as-a-Judge；评估驱动选型；可观测性；消融/AB 测试；仿真环境
7. **模型后训练**：预训练/SFT/RL 三阶段；SFT 本质（换数据的预测下一词）；为何先 SFT 后 RL；RLHF；多轮信用分配（过程奖励 vs 结果奖励）；RL 学工具调用；On-Policy 蒸馏
8. **Agent 的持续进化**：从运行轨迹获得学习信号；四种进化方法（经验→知识 / →指令 / →程序 / →参数）
9. **Computer Use：GUI 自动化 Agent**

## 关键概念与原文表述

### Harness 工程
> 「模型此刻的能力边界，就是 Harness 此刻的价值所在。Harness 工程不是对苦涩的教训（bitter lesson）的抵抗，而是这一教训在工程时间尺度上的实践：模型还做不稳的，Harness 先补上；模型每内化一层，Harness 就卸下一层，转而兜底新的能力前沿。」

### ReAct 循环
「思考 → 行动 → 观察」的迭代过程，区分任务内上下文适应、跨任务外部产物（artifact）更新、训练周期参数更新三个层次。

### 提示注入
上下文安全的核心威胁——攻击者通过数据通道注入指令操纵模型输出（区别于 [[越狱攻击]] 的用户侧攻击，提示注入多来自工具返回的外部内容）。

### 记忆三层次 + 四种存储格式
- 三层次评估框架：短时/工作记忆、长时记忆、跨会话持久化
- 四种存储格式：（书中详述）
- 认知类型：情景记忆 / 语义记忆 / 程序记忆

### 持续进化四种方法
1. 将经验沉淀为知识（知识库）
2. 将经验写成指令（提示词/SOP）
3. 将经验写成程序（工具/Skill）
4. 将经验写入参数（微调/训练）

## 与本知识库的关联

主人关注 AI，本书是 Agent 工程的主线参考资料，可与 [[raw/articles/dive-into-llms-overview]]（《动手学大模型》）互补：后者偏 LLM 能力点实践，本书偏 Agent 系统工程。
