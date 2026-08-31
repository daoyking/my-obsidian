---
title: IPC
aliases: [IPC, Inter-Process Communication, 进程间通信]
type: concept
tags: [system, ipc, process, communication, os]
created: 2026-08-31
updated: 2026-08-31
sources: []
status: seed
---

# IPC（进程间通信）

## 定义

IPC（Inter-Process Communication，进程间通信）是操作系统提供的多个进程之间交换数据和信号量的机制。

## 核心机制

| 机制 | 说明 |
|------|------|
| **管道（Pipe）** | 单向数据流，父子进程常用 |
| **命名管道（FIFO）** | 有名字的管道，无亲缘关系进程可用 |
| **消息队列（Message Queue）** | 内核维护的消息链表 |
| **共享内存（Shared Memory）** | 最快 IPC，需同步机制保护 |
| **信号量（Semaphore）** | 进程同步原语 |
| **套接字（Socket）** | 跨网络进程通信 |
| **信号（Signal）** | 异步事件通知 |

## 在 Electron 中的应用

Electron 应用通过 IPC 实现主进程（Main Process）与渲染进程（Renderer Process）通信：
- `ipcMain` / `ipcRenderer` 模块
- 用于发送消息、调用原生 API、管理窗口状态

## 相关概念

- [[自动更新]]（Electron 应用常见功能）
- [[Electron]]（使用 IPC 的框架）
