# 每日 Mac/iPhone 免费 App 推荐 — 2026-08-14

> 📦 **存放 Agent**: automation-1786437213877（推荐 Mac/iPhone 免费 App 自动化）
> 🔍 **信息来源**: GitHub Trending / HelloGitHub / 少数派 / HN 全网搜索
> 🎯 **筛选标准**: 完全免费 + 提升效率/有趣 + 长期活跃维护
> 📡 **推送渠道**: 飞书 bot (ou_873a51e9ec9b96d2d2e20bbdba9cd8b0) + 微信 push_to_wechat
> 🧭 **今日主线**: macOS 系统增强 + 时间效率（与 8/12 工具集、8/13 AI 编程远程错开）

---

## 1. Cling — macOS 百万文件 100ms 内即时模糊搜索

- **平台**：macOS 14+（Sonoma 及以后）
- **价格**：开源 GPL-3.0；免费版永久可用（Home / Library / Applications 范围 + 500 结果），Pro €12 一次性买断解锁全盘 / 外接卷 / 类型过滤 / 自定义脚本
- **GitHub**：https://github.com/FuzzyIdeas/Cling ｜ 官网 https://www.lowtechguys.com/cling
- **Stars**：~800 | **Commits**：248 | **最新版**：v2.6.10（2026-08-05）
- **作者**：Alin Panaitiu（the low-tech guys，也是 Lunar、Pock 的作者，资深 macOS 开发者）

**一句话**：Windows「Everything」的 macOS 平替——只知道大概文件名，敲几个键就在 100ms 内命中并立刻操作。

**核心功能**：
- 自建二进制索引，百万文件并行模糊搜索 <100ms（甚至带拼写错误也能命中）
- 能搜到 Spotlight 忽略的系统文件、隐藏文件、dotfiles、app 数据
- 扩展名感知查询：输入 `.png icon` 只搜 PNG，`.pdf invoice` 只搜 PDF
- 命中即可操作：复制发送到聊天、拖进 Yoink、用指定 app 打开、上传 Dropshare、跑自定义脚本、批量重命名
- 附带 CLI 工具 + Raycast 插件；`brew install --cask thelowtechguys-cling`

**亮点**：作者是 macOS 圈老牌开源作者，长期稳定维护。如果你讨厌 Spotlight 搜不全、又觉得 Alfred/Raycast 太重，Cling 是纯键盘、极简、为 power user 打造的选择。注意内存占用 300MB–2GB（索引常驻，后台会自动 swap 到磁盘）。

---

## 2. Atoll — 把 MacBook 刘海变成「灵动岛」控制中心

- **平台**：macOS 14+（带刘海的 14/16 寸 MacBook Pro 完整体验，Sequoia 15 优化）
- **价格**：完全免费，GPL-3.0 开源
- **GitHub**：https://github.com/Ebullioscopic/Atoll
- **Stars**：2.7k+ | **Contributors**：44 | **Forks**：163 | **最新版**：v2.2.0
- **热度**：过去 7 天新增 351 stars，GitHub 曾拿过当日第一

**一句话**：平时隐藏于刘海，鼠标靠近即展开一个媒体控制 + 系统监控 + 效率工具的多功能面板，灵感来自 iPhone 灵动岛。

**核心功能**：
- 媒体控制：Apple Music / Spotify 等播放器封面、进度、切歌（含音频频谱可视化）
- 系统监控：CPU / GPU / 内存 / 网络 / 磁盘实时指标，逐核心、温度、频率一应俱全
- 效率工具：剪贴板历史（含图片缩略图）、取色器（HEX/RGB/HSL/SwiftUI Color）、计时器、日历预览
- 锁屏小组件（天气 / 待办 / 充电状态）+ 手势操控（下滑展开、上滑收起）+ 全快捷键自定义

**亮点**：完全免费、贡献者众多、更新频繁。对带刘海 MacBook 用户来说，把「碍眼的刘海」变成「好用的第二屏」，有趣和实用兼得。无刘海机型也可用菜单栏图标 + 悬浮面板模式。

---

## 3. DockDoor — Dock 悬停窗口预览 + Alt-Tab 切换

- **平台**：macOS 13+（Ventura 及以后，Apple Silicon / Intel 双支持）
- **价格**：完全免费开源，GPL-3.0；DockDoor Pro（替换整个 Dock）为独立付费产品，Free 版够用
- **GitHub**：https://github.com/ejbills/DockDoor ｜ 官网 https://dockdoor.net
- **Stars**：4.5k+ | **Forks**：135
- **作者**：ejbills（活跃维护）

**一句话**：给 macOS 补上 Windows/Linux 才有的「悬停 Dock 图标预览窗口」+ 类 Alt-Tab 切换。

**核心功能**：
- 鼠标悬停 Dock 图标 → 实时预览该应用所有打开窗口，直接点选切换（告别盲找）
- Ctrl+Tab 弹出窗口切换器，连续 Tab 前移、Shift+Tab 后退
- 手势 / 键盘控制：自定义 Cmd+key 快捷操作（关闭 / 最小化 / 退出）
- 多显示器 Dock 锁定、日历集成、紧凑列表视图、预览框样式高度可定制
- `brew install --cask dockdoor` 或官网下载

**亮点**：Windows 转 Mac 用户 + 多窗口重度用户刚需。Free 版完全免费开源、隐私友好（无追踪无广告），只需授予辅助功能 + 屏幕录制权限即可。

---

## 4. OnlySwitch — 菜单栏一键开关中心（20+ 开关）

- **平台**：macOS 12+（Monterey，Evolution 功能需 macOS 13+）
- **价格**：完全免费，MIT 开源
- **GitHub**：https://github.com/jacklandrin/OnlySwitch
- **Stars**：5.4k+ | **Forks**：233 | **Commits**：681 | **PR Creators**：22
- **作者**：jacklandrin（自 2021 年持续维护至今）

**一句话**：把「深色模式 / 隐藏桌面图标 / 隐藏刘海 / AirPods / 番茄钟 / 保持常亮」等 20+ 系统开关集中到菜单栏，点一下就切换。

**核心功能**：
- 20+ 原生开关：深色模式、隐藏桌面图标、隐藏刘海、AirPods、静音、清空废纸篓、保持常亮、夜览、隐藏菜单栏图标、低电量模式等
- 番茄钟 / 广播电台播放器 / 屏幕测试等实用小工具
- **Evolution**（2.4+）：用 Shell / AppleScript 自定义任意开关或按钮，可绑定快捷键
- 支持 18+ 语言（含简体中文）、Sonoma 小组件、键盘快捷键触发
- `brew install only-switch`

**亮点**：MIT 开源 + 5.4k stars + 长期维护，是 One Switch（$4.99）的免费开源平替。每天都折腾系统设置的人，装一个能省下大量「去系统设置里翻半天」的时间。

---

## 5. timeto.me — iPhone 目标导向的时间记录 App

- **平台**：iPhone + Android（App Store / Google Play）
- **价格**：完全免费，开源，无广告
- **GitHub**：https://github.com/Medvedev91/timeto.me ｜ 官网 https://timeto.me
- **App Store**：https://apps.apple.com/us/app/id6448869727
- **维护**：作者开发 2 年+，反馈必回，2026-07-01 刚做了一次大更新

**一句话**：以「目标」为导向记录一天时间花销的开源免费时间管理工具，数据纯本地、无需注册。

**核心功能**：
- 围绕目标（Activities）与任务（Tasks）记录时间去向，轻量记录一天时间花销
- 循环任务、任务文件夹、日历视图、计时器
- 数据完全本地化、无需注册、无广告、无追踪
- 开源免费（同类的 aTimeLogger 等多为订阅制）

**亮点**：时间管理里少见的「目标导向 + 本地优先 + 开源免费 + 维护积极」组合。界面纯英文但单词很少，上手门槛低。如果你想知道自己一天的时间到底花在哪、想给目标做时间预算，它比通用番茄钟更贴合「时间复盘」场景。

---

## 汇总对比

| # | App | 平台 | 类型 | 开源协议 | 维护热度 | 推荐理由 |
|---|-----|------|------|---------|---------|---------|
| 1 | Cling | macOS | 即时文件搜索 | GPL-3.0 | ⭐⭐⭐⭐⭐ 800 stars / 老牌作者 | Everything 的 Mac 平替，100ms 全盘模糊搜索 |
| 2 | Atoll | macOS | 刘海灵动岛 | GPL-3.0 | ⭐⭐⭐⭐⭐ 2.7k stars / 44 贡献者 | 刘海变控制中心，有趣又实用 |
| 3 | DockDoor | macOS | 窗口预览切换 | GPL-3.0 | ⭐⭐⭐⭐ 4.5k stars | 补上 macOS 缺失的窗口预览 |
| 4 | OnlySwitch | macOS | 菜单栏开关 | MIT | ⭐⭐⭐⭐⭐ 5.4k stars / 长期维护 | One Switch 免费平替，20+ 开关 |
| 5 | timeto.me | iPhone | 时间记录 | 开源 | ⭐⭐⭐⭐ 2 年+ / 维护积极 | 目标导向 + 本地优先 + 无广告 |

---

## 备注

- 与 8/12（macOS 工具集）、8/13（AI 编程 + 多端远程）错开，8/14 主线为「macOS 系统增强 + 时间效率」。
- 安装提示：Cling / Atoll / DockDoor / OnlySwitch 均支持 `brew install --cask`，优先官方 GitHub Releases（规避 Gatekeeper 拦截）；timeto.me 直接走 App Store。
- 隐私优先级：Cling 纯本地索引；DockDoor / OnlySwitch 完全本地无云端；timeto.me 数据纯本地、无账号无追踪；Atoll 需按需授予日历 / 音乐 / 相机权限。
- 费用说明：仅 Cling 为 freemium（免费版永久可用，Pro €12 一次性解锁全盘范围），其余 4 款完全免费。
