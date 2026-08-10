---
type: source
ingested: 2026-08-10
source_repo: "https://github.com/daoyking/hmnmt-web"
source_type: github-weekly
period: "2026-08-03 ~ 2026-08-10"
---

# GitHub 周动态：daoyking/hmnmt-web（2026-08-10）

> 本周（2026-08-03 ~ 2026-08-10）hmnmt-web 仓库重要变更快照。

## 仓库概要

湖北鸿萌新材料科技有限公司官网（hmnmt.com）的**逐字 1:1 复刻**项目。完整的数据驱动企业官网 + 管理后台，管理后台可可视化配置整站内容，保存后即时反映到前台。

- 核心原则：「复印机，不是编辑」——页面内容、布局、产品目录树均与原站逐字一致
- 数据规模：156 款产品，与原站严格 1:1（零缺漏 / 零虚构 / 零命名残留 / 三存储一致）
- 当前状态：✅ v1.0 复刻完成

## 技术架构

| 层 | 技术 |
|---|---|
| 后端 | Node.js 22 内置 `node:sqlite`（零外部依赖）+ Express + Multer |
| 管理后台 | Vue 3 + Element Plus + Vite + Vue Router + Axios |
| 官网前台 | Vue 3 + Element Plus + Vite + Vue Router（数据由后端 API 驱动）|
| 数据 | 单一 SQLite 库，`/api/site/full` 聚合输出整站配置 |

## 本周重要变更（10 commits）

### 1. 产品目录树 1:1 复刻（83ba55cf）
- 产品中心目录树按原站逐字 1:1 复刻，层级与条目完全对齐

### 2. Store 接入 7 组 JSON 列与节点详情双模板（89ad2215）
- 前端 store 接入后端 7 组产品 JSON 数据列
- 节点详情页双模板机制（产品 vs 分类）

### 3. 公共组件与样式收口重构（c9d575aa）
- 公共组件按原站内容对齐：NavBar / SiteHeader / BrandLogo / GlobalSearch / Pagination / ProductCard / ProductInquiryDialog、About / ProductOverview / Sample
- i18n 词条、main.js 引导、global.css / home.css 样式按原站收口
- 删除冗余 `frontend/src/store/theme.js`，主题改由全局 CSS 变量承载
- 补充 `frontend/tests`（i18n 单测 + ESM 扩展加载器）

### 4. 产品权威数据入库与迁移/对账脚本（414999c9）
- 后端产品权威数据入库
- 迁移与对账脚本：数据库值 vs 原站权威包，一字不同即判 FAIL

### 5. 代码审查工具链配置收口（4d3b1911）
- ESLint / Prettier / 编辑器配置统一收口

### 6. 复刻过程记录与验收报告（046b1a5d）
- 完整复刻过程文档 + 验收报告

### 7. 工作区身份文件（f34ac11f）
- 建立 USER.md 与 IDENTITY.md

### 8. README 项目简介（a8718c43）
- 补充 README 顶部项目简介（1:1 复刻定位与验收标准）

### 9. 产品中心表格斑马纹与折叠面板全展开（08448779）
- 产品中心表格增加斑马纹样式
- 折叠面板默认全展开

### 10. i18n 中英文对齐修复（aae72f79）
- i18n 中英文对齐旧站原文
- 修复 SiteFooter 公司名重复

## 无新 Release

本周无新 release 发布。
