---
title: Vue
aliases: [Vue.js, Vue3]
type: entity
tags: [frontend, framework, vue]
created: 2026-08-07
updated: 2026-08-07
sources: ["[[raw/articles/mini-vue-overview]]", "[[raw/articles/vue-technology-revealed]]"]
status: active
---

# Vue

## 是什么

尤雨溪创作的渐进式 JavaScript 框架。核心是响应式数据绑定与组件化，兼顾易上手与能力强。Vue 2 用 `Object.defineProperty`、Vue 3 改用 `Proxy` 实现响应式，配合 Composition API。

## 核心特性

- 响应式系统：`reactive` / `ref` / `computed`，基于 Proxy（见 [[响应式]]）
- 单文件组件（SFC）：`.vue` 模板 + 脚本 + 样式
- Composition API：逻辑复用与组织
- 模板编译 + 虚拟 DOM（见 [[虚拟DOM]]）
- 生态：Vue Router、Pinia、Vite、Nuxt

## 源码架构（Vue2，来自 [[raw/articles/vue-technology-revealed]]）

四方面八章：
- **数据驱动**：`new Vue` → mount → render → update → patch 全流程
- **组件化**：合并配置、生命周期、组件注册、异步组件
- **响应式原理**：Observer / Dep / Watcher 三件套（详见 [[依赖收集]]）
- **编译**：`parse`（模板→AST）→ `optimize`（标记静态节点）→ `generate`（→render 函数）
- 扩展：event / v-model / slot / keep-alive / transition
- 生态：Vue-Router / Vuex

## Vue2 → Vue3 演进

| 维度 | Vue2 | Vue3 |
|---|---|---|
| 响应式 | defineProperty（[[raw/articles/vue-technology-revealed]]）| Proxy（[[raw/articles/mini-vue-overview]]）|
| 编译 | optimize 标静态 | Block Tree + 静态提升 |
| API | Options API | Composition API |

## 适用场景

- 快速构建中后台、内容站
- 渐进式迁移老项目
- 团队对模板语法接受度高

## 在我项目中的使用

- `my-vue3-vite-ts` — Vue3 + Vite + TS 实践
- `learn-vue-blog` — Vue 学习博客
- `mini-vue` — 手写 Vue 核心机制（见 [[projects/mini-vue]]）
- `ccui` / `eladmin-web` — Vue 组件库 / 后台模板
- [[hmnmt-web]] — Vue3 + Element Plus 企业官网 1:1 复刻（含 node:sqlite 后端）

## 学习资源

- [[raw/articles/vue-family-bookmarks]]（Chrome 书签 vue family，133 条生态资源）
- [[raw/articles/vue-technology-revealed]]（Vue.js 技术揭秘，Vue2 源码分析）
- [[raw/articles/mini-vue-overview]]（mini-vue 手写实现）
- [[前端面试]] Vue 专题

## 相关实体

- [[React]] · [[Svelte]] · [[SolidJS]] · [[TypeScript]] · [[Vite]]

## 相关概念

- [[响应式]] · [[依赖收集]] · [[虚拟DOM]] · [[组件化]] · [[状态管理]]

## 来源

- [[raw/articles/mini-vue-overview]]
- [[raw/articles/vue-technology-revealed]]
- [[raw/articles/vue-family-bookmarks]]
