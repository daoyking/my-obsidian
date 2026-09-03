---
title: Cursor
aliases: [Cursor IDE, Cursor Editor]
type: entity
tags: [ai, coding, ide, agent, tool]
created: 2026-08-08
updated: 2026-08-16
sources: ["[[raw/articles/ai-hot-2026-09-03]]", "[[raw/articles/ai-hot-2026-08-07]]", "[[raw/articles/ai-hot-2026-08-14]]", "[[raw/articles/ai-hot-2026-08-15]]"]
status: active
---

# Cursor

## 是什么

AI 原生代码编辑器，基于 VS Code 分支构建，以 AI 编码能力为核心。支持多模型切换、智能代码补全、对话式编程和自动化代码修改。现已扩展为覆盖 IDE / 云端智能体 / 安全认证的完整产品生态。**2026-08-15 正式被 SpaceX 收购**，成为 SpaceX 旗下 AI 编码能力线，合并后将获得全球最大 GPU 集群以构建更强且更低成本的模型。

## 核心特性

- **Cursor Router**：通过 Compass 复杂度预测器为每个对话轮次匹配最合适的模型
  - Auto Intelligence 模式：用户满意度超过 Fable，成本降低 68%
  - Auto Balance 模式：低于 Opus 4.8 成本 41%，表现更优
  - 从实时流量中学习模型在不同任务类别上的表现差异，数据驱动替代基准分数
- **Cursor builds（2026-08-14）**：在后台持续准备就绪的开发环境副本，让云智能体启动时无需从零搭建
  - 云智能体启动速度最高提升 **3 倍**
  - 内部环境启动快 10 倍，首个 token 生成快 3 倍
  - 智能体始终从最近一次成功的 build 启动——依赖更新或安装脚本出错时不会影响运行
  - 2026-08-17 起所有环境默认启用 builds，无需额外费用
- **AIUC-1 安全认证（2026-08-14）**：通过智能体安全与可靠性独立审查，正式获得 AIUC-1 认证
  - 标准由 100+ 财富 500 强 CISO 参与制定
  - MITRE / 云安全联盟 / 斯坦福研究者提供技术支持
  - 测试覆盖 IDE 和云端智能体，涉及规则、hooks、Auto-review 等防护机制
  - Cursor 在数千个场景中通过全部要求
  - 维持认证需至少每季度复测一次，每年接受全面审计
- **正式被 SpaceX 收购（2026-08-15）** ⭐：完成自 4 月启动的收购流程，成为 SpaceX 旗下 AI 编码能力线
  - 合并后获得**全球最大 GPU 集群**，以构建更强且运行成本更低的模型
  - 以更低价格向客户提供更强大的模型
  - 本周三（08-13）发布的 [[Grok]] 4.6 是双方合作成果的早期体现——Grok 4.6 的"长时运行智能体能力"即受益于 Cursor × SpaceX 的算力与编码能力整合
  - 这是 [[Coding-Agent]] 领域迄今最大的并购事件，标志 AI 编码工具从独立产品走向"算力巨头 × 编码能力"垂直整合
- 多模型支持：可在不同任务中切换前沿模型
- 对话式编程：自然语言描述需求，AI 直接修改代码

## 适用场景

- 日常编码辅助：补全、重构、调试
- 复杂任务拆解：通过 AI 理解大型代码库
- 模型路由优化：不同复杂度任务自动匹配成本最优模型
- 云端智能体工作流：builds 让云智能体启动近乎即时，适合频繁起停的开发场景
- 安全合规场景：AIUC-1 认证满足企业安全审查要求

## 在我项目中的使用

> 关联到 projects/ 下的具体项目。

- 与 [[Claude-Code]] 同属 [[Coding-Agent]] 工具生态，日常 AI 辅助编码的备选方案
- AIUC-1 认证为企业引入 Cursor 提供了独立安全背书

## 相关实体

- [[Claude-Code]] · [[Vscode]]
- **SpaceX**（2026-08-15 收购方）：提供全球最大 GPU 集群；[[Grok]] 4.6 是合作早期成果，Grok 的长时运行智能体能力与 Cursor 的编码能力整合
- **Firetiger（2026-08-14 加入 Cursor）**：生产环境智能体公司，构建可监控发布、捕获回归、调查事件并将发现反馈给编码智能体的能力。由 Rustam Lalkaka 和 Achille Roussel 于 2024 年创立，此前曾在 Cloudflare、Twitch、Segment 和 Twilio 构建大型生产系统——意味着 Cursor 正在补强"生产环境可观测性 + 智能体反馈闭环"能力

## 相关概念

- [[Coding-Agent]] · [[上下文工程]] · [[Harness工程]] · [[Agent安全]]（AIUC-1 认证）

## 来源

- [[raw/articles/ai-hot-2026-08-07]]（Cursor Router 如何为任务选择合适模型）
- [[raw/articles/ai-hot-2026-08-14]]（Cursor builds 云智能体加速 + AIUC-1 安全认证 + Firetiger 团队加入）
- [[raw/articles/ai-hot-2026-08-15]]（Cursor 正式被 SpaceX 收购，获得全球最大 GPU 集群；Grok 4.6 是合作早期成果）
