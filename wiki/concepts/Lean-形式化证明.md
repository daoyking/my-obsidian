---
title: Lean-形式化证明
aliases: [Lean, 形式化验证, 形式化证明]
type: concept
tags: [ai, mathematics, formal-verification, lean, anthropic, claude]
created: 2026-09-06
updated: 2026-09-06
sources: ["[[raw/articles/ai-hot-2026-09-05]]"]
status: seed
---

# Lean 形式化证明

## 是什么

Lean 是一个依赖类型理论的形式化证明助手，由 Microsoft Research 的 Leonardo de Moura 团队开发。它允许数学家和计算机科学家以机器可验证的方式编写数学证明。

## 核心特性

- **依赖类型理论**：Lean 基于 Martin-Löf 依赖类型理论，允许在类型级别编码数学结构
- **Tactic 语言**：提供高级证明策略（tactics），让证明过程更像编程
- **Mathlib**：Lean 的数学库，包含超过 30,000 个已形式化的定理
- **可验证性**：每个证明都经过类型检查器验证，确保逻辑正确性

## Anthropic 的费马大定理证明（2026-09-05）

Anthropic 发布首个完整经计算机验证的费马大定理证明：
- Claude 在 11 天内大体自主完成形式化
- 写出 1300 万行 Lean 代码
- 证明 30,300 个定理（最终使用其中 29,500 个）
- 规模超过 Mathlib 5 倍以上

**意义**：这是 AI 在形式化数学验证领域的里程碑——标志着 Claude 不仅能做研究，还能完成数学界数十年未解的形式化验证。

## 与 Agent 安全的关系

形式化证明是 Agent 安全的潜在工具：
- 可用于验证安全协议的正确性
- 可形式化 Agent 的行为规范
- 可与 [[哈希链审计]] 结合，提供可验证的审计轨迹

## 相关实体

- [[Anthropic]] · [[Claude]] · [[Microsoft]]

## 相关概念

- [[Agent安全]] · [[形式化验证]] · [[数学证明]] · [[依赖类型]]

## 来源

- [[raw/articles/ai-hot-2026-09-05]]（Anthropic 用 Claude 在 11 天内完成费马大定理首个机器验证的 Lean 形式化证明）
