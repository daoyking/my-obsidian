# 每日 Mac/iPhone 免费 App 推荐 — 2026-08-15

> 📦 **存放 Agent**: automation-1786437213877（推荐 Mac/iPhone 免费 App 自动化）
> 🔍 **信息来源**: GitHub Trending / HelloGitHub / 少数派 / HN 全网搜索
> 🎯 **筛选标准**: 完全免费 + 提升效率/有趣 + 长期活跃维护
> 📡 **推送渠道**: 飞书 bot (ou_873a51e9ec9b96d2d2e20bbdba9cd8b0) + 微信 push_to_wechat
> 🧭 **今日主线**: 终端 & AI 开发者工具（与 8/12 工具集、8/13 AI 远程、8/14 系统增强错开）

---

## 1. cmux — 为 AI 编程 Agent 而生的原生终端工作区

- **平台**：macOS（Apple Silicon / Intel，原生 Swift + AppKit，非 Electron）
- **价格**：免费开源（GPL-3.0），本地使用免费；Pro/Team 为可选云服务
- **GitHub**：https://github.com/manaflow-ai/cmux ｜ 官网 https://cmux.com
- **Stars**：~24.5k | **Forks**：~2k | **最新版**：v0.64.19（2026-07-14）
- **作者**：Manaflow AI（Lawrence Chen & Austin Wang，2026 年 1 月发布，持续高频迭代）

**一句话**：基于 Ghostty 渲染引擎、专为「同时跑多个 AI 编程 Agent」设计的 macOS 终端，让每个 Agent 的状态一目了然。

**核心功能**：
- **通知环（Notification Rings）**：某个 Agent 需要你介入时，对应面板出现蓝色光环 + 侧边栏未读徽章 + 系统通知带上下文（不再是笼统的 "Claude is waiting"）
- **垂直侧边栏工作区**：每个标签显示 Git 分支、PR 状态、工作目录、监听端口、最新通知，⌘1–9 切换
- **内置可编程浏览器**：⌘Shift+L 打开 WebKit 面板，Agent 可通过 CLI/socket API 快照、点击、输入页面（浏览器 API 移植自 Vercel agent-browser）
- **Unix Socket API**：`/tmp/cmux.sock` 暴露 JSON-RPC，可用任意语言编排 Agent（生成分屏、发通知、读屏幕）
- 兼容现有 `~/.config/ghostty/config`；`brew tap manaflow-ai/cmux && brew install --cask cmux`

**亮点**：Hashimoto（Ghostty 作者）亲自背书。如果你同时开多个 Claude Code / Codex / OpenCode 会话，这个工具能把「逐个切窗口找 Agent」的痛苦彻底解决。

---

## 2. OpenCode — MIT 开源的终端 AI 编程 Agent

- **平台**：macOS / Linux / Windows（终端 + 桌面 Beta + IDE 集成）
- **价格**：完全免费开源（MIT），模型费用自带 key 或按需付费
- **GitHub**：https://github.com/anomalyco/opencode ｜ 官网 https://opencode.ai
- **Stars**：~19 万 | **Contributors**：~900 | **语言**：TypeScript
- **安装**：`curl -fsSL https://opencode.ai/install | bash` 或 `brew install anomalyco/tap/opencode`

**一句话**：本地优先的终端 AI 编程 agent，支持 75+ 模型提供商（Models.dev），LSP 感知，多会话并行。

**核心功能**：
- 模型无关：75+ 提供商（含本地模型），也可接 GitHub Copilot / ChatGPT 账号
- LSP 感知：模型直接获得语言智能（补全、定义跳转）
- 多会话 Agent 在同一项目并行 + 会话分享链接
- 内置 Build / Plan / subagent 三种 Agent 姿态
- 配置合并：全局 + 项目 `opencode.json` 合并，支持自定义 baseURL / 模型黑白名单

**亮点**：MIT 完全开源、社区极热（~19 万 stars）。工具本身免费，只付模型费用（或接自己的 API key 零成本）。比 Claude Code 更灵活，适合想掌控「agent 产品」与「模型账单」分离的开发者。

---

## 3. yap — macOS 本地语音转文字命令行工具

- **平台**：macOS（命令行，Swift 编写，调用苹果原生 Speech.framework）
- **价格**：完全免费，CC0-1.0 开源
- **GitHub**：https://github.com/finnvoor/yap
- **Stars**：~1.6k | **Forks**：62 | **作者**：finnvoor
- **安装**：`brew install yap` 或 Mint

**一句话**：全本地、无需联网、无需 API key 的 macOS 语音转文字 CLI，还内置 MCP 服务器。

**核心功能**：
- 四种转录模式：文件转录 / 实时系统声音 / 麦克风听写 / 双源混合（会议场景）
- 输出格式：纯文本 / SRT / VTT / JSON（可含词级时间戳），支持敏感词过滤、语言指定
- **MCP 集成**：`yap mcp` 启动，让 Claude Code / Codex 等 AI 代理直接调它转录音视频
- Unix 哲学：可管道组合，配合 `yt-dlp` 一步给视频生成字幕

**亮点**：所有识别本地完成，隐私极佳；`brew install yap` 一条命令搞定。做会议纪要、视频字幕、播客转写的免费本地首选。

---

## 4. electerm — 开源全能 SSH/SFTP 终端 + 文件管理

- **平台**：macOS / Windows / Linux / Android / HarmonyOS
- **价格**：完全免费开源（MIT）
- **GitHub**：https://github.com/electerm/electerm ｜ 官网 https://electerm.html5beta.com
- **最新版**：v5.0.6（2026-08-06）
- **维护**：自 2018 年持续维护至今（7 年+），更新极其频繁

**一句话**：一个软件 = 终端模拟器 + SSH/SFTP 客户端 + 文件管理器 + 串口/RDP/VNC 客户端，Xshell 的开源替代。

**核心功能**：
- SSH / SFTP / Telnet / 串口 / RDP / VNC / Spice / FTP 多协议
- 双击远程文件直接编辑、SFTP 拖拽传输、Zmodem（rz/sz）+ Trzsz 支持
- 全局热键隐藏/呼出窗口（Guake 风格）、多标签 + 分屏
- AI 助手：接入任意 OpenAI 兼容 API 生成/解释命令
- 书签/主题/快速命令同步到 GitHub/Gitee Gist、WebDAV
- MCP Widget + `ssh://` 深链接

**亮点**：MIT 开源、7 年+ 长期维护、全平台覆盖，服务器运维 / 后端联调必备。完全免费、无订阅，比 Xshell / Termius 免费版限制更少。

---

## 5. FlowDown — 开源原生 AI 写作与翻译客户端（macOS + iPhone）

- **平台**：macOS + iOS（Swift 原生）
- **价格**：完全免费开源（AGPL-3.0），自带 API key
- **GitHub**：https://github.com/Lakr233/FlowDown
- **Stars**：~1.2k | **Forks**：112 | **作者**：Lakr233（知名 iOS 开发者，Copilot for Xcode 作者）

**一句话**：隐私友好的原生 AI 写作 + 翻译客户端，接自己的 API key，无订阅、无云端依赖。

**核心功能**：
- AI 写作、翻译、润色，接入自己配置的模型 API
- 原生 Swift 体验流畅，注重隐私（数据不过第三方服务器）
- 支持 macOS + iOS 双端

**亮点**：Lakr233 是苹果圈资深开源作者（Copilot for Xcode、Twine 等），长期维护。想要一个「可控、本地、无订阅」的 AI 写作翻译工具，FlowDown 是 iPhone 上的好选择。

---

## 汇总对比

| # | App | 平台 | 类型 | 开源协议 | 维护热度 | 推荐理由 |
|---|-----|------|------|---------|---------|---------|
| 1 | cmux | macOS | AI Agent 终端 | GPL-3.0 | ⭐⭐⭐⭐⭐ 24.5k stars / 高频迭代 | 多 Agent 并跑一眼看清 |
| 2 | OpenCode | macOS/终端 | AI 编程 Agent | MIT | ⭐⭐⭐⭐⭐ 19 万 stars / 900 贡献者 | MIT 免费、模型无关 |
| 3 | yap | macOS/CLI | 本地语音转写 | CC0-1.0 | ⭐⭐⭐⭐ 1.6k stars | 全本地转写 + MCP |
| 4 | electerm | macOS | SSH 全能终端 | MIT | ⭐⭐⭐⭐⭐ 7 年+ 长期维护 | Xshell 免费替代 |
| 5 | FlowDown | macOS+iOS | AI 写作翻译 | AGPL-3.0 | ⭐⭐⭐⭐ 1.2k stars / 资深作者 | 自带 key、无订阅 |

---

## 备注

- 与 8/12（macOS 工具集）、8/13（AI 编程 + 多端远程）、8/14（系统增强 + 时间效率）错开，8/15 主线为「终端 & AI 开发者工具」。
- 安装提示：cmux / OpenCode / yap / electerm 均支持 `brew install`，优先官方 GitHub Releases / Homebrew（规避 Gatekeeper 拦截）；FlowDown 走 App Store / GitHub Releases。
- 隐私优先级：yap 全本地识别；OpenCode / FlowDown 自带 API key 或本地模型；electerm / cmux 本地运行无云端依赖。
- 费用说明：5 款全部免费开源；仅 cmux 的 Pro/Team（云服务）与 OpenCode 的模型调用（自带 key 则零成本）为可选付费，核心功能永久免费。
- 说明：cmux / OpenCode 与 8/13 的「AI 编程」主题有轻微重叠，但本次聚焦「终端/CLI 原生」定位（非远程/多端 App），且 cmux、OpenCode 均为 2026 年最热门的终端级开发者工具，值得单列。
