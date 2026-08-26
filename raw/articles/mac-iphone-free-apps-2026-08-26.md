# Mac & iPhone 免费 App 推荐 — 2026-08-26

> 存放 Agent: automation-1786437213877（每日 09:00 推荐 Mac/iPhone 免费 App）
> 来源: GitHub / WebSearch / 全网检索
> 筛选条件: 免费开源、长期维护、提升工作效率或有趣

---

## 今日主题：AI Agent 工具 + 录屏分享 + 开发编辑器 + 硬件诊断

与今日之前 14 天主题（AI Agent 工作台/终端/AI 远程/系统增强/跨平台协作/效率工具/截图录屏/阅读笔记/本地 AI 基础设施/工具集/隐私/网络/影音设计健康/音频控制）无重叠，本次聚焦「AI 协作工具 + 录屏分享 + 开发者效率 + 硬件诊断」。

---

## Mac / iPhone 推荐

### 1. Cap — 开源录屏分享工具（Loom 平替）
- **GitHub**: [CapSoftware/Cap](https://github.com/CapSoftware/Cap)
- **Stars**: ~21,000+ | **License**: AGPL-3.0 / MIT
- **维护状态**: ✅ 2026年8月26日持续活跃，Tauri + Rust 构建
- **一句话**: 完全开源的 Loom 替代品，支持边录边传 + 本地精细剪辑，AI 自动生成字幕/章节/摘要
- **亮点**:
  - 双模式：Instant（边录边传秒出链接）+ Studio（本地 4K 60fps 剪辑）
  - AI 自动转录、生成标题/章节/字幕，可自托管 S3 存储完全掌控数据
  - Tauri 构建，性能远高于 Electron，CPU 占用 13% vs 628MB
  - 支持 Codex / Claude Code / Cursor / OpenCode 等 AI Agent 通过 MCP 调用
  - 独立 webcam + 屏幕双轨录制，后期可重新布局
  - 免费使用 Studio 模式，无水印无时长限制
- **适合**: 产品经理做演示、开发录 bug 报告、教育录制教程
- **下载**: https://cap.so | [GitHub](https://github.com/CapSoftware/Cap)

---

### 2. CodeEdit — macOS 原生开源代码编辑器
- **GitHub**: [CodeEditApp/CodeEdit](https://github.com/CodeEditApp/CodeEdit)
- **Stars**: ~23,000+ | **License**: MIT
- **维护状态**: ✅ 2026年8月25日更新，229 个贡献者
- **一句话**: 轻量原生 Swift 代码编辑器，VS Code / Nova 免费平替
- **亮点**:
  - 纯 Swift 编写，启动秒开，内存占用极低
  - 支持多语言语法高亮（Tree-sitter 驱动）
  - 内置 Git 集成、Live Preview、终端
  - 扩展系统（CodeEditExtensions）持续丰富
  - 完全开源，无云端依赖，数据永远在本地
  - macOS 原生体验，适配 Apple Silicon 原生渲染
- **适合**: 需要轻量编辑器但不想用 Electron 套壳的开发者
- **下载**: https://codeedit.app | `brew install --cask codeedit`

---

### 3. Crisp — 免费外接显示器控制工具（BetterDisplay/Lunar 平替）
- **GitHub**: [didriksg/Crisp](https://github.com/didriksg/Crisp)
- **Stars**: ~1,025+（7天增长 +417，爆发式增长中）| **License**: MIT
- **维护状态**: ✅ 2026年8月19日更新，持续活跃
- **一句话**: 轻量菜单栏外接显示器控制，HiDPI/亮度/DDC/预设全免费
- **亮点**:
  - 免费开源，无 Pro 锁功能——BetterDisplay/Lunar 收费的功能全在这里
  - 任意显示器 HiDPI 缩放（2K+ 自动识别）
  - DDC 硬件亮度控制 + 软件背光调节双路径
  - 配置预设一键切换（分辨率/亮度/排列）
  - 虚拟显示器、ICC 配色切换、HDR 增强
  - 轻量 Swift 原生，几乎不占资源
- **适合**: 外接显示器用户、多屏生产力场景
- **下载**: `brew install --cask didriksg/tap/crisp`

---

### 4. whatcable — USB-C 线缆能力诊断工具
- **GitHub**: [darrylmorley/whatcable](https://github.com/darrylmorley/whatcable)
- **Stars**: ~8,077+ | **License**: MIT
- **维护状态**: ✅ 2026年5月更新（约 3 个月前），持续维护
- **一句话**: 菜单栏一键查看 USB-C 线缆真实规格，告别"这根线能不能传视频"的困惑
- **亮点**:
  - 读取 IOKit 系统信息，无需 root/SIP 修改/私有 API
  - 显示 USB 版本、传输速度（480Mbps~80Gbps）、充电功率（5W~240W）、视频输出支持
  - 一键诊断"为什么我的 Mac 充电这么慢"
  - 多端口分别查看，即插即刷新
  - 轻量 Swift 原生，几乎零占用
- **适合**: 线缆收藏家、经常换设备/线材的用户、开发者排查硬件问题
- **下载**: `brew install --cask whatcable`

---

### 5. Hot — macOS CPU 热节流监控（菜单栏）
- **GitHub**: [macmade/Hot](https://github.com/macmade/Hot)
- **Stars**: ~3,000+ | **License**: MIT
- **维护状态**: ✅ 2024年7月最后更新，22 个版本发布，作者 XS-Labs 长期维护
- **一句话**: 菜单栏实时显示 CPU 温度与热节流状态，Intel/Apple Silicon 双适配
- **亮点**:
  - Intel Mac：显示 CPU 温度、速度限制（热节流）、调度器限制、可用核心数
  - Apple Silicon：显示系统热压力、温度，橙色预警（低于 60% 限速自动变色）
  - 传感器图表视图，实时监控历史曲线
  - 原生 Swift 构建，菜单栏常驻极低占用
- **适合**: 视频渲染、编译构建等高性能场景用户，关注 Mac 散热健康
- **下载**: https://github.com/macmade/Hot/releases | https://xs-labs.com/en/apps/hot/

---

## 对比速览

| App | 平台 | Stars | License | 维护活跃度 | 核心价值 |
|-----|------|-------|---------|-----------|---------|
| Cap | Mac/Win | ~21k | AGPL-3.0/MIT | ✅ 极活跃 | 开源录屏 + AI 字幕 + 自托管 |
| CodeEdit | Mac | ~23k | MIT | ✅ 活跃 | 原生 Swift 轻量代码编辑器 |
| Crisp | Mac | ~1k（爆发中） | MIT | ✅ 活跃 | 外接显示器控制免费平替 |
| whatcable | Mac | ~8k | MIT | ✅ 活跃 | USB-C 线缆规格诊断 |
| Hot | Mac | ~3k | MIT | ✅ 长期维护 | CPU 热节流监控 |

---

## 安装建议

| 优先级 | App | 安装方式 |
|--------|-----|---------|
| ⭐⭐⭐ | Cap | https://cap.so 直接下载（含 AI 功能 + MCP Server）|
| ⭐⭐⭐ | CodeEdit | `brew install --cask codeedit` |
| ⭐⭐ | Crisp | `brew install --cask didriksg/tap/crisp`（外接显示器用户刚需）|
| ⭐⭐ | whatcable | `brew install --cask whatcable` |
| ⭐ | Hot | https://github.com/macmade/Hot/releases 下载 DMG |

---

*推荐时间: 2026-08-26 09:01 (北京时间)*
*来源验证: GitHub WebSearch + GitHub Trending + Reporank*
