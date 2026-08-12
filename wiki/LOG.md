---
title: 操作日志
type: topic
tags: [log]
created: 2026-08-07
updated: 2026-08-11
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
