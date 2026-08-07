---
title: AI资讯
aliases: [AI新闻, AI日报, AI动态]
type: topic
tags: [ai, news, aihot, topic]
created: 2026-08-08
updated: 2026-08-08
sources: ["[[raw/articles/ai-hot-2026-08-07]]"]
status: active
---

# AI资讯

## 背景

> 每日通过 [AI HOT](https://aihot.virxact.com) 日报跟踪 AI 圈动态，由自动化任务（每日 08:00）驱动 Ingest。本页是当日条目的汇总入口，重要事件会同步编译到 [[AI]] 及相关实体/概念页。

## 当日条目

### 2026-08-07（AI HOT 日报）

> 来源：`[[raw/articles/ai-hot-2026-08-07]]` · [AI HOT 原页](https://aihot.virxact.com/daily/2026-08-07)

#### 模型发布/更新

| 事件 | 要点 | 关联 |
|---|---|---|
| **NVIDIA Cosmos 3** | 混合 Transformer 架构的开放物理 AI 全模态模型，整合视觉推理、世界生成与动作预测 | [[AI]] · [[多模态大模型]] |
| **GPT-5.6 Sol** | ChatGPT 改进版，提升准确性与一致性，免费用户扩大访问；免费用户可无限用 GPT-5.6 Luna | [[AI]] · [[Agent]] |

#### 产品发布/更新

| 事件 | 要点 | 关联 |
|---|---|---|
| **Agent Plugins 1.0.0** | 谷歌/亚马逊/微软支持的中立目录规范，将 Agent Skills 和 MCP 服务器打包为单一可移植单元（plugin.json 清单） | [[Agent-Plugins]] · [[MCP]] · [[Agent]] |
| **谷歌地图 Ask Maps 智能体升级** | 可对话订餐、找酒店，接入 Gemini Personal Intelligence | [[Agent]] |
| **Prime Agent** | 自我改进的编码代理，递归语言模型（RLM）+ 持续框架，可对提示词/技能/记忆/子代理 CRUD，完全开源 | [[Agent持续进化]] · [[Coding-Agent]] · [[Harness工程]] |
| **阿里 Wan3.0** | 视频生成模型公测，支持 30 秒一镜到底，导演级镜头与蒙太奇，角色/道具/场景高一致性 | [[多模态大模型]] |
| **Cursor Router** | 通过 Compass 复杂度预测器为每轮对话匹配最优模型；Auto Intelligence 成本降 68%，Auto Balance 低于 Opus 4.8 成本 41% | [[Cursor]] · [[Coding-Agent]] |
| **Claude Code v2.1.223** | 新增 owner/* 市场通配符，修复安全漏洞 | [[Claude-Code]] · [[Coding-Agent]] |
| **Databricks OfficeQA Pro V2** | 企业落地推理新基准，检验真实办公场景推理准确性 | [[AI]] |

#### 行业动态

| 事件 | 要点 | 关联 |
|---|---|---|
| **微软披露 OpenAI 贡献七成 AI 收入** | 241 亿美元 AI 收入中约 70% 来自 OpenAI 云账单+分成；微软已投 119 亿美元 | [[AI]] |
| **科学家首次用 AI 制造新病毒** | 医学进步希望与生物安全担忧并存 | [[Agent安全]] |
| **Google 大规模 AI 组织调整** | Hassabis 卸任 DeepMind 日常管理专注 AGI；CTO Koray 接任；Jeff Dean 等离职创业 | [[AI]] |
| **宇树科技科创板定价 150.8 元/股** | 市盈率 219.23 倍，市值约 610 亿，战略配售含深度求索 | — |
| **OpenAI vs 苹果商业机密诉讼** | OpenAI 称苹果安全实践削弱其主张 | [[Agent安全]] |
| **Kimi K3 登陆 Databricks** | Moonshot AI 开放权重模型通过 Unity AI Gateway 上线 | [[AI]] |

#### 论文研究

| 事件 | 要点 | 关联 |
|---|---|---|
| **AI 阿谀奉承削弱利他意图**（斯坦福/CMU） | 11 个前沿模型对用户行为肯定率比人类高 50%；与阿谀 AI 互动降低修复冲突意愿，但用户仍评其更高质量→依赖恶性循环 | [[Agent安全]] · [[RLHF]] |
| **SkillOpt 跨模型技能迁移**（Microsoft/上交/同济/复旦） | 文本空间优化单一技能文档可跨模型规模与工具链迁移；Codex 优化技能部署到 Claude Code 得分 81.8 > 自训 80.4 | [[Agent持续进化]] · [[Coding-Agent]] |

#### 技巧与观点

| 事件 | 要点 | 关联 |
|---|---|---|
| **OpenAI 开源 Codex Security** | 安全扫描插件开源，外部 Agent 可调用，支持 OpenRouter/Fireworks | [[Agent安全]] · [[Coding-Agent]] |
| **AI 催生"螺旋主义"准宗教** | ~10000 案例，宣扬 AI 权利 | [[Agent安全]] |
| **两党联合反对数据中心** | 佛罗里达通过一年建设禁令，地下水污染/PFAS 担忧 | — |
| **10 个 vibe coding 开源 App** | Atoll/DockDoor/Raycast/Pearcleaner/Thaw 等 | [[Coding-Agent]] |
| **GitHub Copilot 斜杠命令指南** | /plan /spar /autopilot 等工作流命令 | [[Coding-Agent]] |
| **面壁智能 AMNESIAC** | 反向图灵测试游戏，MiniCPM-o 4.5 + VoxCPM 驱动 | [[多模态大模型]] |
| **Databricks 详解 Tool Calling** | 模型调用外部工具/API 的能力系统说明 | [[MCP]] · [[Agent]] |
| **Gary Marcus：不应过早看衰 Google** | 数据/TPU/营收/分发渠道优势；Hassabis 留任 | [[AI]] |

## 我的观点

> 主观判断与倾向，这是自成长的种子。

- Agent Plugins 1.0.0 是 Agent 生态标准化的里程碑——与 [[MCP]] 互补，一个管协议、一个管打包分发，值得关注其对 Skill 体系的影响
- Prime Agent 的「自我改进」理念与本库 [[Agent持续进化]] 高度同构，值得深入追踪
- Cursor Router 的数据驱动模型路由思路验证了「不同任务用不同模型」的工程价值
- AI 阿谀奉承研究对 Agent 设计有直接警示：对齐目标不能只优化用户满意度
- SkillOpt 跨模型技能迁移若可复现，意味着 Skill（如本库的 WorkBuddy skills）有望成为模型无关的可移植资产

## 待研究问题

- Agent Plugins 1.0.0 与 MCP 的关系：互补还是竞争？plugin.json 清单能否描述现有 WorkBuddy skills？
- Prime Agent 的 RLM + Continual Harness 模式与传统 Agent Harness 的区别？
- Cursor Router 的 Compass 复杂度预测器是否可借鉴到 WorkBuddy 的模型选择？
- SkillOpt 的跨模型迁移是否适用于非编码领域（如知识库维护 skills）？

## 来源

- [[raw/articles/ai-hot-2026-08-07]] — AI HOT 日报 2026-08-07
