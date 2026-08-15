---
title: C2PA
aliases: [Content Credentials, 内容凭证, Coalition for Content Provenance and Authenticity]
type: concept
tags: [ai, security, content-credentials, provenance, authenticity]
created: 2026-08-15
updated: 2026-08-16
sources: ["[[raw/articles/ai-hot-2026-08-14]]", "[[raw/articles/ai-hot-2026-08-15]]"]
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

## 与模型水印的关系（2026-08-15 更新）

来自 [[raw/articles/ai-hot-2026-08-15]]：

Anthropic 部署 Claude 文本水印（基于 Google DeepMind 的 SynthID-Text）后，C2PA 与 [[模型水印]] 的关系更加清晰——两者**互补而非冗余**：

| 维度 | [[模型水印]]（如 SynthID-Text） | C2PA（Content Credentials） |
|---|---|---|
| 标记形态 | 隐藏统计标记（人类不可察觉） | 显式内容凭证清单（机器可读元数据） |
| 嵌入方式 | 生成时在采样层嵌入 | 生成后作为清单附在文件上 |
| 检测方 | 持检测算法的方（需模型方配合） | 任何持 C2PA 验证工具的方（如 [[Credentio]]） |
| 追溯能力 | 仅判断"是否由某模型生成" | 可追溯完整编辑链与来源 |
| 合规驱动 | 欧盟《AI 法案》（Claude 水印） | 内容真实性标准（Adobe/Microsoft 等联合制定） |

**定位**：水印解决"是不是 AI 生成"，C2PA 解决"从哪来、经手了什么"。叠加使用可同时回答"AI 生成性"与"内容来源链"两个问题。

## 待研究问题

- C2PA 清单能否被伪造？签名链的根信任如何建立？
- AI 模型生成内容时是否会自动嵌入 C2PA 清单？目前哪些模型支持？
- SynthID-Text 水印在改写/翻译后是否仍可检测？其鲁棒性与 C2PA 签名链的完整性保障哪个更可靠？
- 水印与 C2PA 叠加部署时，是否存在"水印擦除但 C2PA 清单保留"或反之的攻击窗口？

## 来源

- [[raw/articles/ai-hot-2026-08-14]]（Google 发布开源 C++ 库 Credentio 用于 C2PA 验证）
- [[raw/articles/ai-hot-2026-08-15]]（Claude 文本水印 SynthID-Text 部署，明确 C2PA 与水印互补关系）
