---
title: Electron
aliases: [electron, Electron.js]
type: entity
tags: [framework, electron, desktop, cross-platform, nodejs]
created: 2026-08-31
updated: 2026-08-31
sources: []
status: seed
---

# Electron

## 是什么

Electron 是 GitHub（现 Microsoft）维护的跨平台桌面应用框架，基于 Chromium + Node.js，允许使用 Web 技术构建原生桌面应用。

## 核心特性

- **Chromium 渲染**：完整的浏览器环境
- **Node.js 集成**：原生文件系统、网络、进程访问
- **Native API**：通过 Node.js 调用原生能力（菜单、托盘、窗口管理）
- **打包工具**：electron-builder / electron-packager

## 在 AI 工具中的应用

- **Cursor**：AI 代码编辑器，基于 Electron
- **Claude Code**：终端 AI 编程助手（部分版本）
- **Obsidian**：知识库应用，基于 Electron
- **VS Code**：微软代码编辑器，基于 Electron

## 与 Capacitor 对比

| 特性 | Electron | Capacitor |
|------|----------|-----------|
| 目标平台 | 桌面 | 移动端 + 桌面 |
| 包体积 | 大（含 Chromium） | 小 |
| Node.js 原生 | 完整 | 受限 |
| 适用场景 | 桌面应用 | 移动端 Web 应用 |

## 相关实体

- [[Capacitor]] · [[IPC]] · [[自动更新]] · [[pnpm]]
