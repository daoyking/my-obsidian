---
title: Awesome-LLM-Apps
type: source
tags: [source, github, awesome, agent, rag, llm, mcp, generative-ui]
ingested: 2026-09-01
repo: "https://github.com/Shubhamsaboo/awesome-llm-apps"
stars: 135538
forks: 19926
language: Python
license: Apache-2.0
---

# Awesome LLM Apps

> 原始 README 全文快照（2026-09-01，通过 `gh api repos/Shubhamsaboo/awesome-llm-apps/readme` 获取，24.8KB）。已剥离 banner / 赞助商 HTML，保留全部条目与描述。

**100+ open-source AI agents, agent skills, and RAG apps. Hand-built, tested end-to-end, Apache-2.0.**

Clone it, ship it, sell it - 100% free and open-source.
Works with Claude, Gemini, GPT, DeepSeek, Llama, Qwen and other open-source models.

仓库元数据（2026-09-01）：135,538 stars · 19,926 forks · 主语言 Python · Apache-2.0 · 创建 2024-04-29 · 最近 push 2026-08-31 · topics: agents / llms / python / rag · 主页 https://www.theunwindai.com

## 快速开始

给编码 Agent 装一个技能（10 秒）：

```bash
npx skills add https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/agent_skills/project-graveyard
```

然后问它："why do I never finish my side projects?"

或者 clone 后 30 秒跑起来任意一个 agent：

```bash
git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git
cd awesome-llm-apps/starter_ai_agents/ai_travel_agent
pip install -r requirements.txt
streamlit run travel_agent.py
```

## 🧩 Agent Skills

*给编码 Agent 新能力。一条命令安装，自然语言使用。每个 skill 都带真实代码，并通过安全 + eval 的 CI 门禁。兼容 Claude Code、Codex、Cursor 等编码 Agent。*

- ⚰️ Project Graveyard (`agent_skills/project-graveyard/`) - 找出你放弃的每个副项目，告诉你它为什么死掉，并帮你完成值得回头做的那个
- 🔭 Scope Creep Detector (`agent_skills/scope-creep-detector/`) - 检查一次 diff 是否超出声明意图，并给出保留 / 拆分 / 说明的建议
- 🏺 Commit Archaeologist (`agent_skills/commit-archaeologist/`) - 从引入 commit、后续编辑、共变文件与意图线索，重建某文件或代码区域为何存在
- 🩺 Dependency Doctor (`agent_skills/dependency-doctor/`) - 检查依赖清单中的标准库 pin、过时 backport、未锁定条目、重复约束、已 yank 版本
- 🧠 Advisor Orchestrator Worker (`agent_skills/advisor-orchestrator-worker/`) - Meta Loop：Claude Fable 5 做 advisor，GPT-5.6 做 orchestrator，Gemini 3.7 Flash 做 worker
- ♾️ Self-Improving Agent Skills (`agent_skills/self-improving-agent-skills/`) - 用 Gemini 与 ADK 自动优化 agent skills

## 🌱 Starter AI Agents

*单文件 agent，一个 API key 就能跑——最好的起点。*

- 🎙️ AI Blog to Podcast Agent (`starter_ai_agents/ai_blog_to_podcast_agent/`) - 把任意博客 URL 变成一集带旁白的播客
- ❤️‍🩹 AI Breakup Recovery Agent (`starter_ai_agents/ai_breakup_recovery_agent/`) - 一个 agent 团队陪你走过失恋期
- 📊 AI Data Analysis Agent (`starter_ai_agents/ai_data_analysis_agent/`) - 用自然语言问 CSV/Excel
- 🩻 AI Medical Imaging Agent (`starter_ai_agents/ai_medical_imaging_agent/`) - 用 Gemini 做 X 光/扫描影像的诊断分析
- 😂 AI Meme Generator Agent (Browser) (`starter_ai_agents/ai_meme_generator_agent_browseruse/`) - 驱动真实浏览器做梗图，而不是调图像 API
- 🎵 AI Music Generator Agent (`starter_ai_agents/ai_music_generator_agent/`) - prompt 进，MP3 出
- 🛫 AI Travel Agent (Local & Cloud) (`starter_ai_agents/ai_travel_agent/`) - 个性化逐日旅行行程
- 💸 AI x402 Paying Agent (`starter_ai_agents/ai_x402_paying_agent/`) - 带钱包的 agent，按次付费获取数据，不需要 API key
- ✨ Gemini Multimodal Agent (`starter_ai_agents/multimodal_ai_agent/`) - 视频分析 + 网页搜索合在一个 agent
- 🔄 Mixture of Agents (`starter_ai_agents/mixture_of_agents/`) - 多个 LLM 作答，一个聚合出最佳答案
- 📊 xAI Finance Agent (`starter_ai_agents/xai_finance_agent/`) - Grok 驱动的实时股票分析
- 🔍 OpenAI Research Agent (`starter_ai_agents/openai_research_agent/`) - 基于 OpenAI Agents SDK 的多 agent 主题研究
- 🕸️ Web Scraping AI Agent (`starter_ai_agents/web_scraping_ai_agent/`) - 描述要抽什么，agent 就去爬

## 🚀 Advanced AI Agents

*生产级 agent：带工具、记忆与多步推理。*

- 🏚️🍌 AI Home Renovation Agent with Nano Banana Pro (`advanced_ai_agents/multi_agent_apps/ai_home_renovation_agent`) - 输入空间照片，输出改造计划与照片级渲染
- 🧠 DevPulse AI - Multi-Agent Signal Intelligence (`advanced_ai_agents/multi_agent_apps/devpulse_ai/`) - 聚合技术信号并打分，产出每日情报摘要
- 🔍 AI Deep Research Agent (`advanced_ai_agents/single_agent_apps/ai_deep_research_agent/`) - OpenAI Agents SDK + Firecrawl 的综合网页研究
- 📊 AI VC Due Diligence Agent Team (`advanced_ai_agents/multi_agent_apps/agent_teams/ai_vc_due_diligence_agent_team`) - Gemini 3 驱动的多 agent 初创投资分析
- 🔬 AI Research Planner & Executor (Google Interactions API) (`advanced_ai_agents/single_agent_apps/research_agent_gemini_interaction_api`) - 有状态会话的多阶段研究，自动生成信息图
- 🤝 AI Consultant Agent (`advanced_ai_agents/single_agent_apps/ai_consultant_agent`) - 实时网页研究 + 市场分析与战略建议
- 🏗️ AI System Architect Agent (`advanced_ai_agents/single_agent_apps/ai_system_architect_r1/`) - DeepSeek R1 推理 + Claude 做架构评审
- 💰 AI Financial Coach Agent (`advanced_ai_agents/multi_agent_apps/ai_financial_coach_agent/`) - 个性化预算、负债与储蓄分析
- 🎬 AI Movie Production Agent (`advanced_ai_agents/single_agent_apps/ai_movie_production_agent/`) - 一句话电影概念 → 剧本草稿与选角建议
- 📈 AI Investment Agent (`advanced_ai_agents/single_agent_apps/ai_investment_agent/`) - 基于 Yahoo Finance 的股票对比报告
- 📡 Earnings Call Analyst Agent (`advanced_ai_agents/single_agent_apps/earnings_call_analyst_agent/`) - 把 YouTube 财报电话会变成与播放同步的分析师工作台
- 🏋️‍♂️ AI Health & Fitness Agent (`advanced_ai_agents/single_agent_apps/ai_health_fitness_agent/`) - 按目标定制饮食与训练计划
- 🚀 AI Product Launch Intelligence Agent (`advanced_ai_agents/multi_agent_apps/product_launch_intelligence_agent`) - 竞品发布的 GTM 情报
- 🔍 AI Fraud Investigation Agent (`advanced_ai_agents/single_agent_apps/ai_fraud_investigation_agent/`) - 交叉比对公开记录，标记对不上的机构
- 🗞️ AI Journalist Agent (`advanced_ai_agents/single_agent_apps/ai_journalist_agent/`) - 研究、撰写、编辑任意主题文章
- 🧠 AI Mental Wellbeing Agent (`advanced_ai_agents/multi_agent_apps/ai_mental_wellbeing_agent/`) - 多 agent 协作的心理健康支持方案
- 📑 AI Meeting Agent (`advanced_ai_agents/single_agent_apps/ai_meeting_agent/`) - 会前提供背景、行业洞察与策略简报
- 🧬 AI Self-Evolving Agent (`advanced_ai_agents/multi_agent_apps/ai_self_evolving_agent/`) - 用 EvoAgentX 让 agent 重写自己的工作流
- 👨🏻‍💼 AI Sales Intelligence Agent Team (`advanced_ai_agents/multi_agent_apps/agent_teams/ai_sales_intelligence_agent_team`) - 实时生成竞品销售 battle card
- 🎧 AI Social Media News and Podcast Agent (`advanced_ai_agents/multi_agent_apps/ai_news_and_podcast_agents/`) - 把你信任的信息源策展成简报与生成播客
- 🌐 Openwork - Open Browser Automation Agent（外部仓库 https://github.com/accomplish-ai/coworker） - 操作真实浏览器的开源 agent
- 🛡️ Trust-Gated Multi-Agent Research Team (`advanced_ai_agents/multi_agent_apps/trust_gated_agent_team/`) - 每个 agent 都验证，每个动作进哈希链审计日志

## 🛰️ Always-on Agents

*后台 agent：按计划或事件运行，监控变化中的上下文，判断什么需要注意，并主动推送更新、产物或动作。*

- 📰 Always-on Hacker News Briefing Agent (`always_on_agents/always_on_hn_briefing_agent/`) - 定时侦察兵，把排序好的每日简报发到 Slack 或邮件
- 📡 Release Radar Agent (`always_on_agents/release_radar_agent/`) - 盯依赖发布，简报 breaking / deprecated / security / 大版本变更

## 🤝 Multi-agent Teams

*多个 agent 协作完成复杂跨域任务。*

- 🧲 AI Competitor Intelligence Agent Team - 从竞品自家网站构建结构化拆解
- 💲 AI Finance Agent Team - 20 行 Python 的金融分析师团队
- 🎨 AI Game Design Agent Team - 一群设计专家产出完整游戏概念
- 🧭 AG2 Adaptive Research Team - 基于 AG2 的路由 + 回退协作
- 👨‍⚖️ AI Legal Agent Team (Cloud & Local) - 研究、合同分析与策略的完整法务阵容
- 💼 AI Recruitment Agent Team - 从简历筛选到面试排期的端到端
- 🏠 AI Real Estate Agent Team - 找房、市场分析与推荐
- 👨‍💼 AI Services Agency (CrewAI) - 给你的软件项目做范围界定与规划的数字代理公司
- 👨‍🏫 AI Teaching Agent Team - 一组 agent 教师构建你的完整学习路径
- 💻 Multimodal Coding Agent Team - 拍张代码问题的照片，得到沙箱里的解法
- ✨ Multimodal Design Agent Team - Gemini 专家团的设计评审
- 🎨🍌 Multimodal UI/UX Feedback Agent Team - 落地页反馈 + 自动生成改进版
- 🌏 AI Travel Planner Agent Team - 一个团队打造的完整行程

## 🗣️ Voice AI Agents

*语音进、语音出，使用实时语音 API。*

- 🗣️ AI Audio Tour Agent - 按你的位置、兴趣和节奏生成自助语音导览
- 📞 Customer Support Voice Agent - 基于你自家文档的语音应答
- 🛡️ Insurance Claim Live Agent Team - Gemini Live 驱动的实时语音理赔受理
- 🔊 Voice RAG Agent (OpenAI SDK) - 问 PDF，听答案
- 🎙️ OpenSource Voice Dictation Agent (Wispr Flow clone)（外部 https://github.com/akshayaggarwal99/jarvis-ai-assistant） - 开源听写，说到哪打到哪

## 🖼️ Generative UI and Agentic Frontends

*agent 渲染交互式 UI 组件而非纯文本：表单、卡片、图表、可编辑计划。*

- 🗂️ Generative UI Starter Project (`generative_ui_agents/generative-ui-starter-project/`) - 你和 agent 一起操作的对话式看板
- 🪙 AI Financial Coach Agent (`generative_ui_agents/ai-financial-coach-agent/`) - 预算/储蓄/负债计划渲染为可交互卡片
- 📊 AI Dashboard Canvas Agent (`generative_ui_agents/ai-dashboard-canvas-agent/`) - 对话描述仪表盘，图表在实时画布上组装出来
- 🛠️ AI MCP App Builder (`generative_ui_agents/ai-mcp-app-builder/`) - 描述一个 MCP app，拿回一个活的沙箱实例
- ✈️ MCP Apps Generative UI Showcase (`generative_ui_agents/mcp-apps-generative-ui-showcase/`) - 能渲染真实交互 UI 的 MCP apps，含航班搜索
- 🎛️ AI Shadcn Component Generator (`generative_ui_agents/ai-shadcn-component-generator/`) - 聊出生产可用的 shadcn 组件
- 🔍 AI Deep Research Agent (`generative_ui_agents/ai-deep-research-agent/`) - 每个工具调用都渲染成实时工作区卡片的研究过程

## 🎮 Autonomous Game-Playing Agents

*端到端玩游戏的 agent：推理、策略与动作。*

- 🎮 AI 3D Pygame Agent (`advanced_ai_agents/autonomous_game_playing_agent_apps/ai_3dpygame_r1/`) - DeepSeek R1 写 PyGame 代码，浏览器 agent 实时跑
- ♜ AI Chess Agent - Agent 执白 vs Agent 执黑，走法经过校验
- 🎲 AI Tic-Tac-Toe Agent - 两个不同 LLM 逐步对弈

## ♾️ MCP AI Agents

*通过 Model Context Protocol 连接外部工具与数据的 agent。*

- ♾️ Browser MCP Agent (`mcp_ai_agents/browser_mcp_agent/`) - 用自然语言经 MCP 驱动真实浏览器
- 🐙 GitHub MCP Agent - 用自然语言探索分析任意仓库
- 📑 Notion MCP Agent - 在终端里聊你的 Notion 页面
- 🌍 AI Travel Planner MCP Agent - 基于实时 Airbnb 与 Google Maps 数据的行程
- 🔀 Multi-MCP Agent Router - 多个专家 agent，各自挂自己的 MCP server
- 🔌 OpenAI Remote MCP Tool Bridge - 把 OpenAI function calling 直连远端 MCP server

## 📀 RAG (Retrieval Augmented Generation)

*检索流水线：从简单链到 agentic 与多源。*

- 🔥 Agentic RAG with Embedding Gemma (`rag_tutorials/agentic_rag_embedding_gemma`) - EmbeddingGemma + Llama 3.2 的全本地 agentic RAG
- 🧐 Agentic RAG with Reasoning - 检索时可观察 agent 的逐步推理
- 📰 AI Blog Search (RAG) - 基于 LangGraph 的博客内容 agentic 搜索
- 🔍 Autonomous RAG - GPT-4o 从你的 PDF 作答，失败时回退网页搜索
- 🔄 Contextual AI RAG Agent - 托管式 RAG：几分钟从 datastore 到有据可依的对话
- 🔄 Corrective RAG (CRAG) - 检索自我打分并在作答前重试
- 📎 Typed Agentic RAG with Pydantic AI - 带精确引用的结构化答案，证据不足时选择拒答
- 🐋 Deepseek Local RAG Agent - 本地 DeepSeek 在你的文档上推理
- 🤔 Gemini Agentic RAG - 查询改写 + 网页回退，用 Gemini Flash Thinking
- 👀 Hybrid Search RAG (Cloud) - 关键词 + 向量检索喂给 Claude
- 🔄 Llama 3.1 Local RAG - 与任意网页对话，完全离线
- 🖥️ Local Hybrid Search RAG - 混合检索，全部跑在你本机
- 🧬 Multimodal Agentic RAG - 文本/PDF/图像/音频/视频，带引用作答
- 🦙 Local RAG Agent - Llama 3.2 + Qdrant，无需 API key
- 🧩 RAG-as-a-Service - 50 行以内的生产级 RAG 服务
- ✨ RAG Agent with Cohere - Command R7B 检索 + 网页搜索回退
- ⛓️ Basic RAG Chain - 最小检索流水线，用于药物研究
- 📠 RAG with Database Routing - 自动把每个问题路由到正确的数据库
- 🖼️ Vision RAG - 用 Embed-4 问图像与 PDF 页面
- 🩺 RAG Failure Diagnostics Clinic - 系统性地诊断你的 RAG 管线为何出错
- 🕸️ Knowledge Graph RAG with Citations - 多跳答案 + 可验证来源归属

## 💾 LLM Apps with Memory

*跨会话记住对话与用户状态的 agent 和聊天机器人。*

- 💾 AI ArXiv Agent with Memory - 记住你研究兴趣的论文搜索
- 🛩️ AI Travel Agent with Memory - 记住你偏好的旅行助手
- 💬 Llama3 Stateful Chat - Llama 3 的会话持久化聊天
- 📝 LLM App with Personalized Memory - 跨对话保持上下文的聊天机器人
- 🗄️ Local ChatGPT Clone with Memory - 全本地，每个用户一份个人记忆
- 🧠 Multi-LLM Application with Shared Memory - 不同模型，一份共享对话记忆

## 💬 Chat with X

*把任意数据源变成聊天界面。*

- 💬 Chat with GitHub (GPT & Llama3) - 30 行 RAG 问答任意仓库
- 📨 Chat with Gmail - 问你的收件箱
- 📄 Chat with PDF (GPT & Llama3) - 经典款，30 行 Python
- 📚 Chat with Research Papers (ArXiv) - 用 GPT-4o 对话式探索 arXiv
- 📝 Chat with Substack - 与任意 newsletter 的存档对话
- 📽️ Chat with YouTube Videos - 通过字幕问视频

## 🎯 LLM Optimization Tools

*在不损失质量的前提下降低 token 用量、上下文体积与 API 成本。*

- 🎯 Toonify Token Optimization - 用 TOON 格式降低 30-60% LLM API 成本
- 🧠 Headroom Context Optimization - 降低 50-90% LLM API 成本

## 🔧 LLM Fine-tuning

*开源模型的端到端微调配方。*

- 🦥 Gemma 3 Fine-tuning - 4-bit LoRA + Unsloth，小而可读
- 🦙 Llama 3.2 Fine-tuning - 30 行微调，Colab 上免费跑

## 🧑‍🏫 AI Agent Framework Crash Courses

*主流 agent 框架的深度教程。*

- Google ADK Crash Course - 起步 agent、结构化输出、工具（内置/函数/第三方/MCP）、记忆、回调、插件与多 agent 模式。模型无关。
- OpenAI Agents SDK Crash Course - 起步 agent、function calling、结构化输出、工具、记忆、评估、handoffs、swarm 编排与路由逻辑。

## 目录规模（2026-09-01 实测条目数）

| 目录 | 条目数 |
|---|---|
| agent_skills | 9 |
| starter_ai_agents | 17 |
| advanced_ai_agents/single_agent_apps | 18 |
| advanced_ai_agents/multi_agent_apps | 17 |
| advanced_ai_agents/multi_agent_apps/agent_teams | 16 |
| always_on_agents | 2 |
| voice_ai_agents | 4 |
| generative_ui_agents | 9 |
| mcp_ai_agents | 7 |
| rag_tutorials | 24 |
| advanced_llm_apps/llm_apps_with_memory_tutorials | 7 |
| advanced_llm_apps/chat_with_X_tutorials | 7 |
| advanced_llm_apps/llm_optimization_tools | 3 |
| advanced_llm_apps/llm_finetuning_tutorials | 2 |
| ai_agent_framework_crash_course | 2 |

- Apache-2.0 · Fork it, ship it, sell it.
- README 提供 readme-i18n 多语言翻译（含中文）。
