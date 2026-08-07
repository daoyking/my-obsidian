---
title: React
aliases: [React.js]
type: entity
tags: [frontend, framework, react]
created: 2026-08-07
updated: 2026-08-07
sources: ["[[raw/articles/react-technology-revealed]]", "[[raw/articles/build-your-own-react]]"]
status: active
---

# React

## 是什么

Meta（原 Facebook）开源的声明式、组件化 UI 库。以虚拟 DOM、JSX、单向数据流与 Hooks 为核心。React 16 起引入 [[Fiber]] 架构，支持可中断的并发渲染。

## 核心特性

- 组件化：函数组件 + Hooks（useState / useEffect / useMemo / useRef 等）
- [[虚拟DOM]] + 协调算法（Reconciliation）
- [[Fiber]] 架构：可中断渲染、Lane 优先级、Concurrent Mode
- JSX：JS 中写类 HTML 语法
- 单向数据流：props 向下，事件向上
- 生态：Next.js（SSR/SSG）、React Router、状态管理（Redux/Zustand）

## 源码架构（来自 [[raw/articles/react-technology-revealed]]）

自顶向下三层：
- **理念层**：React 理念 → 老架构（Stack Reconciler 递归不可中断）→ 新架构（Fiber 可中断）
- **架构层**：render 阶段（beginWork 建 fiber / completeWork 建 effect list，**可中断**）+ commit 阶段（before mutation / mutation / layout，**同步改 DOM**）
- **实现层**：Diff 算法（单/多节点按 type 复用）、状态更新（Update 对象 + Lane 优先级）、Hooks（hook 链表挂在 fiber）、Scheduler、合成事件

## Hooks 实现要点

- hook 是挂在 fiber 上的链表节点，按调用顺序匹配（故 Hooks 不能放条件分支里）
- useState：setState 推 action 入 queue → 触发新 wipRoot → 下次渲染应用 queue 得新 state
- useEffect：commit 阶段执行，依赖数组决定是否重跑

## 手写视角（来自 [[raw/articles/build-your-own-react]]）

八步从零构建：createElement → render → Concurrent（requestIdleCallback 拆工作单元）→ Fibers → Render&Commit 分离 → Reconciliation（alternate 对比+effectTag）→ 函数组件 → useState。

## 适用场景

- SPA、复杂交互界面、中后台系统
- 需要并发渲染/优先级调度的场景

## 在我项目中的使用

- `my-react-app` — React 基础实践
- `mini-react` — 手写 React 核心机制（见 [[projects/mini-react]]）
- `ecommercestore-supplier-web` — 电商供应商端
- `awesomereactapp` — React 练习

## 学习资源

- [[raw/articles/react-family-bookmarks]]（Chrome 书签 react family，30 条生态资源）
- [[raw/articles/react-technology-revealed]]（React 技术揭秘，源码分析）
- [[raw/articles/build-your-own-react]]（构建你自己的 React，八步手写）

## 相关实体

- [[Vue]] · [[Svelte]] · [[SolidJS]] · [[TypeScript]] · [[Vite]]

## 相关概念

- [[Fiber]] · [[虚拟DOM]] · [[组件化]] · [[状态管理]] · [[响应式]]

## 来源

- [[raw/articles/react-technology-revealed]]
- [[raw/articles/build-your-own-react]]
- [[raw/articles/react-family-bookmarks]]
- （待 Ingest：官方文档 react.dev）
