# CLAUDE.md — my-obsidian 知识库 Schema

> 本文件是卡帕西 LLM Wiki 方法中的 **Schema 层**。它告诉任何接入本 vault 的 AI 智能体（Claude Code / Codex / WorkBuddy 等）这个知识库如何组织、有什么规矩、遇到不同情况该怎么操作。你和大模型共同进化这份文件。

## 1. 身份与目标

- **知识库主人**：金道洋，前端工程师。技术栈覆盖 React / Vue / Svelte / SolidJS / TypeScript / Node.js，关注 AI 与前端工程化。
- **知识库定位**：一个由 LLM 持续「编译」维护的、自成长的个人维基。人类负责策展与判断，AI 负责簿记（交叉引用、一致性维护、孤立节点清理、格式整理）。
- **核心理念**：不要让 AI 在搜索时临时整理（RAG），而是让 AI 持续维护一个不断更新的 Wiki。每一次导入、每一次提问，都让知识库变得更丰富。

## 2. 目录架构（三层 + 辅助）

```
my-obsidian/
├── raw/                  # 【原始资料层·不可变】AI 只读，绝不修改
│   ├── articles/         # 剪藏的文章
│   ├── papers/           # 论文 / 技术报告
│   ├── books/            # 书摘原稿
│   ├── videos/           # 视频笔记原稿
│   └── web/              # 网页剪藏（配合 Obsidian Web Clipper）
├── wiki/                 # 【知识库本体·AI 编译维护】
│   ├── INDEX.md          # 总索引（导航目录，AI 维护）
│   ├── LOG.md            # 操作日志（每次 Ingest/Query/Lint 追加一条）
│   ├── concepts/         # 概念页：一个概念一页（如「虚拟 DOM」「响应式」）
│   ├── entities/         # 实体页：人物 / 框架 / 工具 / 库（如「React」「Vue」）
│   ├── topics/           # 主题页：综合多来源的横向主题（如「前端性能优化」）
│   ├── snippets/         # 代码片段集
│   └── qa/               # 问答回填：Query 产生的高价值回答归档于此
├── projects/             # 项目知识（前端项目复盘、技术方案、踩坑记录）
├── daily/                # 每日笔记
├── templates/            # Templater 模板
├── attachments/          # 附件（图片 / PDF 等）
├── archive/              # 归档区（过期 / 废弃内容）
├── CLAUDE.md             # 本文件（Schema）
└── README.md             # 知识库使用说明
```

## 3. Frontmatter 规范

所有 wiki/ 下的笔记必须含以下 frontmatter（缺失字段由 AI 在 Lint 时补全）：

```yaml
---
title: 页面标题
aliases: []              # 别名，用于双链兼容
type: concept | entity | topic | snippet | qa | project | daily
tags: []                 # 小写标签，如 [react, hooks]
created: 2026-08-07      # 创建日期
updated: 2026-08-07      # 最后更新日期
sources: []              # 关联的 raw 来源路径，如 [[raw/articles/xxx]]
status: seed | active | stale | archived
---
```

- `status` 含义：`seed`=骨架待填充 / `active`=活跃维护 / `stale`=疑似过期待复核 / `archived`=已归档。
- `sources` 是溯源之本，每条结论尽量挂回 raw 原文。

## 4. 四大核心操作

### 4.1 Ingest（导入）
当 `raw/` 有新素材时：
1. 读取素材，与主人讨论关键发现（若主人在场）。
2. 在 `wiki/` 写一篇摘要页或更新已有页面。
3. 更新 `wiki/INDEX.md` 总索引。
4. 在整个 wiki 中找到所有相关页面（概念页、实体页、对比页），逐一补充交叉链接与内容——**一个来源通常影响 10–15 个 wiki 页面**。
5. 在 `wiki/LOG.md` 追加一条记录。
6. 推荐一次处理一个来源，保持参与；也支持批量导入。

### 4.2 Query（查询）
围绕 wiki 提问时：
1. 先读 `wiki/INDEX.md`，定位相关页面，再钻进去细看。
2. 综合生成带引用的回答。引用格式：`（见 [[wiki/concepts/虚拟DOM]]）`。
3. 输出形式可变：Markdown 文章 / 对比表 / Marp 幻灯片 / 图表。
4. 若回答产生新的有价值整合，执行 File Back。

### 4.3 File Back（回填）
- 把高价值的查询结果存回 `wiki/qa/`，成为新页面。
- 一次对比分析、一段推理、一条发现的关联，都不应消失在聊天记录里。
- 回填后更新 INDEX 与相关页面的交叉链接。

### 4.4 Lint（自检）
定期对整个 wiki 做健康检查，重点：
- **矛盾检测**：两个页面是否存在互相矛盾的结论？
- **过时标记**：新素材是否推翻了旧结论？将旧页 `status` 改为 `stale` 并标注。
- **孤立页面**：没有任何入链的页面（除 INDEX 外）——为其补充链接或归档。
- **缺失实体**：被多处提及但尚未建立独立页面的重要概念——创建 seed 页。
- **缺失交叉引用**：明显相关却未互链的页面。
- **空缺补充**：可通过网络搜索补全的信息空缺（需主人确认）。
- **frontmatter 完整性**：补全缺失字段。
- Lint 结果写入 `wiki/LOG.md`，并生成待办建议清单交主人决策。

## 5. 链接与命名约定

- 使用 `[[wikilink]]` 双链，优先链接到概念页与实体页。
- 文件名用中文或英文均可，但同一概念只用一个主名，其余写入 `aliases`。
- 文件名避免空格与特殊字符；日期格式 `YYYY-MM-DD`。
- 概念页放 `wiki/concepts/`，实体页放 `wiki/entities/`，主题页放 `wiki/topics/`——放错位置由 AI 在 Lint 时迁移。

## 6. 人类 / AI 分工

| 人类负责（思考） | AI 负责（簿记） |
|---|---|
| 策展：选什么值得放进 raw/ | 读取 raw/ 写摘要、建页面 |
| 批判性判断：结论对不对 | 交叉引用、反向链接维护 |
| 监督：定期审查 AI 更新 | 孤立节点清理、frontmatter 补全 |
| 提出好问题 | 综合回答、File Back 回填 |
| 确认 Lint 建议 | 矛盾检测、过时标记 |

**红线**：AI 不得修改 `raw/` 下任何文件。AI 对 `wiki/` 的实质性结论修改应标注来源，重大改动先与主人确认。

## 7. 写作风格

- 概念页：定义 → 为什么重要 → 核心机制 → 示例 → 相关概念（双链）→ 来源。
- 实体页：是什么 → 核心特性 → 适用场景 → 在我项目中的使用 → 相关实体 → 来源。
- 主题页：背景 → 关键子主题（双链到概念/实体）→ 我的观点 → 待研究问题 → 来源。
- 摘要要精炼，避免流水账；保留「我的观点」与「待研究问题」两节，这是自成长的种子。

## 8. 与插件协同

- **Templater**：新建笔记用 `templates/` 下对应模板，自动填 frontmatter。
- **Dataview**：INDEX 与各 MOC 页用 Dataview 查询自动聚合（按 type / tag / status）。
- **Smart Connections**：辅助发现语义相关笔记，AI 在 Lint 时参考其建议补链。
- **Linter**：保存时自动规范化 frontmatter 与格式。
- **Excalidraw**：复杂关系用画布可视化，存入 attachments 并在相关页面引用。

## 9. 进化机制

- 本 Schema 文件由你和大模型共同进化：发现好用的规则就加上，不好用就改掉。
- 每次 Lint 后，若有流程改进点，更新本文件并在 LOG.md 记录。
- 知识库不追求一次完美，追求持续生长：用的越多，它越聪明。

## 10. 自动维护机制（定时自动化）

> 以下定时任务在 WorkBuddy 自动化系统中运行（存 `~/.workbuddy/workbuddy.db`，不在 vault 内），按计划自动驱动知识库生长。人工 Ingest/Query/Lint 仍可随时触发。

| 任务 | 频率 | 内容 |
|---|---|---|
| 每日AI资讯Ingest | 每天 08:00 | aihot skill 抓当日 AI HOT 日报 → 存 `raw/articles/ai-hot-YYYY-MM-DD.md` → 编译进 `wiki/topics/AI资讯.md` 及相关实体页 → LOG → commit+push |
| 每周Lint体检 | 每周一 09:00 | 跑 `scripts/lint_wiki.sh`（obsidian-llm-wiki skill）→ 补悬空/孤立/命名冲突 → 复检归零 → LOG → commit+push |
| 每周GitHub动态Ingest | 每周一 10:00 | gh CLI 查 daoyking 仓库近 7 天提交/release → 重要变更 Ingest 进 `projects/` → LOG → commit+push |

**自动任务遵循的约定**：
- 遵循本 Schema 全部规则（raw 不可变、frontmatter 规范、人机分工）。
- push 用 `git -c http.version=HTTP/1.1 -c http.postBuffer=524288000 push origin main`，失败重试最多 3 次（避开 HTTP2 framing 网络坑）。
- 无新内容或失败时在 LOG 记一条说明，**绝不编造内容**。
- LOG 描述性文字里的 `[[链接]]` 用反引号包裹，避免被 Lint 误判为悬空。

**管理**：暂停/改时间/删除→让主人用自然语言指令（如「暂停每周 Lint」），由 AI 调用 automation_update 处理；或在 WorkBuddy 设置界面操作。

这对应 [[Agent持续进化]] 四法中的「经验→知识」自动化落地。

