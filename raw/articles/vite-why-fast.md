---
title: Vite 为什么快（官方 Why Vite）
type: source
tags: [source, vite, docs]
ingested: 2026-08-07
source_url: https://vite.dev/guide/why.html
---

# Vite 为什么快

> raw 原始层·AI 只读。来源 vite.dev/guide/why.html。

## 起源与核心思路

传统打包工具（bundler）在浏览器展示任何内容前要先处理整个应用——应用越大启动越慢。Vite 反其道：利用浏览器原生 ESM，把工作分两半：

- **依赖**（少变的库）：用快速原生工具**预构建一次**，即取即用
- **源码**（频繁变的应用代码）：基于原生 ESM **按需服务**，浏览器只加载当前页所需，Vite 在文件被请求时才转译

→ 开发服务器启动几乎瞬时，与应用大小无关。

## HMR

编辑文件时，Vite 用基于原生 ESM 的 HMR 只更新该模块，不整页刷新、不等重新构建。

## 生产构建

无打包 ESM 在开发好，但生产时嵌套 import 带来额外网络往返，仍需打包优化。Vite 生产用 Rollup（现正迁移到 Rolldown）。

## 统一工具链（Rolldown + Oxc）

原 Vite 底层两套：esbuild（开发快速编译）+ Rollup（生产优化），两条管线不一致。**Rolldown**（Rust 写）把两者统一成单一 bundler，兼容既有插件 API，用 **Oxc** 做解析/转换/压缩。端到端一条管线，开发到生产一致。

## 插件机制

插件 API 基于 Rollup 约定，框架（Nuxt/SvelteKit/Astro/React Router/SolidStart）天然集成，Vitest/Storybook 也建于其上。

## 未来方向

- **Full bundle mode**：超大代码库无打包网络请求过多，探索开发期也打包
- **Environment API**：不止 client/SSR，可定义 edge runtime/service worker 等自定义环境
- 与 Oxc/Rolldown 协作快速采用新语言特性

## 与 webpack 对比

- 启动：webpack 全量打包后启动；Vite 原生 ESM 按需，瞬时
- HMR：webpack 按 bundle 粒度；Vite 模块级，速度与文件数解耦
- 生态：webpack 插件自成体系；Vite 兼容 Rollup 插件
