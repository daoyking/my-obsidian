---
type: source
ingested: 2026-08-24
source_repo: "https://github.com/daoyking/dsh-multiplatform"
source_type: github-weekly
period: "2026-08-17 ~ 2026-08-24"
---

# GitHub 周动态：daoyking/dsh-multiplatform（2026-08-24）

> 本周（2026-08-17 ~ 2026-08-24）dsh-multiplatform 仓库重要变更快照。
> 本周发布了 v0.1.0 → v0.1.2 三个版本，是 DeepSeek Harness 多端应用桌面端的密集迭代周。

## 仓库概要

DeepSeek Harness 多端应用：桌面(macOS/Windows) + 移动端(iOS/Android/鸿蒙) + PWA + 远程访问认证。桌面端基于 Electron，支持自动更新、社区插件市场、DeepSeek 开放平台集成。

- 当前状态：✅ v0.1.2（本周密集迭代：账户面板 → 自愈修复 → 更新面板 → 插件一键安装）

## 本周 Release

| Tag | 发布日期 | 名称 |
|---|---|---|
| v0.1.0 | 2026-08-17 | DeepSeek Harness Desktop v0.1.0 |
| v0.1.1 | 2026-08-17 | DeepSeek Harness Desktop v0.1.1 |
| v0.1.2 | 2026-08-18 | DeepSeek Harness Desktop v0.1.2 |

## 本周重要变更

### 1. v0.1.0 首发（23d69ed2，08-17）⭐ 重大里程碑

**DeepSeek Harness 多端应用桌面端正式首发**

- `desktop-app/`: Electron 桌面端，开箱即用、官方同步、自动更新、双平台打包配置
- `mobile-app/`: Capacitor 原生壳（Android/iOS 工程 + 连接页）
- `harmonyos-app/`: 鸿蒙 ArkWeb 原生壳
- `docs/`: 设计文档（PR 描述/真机手册/推送指南）
- 上游 fork（含 PWA/认证/手机布局）在 `daoyking/dsh-harness-fork`

### 2. 社区插件市场接入（1778d6dc，08-17）

- `scripts/install-marketplace.mjs` + `main.js --marketplace` 接线（装 dshmarket/web-ui-all）
- `package.json` 显式声明 19 个 peer 依赖（electron-builder 扁平依赖漏包修复）
- README 市场使用说明

### 3. 桌面端默认 home + 应用菜单（4f0ca217，08-17）

- 默认 `DSH_HOME` 改回 `~/.deepseek-harness`（会话/插件/市场与浏览器实例同步）
- `detectWorkspace` 从 `storages/workspace.json` 探测最近工作区，会话即时可见
- 应用菜单：检查更新（electron-updater 手动触发）、关于（版本/工作区/局域网 IP/指引）
- 附带：市场安装脚本（install-marketplace.mjs）

### 4. DeepSeek 账户面板（0bdb8b7c，08-17）⭐

- 主进程 `deepseek-account.js`: 读 `~/.deepseek-harness/.credentials.yaml` 的 Key，实时查 `/user/balance`，统计 session_projcache 本地用量，充值/平台外链跳转
- 账户面板窗口（余额卡片 + 本地用量 + 刷新/充值按钮），应用菜单新增入口
- Key 只在主进程使用，渲染层经 preload IPC 只拿结果
- 修复 publish 配置指向 daoyking/dsh-multiplatform，版本升至 0.1.1

### 5. 本地无感升级脚本 + --open-account 文档（b7d3bf89，08-17）

- 配套文档更新

### 6. v0.1.2 — 版本号查看/手动确认更新（52be848b，08-18）⭐

1. 版本信息：账户面板新增「版本信息」区块（应用版本 + Electron/Chromium/Node），经 `app:getVersion` IPC 取主进程 `app.getVersion()`
2. 更新流程改为用户可控：发现新版本弹窗询问是否下载；下载完成后弹窗由用户点击「立即安装」（选稍后则退出应用时自动安装）；不再自动下载
3. 右侧导航栏（aionui 预览/文件树面板）默认收起：preload 主世界注入 `localStorage.getItem` 补丁，无用户显式偏好时按 collapsed 处理，用户手动切换过的项目仍保留选择

### 7. 应用打不开自愈修复（50c7f120，08-18）⭐

**根因**：环境变量 `ELECTRON_RUN_AS_NODE=1`（或 Chromium 不兼容的 `NODE_OPTIONS`）泄漏进启动环境时，Electron 二进制以纯 Node 模式启动，打包版 main.js 根本不执行、进程静默退出（exit 0），表现为"应用打不开"。

**修复**：
- `src/main.js`: 顶部自愈，检测到泄漏时用干净环境重新拉起自身（覆盖 dev `electron .` 场景）
- `scripts/afterPack-selfheal.cjs`(新增): electron-builder afterPack 钩子，打包时把 macOS 可执行文件包一层自愈启动器（unset 两变量后 exec 真实二进制），打包版双击/终端/open 启动均可自愈；Windows 不打补丁（破坏 NSIS 快捷方式）
- `scripts/launch-app.mjs`(新增): 跨平台干净环境启动器，`npm run launch`
- `package.json`: 接线 afterPack 钩子 + launch 脚本
- README.md: 常见问题章节（打不开/会话不见/发不出消息）

已验证：新 dmg 安装到 /Applications 后，带 `ELECTRON_RUN_AS_NODE=1` 用 `open` 启动，应用存活、Host 正常拉起。

### 8. 自动更新面板 + 内置 pnpm + DeepSeek 开放平台面板（d20d2440，08-18）⭐ 重大

- **自动更新**: 新增更新面板（新版本就绪/更新日志/重启升级），菜单「检查更新」打开面板；下载自动进行，用户点击「重启升级」或退出时自动安装；更新源 404/网络不可达时给出明确错误与 `DSH_DESKTOP_UPDATE_URL` 配置指引
- **内置 pnpm**: 应用自带 pnpm 包并注入 Host PATH（`pnpm-shim.js` 用 Electron 内置 Node 运行 `pnpm.cjs`），本机无系统 Node/pnpm 时侧边栏「检查更新」与插件安装也能工作；`install-marketplace.mjs` 同步使用内置 pnpm
- **DeepSeek 开放平台**: 菜单/面板升级为完整开放平台（API Key 状态与指纹、余额、本地用量、管理 API Keys / 充值 / 用量明细跳转），Key 只在主进程
- 冒烟测试通过：Host 启动/HTTP 200/#root 渲染/正常停止；余额查询(CNY)、本地用量、pnpm shim 在真实 profile 执行 pnpm list 均验证通过

### 9. 发布与部署指引（97afafc3，08-18）

- README: 发布机制更新为面板驱动流程（新版本就绪/更新日志/重启升级），补充内置 pnpm 说明与更新源 404 处理
- 新增 `docs/DESKTOP-RELEASE-GUIDE.md`: 重新打包方式（A: CI 自动发布需仓库公开；B: DSH_DESKTOP_UPDATE_URL 自托管源）、最终用户重启升级流程、验证记录

### 10. 打包修复（e1c4b6a0，08-19）

- `build.files`: 白名单打包（src/scripts/package.json/README.md），排除 release/release-test 构建产物、日志、probe 测试文件——修复 release 目录被整体打进 app 导致安装包膨胀到 3.5GB+ 的问题（dmg 现为 163MB/zip 176MB）
- `artifactName`: `dsh-desktop-${version}-${os}-${arch}` 替代含空格的 `${productName}`——electron-builder 生成的 latest-mac.yml 引用连字符名，与实际文件名不一致导致更新源 404；新名称天然一致
- `.gitignore`: 补充 release-test/ 排除

### 11. 自托管更新源部署脚本（0d4ddd35，08-19）

- `scripts/deploy-update.sh`: 一键构建 mac 安装包 → 部署到 release/update/ → 校验 latest-mac.yml 与文件名一致性 → 可选 --serve 本机起更新服务器
- 自动探测 Node 22+（无系统 Node 时用镜像下载的独立二进制）
- `docs/DESKTOP-RELEASE-GUIDE.md`: 方案 B 增加一键脚本用法与 Node 镜像下载指引

### 12. 带自托管更新源启动脚本（1a137643，08-19）

方案一（本机/局域网更新）：自动检测局域网 IP + 更新源可达性，带 `DSH_DESKTOP_UPDATE_URL` 启动已安装应用，随后菜单检查更新即可完成升级。

### 13. 插件市场安装/更新失败修复（0caa660e，08-19）⭐

**根因**：profile 含 github: 源依赖（dsh-paste-input/dsh-at-file/dsh-memory-plugin），pnpm 安装/更新任何插件时重新解析并下载这些 github tarball；codeload.github.com 网络不稳定（ECONNRESET/超时）导致安装报错，即使包已在本地 store 缓存。

**修复**：
- `pnpm-shim.js` 新增 `ensureProfilePreferOffline()`: 确保 profile 的 pnpm-workspace.yaml 含 `prefer-offline: true`，使 pnpm 优先用本地 store，github 源命中缓存后不再访问 codeload（幂等，保留注释）
- `main.js` 启动时对 profiles/web 执行该确保（未装市场时也生效）
- `install-marketplace.mjs` 安装前执行同一确保
- 实测：pnpm install 288-451ms，pnpm add 25s（仅下载新包），pnpm update --latest 73s 全部成功，不再 ECONNRESET

### 14. dsh-skins 皮肤链接自愈（5701bfc5，08-19）

**根因**：pnpm 离线安装/版本更新会漏建 @linxin666/dsh-skins 的皮肤包顶层链接（dsh-client-ui-skin-* 12 个），cordis 加载器报 Cannot find package 'dsh-client-ui-skin-dragon-heir' 使整个插件树无法加载——Host 重启后首次发消息/交互出现异常或超时。

**修复**：
- 新增 `src/skin-links.js`: `ensureSkinLinks()` 检查 dsh-skins 的 skins/ 目录，为缺失/悬空的皮肤包重建顶层符号链接（幂等，仅修复缺失项）
- `main.js` 启动时在 Host spawn 前调用，应用每次启动自愈
- 实测：删除 dragon-heir 链接后 ensureSkinLinks 自动重建；Host 启动 0.9s 正常，首页 200；profile 依赖树已恢复到 0.1.2 一致状态

### 15. 社区插件一键直接安装（50b99305，08-19）⭐

**背景**：community-plugins 的插件卡片只提供「复制安装命令」（`dsh plugin --profile web add ...`），用户需去终端手动执行。桌面端应一键安装。

**实现**：
- `src/plugin-install.js`: 主进程 IPC `plugin:install` — 规范化 github url/github:o/r/npm 包名为安装源，经内置 pnpm + dsh plugin add 执行；node shim（指回 Electron-as-Node）+ pnpm shim 注入 PATH，无系统 Node 也可用
- `src/community-patch.js`: 启动时对 community-plugins 的 lib/client.js 打补丁，把按钮 onClick 改为优先 `directInstall(window.dshDesktop.plugin.install)`，无桌面 API 时回退复制命令；文案改为「直接安装/安装中…/已安装」（幂等）
- `src/pnpm-shim.js`: ensureProfilePreferOffline 同时确保 `allowBuilds: ["*"]`（pnpm 10+ 默认拦截 prepare 脚本，github 插件常需 prepare 构建）
- `src/main.js` / `src/preload.cjs`: 注册 `plugin:install` IPC 并暴露 `window.dshDesktop.plugin`
- 实测：installPlugin 安装 github:guo6x/dsh-pilot 26.6s 成功，Host 启动正常，补丁幂等，清理后无残留

### 16. install-local.sh 脚本（c1e2a28d，08-19）

添加 install-local.sh 脚本并更新 package.json。

### 17. bump lockfile to 0.1.4（5bf161ca，08-19）

chore(desktop): bump lockfile to 0.1.4 + package keywords; ignore orphaned root lockfile。

## 无新 Release（08-18 之后）

v0.1.3 为自愈修复发布版（chore bump），后续 08-19 的修复未再打新版本。

## 关键 commit 索引

| SHA | 日期 | 摘要 | 重要性 |
|---|---|---|---|
| 23d69ed2 | 08-17 | DeepSeek Harness 多端应用桌面端首发 | ⭐ |
| 1778d6dc | 08-17 | 社区插件市场接入 + peer 依赖修复 | ⭐ |
| 0bdb8b7c | 08-17 | DeepSeek 账户面板（余额/用量/充值） | ⭐ |
| 52be848b | 08-18 | v0.1.2 — 版本查看/手动确认更新/面板默认收起 | ⭐ |
| 50c7f120 | 08-18 | 应用打不开自愈修复（ELECTRON_RUN_AS_NODE 泄漏防护） | ⭐ |
| d20d2440 | 08-18 | 自动更新面板 + 内置 pnpm + DeepSeek 开放平台面板 | ⭐ |
| 0caa660e | 08-19 | 插件市场安装/更新失败修复（prefer-offline 避免 ECONNRESET） | ⭐ |
| 5701bfc5 | 08-19 | dsh-skins 皮肤链接自愈 | |
| 50b99305 | 08-19 | 社区插件一键直接安装 | ⭐ |

## 文件变更明细（精选）

### 23d69ed2（多端应用首发）
- `desktop-app/`: 新增 Electron 桌面端（整个目录）
- `mobile-app/`: 新增 Capacitor 原生壳（Android/iOS）
- `harmonyos-app/`: 新增鸿蒙 ArkWeb 原生壳
- `docs/`: 新增设计文档

### 50c7f120（自愈修复）
- `src/main.js`: 新增顶部自愈逻辑
- `scripts/afterPack-selfheal.cjs`: 新增 afterPack 钩子
- `scripts/launch-app.mjs`: 新增跨平台启动器
- `README.md`: 新增常见问题章节

### d20d2440（更新面板 + 内置 pnpm）
- `src/auto-updater.js`: 新增自动更新面板逻辑
- `src/pnpm-shim.js`: 新增内置 pnpm 注入
- `src/deepseek-platform.js`: 升级开放平台面板

### 0caa660e（prefer-offline 修复）
- `src/pnpm-shim.js`: 新增 ensureProfilePreferOffline()
- `src/main.js`: 启动时调用
- `scripts/install-marketplace.mjs`: 安装前执行

### 50b99305（插件一键安装）
- `src/plugin-install.js`: 新增（主进程 IPC handler）
- `src/community-patch.js`: 新增（启动时补丁）
- `src/preload.cjs`: 暴露 window.dshDesktop.plugin

## 与既有体系的关联

- 桌面端自愈机制（`50c7f120`）是 Electron 应用生产环境常见问题的解决方案——环境变量泄漏防护是打包应用健壮性的重要一环
- 内置 pnpm（`d20d2440`）体现了「零外部依赖」设计哲学：应用自带运行时工具，降低用户环境门槛
- prefer-offline 策略（`0caa660e`）是 github: 源依赖项目的通用优化方案——GitHub codeload 网络不稳定时，优先本地缓存可大幅降低安装失败率
- 皮肤链接自愈（`5701bfc5`）与 pnpm 符号链接机制相关，是 Electron + pnpm 混合依赖管理下的特有坑点
