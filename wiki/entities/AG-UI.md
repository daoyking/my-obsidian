---
title: AG-UI
aliases: [Agent User Interaction Protocol, Agent-UI协议, AGUI]
type: entity
tags: [protocol, agent, ui, streaming, events, open-source]
created: 2026-09-02
updated: 2026-09-02
sources: ["[[raw/articles/awesome-llm-apps-generative-ui]]"]
status: active
---

# AG-UI（Agent User Interaction Protocol）

## 一句话

**Agent 与前端之间的流式事件协议**——把「Agent 在干什么」标准化成一串可订阅的事件，让任何前端渲染任何 Agent 的运行过程。

## 定位

在 [[生成式UI渲染协议]] 的五层阶梯里，AG-UI 处在**传输层**，不规定界面长什么样，只负责把 Agent 的内部状态变化（说话、调工具、改状态、分子代理）如实、流式地送到前端。L1 工具卡片、L2 共享状态、L3 声明式组件树都跑在它上面。

与 [[MCP]] 的分工：**MCP 管 Agent ↔ 工具/数据，AG-UI 管 Agent ↔ 人**。两者正交，不竞争。

## 关键事实

| 项 | 值 |
|---|---|
| 发起方 | [[CopilotKit]]（2025 年开源） |
| 传输 | 传输层无关（transport-agnostic）；参考实现为 SSE / HTTP streaming，也支持 WebSocket |
| 载荷 | JSON 事件流 |
| 语言绑定 | 无（官方提供 TypeScript / Python SDK） |
| 采用情况 | [[awesome-llm-apps]] 的 `generative_ui_agents` 8 个样例中 7 个使用 |

## 三种流模式

1. **Start-Content-End** — 流式内容：`TEXT_MESSAGE_START → CONTENT(delta…) → END`、`TOOL_CALL_START → ARGS(delta…) → END`。另有便捷事件 `_CHUNK`，由客户端自动展开为三元组。
2. **Snapshot-Delta** — 状态同步：先 `STATE_SNAPSHOT` 发全量，之后 `STATE_DELTA` 发 **RFC 6902 JSON Patch** 增量。快照语义是**替换**而非合并；增量失步时前端可请求新快照。
3. **Lifecycle** — 运行边界：`RUN_STARTED / RUN_FINISHED / RUN_ERROR`，可选 `STEP_*` 嵌套。

完整事件清单见 [[生成式UI渲染协议]] 的事件表。

## 为什么它比自研 SSE 强

- **协议内置可观测性**：每个事件都带可选 `metadata`（token 用量、trace id、finish reason），不需要额外埋点
- **子代理归属**：`subagentRunId` 让多 Agent 场景的事件天然可分组，前端能按 Agent 分栏展示
- **人工介入是一等公民**：`RUN_FINISHED` 的 `outcome` 支持 `{ type: "interrupt", interrupts: [...] }`，把 [[人机协同]] 写进了协议而不是靠业务层 hack
- **推理可见**：`REASONING_*` 系列 + `REASONING_ENCRYPTED_VALUE`（加密 CoT 跨轮保留）覆盖了思维链展示与续传

## 我的观点

- AG-UI 是 CopilotKit 主导的协议，**采用率存在厂商偏差**——[[awesome-llm-apps]] 的生成式 UI 样例几乎都是 CopilotKit 共建产物。它目前是「事实上的先行者」，还不是「行业标准」，下结论前值得看看中立实现的采用情况。
- 事件名存在两种写法（wire 上 `RUN_STARTED` / TS 类型 `RunStarted`），文档与 SDK 间不一致，实现时以抓到的真实流为准。
- 对 Vue 生态的意义：因为传输层无关且无语言绑定，**Vue 3 自己实现客户端的门槛只有几百行**，不存在被 React 生态锁死的问题。

## 待研究问题

- [ ] 除 CopilotKit 外，还有哪些独立实现的 AG-UI 服务端？（判断真实采用度）
- [ ] `STATE_DELTA` 在深层嵌套与数组场景的 patch 冲突处理策略？

## 相关概念

- [[生成式UI渲染协议]] · [[生成式UI]] · [[工具调用]] · [[结构化输出]] · [[人机协同]] · [[多智能体系统]]

## 相关实体

- [[CopilotKit]] · [[A2UI]] · [[awesome-llm-apps]] · [[MCP]] · [[Mastra]] · [[Vercel-AI-SDK]]

## 来源

- 官方文档：<https://docs.ag-ui.com/concepts/events>（2026-09-02 抓取）
- [[raw/articles/awesome-llm-apps-generative-ui]]（8 个项目均声明 Built with AG-UI）
