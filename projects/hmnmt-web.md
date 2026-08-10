---
title: hmnmt-web
type: project
tags: [vue3, element-plus, sqlite, express, enterprise-site, 1-1-replica]
created: 2026-08-10
updated: 2026-08-10
sources: ["[[raw/articles/github-hmnmt-web-2026-08-10]]"]
status: active
tech_stack: [Vue 3, Element Plus, Vite, Vue Router, Axios, Express, Node.js SQLite, Multer]
repo: "https://github.com/daoyking/hmnmt-web"
---

# hmnmt-web

## 背景

湖北鸿萌新材料科技有限公司官网（hmnmt.com）的**逐字 1:1 复刻**项目。包含完整的数据驱动企业官网 + 管理后台，管理后台可可视化配置整站所有内容（站点设置、Banner、公司简介、产品中心、企业发展、新闻动态、联系我们、页脚、子页面），保存后即时反映到前台官网。

- 核心原则：「复印机，不是编辑」——不美化、不臆造
- 数据规模：156 款产品，与原站严格 1:1（零缺漏 / 零虚构 / 零命名残留 / 三存储一致）
- 验收标准：结构 / 视觉 / 容器三层对齐原站，由独立零漂移校验脚本把关
- 当前状态：✅ v1.0 复刻完成

## 技术栈

- **后端**: Node.js 22 内置 `node:sqlite`（单文件数据库，零外部依赖）+ Express + Multer（图片上传）
- **管理后台**: Vue 3 + Element Plus + Vite + Vue Router + Axios
- **官网前台**: Vue 3 + Element Plus + Vite + Vue Router（数据由后端 API 驱动）
- **数据**: 单一 SQLite 库 `backend/site.db`，通过 `/api/site/full` 聚合输出整站配置
- **部署**: 后端同时托管管理后台（/admin）与官网（/）的构建产物，部署只需启动一个 Node 进程

## 关键设计

- **数据驱动架构**: 后端 API 聚合整站配置，前台完全数据驱动，管理后台修改即时反映到前台
- **1:1 复刻方法论**: 「复印机模式」——逐字对齐原站内容、布局、产品目录树层级，不美化不臆造
- **三存储一致**: 原站权威包 → 数据库 → 前端展示，三层存储保持一致，由对账脚本校验
- **零外部依赖后端**: 利用 Node.js 22 内置 `node:sqlite`，无需安装额外数据库
- **i18n 双语**: 中英文对齐旧站原文，i18n 词条按原站收口
- **全局 CSS 变量主题**: 删除冗余 theme.js，主题由全局 CSS 变量承载

## 本周变更（2026-08-03 ~ 2026-08-10）

> 详见 `[[raw/articles/github-hmnmt-web-2026-08-10]]`

- **产品目录树 1:1 复刻**: 按原站逐字复刻层级与条目
- **Store 接入 7 组 JSON 列**: 前端 store 接入后端 7 组产品数据 + 节点详情双模板（产品 vs 分类）
- **公共组件收口重构**: NavBar / SiteHeader / BrandLogo / GlobalSearch / Pagination / ProductCard / ProductInquiryDialog 等全部按原站对齐
- **产品权威数据入库**: 后端数据入库 + 迁移/对账脚本（数据库值 vs 原站权威包，一字不同即 FAIL）
- **代码审查工具链**: ESLint / Prettier / 编辑器配置统一收口
- **i18n 对齐修复**: 中英文对齐旧站原文，修复 SiteFooter 公司名重复
- **UI 细节**: 产品中心表格斑马纹、折叠面板默认全展开

## 踩坑记录

- **TLA 问题规避**（同 learning-ai-agent W5 经验）：评测/CLI 脚本需独立入口避免 Top-Level Await
- **i18n 公司名重复**: SiteFooter 中公司名出现重复，需对齐旧站原文修复
- **主题管理**: 早期用 `store/theme.js` 管理主题，后改为全局 CSS 变量更简洁

## 复盘结论

- 1:1 复刻项目的关键是「纪律」而非「创意」——对账脚本是质量底线
- Node.js 22 内置 SQLite 是轻量企业站的理想选择：零外部依赖、单文件部署
- 数据驱动架构（管理后台 → API → 前台）比静态复刻更可维护

## 相关概念

- [[组件化]] · [[响应式]]

## 相关实体

- [[Vue]] · [[Vite]] · [[Node.js]]

## 来源

- `[[raw/articles/github-hmnmt-web-2026-08-10]]`
