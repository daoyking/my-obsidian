---
title: dsh-multiplatform
type: project
tags: [electron, deepseek-harness, desktop-app, multi-platform, capacitor, harmonyos]
created: 2026-08-24
updated: 2026-08-24
sources: ["[[raw/articles/github-dsh-multiplatform-2026-08-24]]"]
status: active
tech_stack: [Electron, TypeScript, Capacitor, pnpm, electron-updater, DeepSeek API]
repo: "https://github.com/daoyking/dsh-multiplatform"
---

# dsh-multiplatform

## 背景

DeepSeek Harness 多端应用项目：将 DeepSeek Harness 从 Web 端扩展到桌面端（macOS/Windows）+ 移动端（iOS/Android）+ 鸿蒙（ArkWeb），并集成 DeepSeek 开放平台 API、社区插件市场、自动更新等生产级能力。

- 当前状态：✅ v0.1.2（2026-08-18 发布）
- 上游 fork（含 PWA/认证/手机布局）：`daoyking/dsh-harness-fork`

## 技术栈

- **桌面端**: Electron + TypeScript，electron-builder 打包，electron-updater 自动更新
- **移动端**: Capacitor（Android/iOS 原生壳）
- **鸿蒙端**: ArkWeb 原生壳（harmonyos-app/）
- **包管理**: pnpm workspace，内置 pnpm shim（应用自带 pnpm，无需系统 Node）
- **API 集成**: DeepSeek 开放平台（余额查询、用量统计、API Key 管理）

## 工程结构

| 目录 | 说明 |
|---|---|
| desktop-app/ | Electron 桌面端（主进程 + 渲染进程 + IPC） |
| mobile-app/ | Capacitor 原生壳（Android/iOS 工程 + 连接页） |
| harmonyos-app/ | 鸿蒙 ArkWeb 原生壳 |
| docs/ | 设计文档（PR 描述/真机手册/推送指南/发布指引） |
| scripts/ | 构建/部署脚本（install-marketplace.mjs, deploy-update.sh 等） |

## 关键设计

- **多端统一架构**: 桌面端通过 IPC 调用主进程能力（DeepSeek 账户、插件安装、自动更新），渲染进程保持轻量化
- **内置 pnpm**: 应用自带 pnpm 包并注入 Host PATH，本机无系统 Node/pnpm 时插件安装与更新也能工作（`pnpm-shim.js`）
- **社区插件市场**: 接入 dshmarket/web-ui-all，支持 github: / npm: 源插件的一键安装（`plugin-install.js` + `community-patch.js`）
- **自动更新面板**: 新版本就绪 → 更新日志 → 重启升级，面板驱动流程；更新源 404 时给出明确错误与配置指引
- **DeepSeek 账户面板**: 实时余额（`/user/balance`）、本地用量统计、充值/平台跳转，API Key 仅在主进程使用
- **自愈机制**: 打包时通过 afterPack 钩子为 macOS 可执行文件包一层自愈启动器（unset `ELECTRON_RUN_AS_NODE` 等泄漏变量后 exec 真实二进制）
- **prefer-offline 策略**: 确保 profile 的 pnpm-workspace.yaml 含 `prefer-offline: true`，避免 github: 源依赖在 codeload.github.com 不稳定时 ECONNRESET

## 本周变更（2026-08-17 ~ 2026-08-24）

> 详见 `[[raw/articles/github-dsh-multiplatform-2026-08-24]]`

### v0.1.0 → v0.1.2 密集迭代（08-17 ~ 08-18）

1. **v0.1.0 首发**（23d69ed2）：桌面端 + 移动端 + 鸿蒙端多端应用结构建立
2. **社区插件市场接入**（1778d6dc）：install-marketplace.mjs + peer 依赖修复
3. **DeepSeek 账户面板**（0bdb8b7c）：余额/用量/充值，版本升至 0.1.1
4. **v0.1.2**（52be848b）：版本查看/手动确认更新/右侧面板默认收起
5. **应用打不开自愈修复**（50c7f120）：ELECTRON_RUN_AS_NODE 泄漏防护

### 生产级能力完善（08-18 ~ 08-19）

6. **自动更新面板 + 内置 pnpm**（d20d2440）⭐：更新面板、内置 pnpm shim、DeepSeek 开放平台面板升级
7. **插件市场安装/更新失败修复**（0caa660e）⭐：prefer-offline 策略避免 ECONNRESET
8. **dsh-skins 皮肤链接自愈**（5701bfc5）：ensureSkinLinks() 启动时自动重建悬空符号链接
9. **社区插件一键直接安装**（50b99305）⭐：plugin-install.js + community-patch.js，替代复制安装命令
10. **打包修复**（e1c4b6a0）：files 白名单排除构建产物，artifactName 去空格，dmg 从 3.5GB+ 降至 163MB

## 踩坑记录

- **ELECTRON_RUN_AS_NODE 泄漏**: 环境变量泄漏导致 Electron 二进制以纯 Node 模式启动，打包版 main.js 不执行、进程静默退出（exit 0）。修复：afterPack 钩子包一层自愈启动器，启动前 unset 两变量
- **pnpm github 源 ECONNRESET**: codeload.github.com 网络不稳定导致插件安装失败。修复：ensureProfilePreferOffline() 确保 prefer-offline: true，优先用本地 store
- **dsh-skins 符号链接悬空**: pnpm 离线安装/版本更新会漏建皮肤包顶层链接，导致 cordis 加载器报 Cannot find package。修复：ensureSkinLinks() 启动时幂等重建缺失链接
- **electron-builder files 白名单**: release 目录被整体打进 app 导致安装包膨胀到 3.5GB+。修复：build.files 白名单排除构建产物
- **artifactName 含空格**: electron-builder 生成的 latest-mac.yml 引用连字符名，与实际文件名不一致导致更新源 404。修复：改用 `dsh-desktop-${version}-${os}-${arch}` 命名
- **peer 依赖漏包**: electron-builder 扁平依赖未声明 peer 依赖导致运行时缺失。修复：package.json 显式声明 19 个 peer 依赖

## 复盘结论

- **多端应用的核心是统一架构**: 桌面/移动/鸿蒙三端共享同一套 Web UI，通过原生壳（Electron/Capacitor/ArkWeb）桥接原生能力
- **自愈机制是生产级应用的标配**: 环境变量泄漏、符号链接悬空等问题在开发环境可能不显现，但打包后用户环境中频发，需在启动时自动修复
- **内置运行时工具降低用户门槛**: 应用自带 pnpm，用户无需预先安装 Node.js 环境，大幅提升开箱即用体验
- **prefer-offline 是 github: 源依赖项目的通用优化**: GitHub codeload 网络不稳定是常见问题，优先本地缓存可大幅降低安装失败率
- **打包配置需精细化**: files 白名单、artifactName 命名规则、afterPack 钩子等都是 electron-builder 的关键配置点，直接影响安装包体积与更新源可用性

## 相关概念

- [[Electron]] · [[Capacitor]] · [[自动更新]] · [[IPC]]

## 相关实体

- [[DeepSeek]] · [[pnpm]]

## 来源

- `[[raw/articles/github-dsh-multiplatform-2026-08-24]]`
