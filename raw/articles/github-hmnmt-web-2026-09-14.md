---
type: source
ingested: 2026-09-14
source_repo: "https://github.com/daoyking/hmnmt-web"
source_type: github-weekly
period: "2026-09-07 ~ 2026-09-14"
---

# GitHub 周动态：daoyking/hmnmt-web（2026-09-14）

> 本周（2026-09-07 ~ 2026-09-14）hmnmt-web 仓库重要变更快照。
> 上一份周动态见 `[[raw/articles/github-hmnmt-web-2026-08-13]]`（覆盖 2026-08-10 ~ 2026-08-13）。

## 仓库概要

湖北鸿萌新材料科技有限公司官网（hmnmt.com）的**逐字 1:1 复刻**项目。完整的数据驱动企业官网 + 管理后台，管理后台可可视化配置整站内容，保存后即时反映到前台。

- 核心原则：「复印机，不是编辑」——页面内容、布局、产品目录树均与原站逐字一致
- 数据规模：156 款产品（后缩至 78 款），与原站严格 1:1
- 当前状态：✅ v1.0 复刻完成 + 部署阿里云 ECS

## 技术架构

| 层 | 技术 |
|---|---|
| 后端 | Node.js 22 内置 `node:sqlite`（零外部依赖）+ Express + Multer |
| 管理后台 | Vue 3 + Element Plus + Vite + Vue Router + Axios |
| 官网前台 | Vue 3 + Element Plus + Vite + Vue Router（数据由后端 API 驱动）|
| 数据 | 单一 SQLite 库，`/api/site/full` 聚合输出整站配置 |
| 部署 | 后端托管管理后台（/admin）与官网（/）构建产物，单进程部署 |

## 本周重要变更（1 commit）

### 1. 修复 CORS 白名单（8443）、同步构建、修复 Nginx 配置（3affb641，09-10）⭐ 部署

部署阿里云 ECS 阶段的重要修复：

- **CORS 白名单修复**：新增 8443 端口到 CORS 白名单，允许管理后台跨域请求后端 API
- **构建同步**：前后端构建产物同步更新
- **Nginx 配置修复**：修正 ECS 上的 Nginx 反向代理配置，确保前后端路径正确转发

此提交反映了 hmnmt-web 项目从本地开发环境向阿里云 ECS 生产环境的部署迁移。

### 无其他显著提交

本周仅 1 次提交，为部署相关修复，无新功能开发或重构。

## 无新 Release

本周无新 release 发布。

## 关键 commit 索引

| SHA | 日期 | 摘要 |
|---|---|---|
| 3affb641 | 09-10 | fix(deploy): 修复 CORS 白名单（8443）、同步构建、修复 Nginx 配置 |
