---
title: Vite
type: entity
tags: [tooling, bundler, vite]
created: 2026-08-07
updated: 2026-08-07
sources: ["[[raw/articles/vite-why-fast]]"]
status: active
---

# Vite

## 是什么

尤雨溪创作的下一代前端构建工具。核心思路：把工作分两半——依赖预构建一次、源码基于浏览器原生 ESM 按需服务，使开发服务器启动几乎瞬时，与应用大小无关。生产用 Rollup（正迁移到 Rolldown）打包。

## 核心特性（来自 [[raw/articles/vite-why-fast]]）

- **开发服务器**：原生 ESM + 按需编译，秒级冷启动
- **依赖预构建**：少变的库用 esbuild 预打包一次，即取即用
- **HMR**：基于原生 ESM 的模块级热更新，只更新改动模块，不整页刷新
- **生产构建**：Rollup 打包（嵌套 import 有网络往返，生产仍需 bundle）
- **插件机制**：API 基于 Rollup 约定，框架（Nuxt/SvelteKit/Astro/React Router/SolidStart）天然集成，Vitest/Storybook 也建于其上
- **统一工具链**：Rolldown（Rust）+ Oxc（解析/转换/压缩）统一开发与生产两条管线

## 与 webpack 对比

- 启动：webpack 全量打包后启动；Vite 按需，瞬时
- HMR：webpack 按 bundle 粒度；Vite 模块级，速度与文件数解耦
- 生态：webpack 自成体系；Vite 兼容 Rollup 插件

## 未来方向

- Full bundle mode（超大代码库开发期也打包，减网络往返）
- Environment API（不止 client/SSR，支持 edge runtime/service worker）

## 适用场景

- 几乎所有现代前端新项目的事实标准
- 替代 webpack 的开发体验升级

## 在我项目中的使用

- `my-vue3-vite-ts` · `bun-v3-demo` — Vite 构建实践
- `core` / `CCT` 等新项目

## 学习资源

- [[raw/articles/vite-why-fast]]（官方 Why Vite）

## 相关实体

- [[Vue]] · [[React]] · [[TypeScript]]

## 相关主题

- [[前端工程化]]（构建工具是工程化核心）

## 来源

- [[raw/articles/vite-why-fast]]
