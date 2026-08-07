---
title: mini-vue
type: project
tags: [learning, vue, source-code]
created: 2026-08-07
updated: 2026-08-07
sources: ["[[raw/articles/mini-vue-overview]]"]
status: active
tech_stack: [TypeScript, Vue, Rollup, pnpm]
repo: "~/about-project/mini-vue"
upstream: "https://github.com/cuixiaorui/mini-vue"
---

# mini-vue

## 背景

手写实现 Vue3 核心机制的学习项目，目标是理解响应式系统、编译器与渲染器。位于 `~/about-project/mini-vue`。

## 技术栈

- TypeScript + Rollup 构建
- pnpm monorepo（workspace）
- vitest 测试

## 关键设计

- **reactivity**：`reactive`/`readonly`/`shallowReadonly` + WeakMap 缓存 + Proxy handlers，见 [[响应式]]、[[依赖收集]]、[[snippets/mini-vue-reactive]]
- **runtime-core**：组件/element 渲染、props、emit、proxy、slots、provide/inject、nextTick、watchEffect；渲染器 patch/diff
- **compiler-core**：解析插值/element/text → AST → render 函数
- **runtime-dom**：custom renderer
- 代码命名与 Vue3 源码一致，方便对照

## 包结构

reactivity · runtime-core · compiler-core · runtime-dom · runtime-test · shared · vue（聚合入口）

## 踩坑记录

- （待补充）

## 复盘结论

- Proxy 响应式比 defineProperty 更强大（能监听新增/删除属性、数组索引）
- 编译期优化是 Vue3 性能的关键（Block Tree、静态提升）

## 相关概念

- [[响应式]] · [[依赖收集]] · [[虚拟DOM]] · [[组件化]]

## 相关实体

- [[Vue]] · [[TypeScript]]

## 来源

- [[raw/articles/mini-vue-overview]]
