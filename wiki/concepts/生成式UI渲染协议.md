---
title: 生成式UI渲染协议
aliases: [GenUI Protocols, 生成式UI范式, Agent-UI协议]
type: concept
tags: [ai, agent, frontend, ui, ag-ui, a2ui, mcp-apps, protocol, vue]
created: 2026-09-02
updated: 2026-09-02
sources: ["[[raw/articles/awesome-llm-apps-generative-ui]]"]
status: active
---

# 生成式 UI 渲染协议

## 定义

Agent 把「界面」而非「文字」作为输出时，**Agent 与前端之间如何约定界面的表示、传输与更新**的一整套机制。它不是单个协议，而是一条**控制权光谱**：从「前端写死组件、Agent 只传数据」到「Agent 直接写一个完整应用前端托管运行」。

> [[生成式UI]] 回答「是什么、为什么重要」，本页回答「怎么落地、选哪一层」。

## 五层抽象阶梯

判断一个 GenUI 方案在哪一层，只看一个问题：**这一层的「长什么样」由谁决定？**

| 层 | 范式 | 长什么样由谁定 | Agent 传什么 | 前端要写什么 | 样例 |
|---|---|---|---|---|---|
| **L0** | 纯文本流 | 无界面 | token 流 | Markdown 渲染 | 所有 Chatbot |
| **L1** | 工具渲染卡片<br>Tool-rendered | **前端**写死 `tool → 组件` 映射 | tool call + args + result | 每个工具配一个组件 | `ai-financial-coach-agent`、`ai-deep-research-agent` |
| **L2** | 共享状态<br>Shared State | **前端**写布局，Agent 改数据 | 状态快照 + JSON Patch 增量 | 一份响应式状态 + 绑定视图 | `generative-ui-starter-project`（看板）、`ai-knowledge-explorer`（图谱） |
| **L3** | 声明式组件树<br>Declarative ([[A2UI]]) | Agent 从**前端注册的 Catalog** 里挑 | 组件树 JSON（surface + operations） | Catalog（schema + renderer 各一份） | `generative-ui-starter-project` 的 A2UI 模式 |
| **L4** | 沙箱应用<br>Sandboxed App | **Agent 侧**提供完整 HTML/JS | `ui://` 资源 URI，iframe 挂载 | 一个 iframe 桥（postMessage JSON-RPC） | `mcp-apps-generative-ui-showcase`（MCP Apps SEP-1865） |
| **L5** | 现场生成应用<br>Agent-authored App | **Agent 现写** | 生成代码 → 沙箱里跑起来 | 同 L4，外加沙箱编排 | `ai-mcp-app-builder`（[[Mastra]] + E2B） |

**两条单调性**（选型时的硬约束）：

- **控制权**：L0→L5 前端对界面的控制递减，Agent 递增
- **风险面**：L0→L5 能力递增，但不可控性也随之递增——L1 最坏是渲染一张错卡片，L5 最坏是 Agent 现场写出的代码在生产环境执行

**L2 与 L3 的分界**最容易被混淆：L2 里 Agent 改的是**数据**（看板还是那个看板，卡片从 To Do 挪到 Done）；L3 里 Agent 决定的是**结构**（这次要渲染一个航班比价表，下次要渲染一个表单）。判断标准：Agent 能不能凭空造出一个前端没预设过的界面形态？不能 → L2；能 → L3。

## 协议对照

四个协议不是竞争关系，是**分层互补**：

| 协议 | 解决什么 | 载荷形态 | 所属层 | 语言绑定 |
|---|---|---|---|---|
| [[AG-UI]] | Agent ↔ 前端的**事件流**传输 | 事件流（SSE/WS） | 传输层，承载 L1–L3 | 无（有 TS/Python SDK） |
| [[A2UI]] | 声明式 UI 的**组件树表示** | JSON（Catalog/Surface/Operations） | L3 | 无（参考实现 React） |
| MCP Apps (SEP-1865) | 工具**自带 UI 资源** | `ui://` HTML 资源 + postMessage JSON-RPC | L4 | 无 |
| MCP-UI | 与 MCP Apps 类似的 UI 资源方案 | HTML 资源 | L4 | 无 |

关键洞察：**AG-UI 是地基，A2UI 是它上面跑的一种载荷**。[[CopilotKit]] 的 8 个样例里 7 个用 AG-UI 打底，其中只有一个额外用 A2UI——说明 L1/L2 是当下的工程主流，L3 仍在早期。

## [[AG-UI]] 事件模型（传输层事实标准）

三种流模式覆盖全部事件：

1. **Start-Content-End** — 流式内容（文本、工具参数）
2. **Snapshot-Delta** — 状态同步（先发全量快照，再用 **RFC 6902 JSON Patch** 增量更新）
3. **Lifecycle** — run / step / subagent 的起止

| 类别 | 事件（wire 上为大写下划线，TS 类型名为 PascalCase） | 载荷要点 |
|---|---|---|
| 生命周期 | `RUN_STARTED` / `RUN_FINISHED` / `RUN_ERROR` / `STEP_STARTED` / `STEP_FINISHED` | `threadId` / `runId`；`RUN_FINISHED` 的 `outcome` 支持 `success` 与 `interrupt`（人工介入） |
| 文本 | `TEXT_MESSAGE_START` / `_CONTENT` / `_END`（另有便捷版 `_CHUNK`） | 靠 `messageId` 关联，`delta` 按序拼接 |
| 工具 | `TOOL_CALL_START` / `_ARGS` / `_END` / `TOOL_CALL_RESULT` | `toolCallId` 关联；`_ARGS` 是 JSON 片段流，需拼全再解析 |
| 状态 | `STATE_SNAPSHOT` / `STATE_DELTA` / `MESSAGES_SNAPSHOT` | `STATE_DELTA.delta` 是 JSON Patch 数组；快照应**替换**而非合并 |
| 活动 | `ACTIVITY_SNAPSHOT` / `ACTIVITY_DELTA` | `activityType`（如 `PLAN`/`SEARCH`）+ 结构化 JSON，用于"过程可视化"卡片 |
| 子代理 | `SUBAGENT_STARTED` / `_FINISHED` / `_ERROR` | 靠 `subagentRunId` 归属事件，多 Agent 前端靠它分栏展示 |
| 推理 | `REASONING_START` / `REASONING_MESSAGE_*` / `REASONING_END` | 思维链可见性；另有 `REASONING_ENCRYPTED_VALUE` 用于跨轮保留加密 CoT |
| 特殊 | `RAW` / `CUSTOM` | 透传外部事件 / 应用自定义扩展 |

每一步都带可选 `metadata`（token 用量、trace id、finish reason）。**可观测性是协议内置的**——这点比多数自研 SSE 方案强，也是选型时容易被忽略的加分项。

## Vue 3 落地方案

[[CopilotKit]] 是 React-only，Vue 生态没有对等物。但 AG-UI **传输层无关、语言无关**，Vue 3 只需要自己实现一个 ~200 行的客户端。这是机会而不是障碍：**React 生态有现成轮子，Vue 生态需要你自己造——而这正是差异化**。

### 架构

```
Vue 3 + Vite 前端                     Agent Runtime（任选其一）
┌────────────────────────┐           ┌──────────────────────────┐
│ useAGUI() composable   │◄── SSE ───┤ Mastra / LangGraph /     │
│  事件流 → reactive     │   AG-UI   │ Vercel AI SDK / 自研      │
├────────────────────────┤           └──────────────────────────┘
│ JSON Patch → reactive  │
│ Catalog 注册（Zod）     │
│ <GenUIRenderer>        │
│ PostMessageBridge(L4)  │
└────────────────────────┘
```

### 1. `useAGUI` —— 事件流收敛为响应式状态

```ts
// composables/useAGUI.ts
import { reactive, ref, shallowRef } from 'vue'
import { applyPatch, type Operation } from 'fast-json-patch'

export function useAGUI(endpoint: string) {
  const state   = reactive<Record<string, any>>({})   // L2：与 Agent 共享的状态
  const uiTree  = shallowRef<GenUINode | null>(null)  // L3：声明式组件树
  const messages = reactive<ChatMessage[]>([])
  const running  = ref(false)
  const trace = reactive<{ tokens: number; runId?: string }>({ tokens: 0 })

  const toolRenderers = new Map<string, Component>()  // L1：tool → 组件

  async function run(input: string) {
    running.value = true
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: [...messages, { role: 'user', content: input }] }),
    })

    for await (const ev of readSSE(res)) {
      switch (ev.type) {
        case 'RUN_STARTED':
          trace.runId = ev.runId; break

        case 'TEXT_MESSAGE_CONTENT':
          appendDelta(messages, ev.messageId, ev.delta); break

        case 'TOOL_CALL_START':
          pushToolCard(messages, ev.toolCallId, ev.toolCallName); break
        case 'TOOL_CALL_ARGS':
          appendToolArgs(messages, ev.toolCallId, ev.delta); break
        case 'TOOL_CALL_RESULT':
          resolveToolCard(messages, ev.toolCallId, ev.content); break

        case 'STATE_SNAPSHOT':
          Object.assign(state, ev.snapshot); break        // 替换语义
        case 'STATE_DELTA':
          applyPatch(state, ev.delta as Operation[]); break

        case 'CUSTOM':
          if (ev.name === 'a2ui.render') uiTree.value = ev.value  // L3
          break

        case 'RUN_FINISHED':
          running.value = false
          if (ev.outcome?.type === 'interrupt') emit('interrupt', ev.outcome.interrupts)
          break
      }
      if (ev.metadata?.tokenUsage) trace.tokens += ev.metadata.tokenUsage.total
    }
  }

  return { state, uiTree, messages, running, trace, run, toolRenderers }
}
```

### 2. Catalog 注册 —— L3 的类型安全边界

学 A2UI 的双文件约定（schema 与 renderer 分离，靠类型系统强制对齐）：

```ts
// catalog/definitions.ts
import { z } from 'zod'
export const definitions = {
  MetricCard: {
    description: '单个 KPI 数值卡。用于展示一个关键指标及其同比。',
    props: z.object({ label: z.string(), value: z.number(), delta: z.number().optional() }),
  },
  BarChart:    { description: '分类对比柱状图。', props: z.object({ data: z.array(z.object({ name: z.string(), value: z.number() })) }) },
  DataTable:   { description: '可排序表格。',    props: z.object({ columns: z.array(z.string()), rows: z.array(z.array(z.any())) }) },
} as const

// catalog/renderers.ts —— 用 Element Plus 实现，Vue 3 里最省事
import { ElCard, ElStatistic, ElTable, ElTableColumn } from 'element-plus'
export const renderers: { [K in keyof typeof definitions]: Component } = {
  MetricCard: /* ... */,
  BarChart:   /* ... */,
  DataTable:  /* ... */,
}
```

`description` 字段会被拼进 Agent 的系统提示词——**组件的文档就是给模型看的 prompt**。这是 [[上下文工程]] 在 UI 层的具体形态：Catalog 越大，模型越容易挑错，需要控制规模 + 提供 few-shot。

### 3. 递归渲染器 + 降级

```vue
<!-- components/GenUIRenderer.vue -->
<script setup lang="ts">
const props = defineProps<{ node: GenUINode }>()
const el = computed(() => renderers[props.node.type])
</script>

<template>
  <component :is="el" v-if="el" v-bind="props.node.props">
    <GenUIRenderer v-for="(c, i) in props.node.children ?? []" :key="i" :node="c" />
  </component>

  <!-- 降级：未知组件 / props 校验失败 → 不崩，渲染成可折叠的 JSON 卡 + 重试按钮 -->
  <ElAlert v-else type="warning" :title="`未知组件：${props.node.type}`">
    <pre>{{ JSON.stringify(props.node, null, 2) }}</pre>
    <ElButton size="small" @click="emit('retry', props.node)">让 Agent 重试</ElButton>
  </ElAlert>
</template>
```

### 4. L4 的 iframe 桥

MCP Apps 的链路：`_meta["ui/resourceUri"]` → 中间件拉取 HTML → 前端挂 iframe → 双向 `postMessage` JSON-RPC。Vue 侧只需要一个桥组件：

```ts
const origin = new URL(resourceUri).origin
window.addEventListener('message', (e) => {
  if (e.origin !== origin) return                       // 必须校验 origin
  const { jsonrpc, id, method, params } = e.data
  if (method?.startsWith('tools/call')) {
    callMCPTool(method, params).then((result) =>
      e.source?.postMessage({ jsonrpc: '2.0', id, result }, { targetOrigin: origin }))
  }
})
```

沙箱要点：`sandbox="allow-scripts"`（**不给** `allow-same-origin`，否则 iframe 能读到宿主 DOM）、固定 `origin` 校验、工具调用走宿主代理而非直连。

## 选型决策树

```
Agent 产出的界面形态是否固定且已知？
├─ 是 → 布局是否固定、只有数据变？
│       ├─ 是 → L2 共享状态（看板/表单/图表刷新）
│       └─ 否 → L1 工具渲染卡片（每步一张过程卡）
└─ 否 → 需要多强的交互与自由度？
        ├─ 中等，且要求可控可审计 → L3 A2UI 声明式（Catalog 兜住边界）
        ├─ 强，且 UI 由第三方/服务端提供 → L4 MCP Apps 沙箱
        └─ 极强，接受代码执行风险 → L5 E2B 现场生成
```

工程上的务实建议：**从 L2 起步，用 L1 做过程可视化，把 L3 当作有边界的实验**。L2 的 JSON Patch 增量同步是投入产出比最高的一层——它把「Agent 改数据、Vue 自动更新」变成几乎零成本的事，因为 Vue 的响应式系统天然就是 patch 的消费者。

## 我的观点

- 这五层阶梯里，**L2 与 Vue 3 的契合度高得反常**：AG-UI 的 `STATE_DELTA` 就是 RFC 6902 JSON Patch，Vue 的响应式代理天然吃 patch，中间几乎不需要胶水层。React 生态反而要 `useCoAgent` 之类的库来兜。这可能是 Vue 在 Agent 前端时代一个被低估的优势。
- **所有样例清一色 Next.js + Python agent，没有一个是 Vue**。这既是 Vue 生态的空白，也说明风险：CopilotKit 的 AG-UI 客户端、A2UI 参考实现都是 React 实现，Vue 侧要自己写。好处是协议层无绑定，工作量可控在数百行。
- 把这些套到我的 [[awesome-llm-apps]] 观察上：该仓库生成式 UI 样例全部是 CopilotKit 赞助/共建的产物，**样本存在厂商偏差**——不能因为 8 个样例全用 AG-UI 就判定 AG-UI 是标准。真正中立的事实是：MCP 已是 [[MCP]] 层的事实标准，而 UI 层协议还没打完。
- 对 hmnmt.com 这类项目的实用价值：L1 + L2 的组合可以直接用于「产品选型助手」——用户描述工况，Agent 调用产品检索工具（L1 过程卡），最终把推荐产品填进一个参数对比表（L2 共享状态）。不需要 L4/L5 的重型方案。

## 待研究问题

- [ ] AG-UI 的 wire 事件名究竟是 `RUN_STARTED` 还是 `RunStarted`？两种写法在文档与 SDK 中并存，需抓一个真实 SSE 流核验
- [ ] `STATE_DELTA` 的 JSON Patch 在深层嵌套 + 数组场景下的 patch 冲突如何处理？`fast-json-patch` 的重试策略够不够？
- [ ] A2UI 的 Catalog 规模上限：组件数超过多少之后，模型挑选准确率开始显著下降？
- [ ] Vue 3 的 `reactive` 对象直接 applyPatch 是否有响应式丢失的边界情况（如 patch 新增嵌套层级）？
- [ ] MCP Apps（SEP-1865）与 MCP-UI 是什么关系？SEP 编号意味着已进 MCP 官方扩展流程吗？

## 相关概念

- [[生成式UI]] · [[上下文工程]] · [[工具调用]] · [[函数调用]] · [[MCP]] · [[Agent]] · [[结构化输出]] · [[人机协同]]

## 相关实体

- [[AG-UI]] · [[A2UI]] · [[CopilotKit]] · [[awesome-llm-apps]] · [[Mastra]] · [[Vue]] · [[Vercel-AI-SDK]] · [[TypeScript]] · [[Element-Plus]]

## 相关项目

- [[前端转AI全栈学习计划]] · [[Agent开发学习计划-Python路线]]

## 来源

- [[raw/articles/awesome-llm-apps-generative-ui]]（8 个项目 README 全文快照，2026-09-02，含各项目 "Gen UI concept" 官方定性）
- AG-UI 官方事件文档：<https://docs.ag-ui.com/concepts/events>（2026-09-02 抓取）
- A2UI 规范：<https://a2ui.org/specification/>
- MCP Apps 扩展 SEP-1865：<https://github.com/modelcontextprotocol/ext-apps>
