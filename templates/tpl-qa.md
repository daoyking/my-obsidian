<%*
const title = await tp.system.prompt("问题简述", tp.file.title);
tp.frontmatter["title"] = title;
-%>---
title: <% title %>
type: qa
tags: []
created: <% tp.date.now("YYYY-MM-DD") %>
updated: <% tp.date.now("YYYY-MM-DD") %>
sources: []
status: active
---

# <% title %>

## 问题

> 完整描述这次提出的问题。

## 回答

> AI 综合 wiki 后给出的回答（已回填）。

## 引用

- 

## 关联页面

- 
