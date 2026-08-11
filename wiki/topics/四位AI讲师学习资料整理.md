---
title: 四位AI讲师学习资料整理
aliases: [AI讲师学习资料, Karpathy吴恩达李宏毅李沐]
type: topic
tags: [ai, 学习资源, 讲师, 课程, agent]
created: 2026-08-11
updated: 2026-08-11
sources: ["~/about-project/about-AI/四位AI讲师学习资料整理.md", "~/about-project/about-AI/Agent开发学习计划.md"]
status: active
---

# 四位 AI 讲师学习资料整理

> 对象：[[Karpathy]]（Andrej Karpathy）· [[吴恩达]]（Andrew Ng）· [[李宏毅]]（Hung-yi Lee）· [[李沐]]（Mu Li）。贴合 [[Agent开发学习计划-Python路线]] 的 12 周路线，标注每位讲师的资料适合放在哪一周、解决什么问题。全部资源免费或可免费旁听，不需要买课。

## 背景

四位讲师各自解决不同短板，一句话定位：**Karpathy 讲原理、吴恩达讲应用、李宏毅讲直觉、李沐讲细节。四个都学，但按需各取 1-2 个资源，不是谁的课都全刷。**

| 讲师 | 核心领域 | 对 Agent 开发初学者最大的价值 | 语言 | 难度 | 投入性价比最高的 1-2 个资源 |
|---|---|---|---|---|---|
| [[Karpathy]] | LLM 底层原理、从零写代码实现 | 零基础建立 LLM 心智模型；搞懂 API 背后发生了什么 | 英文（有中文搬运/笔记） | 入门→进阶 | 《Intro to LLMs》1h、《Deep Dive into LLMs》3.5h |
| [[吴恩达]] | 机器学习教育 + LLM 应用层短课 | 应用层最短路径：Prompt → Function Calling → Agent 设计模式 | 英文（中文字幕） | 入门 | Prompt Engineering 短课 1.5h、Function Calling 短课 1h |
| [[李宏毅]] | 台大公开课，中文讲 AI 最通俗 | 中文无痛建立「大模型 → Agent」直觉，数学要求极低 | 中文 | 入门 | 《生成式 AI 导论 2024》19 讲 |
| [[李沐]] | 动手实践（《动手学深度学习》）+ 论文精读 | 中文逐段精读经典论文，补「API 背后的原理」底层直觉 | 中文 | 入门→进阶 | 论文精读 LLM 期次（GPT/Transformer/InstructGPT/CoT） |

## 关键子主题

### 一、Karpathy —— 底层原理（对应 Week 0-2，最优先）

前 OpenAI 创始成员、特斯拉 AI 总监，现创立 AI 教育公司 Eureka Labs。风格「边写代码边讲」，从零手搓神经网络和 GPT。对不打算训练模型的 Agent 开发者，**不需要全刷他的系列**，挑三个看即可。

**必看（按优先级）**

| 资源 | 时长 | 难度 | 说明 |
|---|---|---|---|
| 《[1hr Talk] Intro to LLMs》（https://www.youtube.com/watch?v=zjkBMFhNj_g） | 1h | 入门 | 零基础最佳入口：token、训练三阶段（预训练/SFT/RLHF）、「LLM OS」框架。计划 Week 1 已引用 |
| 《Deep Dive into LLMs like ChatGPT》（https://www.youtube.com/watch?v=7xTGNNLPyMI） | 3.5h | 入门→进阶 | 2025 年发布，幻觉成因、推理展示、工具使用、Agent 方向；建议分 3-4 段在 Week 8-9 前看完。中文笔记：Alan Hou 精读 / 知乎全文翻译 |
| 《Let's build GPT》（https://www.youtube.com/watch?v=kCc8FmEb1nY） | 2h | 进阶 | 跟着写 nanoGPT，真正看懂 transformer；Week 8 前后有余力时跟敲，没精力直接读配套仓库 build-nanogpt。B 站双语精译版 BV1mqrTBvEaf（已验证） |

**选看（收藏备用）**：《Neural Networks: Zero to Hero》播放列表（https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ），含 micrograd 反向传播、makemore 系列、Let's build GPT、State of GPT、GPT Tokenizer、Reproduce GPT-2 (124M)；配套仓库 nn-zero-to-hero。⚠️ 官方字幕多为英文自动生成，配 B 站搬运或 karpathy-wiki-zh 中文知识库一起看。

**代码仓库（抄作业用，全部官方已验证）**：nanoGPT（最简 GPT 训练/微调）、micrograd（100 行自动求导）、makemore（字符级语言建模）、minbpe（BPE 分词）、llm.c（纯 C/CUDA 训练，偏系统非必需）、nanochat（2025-10 发布「100 美元最好的 ChatGPT」，单节点跑通分词→预训练→微调→评估→推理全流程，**Week 10-11 做验收项目前值得读一遍**）。

**其他**：博客《Software 2.0》（「AI 编程 = 用数据写软件」的源头论述）；LLM101n（Eureka Labs AI 本科课程，截至 2026 课程正文未发布，暂不用投入）。

**小结**：`Intro to LLMs`（W1）→ `Deep Dive`（W8 前）→ `Let's build GPT`（W8 后有余力）。micrograd/makemore 全刷对不做训练的你是低性价比，跳过不亏。

### 二、吴恩达 —— LLM 应用层（对应 Week 1-8，与计划重合度最高）

Coursera/DeepLearning.AI 创始人，前 Google Brain/百度首席科学家。价值在 **DeepLearning.AI 免费短课**——每门 1-2 小时，全是应用层最新主题，直接对应每周实操。

**必看短课（按优先级，全部免费、英文中文字幕）**

| 短课 | 时长 | 对应周 | 说明 |
|---|---|---|---|
| ChatGPT Prompt Engineering for Developers | ~1h40m | W1 | Prompt 最佳实践、迭代式开发、搭聊天机器人，Agent 应用层第一块地基 |
| Function Calling and Data Extraction with LLMs | ~1h10m | W2 | 让 LLM 调真实函数、结构化抽取——**个人 Agent 自动化的核心机制**，看完再动手写 `tool_demo.py` |
| Agentic AI | ~10h | W3-4 | 2025-10 吴恩达亲授新课，四大设计模式：Reflection/Tool Use/Planning/Multi-Agent，第一性原理用 Python 逐个实现。**唯一「Agent 系统课」，按每周 5 小时约 2 周完成，建议 Week 4 框架周前后** |
| AI Agents in LangGraph | ~1h42m | W4 | LangChain 创始人合讲，从零手写 agent 再重写，含持久化、human-in-the-loop；与计划「二选一」的 LangGraph 选项直接配套 |
| Building Agentic RAG with LlamaIndex | ~54m | W8 | 路由、工具调用、Agent 推理循环；做 50 行 RAG demo 前看 |
| LangChain for LLM Application Development | ~1h48m | 可选 | 选了 OpenAI Agents SDK 而非 LangChain 时可跳过 |

其他相关短课（deeplearning.ai 搜索）：AutoGen / crewAI / smolagents / **MCP: Build Rich-Context AI Apps（对应 Week 5 MCP 周，值得加）** / Claude Code。

**系统课与书（按需，非 Agent 必需）**：Machine Learning Specialization（95h，纯 Agent 应用层非必需）、Deep Learning Specialization（127h，留作长期基础）、Generative AI for Everyone / AI For Everyone（非技术向可跳过）、AI Python for Beginners（有 Python 基础可跳过）、CS229 2018（数学推导全，想深挖再看，注意近年 CS229 已不是吴恩达授课）、《Machine Learning Yearning》（58 短章，ML 项目方法论，Week 10 做验收项目前可翻）。

⚠️ B 站无官方认证账号，搜到的「吴恩达AndrewNg」均为粉丝搬运号，认准 deeplearning.ai 官网。

**小结**：`Prompt Engineering`（W1）→ `Function Calling`（W2）→ `Agentic AI`（W3-4）→ `AI Agents in LangGraph`（W4）→ `Agentic RAG`（W8）→ 按需加 `MCP 短课`（W5）。

### 三、李宏毅 —— 中文讲 AI 最通俗（底层直觉首选，Week 1-6 边学边补）

台湾大学电机系教授，以「把抽象 AI 概念讲成生活化直觉」著称（皮卡丘/宝可梦梗、动画 PPT、不堆公式），每年跟紧前沿：ChatGPT → 生成式 AI → Agent。**对数学一般、每周只有 5 小时的学习者，《生成式 AI 导论》是中文世界里性价比最高的 LLM/Agent 入门课。**

**必看**：《生成式 AI 导论》2024 春（GenAI 2024 Spring）——19 讲 × 1-2 小时，官方声明「不需要任何先验知识」。课程主页 https://speech.ee.ntu.edu.tw/~hylee/genai/2024-spring.php ，B 站合集（42P 约 26.5 小时）：https://www.bilibili.com/video/BV1BJ4m1e7g8（已验证）。覆盖：生成式 AI 是什么 → Prompt → LLM 修炼史（预训练/SFT/RLHF）→ **第 9 讲 AI Agent** → Transformer → 可解释性/评测/安全 → 图像视频生成。配套中文笔记：Datawhale《李宏毅生成式人工智能教程》（leegenai-tutorial，已验证）。安排：每周 1-2 讲，第 1-4 讲放 W1-2 建立直觉，第 9 讲放 Week 3（手写 ReAct 前）。

**跟最新（Agent 时代课程）**：ML 2026 Spring（2026-03 开课，**第一讲就是「AI Agent：解剖小龙虾——以 OpenClaw 为例」**，接着 Context Engineering、KV Cache 推理加速、超长上下文、Harness Engineering、Self-Correction，几乎每讲都贴着个人 Agent 自动化场景）；ML 2025 Spring（生成式 AI 时代下的机器学习，约 10 周/15h，想先看完整版优先）；GenAI-ML 2025 Fall（入门合体课，第 0-10 讲）。

**选看（传统 ML 系列按需查漏）**：ML 2023 Spring（传统全栈最后一届，内容最饱满）、ML 2021/2022 Spring（经典版，中英双轨）、DLHLP 2020（语音+NLP 进阶）、线性代数 2023 Fall（数学补充）。

⚠️ 避坑：**《机器学习基石/技法》是台大林轩田的课，不是李宏毅的**。2024 年春起李宏毅停开传统 ML 课，改开生成式 AI 方向。B 站无官方认证账号。

**小结**：`GenAI 2024`（W1-3 建立 LLM/Agent 直觉，配 Datawhale 笔记）→ 有精力就跟着 `ML 2026 Spring` 看 Agent/工程向最新讲次（W4+）。

### 四、李沐 —— 中文底层细节 + 论文精读（Week 1 起按需补，长期参考书）

《动手学深度学习》作者、Apache MXNet 创始人之一，前亚马逊 AWS 资深首席科学家，2023 年起与导师 Alex Smola 创业（BosonAI）。**注意：他不是 Transformer 论文的作者**（8 位作者中没有他），但他的《论文精读》系列把这篇论文讲透了。

**必看：论文精读系列中的 LLM 期次（性价比全场最高，总投入约 6-8 小时）**

| 期次 | 时长 | 对应知识点 | 链接 |
|---|---|---|---|
| GPT / GPT-2 / GPT-3 精读（三部曲） | 1h30m | LLM 是什么、缩放定律 | https://www.bilibili.com/video/BV1AF411b7xQ |
| Transformer（Attention Is All You Need）逐段精读 | 1h27m | API 背后的架构 | https://www.bilibili.com/video/BV1pu411o7BE |
| InstructGPT 精读 | 1h07m | RLHF 对齐——Agent 行为调优底层 | https://www.bilibili.com/video/BV1hd4y187CR |
| Chain of Thought 精读 | 33m | 思维链/推理——提示词直觉 | https://www.bilibili.com/video/BV1t8411e7Ug |
| Llama 3.1 精读（5 期） | 约 2h | 现代开源 LLM 全栈（数据/模型/训练 infra） | 第 1 期 https://www.bilibili.com/video/BV1WM4m1y7Uh |

建议：GPT 三部曲 + Transformer 放 W1-2（Karpathy《Intro to LLMs》之后看，把「直觉」升级成「细节」）；InstructGPT + CoT 放 Week 3（手写 ReAct 周）；Llama 3.1 精读随意。完整索引：https://github.com/mli/paper-reading（官方维护）。

**选看：《动手学深度学习》（长期参考书，不用啃完）**：中文在线书第二版 https://zh.d2l.ai/（每节代码可运行，支持 PyTorch 等多框架）· GitHub d2l-zh（79.6k stars）· B 站配套视频课约 60 小时不必全刷，只看「预备知识 + 注意力机制/Transformer」相关章节（约 10 小时）。

**其他值得收藏**：斯坦福 CS329P《实用机器学习》（工程化思维，Week 10 可参考）；李沐团队开源语音大模型 higgs-audio（「从论文到可用产品」真实演示，Week 10-11 做项目前看）；心态文《创业一年，人间三年》（Week 12 复盘时读）。

**小结**：李沐是「细节」担当，**没有 Agent 实操课程**——进入框架/工具调用阶段用官方文档补应用层，用论文精读补底层直觉。D2L 教材留作长期参考书，遇到看不懂的概念（张量、注意力）再回来翻。

### 五、与 12 周学习计划对照表

> 对照 [[Agent开发学习计划-Python路线]]。✅ = 计划已引用的资源；🆕 = 本次整理新增建议。

| 周 | 主题 | 该周用谁的什么资源 | 优先级 |
|---|---|---|---|
| W0 | 环境与第一次 API 调用 | 无课程；动手为主 | — |
| W1 | LLM 核心概念 | ✅ Karpathy《Intro to LLMs》；✅ 吴恩达《ChatGPT Prompt Engineering》；🆕 李宏毅 GenAI 2024 第 1-4 讲；🆕 李沐 GPT 三部曲精读（有余力时） | 高 |
| W2 | Tool Calling | 🆕 吴恩达《Function Calling and Data Extraction with LLMs》（完美对应）；李宏毅 GenAI 2024 后续讲次 | 高 |
| W3 | 手写 Agent 循环（ReAct） | 🆕 李宏毅 GenAI 2024 第 9 讲「AI Agent」（动手前看）；🆕 李沐 InstructGPT + CoT 精读；🆕 吴恩达《Agentic AI》前 2 个模式 | 高 |
| W4 | 引入框架 | 🆕 吴恩达《AI Agents in LangGraph》（选 LangGraph 路线时）；🆕 李宏毅 ML 2026 Spring 第 1 讲「AI Agent」 | 中 |
| W5 | MCP 协议 | 🆕 吴恩达短课《MCP: Build Rich-Context AI Apps》；Karpathy 无相关；实践为主 | 中 |
| W6 | 写自己的 MCP Server | 无课程；实践为主（官方文档） | — |
| W7 | macOS 能力桥接 | 无课程；实践为主（WinSnap 主场） | — |
| W8 | 记忆与上下文工程 | 🆕 吴恩达《Building Agentic RAG with LlamaIndex》；Karpathy《Deep Dive》（幻觉/上下文章节，建议此时看完）；李沐 Llama 3.1 精读（可选） | 高 |
| W9 | 可靠性、成本与安全 | Karpathy《Deep Dive》后半（工具使用/验证输出建议）；吴恩达《Agentic AI》剩余模式 | 中 |
| W10-11 | 验收项目《个人桌面助手》 | 🆕 Karpathy nanochat 仓库（全栈 LLM 流程参照）；🆕 李沐 higgs-audio（产品化参照）；吴恩达《Machine Learning Yearning》（翻一翻） | 中 |
| W12 | 扩展方向与复盘 | 李沐《创业一年人间三年》（心态参考）；李宏毅 ML 2026 跟随 | 低 |

### 六、一条整合路径（按每周 5 小时排）

**前 4 周（地基）**：Karpathy《Intro to LLMs》1h + 吴恩达 Prompt 短课 1.5h（W1）→ 吴恩达 Function Calling 短课 1h + 动手（W2）→ 李宏毅 GenAI 2024 第 1-9 讲（每周 1-2 讲，贯穿 W1-3）→ 手写 ReAct + 李沐 InstructGPT/CoT 精读（W3）。

**中 4 周（工具与协议）**：吴恩达《Agentic AI》分两周看完（W4-5，可和框架实操并行）→ MCP 周 + 吴恩达 MCP 短课（W5）→ 自己的 MCP Server + 李沐 Llama 3.1 精读（W6）→ macOS 桥接（W7）。

**后 4 周（工程化）**：吴恩达 Agentic RAG 短课（W8）→ Karpathy《Deep Dive》3.5h 分两周看（W8-9）→ 验收项目（W10-11）→ 复盘 + 李宏毅 2026 课程跟随（W12）。

**每周 5 小时的分配原则**：概念学习 1.5h + 动手实验 3h + 复盘 0.5h。**视频是「下饭菜」，动手才是正餐——哪周时间紧，先砍视频，不要砍项目。**

### 七、避坑清单（四位讲师各一条）

1. **Karpathy**：Zero to Hero 全刷（约 20 小时+）对不打算训练模型的你 ROI 很低，只挑 Intro / Deep Dive / Let's build GPT 三件套；官方字幕多为英文自动生成，优先看 B 站精译版。
2. **吴恩达**：ML/DL Specialization 是经典但不是 Agent 必需，别在入门期把 220 小时砸进去；B 站无官方账号，认准 deeplearning.ai 官网。
3. **李宏毅**：《机器学习基石/技法》是林轩田的课，不是李宏毅的；2024 年后他停开传统 ML 改讲生成式 AI，别拿旧课目录当新课看。
4. **李沐**：他不是 Transformer 论文作者（很多人误传）；D2L 视频课 60 小时不必全刷，按需查章节即可；他没有 Agent 实操课，应用层要靠官方文档 + 吴恩达短课补齐。

## 我的观点

- **预算先行**：四人都学，但加起来控制在 30 小时内，剩下的时间全部留给动手——这与「每周 5 小时、12 周共 60h」的计划匹配，视频占比不超过一半。
- **按周取用而非按人刷完**：讲师资料的价值在于「恰好对应某一周的某一环节」，对照表比完整目录更实用。
- **中文资源是速度杠杆**：李宏毅 + 李沐的中文内容能把概念学习时间砍掉近半，把省下的时间留给 W3/W7 这类动手周。

## 待研究问题

- 吴恩达《Agentic AI》（10h）与手写 ReAct 周的先后顺序是否最优？是否应该先看模式再动手？
- ML 2026 Spring 课程持续更新中，哪些讲次值得跟进（与 [[上下文工程]] / [[Harness工程]] 概念页联动）？
- Deep Learning Specialization 是否值得在 12 周计划之后作为长期基础系统补一遍？

## 相关概念

- [[Agent]] · [[函数调用]] · [[ReAct]] · [[MCP]] · [[RAG]] · [[Prompt工程]] · [[思维链]] · [[RLHF]] · [[上下文工程]] · [[Harness工程]] · [[微调]] · [[蒸馏]]

## 相关主题

- [[Agent开发学习计划-Python路线]]（本页配套）· [[Agent开发学习计划]]（前端版）· [[动手学大模型]] · [[AI-Agents-in-Depth]] · [[AI]]

## 相关实体

- [[Karpathy]] · [[吴恩达]] · [[李宏毅]] · [[李沐]]

## 来源

- 整理稿原稿：`~/about-project/about-AI/四位AI讲师学习资料整理.md`（2026-08-11，链接均经检索验证，个别无法直接确认的标注「未验证」）
