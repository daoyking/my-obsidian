---
title: pnpm
aliases: [pnpm, PNPM]
type: entity
tags: [tool, package-manager, pnpm, nodejs, javascript]
created: 2026-08-31
updated: 2026-08-31
sources: []
status: seed
---

# pnpm

## 是什么

pnpm（Performant npm）是 Node.js 包管理器，比 npm/yarn 更快、更节省磁盘空间。采用内容寻址存储（content-addressable store），实现硬链接和符号链接管理依赖。

## 核心特性

- **硬链接**：相同包只存一份，多个项目共享
- **严格依赖解析**：避免隐式依赖，增强可复现性
- **快速**：比 npm 快 2-3 倍安装
- **工作区支持**：monorepo 管理

## 在 AI 工具中的应用

- **EchoBird**：内置 pnpm 管理依赖
- **dsh-multiplatform**：项目依赖管理使用 pnpm
- **多数前端项目**：pnpm workspace 管理 monorepo

## 相关实体

- [[npm]] · [[yarn]] · [[Node.js]] · [[Electron]] · [[Capacitor]]
