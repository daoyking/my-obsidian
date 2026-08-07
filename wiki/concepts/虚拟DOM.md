---
title: 虚拟DOM
aliases: [Virtual DOM, VDOM]
type: concept
tags: [frontend, vdom, performance]
created: 2026-08-07
updated: 2026-08-07
sources: []
status: seed
---

# 虚拟DOM

## 定义

用普通 JS 对象描述真实 DOM 树的结构（标签名、属性、子节点），在状态变化后生成新虚拟树，与旧树 diff 得出最小变更集，再批量 patch 到真实 DOM。

## 为什么重要

- 减少直接操作 DOM 的次数（DOM 操作昂贵）
- 跨平台：同一棵虚拟树可渲染到浏览器、SSR、原生
- 声明式编程：描述「界面应该是什么样」而非「怎么改」

## 核心机制

1. `createElement` / JSX → 虚拟节点（VNode）
2. 状态更新触发重新渲染 → 新 VNode 树
3. diff（协调 Reconciliation）：同层比较、key 复用、类型不同直接替换
4. patch：将差异应用到真实 DOM

## React 的两阶段协调（来自 [[raw/articles/react-technology-revealed]]）

React 16+ 把 diff 拆成可中断的两阶段（基于 [[Fiber]]）：
- **render 阶段**（可中断）：beginWork 建 fiber、completeWork 建 effect list；按 type 复用/替换/删除，用 `effectTag` 标记
- **commit 阶段**（同步）：before mutation / mutation / layout，一次性改 DOM
- Diff 规则：单节点按 type+key；多节点按 key 复用，详见 [[Fiber]]

## Vue 的 patch（来自 [[raw/articles/vue-technology-revealed]]）

- render 函数生成 VNode 树 → patch 新旧 VNode
- Vue3 编译期 `optimize`/Block Tree 标记静态节点，跳过静态子树 diff，比 Vue2 更快

## 示例

```js
// 极简 VNode
const vnode = { tag: 'div', props: { id: 'app' }, children: ['hello'] }
```

## 各框架对比

- [[React]]：经典虚拟 DOM + [[Fiber]] 协调（可中断）
- [[Vue]]：虚拟 DOM + 编译期静态标记（Block Tree）优化 diff
- [[Svelte]] / [[SolidJS]]：无虚拟 DOM，编译期/细粒度更新（反例对照）

## 实现参考

- [[projects/mini-react]]：手写 fiber 协调算法
- [[projects/mini-vue]]：runtime-core 实现 patch/diff（见 [[raw/articles/mini-vue-overview]]）
- [[raw/articles/build-your-own-react]]：八步手写 Reconciliation（alternate 对比 + effectTag）

## 相关概念

- [[Fiber]] · [[响应式]] · [[依赖收集]] · [[组件化]]

## 来源

- [[raw/articles/mini-vue-overview]]
- [[raw/articles/react-technology-revealed]]
- [[raw/articles/build-your-own-react]]
