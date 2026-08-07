---
title: TypeScript 官方手册要点
type: source
tags: [source, typescript, docs]
ingested: 2026-08-07
source_url: https://www.typescriptlang.org/docs/handbook/intro.html
---

# TypeScript 官方手册要点

> raw 原始层·AI 只读。来源 typescriptlang.org Handbook。

## 定位

TypeScript 是 JavaScript 的静态类型检查器（static typechecker）——在代码运行前（静态）确保程序类型正确。JS 表达代码单元间关系的能力没随程序复杂度增长，TS 用静态类型补这个缺口。最常见的 bug 是类型错误（某值用在期望另一种值处），TS 专门解决它。TS 是 JS 的超集，编译（转译）为 JS 运行。

## 类型系统

- **基础类型**：`string`/`number`/`boolean`/`null`/`undefined`/`symbol`/`bigint`/`any`/`unknown`/`never`/`void`/数组/元组/对象
- **接口 vs 类型别名**：`interface`（可声明合并、被实现）与 `type`（更灵活，支持联合/交叉/条件）。多数场景可互换
- **字面量类型**：`type Status = "open" | "closed"`
- **联合类型** `A | B` / **交叉类型** `A & B`
- **类型推导**：未标注时 TS 自动推导；`const` 推导为字面量
- **窄化（narrowing）**：通过 `typeof`/`instanceof`/`in`/判别联合/真值检查收窄类型
- **泛型**：`function id<T>(x: T): T`，可约束 `T extends X`
- **高级类型**：条件类型 `T extends U ? X : Y`、映射类型 `{[K in keyof T]: ...}`、工具类型（`Partial`/`Required`/`Pick`/`Omit`/`Record`/`ReturnType`/`Parameters`/`Awaited`）

## tsconfig 关键配置

- `target`：编译目标 ES 版本
- `module`：模块系统（commonjs/esnext/esnext）
- `strict: true`：开启所有严格检查（noImplicitAny/strictNullChecks 等）
- `moduleResolution`：模块解析策略
- `paths`/`baseUrl`：路径别名
- `noEmit`：只类型检查不产出
- `isolatedModules`：与单文件转译器（esbuild/babel）协作

## 与 JS 的关系

- TS 是 JS 超集：合法 JS 即合法 TS
- 类型在编译时擦除（type erasure），运行时无类型信息（除 enum/类）
- 可渐进式采用：`.js` → `.ts`，`any` 作逃生舱
