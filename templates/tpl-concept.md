<%*
const title = await tp.system.prompt("概念名称", tp.file.title);
tp.frontmatter["title"] = title;
-%>---
title: <% title %>
aliases: []
type: concept
tags: []
created: <% tp.date.now("YYYY-MM-DD") %>
updated: <% tp.date.now("YYYY-MM-DD") %>
sources: []
status: seed
---

# <% title %>

## 定义

> 一句话讲清楚这个概念是什么。

## 为什么重要

## 核心机制

## 示例

```
// 代码示例
```

## 相关概念

-

## 来源

-
