---
title: Awesome-LLM-Apps / generative_ui_agents
type: source
tags: [source, github, generative-ui, ag-ui, a2ui, copilotkit, mcp-apps, protocol]
ingested: 2026-09-02
repo: "https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/generative_ui_agents"
parent_source: "[[raw/articles/awesome-llm-apps]]"
projects: 8
---

# Awesome LLM Apps — generative_ui_agents（8 个项目 README 全文快照）

> 抓取时间 2026-09-02，通过 `gh api repos/Shubhamsaboo/awesome-llm-apps/contents/generative_ui_agents/<project>/README.md` 逐个获取，base64 解码后原样保留（未删减）。每个项目附目录文件清单（`--- FILES ---` 段），便于判断技术栈与工程完整度。
>
> **为什么单独存一份**：主快照 [[raw/articles/awesome-llm-apps]] 只有 README 的一行条目描述，而每个项目 README 里的 **"Gen UI concept ——"** 段落是作者对该样例采用哪种「生成式 UI 渲染范式」的官方定性，这是提炼 [[生成式UI渲染协议]] 五层阶梯的一手依据。
>
> 抓取方式：
> ```bash
> BASE="repos/Shubhamsaboo/awesome-llm-apps/contents/generative_ui_agents"
> for d in <8 个目录>; do
>   gh api "$BASE/$d" --jq '.[].name'                    # 文件清单
>   gh api "$BASE/$d/README.md" --jq '.content' | base64 -d   # README 全文
> done
> ```

## 项目清单（8 个）

| 项目 | Gen UI 范式（README 原文定性） | 前端 | Agent | 传输 |
|---|---|---|---|---|
| `ai-dashboard-canvas-agent` | agentic canvas（可寻址画布） | Next.js | Google ADK | AG-UI |
| `ai-deep-research-agent` | tool-rendered components + sidecar workspace | Next.js | LangGraph (Python) | AG-UI |
| `ai-financial-coach-agent` | tool-rendered components（report tab） | Next.js | Google ADK | AG-UI |
| `ai-knowledge-explorer` | 共享状态 + 每次工具调用产出可见图变更 | Next.js 16 + React 19 | LangGraph (Python) | AG-UI state streaming |
| `ai-mcp-app-builder` | agent-generated apps（E2B 沙箱里现写整个 app） | Next.js (monorepo) | Mastra | MCP + E2B |
| `ai-shadcn-component-generator` | schema-driven component composition | React + Vite | LangGraph (Python) | AG-UI |
| `generative-ui-starter-project` | shared agent state（+ A2UI 声明式双模式） | Next.js | LangGraph (Python) | AG-UI |
| `mcp-apps-generative-ui-showcase` | sandboxed in-chat apps over tool protocol | Next.js | — (MCP server) | MCP Apps SEP-1865 |

---

########## ai-dashboard-canvas-agent ##########
--- FILES ---
.env.example
.gitignore
AGENTS.md
LICENSE
README.md
agent
components.json
next.config.ts
package.json
pnpm-lock.yaml
postcss.config.mjs
public
scripts
src
tsconfig.json
--- README ---
# AI Dashboard Canvas Agent

https://github.com/user-attachments/assets/9201d528-573f-43cc-9d31-571c362318a7

---

An agent that populates **live charts, metrics, and real-time data** into a Canvas dashboard instead of just streaming text. Built with [CopilotKit](https://github.com/CopilotKit/CopilotKit), [AG-UI](https://github.com/ag-ui-protocol/ag-ui), and Google's [ADK](https://google.github.io/adk-docs/).

**Gen UI concept — agentic canvas.** The chat is a thin sidebar; the real surface is a persistent Canvas the agent writes into. Charts, KPIs, and panels are addressable artifacts the agent can place, update, and rearrange across turns — closer to a collaborator using a whiteboard than a chatbot returning replies.

---

## 🔧 Quickstart

```bash
# from the awesome-llm-apps repo root
cd generative_ui_agents/ai-dashboard-canvas-agent

# install JS deps + agent
pnpm install        # or npm/yarn/bun

# install Python deps separately for the ADK agent
pnpm install:agent

# set your Google API key
cp .env.example .env
# edit .env and set GOOGLE_API_KEY=...

# start UI + agent together
pnpm run dev
```

### 📦 Prerequisites

- Node.js 18+
- Python 3.8+
- Google Makersuite API Key → get one [here](https://makersuite.google.com/)
- Any package manager (pnpm recommended)

💡 Lockfiles (`package-lock.json`, `yarn.lock`, etc.) are gitignored — each dev manages their own.

---

### 🛠 Available Scripts

- `dev` → Start UI + agent (default)
- `dev:debug` → Start with debug logging
- `dev:ui` → Run just the Next.js app
- `dev:agent` → Run just the ADK agent
- `build / start` → Production build + server
- `lint` → Run ESLint
- `install:agent` → Install Python deps inside `agent/.venv`

---

### 🎨 Customization

- **Main UI** → `src/app/page.tsx`
- Change theme/colors and sidebar appearance
- Add new visualization components
- Extend agent logic in `/agent`

---

### 📚 Docs

- [ADK](https://google.github.io/adk-docs/)
- [CopilotKit](https://github.com/CopilotKit/CopilotKit)
- [AG-UI](https://docs.ag-ui.com/introduction)

########## ai-deep-research-agent ##########
--- FILES ---
.dockerignore
.env.example
.gitignore
Dockerfile
README.md
agent
bin
next.config.ts
package-lock.json
package.json
postcss.config.mjs
public
railway.json
railway.toml
src
tsconfig.json
--- README ---
# AI Deep Research Agent

A deep research assistant that plans, searches the web, writes to a virtual filesystem, and renders each tool call as a live card in a workspace pane. Built with [CopilotKit](https://github.com/CopilotKit/CopilotKit), [Deep Agents](https://docs.copilotkit.ai/integrations/langgraph/deep-agents), [AG-UI](https://github.com/ag-ui-protocol/ag-ui), and [Tavily](https://www.tavily.com/) on top of Next.js + LangGraph (Python).

https://github.com/user-attachments/assets/68d5729f-91f9-4fd9-a579-cd1a8f4aad8d

**Gen UI concept — tool-rendered components with a sidecar workspace.** The Deep Agent emits four tools — `write_todos`, `write_file`, `read_file`, and `research` — and each one renders inline as a status card in the chat while updating a parallel workspace pane (plan, files, expandable tool results). Local React state mirrors the agent's filesystem via `useDefaultTool` rather than `useCoAgent`, sidestepping a Python `Dict` ↔ TypeScript `Array` type mismatch.

## Prerequisites

- Node.js 18+
- Python 3.12+
- [OpenAI API Key](https://platform.openai.com/api-keys)
- [Tavily API Key](https://app.tavily.com/home)
- [uv](https://docs.astral.sh/uv/) (or pip) for Python deps

## Getting Started

1. Install Node dependencies:

```bash
npm install
```

2. Install Python dependencies for the agent:

```bash
cd agent
uv venv && source .venv/bin/activate
uv pip install -e .
cd ..
```

Or with pip:

```bash
cd agent
python -m venv .venv && source .venv/bin/activate
pip install -e .
cd ..
```

3. Copy `.env.example` to `.env` in both the root and `agent/` directories, then fill in `OPENAI_API_KEY` and `TAVILY_API_KEY`.

4. Start the agent (terminal 1):

```bash
cd agent
uv run python main.py
```

5. Start the frontend (terminal 2):

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and ask the assistant to research any topic.

## Architecture

```
[User asks research question]
        ↓
Next.js Frontend (CopilotChat + Workspace)
        ↓
CopilotKit Runtime → LangGraphHttpAgent
        ↓
Python Backend (FastAPI + AG-UI)
        ↓
Deep Agent (research_assistant)
    ├── write_todos        (planning, built-in)
    ├── write_file         (filesystem, built-in)
    ├── read_file          (filesystem, built-in)
    └── research(query)
            └── internal Deep Agent [thread-isolated]
                    └── internet_search (Tavily)
```

## Environment Variables

| Variable                   | Required | Default                 | Description                                         |
| -------------------------- | -------- | ----------------------- | --------------------------------------------------- |
| `OPENAI_API_KEY`           | Yes      | -                       | [Get API key](https://platform.openai.com/api-keys) |
| `TAVILY_API_KEY`           | Yes      | -                       | [Get API key](https://app.tavily.com/home)          |
| `OPENAI_MODEL`             | No       | `gpt-5.5`               | Model to use (`gpt-5.5`)                            |
| `LANGGRAPH_DEPLOYMENT_URL` | No       | `http://localhost:8123` | Backend URL                                         |
| `SERVER_HOST`              | No       | `0.0.0.0`               | Backend host                                        |
| `SERVER_PORT`              | No       | `8123`                  | Backend port                                        |

## Learn more

- [Deep Agents documentation](https://docs.copilotkit.ai/integrations/langgraph/deep-agents)
- [Building Frontends for Deep Agents](https://www.copilotkit.ai/blog/how-to-build-a-frontend-for-langchain-deep-agents-with-copilotkit)
- [CopilotKit documentation](https://docs.copilotkit.ai)
- [Tavily documentation](https://docs.tavily.com/welcome)

## License

Upstream license applies — see [`CopilotKit/CopilotKit`](https://github.com/CopilotKit/CopilotKit).

########## ai-financial-coach-agent ##########
--- FILES ---
.dockerignore
.gitignore
Dockerfile
LICENSE
README.md
agent
docker-compose.test.yml
docker
entrypoint.sh
fixtures
next.config.ts
package-lock.json
package.json
postcss.config.mjs
public
scripts
src
tsconfig.json
--- README ---
# AI Financial Coach Agent

A multi-agent financial coach that analyzes your budget, plans your savings, and builds debt-payoff strategies — rendered as interactive UI cards in a separate report tab. Built with [CopilotKit](https://github.com/CopilotKit/CopilotKit), [AG-UI](https://github.com/ag-ui-protocol/ag-ui), and Google's [ADK](https://google.github.io/adk-docs/) on top of Next.js.

https://github.com/user-attachments/assets/edd4fa8d-ecc5-4b5d-90ff-27b21af5af94

**Gen UI concept — tool-rendered components.** A top-level coach routes each chat turn to the right tool: update your financial profile from natural language ("my income is $8k"), run a single phase (budget / savings / debt), or run the full Budget→Savings→Debt sequence. Each tool call streams a status pill into the chat while the corresponding card materializes in the report tab.

## Prerequisites

- Node.js 18+
- Python 3.12+
- Google Makersuite API Key (for the ADK agent) (see https://makersuite.google.com/app/apikey)
- Any of the following package managers:
  - npm (default)
  - [pnpm](https://pnpm.io/installation)
  - [yarn](https://classic.yarnpkg.com/lang/en/docs/install/)
  - [bun](https://bun.sh/)

## Getting Started

1. Install dependencies (npm, or pnpm/yarn/bun):

```bash
npm install
```

2. Install Python dependencies for the ADK agent:

```bash
npm run install:agent
```

> **Note:** This will automatically setup a `.venv` (virtual environment) inside the `agent` directory.
>
> To activate the virtual environment manually, you can run:
>
> ```bash
> source agent/.venv/bin/activate
> ```

3. Set up your Google API key:

```bash
export GOOGLE_API_KEY="your-google-api-key-here"
```

4. Start the development server:

```bash
npm run dev
```

This will start both the UI and agent servers concurrently.

## Available Scripts

The following scripts can also be run using your preferred package manager:

- `dev` - Starts both UI and agent servers in development mode
- `dev:debug` - Starts development servers with debug logging enabled
- `dev:ui` - Starts only the Next.js UI server
- `dev:agent` - Starts only the ADK agent server
- `build` - Builds the Next.js application for production
- `start` - Starts the production server
- `install:agent` - Installs Python dependencies for the agent

## Customization

The main UI component is in `src/app/page.tsx`. You can:

- Modify the theme colors and styling
- Add new frontend actions
- Customize the CopilotKit sidebar appearance

## 📚 Documentation

- [ADK Documentation](https://google.github.io/adk-docs/) - Learn more about the ADK and its features
- [CopilotKit Documentation](https://docs.copilotkit.ai) - Explore CopilotKit's capabilities
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API

########## ai-knowledge-explorer ##########
--- FILES ---
.env.example
.gitignore
README.md
agent
demo.gif
next-env.d.ts
next.config.ts
package-lock.json
package.json
postcss.config.mjs
scripts
src
tsconfig.json
--- README ---
# AI Knowledge Explorer

Drop files — documents or source code — into a chatbot. The agent extracts entities, concepts, and relationships (or modules, classes, functions, and dependencies), then renders an interactive knowledge graph you can explore.

Click a node to see details. Double-click to expand it — the agent extracts sub-concepts (or sub-components for code) and adds them to the graph. Ask questions in chat to navigate.

![Demo](./demo.gif)

## How It Works

1. **Drop files** — drag documents (`.txt`, `.md`, `.json`, `.csv`) or code files (`.py`, `.ts`, `.js`, `.java`, `.go`, `.rs`, and more) onto the canvas
2. **Agent extracts** — the LLM identifies structure: entities and concepts for text, modules and functions for code
3. **Graph renders** — nodes and edges appear as the agent processes each file
4. **You explore** — click nodes, expand them, ask questions, steer the agent

## Architecture

- **Shared state**: The knowledge graph (nodes + edges) lives in agent state and syncs bidirectionally via CopilotKit v2
- **Generative UI**: Each tool call produces visible changes — new nodes, new edges, expanded detail
- **Human-in-the-loop**: Click to select, double-click to expand, chat to steer

### Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 16, React 19, TailwindCSS 4 |
| Agent | LangGraph (Python), CopilotKit Middleware |
| Graph | react-force-graph-2d |
| LLM | OpenAI (configurable via env) |
| Protocol | AG-UI (state streaming) |

**On the default model (`gpt-4o`)**: extraction (`extract_knowledge`, `find_connections`, `expand_node`) works by prompting the model to return raw JSON and parsing it — there's no function-calling schema or structured-output mode tuned specifically to gpt-4o, so any model with solid instruction-following should work as a drop-in swap via `OPENAI_MODEL`. gpt-4o was picked as a well-understood, inexpensive baseline for reliably following the "return only JSON" instruction, not because it was benchmarked against newer models for this task. If you swap in a newer or reasoning-focused model, expect it to work, but re-verify the "ONLY valid JSON" instruction is still being honored (some models wrap output in explanation or markdown even when told not to).

## Prerequisites

- Node.js 18+
- Python 3.12
- [uv](https://docs.astral.sh/uv/) — the agent's Python dependencies are managed with uv, and `npm install` runs `uv sync` automatically. Install it with `curl -LsSf https://astral.sh/uv/install.sh | sh` (macOS/Linux) or `powershell -c "irm https://astral.sh/uv/install.ps1 | iex"` (Windows). uv fetches Python 3.12 for you if it isn't already installed.

## Setup

```bash
# 1. Install dependencies (also runs `uv sync` for the Python agent)
npm install

# 2. Set your API key
cp .env.example .env
# Edit .env and add your OPENAI_API_KEY

# 3. Start the app
npm run dev
```

This starts both the Next.js frontend (port 3000) and the LangGraph agent (port 8125). On Windows the same `npm` scripts run the `.bat` equivalents under `scripts/`.

## Example Content

Two built-in example sets let you try both modes — click the buttons on the empty state to load them instantly.

**Documents** — 3 markdown files about AI agents:
- `what-are-agents.md` — defines agents, core components (LLM, tools, memory, planning)
- `agent-frameworks.md` — compares LangGraph, CrewAI, AutoGen, CopilotKit
- `agent-challenges.md` — hallucination, tool reliability, evaluation, cost, security

Expected graph: ~15-22 nodes, ~20-33 edges covering the AI agent ecosystem.

**Codebase** — 3 Python files forming a FastAPI auth system:
- `auth.py` — JWT token creation, password hashing, TokenService class
- `routes.py` — login, register, refresh endpoints, dependency injection
- `models.py` — SQLAlchemy User, Post, AuditLog models

Expected graph: ~20 nodes showing modules, classes, functions, and their imports/calls/extends relationships.

## Agent Tools

| Tool | Purpose |
|---|---|
| `extract_knowledge` | Parse documents or code, extract entities/concepts/relationships or modules/classes/functions |
| `find_connections` | Discover deeper links between existing nodes |
| `expand_node` | Deep-dive into a node — adds sub-concepts and detail |

## Project Structure

```
ai-knowledge-explorer/
├── agent/                    # Python LangGraph agent
│   ├── main.py               # Agent entry point
│   └── src/
│       ├── state.py           # KnowledgeState schema
│       └── tools.py           # extract, connect, expand tools
├── src/                       # Next.js frontend
│   ├── app/
│   │   ├── page.tsx           # Main page (chat + graph canvas)
│   │   ├── layout.tsx         # CopilotKit v2 provider
│   │   └── api/
│   │       ├── copilotkit/    # CopilotKit runtime route
│   │       └── upload/        # File upload endpoint
│   ├── components/
│   │   ├── KnowledgeGraph.tsx  # Force-directed graph visualization
│   │   ├── NodeDetail.tsx      # Detail panel on node select
│   │   └── ToolReasoning.tsx   # Tool call status indicators
│   ├── hooks/
│   │   ├── use-knowledge-ui.tsx
│   │   └── use-suggestions.tsx
│   └── lib/
│       ├── types.ts            # KnowledgeNode, KnowledgeEdge types
│       └── example-content.ts  # Built-in example documents and code
├── package.json
└── .env.example
```

########## ai-mcp-app-builder ##########
--- FILES ---
.dockerignore
.env.example
.gitignore
Dockerfile
LICENSE
README.md
apps
package.json
pnpm-lock.yaml
pnpm-workspace.yaml
render.yaml
turbo.json
--- README ---
# AI MCP App Builder

Describe an MCP app in chat and get a live, sandboxed instance back. Built with [CopilotKit](https://github.com/CopilotKit/CopilotKit), [AG-UI](https://github.com/ag-ui-protocol/ag-ui), [Mastra](https://mastra.ai/), and [E2B](https://e2b.dev/) sandboxes.

**Gen UI concept — agent-generated apps.** Most generative UI picks from a fixed catalogue of components. This goes a step further: the agent authors a brand-new MCP app at runtime, the builder provisions an E2B sandbox to host it, and the app renders inline with full bidirectional tool access. The "component" the agent emits *is a whole app*.

This monorepo wires up the **MCP App builder** web UI (`apps/web`) to a **Mastra** agent (`/api/mastra-agent`) that provisions **E2B** sandboxes running the **`mcp-use-server`** template (`apps/mcp-use-server`). An optional local sample is the [Three.js MCP example](https://github.com/modelcontextprotocol/ext-apps/tree/main/examples/threejs-server) in **`apps/threejs-server`** (used for sidebar defaults when running everything locally).

https://github.com/user-attachments/assets/4bb35806-5e42-43c0-a8fe-01c0d1e5b8b3

## Prerequisites

- Node.js 20+
- [pnpm](https://pnpm.io/installation) (required for the workspace)
- OpenAI API key (`OPENAI_API_KEY`); optional **`OPENAI_MODEL`** for `/api/mastra-agent` (default **`gpt-5.5`**)

## Getting started

From the project root (`generative_ui_agents/ai-mcp-app-builder`):

```powershell
pnpm i
Copy-Item .env.example .env
# Edit .env: set OPENAI_API_KEY=sk-proj-... at minimum; add E2B_* for sandbox provisioning (see below)
pnpm dev
```

**`pnpm dev`** runs **Turbo** and starts workspace **`dev`** tasks (the Next.js app and other configured apps — see root `package.json` / `turbo.json`).

**Run pieces individually**

| Goal                                            | Command                                                               |
| ----------------------------------------------- | --------------------------------------------------------------------- |
| Web app only                                    | `pnpm --filter web dev` (from repo root) or `cd apps/web && pnpm dev` |
| Three.js MCP sample (local sidebar default)     | `cd apps/threejs-server && pnpm dev`                                  |
| `mcp-use-server` (local MCP, not the E2B image) | `cd apps/mcp-use-server && pnpm dev`                                  |

Open the URL shown by Next (usually `http://localhost:3000`).

## Dynamic MCP UI (sidebar)

- **MCP servers:** add/remove by URL (+ optional `serverId`); list is sent as **`x-mcp-servers`**. Built-in default: **Excalidraw** (`https://mcp.excalidraw.com`). Override via **`NEXT_PUBLIC_DEFAULT_MCP_SERVERS`** / **`DEFAULT_MCP_SERVERS`**.
- **Tools:** compact list; open a tool for **detail + preview** in a **modal** (not a third mobile tab).
- **Chat:** CopilotKit v2 chat with suggestions.

### Mobile layout

- **Tabs:** **Chat** and **Tools** (servers + tool list). Tool **preview / detail** opens in a **modal**.
- **Desktop:** sidebar + chat column (**`md+`**).
- **Chat UX:** spacing and bottom padding so the composer does not cover the latest messages.

## Environment variables (E2B)

| Variable       | Description                                                                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `E2B_API_KEY`  | From [e2b.dev/dashboard](https://e2b.dev/dashboard)                                                                                             |
| `E2B_TEMPLATE` | **`templateId`** from `Template.build` output after **`build.dev.ts`** / **`build.prod.ts`**                                                    |
| `E2B_REPO_URL` | Used when **`E2B_TEMPLATE`** is empty — clones repo into sandbox (slower cold start). Default in code: **`mcp-use-server-template`** GitHub URL |

## Documentation

**UI entry:** `apps/web/app/page.tsx` (theme, layout, CopilotKit wiring).

**External**

- [CopilotKit](https://docs.copilotkit.ai)
- [Next.js](https://nextjs.org/docs)
- [MCP Apps / UI](https://mcpui.dev/guide/introduction)

########## ai-shadcn-component-generator ##########
--- FILES ---
.claude
.gitignore
.mcp.json
LICENSE
README.md
apps
package.json
pnpm-workspace.yaml
render.yaml
tsconfig.json
--- README ---
# AI Shadcn Component Generator

> Ported from the upstream [CopilotKit/shadify](https://github.com/CopilotKit/shadify) repository.

Describe a UI in plain English. Get a live, interactive [shadcn/ui](https://ui.shadcn.com/) component back. Export it as clean React code.

https://github.com/user-attachments/assets/b14bebd6-527a-48bd-94f5-d27fea8808aa

**Gen UI concept — schema-driven component composition.** The full shadcn component schema is passed as agent context, so the model knows exactly which primitives exist, what props they take, and how they nest. The agent's "output" is a structured tree of those primitives — streamed to the browser, mounted as real React, exportable as code. The design system is the action space.

## Built With

- **[shadcn/ui](https://ui.shadcn.com/)** — The AI composes from real shadcn components (cards, charts, forms, menus, layouts). Every generated component is accessible, polished, and uses the same primitives you'd `npx shadcn add` into your own project.
- **[CopilotKit](https://github.com/CopilotKit/CopilotKit)** — Streams structured UI from the agent to the browser in real time. Passes the full component schema as agent context so the model knows exactly what it can build.
- **[AG-UI](https://github.com/ag-ui-protocol/ag-ui)** — The agent ↔ UI protocol that carries tool calls and component instructions between the LangGraph backend and the React frontend.
- **[LangGraph](https://www.langchain.com/langgraph)** — Powers the agent backend. Handles reasoning, tool use (web search, site extraction via Tavily), and conversation memory across turns.
- **[Render](https://render.com/)** — All three services deploy from a single `render.yaml` Blueprint. Render wires service URLs together automatically via `fromService` references — push to `main` and you're live.

## Architecture

Three services in a pnpm monorepo:

```
UI (React + Vite)  →  Runtime (Hono + CopilotKit)  →  Agent (FastAPI + LangGraph)
```

| Service | Path | What it does |
|---|---|---|
| `ui` | `apps/ui` | Chat interface, component rendering, code export |
| `runtime` | `apps/runtime` | CopilotKit runtime, routes messages to the agent |
| `agent` | `apps/agent` | LangGraph agent with search tools, returns structured UI |

## Quick Start

```bash
pnpm install
```

Add your keys:

```bash
# apps/runtime/.env
OPENAI_API_KEY=sk-...

# apps/agent/.env
OPENAI_API_KEY=sk-...
TAVILY_API_KEY=tvly-...
```

```bash
pnpm dev
```

UI runs at [localhost:5173](http://localhost:5173). Runtime on 4000, agent on 8123.

## Deploy

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

Or connect your repo — `render.yaml` defines everything.

########## generative-ui-starter-project ##########
--- FILES ---
.dockerignore
.env.example
.gitignore
CLAUDE.md
Dockerfile
LICENSE
README.md
agent
docker-compose.test.yml
docker-route-override.ts
docker
entrypoint.sh
fixtures
next.config.ts
package-lock.json
package.json
postcss.config.mjs
public
scripts
serve.py
showcase.json
src
tsconfig.json
--- README ---
# Generative UI Starter Project

A chat-driven kanban board where you and the agent work the same task list. Built with [CopilotKit](https://github.com/CopilotKit/CopilotKit), [AG-UI](https://github.com/ag-ui-protocol/ag-ui), and [LangGraph](https://www.langchain.com/langgraph) on top of Next.js. Also doubles as a starter for declarative gen UI via [A2UI](https://a2ui.org/specification/) (flight-search example included).

**Gen UI concept — shared agent state.** The board (To Do / Done columns) lives in the agent and syncs bidirectionally with React via `useAgent()`. The agent moves cards through tool calls; you click, edit, and reorder them in the UI. Both sides observe and react to the same state — no separate frontend store, no manual sync.

https://github.com/user-attachments/assets/47761912-d46a-4fb3-b9bd-cb41ddd02e34

## Prerequisites

- Node.js 18+
- Python 3.8+
- [uv](https://docs.astral.sh/uv/) (Python package manager)
- Any of the following package managers:
  - npm (default)
  - [pnpm](https://pnpm.io/installation)
  - [yarn](https://classic.yarnpkg.com/lang/en/docs/install/)
  - [bun](https://bun.sh/)
- OpenAI API Key (for the LangGraph agent)

## Getting Started

1. Install dependencies (npm, or pnpm/yarn/bun):

```bash
npm install
```

This will also install the Python agent dependencies via `uv sync`.

2. Set up your environment variables:

```bash
cp .env.example .env
```

Then edit the `.env` file and add your OpenAI API key:

```bash
OPENAI_API_KEY=your-openai-api-key-here
```

3. Start the development server:

```bash
npm run dev
```

This will start both the UI and agent servers concurrently.

## Available Scripts

The following scripts can also be run using your preferred package manager:

- `dev` - Starts both UI and agent servers in development mode
- `dev:debug` - Starts development servers with debug logging enabled
- `dev:ui` - Starts only the Next.js UI server
- `dev:agent` - Starts only the LangGraph agent server
- `build` - Builds the Next.js application for production
- `start` - Starts the production server
- `install:agent` - Installs Python dependencies for the agent

## Project Structure

```
├── src/                         # Next.js frontend source
│   ├── app/
│   │   ├── page.tsx             # Main page
│   │   └── api/copilotkit/      # CopilotKit API route
│   ├── components/
│   │   ├── example-canvas/      # Todo list UI
│   │   ├── example-layout/      # Layout: chat + canvas side-by-side
│   │   └── generative-ui/       # Example generative UI components
│   └── hooks/
├── agent/                       # LangGraph Python agent
│   ├── main.py                  # Agent entry point
│   └── src/
│       ├── todos.py             # Todo tools and state schema
│       └── query.py             # Example data query tool
├── scripts/                     # Agent setup and run scripts
│   ├── setup-agent.sh / .bat
│   └── run-agent.sh / .bat
├── public/                      # Static assets
├── next.config.ts
├── tsconfig.json
└── package.json
```

## A2UI — Agent-to-User Interface

This starter includes [A2UI](https://a2ui.org/specification/) support, allowing the agent to generate rich, interactive UI surfaces declaratively. Instead of returning plain text, the agent sends a JSON description of the UI it wants to render, and the frontend turns it into real components.

### How it works

A2UI uses three concepts:

1. **Catalog** — a set of component definitions (schema) paired with React renderers. Registered once in `layout.tsx` via `<CopilotKitProvider a2ui={{ catalog: demonstrationCatalog }}>`.
2. **Surface** — a rendered UI instance. The agent creates a surface, sets its components, and binds data to it.
3. **Operations** — the agent returns `a2ui.render(operations=[...])` from a tool, which the middleware streams to the frontend.

### Two patterns

| Pattern            | Description                                                                   | Agent tool       | Frontend                                    |
| ------------------ | ----------------------------------------------------------------------------- | ---------------- | ------------------------------------------- |
| **Fixed schema**   | Pre-defined component layout. Only the data changes per invocation.           | `search_flights` | Schema in `a2ui/schemas/flight_schema.json` |
| **Dynamic schema** | A secondary LLM generates both components and data based on the conversation. | `generate_a2ui`  | Components decided at runtime               |

Both patterns use the same catalog on the frontend — the difference is where the component tree comes from.

### Key files

| Purpose                              | Path                                               |
| ------------------------------------ | -------------------------------------------------- |
| Catalog definitions (Zod schemas)    | `src/app/declarative-generative-ui/definitions.ts` |
| Catalog renderers (React components) | `src/app/declarative-generative-ui/renderers.tsx`  |
| Catalog registration                 | `src/app/layout.tsx`                               |
| Fixed-schema agent tool              | `agent/src/a2ui_fixed_schema.py`                   |
| Dynamic-schema agent tool            | `agent/src/a2ui_dynamic_schema.py`                 |
| Flight schema JSON                   | `agent/src/a2ui/schemas/flight_schema.json`        |
| Showcase config                      | `showcase.json`                                    |

### Adding a custom component

1. **Define** the component schema in `definitions.ts`:

   ```typescript
   MyWidget: {
     description: "A brief description for the agent.",
     props: z.object({ title: z.string(), value: z.number() }),
   },
   ```

2. **Render** it in `renderers.tsx`:

   ```typescript
   MyWidget: ({ props }) => (
     <div>{props.title}: {props.value}</div>
   ),
   ```

   Renderers are type-checked against the definitions — TypeScript will error if props don't match.

3. **Use it** from the agent. The component is automatically available to both fixed-schema templates and the dynamic-schema LLM.

### Adding a new fixed-schema tool

1. Create a JSON schema file in `agent/src/a2ui/schemas/` describing the component tree.
2. Create a Python tool that loads the schema with `a2ui.load_schema()` and returns `a2ui.render(operations=[...])` with your data. See `a2ui_fixed_schema.py` for the pattern.

### Showcase mode

`showcase.json` controls which suggestion pills are visually highlighted. Set `"showcase": "a2ui"` to highlight the A2UI demos, or `"showcase": "default"` for no highlights. This is configured automatically when scaffolding via `npx copilotkit create --framework a2ui`.

### Further reading

- [A2UI Specification](https://a2ui.org/specification/)
- [CopilotKit A2UI Documentation](https://docs.copilotkit.ai)

## Documentation

- [LangGraph Documentation](https://langchain-ai.github.io/langgraph/) - Learn more about LangGraph and its features
- [CopilotKit Documentation](https://docs.copilotkit.ai) - Explore CopilotKit's capabilities

########## mcp-apps-generative-ui-showcase ##########
--- FILES ---
.gitignore
Dockerfile
README.md
mcp-server
next.config.ts
package.json
pnpm-lock.yaml
postcss.config.mjs
public
railway.toml
src
tsconfig.json
--- README ---
# MCP Apps Generative UI Showcase

https://github.com/user-attachments/assets/48eeab8d-7845-4d06-83ef-d518a807da03

Book flights, reserve hotels, manage portfolios, and run a kanban board — all inside the chat. Built with [CopilotKit](https://github.com/CopilotKit/CopilotKit), [AG-UI](https://github.com/ag-ui-protocol/ag-ui), and [MCP Apps](https://github.com/modelcontextprotocol/ext-apps), showcasing the MCP Apps Extension (SEP-1865) for rendering interactive UIs directly in the chat.

**Gen UI concept — sandboxed in-chat apps over a tool protocol.** The MCP server registers tools (`workout-generator`, `create-portfolio`, `create-board`…) and links each to an HTML/JS resource via `_meta["ui/resourceUri"]`. When the agent calls a tool, CopilotKit mounts the linked app as a sandboxed iframe in the chat; the iframe talks back to MCP tools over JSON-RPC `postMessage`. Result: full, interactive product surfaces (multi-step wizards, drag-drop boards, live charts) running inline — server-owned logic, chat-owned presentation.

## Live Demo

**https://web-app-production-9af6.up.railway.app**

## Featured Apps

| App                         | Description                                                          | Example Prompt                                                   |
| --------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------- |
| **✈️ Airline Booking**      | 5-step wizard: search flights, select seats, enter passenger details | "Book a flight from JFK to LAX on January 20th for 2 passengers" |
| **🏨 Hotel Booking**        | 4-step wizard: search hotels, compare rooms, book accommodation      | "Find a hotel in Paris from January 15 to 18 for 2 guests"       |
| **📈 Investment Simulator** | Portfolio management with live charts, buy/sell trades               | "Create a $10,000 tech-focused portfolio"                        |
| **📋 Kanban Board**         | Drag-drop task management with columns and cards                     | "Create a kanban board for my software project"                  |

## Quick Start

### 1. Install Dependencies

```bash
# From the mcp-apps directory
npm install

cd mcp-server
npm install
cd ..
```

### 2. Set Environment Variables

Create `.env.local` in the `mcp-apps` directory:

```bash
OPENAI_API_KEY=sk-...
```

### 3. Build & Run

```bash
# Terminal 1: Build and run MCP Server
cd mcp-server
npm run build
npm run dev
# Server runs at http://localhost:3001/mcp

# Terminal 2: Run Next.js Frontend (from mcp-apps directory)
npm run dev
# Frontend at http://localhost:3000
```

Open http://localhost:3000 and try one of the example prompts!

## How It Works

MCP Apps are interactive HTML/JS applications that render in sandboxed iframes within the chat sidebar. They communicate with the MCP server via JSON-RPC over postMessage.

```
User: "Book a flight from JFK to LAX"
        ↓
AI calls search-flights tool
        ↓
MCPAppsMiddleware intercepts, fetches HTML resource
        ↓
CopilotKit renders flights-app.html in iframe
        ↓
User interacts with wizard UI
        ↓
UI calls MCP tools via postMessage → server
```

### Tool Registration Pattern

```typescript
// Tool declares its UI resource via _meta
server.registerTool(
  "search-flights",
  {
    inputSchema: { origin, destination, departureDate, passengers },
    _meta: { "ui/resourceUri": "ui://flights/flights-app.html" },
  },
  handler,
);

// Resource serves the HTML
server.registerResource(
  "flights-app",
  "ui://flights/flights-app.html",
  {
    mimeType: "text/html+mcp", // Marks as MCP App
  },
  () => ({ contents: [{ text: htmlContent }] }),
);
```

## Project Structure

```
mcp-apps/
├── src/app/
│   ├── page.tsx                    # Main demo page
│   └── api/copilotkit/route.ts     # CopilotKit + MCPAppsMiddleware
├── mcp-server/
│   ├── server.ts                   # MCP server with all tools
│   ├── src/
│   │   ├── flights.ts              # 15 airports, 6 airlines
│   │   ├── hotels.ts               # 10 cities, 30 hotels
│   │   ├── stocks.ts               # 18 stocks, portfolios
│   │   └── kanban.ts               # Board templates
│   └── apps/
│       ├── flights-app.html        # Airline booking wizard
│       ├── hotels-app.html         # Hotel booking wizard
│       ├── trading-app.html        # Investment simulator
│       └── kanban-app.html         # Kanban board
└── README.md
```

## Key Technologies

- **CopilotKit** (`@copilotkit/*`) - AI chat interface with MCP Apps support
- **AG-UI MCP Apps Middleware** - Bridges MCP servers with CopilotKit
- **MCP SDK** (`@modelcontextprotocol/sdk`) - Model Context Protocol server
- **Vite** - Bundles each app into single self-contained HTML files

## Deployment

The demo is deployed on Railway with two services:

| Service    | URL                                               |
| ---------- | ------------------------------------------------- |
| Web App    | https://web-app-production-9af6.up.railway.app    |
| MCP Server | https://mcp-server-production-bbb4.up.railway.app |

For production, set `MCP_SERVER_URL` environment variable to point to your deployed MCP server.

