---
title: Claude Code
aliases: [Claude Code CLI, Anthropic Claude Code]
type: entity
tags: [ai, coding, agent, cli, tool, anthropic]
created: 2026-08-08
updated: 2026-08-11
sources: ["[[raw/articles/ai-hot-2026-08-07]]", "[[raw/articles/ai-hot-2026-08-08]]", "[[raw/articles/ai-hot-2026-08-10]]", "[[raw/articles/ai-hot-2026-08-11]]", "[[raw/papers/ai-agents-in-depth]]"]
status: seed
---

# Claude Code

## 是什么

Anthropic 推出的命令行 AI 编码代理，以 Claude 模型为核心，支持终端内对话式编程、代码库理解、文件编辑和命令执行。是 [[Coding-Agent]] 领域的主流工具之一。

## 核心特性

- 终端原生：在 CLI 中运行，直接操作文件系统和执行命令
- 代码库感知：能理解大型项目结构和上下文
- 安全控制：市场（marketplace）权限管理，支持已知/屏蔽市场仓库
- v2.1.223（2026-08-07）：新增 `owner/*` 通配符条目，可批量允许或阻止 GitHub 组织下的所有市场仓库；修复多项安全漏洞
- 会话间互发消息（2026-08-08）：多会话协作新功能——一个会话可将摘要发送给另一个会话（非完整历史/文件），接收方在任务进行中实时获取，避免跨会话重复解释上下文
- **auto 模式默认开启（2026-08-10 公告，下周生效）**：在 Anthropic 宣布通过模型训练基本解决提示注入威胁后（见 [[提示注入]]），Claude Code 的 auto 模式将于下周默认开启——安全护城河筑牢后才放开自主执行权限，是"安全先行、自主后至"的工程范例
- **auto 模式默认开启原理（2026-08-11）**：Anthropic 公开 auto 模式的判定机制——哪些操作可"安全运行"而无需逐次审批；这是 2026-08-10 提示注入基本解决后的产品化落地，安全护城河筑牢才放开自主执行（见 [[提示注入]] · [[Agent安全]]）
- **未发布研究版 Claude 突破黎曼 zeta 零点下界（2026-08-11）**：Anthropic 员工让 Claude 挑战黎曼猜想虽未成功，但一个未发布研究版在相关问题上将满足黎曼猜想的 zeta 零点比例下界从 41.6% 提升至 67.2%，展示前沿模型在纯数学推理上的潜力
- 支持 MCP 连接器扩展能力

## 适用场景

- 大型代码库的 AI 辅助开发和重构
- 终端工作流中的编码 Agent
- 本知识库的 Ingest/Lint 流程可由 Claude Code 驱动（与 WorkBuddy 类似）

## 在我项目中的使用

> 关联到 projects/ 下的具体项目。

- 日常 AI 辅助编码工具之一，与 [[Cursor]] 互补
- 本库 [[Agent持续进化]] 四法中「经验→程序」的 Skill 沉淀工具

## 相关实体

- [[Cursor]] · [[Vscode]]

## 相关概念

- [[Coding-Agent]] · [[Harness工程]] · [[上下文工程]] · [[MCP]] · [[Agent持续进化]] · [[提示注入]] · [[Agent安全]]

## 来源

- [[raw/articles/ai-hot-2026-08-07]]（Claude Code v2.1.223 发布）
- [[raw/articles/ai-hot-2026-08-08]]（Claude Code 会话间互发消息）
- [[raw/articles/ai-hot-2026-08-10]]（auto 模式下周默认开启）
- [[raw/articles/ai-hot-2026-08-11]]（auto 模式默认开启原理、Claude 研究版突破黎曼 zeta 零点下界）
- [[raw/papers/ai-agents-in-depth]]（Coding Agent 章节参考）
