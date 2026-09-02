---
title: Computer Use
aliases: [电脑操作, 计算机使用, GUI Agent, 桌面操作智能体]
type: concept
tags: [ai, agent, gui, automation]
created: 2026-09-02
updated: 2026-09-02
sources: []
status: seed
---

# Computer Use（计算机操作能力）

## 是什么

让 Agent 像人一样**直接操作一台电脑**：看屏幕截图、移动点击鼠标、敲键盘、运行命令。Anthropic 在 2024 年以 "Computer Use" 命名发布该能力，此后成为 [[Agent]] 的一类重要形态（GUI Agent / 桌面智能体）。

本页为 Lint 补建的 seed 页，因 [[界面世界模型]] 引用而建。

## 为什么重要

- 大量软件没有 API，只有界面——Computer Use 让 Agent 的能力覆盖到「没有接口的一切」
- 是把 [[多模态大模型]]（看懂屏幕）与 [[工具调用]]（操作键鼠）结合的产物
- 与 [[Coding-Agent]] 的区别：Coding Agent 主要读写文件与终端，Computer Use 面向任意图形界面

## 核心机制（待补充）

- 截图 → 视觉理解 → 决定动作 → 输出坐标/键鼠事件 → 再截图，形成循环
- 关键工程难点：动作 grounding（模型说的「点这里」如何映射到准确像素坐标）、状态判定（动作是否生效）、误操作不可逆

## 关联实践

- [[awesome-llm-apps]] 中的 `mcp_ai_agents/browser_mcp_agent`（浏览器操作）与 `starter_ai_agents/ai_meme_generator_agent_browseruse`（驱动真实浏览器）属于同一范式
- 与 [[Agent安全]] 强相关：能操作电脑 = 权限极高，必须白名单 + 危险操作确认

## 待研究问题

- [ ] 当前 grounding 精度与任务成功率的行业水平？
- [ ] 在 macOS 上落地需要哪些权限（辅助功能/屏幕录制）？与用户已有的 AX 经验如何结合？

## 相关概念

- [[Agent]] · [[多模态大模型]] · [[界面世界模型]] · [[Agent安全]] · [[工具调用]] · [[视觉思维链]]

## 相关实体

- [[Anthropic]] · [[Claude]] · [[awesome-llm-apps]]
