---
type: source
ingested: 2026-08-17
source_repo: "https://github.com/daoyking/learning-ai-agent"
source_type: github-weekly
period: "2026-08-10 ~ 2026-08-17"
---

# GitHub 周动态：daoyking/learning-ai-agent（2026-08-17）

> 本周（2026-08-10 ~ 2026-08-17）learning-ai-agent 仓库重要变更快照。
> 上一份周动态见 `[[raw/articles/github-learning-ai-agent-2026-08-13]]`（覆盖 2026-08-06 ~ 2026-08-13）。

## 仓库概要

AI Agent 开发学习路线工程集，按六周计划组织（W2 流式聊天 → W3 RAG → W4 Mastra 编排 → W5 评测可观测 → W6 作品集）。与知识库 [[Agent开发学习计划]] 和 W2-W6 每日任务卡直接配套。

- 当前状态：✅ W2-W6 工程集完成 + 真实评测全部跑通（DeepSeek）+ 作品集替换为实跑证据 + **W2 接入长期记忆**

## 本周重要变更

> 上周报告 `[[raw/articles/github-learning-ai-agent-2026-08-13]]` 已详述 08-10 的三条提交（f96990c / c228647 / e1463c7）。本周窗口（08-10 ~ 08-17）与上周在 08-10 ~ 08-13 有重叠，重叠部分仅引用上周报告不重复展开。**本周唯一新增提交**为 0938a7e（08-13 06:09），该提交时间点早于上周自动化执行时刻（08-13 10:15）但未被上周 raw 快照收录，本周补录。

### 1. W2 接入 agentmemory 长期记忆 + 修复 W2/W3 的 OpenAI baseURL 空值崩溃（0938a7e，08-13）⭐ 重大

本提交为本周唯一新增，含两个独立但相关的改进：

#### (a) W2 长期记忆接入（agentmemory）

- **对话前召回**：用最后一条用户消息作为 query，调用 agentmemory `/smart-search` 召回相关历史记忆，拼成上下文段落注入 system prompt（标注「供参考，不要凭空编造」）
- **对话后存入**：`streamText` 的 `onFinish` 回调把本轮「用户消息 + 助手回答前 300 字」通过 `/agentmemory/remember` 写入长期记忆
- **本地向量化，免费无需 key**：agentmemory 是本地记忆服务（默认 `localhost:3111`），数据存项目内 `.agentmemory/` + `data/`（已 gitignore），可整目录删除重置
- **静默降级设计**：新增 `server/memory.ts` 记忆客户端，`isMemoryAvailable()` 健康检查；服务未启动时聊天功能不受影响（记忆部分自动跳过，仅 console 警告）
- **一键启动**：`package.json` 新增 `memory:start` 脚本（`AGENTMEMORY_DATA_DIR=$PWD/.agentmemory npx -y @agentmemory/agentmemory`），实时查看器在 3113 端口
- **README 同步**：补「长期记忆（agentmemory）」节，含两终端启动方式 + 健康检查 curl

#### (b) 修复 W2/W3 的 OpenAI baseURL 空值崩溃

- **问题**：`server/model.ts` 中 `baseURL: process.env.OPENAI_BASE_URL` 在环境变量未设置时为 `undefined`，但 `@ai-sdk/openai` 的 `createOpenAI` 在 `baseURL` 为 `undefined` 字面量（而非「未传」）时模块加载即崩
- **修复**：改为 `baseURL: process.env.OPENAI_BASE_URL || undefined`——`||` 运算符在左侧为 falsy（空字符串/undefined）时返回右侧 `undefined`，但语义上等价于「不传该字段」，避免 `createOpenAI` 误判
- **影响范围**：W2 `w2-agent-chat/server/model.ts` + W3 `w3-rag-qa/server/model.ts` 同步修复（共用同款 model 工厂）
- **本质**：JS 中 `undefined` 作为对象属性值 与「属性不存在」在严格类型检查库里有差异，`||` 是惯用的「真值才传」模式

## 无新 Release

本周无新 release 发布。

## 关键 commit 索引

| SHA | 日期 | 摘要 |
|---|---|---|
| 0938a7e | 08-13 | feat(W2): 接入 agentmemory 长期记忆并修复 W2/W3 的 OpenAI baseURL 空值崩溃 |

## 文件变更明细（0938a7e）

| 文件 | 状态 | +/- | 说明 |
|---|---|---|---|
| w2-agent-chat/server/memory.ts | added | +82/-0 | 记忆客户端（health/remember/smartSearch/buildMemoryContext） |
| w2-agent-chat/server/index.ts | modified | +42/-7 | 对话前召回 + onFinish 存入 + 启动健康检查日志 |
| w2-agent-chat/README.md | modified | +20/-0 | 「长期记忆」节 + 两终端启动方式 |
| w2-agent-chat/package.json | modified | +1/-0 | `memory:start` 脚本 |
| w2-agent-chat/.gitignore | modified | +4/-0 | `.agentmemory/` + `data/` |
| w2-agent-chat/server/model.ts | modified | +1/-1 | baseURL 空值崩溃修复 |
| w3-rag-qa/server/model.ts | modified | +1/-1 | baseURL 空值崩溃修复（同款） |

## 与既有体系的关联

- 长期记忆是 [[记忆系统]] 概念在 W2 工程的首次落地实例——「召回 + 存入」双闭环 + 静默降级是生产级 Agent 记忆模块的标准范式
- baseURL 空值崩溃修复归入「DeepSeek/国产模型适配方法论」补充条目——除了 json_schema / embedding / 工具后续写三类已知差异，环境变量空值处理是第四类易踩坑点
- 与 [[Vercel-AI-SDK]] 的 `createOpenAI` 严格性相关：SDK 对 `baseURL` 字段的「undefined 值 vs 未传」区分是 TypeScript 严格模式下的常见陷阱
