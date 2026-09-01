---
type: article
ingested: 2026-09-01
source_type: mac-iphone-free-apps
period: "2026-09-01"
agent: automation-1786437213877
---

# Mac / iPhone 免费 App 推荐 2026-09-01

> 主题：AI Agent 本地工作流 × 系统增强 × 开发工具（第 34 次执行）

---

## 推荐列表

### 1. June（OS June）— 隐私优先的本地 AI 桌面工作空间

| 项目 | 详情 |
|------|------|
| 平台 | macOS 14+（Apple Silicon / Intel） |
| 语言 | Rust + Tauri + React/TypeScript |
| 协议 | MIT |
| GitHub | [open-software-network/os-june](https://github.com/open-software-network/os-june) |
| ⭐ Stars | ~341（近 30 天 +41，日频更新） |
| 官网 | https://opensoftware.co |

**一句话**：把 AI 聊天、语音听写、会议记录和本地 Agent 整合成一个隐私工作空间，所有数据默认留在本机。

**核心亮点**：
- **TEE 可信执行环境**：模型推理默认走 Venice API（零数据留存），生产后端在 Phala Cloud 的 Intel TDX 机密 VM 上运行，用户可通过 `opensoftware.co/verify` 验证代码
- **语音听写**：按住 fn 键即可在任何应用中语音输入，支持多种写作风格
- **会议记录**：直接录音 Mac 系统音频，无需邀请 bot 入会，自动生成结构化纪要（决策 / 待办 / 风险）
- **本地 Agent**：基于 Hermes 框架构建，沙盒会话 + 高风险操作需用户审批
- **Bring Your Own Key**：支持本地 Ollama / LM Studio 模型，也可接入自有 API Key
- **免费计划无需信用卡**，Pro $20/月，Max $100/月

**适合谁**：重视隐私的 Mac 用户，希望用 AI 处理会议记录、语音输入和本地文件研究，但不想让数据上传云端。

---

### 2. Abu（阿布）— 开源养成系 AI 桌面办公搭子

| 项目 | 详情 |
|------|------|
| 平台 | macOS / Windows |
| 语言 | TypeScript + Rust（Tauri 2） |
| 协议 | Apache-2.0 |
| GitHub | [PM-Shawn/Abu-Cowork](https://github.com/PM-Shawn/Abu-Cowork) |
| ⭐ Stars | ~341（近 30 天 +66，1,906 commits，2026-08-17 发 v0.42.0） |
| 官网 | https://myabu.cn |

**一句话**：你交代需求，它自己规划、调工具、读写文件、执行命令，做完把产物交给你——本地优先，越用越懂你。

**核心亮点**：
- **Agent 自主执行**：不只是聊天，自主规划任务、调用工具、读写文件、执行命令，完成完整工作流
- **自进化 Skills**：跑完复杂流程后主动提议「固化成技能」，一键生成草稿，下次直接调用
- **内置 28 个技能**：覆盖 Office 文档、设计创作、浏览器自动化、开发辅助等场景
- **MCP 工具协议**：连接数据库、搜索引擎、GitHub 等外部服务，能力随需生长
- **电脑 & 浏览器操控**：截屏识别 + 键鼠控制，像真人一样操作桌面应用
- **多 Agent 并行**：最多 5 个后台 Agent 同时执行，进度实时可见
- **定时 / 触发器**：HTTP、文件变更、Cron、IM 消息事件自动触发，7×24 值守
- **IM 机器人**：支持飞书 / 钉钉 / 企微 / Slack 接入
- **桌宠模式**：透明圆形浮窗常驻桌面，跨 Spaces 跟随
- **数据安全**：数据 100% 本地，API Key 存本地，Seatbelt 沙箱隔离

**适合谁**：希望有一个真正能"干活"的本地 AI 助手，而非聊天框的开发者 / 办公人群。

---

### 3. Ice — macOS 菜单栏管理器（Bartender 免费平替）

| 项目 | 详情 |
|------|------|
| 平台 | macOS 14+ |
| 语言 | Swift（100% SwiftUI） |
| 协议 | GPL-3.0 |
| GitHub | [jordanbaird/Ice](https://github.com/jordanbaird/Ice) |
| ⭐ Stars | ~28,200 |
| 最后更新 | macOS Tahoe Beta 适配中（0.11.13-dev） |

**一句话**：把菜单栏管理做到极致，隐藏 / 分区 / 拖拽 / 搜索 / 外观定制，免费开源替代收费的 Bartender。

**核心亮点**：
- **三区段管理**：始终显示 / 隐藏（悬停或点击显示）/ 始终隐藏，精细控制每个图标
- **Ice Bar**：在主菜单栏下方生成浮动栏，刘海屏用户必备
- **拖拽排序**：Command + 拖动图标即可调整顺序和分区
- **搜索面板**：快速查找并显示隐藏图标
- **外观定制**：色调、阴影、圆角、渐变、透明背景，支持深浅模式独立设置
- **自动隐藏**：鼠标移开后自动重新隐藏
- **快捷键全支持**：可绑定快捷键切换各区域显示
- **Active development**：持续适配 macOS Tahoe Liquid Glass 新 API

**适合谁**：菜单栏图标过多、刘海屏空间不足、希望免费替代 Bartender 的 Mac 用户。

---

### 4. Better Shot — CleanShot X 开源平替

| 项目 | 详情 |
|------|------|
| 平台 | macOS 10.15+ |
| 语言 | Rust + Tauri 2 + React |
| 协议 | BSD-3-Clause |
| GitHub | [KartikLabhshetwar/better-shot](https://github.com/KartikLabhshetwar/better-shot) |
| ⭐ Stars | ~2,100（近 30 天 +140） |
| 最后更新 | 2026-01 |

**一句话**：截图 + 录屏 + OCR + 标注 + 视频编辑器，一站式本地优先的截图工具。

**核心亮点**：
- **三种截图模式**：区域（⌘⇧2）、全屏（⌘⇧3）、窗口（⌘⇧4），原生 macOS screencapture 调用
- **屏幕录制**：ScreenCaptureKit 支持，可录系统音频，自带视频编辑器（裁剪 / 填充 / 圆角 / 阴影）
- **OCR 文字识别**：按 ⌘⇧O 即可提取区域文字，自动复制到剪贴板
- **颜色拾取器**：取色并复制 hex 值
- **专业标注**：矩形、椭圆、箭头、自由手绘、文字、数字序号、模糊、聚光灯
- **自动应用**：可设置默认背景 + 阴影 + 圆角，截图后自动应用并保存
- **浮动预览**：截图后 5 秒自动淡出的预览窗口，可拖拽到任意应用
- **钉住截图**：任意截图可钉为置顶浮窗
- **Menu bar 常驻**：从菜单栏快速访问

**适合谁**：需要 CleanShot X 级别截图体验但不想付费的用户，尤其是技术文档写作者和开发者。

---

### 5. Supacode — 多 Agent 并行编程工作台

| 项目 | 详情 |
|------|------|
| 平台 | macOS 26（Tahoe）+ |
| 语言 | Swift + SwiftUI + libghostty |
| 协议 | 开源（NOASSERTION） |
| GitHub | [supabitapp/supacode](https://github.com/supabitapp/supacode) |
| ⭐ Stars | ~2,300（近 30 天 +115） |
| 最后更新 | 2026-08 活跃 |

**一句话**：在一个窗口里并行运行 50+ 编码 Agent（Claude Code / Codex / Opencode），每个任务独立 worktree，断线不断会话。

**核心亮点**：
- **Worktree 优先**：每个 Agent 拥有独立 git worktree，并行不冲突
- **会话持久化**：基于 zmx 守护进程，退出重开或断 SSH 后会话自动续接
- **远程 SSH 支持（Beta）**：指向远程仓库即可管理，单次 SSH 认证复用
- **Agent 状态实时徽章**：忙 / 等待输入 / 空闲，一眼看清哪个任务需要响应
- **原生终端**：libghostty 渲染，支持标签页、分屏、搜索、主题同步
- **GitHub 集成**：侧边栏实时显示 PR 状态、CI 检查结果、合并 readiness
- **命令行 & Deeplink**：`supacode` CLI 或 `supacode://` 链接驱动，可绑定快捷键
- **自定义脚本**：按仓库或全局配置命名脚本，出现在脚本菜单和命令面板
- **Bring Your Own Agent**：支持 Claude Code、Codex、Copilot 等任意 CLI Agent

**适合谁**：同时运行多个 AI 编程 Agent 的开发者，需要并行隔离工作区和断线续接能力。

---

## 今日总结

| # | 应用 | 平台 | ⭐ | 一句话 |
|---|------|------|-----|--------|
| 1 | June | macOS | ~341 | TEE 隐私 AI 工作空间，聊天+听写+会议+Agent |
| 2 | Abu | macOS/Windows | ~341 | 本地优先养成系 Agent，自进化技能+多Agent并行 |
| 3 | Ice | macOS | ~28.2k | 菜单栏管理器，Bartender 免费平替 |
| 4 | Better Shot | macOS | ~2.1k | CleanShot X 平替，截图+录屏+OCR+标注 |
| 5 | Supacode | macOS 26+ | ~2.3k | 多 Agent 并行工作台，worktree 隔离+会话持久化 |

**今日主题**：AI Agent 本地工作流 × 系统增强 × 开发工具

**推荐理由**：
- June 和 Abu 是今天最值得关注的新项目，都是 2026 年新兴的本地 AI Agent 工具，一个侧重隐私工作空间，一个侧重养成系桌面办公搭子
- Ice 是菜单栏管理的必备神器，28k stars 证明了其受欢迎程度
- Better Shot 补齐了截图录屏能力，弥补 CleanShot X 的付费缺口
- Supacode 是针对多 Agent 并行开发者的专业工具，worktree 隔离方案很创新

---

*数据来源：GitHub Search / WebSearch / gittrend.io*
*查询时间：2026-09-01 11:00 (GMT+8)*
*存放 Agent：automation-1786437213877*
