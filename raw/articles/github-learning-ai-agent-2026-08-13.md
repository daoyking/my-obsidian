---
type: source
ingested: 2026-08-13
source_repo: "https://github.com/daoyking/learning-ai-agent"
source_type: github-weekly
period: "2026-08-06 ~ 2026-08-13"
---

# GitHub 周动态：daoyking/learning-ai-agent（2026-08-13）

> 本周（2026-08-06 ~ 2026-08-13）learning-ai-agent 仓库重要变更快照。
> 上一份周动态见 `[[raw/articles/github-learning-ai-agent-2026-08-10]]`（覆盖 2026-08-03 ~ 2026-08-10）。

## 仓库概要

AI Agent 开发学习路线工程集，按六周计划组织（W2 流式聊天 → W3 RAG → W4 Mastra 编排 → W5 评测可观测 → W6 作品集）。与知识库 [[Agent开发学习计划]] 和 W2-W6 每日任务卡直接配套。

- 当前状态：✅ W2-W6 工程集完成 + **真实评测全部跑通（DeepSeek）** + 作品集替换为实跑证据

## 本周重要变更

> 08-09 的初始工程集提交（89b587b）、W5 管线重构（d49813a）、简历页（12b6a35）已在 `[[raw/articles/github-learning-ai-agent-2026-08-10]]` 详述。此处聚焦**本周新增**（08-10）。

### 1. W5 真实评测跑通 + 作品集替换为实跑证据（f96990c，08-10）⭐ 重大里程碑

- **W5 judge 改用 `generateText` 抽 JSON + zod 校验**（DeepSeek 不支持 `json_schema`）
- **W5 agent 加 `toolChoice: 'required'` + 工具结果兜底合成**，确保 DeepSeek 真调工具并给出回答
- **W5 runEval 把 Agent 真实 toolCalls 喂给 judge**（评测方法论修正——评测的不是「能不能调工具」而是「调了工具后回答质量」）
- **W5 真实 eval 在 DeepSeek 跑通：通过率 100%、加权均分 9.8/10**
- **W6 作品集更新**：`eval-report.md` 换为真实报告（9.8/10）+ 证据区改为实跑数据 + 真实 6-span trace 瀑布
- 修复 footer 损坏链接；`gen-eval-report.ts` 改写 example 文件避免覆盖真实报告
- README 同步

### 2. W2-W4 真实评测跑通并补进作品集（c228647，08-10）⭐ 重大

- **修复 `runEval` 未导出 `llmJudge` 的阻断**（W2 / W3 / W4 `run.ts` 复用）
- **修复 judge 对 DeepSeek 越界 score 的健壮性**（夹取 `[0, 10]`）
- **W3 embedding 改为零依赖本地字符哈希向量**（DeepSeek 不提供 embedding 接口）
- **W2 / W3 agent 加 `maxSteps` + 工具结果综合兜底**（DeepSeek 调用工具后不续写回答的兜底）
- **W4 agent 修正 Mastra `toolCalls` 提取**（`payload.toolName`）
- **三份真实评测报告**（100% / 10、100% / 9.7、100% / 8.98）补进 `w6-portfolio`
- `index.html` 新增 W2-W4 跨周回归区块

### 3. 从公开仓库移除私有 .workbuddy 记忆（e1463c7，08-10）

- 新增 `.gitignore` 忽略 `.workbuddy/`（Agent 工程私有数据，非源码）
- `git rm --cached` 取消跟踪 `.workbuddy/memory/*.md`（磁盘文件保留，历史仍留痕）
- 注意：不强制改写历史，避免对公开仓库做危险操作

## 无新 Release

本周无新 release 发布。

## 真实评测结果汇总

| 工程 | 通过率 | 加权均分 | 评测模型 | 关键修正 |
|---|---|---|---|---|
| W2 流式聊天 | 100% | 10.0 / 10 | DeepSeek | `maxSteps` + 工具结果兜底 |
| W3 RAG | 100% | 9.7 / 10 | DeepSeek | 零依赖本地字符哈希向量（替代 embedding） |
| W4 Mastra 编排 | 100% | 8.98 / 10 | DeepSeek | `payload.toolName` 提取修正 |
| W5 评测可观测 | 100% | 9.8 / 10 | DeepSeek | `generateText` + zod 校验 + `toolChoice: 'required'` |

## 关键 commit 索引

| SHA | 日期 | 摘要 |
|---|---|---|
| f96990c | 08-10 | feat: W5 真实评测跑通 + 作品集替换为实跑证据 |
| c228647 | 08-10 | feat: 用 DeepSeek 实跑 W2-W4 真实评测并补进作品集 |
| e1463c7 | 08-10 | chore: 从公开仓库移除私有 .workbuddy 记忆 |
