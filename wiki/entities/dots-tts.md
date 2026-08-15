---
title: dots.tts
aliases: [dots-tts, 小红书 dots.tts, dots TTS]
type: entity
tags: [ai, tts, speech, opensource, xiaohongshu]
created: 2026-08-15
updated: 2026-08-15
sources: ["[[raw/articles/ai-hot-2026-08-14]]"]
status: seed
---

# dots.tts

## 是什么

小红书 dots 团队开源的连续自回归语音合成（TTS）模型，参数量 20 亿，采用全连续端到端自回归架构。在 Seed-TTS-Eval 基准的三个子集上取得最佳平均内容准确度和最佳平均说话人相似度。

## 核心特性

- **20 亿参数**：全连续端到端自回归架构
- **Seed-TTS-Eval 三子集最佳**：平均内容准确度 + 平均说话人相似度双优
- **可持续扩展的 TTS 基座**：定位为"基座模型"而非成品，鼓励社区基于其扩展
- 开源（具体许可待原文核对）

## 适用场景

- 语音助手 / 对话系统的 TTS 后端
- 多角色有声内容生成
- 作为 TTS 基座做下游微调（个性化音色、情感控制等）

## 在我项目中的使用

> 关联到 projects/ 下的具体项目。

- 暂无直接使用；与本库 [[多模态大模型]] 的语音模态方向相关

## 相关实体

- [[MiniMax-Music]]（同日发布的音频生成模型，但侧重音乐生成而非语音合成）

## 相关概念

- [[多模态大模型]] · [[Agent]]（语音是 Agent 交互的重要模态）

## 来源

- [[raw/articles/ai-hot-2026-08-14]]（小红书开源 dots.tts 20 亿参数 TTS 模型）
