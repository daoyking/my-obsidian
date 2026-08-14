# 每日 Mac/iPhone 免费 App 推荐 — 2026-08-13

> 📦 **存放 Agent**: automation-1786437213877（推荐 Mac/iPhone 免费 App 自动化）
> 🔍 **信息来源**: GitHub Trending、Product Hunt Hacker News、Hacker News 全网搜索
> 🎯 **筛选标准**: 完全免费 + 提升效率/有趣 + 长期活跃维护
> 📡 **推送渠道**: 飞书 bot (ou_873a51e9ec9b96d2d2e20bbdba9cd8b0) + 微信 push_to_wechat

---

## 1. FluidVoice — macOS 本地语音听写 + AI 清理

- **平台**：macOS 15+（Apple Silicon 完整体验 / Intel 仅 Whisper）
- **价格**：完全免费，GPL v3 开源（自 2026-02 从 Apache 2.0 切换）
- **GitHub**：https://github.com/altic-dev/FluidVoice
- **Stars**：9.4k+ | **Forks**：620+
- **下载量**：官方声称 10 万+（brew install --cask fluidvoice）
- **维护方**：ALTIC 团队（Solo 开发者主导，最近三周 2 次大版本更新）

**一句话**：按住快捷键说话，文字连同 AI 清理一并落到光标处，Wispr Flow 的免费开源平替。

**核心功能**：
- 完全本地 STT（Nemotron Speech 3.5 / Parakeet Flash/TDT / Apple Speech / Whisper 多种模型可切换）
- Fluid-1 本地 AI 清理模型（3.5 GB，启用后自动去口水话 + 智能标点 + 应用感知语气）
- 40+ 语言（不同模型覆盖不同语种，Whisper 最多 99 种）
- 全局快捷键 → 任意应用聚焦输入框即可听写，包括 Terminal、Cursor、Claude Code
- 命令模式 / 直接听写 / 写入 三种模式
- 可选 OpenAI / Groq / 自定义云端清理（密钥进 macOS Keychain）
- 99 毫秒内延迟（CoreML + Metal 加速）

**亮点**：8 月评测中在 Adam Jones 的 21 款 Wispr Flow 替代品独立测试中拿到 #1。三周内从 5k stars 翻到 9.4k，开发者活跃到被诟病「commit 太频繁」。Apple Silicon 上的 Mac 用户如果讨厌每月 $15 订阅，这是首选。

---

## 2. OpenScreen — Screen Studio 的 MIT 免费平替

- **平台**：macOS / Windows / Linux 三端
- **价格**：完全免费，MIT 开源，可商用
- **GitHub**：https://github.com/artificiallyintimidating/openscreen（社区版主源）
- **Stars**：1.4k+ | **Commits**：774 | **Open Issues**：29（已关 55）
- **节奏**：每天约 12 个 commit，过去 7 天发布 10 个版本（v1.9.2 / v1.9.3-rc.1 同日）
- **官网**：https://openscreen.app

**一句话**：录屏 + 时间线剪辑 + 自动光标平滑 + 自动放大聚焦，对标 Screen Studio $108/yr 的全流程工具，免费送。

**核心功能**：
- 录屏 + 多轨时间线编辑一体化（无需切换 OBS + 剪辑软件）
- 自动光标平滑 + 自动放大聚焦点击区域（这是 Screen Studio 的招牌能力）
- 本地 AI agent 自动扫描音频静音并切除
- 字幕 + 摄像头画中画 + 多比例导出（横屏 / 竖屏短影音）
- 多平台：Mac / Win / Linux 三端原生支持

**亮点**：Screen Studio 月费 $29 / 年费 $108，且仅限 macOS；OpenScreen MIT 免费商用，每天 12 个 commit 高速迭代，自家 README 坦承「还没到 production-grade」但胜在完全透明。HN 上线即拿下 434 分。如果你是开发者 / 博主 / 文档工程师，需要长期录制 demo 视频，这款值得长期投资。

---

## 3. agent-manager — AI 编程会话的 tmux 编排器

- **平台**：macOS / Linux / Windows (WSL2)
- **价格**：完全免费，Apache 2.0 开源
- **GitHub**：https://github.com/yoan-m/agent-manager
- **语言**：Go 单文件二进制，无守护进程
- **Product Hunt**：8/11 发布，#13 当日榜，98 upvotes

**一句话**：把所有 Claude Code / Codex / OpenCode / Gemini CLI / Grok / Pi 装进一个 tmux 仪表盘，单键盘全控。

**核心功能**：
- 统一多 agent 仪表盘：折叠式项目 / 会话树，实时显示 working / waiting / finished 状态（通过 MCP hooks 而非文本正则）
- 上下文内交互：空格键从 prompt bar 起 agent，在 session row 上空格则向该 agent 直接回话（不需 attach）
- ctrl+r 打开整文件 diff 审阅模式：自动检测 repo + 目标分支，行内注释一键汇总回 agent
- 会话生命周期：x 杀会话释放 RAM、f fork 对话到命名分支、T 在 agent 旁开普通 shell、v 复活会话
- git worktree 自动隔离：每个 session 可跑在独立 worktree，互不打架
- 退出 manager 后会话仍是普通 tmux session，跑在自有 socket 上

**亮点**：Apache 2.0 + 单 Go 二进制 = 一行 `go install` 即可。Claude Code / Codex 多会话并行是 2026 年开发者主战场，这款正是把「3-5 个 Claude 并行跑不同任务」从 tmux + git worktree 手工搭建简化为一键。HN/Product Hunt 同步上榜首周评分都很高。

---

## 4. Mimi Remote — iPhone / iPad 远程「口袋化」AI 编程 Agent

- **平台**：iPhone + iPad（SwiftUI 原生）
- **价格**：完全免费，开源
- **类型**：本地优先（local-first），直连 Mac
- **连接方式**：Tailscale 或同 LAN，不经任何中继 / 账号

**一句话**：让 Codex / Claude Code 在你 Mac 上跑着，你不必守在机器前 — iPhone 端单手浏览进度、批准动作、管理 Git。

**核心功能**：
- 单栏触控优先的 SwiftUI 工作台（iPad 加侧边栏）
- 检查代码 diff、批准 / 拒绝工具调用请求、引导 agent 方向
- 直接管理 git 操作（push / commit / PR）
- 不串流 Mac 屏幕，针对 AI 编程 agent 工作流重新设计触屏界面

**亮点**：如果你常用 Codex / Claude Code 又经常离开 Mac 桌面前（通勤 / 会议 / 咖啡厅），它把「盯在终端前等 agent 完成」改成碎片时间批阅 + 远程接管。本地直连优先意味着无需信任厂商服务器，正中隐私派开发者下怀。

---

## 5. Remux — iPhone 上的远程 tmux 工作区原生客户端

- **平台**：iPhone（iPad 大概率兼容），当前通过 TestFlight 公开测试
- **价格**：完全免费，MIT 开源
- **GitHub**：https://github.com/h3nock/Remux
- **核心依赖**：Ghostty 终端核心 + Citadel SSH 库

**一句话**：把 tmux 的 session / window / pane 管理模型搬进 iPhone 的触控优先界面。

**核心功能**：
- 直连 SSH，无需 Remux 账号、不过任何中继服务器
- 密码 / 私钥存 iOS 钥匙串，自动记住已信任主机密钥
- 左右滑切换 window、底部工作表带缩略图切换 pane
- pane 拆分 / 缩放 / 关闭全在手机上完成；长按空格精准定位光标
- 内置 shell / Claude Code / Codex 三套预设命令集，可自由扩展
- 手机照片 / 文件上传可直接标注，远程路径自动键入终端
- 长按终端中的 `localhost` 链接可直开远程开发服务器预览（保留热重载 + WebSocket）
- 三套主题：Ghostty 默认 / Catppuccin Mocha / Catppuccin Latte

**亮点**：与 Termius / Blink Shell 这类通用 SSH 客户端的区别在于：Remux 从一开始就是为 tmux 用户设计，光标控制 / 命令面板 / pane 触控都按 tmux 心智模型做。如果你日常用 tmux + Claude Code 而恰好经常离开键盘，Remux 是 iPhone 上的最佳「真・远程终端」。

---

## 汇总对比

| # | App | 平台 | 类型 | 开源协议 | 维护热度 | 推荐理由 |
|---|-----|------|------|---------|---------|---------|
| 1 | FluidVoice | macOS | 本地语音听写 | GPL v3 | ⭐⭐⭐⭐⭐ 9.4k stars / 周更 | Wispr Flow 免费平替，离线可用 |
| 2 | OpenScreen | Mac/Win/Linux | 屏幕录制编辑器 | MIT | ⭐⭐⭐⭐ 日均 12 commits | Screen Studio $108/yr 免费替代 |
| 3 | agent-manager | Mac/Linux/WSL2 | AI agent 编排 | Apache 2.0 | ⭐⭐⭐⭐ PH #13 当日 | 多 Claude Code 并行神器 |
| 4 | Mimi Remote | iPhone/iPad | AI agent 远程 | 开源 | ⭐⭐⭐ 新兴项目 | 通勤 / 会议碎片时间用 |
| 5 | Remux | iPhone | tmux 移动客户端 | MIT | ⭐⭐⭐ TestFlight 测试期 | 专为 tmux 用户设计 |

---

## 备注

- 与 8/12 推荐对比：8/12 是 macOS 工具集（Vorssaint / Mater / Quill / Loop / NetNewsWire），8/13 转向「AI 编程 + 多端远程」主线，新增 2 款 iPhone 工具，满足「通勤 / 外出」场景。
- 安装风险：FluidVoice / OpenScreen 建议优先用官方 GitHub releases（远离 macOS Gatekeeper 拦截问题）；agent-manager 可用 `go install` 跳过所有依赖。
- 隐私优先级：5 款中 FluidVoice / OpenScreen / Remux 均为完全本地优先；Mimi Remote 仅 Tailscale / LAN 直连；agent-manager 是 TUI，无云端组件。
