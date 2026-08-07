---
title: Reconciliation
aliases: [协调, 协调过程, Diff协调]
type: concept
tags: [frontend, react, reconciliation, vdom]
created: 2026-08-07
updated: 2026-08-07
sources: ["[[raw/articles/react-technology-revealed]]", "[[raw/articles/build-your-own-react]]"]
status: seed
---

# Reconciliation（协调）

## 定义

框架对比新旧虚拟 DOM 树、计算最小变更集并应用到真实 DOM 的过程。React 中特指基于 [[Fiber]] 的可中断两阶段协调。

## 为什么重要

- 是「声明式 UI」能高效更新 DOM 的核心机制
- 决定更新性能：diff 算法好坏直接影响渲染效率

## React 的两阶段协调（来自 [[raw/articles/react-technology-revealed]]）

- **render 阶段**（可中断）：beginWork 建 fiber、completeWork 建 effect list；按 type+key 复用/替换/删除，`effectTag` 标记（UPDATE/PLACEMENT/DELETION）
- **commit 阶段**（同步）：before mutation / mutation / layout，按 effect list 一次性改 DOM
- `alternate` 指针连接新旧 fiber 树，是对比基础（见 [[raw/articles/build-your-own-react]]）

## Diff 规则

- 同层比较（不跨层）
- type 不同直接替换整棵子树
- 多节点按 key 复用，尽量减少 DOM 操作

## Vue 的对应

Vue 没有 Fiber 两阶段，但同样有 patch（新旧 VNode diff），并靠编译期静态标记（Block Tree）优化 diff 范围。见 [[虚拟DOM]]。

## 相关概念

- [[Fiber]] · [[虚拟DOM]] · [[组件化]]

## 相关实体

- [[React]] · [[Vue]]

## 来源

- [[raw/articles/react-technology-revealed]]
- [[raw/articles/build-your-own-react]]
