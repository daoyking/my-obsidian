---
title: 操作日志
type: topic
tags: [log]
created: 2026-08-07
updated: 2026-08-09
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
