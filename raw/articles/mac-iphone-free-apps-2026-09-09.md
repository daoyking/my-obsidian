# Mac + iPhone 免费效率工具 & AI Agent 搜索记录 2026-09-09

> 搜索策略：全网（GitHub + 专业媒体 + 社区）综合搜索
> 筛选标准：免费/开源 + GitHub Stars > 500 或近 6 月活跃 + 长期维护 + 效率/有趣

---

## 一、AI Agent 类（重点新增）

### 1. OpenClaw — 300K+ Stars 最活跃 AI Agent 框架（⭐300k）
- **GitHub**: https://github.com/openclaw/openclaw
- **评分**: ⭐300,000+ | 最活跃的 AI Agent 框架
- **许可证**: MIT
- **亮点**:
  - 3,000+ 插件扩展生态，社区最活跃
  - 原生 Mac 工具访问（Safari、Finder、Terminal）
  - 支持本地 Ollama 和云端 API 混合模式
  - 内置多层记忆系统，适合长时间运行任务
  - 多 Agent 编排能力
- **适用**: 开发者/高级用户，全能型自动化 Agent
- **费用**: 完全免费，仅需模型 API 费用

### 2. n8n — 可视化工作流自动化（⭐65k）
- **GitHub**: https://github.com/n8n-io/n8n
- **评分**: ⭐65,000+
- **许可证**: Sustainable License（个人使用免费）
- **亮点**:
  - 400+ 预置集成（Slack、Notion、GitHub、Google Sheets 等）
  - 2026 新增 AI Agent 节点：推理、工具调用、记忆管理
  - 本地部署，数据不出 Mac
  - 可视化节点编辑器，零代码门槛
  - 触发方式多样：定时/ webhook / 事件驱动
- **适用**: 非技术用户首选，快速搭建自动化工作流
- **费用**: 个人使用免费，商业版 $20+/月

### 3. NanoTeams — 本地多 Agent 编码空间（⭐34）
- **GitHub**: https://github.com/jmstajim/NanoTeams
- **评分**: ⭐34 | 最近更新：2026-09-07
- **亮点**:
  - 完全本地运行，Ollama/LM Studio 后端
  - 多 Agent 并行（Claude Code、Codex、Gemini、Cursor）
  - 语音控制（WhisperKit 本地）
  - Git worktree 隔离，无遥测
- **适用**: 多 Agent 并行开发场景
- **费用**: 完全免费

### 4. Belay — AI Agent 休眠守护（⭐34）
- **GitHub**: https://github.com/PerfectoWeb/Belay
- **评分**: ⭐34 | 最近更新：2026-09-08
- **亮点**:
  - 防止 Mac 休眠，确保 Agent 任务持续运行
  - 自动检测 Claude Code、Codex、Cline、Copilot 等
  - 内置预设，支持 Gemini CLI、OpenCode、Aider、Pi
- **适用**: 长时间 Agent 任务运行场景
- **费用**: 完全免费

### 5. notchi — Mac Notch AI 助手（⭐26）
- **GitHub**: https://github.com/cyrus-cai/notchi
- **评分**: ⭐26 | 最近更新：2026-09-05
- **亮点**:
  - 原生 Swift，Mac Notch 区域交互
  - 直接询问 AI、记笔记、设提醒
  - 设计驱动，轻量级
- **适用**: 喜欢 Notch 交互体验的用户
- **费用**: 完全免费

---

## 二、效率工具类（重点新增）

### 6. arthur-ficial/apfel — 本地 AI 第二大脑（⭐5,856）
- **GitHub**: https://github.com/arthur-ficial/apfel
- **评分**: ⭐5,856
- **亮点**:
  - macOS 内置 Apple Intelligence
  - CLI 工具 + OpenAI 兼容服务器 + 交互式聊天
  - 无需 API Key，无云端，完全本地
  - 管道化 macOS 系统数据到本地模型
- **适用**: 隐私优先用户，无需联网
- **费用**: 完全免费

### 7. onlyswitch — 菜单栏控制中心（⭐5,726）
- **GitHub**: https://github.com/jacklandrin/onlyswitch
- **评分**: ⭐5,726
- **亮点**:
  - 菜单栏集中控制面板
  - AirPods 管理、隐藏 Notch、快捷指令
  - AI 生成 AppleScript（自然语言转脚本）
  - 支持多模型供应商
- **适用**: 菜单栏效率优化
- **费用**: 完全免费

### 8. xplorer — AI 文件管理器（⭐5,589）
- **GitHub**: https://github.com/kimlimjustin/xplorer
- **评分**: ⭐5,589
- **亮点**:
  - LLM 驱动文件分析、文档摘要、上下文解释
  - SSH 远程服务器管理
  - Git 版本图可视化
  - 语义搜索（按含义而非关键词）
- **适用**: 重度文件管理用户
- **费用**: 完全免费

### 9. vorssaint/vorssaint-utils — 菜单栏工具集（⭐9,968）
- **GitHub**: https://github.com/vorssaint/vorssaint-utils
- **评分**: ⭐9,968
- **亮点**:
  - 开源菜单栏增强套件
  - 多种实用工具集成
- **适用**: 菜单栏效率提升
- **费用**: 完全免费

### 10. claude-obsidian — AI 知识图谱（⭐11,502）
- **GitHub**: https://github.com/AgriciDaniel/claude-obsidian
- **评分**: ⭐11,502
- **亮点**:
  - Python 工具，自动读取/链接/归档 Obsidian 笔记
  - 构建自组织知识图谱
  - Claude Code 驱动
- **适用**: Obsidian 用户自动化知识管理
- **费用**: 完全免费

### 11. nodeterm — 终端 Agent 管理器（⭐1,145）
- **GitHub**: https://github.com/eneskirca/nodeterm
- **评分**: ⭐1,145
- **亮点**:
  - 基于 tmux 的终端管理
  - 可视化无限画布，Agent 会话作为节点
  - 支持并行 Agent 运行
- **适用**: 多 Agent 并行开发场景
- **费用**: 完全免费

---

## 三、iPhone 相关

### 12. grok-build-ios — iOS Agent 遥控器（⭐20）
- **GitHub**: https://github.com/Pedroshakoor/grok-build-ios
- **评分**: ⭐20
- **亮点**:
  - iOS 端遥控器，控制 Mac 上的 Agent
  - 基于 ACP（Agent Client Protocol）
  - WebSocket 配对
- **适用**: iPhone + Mac 双端协作
- **费用**: 完全免费

---

## 四、综合推荐矩阵

| 场景 | 推荐组合 |
|------|----------|
| 全能自动化 | OpenClaw + Rectangle + Stats |
| 零代码工作流 | n8n + Notion/Slack 集成 |
| 隐私优先 | apfel + Abu-Cowork + osaurus |
| 多 Agent 开发 | NanoTeams + nodeterm + Belay |
| Obsidian 增强 | claude-obsidian + osaurus |
| iPhone 遥控 | grok-build-ios + Mac 端 Agent |
| 菜单栏优化 | onlyswitch + vorssaint-utils |

---

## 五、数据来源

- https://yyyl.me?p=3989/（OpenClaw/n8n 评测）
- https://thebestaitools.co?p=3306/（Goose/Lapu AI 评测）
- https://awesome-repositories.com/ar/f/development-tools-productivity/macos-utilities/ai-powered（AI 工具 repo）
- https://github.com/topics/coding-agent?l=swift（Swift coding agent 列表）
- https://gittrend.top/blogs/ai-second-brain-terminal-agent-manager-and-macos-menu-bar-toolkit-august-24-2026（GitTrend）
- https://www.marblism.com/blog/openclaw-alternatives（OpenClaw 替代方案）
