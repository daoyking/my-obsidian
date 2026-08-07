---
title: React 技术揭秘（源码分析）
type: source
tags: [source, react, source-code]
ingested: 2026-08-07
source_url: https://react.iamkasong.com/
upstream_version: React v17.0.0-alpha
---

# React 技术揭秘

> raw 原始层·AI 只读。来源 https://react.iamkasong.com/ ，自顶向下的 React 源码分析教程。

## 定位

严谨易懂的 React 源码分析，自顶向下：理念 → 架构 → 实现。当前版本 v17.0.0-alpha。不预设观点，所有观点来自 React 核心团队公开分享。

## 三篇结构

### 理念篇
- React 理念、老架构（Stack Reconciler 递归不可中断）、新架构（Fiber 可中断异步）
- **Fiber 架构心智模型**：把渲染拆成可中断的小工作单元
- Fiber 实现原理：每个元素一个 fiber 节点，child/sibling/parent 三指针链表
- Fiber 工作原理：performUnitOfWork 按 child→sibling→uncle 遍历

### 架构篇（Reconciliation 协调）
- **render 阶段**：beginWork（创建 fiber）、completeWork（构建 effect list）
- **commit 阶段**：before mutation / mutation / layout 三子阶段，同步执行 DOM 操作

### 实现篇
- **Diff 算法**：单节点 Diff、多节点 Diff（按 type 复用/替换/删除，effectTag 标记）
- **状态更新**：Update 对象、优先级（Lane 模型）、ReactDOM.render、setState
- **Hooks**：数据结构（hook 链表挂在 fiber 上）、useState/useReducer、useEffect、useRef、useMemo/useCallback
- **Concurrent Mode**：Scheduler 原理（requestIdleCallback 思路 + 自己的实现）、Lane 优先级模型、异步可中断更新、高优打断、batchedUpdates、Suspense

## 关键概念

- **Fiber**：节点 + 工作单元 + 可中断
- **Reconciliation**：render（可中断，建 fiber 树）+ commit（同步，改 DOM）
- **Scheduler**：决定何时执行工作单元，基于优先级
- **Lane 模型**：优先级用 lane（车道）位图表示，支持多优先级并发
- **合成事件**：React 自己的事件系统，抹平浏览器差异
