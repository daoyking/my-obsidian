---
title: A2UI
aliases: [Agent-to-User Interface, A2UI规范]
type: entity
tags: [protocol, agent, ui, declarative, json, catalog]
created: 2026-09-02
updated: 2026-09-02
sources: ["[[raw/articles/awesome-llm-apps-generative-ui]]"]
status: active
---

# A2UI（Agent-to-User Interface）

## 一句话

**声明式生成式 UI 规范**：Agent 不返回文字，而是返回一段描述界面的 JSON；前端拿着这份 JSON，从预先注册的组件目录里取出对应组件渲染出来。

对应 [[生成式UI渲染协议]] 五层阶梯的 **L3**——介于「Agent 只改数据」（L2）与「Agent 提供整个应用」（L4）之间：Agent 决定**结构**，但只能在前端圈定的组件集合内选择。

## 三个核心概念

| 概念 | 是什么 | 谁维护 |
|---|---|---|
| **Catalog** | 组件定义（schema）+ 对应渲染器（React 组件）的配对集合，一次性注册到 Provider | 前端工程师 |
| **Surface** | 一个已渲染的 UI 实例，Agent 可创建、设置组件、绑定数据 | 运行时 |
| **Operations** | Agent 从工具里返回 `a2ui.render(operations=[...])`，由中间件流式推给前端 | Agent |

## 两种模式

| 模式 | 组件树从哪来 | 代表工具 | 适用场景 |
|---|---|---|---|
| **Fixed schema** | 预先写死的 JSON schema 文件，只有数据随调用变化 | `search_flights` | 形态固定的业务卡（航班列表、订单详情） |
| **Dynamic schema** | 由**二级 LLM** 根据对话现场生成组件与数据 | `generate_a2ui` | 形态不可预知的界面 |

两者共用同一份前端 Catalog，差别只在组件树的来源。

## 关键实现约束

- 渲染器与 definitions **类型强绑定**：`renderers` 的类型由 definitions 推导，props 不匹配时 TypeScript 直接报错。这是把「模型输出的可靠性」问题前移成「编译期」问题。
- 组件的 `description` 字段会被拼进 Agent 的系统提示词——**组件的文档是给模型看的 prompt**。Catalog 越大，模型越难挑对。
- 传输依托 [[AG-UI]] 的 `CUSTOM` 事件（或直接自定义事件名），自身不定义传输层。

## 我的观点

- A2UI 的价值不在协议本身有多复杂，而在它把**「Agent 能造什么界面」变成了一个可审计的白名单**。L4/L5 的沙箱方案能力更强，但审计成本高；A2UI 用能力换可控性，对企业场景是合理的取舍。
- Catalog 的 `description` 本质是 prompt —— 这意味着 [[上下文工程]] 的所有经验（描述要具体、要给 few-shot、要控制规模）在 UI 层完全适用。**写组件文档的对象从人变成了模型，这是前端工程师的新技能点。**
- 参考实现是 React，但规范本身与框架无关。Vue 3 侧可用 `defineComponent` + Zod schema 复刻同样的类型绑定模式（见 [[生成式UI渲染协议]] 的 Vue 落地方案）。

## 待研究问题

- [ ] Catalog 规模上限：组件数超过多少之后，模型挑选准确率开始显著下降？有无分桶/检索式 Catalog 的实践？
- [ ] 声明式模式的 npm 包与版本：`npx copilotkit create --framework a2ui` 脚手架产出的结构与规范文档是否一致？
- [ ] A2UI 与 MCP Apps（L4）能否混用——同一个 surface 里既有 catalog 组件又有沙箱 iframe？

## 相关概念

- [[生成式UI渲染协议]] · [[生成式UI]] · [[上下文工程]] · [[结构化输出]] · [[工具调用]]

## 相关实体

- [[AG-UI]] · [[CopilotKit]] · [[awesome-llm-apps]] · [[Vue]] · [[TypeScript]]

## 来源

- 规范：<https://a2ui.org/specification/>
- [[raw/articles/awesome-llm-apps-generative-ui]]（`generative-ui-starter-project` 的 A2UI 章节：三概念、双模式、关键文件清单、自定义组件三步法）
