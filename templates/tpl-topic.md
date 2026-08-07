<%*
const title = await tp.system.prompt("主题名称", tp.file.title);
tp.frontmatter["title"] = title;
-%>---
title: <% title %>
aliases: []
type: topic
tags: []
created: <% tp.date.now("YYYY-MM-DD") %>
updated: <% tp.date.now("YYYY-MM-DD") %>
sources: []
status: seed
---

# <% title %>

## 背景

> 为什么要研究这个主题，它解决什么问题。

## 关键子主题

- 

## 我的观点

> 主观判断与倾向，这是自成长的种子。

## 待研究问题

- 

## 来源

-
