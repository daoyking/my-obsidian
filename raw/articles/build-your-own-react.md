---
title: 构建你自己的 React（Didact）
type: source
tags: [source, react, source-code, didact]
ingested: 2026-08-07
source_url: https://pomb.us/build-your-own-react/
---

# 构建你自己的 React（Didact）

> raw 原始层·AI 只读。来源 https://pomb.us/build-your-own-react/ ，从零构建简化版 React（基于 React 16.8 架构）。

## 八步构建

| 步骤 | 名称 | 简述 |
|---|---|---|
| Step I | createElement | JSX 经 Babel 转译为 createElement 调用，返回 `{type, props}`，props.children 始终为数组，原始值包成 TEXT_ELEMENT |
| Step II | render | 元素→DOM：按 type 创建节点，赋 props，递归挂载子节点 |
| Step III | Concurrent Mode | 用 requestIdleCallback 把渲染拆成工作单元，deadline.timeRemaining()<1 时让出主线程 |
| Step IV | Fibers | 每元素一个 fiber，child/sibling/parent 三指针；performUnitOfWork 按 child→sibling→uncle 遍历 |
| Step V | Render & Commit | 渲染阶段只建 fiber 树+DOM 不挂载（可中断），commit 阶段 commitRoot 一次性挂载（避免不完整 UI） |
| Step VI | Reconciliation | 用 alternate 对比新旧 fiber 树，按 type：相同→复用+UPDATE，不同新元素→PLACEMENT，不同旧 fiber→DELETION |
| Step VII | Function Components | 函数组件 fiber 无 DOM，子元素由执行 `fiber.type(props)` 得到 |
| Step VIII | Hooks | useState：wipFiber+hooks数组+hookIndex；setState 推 action 入 queue 并触发新 wipRoot，下次渲染应用 queue |

## 与真实 React 的差异

- 调度：Didact 用 requestIdleCallback，React 用 scheduler 包
- 优先级：Didact 无（直接丢 wip 树重来），React 基于过期时间戳优先级调度
- Keys：Didact 不支持，React 支持 key-based reconciliation
- Hooks：Didact 仅 useState，React 完整体系

## 核心洞见

- Fiber = 数据结构 + 工作单元 + 可中断调度 三位一体
- render/commit 分离是「可中断渲染」的前提
- alternate 指针连接新旧 fiber 树，是 diff 的基础
