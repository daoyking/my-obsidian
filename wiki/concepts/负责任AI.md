---
title: 负责任 AI
aliases: [Responsible AI, 负责任人工智能, AI伦理, AI治理]
type: concept
tags: [ai, ethics, safety, governance]
created: 2026-08-08
updated: 2026-08-08
sources: ["[[raw/articles/ai-for-everyone]]"]
status: active
---

# 负责任 AI（Responsible AI）

## 定义

在部署 AI 时主动治理其**社会与伦理风险**——偏差、对抗脆弱、滥用。来自 [[吴恩达]] [[AI-for-Everyone]] 模块 3/4。它把模型层安全（[[越狱攻击]] / [[提示注入]]）上升到**组织与社会**层。

## 为什么重要

- AI 一旦上线，错误会被放大到真实人群（信贷、招聘、医疗）
- 偏差与滥用损害信任、合规与品牌；需前置而非事后补救

## 核心风险（AI for Everyone）

- **偏差 / 歧视（Bias）**：训练数据偏差 → 模型偏差；需主动检测与治理
- **对抗攻击（Adversarial Attacks）**：精心构造输入误导模型（与 [[越狱攻击]] 同源但指广义 ML 模型）
- **滥用（Adverse Use）**：deepfake、自动化武器、大规模操纵等

## 与本库安全概念的关系

- 模型 / 提示层：[[越狱攻击]]（用户侧绕过护栏）· [[提示注入]]（数据侧注入指令）· [[Agent安全]]
- 组织 / 社会层：本页（负责任 AI）——治理视角

## 相关概念

- [[越狱攻击]] · [[提示注入]] · [[Agent安全]] · [[AI战略]] · [[AI转型]]

## 相关主题

- [[AI-for-Everyone]] · [[AI]]

## 来源

- [[raw/articles/ai-for-everyone]]（模块 3/4）
