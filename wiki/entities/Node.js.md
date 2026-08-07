---
title: Node.js
type: entity
tags: [runtime, nodejs, backend]
created: 2026-08-07
updated: 2026-08-07
sources: ["[[raw/articles/nodejs-intro]]"]
status: active
---

# Node.js

## 是什么

开源跨平台的 JavaScript 运行时，运行 Chrome 的 **V8 引擎**但不跑在浏览器。应用跑在**单一进程**内，不为每个请求新建线程；标准库提供异步 I/O 原语防止阻塞。单服务器可处理**数千并发连接**，无需管理线程并发。

## 核心特性（来自 [[raw/articles/nodejs-intro]]）

- **单进程 + 非阻塞 I/O**：I/O 时不阻塞空等，响应回来再恢复
- **事件循环（Event Loop）**：分阶段 timers→pending callbacks→poll(I/O)→check(setImmediate)→close；微任务（Promise.then/nextTick）在阶段间执行
- **模块系统**：CommonJS（`.cjs`，require/同步）与 ESM（`.mjs`/`"type":"module"`，import/异步）
- **核心模块**：`fs`/`http`/`stream`/`path`/`os`/`crypto`/`buffer`/`events`(EventEmitter)/`child_process`/`worker_threads`
- **npm 生态**：世界最大包仓库；包管理 npm/pnpm/yarn/bun，版本管理 nvm/fnm/volta

## 适合 / 不适合

- 适合：I/O 密集（API 服务、实时通信、SSR、CLI 工具、构建脚本）
- 不适合：CPU 密集（阻塞单线程事件循环）——用 worker_threads/子进程卸载

## 前端工程师优势

写浏览器 JS 的前端无需学新语言即可写服务端；可自由选 ECMAScript 版本（换 Node 版本即可）。

## 在我项目中的使用

- `king-cli` — 自研 CLI 工具
- `midway-project` — Midway.js 后端框架实践
- 各前端项目的构建与脚本依赖

## 学习资源

- [[raw/articles/nodejs-intro]]（官方简介）

## 相关实体

- [[TypeScript]] · [[Vite]]

## 来源

- [[raw/articles/nodejs-intro]]
