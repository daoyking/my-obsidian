---
title: yarn
aliases: [yarn, Yarn, Yarn Berry]
type: entity
tags: [tool, package-manager, nodejs, javascript]
created: 2026-08-31
updated: 2026-08-31
sources: []
status: seed
---

# yarn

## 是什么

yarn 是 Facebook（现 Meta）开发的 Node.js 包管理器，以速度和可靠性著称。

## 核心特性

- **并发安装**：并行安装依赖，速度快
- **确定性构建**：yarn.lock 保证跨机器一致
- **工作区支持**：monorepo 管理
- **屏蔽**：离线安装、重试机制

## 版本演进

- **yarn 1.x（Classic）**：最初的实现
- **yarn 2.x+（Berry）**：完全重写，支持 PnP（Plug'n'Play）模式
- **Current**：yarn 4.x（node-modules 模式更常见）

## 与 npm/pnpm 对比

| 特性 | npm | pnpm | yarn |
|------|-----|------|------|
| 安装速度 | 慢 | 快 | 快 |
| 严格性 | 宽松 | 最严格 | 中等 |
| PnP 支持 | 无 | 无 | 有 |

## 相关实体

- [[npm]] · [[pnpm]] · [[Node.js]]
