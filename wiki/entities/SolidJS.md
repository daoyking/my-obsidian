---
title: SolidJS
aliases: [Solid]
type: entity
tags: [frontend, framework, solidjs]
created: 2026-08-07
updated: 2026-08-07
sources: []
status: seed
---

# SolidJS

## 是什么

Ryan Carniato 创作的高性能响应式 UI 库。写法类似 React（JSX + 组件），但底层是细粒度响应式，无虚拟 DOM 协调，更新精准到表达式级别。

## 核心特性

- 细粒度响应式：Signal / Memo / Effect（见 [[响应式]]）
- 无虚拟 DOM，编译后精准更新
- 写法贴近 React 函数组件，但组件只执行一次
- 与 TypeScript 结合良好

## 适用场景

- 对性能要求高的交互场景
- 喜欢 React 心智模型但想要更细粒度更新
- 学习响应式底层原理的对照实验

## 在我项目中的使用

- `my-solidjs-app-ts` — SolidJS + TS 实践

## 相关实体

- [[React]] · [[Vue]] · [[Svelte]] · [[TypeScript]]

## 相关概念

- [[响应式]] · [[组件化]] · [[虚拟DOM]]

## 来源

- （待 Ingest：solidjs.com 官方文档）
