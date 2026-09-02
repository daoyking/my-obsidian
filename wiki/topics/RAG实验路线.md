---
title: RAG实验路线
aliases: [RAG 实验路线, RAG Lab Roadmap, RAG阶梯]
type: topic
tags: [rag, roadmap, experiment, evaluation, local-first, mastra, ollama, portfolio]
created: 2026-09-02
updated: 2026-09-02
sources: ["[[raw/articles/awesome-llm-apps-rag-tutorials]]", "[[raw/articles/awesome-llm-apps]]"]
status: active
---

# RAG 实验路线：把 24 个样例压缩成 6 阶段可验收的自测路线

## 为什么需要单独一条路线

W3 已经把 RAG **跑通**了。但「跑通」和「拿得出手」之间还隔着三件事：能不能测、能不能拒答、能不能诊断失败。

[[awesome-llm-apps]] 的 `rag_tutorials` 目录里有 **24 个**端到端可跑的 RAG 样例（README 目录表写 21 个，实测 24 个，README 没跟上）。它是目前见过最完整的 RAG 实践样本库——但它是**并列清单**，不是**路线**。24 个全跑一遍是浪费：其中至少 8 个只是「换了个模型/换了个向量库」的同一套管道。

本页做的事：把 24 个样例压成 **6 个阶段**，每阶段给出「样例参照 + 我的栈 + 可量化验收」。不做完不算完。

## 前置（先做这个，否则后面全是玄学）：一条贯穿全程的基线评测集

**没有评测集的 RAG 优化就是玄学调参。** 这一节是整条路线的地基，Stage 0 之前必须完成。

**语料选择**：用 Obsidian vault 的 `wiki/` + `projects/`（约 225 页）。理由：① 我熟悉内容，能人工判对错；② 页面间有双链结构，天然支持多跳问题；③ 持续在增长，能测增量更新；④ 直接对应 [[CLAUDE]] 里「为什么选 LLM Wiki 而非纯 RAG」的对照实验——**同一个语料，一套走 RAG、一套走预编译 wiki，正好能量化两者的差距**。

**评测集**：50 题，三类分置——

| 类型 | 数量 | 说明 | 正确行为 |
|---|---|---|---|
| 事实型 | 30 | 答案能在某一页直接找到 | 答对 + 引用到正确页 |
| 多跳型 | 10 | 需要跨 2-3 页综合（利用双链结构出题） | 答对 + 引用 ≥2 页 |
| 陷阱型 | 10 | 库里根本没有答案（如「vault 里对 Rust 的所有权机制怎么说」） | **拒答** |

**指标**：Recall@5 · MRR · 答案正确率（人工 0/0.5/1 三档）· 拒答准确率（陷阱题拒答率）· p50/p95 延迟 · 单次查询成本

**铁律**：**每完成一个阶段，重跑一次这 50 题，把数字填进同一张表。** 曲线比任何主观感受都诚实。

| 阶段 | Recall@5 | MRR | 正确率 | 拒答准确率 | p95 延迟 | 备注 |
|---|---|---|---|---|---|---|
| 基线（Stage 0） | — | — | — | — | — | |
| +混合检索（S1） | | | | | | |
| +重排序（S1） | | | | | | |
| +工具化/拒答（S2） | | | | | | |
| +纠错/路由（S3） | | | | | | |
| +图谱（S4） | | | | | | |

---

## Stage 0 — 最小可测管道（0.5 天）

**目标**：一条能跑通、能接上评测集的最小管道。不追求效果，只追求「有数字」。

- **样例参照**：`rag_chain`（PharmaQuery，上传文档 → 相似度检索 → 回答）、`llama3.1_local_rag`（单 URL 网页问答，全本地）
- **我的栈**：[[Mastra]] + [[Ollama]]（`qwen3:8b` 生成 + `nomic-embed-text` 嵌入）+ LanceDB（本地文件，零运维）
- **动作**：分块（固定 512 token，overlap 64）→ 嵌入 → top-k=5 → 拼上下文 → 生成
- **验收**：50 题跑通，基线数字入表；管道代码 <200 行
- **坑**：分块大小是第一个隐形变量。别在这一步调它——**先把数字记下来，Stage 1 再动**

## Stage 1 — 检索质量（2 天）

**目标**：解决「召回不全」。这是投入产出比最高的一级。

- **样例参照**：`hybrid_search_rag` / `local_hybrid_search_rag`（RAGLite，稠密+稀疏混合）、`agentic_rag_embedding_gemma`（EmbeddingGemma 本地嵌入）、`qwen_local_rag`（多本地模型横向对比）
- **动作**（**每次只改一个变量**）：
  1. 纯向量 → 纯 BM25 → 混合（RRF 融合）→ 混合 + 重排序
  2. 分块策略对比：固定 512 / 按标题递归切 / 语义切分
  3. 嵌入模型对比：`nomic-embed-text` vs `bge-m3`（本地）
- **核心机制**：[[重排序]] 是这一步的关键增量——初检索用快而糙的方式召回 top-50，再用交叉编码器精排到 top-5
- **验收**：Recall@5 相对基线提升 ≥15pp；四种检索配置的对比表进 portfolio
- **坑**：本地跑 rerank 模型（如 `bge-reranker-v2-m3`）在 CPU 上很慢，单查询可能 >2s。**先测延迟再决定放不进管线**

## Stage 2 — 工具化 + 拒答（3 天）★ 分水岭

**目标**：从「一次性拼上下文」跃迁到「检索是 Agent 可按需调用的工具」，并且**证据不足时敢拒答**。

- **样例参照**：`agentic_typed_rag_pydanticai`（★核心：答案必须是带精确引用、chunk ID、置信度的 `Answer` 对象，**检索太弱时在调 LLM 之前就拒答**）、`agentic_rag_with_reasoning`（展示逐步推理）、`deepseek_local_rag_agent`（推理型模型 + RAG）
- **动作**：
  1. 把检索包成 [[工具调用]]，让 Agent 自己决定「要不要检索、检索几次、换什么关键词」
  2. 用 [[结构化输出]]（zod schema）约束答案：`{ answer, sources: [{chunkId, quote, page}], confidence, answered }`
  3. 拒答阈值：检索最高分 < T 时直接返回 `answered: false`，**不调生成模型**
- **验收**：
  - 陷阱题拒答率 ≥80%
  - 引用精确率 ≥90%（引用确实支持该结论，人工抽 20 条判）
  - 答案带结构化字段，前端可直接渲染成卡片（接 [[生成式UI]]）
- **为什么这级最关键**：RAG 最贵的失败不是答错，是**自信地答错**。拒答能力是从 demo 走向可交付的分界线，也是面试最能讲出深度的一级

## Stage 3 — 纠错闭环 + 多源路由（3 天）

**目标**：第一次检索失败时，系统能自己发现并补救。

- **样例参照**：`corrective_rag`（★核心，CRAG：相关性打分 → 不合格则查询转换 → 仍不足则网页回退）、`rag_database_routing`（★核心：Agent 当路由器，把问题分到产品/客服/财务三个库）、`autonomous_rag`、`gemini_agentic_rag`、`rag_agent_cohere`、`agentic_rag_math_agent`（DSPy 输入输出护栏 + 人工反馈闭环）
- **动作**：
  1. CRAG 三分支：检索结果打分 → 合格直接生成 / 部分合格做查询改写重试 / 全部不合格走网页搜索
  2. 数据库路由：按问题语义选库，选错可回退
  3. 接入 [[人机协同]]：低置信度答案标黄，用户点「没用」则记入日志
- **验收**：首检失败（Recall@5=0）的样本中，≥50% 经纠错后召回成功；路由准确率 ≥85%
- **坑**：网页回退会引入不可控内容与延迟。**必须给回退结果打上来源标记**，让用户知道这段来自外部而非本地库

## Stage 4 — 多模态与图谱（3 天，选做 · 简历加分项）

**目标**：处理文本 RAG 解决不了的两类问题——跨文档多跳、非文本内容。

- **样例参照**：`knowledge_graph_rag_citations`（★核心：知识图谱做多跳推理 + **每条断言可验证归属**）、`multimodal_agentic_rag`（Gemini Embedding 2 + Google ADK，文本/URL/PDF/图像/音频/视频统一检索，还带 3D 嵌入视图）、`vision_rag`（Cohere Embed-4 把 PDF 页当图像处理）
- **动作**：
  1. 从 vault 的双链结构抽实体关系建轻量图谱（不必上 Neo4j，内存图够用）
  2. 多跳题（那 10 题）单独测：向量 RAG vs 图谱 RAG 的 Recall 对比
  3. 图像侧：把 hmnmt 的产品规格表 PDF 当图像检索（与 [[hmnmt-web]] 结合，一举两得）
- **验收**：多跳题 Recall 相对 Stage 1 提升 ≥20pp；每条断言可回溯到源节点
- **判断**：如果求职时间紧，**这级可以只做图谱部分**——3D 嵌入视图视觉效果炸裂但工程门槛低，做成 portfolio 演示页性价比很高

## Stage 5 — 可诊断 + 可观测（2 天）★ 收口

**目标**：从「能跑」到「出了问题知道去哪找」。这一级直接对接 W5（eval / observability）。

- **样例参照**：`rag_failure_diagnostics_clinic`（★核心：把失败归类成可复用模式，给**最小结构修复**而不是「加点上下文/换个模型」）、`contextualai_rag_agent`（托管方案，含 rerank + LMUnit 自定义 rubric 评估 + 归因可视化）、`rag-as-a-service`（Ragie.ai，50 行生产级）
- **动作**：
  1. 建一套**失败模式分类体系**（照着 diagnostics clinic 的思路，落到自己的栈）：
     - 分块断裂（答案跨块被切开）
     - 嵌入失配（术语/中英混排）
     - 召回不足但生成自信（→ 应拒答却没拒，Stage 2 阈值失效）
     - 上下文稀释（top-k 太大，关键片段被淹没）
     - 引用漂移（答案对但引用错页）
     - 时效性（库里是旧版）
  2. 每一类给出「最小结构修复」建议，做成一张 checklist
  3. 接入 trace：每次查询记录 query → 改写 → 召回 chunk → rerank 分 → 引用 → 生成，可回放
- **验收**：故意注入 6 类失败，诊断脚本能正确分类 ≥5 类；trace 可完整回放单次查询
- **交付物**：这个 checklist + 诊断脚本是**面试时最硬的一份材料**——它证明你不是调通过 RAG，而是**维护过 RAG**

---

## 24 个样例 → 阶段映射（完整，无遗漏）

| # | 样例 | 阶段 | 它的独特价值 |
|---|---|---|---|
| 1 | `rag_chain`（PharmaQuery） | 0 | 最小管道参照 |
| 2 | `llama3.1_local_rag` | 0 | 全本地最小管道 |
| 3 | `local_rag_agent` | 0-1 | Agno v2 + Qdrant + Ollama |
| 4 | `hybrid_search_rag` | 1 | 混合检索（云端 Claude） |
| 5 | `local_hybrid_search_rag` | 1 | 混合检索（全本地） |
| 6 | `agentic_rag_embedding_gemma` | 1 | 本地嵌入 EmbeddingGemma |
| 7 | `qwen_local_rag` | 1 | 多本地模型横向对比 |
| 8 | `deepseek_local_rag_agent` | 2 | 推理型模型 + RAG |
| 9 | `agentic_rag_with_reasoning` | 2 | 推理过程可视化 |
| 10 | `agentic_rag_gpt5` | 2 | 参考（需 GPT-5 key，不跑） |
| 11 | `gemini_agentic_rag` | 3 | 查询改写 + 网页回退 |
| 12 | `agentic_typed_rag_pydanticai` | **2★** | 拒答 + 精确引用 + 置信度 |
| 13 | `agentic_rag_math_agent` | 3 | DSPy 护栏 + 人工反馈闭环 |
| 14 | `corrective_rag` | **3★** | CRAG 三分支纠错 |
| 15 | `autonomous_rag` | 3 | PgVector + 网页回退 |
| 16 | `rag_database_routing` | **3★** | Agent 当路由器分库 |
| 17 | `rag_agent_cohere` | 3 | LangGraph 编排 |
| 18 | `ai_blog_search` | 3 | 领域化检索（参考） |
| 19 | `rag-as-a-service` | 5 | 50 行生产级 |
| 20 | `contextualai_rag_agent` | **5★** | LMUnit rubric 评估 + 归因可视化 |
| 21 | `knowledge_graph_rag_citations` | **4★** | 图谱多跳 + 可验证引用 |
| 22 | `multimodal_agentic_rag` | 4 | 全模态统一检索 + 3D 嵌入视图 |
| 23 | `vision_rag` | 4 | PDF 页当图像检索 |
| 24 | `rag_failure_diagnostics_clinic` | **5★** | 失败模式分类 + 最小结构修复 |

**必跑的只有 6 个**（标 ★ 的 `agentic_typed_rag_pydanticai` / `corrective_rag` / `rag_database_routing` / `knowledge_graph_rag_citations` / `rag_failure_diagnostics_clinic`，加上 Stage 1 的混合检索二选一）。其余扫 README 提炼技术点即可。

## 关键技术选型：用 TS 栈复刻，而不是照抄 Python

24 个样例里 **Python:TypeScript ≈ 23:1**。但我不打算照抄：

1. **栈一致性**：我的主力是 [[Mastra]] + [[Vercel-AI-SDK]] + [[TypeScript]]，照抄 Python 等于造一个与主栈割裂的孤岛
2. **前端是我的护城河**：样例 UI 全是 Streamlit。我用 [[Vue]] / [[React]] 做前端，能把「检索过程可视化」「引用高亮定位」「低置信度标黄」这些**只有前端工程师才做得漂亮**的东西做出来——这恰恰是 portfolio 差异化所在
3. **复刻本身就是可讲的故事**：「我用 TS 栈复刻了 Python 生态里最经典的 6 个 RAG 范式，并做了横向对比」比「我跑通了几个开源 demo」含金量高一个量级

**执行原则**：读 Python 样例的**架构与判定逻辑**，不读它的语法。每个 Stage 产出一份「原样例做了什么 → 我的 TS 实现」对照笔记。

## 本地优先的取舍

- **能本地跑的**：嵌入（`nomic-embed-text` / `bge-m3`）、生成（[[Ollama]] 上已装 `qwen3:8b` / `qwen2.5:14b` / `qwen3:14b-unlimited`）、向量库（LanceDB/[[Qdrant]] 本地）
- **本地跑不动的**：重排序（CPU 上延迟高，见 Stage 1 坑位）、图谱抽取（小模型抽实体关系质量差）
- **判断标准**：**延迟预算倒推**。如果目标是交互式（p95 < 3s），rerank 必须上 GPU 或走云端；如果是批处理评测（如跑 50 题评测集），本地慢点无所谓——**评测跑批用本地，线上交互用云端**，这是最经济的切法
- 云端兜底走本地自托管 OmniRoute（`localhost:20128`），已有 5833 个模型可选

## 我的观点

1. **这条阶梯真正的瓶颈不在检索算法，在「没有评测集」。** 24 个样例里只有 `contextualai_rag_agent` 带了 LMUnit 评估，其余全是 demo。我自己建的 50 题集比任何 fancy 检索技巧都值钱——它让后面每一次改动都可证伪
2. **拒答被严重低估。** 业界讨论 RAG 十有八九在聊召回率，很少聊「什么时候不该答」。而生产环境里，一个自信的错答造成的信任损失，远大于十次「我不知道」
3. **`rag_failure_diagnostics_clinic` 是整个目录里最被低估的项目。** 它没有漂亮的 UI，星级也低，但「把失败归类成可复用模式 + 给最小结构修复」这个思路，是从「会搭 RAG」到「能维护 RAG」的分界线
4. **24 个样例的价值在分布，不在个体。** 单看任何一个都不惊艳；把它们按「检索质量 / 工具化 / 纠错 / 多源 / 图谱 / 诊断」排开，才看得出 2026 年 RAG 工程的完整技能树——这份结构化认知本身比跑通几个 demo 有用
5. **和 [[CLAUDE]] 的选择形成对照。** 本库选 LLM Wiki（导入时预编译）而非 RAG（查询时检索）。Stage 0-1 的实测数字正好能回答「同一个语料，两条路差多少」——这是别人问「你为什么这么设计」时最好的答案

## 待研究问题

- [ ] RRF（倒数排名融合）的具体权重怎么定？有无自适应方案？
- [ ] 拒答阈值 T 怎么标定？固定阈值 vs 按查询类型动态阈值，哪个更实用？
- [ ] 中文语料下 BM25 与稠密检索的最优融合比例是否与英文不同？（直觉是中文分词质量会显著影响稀疏侧）
- [ ] 知识图谱抽取用本地小模型（qwen3:8b）质量如何？退化到什么程度就必须换大模型？
- [ ] 「RAG vs 预编译 wiki」在同一语料上的量化对比——Stage 1 完成后就能做这个实验
- [ ] 增量更新：vault 每天都在长，全量重建索引 vs 增量索引的拐点在哪？

## 相关概念

- [[RAG]] · [[多文档RAG]] · [[重排序]] · [[向量数据库]] · [[嵌入]] · [[语义搜索]] · [[结构化输出]] · [[工具调用]] · [[上下文工程]] · [[Agent评估]] · [[人机协同]] · [[生成式UI]] · [[知识图谱]]

## 相关实体

- [[awesome-llm-apps]] · [[Ollama]] · [[Qdrant]] · [[Mastra]] · [[Vercel-AI-SDK]] · [[LangGraph]] · [[TypeScript]] · [[Vue]] · [[Python]] · [[hmnmt-web]]

## 相关主题

- [[Agent开发学习计划-Python路线]] · [[前端转AI全栈学习计划]] · [[AI工具集]]

## 来源

- [[raw/articles/awesome-llm-apps-rag-tutorials]]（24 个项目 README 全文快照，含技术栈统计）
- [[raw/articles/awesome-llm-apps]]（主 README，目录表写 21 个 RAG 教程，实测 24 个）
