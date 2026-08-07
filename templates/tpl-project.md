<%*
const title = await tp.system.prompt("项目名称", tp.file.title);
tp.frontmatter["title"] = title;
-%>---
title: <% title %>
type: project
tags: []
created: <% tp.date.now("YYYY-MM-DD") %>
updated: <% tp.date.now("YYYY-MM-DD") %>
sources: []
status: active
tech_stack: []
repo: ""
---

# <% title %>

## 背景

> 这个项目是做什么的，目标是什么。

## 技术栈

-

## 关键设计

-

## 踩坑记录

-

## 复盘结论

> 可复用的经验、SOP、检查清单。

## 相关概念

-
