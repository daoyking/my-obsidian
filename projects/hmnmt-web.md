---
title: hmnmt-web
type: project
tags: [vue3, element-plus, sqlite, express, enterprise-site, 1-1-replica]
created: 2026-08-10
updated: 2026-08-13
sources: ["[[raw/articles/github-hmnmt-web-2026-08-10]]", "[[raw/articles/github-hmnmt-web-2026-08-13]]"]
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
- **品牌资产双主题矢量 Logo**: 纯矢量 Logo（图标 / 横版，浅色 + 深色变体），前后台与首屏加载态按 `data-theme` 切换，保证明暗主题下品牌一致性
- **页脚产品中心数据保真**: DB seed 7 条 + 前端 `HIDDEN_CATEGORIES` 过滤 0 产品分类（数据保留不删），展示 5 条；幂等补种 + 对账脚本双保险

## 本周变更（2026-08-06 ~ 2026-08-13）

> 详见 `[[raw/articles/github-hmnmt-web-2026-08-13]]`（本周新增聚焦 08-10 及之后；08-08 / 08-09 提交见上周 `[[raw/articles/github-hmnmt-web-2026-08-10]]`）

### 品牌矢量 Logo + 前后台明暗主题 + 联系我们区块（e071a59，08-12）⭐ 重大
- `brand/` 新增纯矢量 Logo（图标 / 横版，浅色 + 深色变体），部署到前后台 `public/logo`
- 前台新增 theme store，SiteHeader / BrandLogo 跟随 isDark 切换，`index.html` 首屏按 `data-theme` 切双 Logo
- 后台 theme store / AdminLayout / BrandLogo / Login / `admin.css` 适配暗色
- 新增 `ContactSection.vue` + `Contact.vue`，后端落原站权威联系方式 + `seed_contact.cjs`

### 首页 4 项视觉优化 + 页脚产品中心补全（27f4c92，08-10）
- 首页 4 图标放大（64→84 / 40→54），滚动条加粗（10→13px，thumb 调色）
- Contact.vue 重构对齐原站（去 el-card/el-form，复用 .contact-layout + .field，全 t() 国际化）
- 页脚产品中心：DB seed 7 条 → 展示 5 条，`HIDDEN_CATEGORIES` 过滤 0 产品分类，对账 PASS
- 验收：lint 0/0，build 通过，i18n 零漂移 0

### 其他
- 停止追踪验证截图（d2b7b31 + 6ff540d），加入 `.gitignore`，文件保留磁盘可重新生成
- USER.md Obsidian Vault 路径更新至 iCloud Drive（f3865e8）

## 踩坑记录

- **TLA 问题规避**（同 learning-ai-agent W5 经验）：评测/CLI 脚本需独立入口避免 Top-Level Await
- **i18n 公司名重复**: SiteFooter 中公司名出现重复，需对齐旧站原文修复
- **主题管理**: 早期用 `store/theme.js` 管理主题，后改为全局 CSS 变量更简洁；本周品牌 Logo 落地后，首屏加载态需按 `data-theme` 切换双 Logo，避免主题闪烁
- **DeepSeek 不支持 embedding / json_schema**（同 learning-ai-agent）：影响 RAG 与评测管线的接口选型
- **验证截图膨胀仓库**: 一次性视觉验收截图不应入 git，改用 `.gitignore` + 脚本按需重新生成

## 复盘结论

- 1:1 复刻项目的关键是「纪律」而非「创意」——对账脚本是质量底线
- Node.js 22 内置 SQLite 是轻量企业站的理想选择：零外部依赖、单文件部署
- 数据驱动架构（管理后台 → API → 前台）比静态复刻更可维护
- 品牌资产应从一开始就用矢量 + 双主题变体，避免后期补暗色 Logo 时返工首屏加载态
- 「以旧站为准」与「显式 UX 偏离」要分开标注：偏离原站的改动（如图标放大、滚动条加粗）需在 commit message 显式声明，避免与复刻纪律混淆

## 相关概念

- [[组件化]] · [[响应式]]

## 相关实体

- [[Vue]] · [[Vite]] · [[Node.js]]

## 来源

- `[[raw/articles/github-hmnmt-web-2026-08-10]]`
