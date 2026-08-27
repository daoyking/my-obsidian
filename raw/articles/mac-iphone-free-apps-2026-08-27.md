---
date: 2026-08-27
title: "Mac / iPhone 免费 App 推荐 2026-08-27"
tags:
  - mac
  - ios
  - 免费
  - 开源
  - 效率工具
source_agent: automation-1786437213877
---

# Mac / iPhone 免费 App 推荐（2026-08-27）

> 主题：**数据可视化 + 开发者生产力工具**
> 筛选标准：免费开源、提升效率或有趣、长期维护（近 30 天有活跃提交）

---

## 今日推荐

### 1. Sniffnet — 网络流量可视化监控器 ⭐

| 项目 | 详情 |
|------|------|
| GitHub | [GyulyVGC/sniffnet](https://github.com/GyulyVGC/sniffnet) |
| Stars | ~40.7k |
| 许可证 | Apache-2.0 / MIT |
| 语言 | Rust |
| 最后提交 | 2026-08-26 |
| 平台 | macOS / Windows / Linux |

**一句话**：比 Wireshark 简单 100 倍的网络流量监控工具，实时图表可视化你的网络活动。

**核心功能**：
- 实时流量图表（入站/出站，字节/数据包）
- 网络连接识别：IP、端口、协议、程序
- 地理定位远程主机（MaxMind GeoLite2）
- 自定义通知规则（流量阈值告警）
- 4 种主题风格
- 网络流量摘要报告

**适合人群**：开发者排查网络问题、安全研究入门、想了解"谁在消耗我带宽"的用户。

**安装**：
```bash
brew install sniffnet
# 或直接下载：https://github.com/GyulyVGC/sniffnet/releases
```

---

### 2. Yazi — 极速终端文件管理器 ⭐

| 项目 | 详情 |
|------|------|
| GitHub | [sxyazi/yazi](https://github.com/sxyazi/yazi) |
| Stars | ~40.9k |
| 许可证 | MIT |
| 语言 | Rust |
| 最后提交 | 2026-07-31（活跃中） |
| 平台 | macOS / Linux / Windows / Android |

**一句话**：Rust 编写的异步终端文件管理器，永不卡顿，支持图片预览和 Vim 快捷键。

**核心功能**：
- 全异步 I/O，万级目录瞬间加载
- 原生图片预览（Kitty / Sixel / iTerm2 / Ghostty 协议）
- 视频缩略图、PDF、JSON、归档文件预览
- Lua 插件系统 + 内置包管理器 (`ya pkg`)
- Vim 风格快捷键（hjkl 导航、yank、marks）
- 多标签 + 后台任务进度

**适合人群**：终端重度用户、开发者、追求极致文件管理体验的人。

**安装**：
```bash
brew install yazi ffmpeg unar jq poppler fd ripgrep fzf zoxide
brew tap homebrew/cask-fonts && brew install --cask font-symbols-only-nerd-font
```

**Shell 集成**（退出时自动 cd）：
```bash
function y() {
  local tmp="$(mktemp -t "yazi-cwd.XXXXXX")"
  yazi "$@" --cwd-file="$tmp"
  if cwd="$(cat -- "$tmp")" && [ -n "$cwd" ] && [ "$cwd" != "$PWD" ]; then
    cd -- "$cwd"
  fi
  rm -f -- "$tmp"
}
```

---

### 3. espanso — 跨平台文本扩展器 ⭐

| 项目 | 详情 |
|------|------|
| GitHub | [espanso/espanso](https://github.com/espanso/espanso) |
| Stars | ~14.2k |
| 许可证 | GPL-3.0 |
| 语言 | Rust |
| 最后提交 | 2026-08-10 |
| 平台 | macOS / Windows / Linux |

**一句话**：输入缩写自动展开成长模板，系统级生效，本地优先隐私保护。

**核心功能**：
- 系统级文本展开（几乎所有应用都生效）
- 日期/时间自动插入
- Emoji 快捷输入
- 自定义脚本执行（shell 命令输出注入）
- 应用级配置隔离（不同 App 用不同模板）
- 隐私优先：配置存在本机 YAML，无云端同步

**示例配置**（`~/.config/espanso/match/base.yml`）：
```yaml
matches:
  - trigger: ":sig"
    replace: "金道洋\n前端开发工程师\n📧 xxx@example.com"
  - trigger: ":addr"
    replace: "北京市朝阳区xxx路xxx号"
  - trigger: ":date"
    replace: "{{date}}"
```

**适合人群**：每天重复打大量固定话术的人（邮件签名、回复模板、代码注释）。

**安装**：
```bash
brew install espanso
espanso start
```

---

### 4. Stockbar — macOS 菜单栏股票盯盘工具 ⭐

| 项目 | 详情 |
|------|------|
| GitHub | [VGEAREN/Stockbar](https://github.com/VGEAREN/Stockbar) |
| Stars | ~45 |
| 许可证 | MIT |
| 语言 | Swift |
| 最后提交 | 2026-03（活跃开发中） |
| 平台 | macOS 13.5+（Apple Silicon + Intel） |

**一句话**：菜单栏股票盯盘神器，A 股/港股/美股全覆盖，分时图直观展示。

**核心功能**：
- 多市场实时行情：A 股（沪/深/北）、港股、美股
- 极简分时图：点击任意股票查看分钟级走势
- 美股全时段支持：盘前/盘中/盘后/夜盘（04:00–20:00 美东）
- 持仓盈亏追踪：设置成本价和持仓数量，自动计算浮动盈亏
- 配色自定义：红涨绿跌（A 股习惯）/ 绿涨红跌（美股习惯）
- 无后端：新浪/腾讯/Yahoo Finance 公开接口直连，无需 API Key

**适合人群**：股民、对投资数据敏感的开发者、喜欢菜单栏极简设计的用户。

**安装**：从 [GitHub Releases](https://github.com/VGEAREN/Stockbar/releases) 下载 DMG，首次运行需「系统设置 → 隐私与安全性 → 仍要打开」。

---

### 5. AgentTerminal — AI 多 Agent 终端工作台 ⭐

| 项目 | 详情 |
|------|------|
| GitHub | [sui-an-agent/agent-terminal](https://github.com/sui-an-agent/agent-terminal) |
| Stars | ~28 |
| 许可证 | MIT |
| 语言 | Swift |
| 最后提交 | 2026-08-17 |
| 平台 | macOS 11+ |

**一句话**：为多 AI 编程 Agent 设计的原生终端，侧边栏工作区管理 + Agent 间任务委派。

**核心功能**：
- 侧边栏垂直标签管理多个工作区
- 一键启动 Claude Code / Codex 等 AI Agent
- Agent 间通信与任务委派（agent-to-agent collaboration）
- Git worktree 集成，多分支并行开发
- 多窗口 + pane 缩放
- 会话状态持久化（重启后恢复）

**适合人群**：同时使用多个 AI 编程 Agent 的重度开发者。

**安装**：从 [GitHub Releases](https://github.com/sui-an-agent/agent-terminal/releases) 下载并安装。

---

## 对比速览

| 应用 | 类型 | Stars | 许可证 | 平台 | 安装难度 |
|------|------|-------|--------|------|----------|
| Sniffnet | 网络监控 | 40.7k | Apache-2.0/MIT | 跨平台 | ⭐ |
| Yazi | 终端文件管理器 | 40.9k | MIT | 跨平台 | ⭐⭐ |
| espanso | 文本扩展器 | 14.2k | GPL-3.0 | 跨平台 | ⭐ |
| Stockbar | 股票盯盘 | 45 | MIT | macOS | ⭐ |
| AgentTerminal | AI 终端工作台 | 28 | MIT | macOS | ⭐⭐ |

---

## 为什么选这些

1. **Sniffnet** — 网络可视化的刚需工具，Rust 编写性能优异，40k+ stars 证明社区认可
2. **Yazi** — 终端文件管理新标杆，异步架构彻底解决 Ranger 卡顿问题
3. **espanso** — 重复打字终结者，本地配置隐私保护，GPL-3.0 开源自由
4. **Stockbar** — 轻量级股票盯盘，菜单栏设计不打扰工作流，全市场覆盖
5. **AgentTerminal** — 新兴 AI 开发工具，多 Agent 协作工作流的理想选择

---

> 存放 Agent：automation-1786437213877（Mac/iPhone 免费 App 推荐自动化）
> 数据来源：GitHub / WebSearch，验证时间 2026-08-27
