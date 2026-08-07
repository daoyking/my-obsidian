# my-obsidian

> 一个基于「卡帕西 LLM Wiki 方法」的自成长个人知识库。主人：金道洋（前端工程师）。

## 这是什么

不是传统的笔记收藏夹，而是一个**由大模型持续编译维护的活维基**。区别于 RAG「每次查询临时拼凑」，本库让 AI 在你导入资料时就预先整理：写摘要、建交叉链接、维护索引、做健康检查——知识持续积累，越用越丰富。

核心理念：**人类负责思考与策展，AI 负责簿记。**

## 架构（三层）

| 层 | 目录 | 谁写 | 说明 |
|---|---|---|---|
| 原始资料 | `raw/` | 人类放入，AI 只读 | 文章/论文/书摘/网页剪藏，不可变 |
| 知识本体 | `wiki/` | AI 编译维护 | 概念页/实体页/主题页/QA/索引/日志 |
| 规则定义 | `CLAUDE.md` | 人类+AI 共同进化 | 告诉 AI 这个 wiki 怎么组织、怎么操作 |

辅助目录：`projects/`（项目复盘）、`daily/`（每日笔记）、`templates/`（模板）、`attachments/`（附件）、`archive/`（归档）。

## 四大操作

1. **Ingest 导入** — 把素材扔进 `raw/`，AI 读后写摘要、更新索引、联动更新 10–15 个相关页面。
2. **Query 查询** — 对着 wiki 提问，AI 读索引定位页面后综合回答。
3. **File Back 回填** — 把高价值查询结果存回 `wiki/qa/`，成为新知识。
4. **Lint 自检** — 定期体检：矛盾、过时、孤立页、缺失交叉引用、空缺补充。

详见 [[CLAUDE]]。

## 快速上手

### 导入一篇文章
1. 用 Obsidian Web Clipper 把网页剪成 Markdown，存到 `raw/web/`（或手动放 PDF 到 `raw/papers/`）。
2. 告诉接入的 AI（如 WorkBuddy / Claude Code）：「处理 raw/ 里的新资料」。
3. AI 执行 Ingest：写摘要页、更新 INDEX、补交叉链接、记 LOG。

### 提一个问题
直接对 AI 说你的问题，它会读 `wiki/INDEX.md` 定位后回答。觉得回答有价值，让它 File Back 到 `wiki/qa/`。

### 定期体检
对 AI 说「跑一次 Lint」，它会检查矛盾/孤立/过时，输出建议清单交你决策。

## 已安装插件

Dataview · Excalidraw · QuickAdd · Smart Connections · Templater · Linter

## 目录树

```
my-obsidian/
├── raw/            原始资料（只读）
├── wiki/           知识本体（AI 维护）
│   ├── INDEX.md    总索引
│   ├── LOG.md      操作日志
│   ├── concepts/   概念页
│   ├── entities/   实体页
│   ├── topics/     主题页
│   ├── snippets/   代码片段
│   └── qa/         问答回填
├── projects/       项目知识
├── daily/          每日笔记
├── templates/      Templater 模板
├── attachments/    附件
├── archive/        归档
├── CLAUDE.md       Schema（AI 规则）
└── README.md       本文件
```

## 同步

远程仓库：https://github.com/daoyking/my-obsidian.git

---

_本知识库不追求一次完美，追求持续生长。_
