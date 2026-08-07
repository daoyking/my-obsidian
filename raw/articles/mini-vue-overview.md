---
title: mini-vue 项目概览（源码快照）
type: source
tags: [source, mini-vue, vue3]
ingested: 2026-08-07
source_repo: "~/about-project/mini-vue"
upstream: "https://github.com/cuixiaorui/mini-vue"
---

# mini-vue 项目概览

> 本文件是 raw/ 原始层，AI 只读不改。来源：本地 `~/about-project/mini-vue`（上游 cuixiaorui/mini-vue）。

## 项目定位

实现最简 vue3 模型，用于深入学习 vue3 核心逻辑。把 vue3 源码中最核心的逻辑剥离出来，只留核心逻辑供学习。代码命名与源码保持一致，方便对照查找。

## 技术栈

- TypeScript + Rollup 构建
- pnpm monorepo（workspace）
- vitest 测试

## 包结构（packages/）

| 包 | 职责 |
|---|---|
| `reactivity` | 响应式系统：reactive / readonly / shallowReadonly / ref / computed / effect / track / trigger |
| `runtime-core` | 运行时核心：组件/element 渲染、props、emit、proxy、slots、provide/inject、nextTick、watchEffect |
| `compiler-core` | 编译核心：解析插值/element/text |
| `runtime-dom` | DOM 运行时：custom renderer |
| `runtime-test` | runtime-core 的测试环境 |
| `shared` | 共享工具 |
| `vue` | 对外聚合入口 |

## reactivity 模块 API

导出（`reactivity/src/index.ts`）：
- `reactive` / `readonly` / `shallowReadonly` / `isReadonly` / `isReactive` / `isProxy`
- `ref` / `proxyRefs` / `unRef` / `isRef`
- `effect` / `stop` / `ReactiveEffect`
- `computed`

## reactive 实现要点（reactive.ts）

- 三个 WeakMap 缓存代理结果：`reactiveMap` / `readonlyMap` / `shallowReadonlyMap`（避免重复代理同一对象）
- `createReactiveObject(target, map, handlers)` 统一创建代理
- `ReactiveFlags` 枚举：`__v_isReactive` / `__v_isReadonly` / `__v_raw`
- `isReactive` / `isReadonly` 通过读取 flag 触发 get 判断（proxy 会进入 get，普通对象返回 undefined）
- `toRaw`：非 proxy 直接返回，proxy 返回 `__v_raw`
- baseHandlers 提供 `mutableHandlers` / `readonlyHandlers` / `shallowReadonlyHandlers`

## 关键源码片段

```ts
export const reactiveMap = new WeakMap();
export const enum ReactiveFlags {
  IS_REACTIVE = "__v_isReactive",
  IS_READONLY = "__v_isReadonly",
  RAW = "__v_raw",
}
export function reactive(target) {
  return createReactiveObject(target, reactiveMap, mutableHandlers);
}
export function isReactive(value) {
  return !!value[ReactiveFlags.IS_REACTIVE];
}
```

## Tasking 完成度（README 摘录）

- runtime-core：组件/element 类型、props、emit、proxy、slots、provide/inject、nextTick、getCurrentInstance、watchEffect ✓
- reactivity：reactive/ref/readonly/computed、track/trigger、嵌套 reactive、toRaw、effect.scheduler/stop、isProxy、shallowReadonly、proxyRefs ✓
- compiler-core：解析插值/element/text ✓
- runtime-dom：custom renderer ✓
