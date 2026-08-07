---
title: Svelte
aliases: [SvelteKit]
type: entity
tags: [frontend, framework, svelte, compiler]
created: 2026-08-07
updated: 2026-08-07
sources: []
status: seed
---

# Svelte

## 是什么

Rich Harris 创作的编译型前端框架。与传统运行时框架不同，Svelte 在构建时把组件编译成原生命令式 JS，无虚拟 DOM，bundle 体积小、运行时开销低。

## 核心特性

- 编译时优化：无运行时框架代码
- 响应式声明：`$:` 语句、`$state`（Svelte 5 Runes）
- 无虚拟 DOM，直接操作 DOM
- 单文件组件 `.svelte`
- SvelteKit：官方全栈框架（路由 / SSR）

## 适用场景

- 对包体积敏感的场景（嵌入式 Webview、移动端 H5）
- 偏好少抽象、贴近原生的开发体验
- 内容站、营销页

## 在我项目中的使用

- `my-svelte-project` — Svelte 实践

## 相关实体

- [[React]] · [[Vue]] · [[SolidJS]] · [[Vite]]

## 相关概念

- [[响应式]] · [[组件化]] · [[虚拟DOM]]（Svelte 的反例对比）

## 来源

- （待 Ingest：svelte.dev 官方文档）
