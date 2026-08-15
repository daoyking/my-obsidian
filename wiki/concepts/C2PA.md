---
title: C2PA
aliases: [Content Credentials, 内容凭证, Coalition for Content Provenance and Authenticity]
type: concept
tags: [ai, security, content-credentials, provenance, authenticity]
created: 2026-08-15
updated: 2026-08-15
sources: ["[[raw/articles/ai-hot-2026-08-14]]"]
status: seed
---

# C2PA（Content Credentials）

## 定义

C2PA（Coalition for Content Provenance and Authenticity）是由 Adobe / Microsoft / Arm / BBC / Intel / Sony / Truepic 等联合制定的内容来源与真实性标准。它定义了一种机器可读的"内容凭证"（Content Credentials）清单，附在媒体文件上记录其来源、编辑历史、生成工具（含 AI 模型）等信息，用于验证媒体真实性。

## 为什么重要

- AI 生成内容（AIGC）的爆发使"真伪识别"成为社会级问题——深度伪造 / AI 假图 / AI 假新闻泛滥
- C2PA 是**技术验证手段**（不是法律 / 政策手段），可在客户端本地验证，避免依赖平台自证
- 与 [[Agent安全]] 的"AI 身份欺诈"（如 Research Gold 事件）形成攻防对照：C2PA 验证内容真伪，独立于内容发布方

## 核心机制

- **清单（Manifest）**：附在媒体文件中的机器可读元数据，记录来源 / 编辑链 / 生成工具 / 模型信息
- **签名链**：每一步编辑都签名，形成可追溯的编辑历史链
- **本地验证**：验证过程完全在客户端本地完成，无需云端调用
- **信任列表**：可配置信任的签发方列表

## 示例

```
[媒体文件]
  ├── 像素数据
  └── C2PA Manifest
        ├── 来源（相机 / AI 模型 / 编辑软件）
        ├── 编辑历史（每次编辑签名）
        ├── 生成工具（如 Gemini 3.7 Flash / DALL-E / Photoshop）
        └── 签名链（可追溯到原始捕获）
```

## 相关实现

- **[[Credentio]]（Google，2026-08-14）**：开源 C++ 库，本地优先的 C2PA 验证，支持数 GB 级媒体文件即时验证。见 [[raw/articles/ai-hot-2026-08-14]]。

## 相关概念

- [[Agent安全]] · [[负责任AI]] · [[模型水印]] · [[隐写术]]

## 待研究问题

- C2PA 清单能否被伪造？签名链的根信任如何建立？
- AI 模型生成内容时是否会自动嵌入 C2PA 清单？目前哪些模型支持？
- C2PA 与 [[模型水印]] 的关系——水印是"隐藏标记"，C2PA 是"显式清单"，两者互补还是冗余？

## 来源

- [[raw/articles/ai-hot-2026-08-14]]（Google 发布开源 C++ 库 Credentio 用于 C2PA 验证）
