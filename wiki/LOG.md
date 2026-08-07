---
title: 操作日志
type: topic
tags: [log]
created: 2026-08-07
updated: 2026-08-07
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
