# Mac / iPhone 免费 App 推荐 —— 2026-08-30

> 存放 Agent：automation-1786437213877（每日推荐 Mac/iPhone 免费 App）
> 筛选标准：免费 / 开源 | 提升效率或有趣 | 有人长期维护（近30天有活跃提交）

---

## 主题：AI Agent 多智能体编排与基础设施

与近期主题（8/19 AI Agent 工作台、8/21 跨平台协作、8/22 AI Agent 基础设施、8/25 本地 AI 基础设施）做了错开，本次聚焦**多 Agent 编排 + 生产级技能库 + 会议隐私**。

---

## 推荐 App

### 1. gstack ⭐ 130,352

| 项目 | 信息 |
|------|------|
| 仓库 | [garrytan/gstack](https://github.com/garrytan/gstack) |
| 语言 | TypeScript |
| 许可证 | MIT |
| 最后更新 | 2026-08-29（今日活跃） |
| 平台 | macOS / Windows / Linux（Claude Code CLI） |
| 作者 | YC CEO Garry Tan |

**是什么**：把 Claude Code 变成一个虚拟工程团队——CEO / 工程经理 / 设计师 / QA / 安全官 / 发布工程师，共 23 个专业斜杠命令。

**为什么推荐**：今日最重磅推荐。YC 总裁的个人工作流开源，50+ 技能，MIT 免费。一个命令切入角色，不再让 AI 在混乱上下文里打转。适合独立开发者和创业团队。

**核心命令**：`/ceo` `/plan-eng-review` `/review` `/qa` `/security` `/ship` `/design-review`

**限制**：绑定 Claude Code 生态，学习成本不低，建议按角色逐步启用。

---

### 2. agent-skills ⭐ 90,728

| 项目 | 信息 |
|------|------|
| 仓库 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) |
| 语言 | JavaScript |
| 许可证 | MIT |
| 最后更新 | 2026-08-28（近1天活跃） |
| 平台 | Claude Code / OpenCode / Codex |
| 作者 | Addy Osmani（Google 工程师，Lighthouse 创始人） |

**是什么**：为 AI 编程 Agent 提供的**生产级工程技能库**——调试、构建、架构约定、代码规范，让 AI 遵循可复现的专业级开发流程。

**为什么推荐**：由知名前端工程师 Addy Osmani 维护，90k+ stars，内容质量经过社区验证。适合想让 AI 写出"像人写的代码"的开发者。

**亮点**：技能文件即 Markdown，直接放进项目根目录即可生效，零配置。

---

### 3. Meetily ⭐ 30,061

| 项目 | 信息 |
|------|------|
| 仓库 | [Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily) |
| 语言 | Rust + Next.js（Tauri 打包） |
| 许可证 | MIT |
| 最后更新 | 2026-08-29（今日活跃） |
| 平台 | macOS / Windows |
| 下载 | [meetily.ai](https://meetily.ai) |

**是什么**：100% 本地隐私优先的 AI 会议助手，4x 速 Parakeet/Whisper 实时转录 + Ollama 本地摘要，**录音数据完全不出设备**。

**为什么推荐**：适合需要处理敏感会议内容（法律、医疗、企业战略）的用户。无云端依赖，GDPR 合规，18万+用户下载。macOS 上排名第一的本地会议工具。

**亮点**：Rust 编写，性能极强；支持说话人分离；可接入本地 Ollama 或远程 API 做摘要。

---

### 4. Paseo ⭐ 15,455

| 项目 | 信息 |
|------|------|
| 仓库 | [getpaseo/paseo](https://github.com/getpaseo/paseo) |
| 语言 | TypeScript |
| 许可证 | 自定义（Apache-2.0 兼容，NOASSERTION） |
| 最后更新 | 2026-08-29（今日活跃） |
| 平台 | macOS / Windows / Linux / iOS / Android / Web |
| 官网 | [paseo.sh](https://paseo.sh) |

**是什么**：统一编排多个编程 Agent 的桌面平台——Claude Code、Codex、Copilot、OpenCode、Pi 通过同一界面并行运行，支持 iOS/Android 远程查看和推送。

**为什么推荐**：自托管、无遥测、跨设备。适合需要多 Agent 并行跑项目的开发者，从手机查看进度、从桌面继续工作。

**亮点**：语音控制、SSH 远程连接 daemon、Docker 部署、TypeScript SDK。

---

### 5. Wake ⭐ 697

| 项目 | 信息 |
|------|------|
| 仓库 | [iAmCorey/Wake](https://github.com/iAmCorey/Wake) |
| 语言 | Rust + GPUI |
| 许可证 | MIT |
| 最后更新 | 2026-08-29（今日活跃） |
| 平台 | macOS 14+ |

**是什么**：把 13 种 AI 编程 Agent（Claude Code、Codex、Cursor、Windsurf、OpenCode 等）的聊天记录收进一个窗口，统一浏览、搜索、续接。

**为什么推荐**：Agent 会换，但对话历史不该跟着丢。Wake 是"Agent 记忆归集层"，数据层完全不依赖 UI，架构设计很优雅。隐私优先——只读打开 agent 数据目录，零网络请求。

**注意**：当前需从源码构建（Rust 工具链），macOS 14+，ad-hoc 签名。

---

## 汇总对比

| App | Stars | 许可证 | 平台 | 核心定位 |
|-----|-------|--------|------|---------|
| gstack | 130,352 | MIT | 全平台 | Claude Code 虚拟工程团队 |
| agent-skills | 90,728 | MIT | 全平台 | 生产级 AI 编程技能库 |
| Meetily | 30,061 | MIT | macOS/Windows | 本地隐私会议转录 |
| Paseo | 15,455 | 自定义 | 全平台+移动端 | 多 Agent 统一编排平台 |
| Wake | 697 | MIT | macOS 14+ | Agent 会话历史聚合器 |

---

## 备注

- 全部 5 款均通过 GitHub API 验证最新提交（近 3 天内有活跃）
- 全部免费开源，无隐藏付费墙
- 今日未重复之前 29 天推送的任何 App
- 推荐来源：GitHub Trending + 全网搜索 + gh CLI 实时验证
