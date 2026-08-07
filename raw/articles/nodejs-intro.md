---
title: Node.js 简介（官方）
type: source
tags: [source, nodejs, docs]
ingested: 2026-08-07
source_url: https://nodejs.org/learn/getting-started/introduction-to-nodejs
---

# Node.js 简介

> raw 原始层·AI 只读。来源 nodejs.org/learn。

## 定位

Node.js 是开源、跨平台的 JavaScript 运行时环境。运行 Google Chrome 的 **V8 引擎**，但不跑在浏览器里。性能优秀。

## 单进程 + 非阻塞 I/O

- Node.js 应用跑在**单一进程**内，不为每个请求新建线程
- 标准库提供异步 I/O 原语，防止 JS 代码阻塞；库也多用非阻塞范式
- 执行 I/O（读网络/查数据库/访问文件系统）时，不阻塞线程空等，响应回来再恢复操作
- → 单台服务器可处理**数千并发连接**，无需管理线程并发（线程并发是 bug 重灾区）

## 事件循环（Event Loop）

Node 用事件循环调度异步任务，分阶段：timers（setTimeout/setInterval）→ pending callbacks → idle/prepare → poll（I/O 回调）→ check（setImmediate）→ close callbacks。微任务（Promise.then、queueMicrotask、process.nextTick）在每个阶段间执行。

## 模块系统

- **CommonJS**（`.cjs`）：`require`/`module.exports`，同步加载，默认
- **ESM**（`.mjs` 或 package.json `"type":"module"`）：`import`/`export`，异步，与浏览器一致
- 两者可混用但有限制

## 核心模块

`fs`（文件系统）/ `http`/`https`（服务器与客户端）/ `stream`（流）/ `path`/ `os`/ `crypto`/ `buffer`/ `events`（EventEmitter）/ `child_process`/ `worker_threads`（多线程逃生舱）。

## npm 生态

世界最大包仓库。包管理：npm/pnpm/yarn/bun。版本管理：nvm/fnm/volta。

## 适合 / 不适合

- 适合：I/O 密集（API 服务、实时通信、SSR、CLI 工具、构建脚本）
- 不适合：CPU 密集（会阻塞单线程事件循环）——可用 worker_threads 或子进程卸载

## 前端工程师优势

写浏览器 JS 的前端开发者无需学新语言即可写服务端代码。可自由选用 ECMAScript 版本（换 Node 版本即可），还能用 flag 开实验特性。
