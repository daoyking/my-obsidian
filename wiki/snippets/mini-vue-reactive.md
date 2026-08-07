---
title: mini-vue reactive() 实现
type: snippet
tags: [code, vue3, reactivity, mini-vue]
created: 2026-08-07
updated: 2026-08-07
sources: ["[[raw/articles/mini-vue-overview]]"]
status: active
---

# mini-vue reactive() 实现片段

> 来源：[[raw/articles/mini-vue-overview]]（~/about-project/mini-vue/packages/reactivity/src/reactive.ts）

## createReactiveObject + WeakMap 缓存

```ts
import {
  mutableHandlers,
  readonlyHandlers,
  shallowReadonlyHandlers,
} from "./baseHandlers";

export const reactiveMap = new WeakMap();
export const readonlyMap = new WeakMap();
export const shallowReadonlyMap = new WeakMap();

export const enum ReactiveFlags {
  IS_REACTIVE = "__v_isReactive",
  IS_READONLY = "__v_isReadonly",
  RAW = "__v_raw",
}

export function reactive(target) {
  return createReactiveObject(target, reactiveMap, mutableHandlers);
}

export function readonly(target) {
  return createReactiveObject(target, readonlyMap, readonlyHandlers);
}

export function shallowReadonly(target) {
  return createReactiveObject(
    target,
    shallowReadonlyMap,
    shallowReadonlyHandlers
  );
}

function createReactiveObject(target, map, handlers) {
  // 已是 proxy 直接返回
  if (target[ReactiveFlags.RAW]) return target;
  // 缓存命中
  const existing = map.get(target);
  if (existing) return existing;
  // 新建 proxy
  const proxy = new Proxy(target, handlers);
  map.set(target, proxy);
  return proxy;
}
```

## 要点

- **WeakMap 缓存**：同一对象多次 `reactive()` 返回同一个 proxy，避免重复代理
- **ReactiveFlags**：用特殊 key 在 get 中判断，实现 `isReactive` / `isReadonly` / `toRaw`，无需额外标记
- **isReactive 的妙处**：读 `__v_isReactive` 时，proxy 进入 get 返回 true；普通对象返回 undefined → `!!` 转布尔

## 相关

- [[响应式]] · [[依赖收集]]
- [[projects/mini-vue]]
