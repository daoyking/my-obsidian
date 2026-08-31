---
title: Capacitor
aliases: [Capacitor, Apache Cordova Capacitor]
type: entity
tags: [framework, capacitor, cross-platform, mobile, web-to-native]
created: 2026-08-31
updated: 2026-08-31
sources: []
status: seed
---

# Capacitor

## 是什么

Capacitor 是 Ionic 团队维护的跨平台原生运行时，允许 Web 应用（HTML/CSS/JS）以原生应用形式运行在 iOS、Android、Desktop 平台。

## 核心特性

- **Web 优先**：用 Web 技术构建，打包为原生容器
- **原生插件**：通过 Native Plugin API 访问设备能力（相机、地理位置、推送等）
- **多平台**：支持 iOS、Android、Desktop（Electron）、Web

## 与 Electron 对比

| 特性 | Capacitor | Electron |
|------|-----------|----------|
| 技术栈 | Web（JS/HTML/CSS） | Chromium + Node.js |
| 包体积 | 小（~50MB） | 大（~200MB+） |
| 原生能力 | 插件受限 | Node.js 全能力 |
| 适用场景 | 移动端优先 | 桌面端优先 |

## 相关实体

- [[Electron]] · [[pnpm]] · [[自动更新]]
