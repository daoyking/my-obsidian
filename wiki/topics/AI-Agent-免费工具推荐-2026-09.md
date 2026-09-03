---
title: AI Agent 免费工具推荐 2026-09
aliases: [AI Agent 工具, 免费 AI Agent, 开源 AI Agent, 本地 AI Agent]
type: topic
tags: [ai, agent, 免费, 开源, github, 推荐, 2026]
created: 2026-09-03
updated: 2026-09-03
sources: ["[[raw/articles/github-mac-apps-search-2026-09-03]]"]
status: active
---

# AI Agent 免费工具推荐（2026-09）

> 筛选标准：免费/开源、长期维护（GitHub Stars > 1k 或近 6 月活跃）、提升工作效率或有趣。
> 本页面收录在 wiki/topics/ 下，由自动化任务维护（来源 agent: automation-1786437213877）。

---

## 消费级 AI Agent（无需编程，浏览器/App 直接用）

| 工具 | 类型 | 免费状态 | 平台 | 说明 |
|---|---|---|---|---|
| Perplexity Comet | 浏览器 Agent | 完全免费（2026-03 取消付费墙） | Mac/iOS/Android | AI 驱动浏览器，自动多步骤任务 |
| Genspark | 多模型 Agent | 免费层 | Web | 30+ 前沿模型编排，单免费工作区 |
| Manus | AI Agent | 免费试用 | Web/iOS | 多步骤任务自动化 |
| ChatGPT (Free) | 通用助手 | 免费层 | 全平台 | 自定义 GPTs，实时信息 |
| Google Gemini | 通用助手 | 免费层 | 全平台 | Google 生态深度集成 |

---

## 开源 AI Agent（GitHub 高星，可自托管）

### 编程 Agent

| 工具 | GitHub | Stars | 说明 |
|---|---|---|---|
| opencode | github.com/opencode-ai/opencode | ~180k | 多模型路由，MCP 扩展，已集成到本 vault 环境 |
| Aider | github.com/paul-gauthier/aider | ~30k | 终端 AI 编程，自动 commit，终端党首选 |
| Goose | github.com/block/goose | ~15k | Block 出品，写代码/浏览器/API/文件管理，MCP 协议 |
| OpenHands | github.com/All-Hands-AI/OpenHands | ~86k | 多 Agent 自托管控制中枢 |
| Cline | github.com/cline/cline | ~18k | VS Code 扩展，多文件编辑，命令行执行 |
| Zero | github.com/GitLawb/zero | ~1.2k | Go 终端编程 Agent，25+ 模型提供商，MCP 协议 |
| Prime Agent | github.com/prime-intellect/prime-agent | ~18k | 自我改进编程 Agent，工作沉淀经验 |

### 本地 AI 客户端

| 工具 | GitHub | Stars | 说明 |
|---|---|---|---|
| Jan | github.com/janhq/jan | ~43k | 本地模型运行时，Llama/Mistral/DeepSeek 等，离线隐私优先 |
| Chatbox | github.com/chatboxai/chatbox | ~40k | 桌面 AI 客户端，多 API 提供商，Markdown/Latex 渲染 |
| Enchanted | github.com/gluonfield/enchanted | ~6k | macOS/iOS 原生聊天客户端，连接 Ollama，Swift 构建 |
| osaurus | github.com/osaurus-ai/osaurus | ~6.9k | macOS 原生 Agent 运行环境，本地模型优先、记忆常驻 |

### 通用 Agent 框架

| 工具 | GitHub | Stars | 说明 |
|---|---|---|---|
| OpenClaw | github.com/openclaw/openclaw | ~216k | 本地优先，12+ 消息平台，100+ 技能插件，创始人 Peter Steinberger 已加入 OpenAI |
| AutoGPT | github.com/Significant-Gravitas/AutoGPT | ~170k | 连续工作流自动化，低代码 |
| CrewAI | github.com/crewAIInc/crewAI | ~58k | 多 Agent 协作，视觉化控制，REST API |
| LangGraph | github.com/langchain-ai/langgraph | 高星 | 可靠 AI Agent，低层级控制 |
| MetaGPT | github.com/geekan/MetaGPT | 高星 | GitHub 内多 Agent 软件工程 |

### 自动化与工作流

| 工具 | GitHub | Stars | 说明 |
|---|---|---|---|
| n8n | github.com/n8n-io/n8n | ~203k | 开源工作流，可视化构建，自托管 |
| Dify | github.com/langgenius/dify | ~154k | 拖拽式工作流，RAG，MCP 集成 |
| ECC | github.com/ECC-ai/ECC | ~245k | Agent 治理，AgentShield GitHub App |
| Browser Use | github.com/browser-use/browser-use | 新兴 | 自然语言驱动浏览器操作 |
| Crawl4AI | github.com/unclecode/crawl4ai | 新兴 | LLM 友好的网页爬取 |
| Open Interpreter | github.com/OpenInterpreter/open-interpreter | ~30k | 轻量级，廉价模型跑前沿效果 |

### 其他值得关注的

| 工具 | GitHub | Stars | 说明 |
|---|---|---|---|
| Buzz | github.com/block/buzz | 新兴 | Block 出品，Nostr 协议，密码学身份，团队 Agent |
| Cindy | github.com/NousResearch/cindy | 新兴 | 复用 Claude Code/Codex 订阅的本地 Agent |
| Agent! | github.com/macOS26/agent | ~349 | 原生 macOS 智能体 harness，17 个 LLM 提供商 |
| Agency Agents | github.com/msitarzewski/agency-agents | 新兴 | AI 专业角色团队，一键安装到 Claude Code/Cursor/Codex |

---

## 本地运行 + 云端混合方案（推荐）

针对本 vault 环境（本地 Ollama 7 模型 + OmniRoute 聚合网关 + OrcaRouter 额度紧张）：

| 方案 | 工具 | 说明 |
|---|---|---|
| 本地离线 | Jan + Ollama qwen3:14b-unlimited | 零 API 成本，隐私优先 |
| 本地优先 | Goose + OmniRoute | MCP 协议，模型路由灵活 |
| 混合模式 | Chatbox + 多 API 提供商 | 本地模型兜底，云端模型备用 |
| 终端党 | Aider + OmniRoute | Git 工作流原生集成 |
| 浏览器 Agent | Perplexity Comet | 免费层已完全开放，零配置 |

---

## 推荐优先级

| 优先级 | 工具 | 推荐理由 |
|---|---|---|
| ⭐⭐⭐ | Goose | Block 出品，模型无关，MCP 协议，终端+GUI 双模式 |
| ⭐⭐⭐ | Aider | 终端编程 Agent，自动 commit，Git 原生集成 |
| ⭐⭐⭐ | Perplexity Comet | 零配置浏览器 Agent，免费层已完全开放 |
| ⭐⭐ | Jan | 本地模型运行时，隐私优先，离线可用 |
| ⭐⭐ | OpenClaw | 216K Stars，本地优先+多平台，社区最活跃 |
| ⭐⭐ | Chatbox | 桌面 AI 客户端，多 API 灵活切换 |
| ⭐ | n8n / Dify | 自动化工作流，适合非技术用户 |
| ⭐ | opencode | 已集成到本环境，长期维护 |

---

## 安装方式

```bash
# Goose（Block 出品）
brew install block/tap/goose

# Aider
pip install aider-chat

# Jan（下载桌面应用）
# https://jan.ai

# Chatbox
# https://github.com/chatboxai/chatbox/releases

# Zero（Go 语言）
go install github.com/GitLawb/zero@latest

# OpenClaw（需 Docker 或源码编译）
# https://github.com/openclaw/openclaw

# opencode
brew install opencode
```

---

## 备注

- **微信推送**：当前环境无 IMA/qclaw 微信推送配置，已推送到飞书。
- **长期维护判断**：GitHub Stars > 1k 且近 6 个月有提交记录的项目视为长期维护。
- **免费判断**：以 MIT/GPL/Apache 开源协议或明确免费版为准，付费功能单独标注。
- 本页面与 [[Mac-免费效率工具推荐-2026-09]] 互补，后者侧重系统工具，本页面侧重 AI Agent 工具。
