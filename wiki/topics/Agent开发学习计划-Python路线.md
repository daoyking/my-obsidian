---
title: Agent 开发学习计划（Python 路线）
aliases: [12周Agent学习计划, Swift开发者Agent学习计划, 个人自动化Agent学习计划]
type: topic
tags: [agent, 学习计划, python, swift, 个人自动化]
created: 2026-08-11
updated: 2026-08-11
sources: ["~/about-project/about-AI/Agent开发学习计划.md", "~/about-project/about-AI/四位AI讲师学习资料整理.md"]
status: active
---

# Agent 开发学习计划（Python 路线）

> 为 Swift 原生 macOS 开发者定制的 12 周 Agent 开发路线：LLM API 零基础、目标=个人自动化工具、每周约 5 小时（共约 60h）、Python 为主路线。与既有 [[Agent开发学习计划]]（前端求职 6 周 TS 路线）互补：一个是求职向，一个是个人工具向。

## 背景

学习者不是从零开始，而是从「另一个领域」迁移过来。已有能力可直接翻译进 Agent 语境：

| 你已经会的 | 在 Agent 世界里的对应 |
|---|---|
| WinSnap 的 AX 窗口操作（移动/缩放/枚举） | Agent 的**工具（Tools）**——模型通过工具触碰真实世界（[[函数调用]]） |
| 全局热键、事件监听、NSEvent | Agent 的**触发与循环**——事件驱动模型调起 |
| SwiftPM 工程 + 打包脚本 + README | **工程化交付习惯**——Agent 项目同样需要可编译、可运行、可复现 |
| 辅助功能权限、TCC、系统集成 | **权限与安全边界**（[[Agent安全]]）——Agent 调用本机能力时一模一样 |
| 用过千问办公里的 Apple 日历/提醒/备忘录 MCP | 已经在**消费 MCP 协议**（[[MCP]]），只差生产者视角 |

核心心法：**Agent = 大模型（大脑）+ 工具（手脚）+ 循环（思考-行动-观察）。缺的只有大脑部分，手脚已经会造了。**

三阶段路线：

```
阶段 A 地基（Week 0-3）   LLM 认知 → Tool Calling → 手写 Agent 循环
阶段 B 工具与协议（Week 4-7）  框架 → MCP → 把 macOS 能力桥接给 Agent
阶段 C 工程化与验收（Week 8-11）  记忆/可靠性/成本 → 验收项目《个人桌面助手》
Week 12  扩展方向与复盘
```

## 关键子主题

### 一、十二周详细计划

> 每周 5 小时建议分配：概念学习 1.5h + 动手实验 3h + 写 README/复盘 0.5h。每个里程碑按交付习惯：**可运行的完整小项目 + README**。

| 周 | 主题 | 目标 | 关键动作 | 产出 |
|---|---|---|---|---|
| W0 | 环境与第一次 API 调用 | 打通「代码→大模型」第一次握手 | `python3 -m venv` 建虚拟环境（本机 pip3 受 PEP 668 保护）；注册百炼/DeepSeek 拿 API Key；用 `openai` SDK 写 30 行 CLI；试 temperature/max_tokens/system prompt 三参数 | `agent-lab/hello-llm/` 对话 CLI + README |
| W1 | LLM 核心概念与结构化输出 | 理解 Token、上下文窗口、角色、JSON 输出 | 看 Karpathy《Intro to LLMs》；API 实现邮件/工单结构化提取；对比加/不加 JSON schema 的输出差异与 token 消耗 | `extract.py` 文本→结构化 JSON |
| W2 | Tool Calling（函数调用） | 掌握 Agent 最核心机制 | 定义 `get_weather` / `run_shell_command` 两个工具；实现「tool_call → 执行 → 回填 → 继续」单轮流程 | `tool_demo.py` 自动选工具 CLI |
| W3 | 手写 Agent 循环（ReAct） | 不依赖框架手写主循环 | 实现 ReAct（思考→行动→观察），最多 N 步带保护；配 3 个本机工具（读文件/跑命令/mdfind）；处理工具报错、超步数、畸形 JSON 三种失败 | `my_agent.py` 约 80 行自写 Agent |
| W4 | 引入框架 | 明白框架替你做了什么 | 二选一：OpenAI Agents SDK（轻）或 LangGraph（状态机）；用框架重写 W3；横向了解 CrewAI/Claude Agent SDK/Google ADK | 框架版 Agent + 手写 vs 框架对比笔记 |
| W5 | MCP 协议（重点） | 理解 Agent 世界「USB-C 接口」 | 读 MCP 官方文档（Client/Server/stdio/三类原语）；装 2-3 个现成 Server（filesystem/fetch/github）；用消费者视角反推已用过的 Apple MCP | `mcp-notes.md` 学习笔记 |
| W6 | 写自己的 MCP Server | 从消费者变生产者 | 用 Python MCP SDK（FastMCP）写本地工具服务器（文件整理/剪贴板管家/定时提醒三选一）；注册真机调用；迭代工具 description 文案 | `my-mcp-server/` 可被任何客户端加载 |
| W7 | 把 macOS 能力桥接给 Agent（主场） | 用 Swift 技能给 Agent 装手脚 | 路线一：Swift CLI helper（如 AX 的 `windowctl`）+ Python subprocess + MCP 包装；路线二：osascript 控制提醒/备忘录/日历/邮件；安全边界课（白名单/沙箱/危险操作拒绝） | `macos-bridge/` Swift helper + MCP 包装 |
| W8 | 记忆与上下文工程 | 让 Agent 记住东西、不被窗口卡死 | JSON/sqlite3 会话记忆 + 自动摘要压缩；`sqlite-vec`/`chromadb` 语义搜索（RAG 最小闭环，50 行内）；上下文审计（打印 token 数） | `remember.py` 带记忆对话助手 |
| W9 | 可靠性、成本与安全 | 从「能跑」到「敢用」 | 指数退避重试；请求日志；成本估算 + 月预算告警 + 便宜模型干简单活；安全红线（只读白名单/--dry-run/高危人工确认）；给 W3-8 统一补日志与错误处理 | `safety-checklist.md` + 可靠性补丁 |
| W10-11 | 验收项目《个人桌面助手》 | 整合 11 周所学成每天可用的东西 | 需求自选（日历周报入备忘录/自然语言控制窗口布局/文件夹监控归档提醒）；Python Agent 循环 + 2-3 个 MCP 工具 + 简单记忆 + 日志；完整工程 + 一键安装 + README + 演示 | 验收项目完整交付 |
| W12 | 扩展方向与复盘 | 看清地图，决定下一站 | 多 Agent 协作（LangGraph 多节点）/A2A 协议/微调 RAG 深化/MCP Server 发布；复盘各周 README 沉淀坑清单；制定下一阶段 6 周计划 | `learning-retro.md` |

**验收标准**（W10-11 全部满足才算完成）：能连续完成 3 个真实任务不报错；工具调用失败时能自愈或明确报错；一个月预估成本 < 30 元；README 让同事 10 分钟能装起来。

### 二、里程碑验收（随时自检）

| 周 | 自检问题 | 达标即过 |
|---|---|---|
| W0 | 能不能 10 分钟内跑通一次 API 调用？ | 能 |
| W2 | 模型会不会自己选对工具并等你回填结果？ | 会 |
| W3 | 不查资料能不能默写出 Agent 循环的伪代码？ | 能 |
| W5 | 能不能讲清 MCP 里 Tool/Resource/Prompt 的区别？ | 能 |
| W6 | 你的 MCP Server 能被两个不同客户端加载？ | 能 |
| W9 | 工具挂了之后 Agent 会重试还是优雅报错？ | 会 |
| W11 | 验收项目能不能连续完成 3 个真实任务？ | 能 |

**最大的验收标准只有一条：到第 11 周结束时，有一个自己每天真的在用的 Agent 工具。如果没有，回去找原因，而不是继续学新东西。**

### 三、学习资源清单（与讲师资料配套）

| 类别 | 资源 | 对应周 |
|---|---|---|
| 课程 | 吴恩达 DeepLearning.AI 短课（Prompt/Function Calling/Agentic AI/Agentic RAG） | W1-8，详见 [[四位AI讲师学习资料整理]] |
| 课程 | Karpathy《Intro to LLMs》1h ·《Deep Dive into LLMs》3.5h ·《Let's build GPT》2h | W1 / W8-9 / W8 后有余力 |
| 课程 | 李宏毅《生成式 AI 导论 2024》19 讲（中文，零先验） | W1-3（第 9 讲 AI Agent 放 W3 前） |
| 精读 | 李沐论文精读（GPT 三部曲/Transformer/InstructGPT/CoT/Llama 3.1） | W1-3 / W6 可选 |
| 必读 | Anthropic《Building Effective Agents》| W3 |
| 文档 | [[MCP]] 官方文档 / OpenAI Function Calling 文档 / OpenAI Agents SDK / LangGraph 文档 | W2 / W4-5 |
| 仓库 | modelcontextprotocol/servers、awesome-mcp-servers、python-sdk、datawhalechina/so-large-lm | W5-6 |
| 书 | 《Hands-On Large Language Models》（Jay Alammar）·《AI Engineering》（Chip Huyen） | W12 后进阶 |
| 资讯 | 知乎 2026 框架横评 · State of AI Agent Tooling 2026 · MCP 协议详解（博客园） | W4 / W12 |

### 四、7 条学习建议

1. **先手写，再框架**。W3 的手写循环是整个计划的支点——框架只是它的包装。
2. **把「工具」翻译成已经懂的东西**。Agent 的 tool 就是 WinSnap 里的 AX 操作：定义清楚、输入输出明确、失败有反馈。
3. **MCP 是主赛道**。2026 年 MCP 已是 Agent 互联事实标准（国内已落地国家标准）；从消费者转生产者路径最短，Swift helper + Python MCP 双栈路线几乎没人走，是差异化。
4. **国产 API 起步**。百炼/DeepSeek 免费额度够学完整个计划，OpenAI 兼容协议意味着换模型只改 base_url；Agent 的瓶颈通常在你给的工具质量。
5. **安全是个人自动化的生命线**。每个工具设白名单，危险操作（删除/覆盖/联网发消息）默认拒绝或人工确认。
6. **每周一个可运行交付物**。符合工程习惯，对抗「学了就忘」；每个项目写 README。
7. **把 AI 当私教**。用千问办公或对话产品解释报错、出练习题、评审代码；卡住超过 30 分钟就停下来问它。

## 我的观点

- **用差异打差异**：WinSnap 的 AX 窗口能力 + Swift 原生经验，是绝大多数 Python Agent 教程作者不具备的「手脚」优势；W7 的 macOS 桥接是整条路线里最该做透的一周。
- **双语言是常态而非过渡**：Swift 造工具（性能/系统 API），Python 写 Agent 循环（生态/API 成熟度），`subprocess` + MCP 就是两者的胶水，不必纠结「统一到一种语言」。
- **视频是下饭菜，动手才是正餐**：四位讲师资料合计控制在 30 小时内（详见 [[四位AI讲师学习资料整理]]），哪周时间紧先砍视频，不砍项目。
- **概念先行不意味着全懂再动手**：W0 就建立反馈回路，API 调通后再回头看 Karpathy/李沐补底层直觉，顺序反了容易劝退。

## 待研究问题

- OpenAI Agents SDK vs LangGraph 在「个人桌面工具」场景下的长期维护成本差异？
- MCP 国家标准（2026 国内落地）对自研 Server 的约束与机遇？
- W7 的 `windowctl` 方案与已有 [[Agent-Plugins]] / Harness 类工具（[[Harness工程]]）如何避免重复造轮子？

## 相关概念

- [[Agent]] · [[函数调用]] · [[ReAct]] · [[MCP]] · [[RAG]] · [[记忆系统]] · [[Prompt工程]] · [[思维链]] · [[RLHF]] · [[上下文工程]] · [[Agent安全]] · [[Agent评估]] · [[Harness工程]]

## 相关主题

- [[Agent开发学习计划]]（前端求职 6 周 TS 路线，本页互补）· [[四位AI讲师学习资料整理]]（配套资源）· [[动手学大模型]] · [[AI-Agents-in-Depth]] · [[AI]]

## 来源

- 定制学习计划原稿：`~/about-project/about-AI/Agent开发学习计划.md`（2026-08-11）
- 配套讲师资料整理：`~/about-project/about-AI/四位AI讲师学习资料整理.md`（2026-08-11）
