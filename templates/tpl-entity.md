<%*
const title = await tp.system.prompt("实体名称（框架/工具/库/人物）", tp.file.title);
tp.frontmatter["title"] = title;
-%>---
title: <% title %>
aliases: []
type: entity
tags: []
created: <% tp.date.now("YYYY-MM-DD") %>
updated: <% tp.date.now("YYYY-MM-DD") %>
sources: []
status: seed
---

# <% title %>

## 是什么

> 这个实体（框架/工具/库/人物）的简要介绍。

## 核心特性

-

## 适用场景

-

## 在我项目中的使用

> 关联到 projects/ 下的具体项目。

## 相关实体

-

## 来源

-
