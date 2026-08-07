---
title: 操作日志
type: topic
tags: [log]
created: 2026-08-07
updated: 2026-08-07
status: active
---

# 📒 操作日志

> 记录每次 Ingest / Query / File Back / Lint 操作。append-only，只增不改。

## 格式

```
### YYYY-MM-DD HH:mm | 操作类型 | 来源/主题
- 做了什么
- 影响了哪些页面
- 备注
```

---

### 2026-08-07 12:15 | Init | 知识库初始化
- 按「卡帕西 LLM Wiki 方法」搭建三层架构：raw / wiki / schema
- 创建目录骨架、CLAUDE.md（Schema）、INDEX.md、LOG.md、README.md
- 创建 Templater 模板集（概念/实体/主题/QA/项目/日记）
- 迁移历史笔记：键盘侠→wiki/entities、AI→wiki/topics、日记→daily
- 初始化种子知识页（前端工程师技术栈实体页与概念页）
- 配置插件（Templater 模板目录、附件目录、Dataview、Linter）
- 关联 git 远程仓库 https://github.com/daoyking/my-obsidian.git
- 备注：知识库自此进入自成长阶段，待首次 Ingest 驱动生长。

### 2026-08-07 12:20 | Ingest | mini-vue 项目源码
- 来源：`~/about-project/mini-vue`（上游 cuixiaorui/mini-vue），存入 `raw/articles/mini-vue-overview.md`
- 编译产出（新建）：`wiki/concepts/依赖收集.md`、`wiki/snippets/mini-vue-reactive.md`
- 联动更新：
  - `projects/mini-vue.md`（补全包结构/技术栈/关键设计，status→active）
  - `wiki/concepts/响应式.md`（补 Vue3/mini-vue 实现，status→active，链 依赖收集）
  - `wiki/entities/Vue.md`（status→active，链 依赖收集）
  - `wiki/concepts/虚拟DOM.md`（补 mini-vue/mini-react 实现参考，status→seed）
- 影响 6 个 wiki 页面 + 1 个 raw 源，建立 8+ 交叉链接
- 备注：本次为首次 Ingest 演示，验证「raw→编译→联动更新→记日志」流程闭环。
