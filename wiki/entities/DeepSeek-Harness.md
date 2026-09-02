---
title: DeepSeek Harness
aliases: [DeepSeek-Harness, Cordis, DeepSeek 智能体框架]
type: entity
tags: [ai, agent, framework, opensource, deepseek]
created: 2026-08-15
updated: 2026-08-15
sources: ["[[raw/articles/ai-hot-2026-08-14]]"]
status: seed
---

# DeepSeek Harness

## 是什么

DeepSeek 于 2026-08-14 推出的开发者预览版智能体框架（v0.1），以 MIT 许可证开源。基于 Cordis 元框架构建，核心设计理念是「一切皆插件」（Everything is a Plugin）——模型、工具、技能、会话、沙箱、文件系统、循环、编排及 UI 均被视为可自由组合、替换和扩展的插件。

## 核心特性

- **一切皆插件**：模型 / 工具 / 技能 / 会话 / 沙箱 / 文件系统 / 循环 / 编排 / UI 九大要素全部插件化，无任何"硬编码"特例
- **MIT 开源**：商业友好许可，无 copyleft 约束
- **基于 Cordis 元框架**：Cordis 是其底层构建元框架（DeepSeek 自研或合作，待考）
- **开发者预览**：v0.1 标志首次公开，鼓励社区早期参与

## 适用场景

- 构建自定义 Agent 工作流，需要灵活替换每个组件
- 研究者探索不同 Harness 组合对 Agent 行为的影响
- 企业需要 MIT 许可、可商用的 Agent 框架基座

## 在我项目中的使用

> 关联到 projects/ 下的具体项目。

- 暂无直接使用，但作为 [[Harness工程]] 「五功能（上下文 / 工具 / 记忆 / 编排 / 护栏）」的极致插件化参考实现，值得在 WorkBuddy Skill 体系演进时对照借鉴
- 已落地衍生项目：**[[dsh-multiplatform]]**（把 DeepSeek Harness 从 Web 扩展到桌面端 + 移动端 + 鸿蒙，v0.1.2）

## 相关实体

- [[Mastra]] · [[Vercel-AI-SDK]]（同属 Agent 编排框架，但 DeepSeek Harness 更激进地把"模型本身"也插件化）
- [[Claude-Code]] · [[Cursor]]（可作为 Harness 的"宿主"使用 DeepSeek Harness 作为底层）

## 相关概念

- [[Harness工程]] · [[Agent]] · [[Agent持续进化]] · [[上下文工程]] · [[Agent-Plugins]]

## 来源

- [[raw/articles/ai-hot-2026-08-14]]（DeepSeek Harness v0.1 开发者预览版发布）
