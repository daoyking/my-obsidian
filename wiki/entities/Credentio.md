---
title: Credentio
aliases: [Google Credentio, C2PA C++ 库]
type: entity
tags: [ai, security, c2pa, content-credentials, opensource, google]
created: 2026-08-15
updated: 2026-08-15
sources: ["[[raw/articles/ai-hot-2026-08-14]]"]
status: seed
---

# Credentio

## 是什么

Google 于 2026-08-14 发布的开源 C++ 库，用于在客户端和服务器应用中集成高性能、本地优先的 C2PA 内容凭证（Content Credentials）验证。已在 Google Source 上线。

## 核心特性

- **C++ 实现**：高性能，可嵌入客户端与服务器应用
- **本地优先**：完全本地处理资产，无需云端调用
- **优化内存占用**：可为数 GB 级媒体文件提供即时验证结果
- **避免云成本与隐私风险**：无云延迟 / 带宽成本 / 数据隐私问题
- **当前能力**：深度清单解析 + 可配置信任列表集成
- **未来计划**：支持完整的凭证生成与嵌入（不止验证）

## 适用场景

- 媒体真实性验证（识别 AI 生成内容 / 深度伪造）
- 新闻 / 司法 / 内容平台的内容溯源
- 相机 / 编辑软件嵌入内容凭证（未来）

## 在我项目中的使用

> 关联到 projects/ 下的具体项目。

- 暂无直接使用；但与本库 [[Agent安全]] 的"AI 身份欺诈"主题（如 Research Gold 事件）形成对照——Credentio 是技术验证手段，Research Gold 是欺诈案例

## 相关实体

- [[Gemini]]（同属 Google 生态，但 Credentio 是基础设施层而非模型层）

## 相关概念

- [[C2PA]] · [[Agent安全]] · [[负责任AI]] · [[模型水印]] · [[隐写术]]

## 来源

- [[raw/articles/ai-hot-2026-08-14]]（Google 发布开源 C++ 库 Credentio）
