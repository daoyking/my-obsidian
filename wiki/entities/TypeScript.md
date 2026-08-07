---
title: TypeScript
aliases: [TS]
type: entity
tags: [language, typescript]
created: 2026-08-07
updated: 2026-08-07
sources: ["[[raw/articles/typescript-handbook]]"]
status: active
---

# TypeScript

## 是什么

微软开源的 JavaScript 超集与**静态类型检查器**——在代码运行前确保类型正确。是 JS 的超集，编译（转译）为 JS 运行。大型项目类型安全的基石。

## 核心特性（来自 [[raw/articles/typescript-handbook]]）

- **类型系统**：基础类型 + 接口 `interface` / 类型别名 `type` + 字面量类型 + 联合 `A|B` / 交叉 `A&B`
- **类型推导**：未标注自动推导；`const` 推导为字面量
- **窄化（narrowing）**：`typeof`/`instanceof`/`in`/判别联合/真值检查收窄类型
- **泛型**：`function id<T>(x: T): T`，可约束 `T extends X`
- **高级类型**：条件类型 `T extends U ? X : Y`、映射类型、工具类型（`Partial`/`Pick`/`Omit`/`Record`/`ReturnType`/`Awaited`）
- **工具链**：`tsc` 编译器 + `tsconfig.json`（`strict`/`target`/`module`/`paths`/`noEmit` 等）
- 与现代框架深度集成（React/Vue/Solid 一等公民）

## 类型擦除

类型在编译时擦除，运行时无类型信息（除 `enum`/类）——故不能用类型做运行时判断，需类型守卫或运行时校验库（zod 等）。

## 适用场景

- 中大型项目、团队协作、库/SDK 开发（提供类型定义）
- 任何想降低运行时类型错误的项目；可渐进式采用（`.js`→`.ts`，`any` 逃生舱）

## 在我项目中的使用

- `my-vue3-vite-ts` · `my-solidjs-app-ts` — TS + 框架实践
- `core` / `CCT` / `ecommercestore-supplier-web` — 业务项目类型安全

## 学习资源

- [[raw/articles/typescript-handbook]]（官方手册要点）

## 相关实体

- [[React]] · [[Vue]] · [[SolidJS]] · [[Node.js]]

## 相关概念

- [[组件化]]（类型化组件 Props）

## 来源

- [[raw/articles/typescript-handbook]]
