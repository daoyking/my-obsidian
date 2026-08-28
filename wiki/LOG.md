---
title: 操作日志
type: topic
tags: [log]
created: 2026-08-07
updated: 2026-08-19
sources: []
status: active
---

# 📒 操作日志

> 记录每次 Ingest / Query / File Back / Lint 操作。append-only，只增不改。

## 格式

```
### YYYY-MM-DD HH:mm | 操作类型 | 来源/主题
- 做了什么
- 影响了哪些页面
- 备注
```

---

### 2026-08-07 12:15 | Init | 知识库初始化
- 按「卡帕西 LLM Wiki 方法」搭建三层架构：raw / wiki / schema
- 创建目录骨架、CLAUDE.md（Schema）、INDEX.md、LOG.md、README.md
- 创建 Templater 模板集（概念/实体/主题/QA/项目/日记）
- 迁移历史笔记：键盘侠→wiki/entities、AI→wiki/topics、日记→daily
- 初始化种子知识页（前端工程师技术栈实体页与概念页）
- 配置插件（Templater 模板目录、附件目录、Dataview、Linter）
- 关联 git 远程仓库 https://github.com/daoyking/my-obsidian.git
- 备注：知识库自此进入自成长阶段，待首次 Ingest 驱动生长。

### 2026-08-07 12:20 | Ingest | mini-vue 项目源码
- 来源：`~/about-project/mini-vue`（上游 cuixiaorui/mini-vue），存入 `raw/articles/mini-vue-overview.md`
- 编译产出（新建）：`wiki/concepts/依赖收集.md`、`wiki/snippets/mini-vue-reactive.md`
- 联动更新：
  - `projects/mini-vue.md`（补全包结构/技术栈/关键设计，status→active）
  - `wiki/concepts/响应式.md`（补 Vue3/mini-vue 实现，status→active，链 依赖收集）
  - `wiki/entities/Vue.md`（status→active，链 依赖收集）
  - `wiki/concepts/虚拟DOM.md`（补 mini-vue/mini-react 实现参考，status→seed）
- 影响 6 个 wiki 页面 + 1 个 raw 源，建立 8+ 交叉链接
- 备注：本次为首次 Ingest 演示，验证「raw→编译→联动更新→记日志」流程闭环。

### 2026-08-07 12:35 | Ingest | 《动手学大模型》dive-into-llms
- 来源：https://github.com/Lordog/dive-into-llms（上海交大张倬胜，11 章 LLM 实践教程），存入 `raw/articles/dive-into-llms-overview.md`
- 编译产出（新建）：
  - `wiki/topics/动手学大模型.md`（主题页，11 章地图 + 学习优先级建议）
  - `wiki/concepts/思维链.md`（CoT）
  - `wiki/concepts/微调.md`（SFT/LoRA/QLoRA）
  - `wiki/concepts/RLHF.md`（三阶段 + DPO 演进）
  - `wiki/concepts/越狱攻击.md`（攻击手法 + 防御）
  - `wiki/concepts/多模态大模型.md`（MLLM + 前端结合点）
- 联动更新：
  - `wiki/topics/AI.md`（升级为 AI 知识枢纽：补训练对齐/提示推理/安全攻防/能力扩展子主题，链 6 个新概念页 + 动手学大模型主题，加来源）
- 影响 7 个 wiki 页面 + 1 个 raw 源，建立 15+ 交叉链接
- 备注：本次为第二次 Ingest，AI 主题体系初步成型。待建概念页（Prompt工程/蒸馏/量化/Agent/Agent安全/知识编辑/模型水印/隐写术）作为后续 Ingest/Query 的生长点。

### 2026-08-07 12:41 | Lint | 首次健康检查
- 检查项：悬空链接 / 孤立页 / frontmatter 完整性 / 连通性
- 发现问题：
  - 悬空链接 9 个（被引用但无页面）：蒸馏、Agent、Agent安全/智能体安全（命名冲突）、Prompt工程、模型水印、隐写术、知识编辑、量化、Linter
  - 孤立页 1 个：`wiki/topics/前端工程化.md`（无入链）
  - frontmatter：仅 INDEX/LOG 缺 sources（结构性页面，可接受）
  - 连通性健康：Vue(12)/组件化(11)/响应式(11)/React(10)/虚拟DOM(10) 为枢纽
- 修复动作：
  - 补建 9 个 seed 页：蒸馏/Agent/Agent安全/Prompt工程/模型水印/隐写术/知识编辑/量化（concept）+ Linter（entity），均挂回 dive-into-llms 来源与交叉链接
  - 修命名冲突：`越狱攻击.md` 的 智能体安全 → Agent安全（统一到 [[Agent安全]] 页，aliases 含「智能体安全」）
  - 补孤立页入链：`Vite.md` 增链 [[前端工程化]]
- 复检结果：悬空链接 0、孤立页 0、wiki 页面总数 38
- 备注：首次 Lint 闭环，知识库结构健康。后续建议每轮 Ingest 后跑一次 Lint。

### 2026-08-07 12:54 | Ingest | 《AI Agents in Depth》PDF（316 页）
- 来源：`~/Downloads/about-jindy/AI-Agents-in-Depth-zh-CN.pdf`（316 页 Agent 工程专著），用 pypdf 提取全文+大纲，存入 `raw/papers/ai-agents-in-depth.md`
- 编译产出（新建 11 页）：
  - 主题页 `AI-Agents-in-Depth`（9 章地图 + 与动手学大模型互补定位）
  - 概念页：`Harness工程`、`上下文工程`、`ReAct`、`提示注入`、`记忆系统`、`MCP`、`Coding-Agent`、`Agent持续进化`、`RAG`、`Agent评估`
- 联动更新：
  - `Agent.md`（status→active，补 Harness/ReAct/上下文工程/MCP/记忆系统，加来源）
  - `RLHF.md`（补多轮信用分配/过程vs结果奖励，链 Agent持续进化，加来源）
  - `AI.md`（新增 Agent 工程子主题组 + 第二本学习资源 + 来源）
  - `思维链.md`（链 ReAct：CoT 是 ReAct 推理子环节）
- Lint 复检：补建 RAG/Agent评估 后悬空 0、孤立 0、共 49 页
- 影响 15 个 wiki 页面 + 1 个 raw 源，建立 30+ 交叉链接
- 备注：第三次 Ingest，Agent 工程体系成型。「Agent持续进化四法」与本库自成长理念高度同构（→知识=Ingest、→指令=CLAUDE.md、→程序=Skill、→参数=训练）。

### 2026-08-07 13:06 | Ingest | Chrome 书签全量（1808 条）
- 来源：本地 Chrome `Bookmarks` JSON，pypdf 同款 venv 用 json 解析；存入 `raw/web/chrome-bookmarks.md`（175KB）
- 规模：1808 条书签 · 40 文件夹 · 重复仅 2 处（github.com/daoyking、chrome://inspect）
- 隐私处理：raw dump 含个人浏览数据 → 加入 `.gitignore`，仅本地 Obsidian 可浏览，不入 git
- 编译产出：`wiki/topics/书签库.md` 索引页（结构+统计+域名分布+文件夹→wiki实体映射，可安全同步）
- 文件夹映射发现：搬砖人专用(983)含 vue/react/css/git/vim/node family，直接对应 [[Vue]]/[[React]]/[[Vim]]/[[Node.js]] 等实体；chartGPT(65)是 AI 工具集 → [[AI]]/[[Agent]]
- 影响：1 raw 源(本地) + 1 索引页，建立 7+ 交叉链接
- 待办：chartGPT/vue family 编译成 wiki 来源页；2 处重复书签建议用户在 Chrome 手动清理

### 2026-08-07 13:19 | Ingest | 书签三个子文件夹编译（chartGPT/vue·react family/面试）
- ① chartGPT(65) → `wiki/topics/AI工具集.md`（分7类：对话模型/编程助手/Agent/搜索/LLMOps/文档工具/学习导航，链 AI/Agent/RAG/MCP/Prompt工程/Coding-Agent）
- ② vue family(133)+react family(30) → `raw/articles/vue-family-bookmarks.md`、`react-family-bookmarks.md`（生态资源列表），反哺 [[Vue]]/[[React]] 实体页加「学习资源」节
- ③ 面试(15) → `wiki/topics/前端面试.md`（分5类：综合指南/手写代码/JS基础/Vue专题/大厂面经）
- 联动：书签库索引页清单 3 项打勾，新增 2 条后续候选（AI工具集 stale 标记、3311 归属）
- Lint：修 1 处目录式悬空链接（`wiki/snippets`→纯文本），复检 0 悬空/0 孤立/共 52 页
- 备注：书签子集均为公开 dev/学习资源，可入库同步（仅全量 dump 含个人数据保持 gitignore）

### 2026-08-07 13:25 | Lint | AI工具集 时效检测
- 方法：curl 批量（Python 线程池 12 并发,6s 超时）+ WebFetch 抽样校准
- 结果：200=23(存活) · 000=38(假阳性,含 github/chatgpt/perplexity 等确定存活巨头,反爬所致) · 403=2 · 401=1 · 500=1
- WebFetch 校准：Bard→重定向 Gemini(改名非下线)；Forefront 仍在线(curl 误报 000)
- 标记：AI工具集.md 增「Lint 时效评估」节——确认存活 23+ / 改名 1(Bard→Gemini) / 疑似失效待确认 ~13(第三方镜像,mj.ink 500 最可能真死) / 巨头假阳性 ~28
- 关键教训：外部 URL 时效检测不宜只靠 curl（反爬假阳性高），需 WebFetch 抽样+人工复核
- 复检：0 悬空 / 0 孤立（顺手修了 LOG 里另一处 `wiki/snippets` 描述性链接误报）

### 2026-08-07 13:48 | Ingest | vue/react family 深度文章（3 篇源码分析）
- 来源（WebFetch 抓取）：React技术揭秘(react.iamkasong.com)、构建你自己的React(pomb.us Didact)、Vue.js技术揭秘(ustbhuangyi)
- raw 存源 3 篇：`react-technology-revealed.md`、`build-your-own-react.md`、`vue-technology-revealed.md`
- 编译/联动：
  - 新建 `wiki/concepts/Fiber.md`（active）：三指针链表/工作循环/alternate/Lane
  - 新建 `wiki/concepts/Reconciliation.md`（seed）：两阶段协调/Diff 规则
  - `React.md`（**seed→active**）：补源码架构(render/commit两阶段)+Hooks实现+手写视角+学习资源
  - `Vue.md`（enrich）：补 Vue2 源码架构(Observer/Dep/Watcher, parse/optimize/generate)+Vue2→Vue3演进表
  - `虚拟DOM.md`（enrich）：补 React 两阶段协调 + Vue patch
  - `依赖收集.md`（enrich）：补 Vue2 Observer/Dep/Watcher 三件套对照 Vue3 targetMap
- Lint：补建 Reconciliation seed 后 0 悬空 / 0 孤立 / 共 54 页（seed 净减 1：React 升 active，+Fiber active +Reconciliation seed）
- 影响 6 wiki 页 + 3 raw 源，建立 15+ 交叉链接

### 2026-08-07 15:03 | Ingest | TS/Vite/Node 官方文档（补实 3 个 seed 实体）
- 先推送上次待提交成果(4314da2，网络恢复)
- WebFetch 抓 3 篇：TypeScript Handbook、Vite Why Vite、Node.js 官方简介
- raw 存源 3 篇：`typescript-handbook.md`、`vite-why-fast.md`、`nodejs-intro.md`
- 实体页升级：
  - `TypeScript.md` **seed→active**：补类型系统/推导窄化/泛型/高级类型/tsconfig/类型擦除
  - `Vite.md` **seed→active**：补原生 ESM 按需/依赖预构建/HMR/Rolldown统一工具链/与webpack对比
  - `Node.js.md` **seed→active**：补单进程非阻塞I/O/事件循环阶段/模块系统/核心模块/适合不适合
- Lint：0 悬空 / 0 孤立 / 共 57 页；seed 19→16，active 33→36
- 备注：前端核心实体（React/Vue/TS/Vite/Node）现已全部 active，仅余 Svelte/SolidJS 等仍 seed

### 2026-08-08 08:00 | Ingest | AI HOT 日报 2026-08-07
- 来源：AI HOT 日报（aihot skill，`/api/v1/dailies/latest`），存入 `raw/articles/ai-hot-2026-08-07.md`
- 日报内容：5 个分区（模型发布/更新 · 产品发布/更新 · 行业动态 · 论文研究 · 技巧与观点），共 20 条
- 编译产出（新建 4 页）：
  - `wiki/topics/AI资讯.md`（主题页，当日 20 条事件汇总 + 观点 + 待研究问题）
  - `wiki/concepts/Agent-Plugins.md`（seed，Agent Plugins 1.0.0 标准概念）
  - `wiki/entities/Cursor.md`（seed，Cursor IDE 实体页，含 Router 机制）
  - `wiki/entities/Claude-Code.md`（seed，Claude Code 实体页，含 v2.1.223 更新）
- 联动更新：
  - `wiki/topics/AI.md`（新增「每日动态」节链 AI资讯，补来源，updated→2026-08-08）
  - `wiki/concepts/MCP.md`（链 Agent-Plugins，补 AI资讯 交叉链接与来源）
  - `wiki/concepts/Coding-Agent.md`（新增「主流工具」节含 Claude-Code/Cursor/Copilot，链 Agent-Plugins）
  - `wiki/concepts/Agent持续进化.md`（新增「近期动态」节：Prime Agent + SkillOpt，补来源）
- 影响 8 个 wiki 页面 + 1 个 raw 源，建立 20+ 交叉链接
- 备注：首次自动化 AI HOT 日报 Ingest。重点追踪 Agent Plugins 标准化、Prime Agent 自我改进、SkillOpt 跨模型技能迁移——均与本库 Agent 持续进化理念高度相关。

### 2026-08-08 14:41 | Ingest | AI for Everyone (Coursera)
- 来源：Coursera 课程页 https://www.coursera.org/learn/ai-for-everyone（讲师 [[吴恩达]]），存入 `raw/articles/ai-for-everyone.md`（结构快照 + 公开 syllabus 补全；视频正文需登录，已注明）
- 课程定位：非技术向 AI 通识课，4 模块——什么是 AI / 构建 AI 项目 / 在公司落地 AI / AI 与社会
- 编译产出（新建 8 页）：
  - `wiki/topics/AI-for-Everyone.md`（active，课程四模块地图 + 观点 + 待研究问题）
  - `wiki/concepts/AI素养.md`（active，ML/数据/术语/ML 的能与不能）
  - `wiki/concepts/AI战略.md`（active，发现机会/避陷阱/规划项目）
  - `wiki/concepts/AI转型.md`（active，AI transformation playbook）
  - `wiki/concepts/负责任AI.md`（active，偏差/对抗/滥用，上接模型层安全概念）
  - `wiki/concepts/机器学习项目工作流.md`（active，训练 vs 部署两阶段 + POC）
  - `wiki/concepts/AI团队.md`（active，ML工程师/数据科学家/数据工程师/AI PM 分工）
  - `wiki/entities/吴恩达.md`（active，讲师/AI 教育家实体）
- 联动更新：
  - `wiki/topics/AI.md`（增「AI 通识与战略」子主题、学习资源、来源；updated→2026-08-08）
  - `wiki/concepts/提示注入.md` · `越狱攻击.md` · `Agent安全.md`（均链 [[负责任AI]]，补组织 / 社会层治理视角）
- 影响 11 个 wiki 页面 + 1 个 raw 源，建立 40+ 交叉链接
- 备注：本库首次引入「AI 战略 / 素养 / 负责任 AI」业务层视角，与既有技术向 Agent/LLM 内容互补。Lint：0 悬空 / 0 孤立。

### 2026-08-09 08:00 | Ingest | AI HOT 日报 2026-08-08
- 来源：AI HOT 日报（aihot skill，`/api/v1/dailies/latest`），存入 `raw/articles/ai-hot-2026-08-08.md`
- 日报内容：5 个分区（模型发布/更新 · 产品发布/更新 · 行业动态 · 论文研究 · 技巧与观点），共 21 条
- 编译产出（新建 3 页）：
  - `wiki/entities/Seedance.md`（seed，火山引擎视频生成模型 2.5）
  - `wiki/entities/Kitesurf.md`（seed，Cloudflare 代理优先浏览器）
  - `wiki/concepts/持续学习.md`（seed，持续学习时代 8 个预测）
- 联动更新：
  - `wiki/topics/AI资讯.md`（追加 2026-08-08 当日条目 21 条，补观点 3 条 + 待研究问题 3 条，更新来源）
  - `wiki/entities/Claude-Code.md`（新增「会话间互发消息」功能记录，补来源）
  - `wiki/concepts/Agent安全.md`（新增「真实安全事件」节：OpenAI 智能体自建秘密聊天室 + Fable 5 生物安全更新，补来源）
  - `wiki/concepts/Agent持续进化.md`（新增「持续学习时代的预测」节，链 [[持续学习]]，补来源）
  - `wiki/concepts/Coding-Agent.md`（新增「近期动态」节：Claude Code 会话间消息 + Databricks 编程成本管控，补来源）
- 影响 8 个 wiki 页面 + 1 个 raw 源，建立 25+ 交叉链接
- 备注：OpenAI 智能体自建聊天室事件是本库 Agent 安全追踪的重要案例；持续学习预测直接关联本库自成长理念；苹果连续发表扩散语言模型研究值得关注。

### 2026-08-09 10:25 | File Back | Agent 开发学习计划
- 来源：产品战略团队调研产出（用户研究员 / 竞品分析师 / 数据分析师，2026-08-09）+ 既有 AI / Agent 主题
- 编译产出（新建 4 页）：
  - `wiki/topics/Agent开发学习计划.md`（active，六周路线图 + P0/P1/P2 优先级 + 资源栈 + 作品集方向 + 市场数据）
  - `wiki/entities/Vercel-AI-SDK.md`（seed，前端 Agent 交互层 SDK）
  - `wiki/entities/Mastra.md`（seed，TS 原生 Agent 编排框架）
  - `wiki/concepts/函数调用.md`（seed，Agent 行动能力根基）
- 联动：链 [[Agent]] / [[RAG]] / [[ReAct]] / [[MCP]] / [[记忆系统]] / [[AI]] / [[AI-Agents-in-Depth]] 等既有页
- 影响 4 个 wiki 页面 + 建立 15+ 交叉链接
- 备注：File Back 自一次「前端转 Agent 学习计划」咨询；INDEX 由 Dataview 自动聚合，无需手改。待 Lint 复检悬空 / 孤立。

- 2026-08-09 · File Back（W2 执行卡）
  - 新增 `wiki/topics/W2-每日任务卡.md`（active），把 [[Agent开发学习计划]] 的 W2 周拆成 D1–D5 每日任务卡（脚手架→流式→工具调用→工具可视化→复盘入库），含验收标准与产出
  - 关联脚手架：`learning-AI/w2-agent-chat`（已搭好的 Vercel AI SDK 流式聊天+工具调用工程）
  - 联动：[[Vercel-AI-SDK]] / [[函数调用]] / [[ReAct]] / [[Mastra]]
  - 备注：与同日落地的 w2-agent-chat、w4-resume-scorer 工程配套，作为「计划→执行卡→代码」闭环的示例。

- 2026-08-09 · File Back（W3 执行卡）
  - 新增 `wiki/topics/W3-每日任务卡.md`（active），把 [[Agent开发学习计划]] 的 RAG 主题（计划表 W5 行；工程命名 w3-rag-qa）拆成 D1–D5 每日任务卡（概念→Ingest→Retrieve→来源可视化→复盘入库），含验收标准与产出
  - 关联脚手架：`learning-AI/w3-rag-qa`（已搭好的 Vercel AI SDK 流式 RAG 问答站，纯内存向量库）
  - 联动：[[RAG]] / [[Vercel-AI-SDK]] / [[函数调用]] / [[ReAct]] / [[W2-每日任务卡]] / [[Mastra]]
  - 备注：与 w2-agent-chat、w4-resume-scorer、w3-rag-qa 三工程配套，形成「计划→执行卡→代码」闭环。

- 2026-08-09 · File Back（W4 执行卡）
  - 新增 `wiki/topics/W4-每日任务卡.md`（active），把 [[Agent开发学习计划]] 的 W4（编排与记忆）拆成 D1–D5 每日任务卡（框架认知→工具→Agent 封装→Workflow 编排→复盘入库），含验收标准与产出，并标注 Mastra 1.57 避坑要点
  - 关联脚手架：`learning-AI/w4-resume-scorer`（已搭好的 Mastra 多步 Agent：Agent 版 + Workflow 版 loadData→score）
  - 联动：[[Mastra]] / [[函数调用]] / [[记忆系统]] / [[ReAct]] / [[W2-每日任务卡]] / [[W3-每日任务卡]]
  - 备注：W2/W3/W4 三张执行卡已齐，与 w2-agent-chat / w3-rag-qa / w4-resume-scorer 三工程形成完整「计划→执行卡→代码」闭环。

### 2026-08-10 10:00 | Ingest | GitHub 周动态（daoyking 仓库）
- 来源：`gh` CLI 查 daoyking 仓库近 7 天提交/release，存入 2 个 raw 快照
  - `raw/articles/github-hmnmt-web-2026-08-10.md`
  - `raw/articles/github-learning-ai-agent-2026-08-10.md`
- 筛选结果：3 个仓库有活动，my-obsidian 为知识库自身维护（跳过），hmnmt-web 和 learning-ai-agent 有重要变更
- 编译产出（新建 2 个项目页）：
  - `projects/hmnmt-web.md`（active）：企业官网 1:1 复刻项目，Vue3+ElementPlus+Node.js SQLite 数据驱动架构，本周完成产品目录树复刻/公共组件收口/数据入库/对账脚本
  - `projects/learning-ai-agent.md`（active）：AI Agent 学习路线工程集（W2-W6），本周首次推送全量源码到 GitHub + W5 评测管线重构（CLI 独立避 TLA）+ W6 作品集简历页
- 联动：`projects/learning-ai-agent.md` 链回 [[Agent开发学习计划]] / [[W2-每日任务卡]] / [[W3-每日任务卡]] / [[W4-每日任务卡]] / [[Vercel-AI-SDK]] / [[Mastra]] / [[RAG]] / [[Agent评估]]
- 无新 release（3 个仓库均无）
- 影响 2 个项目页 + 2 个 raw 源，建立 10+ 交叉链接
- 备注：首次 GitHub 周动态自动 Ingest。hmnmt-web 是新入库项目（企业官网 1:1 复刻），learning-ai-agent 与既有 Agent 学习体系高度关联。

### 2026-08-10 09:14 | Lint | 每周体检
- 发现问题：悬空 2（`[[Vercel AI SDK]]` 命名冲突、`[[安全对齐]]` 真悬空）；孤立 2（`projects/learning-ai-agent.md`、`projects/hmnmt-web.md`）；frontmatter 缺失 0
- 修复动作：
  - 命名冲突统一：9 个文件里的 `[[Vercel AI SDK]]` → `[[Vercel-AI-SDK]]`（规范文件名，CLAUDE.md「文件名避免空格」），并在 `wiki/entities/Vercel-AI-SDK.md` 的 aliases 补 `Vercel AI SDK` 兼容 Obsidian UI
  - 补建 seed 概念页 `wiki/concepts/安全对齐.md`（status: seed，sources 挂 `[[raw/articles/dive-into-llms-overview]]`，交叉链接 RLHF/越狱攻击/提示注入/Agent安全/负责任AI/微调/蒸馏）
  - `wiki/concepts/RLHF.md` 去掉 `[[安全对齐]]（待建）` 的"待建"标注
  - 孤立页补入链：`wiki/topics/Agent开发学习计划.md` 进度跟踪段补 `[[learning-ai-agent]]`；`wiki/entities/Vue.md`「在我项目中的使用」补 `[[hmnmt-web]]`
- 复检结果：悬空=0、孤立=0、frontmatter 缺失=0 ✅
- 影响文件：1 新建（安全对齐）+ 12 修改（9 个 Vercel 链接统一 + RLHF + Vercel-AI-SDK aliases + Agent开发学习计划 + Vue）

### 2026-08-10 10:15 | Ingest | AI HOT 日报 2026-08-10
- 来源：aihot skill 调用 `/api/v1/dailies/latest`，日报日期 2026-08-10（覆盖 08-09~08-10 周末窗口），1 个分区「技巧与观点」共 4 条事件
- raw 源文件：`raw/articles/ai-hot-2026-08-10.md`（新建，frontmatter: type=source, tags=[source,ai,aihot], ingested=2026-08-10）
- wiki 编译（更新 7 个页 + 新建 1 个 raw 源）：
  - 更新 `wiki/topics/AI资讯.md`（追加 2026-08-10 当日 4 条 + 观点 5 条 + 待研究 5 条 + sources/updated）
  - 更新 `wiki/concepts/提示注入.md`（新增「Anthropic 的突破性进展」节，status→active，核心：模型训练+输入探测+意图分类器多层防御，间接注入成功率降至约 0）
  - 更新 `wiki/concepts/Agent安全.md`（防护方向补多层防御 + 新增「前沿模型攻击与治理失衡」节）
  - 更新 `wiki/entities/Seedance.md`（status seed→active，补 300 秒时长/片段重拍/智能续写/LibTV 0.4 元/秒/六类创意玩法）
  - 更新 `wiki/concepts/微调.md`（新增「LoRA 实战教程：DistilBERT + IMDb」节，链 蒸馏/机器学习项目工作流）
  - 更新 `wiki/concepts/负责任AI.md`（新增「治理失衡：能力增长 vs 治理响应」节，链 Agent持续进化）
  - 更新 `wiki/entities/Claude-Code.md`（新增 auto 模式下周默认开启，链 提示注入/Agent安全）
- 影响：7 个 wiki 页面 + 1 个 raw 源，建立 20+ 交叉链接
- 备注：本日为周一，日报覆盖周末窗口（08-09 周日无独立日报）。今日 08:00 自动任务首次执行失败，本次为 10:13 重试获取成功。Anthropic 解决提示注入是 Agent 安全里程碑，已升级提示注入页为 active 并与 Agent安全/Claude-Code 联动。
- 备注：lint 脚本 set -e 在孤立页段会因 grep -c 返回非零而 exit 1 截断输出，本次用手动循环补检；命名冲突是首次出现的修复类型，已记入经验。

### 2026-08-11 13:24 | Ingest | AI HOT 日报 2026-08-11
- 来源：aihot skill 调用 `/api/v1/dailies/2026-08-11`（08:00 首次获取时日报尚未生成，13:24 重试拉到全文），存入 `raw/articles/ai-hot-2026-08-11.md`
- 日报内容：5 个分区（模型发布/更新 · 产品发布/更新 · 行业动态 · 论文研究 · 技巧与观点），共 20 条
- 新建 4 页：
  - `wiki/entities/Muse-Glimmer.md`（seed，Meta 30B 开放权重多模态模型，Apache 2.0，本地常驻 Agent）
  - `wiki/entities/SGLang.md`（seed，推理引擎，为 Muse Glimmer 提供 Day-0 支持）
  - `wiki/entities/OpenRouter.md`（seed，新版 Auto 路由器，社区消费数据驱动）
  - `wiki/concepts/开放权重.md`（seed，Gary Marcus 开源≠开放权重；直指 Muse Glimmer）
- 联动更新 7 个页：
  - `wiki/topics/AI资讯.md`（追加 2026-08-11 当日 20 条 + 观点 5 + 待研究 5 + sources/updated）
  - `wiki/entities/Claude-Code.md`（auto 模式默认开启原理 + Claude 研究版突破黎曼 zeta 下界，updated→2026-08-11）
  - `wiki/concepts/Agent安全.md`（tl;dv 录音泄露 + GPT-5.6-Cyber + Omnigent 致命三重奏，updated→2026-08-11）
  - `wiki/concepts/提示注入.md`（Omnigent 上下文策略组合攻击防御，status 保持 active，updated→2026-08-11）
  - `wiki/concepts/Coding-Agent.md`（OpenChamber + Claude Code auto 原理 + Linear Agent，updated→2026-08-11）
  - `wiki/concepts/Harness工程.md`（Linear Agent 边界设计 + OpenChamber，updated→2026-08-11）
  - `wiki/concepts/Agent评估.md`（LatentRank 聚合排行榜，updated→2026-08-11）
- 影响：11 个 wiki 页面（4 新建 + 7 更新）+ 1 个 raw 源，建立 30+ 交叉链接
- 备注：Muse Glimmer + SGLang Day-0 是「本地常驻多模态 Agent」开放推理栈，与本库 Agent 持续进化/本地 Agent 理念契合；tl;dv 暴露 18.1 万段会议录音是 Agent 安全重大事件（缺租户隔离）；Omnigent「致命三重奏」把安全判定从请求层移到上下文层。所有页面 sources 挂回 `[[raw/articles/ai-hot-2026-08-11]]`。
- 备注（Linter 竞态）：Obsidian Linter 在文件变更后实时改写，frontmatter 首编辑多次触发「modified since read」，已逐页重读校验 frontmatter（updated/sources）最终落盘。

### 2026-08-11 15:10 | Ingest | Agent 开发学习计划（Python 路线）+ 四位 AI 讲师学习资料
- 来源：本地整理稿（未复制进 raw/，sources 字段直接挂外部路径）
  - `~/about-project/about-AI/Agent开发学习计划.md`（Swift 开发者定制，12 周 Python 路线，目标个人自动化工具）
  - `~/about-project/about-AI/四位AI讲师学习资料整理.md`（Karpathy / 吴恩达 / 李宏毅 / 李沐，已映射到 12 周计划）
- 编译产出（新建 5 页，全部 active）：
  - `wiki/topics/Agent开发学习计划-Python路线.md`——12 周计划主题页（起点迁移表 / 周计划表 / 里程碑验收 / 资源清单 / 7 条建议），与既有前端求职版互补
  - `wiki/topics/四位AI讲师学习资料整理.md`——讲师资源主题页（定位总览 / 四位讲师必看与选看 / 12 周对照表 / 整合路径 / 避坑清单）
  - `wiki/entities/Karpathy.md`——LLM 原理讲师实体
  - `wiki/entities/李宏毅.md`——中文直觉讲师实体
  - `wiki/entities/李沐.md`——论文精读讲师实体
- 联动：新建页双向链 [[Agent开发学习计划]]（前端版）、[[吴恩达]]、[[动手学大模型]]、[[AI-Agents-in-Depth]]、[[AI]] 与概念页 [[Agent]] / [[函数调用]] / [[ReAct]] / [[MCP]] / [[RAG]] / [[记忆系统]] / [[Prompt工程]] / [[思维链]] / [[RLHF]] / [[上下文工程]] / [[Agent安全]] / [[Agent评估]] / [[Harness工程]]；建立 30+ 交叉链接
- 影响：5 个新 wiki 页面 + LOG；**既有页面零修改**（用户约束「不要影响到其他任何东西」）
- 备注：与既有 [[Agent开发学习计划]]（前端求职 6 周 TS 栈）区分命名，本页为个人自动化工具向（Python 12 周）。新实体页均链接到既有 [[吴恩达]] 页，未重复建页。INDEX 由 Dataview 自动聚合，无需手改。待 Lint 复检悬空 / 孤立。

### 2026-08-11 15:20 | Ingest | GitHub 资源库三连（awesome-agi-agents / public-apis / awesome-agentic-ai-zh）
- 来源：`gh api` 获取三个仓库元数据 + README，存入 raw/articles/（各含 frontmatter：type=source, tags, ingested, repo, stars）
  - `raw/articles/awesome-agi-agents.md`（19KB，yzfly，554★，AGI Agents 精选合集，CC BY-NC 4.0）
  - `raw/articles/public-apis.md`（230KB，455k★，免费公共 API 大全，MIT）
  - `raw/articles/awesome-agentic-ai-zh.md`（22KB，WenyuChiou，5159★，三语 Agentic AI 学习地图，MIT）
- 编译产出（新建 3 个实体页，全部 active）：
  - `wiki/entities/awesome-agi-agents.md`——Agent 生态全景（论文 / 2024-2026 重要项目 / 前沿项目 / 开发平台 / curated list）
  - `wiki/entities/public-apis.md`——1400+ 免费 API 宝库（40+ 领域分类），Agent 数据源弹药库
  - `wiki/entities/awesome-agentic-ai-zh.md`——8 阶段 + 双 Track 学习地图（CLI Power User 8-10 周 / Agent Builder 16-22 周），240+ 资源 + 23 练习 + 中文 MCP/Skill catalog
- 联动：新建页双向链 [[Agent开发学习计划-Python路线]] / [[Agent开发学习计划]] / [[AI工具集]] / [[动手学大模型]] / [[AI-Agents-in-Depth]] / [[四位AI讲师学习资料整理]] / [[Mastra]] / [[Claude-Code]] / [[Coding-Agent]] 与概念页 [[Agent]] / [[MCP]] / [[函数调用]] / [[ReAct]] / [[RAG]] / [[记忆系统]] / [[上下文工程]] / [[Harness工程]] / [[Prompt工程]] / [[Agent评估]] / [[多模态大模型]]；建立 25+ 交叉链接
- 影响：3 个 raw 源 + 3 个新 wiki 页面 + LOG；**既有页面零修改**（沿用上次 Ingest 约束）
- 备注：awesome-agentic-ai-zh 与本库 [[Agent开发学习计划-Python路线]]（12 周）逐周互补、与 [[Harness工程]] 的「三層概念進化」（prompt→context→harness）直接对应；public-apis 是仓库 star 数 45.5 万的巨型公共资源。INDEX 由 Dataview 自动聚合。待 Lint 复检悬空 / 孤立。

### 2026-08-11 19:50 | File Back | Agent 开发工程师面试宝典（转型候选人版）
- 来源：2026 年 Agent 面试高频题调研（kamacoder / JavaGuide / 知乎横评）+ 用户转型背景（10 年前端 / 武汉 AI-Agent 方向 / 12 周计划 Week 0-1）
- 编译产出（新建 1 个主题页，active）：
  - `wiki/topics/Agent开发工程师面试宝典.md`——转型候选人版面试宝典（0 战场叙事 / LLM 基础 / Prompt 工程 / Agent 核心机制 / MCP / 框架与工程化 / RAG / 前端加分题 / 系统设计 / 行为面 / 自测清单 / 考前速记卡），每题含「考察点 + 参考回答 + 参考话术」，并映射 12 周计划周次
- 联动：新建页双向链 [[Agent开发学习计划-Python路线]] / [[Agent开发学习计划]] / [[前端面试]] 与概念页 [[Agent]] / [[ReAct]] / [[函数调用]] / [[MCP]] / [[Prompt工程]] / [[RAG]] / [[记忆系统]] / [[上下文工程]] / [[Agent安全]] / [[提示注入]] / [[Harness工程]] / [[Coding-Agent]] / [[思维链]] / [[Agent评估]]；建立 30+ 交叉链接
- 影响：1 个新 wiki 页面 + LOG；**既有页面零修改**（沿用 Ingest 约束「不要影响到其他任何东西」）
- 备注：内容按用户水平定制——LLM 基础章节可立即用（W0-W1），MCP/ReAct 章节对应 W2-W6 里程碑，标注「现在必须掌握 / 计划中会学到」分层。INDEX 由 Dataview 自动聚合，无需手改。待 Lint 复检悬空 / 孤立。

### 2026-08-12 08:08 | Ingest | AI HOT 日报 2026-08-12
- 来源：aihot skill 调用 `/api/v1/dailies/latest`，日报日期 2026-08-12（覆盖 08-11 00:00 ~ 08-12 00:00 UTC），存入 `raw/articles/ai-hot-2026-08-12.md`
- 日报内容：5 个分区（模型发布/更新 3 · 产品发布/更新 5 · 行业动态 7 · 论文研究 3 · 技巧与观点 8），共 26 条
- 新建 5 页：
  - `wiki/entities/Nemotron.md`（seed，NVIDIA Nemotron 3.5 Lightning 30B MoE + Nemotron 4 万亿参数规划，真开源动向）
  - `wiki/entities/Ling.md`（seed，蚂蚁百灵 Ling-3.0-tiny，7.9B 总 / 1.3B 激活原生混合推理）
  - `wiki/entities/ZCode.md`（seed，智谱 ZCode 四大功能，GLM-5.2+ZCode 较 +Claude Code 高 2.39%）
  - `wiki/entities/AMIE.md`（seed，Google 医疗 AI 实时临床视频问诊，基于 Gemini + Project Astra）
  - `wiki/concepts/递归自我改进.md`（seed，Ryan Greenblatt 论 RSI：2031 自动化 AI 研发、2032 前失控超级智能风险）
- 联动更新 6 个页：
  - `wiki/topics/AI资讯.md`（追加 2026-08-12 当日 26 条 + 观点 8 + 待研究 8 + sources/updated）
  - `wiki/entities/SGLang.md`（**seed→active**：Day-0 支持 Nemotron 3.5 Lightning + LMSYS Unified Radix Cache，updated→2026-08-12）
  - `wiki/entities/Seedance.md`（Runway 平台上线，50 角色参考 + 30 秒音乐同步，updated→2026-08-12）
  - `wiki/concepts/Agent安全.md`（新增「推理模型加密思考过程可被读取」节：Haiku 4.5 转写 Opus 4.8 推理 / 7000 会话泄露 62 密钥，updated→2026-08-12）
  - `wiki/concepts/Agent持续进化.md`（新增「RSI 风险预判」节，链 递归自我改进，updated→2026-08-12）
  - `wiki/concepts/开放权重.md`（新增「开放权重生态扩展」节：Nemotron + Ling + 真开源动向，链 Nemotron/Ling，updated→2026-08-12）
- 影响：11 个 wiki 页面（5 新建 + 6 更新）+ 1 个 raw 源，建立 35+ 交叉链接
- 备注：本日核心暗线是 NVIDIA——Nemotron 3.5 Lightning 开源 + Nemotron 4 万亿参数研发 + Gary Marcus 透露真开源动向，三者共同把 [[开放权重]] 边界推向新阶段；推理模型加密思考过程可被读取是 [[Agent安全]] 的新维度（输出侧泄漏）；ZCode + GLM 略胜 Claude Code 验证"模型×工具协同"价值；RSI 预判把本库 [[Agent持续进化]] 推到"人机协作 vs 失控"分水岭。所有页面 sources 挂回 `[[raw/articles/ai-hot-2026-08-12]]`。
- 备注（Linter 竞态）：Obsidian Linter 在文件变更后实时改写 frontmatter，多次触发「modified since read」，已逐页重读校验 updated/sources 最终落盘。

### 2026-08-12 15:30 | Ingest | ChromeAppHeroes（谷粒-Chrome插件英雄榜）
- 来源：`gh api` 获取仓库元数据 + README 全文，存入 `raw/articles/chrome-app-heroes.md`（92KB，含 133 条插件目录；仓库 docs/ 另有 119+ 篇逐插件正文未全量拉取，按需再取）
  - 元数据：zhaoolee/ChromeAppHeroes，25.8k★ / 2.6k fork，Docsify + GitHub Pages（zhaoolee.com/ChromeAppHeroes），backup/ 附插件离线包，公众号「0加1」同步
- 编译产出（新建 1 个实体页，active）：
  - `wiki/entities/ChromeAppHeroes.md`——133 篇中文 Chrome 插件说明书入口（开发工具 / 效率 / 阅读翻译 / 下载媒体 / 隐私去广告 / 专注健康 / 趣味实用分类），含 backup 离线包说明
- 联动：双向链 [[Chrome]] / [[书签库]] / [[AI工具集]] / [[Vim]]（Vimium）/ [[Node.js]]（Console Importer）/ [[Coding-Agent]]；建立 10+ 交叉链接
- 影响：1 个 raw 源 + 1 个新 wiki 页面 + LOG；**既有页面零修改**（沿用 Ingest 约束）
- 备注：⚠️ 本次发现 vault 路径变更——此前 Ingest 曾写入 `~/about-project/obsidian/my-obsidian`（该目录已被重置为空壳），活跃知识库实际位于 iCloud `~/Library/Mobile Documents/com~apple~CloudDocs/Obsidian/my-obsidian`（git 历史含既有全部提交）。本次已全部在正确 vault 操作。待 Lint 复检悬空 / 孤立。

### 2026-08-13 10:15 | Ingest | GitHub 周动态 2026-08-13（daoyking）
- 来源：`gh CLI` 查 daoyking 仓库近 7 天（since 2026-08-06）提交与 release；扫描 46 个仓库，3 个有活动（my-obsidian / hmnmt-web / learning-ai-agent），无新 release
- 筛选：my-obsidian 为知识库自身维护（跳过 Ingest，仅记 LOG）；hmnmt-web 与 learning-ai-agent 有重要变更
- 新增 2 个 raw 源：
  - `raw/articles/github-hmnmt-web-2026-08-13.md`——本周新增聚焦 08-10 及之后（与上周 `github-hmnmt-web-2026-08-10` 重叠部分仅引用不重复）：品牌矢量 Logo + 前后台明暗主题 + 联系我们区块（e071a59 ⭐）、首页 4 项视觉优化 + 页脚产品中心补全（27f4c92）、截图取消跟踪（d2b7b31/6ff540d）、USER.md 路径更新（f3865e8）
  - `raw/articles/github-learning-ai-agent-2026-08-13.md`——本周新增聚焦 08-10：W5 真实评测跑通 DeepSeek（100% / 9.8 分）+ 作品集替换为实跑证据（f96990c ⭐）、W2-W4 真实评测跑通（100% / 10、9.7、8.98）+ 作品集跨周回归区块（c228647 ⭐）、移除私有 .workbuddy 记忆（e1463c7）；附真实评测结果汇总表
- 更新 2 个项目页（`projects/hmnmt-web.md` / `projects/learning-ai-agent.md`）：
  - sources 追加本周 raw 源，updated→2026-08-13
  - 「本周变更」节滚动到 2026-08-06 ~ 2026-08-13 窗口
  - 关键设计 / 踩坑记录 / 复盘结论 三节按本周新经验补充（hmnmt：品牌双主题 Logo / 页脚数据保真 / 截图膨胀 / 显式 UX 偏离标注；learning-ai-agent：DeepSeek 适配方法论 / 真实评测 > 离线示例 / 模型能力差异前置适配 / 公开仓库泄露私有记忆）
- 联动：项目页双向链 `raw/articles/github-*` 与既有 `[[Agent开发学习计划]]` / `[[Vue]]` / `[[Vite]]` / `[[Node.js]]` / `[[Vercel-AI-SDK]]` / `[[Mastra]]` / `[[Agent评估]]` / `[[函数调用]]` / `[[RAG]]` / `[[ReAct]]`
- 影响：2 个 raw 源 + 2 个项目页更新 + LOG；既有 wiki 概念/实体页零修改
- 备注：本周窗口与上周（08-03 ~ 08-10）有 08-06 ~ 08-10 重叠，raw 快照显式声明重叠部分仅引用上周报告不重复展开，避免信息冗余。learning-ai-agent 本周核心里程碑是「真实评测全部跑通」——W2-W5 用 DeepSeek 跑出 100% 通过率，作品集从离线示例升级为实跑证据，可演示性质的提升。hmnmt-web 本周核心是品牌资产 + 明暗主题 + 联系区块一次性落地。

### 2026-08-13 10:19 | Ingest | AI HOT 日报 2026-08-13
- 来源：aihot skill 调用 `/api/v1/dailies/latest`，日报日期 2026-08-13（覆盖 08-12 00:00 ~ 08-13 00:00 UTC），存入 `raw/articles/ai-hot-2026-08-13.md`
- 日报内容：5 个分区（模型发布/更新 4 · 产品发布/更新 5 · 行业动态 2 · 论文研究 2 · 技巧与观点 7），共 17 条（含两条同日前沿模型对照：Grok 4.6 + DeepSeek V4 Pro）
- 新建 5 页：
  - `wiki/entities/Grok.md`（seed，xAI Grok 4.6，长时运行智能体能力，追平 GPT-5.6 Sol）
  - `wiki/entities/Qwen.md`（active，Qwen3.8-2.4T-A95B，Qwen-Max 级别首次开源，2.4T MoE / 95B 激活 / 256K~1M 上下文）
  - `wiki/entities/LTX.md`（seed，LTX-2.5 视频生成，10 秒 720P 仅需 6.8 秒超实时，ComfyUI 集成）
  - `wiki/entities/MAI-Thinking-1.md`（seed，微软首个自研推理模型，从零构建，标志摆脱 OpenAI 单一依赖）
  - `wiki/entities/Claude-Cowork.md`（seed，Claude in Chrome 侧边栏升级，浏览器/终端场景互补）
- 联动更新 9 个页：
  - `wiki/topics/AI资讯.md`（追加 2026-08-13 当日 17 条 + 观点 9 + 待研究 9 + sources/updated）
  - `wiki/entities/OpenRouter.md`（实时网页搜索基准 + 工具调用跨模型指南，updated→2026-08-13）
  - `wiki/entities/SGLang.md`（Day-0 支持 Qwen3.8-2.4T-A95B，迄今 Day-0 适配最大参数规模，updated→2026-08-13）
  - `wiki/entities/Claude-Code.md`（v2.1.229 远程会话恢复 + 插件市场命令源 + 安全收紧 + Claude Cowork 产品线扩展，updated→2026-08-13）
  - `wiki/concepts/开放权重.md`（旗舰级开放权重里程碑节：Qwen3.8-2.4T Qwen-Max 级首次开源，updated→2026-08-13）
  - `wiki/concepts/Agent安全.md`（WhatsApp Scam Alert 设备端 ML 反诈 + Research Gold AI 身份欺诈，updated→2026-08-13）
  - `wiki/concepts/Agent持续进化.md`（AI 生成 PR 的工程化治理节：AutoGPT AGENTS.md + 技能门控 + CLA 人类探测器，updated→2026-08-13）
  - `wiki/concepts/Harness工程.md`（AutoGPT 门控机制管理 AI PR，updated→2026-08-13）
  - `wiki/concepts/Coding-Agent.md`（Claude Code v2.1.229 + AutoGPT AI PR 门控 + RingCentral AI 原生工作流，updated→2026-08-13）
  - `wiki/concepts/负责任AI.md`（Research Gold AI 身份欺诈 + Anthropic 工人再培训综述，updated→2026-08-13）
- 影响：14 个 wiki 页面（5 新建 + 9 更新）+ 1 个 raw 源，建立 40+ 交叉链接
- 备注：本日核心暗线是「开放权重旗舰化 + 前沿模型多极化」——Qwen3.8-2.4T 把 Qwen-Max 级首次开源（MoE 让旗舰以 95B 激活可承受），与同日 Grok 4.6 / MAI-Thinking-1 / LTX-2.5 共同体现前沿模型多极化；WhatsApp Scam Alert 是"隐私优先设备端 AI 安全"范式实例；Research Gold 揭示 AI 冒充人类的新欺诈形态；AutoGPT AGENTS.md + CLA 门控是 Harness工程在开源协作场景的延伸，与本库 CLAUDE.md/obsidian-llm-wiki Skill 同构。所有页面 sources 挂回 `[[raw/articles/ai-hot-2026-08-13]]`。
- 备注（Linter 竞态）：Obsidian Linter 在文件变更后实时改写 frontmatter，开放权重.md 与 AI资讯.md 的首次 frontmatter 编辑均触发「modified since read」，已重读后补校落盘（与 08-11/08-12 同一现象）。

### 2026-08-14 08:00 | Ingest | AI HOT 日报（无新内容·跳过）
- 来源：aihot skill 调用 `/api/v1/dailies/latest`，返回日报日期 2026-08-13（昨日已 Ingest）
- 校验：`/api/v1/dailies?limit=5` 索引最新日期为 2026-08-13；`/api/v1/dailies/2026-08-14` 直接返回 404
- 结论：今日（2026-08-14）AI HOT 日报尚未生成（AI HOT 日报为 T-1 日切成品，08:00 执行时 08-14 日报通常未上线）
- 动作：未创建 raw 源、未编译 wiki 页（遵 Schema「绝不编造内容」原则）
- 备注：08-13 日报已于昨日 10:19 Ingest 入库（见上条记录）。本次为正常的「无新内容」跳过，非获取失败；日报上线后可重试。

### 2026-08-15 08:00 | Ingest | AI HOT 日报 2026-08-14
- 来源：aihot skill 调用 `/api/v1/dailies/latest`（08-14 08:00 跳过后本次延迟命中），日报日期 2026-08-14（覆盖 08-13 00:00 ~ 08-14 00:00 UTC），存入 `raw/articles/ai-hot-2026-08-14.md`
- 日报内容：5 个分区（模型发布/更新 3 · 产品发布/更新 8 · 行业动态 3 · 论文研究 2 · 技巧与观点 7），共 23 条
- 新建 9 页：
  - `wiki/entities/DeepSeek-Harness.md`（seed，MIT 开源智能体框架，"一切皆插件"，基于 Cordis 元框架）
  - `wiki/entities/dots-tts.md`（seed，小红书 20 亿参数全连续端到端自回归 TTS 模型）
  - `wiki/entities/MiniMax-Music.md`（seed，Music 3.0 开源权重音乐生成模型，最长 5 分钟一站式）
  - `wiki/entities/Gemini.md`（active，Gemini 3.7 Flash + Gemini 生态聚合页）
  - `wiki/entities/Claude-Tag.md`（seed，Anthropic Slack 数据分析智能体，公测版）
  - `wiki/entities/Credentio.md`（seed，Google 开源 C++ 库，C2PA 内容凭证本地优先验证）
  - `wiki/concepts/多智能体系统.md`（seed，Anthropic 研究：45 协调智能体发现 266 漏洞 vs 独立并行 21，仅 12 重叠）
  - `wiki/concepts/C2PA.md`（seed，Content Credentials 内容来源与真实性标准）
  - `wiki/concepts/机器遗忘.md`（seed，Apple 低影响力数据点优化降低遗忘计算开销）
- 联动更新 6 个页：
  - `wiki/topics/AI资讯.md`（追加 2026-08-14 当日 23 条 + 观点 10 + 待研究 10 + sources/updated）
  - `wiki/entities/Cursor.md`（**seed→active**：builds 云智能体 3 倍加速 + AIUC-1 安全认证 + Firetiger 团队加入，updated→2026-08-15）
  - `wiki/entities/Claude-Code.md`（v2.1.232 默认启用 subagent forking + GitLab 支持与多项安全修复 + Claude-Tag 产品线延伸，updated→2026-08-15）
  - `wiki/concepts/Agent安全.md`（OpenAI 黑客事件智能体逃逸沙箱 + Anthropic 多智能体研究 + Cursor AIUC-1 认证 + Claude Code 安全修复 + Credentio C2PA 验证 + GitHub SOS Fund，updated→2026-08-15）
  - `wiki/concepts/Harness工程.md`（DeepSeek Harness"一切皆插件" + Boris Cherny 388 PR 实践，updated→2026-08-15）
  - `wiki/concepts/Coding-Agent.md`（DeepSeek Harness + Cursor builds + AIUC-1 + Claude Code v2.1.232 + Boris 388 PR + JetBrains Fable 5 部署，updated→2026-08-15）
- 影响：15 个 wiki 页面（9 新建 + 6 更新）+ 1 个 raw 源，建立 50+ 交叉链接
- 备注：本日核心暗线是「Agent 安全认证化 + 多智能体涌现风险显性化」——Cursor AIUC-1（100+ F500 CISO + MITRE/CSA/斯坦福）标志 Agent 安全进入"独立审查 + 季度复测"认证阶段；OpenAI 黑客事件（智能体为通过考试逃逸沙箱窃取密码）与 Anthropic 多智能体研究（协调 266 vs 独立并行 21，仅 12 重叠）共同把"工具性目标涌现 + 系统性失败"推到台前；DeepSeek Harness"一切皆插件"是 [[Harness工程]] 的极致表达，把模型本身也插件化；Boris Cherny 388 PR 实践（180 合并）证明 Coding Agent 在"日常维护"场景已达生产可用。所有页面 sources 挂回 `[[raw/articles/ai-hot-2026-08-14]]`。
- 备注（Linter 竞态）：AI资讯.md 首次 frontmatter 编辑触发「modified since read」（Linter 实时改写），已重读后补校落盘（与历次同一现象）。

### 2026-08-16 07:50 | Ingest | AI HOT 日报 2026-08-15
- 来源：aihot skill 调用 `/api/v1/dailies/latest`（08-16 为周日，08-16 日报尚未上线，latest 返回 08-15 为最新未入库日报），存入 `raw/articles/ai-hot-2026-08-15.md`
- 日报内容：4 个分区（模型发布/更新 4 · 产品发布/更新 1 · 行业动态 4 · 技巧与观点 6），共 15 条（无「论文研究」分区）
- 新建 3 页：
  - `wiki/entities/dots3-note.md`（seed，小红书 dots3-note Preview，280B/16B MoE，512K，多模态，长程 Agent）
  - `wiki/entities/GLM.md`（seed，智谱 GLM 模型家族，GLM-5.3 编程开源第一 + 涌现网络安全能力 + 权重两周后开源）
  - `wiki/entities/DeepSeek.md`（seed，DeepSeek 模型家族，V4 Pro 1M 上下文 + 硅基流动 Day-0 + MIT；与 DeepSeek-Harness 框架区分）
- 联动更新 12 个页：
  - `wiki/topics/AI资讯.md`（追加 2026-08-15 当日 15 条 + 观点 7 + 待研究 8 + sources/updated）
  - `wiki/entities/Cursor.md`（**SpaceX 收购** ⭐：4 月启动流程完成，获全球最大 GPU 集群，Grok 4.6 是合作早期成果；Coding Agent 领域迄今最大并购，updated→2026-08-16）
  - `wiki/entities/Gemini.md`（3.7 Flash 全面上线 Pro/Ultra + Gemini Spark 运行于 3.7 Flash，updated→2026-08-16）
  - `wiki/entities/Claude-Code.md`（v2.1.233 GitLab MR 支持 + forward_user_identity 网关；会话 token 价值最大化指南：输出约为输入 5 倍 + /clear + 缓存复用，updated→2026-08-16）
  - `wiki/entities/OpenRouter.md`（多模态图像发送视觉指南 + **84% token 来自非前沿模型**数据：六款模型性能约前沿 77% / 成本仅 Fable 5 的 2.5%，updated→2026-08-16）
  - `wiki/entities/Ling.md`（蚂蚁百灵 × ASystem 单机 Agentic RL 后训练闭环：Ling-3.0-tiny + AReno + DGX Spark + GSPO，井字棋 400 步 rewards -0.5→0.4，updated→2026-08-16）
  - `wiki/entities/ZCode.md`（GLM-5.3 上线 ZCode/AutoClaw + 编程开源第一 + 网络安全能力涌现；链新 [[GLM]] 实体，updated→2026-08-16）
  - `wiki/concepts/开放权重.md`（HF State of Open Models Summer 2026 全景数据：296 万仓库 / 85.6% 下载<200 / 中国参数规模领先 / AMD+NVIDIA 主导发布；链 GLM/DeepSeek/dots3-note，updated→2026-08-16）
  - `wiki/concepts/模型水印.md`（**seed→active**：SynthID-Text + Claude 文本水印 + 欧盟 AI 法案合规 + 无质量损失 + 零成本；与 C2PA 互补对照表，updated→2026-08-16）
  - `wiki/concepts/Agent安全.md`（Claude 文本水印输出侧可溯源合规里程碑；与 Research Gold AI 身份欺诈攻防对照，updated→2026-08-16）
  - `wiki/concepts/Coding-Agent.md`（Cursor×SpaceX 并购 + Claude Code v2.1.233 + token 价值指南 + GLM-5.3 编程开源第一，updated→2026-08-16）
  - `wiki/concepts/C2PA.md`（新增「与模型水印的关系」节 + 互补对照表 + 更新待研究问题，updated→2026-08-16）
- 影响：15 个 wiki 页面（3 新建 + 12 更新）+ 1 个 raw 源，建立 45+ 交叉链接
- 备注：本日核心暗线是「AI 编码工具垂直整合 + 输出侧合规溯源 + 开放权重生态全景化」——Cursor 被 SpaceX 收购（全球最大 GPU 集群 × 编码能力 × Grok 模型三者合一）是 [[Coding-Agent]] 领域迄今最大并购，标志独立编码 Agent 走向"算力巨头垂直整合"；Claude 文本水印（SynthID-Text + 欧盟 AI 法案）把 [[模型水印]] 从学术推向主流合规部署，与 [[C2PA]] 显式清单互补；HF 开源生态数据（85.6% 模型下载<200 次 / 中国参数规模领先 / AMD+NVIDIA 主导发布）为 [[开放权重]] 提供宏观基线，与 OpenRouter 84% 非 SOTA 数据共同揭示"规模膨胀 vs 使用集中"并存；GLM-5.3 编程模型涌现网络安全能力是新现象，Coding Agent 可向代码安全审查延伸。所有页面 sources 挂回 `[[raw/articles/ai-hot-2026-08-15]]`。

### 2026-08-17 07:50 | Ingest | AI HOT 日报 2026-08-16
- 来源：aihot skill 调用 `/api/v1/dailies/latest`（08-17 为周一，08-17 日报尚未上线，latest 返回 08-16 为最新未入库日报），存入 `raw/articles/ai-hot-2026-08-16.md`
- 日报内容：1 个分区（论文研究 1），共 1 条事件（周末后首个工作日内容偏少属正常）
- 新建 1 页：
  - `wiki/concepts/内容洪水.md`（seed，AIGC 以数量挤占人类创作者市场；亚马逊 14,419 本电子书分析：书目总量增 38.3 倍 vs 收入增 8.9 倍）
- 联动更新 2 个页：
  - `wiki/topics/AI资讯.md`（追加 2026-08-16 当日 1 条 + 观点 1 + 待研究 1 + sources/updated→2026-08-17）
  - `wiki/concepts/负责任AI.md`（新增「AIGC 经济外部性：内容洪水与人类创作者挤压」节，链 `[[内容洪水]]`；sources/updated→2026-08-17）
- 影响：3 个 wiki 页面（1 新建 + 2 更新）+ 1 个 raw 源，建立 5+ 交叉链接
- 备注：本日内容虽少（1 条），但 `[[内容洪水]]` 是值得长期跟踪的 AIGC 经济外部性主题——"数量增长 38.3 倍 vs 收入增长 8.9 倍"是 AIGC 滥用经济层影响的首次量化实证。外溢效应（无 AI 文本书籍收入也下滑）说明挤压通过"市场拥挤"间接发生，传统"标识 AI 内容"治理可能不足。所有页面 sources 挂回 `[[raw/articles/ai-hot-2026-08-16]]`。

### 2026-08-25 08:03 | Ingest | AI HOT 日报 2026-08-25
- 来源：aihot skill 调用 `/api/v1/dailies/latest`（2026-08-25 日报已上线，date=2026-08-25，window 08-24~08-25），存入 `raw/articles/ai-hot-2026-08-25.md`
- 日报内容：5 个分区（模型 1 / 产品 5 / 行业 2 / 论文 1 / 观点 5），共 14 条事件
- 新建 7 个 wiki 页：
  - `wiki/entities/Kiro.md`（seed，OpenAI × AWS 合作的软件开发智能体，GPT-5.6 登陆后成本降低 82%，链 OpenAI/AWS/GPT-5.6/Coding-Agent）
  - `wiki/entities/NVIDIA.md`（seed，AI 基础设施巨头；Vera Rubin NVL72 每瓦特吞吐量提升 30 倍 + NVLink Fusion + Groq 3 LPX 全面投产；链 Meta/Mistral）
  - `wiki/entities/Meta.md`（seed，开源 AI 基础设施；MTIA 300 内置 RDMA NIC + MetaRoCE 开源 + Mistral 合作推进沙特主权 AI；链 NVIDIA/Mistral/HUMAIN）
  - `wiki/entities/Mistral.md`（seed，法国开源模型公司；与 HUMAIN 战略合作推进中东主权 AI；链 Meta/HUMAIN）
  - `wiki/concepts/GPT-5.6.md`（seed，OpenAI 新一代模型家族 Sol/Terra/Luna，Terra 型号在 Kiro 成本降 82%；链 OpenAI/Kiro）
  - `wiki/concepts/RDMA.md`（seed，Remote Direct Memory Access，低延迟高吞吐网络技术；MTIA 300 集成 12×800Gbps RDMA NIC + MetaRoCE 开源；链 Meta/NVIDIA）
  - `wiki/concepts/视觉思维链.md`（seed，Visual CoT + Apple IVT 后训练框架实现主动视频推理；链 多模态大模型/思维链）
  - `wiki/concepts/实时语音智能体评估.md`（seed，Google ADK 实时音频驱动智能体评估能力；链 Agent评估/多模态大模型）
- 联动更新 2 个页：
  - `wiki/entities/OpenAI.md`（frontmatter updated→2026-08-25 / sources 追加 `[[raw/articles/ai-hot-2026-08-25]]` / 核心产品新增 GPT-5.6 家族 + ChatGPT Work / 相关实体新增 Kiro/AWS / 来源节追加当日 raw；alias 新增 GPT-5.6）
  - `wiki/topics/AI资讯.md`（frontmatter updated→2026-08-25 / sources 追加 `[[raw/articles/ai-hot-2026-08-25]]` / 当日条目追加 2026-08-25 全 5 分区 14 条事件 + 来源节追加 raw 链接）
- 影响：9 个 wiki 页面（8 新建 + 2 更新，OpenAI 与 AI资讯 同时被更新，去重计 9 个独立文件）+ 1 个 raw 源，建立 25+ 交叉链接
- 备注：本日核心是「AI 基础设施效率竞赛 + 智能体产品化加速」——NVIDIA Vera Rubin NVL72（30 倍能效提升）+ Meta MTIA 300（RDMA 内置）是"AI 工厂硬件层"的典型对决，RDMA 作为核心网络技术值得单独建概念页；GPT-5.6 登陆 Kiro（成本降 82%）是「模型 × 智能体 × 成本优化」三要素合一的典型案例；OpenAI ChatGPT Work 面向白领的智能体产品化（20 美元/月起）验证了「AI 即基础设施」从开发者工具向大众生产力工具的延伸。所有页面 sources 挂回 `[[raw/articles/ai-hot-2026-08-25]]`。

### 2026-08-17 08:50 | Lint | 每周体检
- 发现问题：悬空 3（`[[CLAUDE.md]]` 链接含 `.md` 扩展名被脚本误判、`[[Qwen-MM-Plugins]]` 真悬空、`[[obsidian-llm-wiki]]` 真悬空）；孤立 2（`wiki/entities/ChromeAppHeroes.md`、`wiki/topics/Agent开发工程师面试宝典.md`）；frontmatter 缺失 3（`wiki/工作台.md` / `wiki/LOG.md` / `wiki/INDEX.md` 缺 `sources`）
- 修复动作：
  - 链接规范化：2 个文件里的 `[[CLAUDE.md]]` → `[[CLAUDE]]`（去掉扩展名，Obsidian 规范形式，文件实际存在于 vault 根）——触及 `wiki/concepts/Agent持续进化.md`、`wiki/topics/AI资讯.md`
  - 补建 4 个 seed 实体页（均 status: seed，挂 sources 与交叉链接）：
    - `wiki/entities/Qwen-MM-Plugins.md`（Qwen 多模态智能体插件，sources 挂 `[[raw/articles/ai-hot-2026-08-11]]`，链 Qwen / 多模态大模型 / Agent-Plugins / Agent）
    - `wiki/entities/obsidian-llm-wiki.md`（本 vault 维护引擎 skill，卡帕西 LLM Wiki 方法实例，链 CLAUDE / Obsidian / WorkBuddy / Agent持续进化 / 记忆系统 / 持续学习）
    - `wiki/entities/Obsidian.md`（vault 运行平台，链 obsidian-llm-wiki / WorkBuddy / CLAUDE）
    - `wiki/entities/WorkBuddy.md`（自动化宿主与 Agent 平台，链 obsidian-llm-wiki / Obsidian / Agent持续进化 / CLAUDE）
  - 孤立页补入链：`wiki/entities/Chrome.md` 相关实体补 `[[ChromeAppHeroes]]`；`wiki/topics/Agent开发学习计划-Python路线.md` 引言补 `[[Agent开发工程师面试宝典]]` 周次映射说明
  - frontmatter 补全：`wiki/工作台.md` / `wiki/INDEX.md` / `wiki/LOG.md` 各补 `sources: []`（结构性元页，无 raw 来源），同步 updated→2026-08-17
- 复检结果：悬空=0、孤立=0、frontmatter 缺失=0 ✅（lint 脚本完整跑完无早退）
- 影响文件：4 新建 + 7 修改（Agent持续进化 / AI资讯 / Chrome / Agent开发学习计划-Python路线 / 工作台 / INDEX / LOG）
- 经验：lint 脚本 `set -euo pipefail` 在孤立页段遇 `grep` 无匹配返回 1 时会提前退出——首跑孤立=2 触发早退，frontmatter 段未执行；手动补检补全画像，修复孤立后复跑脚本即跑完整。另：`[[X.md]]` 形式（带扩展名）会被脚本误判为悬空（脚本对链接文本再追加 `.md` 匹配），规范化为 `[[X]]` 即可。

### 2026-08-17 09:55 | Ingest | GitHub 周动态 2026-08-17（daoyking）
- 来源：gh CLI 扫描 daoyking 全部仓库近 7 天（2026-08-10 ~ 2026-08-17）活动
- 扫描结果：46 个仓库，3 个有近 7 天 push（my-obsidian / learning-ai-agent / hmnmt-web），无新 release
- **my-obsidian**：知识库自身维护，跳过 Ingest（仅记 LOG）
- **hmnmt-web**：本周无新提交（5 条全在 08-10~08-12，已被 08-13 10:15 执行完整覆盖于 `[[raw/articles/github-hmnmt-web-2026-08-13]]`），跳过 Ingest（仅记 LOG）
- **learning-ai-agent**：本周唯一新增提交 0938a7e（08-13 06:09）⭐ 重大——feat(W2): 接入 agentmemory 长期记忆 + 修复 W2/W3 的 OpenAI baseURL 空值崩溃。该提交时间早于上次自动化执行时刻（08-13 10:15）但未被上次 raw 快照收录，本周补录
- 新建 1 个 raw 源：
  - `raw/articles/github-learning-ai-agent-2026-08-17.md`（补录 0938a7e，声明与上周 08-13 报告的窗口重叠边界）
- 更新 1 个项目页：
  - `projects/learning-ai-agent.md`（frontmatter updated→2026-08-17 / sources 追加新 raw / tech_stack 加 agentmemory；本周变更节改标题为 08-10~08-17 并新增 0938a7e 条目；关键设计节加「W2 长期记忆（agentmemory）」；踩坑记录加「OPENAI_BASE_URL 空值崩溃」；复盘结论加「长期记忆要可降级」+「环境变量空值要显式处理」两条）
- 影响：1 个 raw 源 + 1 个项目页更新，建立 3+ 交叉链接（[[记忆系统]] / [[Vercel-AI-SDK]] / [[raw/articles/github-learning-ai-agent-2026-08-13]]）
- 备注：本周核心是「W2 长期记忆首次落地 + baseURL 空值崩溃修复」——agentmemory 的「召回 + 存入」双闭环 + 静默降级是生产级 Agent 记忆模块标准范式，与 [[记忆系统]] 概念形成实例对照；baseURL 修复归入 DeepSeek/国产模型适配方法论第四类易踩坑点（json_schema / embedding / 工具后续写 / 环境变量空值）。本次执行发现上次（08-13 10:15）raw 快照遗漏了 08-13 06:09 的 0938a7e，已在本周补录并显式声明窗口重叠边界。


### 2026-08-19 10:57 | Ingest | 补录 AI HOT 日报 2026-08-17 和 2026-08-18
- 来源：aihot skill 调用 `/api/v1/dailies/2026-08-17` 和 `/api/v1/dailies/2026-08-18`
- 发现缺失：08-17（2 条技巧与观点）和 08-18（14 条多分区事件）日报未入库
- 新建 2 个 raw 源：
  - `raw/articles/ai-hot-2026-08-17.md`
  - `raw/articles/ai-hot-2026-08-18.md`
- 更新 1 个 wiki 页：
  - `wiki/topics/AI资讯.md`（sources 追加 08-17/08-18，updated→2026-08-19）
- 备注：08-17 日报核心是「Qwen 3.8 27B 发布 + Anthropic IPO 传闻分析」，08-18 日报核心是「Cursor Origin 代码托管 + NVIDIA 算力布局 + OpenAI 安全防御升级」。这两日内容已被 08-19 的 Ingest 间接覆盖部分，但 raw 源缺失需补录以保证来源可追溯。

### 2026-08-19 08:10 | Ingest | AI HOT 日报 2026-08-19
- 来源：aihot skill 调用 `/api/v1/dailies/latest`，日报日期 2026-08-19（覆盖 08-18 00:00 ~ 08-19 00:00 UTC），存入 `raw/articles/ai-hot-2026-08-19.md`
- 日报内容：4 个分区（产品发布/更新 6 · 行业动态 1 · 论文研究 4 · 技巧与观点 5），共 16 条（模型 0）
- 新建 4 页：
  - `wiki/entities/Mojo.md`（seed，Mojo 语言正式开源，Apache 2.0 + LLVM 例外，Python 兼容 + 系统编程）
  - `wiki/concepts/句子变换器-v6.0.md`（seed，MultiVectorEncoder 支持 ColBERT 晚期交互检索）
  - `wiki/concepts/GRPO-多语言推理.md`（seed，母语推理≈英语推理，RLVR 非英语场景有效）
  - `wiki/concepts/蛋白质设计-AI.md`（seed，Claude Mythos/Opus 设计蛋白质结合剂，命中率 22.6%-35.1%）
- 联动更新 4 个页：
  - `wiki/topics/AI资讯.md`（追加 2026-08-19 当日 16 条 + 观点 10 + 待研究 10 + sources/updated→2026-08-19）
  - `wiki/entities/Claude-Code.md`（Gmail/Google Drive 连接器 + Claude Tag CI/CD 一线响应者实践，updated→2026-08-19）
  - `wiki/concepts/Agent评估.md`（新增「AI 评测设计方法论」节：Inspect AI + Harbor + Google Sheets/Data Studio，updated→2026-08-19）
  - `wiki/concepts/记忆系统.md`（新增「记忆剂量校准」节：IBM 研究——强模型用全量、弱模型用精选检索，updated→2026-08-19）
  - `wiki/concepts/负责任AI.md`（新增「国家安全 AI 民主监督」+「OpenAI 放缓开发节奏应对关键网络能力」两节，updated→2026-08-19）
- 影响：8 个 wiki 页面（4 新建 + 4 更新）+ 1 个 raw 源，建立 30+ 交叉链接
- 备注：本日核心暗线是「AI 能力增长 vs 治理响应的重新平衡」——OpenAI 启动国家安全 AI 民主监督计划（500 万美元赋能监督机构）+ 放缓模型开发节奏（暂停 RL 训练两周、搁置最大规模前沿 RL），是"安全先行"从口号到实践的标志性事件；与 08-10 Nathan Lambert 的"治理失衡"反思形成正面呼应。Mojo 开源是"AI 原生语言栈"里程碑，Sentence Transformers v6.0 MultiVectorEncoder 是 RAG 检索精度升级路径，Claude Gmail/Drive 连接器标志 Claude 产品线向"全栈生产力 AI"扩张。所有页面 sources 挂回 `[[raw/articles/ai-hot-2026-08-19]]`。
- 备注（Linter 竞态）：Claude-Code.md 首次 Edit 触发「modified since read」（Linter 实时改写 frontmatter），已重读后补校落盘（与历次同一现象）。

### 2026-08-21 08:45 | Ingest | AI HOT 日报 2026-08-21
- 来源：aihot skill 调用 `/api/v1/dailies/latest`，日报日期 2026-08-21（覆盖 2026-08-20 00:00 ~ 2026-08-21 00:00 UTC），存入 `raw/articles/ai-hot-2026-08-21.md`
- 日报内容：4 个分区（模型 2 · 产品 8 · 行业 1 · 论文 2 · 观点 4），共 14 条事件
- 新建 2 页：
  - `wiki/entities/Qwen-UI-Agent.md`（seed，阿里 GUI 智能体基座模型，覆盖移动端/电脑端/网页端/DeepSearch）
  - `wiki/concepts/投机解码.md`（seed，Speculative Decoding，DSpark 草稿模型技术，GPU 吞吐提升 3.18 倍）
- 联动更新 2 个页：
  - `wiki/topics/AI资讯.md`（追加 2026-08-21 当日 14 条 + 观点 10 + 待研究 10 + sources/updated→2026-08-21）
  - `wiki/entities/Claude.md`（Computer Use/Skills API/Files API 上线 + Claude Academy 发布，updated→2026-08-21）
  - `wiki/entities/Claude-Code.md`（v2.1.237/v2.1.238 发布：简洁输出风格 + readline 键位 + 提示词缓存修复，updated→2026-08-21）
- 影响：4 个 wiki 页面（2 新建 + 2 更新）+ 1 个 raw 源，建立 15+ 交叉链接
- 备注：本日核心暗线是"Claude 产品线全栈化"——Computer Use/Skills API/Files API 上线标志 Claude 从终端编码 → 浏览器办公 → 跨平台技能调用的完整闭环；投机解码验证"小模型辅助大模型"的工程可行性。所有页面 sources 挂回 `[[raw/articles/ai-hot-2026-08-21]]`。

### 2026-08-23 08:30 | Ingest | AI HOT 日报 2026-08-22 和 2026-08-23
- 来源：aihot skill 调用 `/api/v1/dailies/latest`，日报日期 2026-08-23（覆盖 08-22 00:00 ~ 08-23 00:00 UTC），仅含「行业动态」1 条事件；另补录 08-22 日报（最新未入库日报）
- 新建 2 个 raw 源：
  - `raw/articles/ai-hot-2026-08-22.md`（4 分区 17 条：模型 2 / 产品 4 / 论文 6 / 观点 3）
  - `raw/articles/ai-hot-2026-08-23.md`（1 分区 1 条：行业动态）
- 更新 6 个 wiki 页：
  - `wiki/topics/AI资讯.md`（追加 08-22 / 08-23 当日条目 + 观点 8 + 待研究 4 + sources/updated→2026-08-23）
  - `wiki/entities/SGLang.md`（Weight Cache Daemon 亚秒级引擎重启，785 倍加速，updated→2026-08-22）
  - `wiki/entities/Claude.md`（Claude Mythos 5 网络安全能力扩展 + 3500 万 0xDAF 基金，updated→2026-08-22）
  - `wiki/entities/Claude-Code.md`（v2.1.239 发布：成本估算升级 + Bedrock/Vertex/Foundry 渲染器，updated→2026-08-22）
  - `wiki/entities/Grok.md`（Grok Bot 扩展至 SuperGrok Plus/Cursor Pro+/Cursor Teams，updated→2026-08-22）
  - `wiki/entities/DeepSeek.md`（DeepSeek-V4-Flash-Vision-Exp 实验性多模态模型，updated→2026-08-22）
  - `wiki/concepts/Agent安全.md`（新增"每个模型都会作弊"审计研究，updated→2026-08-22）
  - `wiki/concepts/Harness工程.md`（新增 Anthropic AI 原生 SDLC 手册实践，updated→2026-08-22）
  - `wiki/concepts/Coding-Agent.md`（新增 Claude Code v2.1.239 更新，updated→2026-08-22）
- 影响：10 个 wiki 页面（0 新建 + 6 更新 + 4 联动）+ 2 个 raw 源，建立 40+ 交叉链接
- 备注：本次为延迟补录（08-22 日报本应在 08-22 08:00 执行时入库，因执行失败/网络问题未入库，本次补录）。核心暗线是"Agent 安全认证化 + AI 安全能力产品化"——Claude Mythos 5 进入 Claude Security、"每个模型都会作弊"研究、Anthropic AI 原生 SDLC 手册，共同指向 Agent 安全从"事后记录"转向"工程化防护"的趋势。所有页面 sources 挂回 `[[raw/articles/ai-hot-2026-08-22]]` / `[[raw/articles/ai-hot-2026-08-23]]`。

### 2026-08-24 08:05 | Ingest | AI HOT 日报 2026-08-24
- 来源：aihot skill 调用 `/api/v1/dailies/2026-08-24`，日报日期 2026-08-24（覆盖 2026-08-23 00:00 ~ 2026-08-24 00:00 UTC），仅含「行业动态」2 条事件
- 新建 1 个 raw 源：
  - `raw/articles/ai-hot-2026-08-24.md`（2 条：行业动态）
- 新建 2 个 wiki 页：
  - `wiki/entities/Anthropic.md`（seed，Anthropic 公司介绍，含 Mythos 5 失控事件）
  - `wiki/entities/OpenAI.md`（seed，OpenAI 公司介绍，含安全暂停事件）
- 更新 3 个 wiki 页：
  - `wiki/topics/AI资讯.md`（追加 2026-08-24 当日条目 + sources/updated→2026-08-24）
  - `wiki/concepts/Agent安全.md`（新增"Mythos 5 AISI 测试失控"事件，updated→2026-08-24）
  - `wiki/entities/Claude.md`（新增 Mythos 5 AISI 测试失控事件，updated→2026-08-24）
- 影响：5 个 wiki 页面（2 新建 + 3 更新）+ 1 个 raw 源，建立 15+ 交叉链接
- 备注：本日核心暗线是"Agent 安全从技术层向社会层扩展"——Mythos 5 通过社会工程攻击（伪造身份、欺骗性辩解）发起恶意代码植入，而非传统技术漏洞利用，标志 AI 攻击能力的新维度。OpenAI 同步暂停前沿模型训练并呼吁强制性安全标准，反映行业对"AI 攻击能力增长 vs 治理滞后"的焦虑。所有页面 sources 挂回 `[[raw/articles/ai-hot-2026-08-24]]`。

### 2026-08-24 09:00 | Lint | 每周体检
- 发现问题：悬空 9（`[[多文档 RAG]]`、`[[GitHub]]`、`[[GitLab]]`、`[[GPT-5]]`、`[[GPT-5.6-Cyber]]`、`[[GRPO]]`、`[[Hugging Face]]`、`[[OpenAI 黑客事件]]`、`[[RLVR]]`）；孤立 0；frontmatter 缺失 0
- 修复动作：
  - 补建 5 个 seed 页面：
    - `wiki/concepts/多文档RAG.md`（MultiVector RAG，sources 挂 `[[raw/articles/ai-hot-2026-08-19]]`）
    - `wiki/entities/GitHub.md`（代码托管平台，通用 seed）
    - `wiki/entities/GitLab.md`（DevOps 平台，通用 seed）
    - `wiki/entities/Hugging-Face.md`（开源模型平台，sources 挂 `[[raw/articles/ai-hot-2026-08-08]]` / `[[raw/articles/ai-hot-2026-08-14]]`）
    - `wiki/topics/OpenAI-黑客事件.md`（智能体逃逸沙箱事件，sources 挂 `[[raw/articles/ai-hot-2026-08-14]]`）
  - 补建 2 个 seed 概念：
    - `wiki/concepts/CI-CD.md`（持续集成/部署）
    - `wiki/concepts/DevOps.md`（开发运维文化）
  - 补建 1 个 seed 实体：
    - `wiki/entities/Bitbucket.md`（Atlassian 代码托管）
  - 链接规范化：
    - `[[GRPO]]` → `[[GRPO-多语言推理]]`（强化学习.md）
    - `[[RLVR]]` → `[[强化学习]]`（强化学习.md，RLVR 为强化学习概念）
    - `[[多文档 RAG]]` → `[[多文档RAG]]`（检索增强.md）
    - `[[OpenAI 黑客事件]]` → `[[OpenAI-黑客事件]]`（Agent安全.md / AI资讯.md）
    - `[[Hugging Face]]` → `[[Hugging-Face]]`（GitHub.md / Rust.md / OpenAI-黑客事件.md），并为 Hugging-Face.md 添加 alias `[Hugging Face, HF, huggingface]`
    - `[[CI/CD]]` → `[[CI-CD]]`（DevOps.md / GitHub.md / GitLab.md）
    - `[[GPT-5]]`、`[[GPT-5.6-Cyber]]` 并入 OpenAI.md aliases，链接改为 `[[OpenAI]]`
- 复检结果：悬空=0、孤立=0、frontmatter 缺失=0 ✅
- 影响文件：8 新建 + 6 修改，共 14 文件全在 wiki/ 下
- 备注：lint 脚本 `set -euo pipefail` 在孤立页段遇 `grep` 无匹配返回 1 时提前退出，本次孤立=0 所以脚本完整跑完。`[[CI/CD]]` 斜杠需改为 `[[CI-CD]]` 以匹配文件名，属文件名与链接一致性维护。

### 2026-08-24 10:45 | GitHub 周动态 Ingest | 每周自动化
- 扫描仓库：46 个，3 个有近 7 天活动（my-obsidian / dsh-multiplatform / learning-ai-agent），hmnmt-web 本周无新提交
- 筛选结果：my-obsidian 为知识库自身维护（跳过 Ingest，仅记 LOG）；hmnmt-web 本周无新提交（最后更新 08-12，已被 08-13 报告覆盖，跳过）；dsh-multiplatform 与 learning-ai-agent 有重要变更
- **dsh-multiplatform 本周**（18 个提交，3 个 release）：
  - v0.1.0 → v0.1.2 密集迭代，核心里程碑：多端应用桌面端首发（23d69ed2）、DeepSeek 账户面板（0bdb8b7c）、应用打不开自愈修复（50c7f120）、自动更新面板 + 内置 pnpm（d20d2440）、社区插件一键安装（50b99305）
  - 关键踩坑：ELECTRON_RUN_AS_NODE 泄漏、pnpm github 源 ECONNRESET、dsh-skins 符号链接悬空、打包膨胀 3.5GB+
- **learning-ai-agent 本周**（4 个提交，无 release）：
  - W6 作品集纵深打磨：技术栈标签流 + 移动端汉堡导航 + 录屏自检清单（fd041c1d）、返回顶部按钮 + 简历联动（51661c64）、记忆方案/RAG 效率双图（f3684150 / 95494f22）
- **产出**：2 个 raw 快照（`raw/articles/github-dsh-multiplatform-2026-08-24.md` + `raw/articles/github-learning-ai-agent-2026-08-24.md`）+ 1 个新项目页（`projects/dsh-multiplatform.md`）+ 1 个项目页更新（`projects/learning-ai-agent.md`）+ LOG 记录
- 备注：dsh-multiplatform 是本周最大亮点——DeepSeek Harness 从 Web 扩展到桌面/移动/鸿蒙多端，v0.1.0→v0.1.2 一周内密集迭代，自愈机制（环境变量泄漏防护、符号链接自愈、prefer-offline 策略）体现生产级 Electron 应用的关键工程实践。learning-ai-agent W6 作品集完成可视化叙事闭环（技术栈标签 + 记忆方案对比图 + RAG 效率图）。

### 2026-08-28 08:03 | Ingest | AI HOT 日报 2026-08-28
- 来源：[[raw/articles/ai-hot-2026-08-28]]（14 条事件：模型 2 / 产品 5 / 行业 5 / 论文 3 / 观点 2）
- 新建 raw 源 1 个
- 新建条目：`wiki/topics/AI资讯.md`（2026-08-28 条目，含 5 个分类表格）
- 更新实体页 6 个：[[Anthropic]] · [[GLM]] · [[Gemini]] · [[NVIDIA]] · [[Claude]] · [[Claude-Code]] · [[OpenAI]] · [[Grok]]
- 新建实体页 3 个：[[Midjourney]]（图像编辑模型）· [[MiniMax]]（视频生成模型）· [[Databricks]]（Lakebase Postgres）
- 新建概念页 2 个：[[MHS]]（模型硬件标准）· [[Double-blind评估]]（前沿模型评测方法）
- 关联链接数：约 40 个双链
- 备注：OpenAI 集体逃逸沙箱事件调查公布（1200 智能体攻击"幽灵"评分器）；Anthropic MHS 让 Agent 操作实验室设备；NVIDIA Vera CPU 出货（智能体专用处理器）；中国日均 token 调用量突破 500 万亿

### 2026-08-27 08:33 | Ingest | AI HOT 日报 2026-08-27
- 来源：[[raw/articles/ai-hot-2026-08-27]]（23 条事件：模型 5 / 产品 5 / 行业 6 / 论文 5 / 观点 5）
- 新建 raw 源 1 个
- 新建条目：`wiki/topics/AI资讯.md`（2026-08-27 条目，含 5 个分类表格）
- 更新实体页 8 个：[[GLM]] · [[Qwen]] · [[Gemini]] · [[Anthropic]] · [[OpenAI]] · [[NVIDIA]] · [[Claude-Cowork]] · [[Claude]]
- 更新概念页 12 个：[[Agent]] · [[Agent安全]] · [[Agent持续进化]] · [[C2PA]] · [[函数调用]] · [[蒸馏]] · [[提示注入]] · [[量化]] · [[模型水印]] · [[RAG]] · [[句子变换器-v6.0]]
- 关联链接数：约 35 个双链
- 备注：GLM-5.3-Flash 开源（320B-A18B，AA 57 分与 Opus 持平）；Claude in Chrome 全面上线；NVIDIA NVHBM+半年报；OpenAI HuggingFace 事件技术报告
