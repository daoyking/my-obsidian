---
title: mini-vue
type: project
tags: [learning, vue, source-code]
created: 2026-08-07
updated: 2026-08-07
sources: []
status: active
tech_stack: [JavaScript, Vue]
repo: "~/about-project/mini-vue"
---

# mini-vue

## 背景

手写实现 Vue3 核心机制的学习项目，目标是理解响应式系统、编译器与渲染器。位于 `~/about-project/mini-vue`。

## 技术栈

- 原生 JavaScript
- 参照 [[Vue]] 3 源码思路

## 关键设计

- 实现 `reactive` / `ref` / `effect`（基于 Proxy 依赖收集与派发更新）
- 实现编译器：模板 → AST → render 函数
- 实现渲染器：patch / diff

## 踩坑记录

- （待补充）

## 复盘结论

- Proxy 响应式比 defineProperty 更强大（能监听新增/删除属性、数组索引）
- 编译期优化是 Vue3 性能的关键（Block Tree、静态提升）

## 相关概念

- [[响应式]] · [[虚拟DOM]] · [[组件化]]

## 相关实体

- [[Vue]]
