---
title: OpenRouter
aliases: [OpenRouter, openrouter/auto, OpenRouter Auto Router]
type: entity
tags: [ai, platform, model-routing, llm]
created: 2026-08-11
updated: 2026-08-11
sources: ["[[raw/articles/ai-hot-2026-08-11]]"]
status: seed
---

# OpenRouter

## 是什么

LLM 模型路由平台，聚合多家模型供应商，提供统一 API 入口与智能模型选择。2026-08-11 推出基于社区消费数据的新版 Auto 路由器（openrouter/auto），按任务类型与成本档位自动匹配最优模型。与 [[Cursor]] Router 同属"数据驱动模型路由"范式，但 OpenRouter 面向通用 LLM 调用，Cursor Router 面向编码对话。

## 核心特性

- **市场智慧驱动路由**：基于每周超 55T token 的社区消费数据训练模型选择策略
- **约 30 种任务类型匹配**：按任务类型匹配近 7 天社区实际消费的模型
- **cost_tier 参数**：支持 low / mid / high / max 等成本档位，遵循账户隐私设置
- **性能与成本双优**：在 MMLU Pro 等基准上，新默认档位在多数领域以更低成本达到旧版同等性能
- 统一 API 聚合多供应商模型（具体供应商列表待原文补充）

## 与 Cursor Router 的对照

| 维度 | [[Cursor]] Router | OpenRouter Auto |
|---|---|---|
| 场景 | 编码对话 | 通用 LLM 调用 |
| 路由依据 | Compass 复杂度预测器 | 社区消费数据（55T token/周） |
| 成本效果 | Auto Intelligence 成本降 68% | 多数领域以更低成本达旧版同等性能 |
| 共同理念 | 数据驱动模型路由——不同任务用不同模型 | 同左 |

**定位**：两者共同验证了"模型选择本身是工程问题"——路由器把"选哪个模型"从人工决策转为数据驱动决策。

## 适用场景

- 需要按任务类型自动选模型的 LLM 应用
- 成本敏感的多模型调度（cost_tier 控制）
- 不想绑定单一供应商的 LLM 服务层
- 本库关注：模型路由思路可借鉴到 WorkBuddy 的模型选择策略

## 在我项目中的使用

> 关联到 projects/ 下的具体项目。

- （暂无直接使用）作为模型路由范式参考；其"按任务类型匹配 + 成本档位"思路可借鉴到本库日常 Agent（WorkBuddy）的模型选择与成本控制

## 相关实体

- [[Cursor]]（同范式对照）· [[AI]]

## 相关概念

- [[Agent]] · [[Agent评估]]（路由器本质是模型选型评估的自动化）

## 相关主题

- [[AI资讯]]

## 来源

- [[raw/articles/ai-hot-2026-08-11]]（OpenRouter 新版 Auto 路由器）
