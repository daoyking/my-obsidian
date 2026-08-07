---
title: Vue.js 技术揭秘（源码分析）
type: source
tags: [source, vue, source-code]
ingested: 2026-08-07
source_url: https://ustbhuangyi.github.io/vue-analysis/
upstream_version: Vue.js 2.5.17-beta.0
---

# Vue.js 技术揭秘

> raw 原始层·AI 只读。来源 https://ustbhuangyi.github.io/vue-analysis/ ，全方位深度解析 Vue.js 2.5.17 实现原理。

## 四大方面 / 八章

### 核心
1. **准备工作**：Flow、源码目录设计、构建方式、入口与初始化
2. **数据驱动**：模板→DOM 全流程：`new Vue` → mount → render → update → patch
3. **组件化**：组件原理 + 合并配置、生命周期、组件注册、异步组件
4. **深入响应式原理**：响应式对象创建、**依赖收集**、**派发更新**、计算属性 vs 侦听属性、组件更新过程

### 编译
5. **编译**：三核心流程 `parse` → `optimize` → `codegen`

### 扩展
6. **扩展**：event、v-model、slot、keep-alive、transition、transition-group 原理

### 生态
7. **Vue-Router**：路由注册、matcher、路径切换实现
8. **Vuex**：初始化、API、插件

## 关键机制（Vue2）

### 响应式：Observer / Dep / Watcher
- **Observer**：`Object.defineProperty` 遍历对象每个 key，定义 getter/setter
- **Dep**：每个 key 一个依赖管理器；getter 时 `dep.depend()` 收集当前 Watcher
- **Watcher**：执行 getter 时把自己设为 `Dep.target`，触发依赖收集；setter 时 `dep.notify()` 通知所有 Watcher 更新
- 这是 Vue2 响应式基础，Vue3 改用 Proxy（见 [[响应式]]、[[依赖收集]]、[[snippets/mini-vue-reactive]]）

### 编译：parse / optimize / generate
- `parse`：模板字符串 → AST
- `optimize`：标记静态节点（静态子树不参与 patch，提性能）
- `generate`：AST → render 函数代码字符串

### 虚拟 DOM 与 patch
- render 函数生成 VNode 树
- patch：新旧 VNode diff，最小化 DOM 操作（见 [[虚拟DOM]]）

## Vue2 vs Vue3（结合 [[raw/articles/mini-vue-overview]]）
- 响应式：defineProperty → Proxy（可监听新增/删除属性、数组索引）
- 编译：Vue3 引入 Block Tree、静态提升等编译期优化
- API：Options API → Composition API
