---
title: npm
aliases: [npm, NPM, Node Package Manager]
type: entity
tags: [tool, package-manager, nodejs, javascript]
created: 2026-08-31
updated: 2026-08-31
sources: []
status: seed
---

# npm

## 是什么

npm（Node Package Manager）是 Node.js 的默认包管理器，全球最大的开源包注册表，托管超过 200 万个包。

## 核心命令

```bash
npm install <package>      # 安装包
npm install                # 安装所有依赖
npm run <script>           # 运行脚本
npm init                   # 初始化项目
npm publish                # 发布包
```

## 与 pnpm/yarn 对比

| 特性 | npm | pnpm | yarn |
|------|-----|------|------|
| 安装速度 | 慢 | 快（硬链接） | 中等 |
| 磁盘占用 | 大（重复存储） | 小（共享存储） | 中等 |
| 严格性 | 宽松 | 严格 | 中等 |
| 工作区 | 支持 | 原生支持 | 支持 |

## 相关实体

- [[pnpm]] · [[Node.js]] · [[Electron]]
