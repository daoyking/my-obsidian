---
title: AI 工具集
aliases: [AI工具, chartGPT书签, AI产品集]
type: topic
tags: [ai, tools, bookmarks, collection]
created: 2026-08-07
updated: 2026-08-07
sources: ["[[raw/web/chrome-bookmarks]]"]
status: active
---

# 🤖 AI 工具集

> 从 Chrome 书签 `chartGPT` 文件夹提取的 65 个 AI 产品/工具（多为 2023 年 AI 爆发期收藏）。按类型整理。部分可能已过时或下线——是 Lint 标记 `stale` 的候选。

## 对话大模型 / 聊天

- ChatGPT · Claude（克洛德）· 通义千问 · 文心一言 · 讯飞星火 · Kimi（月之暗面）· Bard · HuggingFace Chat · Poe(Sage) · BingAI · Forefront Chat
- 自建/开源 UI：ChatGPT-Next-Web（开源部署）· ChatGPT UI · Shared Chat · 也略 · ChatGPT 导航站
- 国产聚合：白瓜AI · 鱼聪明AI · 超级AI大脑 · AIdea · 在问 · Star Flow AI · Jarvis 私人助理

## 编程助手（强相关前端）

- **GitHub Copilot** · Codeium · CodeWhisperer(AWS) · Sweep（AI junior dev）· aiXcoder · Devv（AI 搜索+编程）
- → 关联 [[Coding-Agent]] · [[AI]]

## Agent 平台

- AgentGPT · AutoGPT / Auto-GPT（开源）· Coze（扣子，字节）· OpenGPT · WebPilot
- → 关联 [[Agent]] · [[Agent持续进化]]

## 搜索 / 研究

- **Perplexity** · Phind · aomni · Devv
- → 关联 [[RAG]]（这些本质是产品化 RAG）

## LLMOps / 应用构建平台

- **Dify**（LLMOps 平台）· Coze · Copilot Hub · Anakin.ai · Rely.io（开发门户）
- → 关联 [[MCP]]（工具生态方向）

## 文档 / 效率工具

- ChatDOC（文档对话）· 酷表 ChatExcel · 通义听悟 · 梅林 Merlin（全站 GPT 接入）· Workout.lol · Zentask

## 学习 / 导航

- **AI for Beginners**（微软教程）· AItoolkit · 生成式 AI 景观 · 人工智能谷 AI Valley · FlowGPT（Prompts 社区）
- → 关联 [[动手学大模型]] · [[Prompt工程]]

## 厂商 / 基础

- Anthropic · LAION Open-Assistant · ChatGPT-Next-Web（开源仓库）

## 我的观点

- 这批收藏是 2023 年「百模大战」的缩影，很多聚合站/套壳产品已被淘汰，真正存活的是 ChatGPT/Claude/通义/Kimi/Perplexity/Copilot/Dify/Coze 等头部
- 建议做一次 Lint 标记过时项（status→stale），保留仍有价值的
- 前端工程师重点：编程助手（Copilot/Codeium）+ Agent 平台（Dify/Coze）+ Perplexity 类搜索

## 待研究

- [x] 标记过时/下线工具（Lint 任务，见下「Lint 时效评估」）
- [ ] Dify/Coze 深入：能否用它们把本知识库的 Ingest 流程产品化？

## Lint 时效评估（2026-08-07）

> 方法：curl 批量检测 + WebFetch 抽样校准。
> ⚠️ **重要局限**：curl 从本环境返回 000 共 38 条，但其中含 github.com / chatgpt.com / perplexity.ai / claude.ai / poe.com / huggingface.co 等确定存活的巨头——是反爬/TLS 拦截导致假阳性，**000 不代表死链**。故仅以 curl 200 + WebFetch 实测 + 产品公开命运为依据。

### ✅ 确认存活（curl 200，23 条）
通义千问 · 文心一言 · 讯飞星火 · Dify · Coze(中/外) · Anthropic · Kimi · ChatExcel · 通义听悟 · Codeium · aiXcoder · 白瓜AI · 酷表 · WebPilot · OpenGPT · ChatGPT-Next-Web(repo) 等。另 WebFetch 实测 **Forefront Chat 仍在线**（2M+ 用户）。

### 🔄 改名/演进（非死链，已更新认知）
- **Bard** → 已重定向到 **Gemini**（gemini.google.com），Google 改名非下线

### ⚠️ 疑似失效 · 待人工确认（status: stale 候选）
> 第三方镜像/聚合站，2023 年 ChatGPT 套壳潮产物，存活概率低，但 curl 假阳性无法定论——建议你浏览器实测后清理。
- 超级AI大脑（mj.ink）— curl 返回 **500**，最可能真死
- 也略（yelue.com）· Shared Chat（zhile.io）· BingAI（bing.vcanbb.top）· ChatGPT 导航站（quickso.cn）· top.justchatgpt · AutoGPT中文版 · Jarvis（ask.vuejs.news）· Star Flow AI · HoustonAI · Rely.io · Sweep（已被收购转型）
- AItoolkit（403）/ Phind（403）— 站点在但拒绝访问，需人工确认

### ℹ️ 巨头但 curl 被拦（确认存活，无需处理）
github.com · chatgpt.com · claude.ai · perplexity.ai · poe.com · huggingface.co · microsoft.github.io · devv.ai · open-gpt.app

### 结论
- 65 条中：**确认存活 23+**、**改名 1**、**疑似失效待确认 ~13**、**巨头假阳性 ~28**
- 自动化时效检测的可靠性瓶颈 = 反爬。后续 Lint 这类外部 URL 不宜只靠 curl，需 WebFetch 抽样 + 人工复核。
- 建议：在 Chrome 里逐个打开「疑似失效」组，死链直接删；本库不动浏览器。

## 来源

- [[raw/web/chrome-bookmarks]]（本地，chartGPT 文件夹）
