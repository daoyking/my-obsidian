# Mac & iPhone 免费 App 推荐 — 2026-08-25

> 存放 Agent: automation-1786437213877（每日 09:00 推荐 Mac/iPhone 免费 App）
> 来源: GitHub / AI-HOT / 全网检索
> 筛选条件: 免费开源、长期维护、提升工作效率或有趣

---

## 今日主题：隐私优先的本地 AI + 开发辅助工具

与今日之前的 11 天主题（截图录屏/阅读笔记/AI工作台/终端/AI远程/系统增强/跨平台协作/AI Agent基础设施/效率工具/AI编程+多端远程/工具集）无重叠，本次聚焦「本地 AI 基础设施 + IDE 级辅助」。

---

## Mac / iPhone 推荐

### 1. Jan — 本地 LLM 桌面客户端
- **GitHub**: [janhq/jan](https://github.com/janhq/jan)
- **Stars**: ~41,000+ | **License**: AGPL-3.0
- **下载量**: 570万+
- **维护状态**: ✅ 2026年3月 v0.7.9，持续活跃
- **一句话**: 完全离线的 ChatGPT 平替，本地运行 Llama/Qwen/DeepSeek/Gemini 等开源模型
- **亮点**:
  - Tauri 构建，内存占用远低于 Electron 竞品
  - 支持 50+ 模型，一键从 Hub 下载 GGUF 格式模型
  - 本地 API Server（OpenAI 兼容），AI Agent 可直接调用
  - 支持 Ollama / LM Studio / 云端 API 混合切换
  - 插件市场（RAG、Web Search、代码解释器）
- **适合**: 隐私优先、不想依赖云端 AI 的用户和开发者
- **下载**: https://jan.ai

---

### 2. Open WebUI — 自托管 ChatGPT 界面
- **GitHub**: [open-webui/open-webui](https://github.com/open-webui/open-webui)
- **Stars**: ~78,000+ | **License**: MIT
- **维护状态**: ✅ 2026年8月持续活跃，400+ 贡献者
- **一句话**: 最接近 ChatGPT UI 体验的自托管方案，支持 30+ LLM 后端
- **亮点**:
  - Docker 一键部署：`docker run -d -p 3000:8080 ghcr.io/open-webui/open-webui:main`
  - 自动检测本地 Ollama，模型一键接入
  - 多用户权限管理，适合团队内部部署
  - 内置 RAG：上传 PDF/DOCX → 向量搜索 → 带引用的回答
  - 语音输入（Whisper STT）+ 语音输出（TTS）
  - Function Calling + Pipeline 中间件模式
- **适合**: 团队内部搭建私有 AI 知识库 / 不想用云端 API 的开发者
- **下载**: https://github.com/open-webui/open-webui

---

### 3. AnythingLLM — 文档 RAG + AI Agent 工作空间
- **GitHub**: [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)
- **Stars**: ~65,000+ | **License**: MIT
- **维护状态**: ✅ 2026年8月 v1.15.0，每日有提交
- **一句话**: 把任何文档变成可对话的知识库，零代码 AI Agent 构建器
- **亮点**:
  - 桌面应用 + Docker 双模式，单用户开箱即用
  - 支持 30+ LLM 提供商（本地 Ollama / 云端 OpenAI / Anthropic / Gemini 等）
  - 拖拽上传 PDF、DOCX、Markdown、网页 → 自动分块 + 向量化
  - 无代码 Agent 构建器：可视化流程编排（Agent Flows）
  - MCP（Model Context Protocol）支持，AI Agent 可直接调用
  - 定时任务（Scheduled Tasks），自动执行 Agent 工作流
  - Magic Features：智能语音转写、高亮自动补全、全局 AI 助手
- **适合**: 需要本地私有知识库的开发者、研究人员、团队
- **下载**: https://anythingllm.com

---

### 4. Glass — 隐形 AI 桌面助手（macOS）
- **GitHub**: [pickle-com/glass](https://github.com/pickle-com/glass)
- **Stars**: ~20,000+ | **License**: GPL-3.0
- **维护状态**: ✅ 2026年7月全面重构（代码清理 + Windows 支持 + 本地 LLM）
- **一句话**: 后台运行，实时捕捉屏幕+音频，AI 自动生成会议纪要/摘要/行动项
- **亮点**:
  - 真正隐形：不出现在 Dock、截图、录屏中
  - 实时屏幕分析 + 麦克风音频，智能提取上下文
  - 会议场景：自动生成纪要、摘要、行动项，支持 OpenAI/Gemini/Claude/Ollama
  - 快捷键 `Cmd+\` 呼出，`Cmd+Enter` 用全部历史上下文提问
  - 支持本地 LLM + Whisper（离线语音转写）
  - Firebase 存储（可选用自己的 API Key）
- **适合**: 经常开会、需要自动化会议记录和分析的职场人
- **下载**: https://github.com/pickle-com/glass

---

### 5. Organic Maps — 离线地图导航（iPhone / Android / macOS）
- **GitHub**: [organicmaps/organicmaps](https://github.com/organicmaps/organicmaps)
- **Stars**: ~3,500+ | **License**: AGPL-3.0
- **维护状态**: ✅ 长期活跃维护
- **一句话**: 开源无广告离线地图，替代高德/Google Maps，隐私优先
- **亮点**:
  - 完全离线：下载城市地图包，无网络也能导航
  - 无广告、无追踪、无账号，隐私友好
  - 步行/骑行/驾车导航，支持 POI 搜索
  - OpenStreetMap 数据，持续更新
  - macOS / iOS / Android 全平台
- **适合**: 旅行者、户外爱好者、隐私敏感用户
- **下载**: https://organicmaps.app

---

## 对比速览

| App | 平台 | Stars | License | 维护活跃度 | 核心价值 |
|-----|------|-------|---------|-----------|---------|
| Jan | Mac/Win/Linux | ~41k | AGPL-3.0 | ✅ 活跃 | 本地 LLM 桌面客户端 |
| Open WebUI | Mac/Win/Linux | ~78k | MIT | ✅ 活跃 | 自托管 ChatGPT 界面 |
| AnythingLLM | Mac/Win/Linux | ~65k | MIT | ✅ 活跃 | 文档 RAG + AI Agent |
| Glass | Mac/Win | ~20k | GPL-3.0 | ✅ 活跃 | 隐形 AI 桌面助手 |
| Organic Maps | iOS/Android/Mac | ~3.5k | AGPL-3.0 | ✅ 活跃 | 离线地图导航 |

---

## 安装建议

| 优先级 | App | 安装方式 |
|--------|-----|---------|
| ⭐⭐⭐ | Jan | https://jan.ai 直接下载 |
| ⭐⭐⭐ | Open WebUI | `docker run -d -p 3000:8080 ghcr.io/open-webui/open-webui:main` |
| ⭐⭐ | AnythingLLM | https://anythingllm.com 下载桌面版 |
| ⭐⭐ | Glass | `git clone https://github.com/pickle-com/glass && npm run setup` |
| ⭐ | Organic Maps | App Store 搜索 Organic Maps 下载 |

---

*推荐时间: 2026-08-25 09:01 (北京时间)*
*来源验证: GitHub API + WebSearch + Awesome Mac 社区*
