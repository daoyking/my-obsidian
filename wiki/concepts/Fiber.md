---
title: Fiber
aliases: [Fiber架构, Fiber树, Fiber节点]
type: concept
tags: [frontend, react, fiber, architecture]
created: 2026-08-07
updated: 2026-08-07
sources: ["[[raw/articles/react-technology-revealed]]", "[[raw/articles/build-your-own-react]]"]
status: active
---

# Fiber

## 定义

React 16 引入的架构：把渲染工作拆成可中断、可恢复的小工作单元。Fiber 既是**数据结构**（每个元素一个 fiber 节点），也是**工作单元**，也是**可中断调度**的基础。解决了老架构（Stack Reconciler 递归不可中断）阻塞主线程的问题。

## 为什么重要

- 让 React 支持并发渲染（Concurrent Mode）：高优任务（用户输入）可打断低优渲染
- 是 React 现代特性（Suspense、并发更新、Lane 优先级）的基石
- 理解 Fiber 是理解 React 性能与调度的前提

## 核心机制

来自 [[raw/articles/react-technology-revealed]] 与 [[raw/articles/build-your-own-react]]：

### 数据结构：三指针链表
每个 fiber 节点通过三个指针连接：
- `child`：第一个子节点
- `sibling`：下一个兄弟节点
- `parent`：父节点
- `performUnitOfWork` 处理完当前 fiber 后，按 **child → sibling → uncle（parent 的 sibling）** 顺序找下一个工作单元

### 工作循环
- `requestIdleCallback`（Didact 简化）/ Scheduler（真实 React）驱动
- `deadline.timeRemaining() < 1` 时让出主线程，记忆下一个工作单元，下次空闲继续
- render 阶段建 fiber 树（可中断），commit 阶段同步改 DOM（不可中断）

### Reconciliation 与 alternate
- `alternate` 指针连接新旧 fiber 树，是 [[虚拟DOM]] diff 的基础
- 按 type 对比：相同→复用 DOM + UPDATE；不同新元素→PLACEMENT；不同旧 fiber→DELETION
- `effectTag` 标记变更，commit 阶段批量执行

## 优先级：Lane 模型

真实 React 用 Lane（车道位图）表示优先级，支持多优先级并发与打断，比 Didact 的「直接丢 wip 树重来」精细。

## 与 Vue 的对比

- React：Fiber + 可中断协调，整体重渲染靠调度
- Vue3：响应式精准更新，无 Fiber，更新粒度到组件/属性级（见 [[响应式]]）

## 相关概念

- [[虚拟DOM]] · [[Reconciliation]]（待建，即协调）· [[响应式]]（Vue 对照）

## 相关实体

- [[React]]

## 相关主题

- [[前端工程化]]

## 来源

- [[raw/articles/react-technology-revealed]]（React 技术揭秘）
- [[raw/articles/build-your-own-react]]（构建你自己的 React）
