---
type: source
ingested: 2026-08-13
source_repo: "https://github.com/daoyking/hmnmt-web"
source_type: github-weekly
period: "2026-08-06 ~ 2026-08-13"
---

# GitHub 周动态：daoyking/hmnmt-web（2026-08-13）

> 本周（2026-08-06 ~ 2026-08-13）hmnmt-web 仓库重要变更快照。
> 上一份周动态见 `[[raw/articles/github-hmnmt-web-2026-08-10]]`（覆盖 2026-08-03 ~ 2026-08-10）。

## 仓库概要

湖北鸿萌新材料科技有限公司官网（hmnmt.com）的**逐字 1:1 复刻**项目。完整的数据驱动企业官网 + 管理后台，管理后台可可视化配置整站内容，保存后即时反映到前台。

- 核心原则：「复印机，不是编辑」——页面内容、布局、产品目录树均与原站逐字一致
- 数据规模：156 款产品，与原站严格 1:1（零缺漏 / 零虚构 / 零命名残留 / 三存储一致）
- 当前状态：✅ v1.0 复刻完成 + 品牌资产落地 + 明暗主题适配

## 本周重要变更

> 本周窗口与上周（08-03 ~ 08-10）有 08-06 ~ 08-10 重叠；08-08 / 08-09 的提交已在 `[[raw/articles/github-hmnmt-web-2026-08-10]]` 详述，此处聚焦**本周新增**（08-10 及之后）。

### 1. 品牌矢量 Logo + 前后台明暗主题 + 联系我们区块（e071a59，08-12）⭐ 重大

一次提交落地三大模块：

- **品牌资产**：`brand/` 新增纯矢量 Logo（图标 / 横版，浅色 + 深色变体），部署到 `frontend/public/logo` 与 `admin/public/logo`
- **前台明暗主题**：新增 theme store，SiteHeader / BrandLogo 跟随 isDark 切换，`index.html` 首屏加载态按 `data-theme` 切换双 Logo，`main.js` 注入主题
- **后台明暗主题**：theme store、AdminLayout、BrandLogo、Login、`admin.css` 适配暗色
- **联系我们**：新增 `ContactSection.vue` 与 `Contact.vue` 区块，后端 `db.js` 落原站权威联系方式（地址 / 电话 / 邮箱），新增 `seed_contact.cjs` 种子脚本

### 2. 首页 4 项视觉优化与页脚产品中心补全（27f4c92，08-10）⭐ 显著

四项任务一次提交：

1. **首页 4 图标适度放大**（UX 偏离原站）：`home.css` `.advantage-icon` 64×64 → 84×84，img 40 → 54；`Home.vue` advantages 4 图标改为固定数组（Trophy / TrophyBase / User / DataLine）
2. **浏览器滚动条加粗**（UX 偏离原站）：`global.css` width/height 10 → 13px，thumb `#c0c4cc` → `#a0a8b4`（浅），深色模式 thumb `#3d4f6b` → `#4d628a`
3. **Contact.vue 重构对齐原站**：去除 `el-card` / `el-form` 包装，复用 `.contact-layout` + `.field`；左信息列（地址 / 电话 / 邮箱 / 微信 + 地图）+ 右表单（姓名 / 电话同行 + 邮箱 + 留言 + 提交）；文案全 `t()` 国际化，`sanitizeEmbedHtml` / `safeMapEmbed` 保留
4. **页脚产品中心列表补全**：DB seed 7 条 → 展示 5 条；`backend/db.js` `seedFooter` 重写 7 条 slug（functionalResin 等）；前端 `HIDDEN_CATEGORIES` 过滤 0 产品的 2 个分类（数据保留）；新增 `seed_footer_links.cjs` 幂等补种 + `verify_footer_links.cjs` 对账；对账脚本 `FOOTER_PRODUCTS: PASS`
5. 验收：lint 0/0，build 通过，i18n 零漂移 0，footer 对账 PASS

### 3. 其他提交（chore / docs）

| SHA | 日期 | 类型 | 说明 |
|---|---|---|---|
| f3865e8 | 08-12 | docs | 更新 USER.md 中 Obsidian Vault 路径至 iCloud Drive（知识库从 about-project 迁到 iCloud，Mac/iPhone 同步） |
| 6ff540d | 08-12 | chore | 补充 `.gitignore` 验证截图忽略规则（d2b7b31 已移除索引，本提交补规则防重新追踪） |
| d2b7b31 | 08-12 | chore | 停止追踪验证截图（`screenshots/`、`frontend/screenshots/`），加入 `.gitignore` 并从索引移除（文件保留磁盘，可由脚本重新生成） |

## 无新 Release

本周无新 release 发布。

## 关键 commit 索引

| SHA | 日期 | 摘要 |
|---|---|---|
| e071a59 | 08-12 | feat(brand+theme+contact): 品牌矢量 Logo 落地、前后台明暗主题适配与联系我们区块 |
| 27f4c92 | 08-10 | feat(frontend+backend): 首页 4 项视觉优化与页脚产品中心补全 |
| d2b7b31 | 08-12 | chore(git): 停止追踪验证截图以精简仓库 |
| 6ff540d | 08-12 | chore(git): 补充 .gitignore 验证截图忽略规则 |
| f3865e8 | 08-12 | docs: 更新 USER.md 中 Obsidian Vault 路径至 iCloud Drive |
