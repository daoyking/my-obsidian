---
title: Awesome-LLM-Apps / rag_tutorials
type: source
tags: [source, github, rag, retrieval, hybrid-search, agentic-rag, knowledge-graph, multimodal, reranking]
ingested: 2026-09-02
repo: "https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/rag_tutorials"
parent_source: "[[raw/articles/awesome-llm-apps]]"
projects: 24
---

# Awesome LLM Apps — rag_tutorials（24 个项目 README 快照）

> 抓取时间 2026-09-02，通过 `gh api repos/Shubhamsaboo/awesome-llm-apps/contents/rag_tutorials/<project>/README.md` 逐个获取，base64 解码后原样保留。每个项目附目录文件清单（`-- files --` 段）。
>
> **数量修正**：主快照 [[raw/articles/awesome-llm-apps]] 的 README 目录表写的是 **21 个** RAG 教程，实测目录下为 **24 个项目**（README 未同步更新）。以目录实测为准。
>
> **为什么单独存一份**：主快照每个项目只有一行描述（项目名 + 一句话），无法判断它到底用的哪个向量库、哪个框架、有没有做拒答/纠错/重排序。这些细节只在各项目 README 的 Features 段里——是提炼 [[RAG实验路线]] 的「样例 → 技术点」映射表的一手依据。
>
> **栈分布观察**（从 files 清单与 Features 段统计，同一项目可计数多次）：
> - 向量库：Qdrant（8 次）· LanceDB（2）· PgVector（1）· 内存索引（1）
> - Agent 框架：Agno（7）· LangGraph（4）· Pydantic AI（1）· Google ADK（1）· 无框架（1）
> - 托管/服务：Contextual AI（1）· Ragie.ai（1）· Cohere（2）
> - 本地模型：Ollama（6，Llama3.1/3.2、Qwen3、Gemma3、DeepSeek-R1、EmbeddingGemma）
> - UI：Streamlit（绝大多数，仅 multimodal_agentic_rag 用自建 frontend 且带 3D 嵌入视图）

##### agentic_rag_embedding_gemma
-- files --
README.md agentic_rag_embeddinggemma.py agno.png google.png ollama.png requirements.txt 
## 🔥 Agentic RAG with EmbeddingGemma

### 🎓 FREE Step-by-Step Tutorial 
**👉 [Click here to follow our complete step-by-step tutorial](https://www.theunwindai.com/p/build-a-local-agentic-rag-app-with-google-embeddinggemma) and learn how to build this from scratch with detailed code walkthroughs, explanations, and best practices.**

This Streamlit app demonstrates an agentic Retrieval-Augmented Generation (RAG) Agent using Google's EmbeddingGemma for embeddings and Llama 3.2 as the language model, all running locally via Ollama.

### Features

- **Local AI Models**: Uses EmbeddingGemma for vector embeddings and Llama 3.2 for text generation
- **PDF Knowledge Base**: Dynamically add PDF URLs to build a knowledge base
- **Vector Search**: Efficient similarity search using LanceDB
- **Interactive UI**: Beautiful Streamlit interface for adding sources and querying
- **Streaming Responses**: Real-time response generation with tool call visibility

### How to Get Started?

1. Clone the GitHub repository
```bash
git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git
cd awesome-llm-apps/rag_tutorials/agentic_rag_embedding_gemma
```

2. Install the required dependencies:
```bash
pip install -r requirements.txt
```

3. Ensure Ollama is installed and running with the required models:
   - Pull the models: `ollama pull embeddinggemma:latest` and `ollama pull llama3.2:latest`
   - Start Ollama server if not running

4. Run the Streamlit app:
```bash
streamlit run agentic_rag_embeddinggemma.py
```
   (Note: The app file is in the root directory)

5. Open your web browser to the URL provided (usually http://localhost:8501) to interact with the RAG agent.

### How It Works?

1. **Knowledge Base Setup**: Add PDF URLs in the sidebar to load and index documents.
2. **Embedding Generation**: EmbeddingGemma creates vector embeddings for semantic search.
3. **Query Processing**: User queries are embedded and searched against the knowledge base.
4. **Response Generation**: Llama 3.2 generates answers based on retrieved context.
5. **Tool Integration**: The agent uses search tools to fetch relevant information.

### Requirements

- Python 3.8+
- Ollama installed and running
- Required models: `embeddinggemma:latest`, `llama3.2:latest`

### Technologies Used

- **Agno**: Framework for building AI agents
- **Streamlit**: Web app framework
- **LanceDB**: Vector database
- **Ollama**: Local LLM server
- **EmbeddingGemma**: Google's embedding model
- **Llama 3.2**: Meta's language model

##### agentic_rag_gpt5
-- files --
README.md agentic_rag_gpt5.py requirements.txt 
# 🧠 Agentic RAG with GPT-5

### 🎓 FREE Step-by-Step Tutorial 
**👉 [Click here to follow our complete step-by-step tutorial](https://www.theunwindai.com/p/build-agentic-rag-with-openai-gpt-5) and learn how to build this from scratch with detailed code walkthroughs, explanations, and best practices.**

An agentic RAG application built with the Agno framework, featuring GPT-5 and LanceDB for efficient knowledge retrieval and question answering.

## ✨ Features

- **🤖 GPT-5**: Latest OpenAI model for intelligent responses
- **🗄️ LanceDB**: Lightweight vector database for fast similarity search
- **🔍 Agentic RAG**: Intelligent retrieval augmented generation
- **📝 Markdown Formatting**: Beautiful, structured responses
- **🌐 Dynamic Knowledge**: Add URLs to expand knowledge base
- **⚡ Real-time Streaming**: Watch answers generate live
- **🎯 Clean Interface**: Simplified UI without configuration complexity

## 🚀 Quick Start

### Prerequisites

- Python 3.11+
- OpenAI API key with GPT-5 access

### Installation

1. **Clone and navigate to the project**
   ```bash
   cd rag_tutorials/agentic_rag_gpt5
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Set up your OpenAI API key**
   ```bash
   export OPENAI_API_KEY="your-api-key-here"
   ```
   Or create a `.env` file:
   ```
   OPENAI_API_KEY=your-api-key-here
   ```

4. **Run the application**
   ```bash
   streamlit run agentic_rag_gpt5.py
   ```

## 🎯 How to Use

1. **Enter your OpenAI API key** in the sidebar
2. **Add knowledge sources** by entering URLs in the sidebar
3. **Ask questions** using the text area or suggested prompts
4. **Watch answers stream** in real-time with markdown formatting

### Suggested Questions

- **"What is Agno?"** - Learn about the Agno framework and agents
- **"Teams in Agno"** - Understand how teams work in Agno
- **"Build RAG system"** - Get a step-by-step guide to building RAG systems

## 🏗️ Architecture

### Core Components

- **`Agent`**: Orchestrates the entire Q&A process
- **`UrlKnowledge`**: Manages document loading from URLs
- **`LanceDb`**: Vector database for efficient similarity search

##### agentic_rag_math_agent
-- files --
README.md app benchmark config data logs rag requirements.txt 
# 🧠 Math Tutor Agent – Agentic RAG with Feedback Loop

This project implements an **Agentic-RAG architecture** to simulate a math professor that solves **JEE-level math questions** with step-by-step explanations. The system smartly routes queries between a vector database and web search, applies input/output guardrails, and incorporates human feedback for continuous learning.

## 📌 Features

- ✅ **Input Guardrails** (DSPy): Accepts only academic math questions.
- 📚 **Knowledge Base Search**: Uses **Qdrant Vector DB** with OpenAI Embeddings to match known questions.
- 🌐 **Web Fallback**: Integrates **Tavily API** when no good match is found.
- ✍️ **GPT-4.1 Explanations**: Generates step-by-step math solutions.
- 🛡️ **Output Guardrails**: Filters for correctness and safety.
- 👍 **Human-in-the-Loop Feedback**: Users rate answers (Yes/No), logged for future learning.
- 📊 **Benchmarking**: Evaluated on **JEEBench** dataset with adjustable question limits.
- 💻 **Streamlit UI**: Interactive dashboard with multiple tabs.

## 🚀 Architecture Flow
<img width="465" alt="Screenshot 2025-05-04 at 3 45 58 PM" src="https://github.com/user-attachments/assets/c0a9e612-2ef0-413c-b779-c99fe9f48619" />


## 📚 Knowledge Base

- **Dataset:** [JEEBench (HuggingFace)](https://huggingface.co/datasets/daman1209arora/jeebench)
- **Vector DB:** Qdrant (with OpenAI Embeddings)
- **Storage:** Built with `llama-index` to persist embeddings and perform top-1 similarity search

## 🌐 Web Search

- Uses **Tavily API** for fallback search when the KB doesn't contain a good match
- Fetched content is piped into **GPT-4o** for clean explanation


## 🔐 Guardrails

- **Input Guardrail (DSPy):** Accepts only math-related academic questions
- **Output Guardrail (DSPy):** Blocks hallucinated or off-topic content


## 👨‍🏫 Human-in-the-Loop Feedback

- Streamlit UI allows students to give 👍 / 👎 after seeing the answer
- Feedback is logged to a local JSON file for future improvement

## 📊 Benchmarking

- Evaluated on **50 random JEEBench Math Questions**
- **Current Accuracy:** 66%
- Benchmark results saved to: `benchmark/results.csv`


## 🚀 Demo 

To run the app with Streamlit:

```bash
streamlit run app/streamlit.py





##### agentic_rag_with_reasoning
-- files --
README.md rag_reasoning_agent.py requirements.txt 
# 🧐 Agentic RAG with Reasoning

### 🎓 FREE Step-by-Step Tutorial 
**👉 [Click here to follow our complete step-by-step tutorial](https://www.theunwindai.com/p/build-an-agentic-rag-app-with-reasoning) and learn how to build this from scratch with detailed code walkthroughs, explanations, and best practices.**

A sophisticated RAG system that demonstrates an AI agent's step-by-step reasoning process using Agno, Gemini and OpenAI. This implementation allows users to add web sources, ask questions, and observe the agent's thought process in real-time with reasoning capabilities.


## Features

1. Interactive Knowledge Base Management
- Add URLs dynamically for web content
- Default knowledge source: MCP vs A2A Protocol article
- Persistent vector database storage using LanceDB
- Session state tracking prevents duplicate URL loading


2. Transparent Reasoning Process
- Real-time display of the agent's thinking steps
- Side-by-side view of reasoning and final answer
- Clear visibility into the RAG process


3. Advanced RAG Capabilities
- Vector search using OpenAI embeddings for semantic matching
- Source attribution with citations


## Agent Configuration

- Gemini 2.5 Flash for language processing
- OpenAI embedding model for vector search
- ReasoningTools for step-by-step analysis
- Customizable agent instructions
- Default knowledge source: MCP vs A2A Protocol article

## Prerequisites

You'll need the following API keys:

1. Google API Key

- Sign up at [aistudio.google.com](https://aistudio.google.com/apikey)
- Navigate to API Keys section
- Create a new API key

2. OpenAI API Key

- Sign up at [platform.openai.com](https://platform.openai.com/)
- Navigate to API Keys section
- Generate a new API key

## How to Run

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git
    cd rag_tutorials/agentic_rag_with_reasoning
    ```

2. **Install the dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

3. **Run the Application:**
    ```bash
    streamlit run rag_reasoning_agent.py
    ```


##### agentic_typed_rag_pydanticai
-- files --
.env.example README.md agent.py app.py assets rag.py requirements.txt test_typed_rag.py 
# Typed Agentic RAG with Pydantic AI

This Streamlit app answers questions from uploaded PDFs or a documentation URL.
Every response is a validated `Answer` object with exact source quotes, chunk IDs,
a confidence score, and an `answered` decision. If retrieval is too weak, the app
refuses before calling the language model.

![Typed Agentic RAG screenshot placeholder](assets/screenshot-placeholder.svg)

## Features

- Pydantic AI `Agent`, `RunContext`, and dependency injection
- A typed `retrieve` tool with source metadata and cosine scores
- Pydantic models for answers, citations, and retrieval evidence
- Exact quote checks against indexed chunks after model output validation
- A deterministic refusal gate for out-of-corpus questions
- OpenAI or Anthropic answer models
- OpenAI embeddings with a local hashing fallback for Anthropic-only setups
- A session-scoped NumPy vector store with no database service

## How it works

1. `rag.py` extracts PDF or web text, splits it into overlapping chunks, embeds
   the chunks, and stores normalized vectors in memory.
2. `agent.py` injects the vector store through `RagDependencies`. The Pydantic AI
   agent must call the typed `retrieve` tool before producing an `Answer`.
3. A preflight search compares the best cosine score with the refusal threshold.
   Low scores return `answered=False` without an LLM request.
4. For an answered response, each citation must match a stored source, chunk ID,
   and verbatim quoted span. An invalid or missing citation becomes a refusal.
5. `app.py` renders the answer, confidence, citations, or refusal state.

When `OPENAI_API_KEY` is available, Auto mode uses Pydantic AI's OpenAI
`Embedder` with `text-embedding-3-small`. With only `ANTHROPIC_API_KEY`, Auto mode
uses the local hashing backend because Anthropic has no embeddings API. The local
backend is best for keyword-oriented demos. Select OpenAI embeddings for semantic
retrieval across paraphrases.

## Prerequisites

- Python 3.12 or newer
- An OpenAI API key or an Anthropic API key

## Setup

From the repository root:

```bash
cd rag_tutorials/agentic_typed_rag_pydanticai
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
```

Add one key to `.env`:

```text
OPENAI_API_KEY=your-key
```

or:

```text
ANTHROPIC_API_KEY=your-key
```

The default answer models are `openai:gpt-5.2` and
`anthropic:claude-sonnet-4-6`. Change the model field in the sidebar or set
`RAG_MODEL` to another Pydantic AI model string.

##### ai_blog_search
-- files --
README.md app.py requirements.txt 
# Agentic RAG with LangGraph: AI Blog Search

## Overview
AI Blog Search is an Agentic RAG application designed to enhance information retrieval from AI-related blog posts. This system leverages LangChain, LangGraph, and Google's Gemini model to fetch, process, and analyze blog content, providing users with accurate and contextually relevant answers.

## LangGraph Workflow
![LangGraph-Workflow](https://github.com/user-attachments/assets/07d8a6b5-f1ef-4b7e-b47a-4f14a192bd8a)

## Demo
https://github.com/user-attachments/assets/cee07380-d3dc-45f4-ad26-7d944ba9c32b

## Features
- **Document Retrieval:** Uses Qdrant as a vector database to store and retrieve blog content based on embeddings.
- **Agentic Query Processing:** Uses an AI-powered agent to determine whether a query should be rewritten, answered, or require more retrieval.
- **Relevance Assessment:** Implements an automated relevance grading system using Google's Gemini model.
- **Query Refinement:** Enhances poorly structured queries for better retrieval results.
- **Streamlit UI:** Provides a user-friendly interface for entering blog URLs, queries and retrieving insightful responses.
- **Graph-Based Workflow:** Implements a structured state graph using LangGraph for efficient decision-making.

## Technologies Used
- **Programming Language**: [Python 3.10+](https://www.python.org/downloads/release/python-31011/)
- **Framework**: [LangChain](https://www.langchain.com/) and [LangGraph](https://langchain-ai.github.io/langgraph/tutorials/introduction/)
- **Database**: [Qdrant](https://qdrant.tech/)
- **Models**:
  - Embeddings: [Google Gemini API (embedding-001)](https://ai.google.dev/gemini-api/docs/embeddings)
  - Chat: [Google Gemini API (gemini-2.0-flash)](https://ai.google.dev/gemini-api/docs/models/gemini#gemini-2.0-flash)
- **Blogs Loader**: [Langchain WebBaseLoader](https://python.langchain.com/docs/integrations/document_loaders/web_base/)
- **Document Splitter**: [RecursiveCharacterTextSplitter](https://python.langchain.com/v0.1/docs/modules/data_connection/document_transformers/recursive_text_splitter/)
- **User Interface (UI)**: [Streamlit](https://docs.streamlit.io/)

## Requirements
1. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

2. **Run the Application**:
   ```bash
   streamlit run app.py
   ```

3. **Use the Application**:
   - Paste your Google API Key in the sidebar.
   - Paste the blog link.
   - Enter your query about the blog post.

## :mailbox: Connect With Me
<img align="right" src="https://media.giphy.com/media/2HtWpp60NQ9CU/giphy.gif" alt="handshake gif" width="150">

<p align="left">
  <a href="https://linkedin.com/in/codewithcharan" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="codewithcharan" height="30" width="40" style="margin-right: 10px" /></a>
  <a href="https://instagram.com/joyboy._.ig" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="__mr.__.unique" height="30" width="40" /></a>
  <a href="https://twitter.com/Joyboy_x_" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="codewithcharan" height="30" width="40" style="margin-right: 10px" /></a>
</p>

<img src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=35&center=true&vCenter=true&width=500&height=70&duration=4000&lines=Thanks+for+visiting!+👋;+Message+me+on+Linkedin!;+I'm+always+down+to+collab+:)"/>
##### autonomous_rag
-- files --
README.md autorag.py requirements.txt 
# 🤖 AutoRAG: Autonomous RAG with GPT-4o and Vector Database

**🎓 FREE Step-by-Step Tutorial**

**👉 [Click here to follow our complete step-by-step tutorial](https://www.theunwindai.com/p/build-autonomous-rag-app-using-gpt-4o-and-vector-database) and learn how to build this from scratch with detailed code walkthroughs, explanations, and best practices.**

This Streamlit application implements an Autonomous Retrieval-Augmented Generation (RAG) system using OpenAI's GPT-4o model and PgVector database. It allows users to upload PDF documents, add them to a knowledge base, and query the AI assistant with context from both the knowledge base and web searches.
Features

### Freatures 
- Chat interface for interacting with the AI assistant
- PDF document upload and processing
- Knowledge base integration using PostgreSQL and Pgvector
- Web search capability using DuckDuckGo
- Persistent storage of assistant data and conversations

### How to get Started?

1. Clone the GitHub repository
```bash
git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git
cd awesome-llm-apps/rag_tutorials/autonomous_rag
```

2. Install the required dependencies:

```bash
pip install -r requirements.txt
```

3. Ensure PgVector Database is running:
The app expects PgVector to be running on [localhost:5532](http://localhost:5532/). Adjust the configuration in the code if your setup is different.

```bash
docker run -d \
  -e POSTGRES_DB=ai \
  -e POSTGRES_USER=ai \
  -e POSTGRES_PASSWORD=ai \
  -e PGDATA=/var/lib/postgresql/data/pgdata \
  -v pgvolume:/var/lib/postgresql/data \
  -p 5532:5432 \
  --name pgvector \
  phidata/pgvector:16
```

4. Run the Streamlit App
```bash
streamlit run autorag.py
```

##### contextualai_rag_agent
-- files --
README.md contextualai_rag_agent.py requirements.txt 
# Contextual AI RAG Agent

A Streamlit app that integrates Contextual AI's managed RAG platform. Create a datastore, ingest documents, spin up an agent, and chat grounded on your data.

## Features

- Document ingestion to Contextual AI datastores
- Agent creation bound to one or more datastores
- Response generation via Contextual’s Grounded Language Model (GLM) for faithful, retrieval-grounded answers
- Reranking of retrieved documents by query relevance and custom instructions (multilingual)
- Retrieval visualization (show attribution page image and metadata)
- LMUnit evaluation of answers using a custom rubric


## Prerequisites

- Contextual AI account and API key (Dashboard → API Keys)

### Generate an API key

1. Log in to your tenant at `app.contextual.ai`.
2. Click on "API Keys".
3. Click on "Create API Key".
4. Copy the key and paste it into the app sidebar when prompted.

## How to Run

1. Clone the repository and navigate to the app folder:
```bash
git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git
cd awesome-llm-apps/rag_tutorials/contextualai_rag_agent
```

2. Create and activate a virtual environment.
3. Install dependencies:
```bash
pip install -r requirements.txt
```
4. Launch the app:
```bash
streamlit run contextualai_rag_agent.py
```

## Usage

1) In the sidebar, paste your Contextual AI API key. Optionally provide an existing Agent ID and/or Datastore ID if you already have them.

2) If needed, create a new datastore. Upload PDFs or text files to ingest. The app waits until documents finish processing.

3) Create a new agent (or use an existing one) linked to the datastore.

4) Ask questions in the chat input. Responses are generated by your Contextual AI agent.

5) Optional advanced features:
   - Agent Settings: Update the agent system prompt via the UI.
   - Debug & Evaluation: Toggle retrieval info to view attributions; run LMUnit evaluation on the last answer with a custom rubric.

## Configuration Notes

- If you're on a non-US cloud instance, set the Base URL in the sidebar (e.g., `http://api.contextual.ai/v1`). The app will use this base URL for all API calls, including readiness polling.
- Retrieval visualization uses `agents.query.retrieval_info` to fetch base64 page images and displays them directly.
- LMUnit evaluation uses `lmunit.create` to score the last answer against your rubric.

##### corrective_rag
-- files --
README.md corrective_rag.py requirements.txt 
# 🔄 Corrective RAG Agent
A sophisticated Retrieval-Augmented Generation (RAG) system that implements a corrective multi-stage workflow using LangGraph. This system combines document retrieval, relevance grading, query transformation, and web search to provide comprehensive and accurate responses.

## Features

- **Smart Document Retrieval**: Uses Qdrant vector store for efficient document retrieval
- **Document Relevance Grading**: Employs Claude 4.5 sonnet to assess document relevance
- **Query Transformation**: Improves search results by optimizing queries when needed
- **Web Search Fallback**: Uses Tavily API for web search when local documents aren't sufficient
- **Multi-Model Approach**: Combines OpenAI embeddings and Claude 4.5 sonnet for different tasks
- **Interactive UI**: Built with Streamlit for easy document upload and querying

## How to Run?

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git
   cd rag_tutorials/corrective_rag
   ```

2. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Set Up API Keys**:
   You'll need to obtain the following API keys:
   - [OpenAI API key](https://platform.openai.com/api-keys) (for embeddings)
   - [Anthropic API key](https://console.anthropic.com/settings/keys) (for Claude 4.5 sonnet as LLM)
   - [Tavily API key](https://app.tavily.com/home) (for web search)
   - Qdrant Cloud Setup
      1. Visit [Qdrant Cloud](https://cloud.qdrant.io/)
      2. Create an account or sign in
      3. Create a new cluster
      4. Get your credentials:
         - Qdrant API Key: Found in API Keys section
         - Qdrant URL: Your cluster URL (format: `https://xxx-xxx.aws.cloud.qdrant.io`)

4. **Run the Application**:
   ```bash
   streamlit run corrective_rag.py
   ```

5. **Use the Application**:
   - Upload documents or provide URLs
   - Enter your questions in the query box
   - View the step-by-step Corrective RAG process
   - Get comprehensive answers

## Tech Stack

- **LangChain**: For RAG orchestration and chains
- **LangGraph**: For workflow management
- **Qdrant**: Vector database for document storage
- **Claude 4.5 sonnet**: Main language model for analysis and generation
- **OpenAI**: For document embeddings
- **Tavily**: For web search capabilities
- **Streamlit**: For the user interface

##### deepseek_local_rag_agent
-- files --
README.md deepseek_rag_agent.py requirements.txt 
# 🐋 Deepseek Local RAG Reasoning Agent 

### 🎓 FREE Step-by-Step Tutorial 
**👉 [Click here to follow our complete step-by-step tutorial](https://www.theunwindai.com/p/build-a-local-rag-reasoning-agent-with-deepseek-r1) and learn how to build this from scratch with detailed code walkthroughs, explanations, and best practices.**

A powerful reasoning agent that combines local Deepseek models with RAG capabilities. Built using Deepseek (via Ollama), Snowflake for embeddings, Qdrant for vector storage, and Agno for agent orchestration, this application offers both simple local chat and advanced RAG-enhanced interactions with comprehensive document processing and web search capabilities.

## Features

- **Dual Operation Modes**
  - Local Chat Mode: Direct interaction with Deepseek locally
  - RAG Mode: Enhanced reasoning with document context and web search integration - llama3.2

- **Document Processing** (RAG Mode)
  - PDF document upload and processing
  - Web page content extraction
  - Automatic text chunking and embedding
  - Vector storage in Qdrant cloud

- **Intelligent Querying** (RAG Mode)
  - RAG-based document retrieval
  - Similarity search with threshold filtering
  - Automatic fallback to web search
  - Source attribution for answers

- **Advanced Capabilities**
  - Exa AI web search integration
  - Custom domain filtering for web search
  - Context-aware response generation
  - Chat history management
  - Thinking process visualization

- **Model Specific Features**
  - Flexible model selection:
    - Deepseek r1 1.5b (lighter, suitable for most laptops)
    - Deepseek r1 7b (more capable, requires better hardware)
  - Snowflake Arctic Embedding model (SOTA) for vector embeddings
  - Agno Agent framework for orchestration
  - Streamlit-based interactive interface

## Prerequisites

### 1. Ollama Setup
1. Install [Ollama](https://ollama.ai)
2. Pull the Deepseek r1 model(s):
```bash
# For the lighter model
ollama pull deepseek-r1:1.5b

# For the more capable model (if your hardware supports it)
ollama pull deepseek-r1:7b

ollama pull snowflake-arctic-embed
ollama pull llama3.2
```

### 2. Qdrant Cloud Setup (for RAG Mode)
1. Visit [Qdrant Cloud](https://cloud.qdrant.io/)
2. Create an account or sign in
3. Create a new cluster
4. Get your credentials:
   - Qdrant API Key: Found in API Keys section
   - Qdrant URL: Your cluster URL (format: `https://xxx-xxx.cloud.qdrant.io`)

### 3. Exa AI API Key (Optional)
1. Visit [Exa AI](https://exa.ai)
2. Sign up for an account
3. Generate an API key for web search capabilities

## How to Run

##### gemini_agentic_rag
-- files --
README.md agentic_rag_gemini.py requirements.txt 
# 🤔 Agentic RAG with Gemini Flash Thinking

A RAG Agentic system built with the new Gemini 2.0 Flash Thinking model and gemini-exp-1206, Qdrant for vector storage, and Agno (phidata prev) for agent orchestration. This application features intelligent query rewriting, document processing, and web search fallback capabilities to provide comprehensive AI-powered responses.

## Features

- **Document Processing**
  - PDF document upload and processing
  - Web page content extraction
  - Automatic text chunking and embedding
  - Vector storage in Qdrant cloud

- **Intelligent Querying**
  - Query rewriting for better retrieval
  - RAG-based document retrieval
  - Similarity search with threshold filtering
  - Automatic fallback to web search
  - Source attribution for answers

- **Advanced Capabilities**
  - Exa AI web search integration
  - Custom domain filtering for web search
  - Context-aware response generation
  - Chat history management
  - Query reformulation agent

- **Model Specific Features**
  - Gemini Thinking 2.0 Flash for chat and reasoning
  - Gemini Embedding model for vector embeddings
  - Agno Agent framework for orchestration
  - Streamlit-based interactive interface

## Prerequisites

### 1. Google API Key
1. Go to [Google AI Studio](https://aistudio.google.com/apikey)
2. Sign up or log in to your account
3. Create a new API key

### 2. Qdrant Cloud Setup
1. Visit [Qdrant Cloud](https://cloud.qdrant.io/)
2. Create an account or sign in
3. Create a new cluster
4. Get your credentials:
   - Qdrant API Key: Found in API Keys section
   - Qdrant URL: Your cluster URL (format: `https://xxx-xxx.cloud.qdrant.io`)

### 3. Exa AI API Key (Optional)
1. Visit [Exa AI](https://exa.ai)
2. Sign up for an account
3. Generate an API key for web search capabilities

## How to Run

1. Clone the repository:
```bash
git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git
cd rag_tutorials/gemini_agentic_rag
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the application:
```bash
streamlit run agentic_rag_gemini.py
```


##### hybrid_search_rag
-- files --
README.md main.py requirements.txt 
# 👀 RAG App with Hybrid Search 

A powerful document Q&A application that leverages Hybrid Search (RAG) and Claude's advanced language capabilities to provide comprehensive answers. Built with RAGLite for robust document processing and retrieval, and Streamlit for an intuitive chat interface, this system seamlessly combines document-specific knowledge with Claude's general intelligence to deliver accurate and contextual responses.

## Features

- **Hybrid Search Question Answering**
    - RAG-based answers for document-specific queries
    - Fallback to Claude for general knowledge questions

- **Document Processing**:
  - PDF document upload and processing
  - Automatic text chunking and embedding
  - Hybrid search combining semantic and keyword matching
  - Reranking for better context selection

- **Multi-Model Integration**:
  - Claude for text generation - tested with Claude 3 Opus 
  - OpenAI for embeddings - tested with text-embedding-3-large
  - Cohere for reranking - tested with Cohere 3.5 reranker

## Prerequisites

You'll need the following API keys and database setup:

1. **Database**: Create a free PostgreSQL database at [Neon](https://neon.tech):
   - Sign up/Login at Neon
   - Create a new project
   - Copy the connection string (looks like: `postgresql://user:pass@ep-xyz.region.aws.neon.tech/dbname`)

2. **API Keys**:
   - [OpenAI API key](https://platform.openai.com/api-keys) for embeddings
   - [Anthropic API key](https://console.anthropic.com/settings/keys) for Claude
   - [Cohere API key](https://dashboard.cohere.com/api-keys) for reranking

## How to get Started?

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git
   cd awesome-llm-apps/rag_tutorials/hybrid_search_rag
   ```

2. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Install spaCy Model**:
   ```bash
   pip install https://github.com/explosion/spacy-models/releases/download/xx_sent_ud_sm-3.7.0/xx_sent_ud_sm-3.7.0-py3-none-any.whl
   ```

4. **Run the Application**:
   ```bash
   streamlit run main.py
   ```

## Usage

1. Start the application
2. Enter your API keys in the sidebar:
   - OpenAI API key
   - Anthropic API key
   - Cohere API key
   - Database URL (optional, defaults to SQLite)
3. Click "Save Configuration"
4. Upload PDF documents
5. Start asking questions!
   - Document-specific questions will use RAG

##### knowledge_graph_rag_citations
-- files --
Dockerfile README.md docker-compose.yml knowledge_graph_rag.py requirements.txt 
# 🔍 Knowledge Graph RAG with Verifiable Citations

A Streamlit application demonstrating how **Knowledge Graph-based Retrieval-Augmented Generation (RAG)** provides multi-hop reasoning with fully verifiable source attribution.

## 🎯 What Makes This Different?

Traditional vector-based RAG finds similar text chunks, but struggles with:
- Questions requiring information from multiple documents
- Complex reasoning chains
- Providing verifiable sources for each claim

**Knowledge Graph RAG** solves these by:
1. **Building a structured graph** of entities and relationships from documents
2. **Traversing connections** to find related information (multi-hop reasoning)
3. **Tracking provenance** so every claim links back to its source

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔗 **Multi-hop Reasoning** | Traverse entity relationships to answer complex questions |
| 📚 **Verifiable Citations** | Every claim includes source document and text |
| 🧠 **Reasoning Trace** | See exactly how the answer was derived |
| 🏠 **Fully Local** | Uses Ollama for LLM, Neo4j for graph storage |

## 🚀 Quick Start

### Prerequisites

1. **Ollama** - Local LLM inference
   ```bash
   # Install from https://ollama.ai
   ollama pull llama3.2
   ```

2. **Neo4j** - Knowledge graph database
   ```bash
   # Using Docker
   docker run -d \
     --name neo4j \
     -p 7474:7474 -p 7687:7687 \
     -e NEO4J_AUTH=neo4j/password \
     neo4j:latest
   ```

### Installation

```bash
# Clone and navigate
cd knowledge_graph_rag_citations

# Install dependencies
pip install -r requirements.txt

# Run the app
streamlit run knowledge_graph_rag.py
```

## 📖 How It Works

### Step 1: Document → Knowledge Graph

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   Document      │ ──► │  LLM Extraction  │ ──► │ Knowledge Graph │
│   (Text/PDF)    │     │  (Entities+Rels) │     │    (Neo4j)      │
└─────────────────┘     └──────────────────┘     └─────────────────┘
```

The LLM extracts:

##### llama3.1_local_rag
-- files --
README.md llama3.1_local_rag.py requirements.txt 
## 💻 Local Lllama-3.1 with RAG
Streamlit app that allows you to chat with any webpage using local Llama-3.1 and Retrieval Augmented Generation (RAG). This app runs entirely on your computer, making it 100% free and without the need for an internet connection.


### Features
- Input a webpage URL
- Ask questions about the content of the webpage
- Get accurate answers using RAG and the Llama-3.1 model running locally on your computer

### How to get Started?

1. Clone the GitHub repository

```bash
git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git
cd awesome-llm-apps/rag_tutorials/llama3.1_local_rag
```
2. Install the required dependencies:

```bash
pip install -r requirements.txt
```
3. Run the Streamlit App
```bash
streamlit run llama3.1_local_rag.py
```

### How it Works?

- The app loads the webpage data using WebBaseLoader and splits it into chunks using RecursiveCharacterTextSplitter.
- It creates Ollama embeddings and a vector store using Chroma.
- The app sets up a RAG (Retrieval-Augmented Generation) chain, which retrieves relevant documents based on the user's question.
- The Llama-3.1 model is called to generate an answer using the retrieved context.
- The app displays the answer to the user's question.


##### local_hybrid_search_rag
-- files --
README.md local_main.py requirements.txt 
# 🖥️ Local RAG App with Hybrid Search

A powerful document Q&A application that leverages Hybrid Search (RAG) and local LLMs for comprehensive answers. Built with RAGLite for robust document processing and retrieval, and Streamlit for an intuitive chat interface, this system combines document-specific knowledge with local LLM capabilities to deliver accurate and contextual responses.

## Demo:


https://github.com/user-attachments/assets/375da089-1ab9-4bf4-b6f3-733f44e47403


## Quick Start

For immediate testing, use these tested model configurations:
```bash
# LLM Model
bartowski/Llama-3.2-3B-Instruct-GGUF/Llama-3.2-3B-Instruct-Q4_K_M.gguf@4096

# Embedder Model
lm-kit/bge-m3-gguf/bge-m3-Q4_K_M.gguf@1024
```
These models offer a good balance of performance and resource usage, and have been verified to work well together even on a MacBook Air M2 with 8GB RAM.

## Features

- **Local LLM Integration**:
  - Uses llama-cpp-python models for local inference
  - Supports various quantization formats (Q4_K_M recommended)
  - Configurable context window sizes

- **Document Processing**:
  - PDF document upload and processing
  - Automatic text chunking and embedding
  - Hybrid search combining semantic and keyword matching
  - Reranking for better context selection

- **Multi-Model Integration**:
  - Local LLM for text generation (e.g., Llama-3.2-3B-Instruct)
  - Local embeddings using BGE models
  - FlashRank for local reranking

## Prerequisites

1. **Install spaCy Model**:
   ```bash
   pip install https://github.com/explosion/spacy-models/releases/download/xx_sent_ud_sm-3.7.0/xx_sent_ud_sm-3.7.0-py3-none-any.whl
   ```

2. **Install Accelerated llama-cpp-python** (Optional but recommended):
   ```bash
   # Configure installation variables
   LLAMA_CPP_PYTHON_VERSION=0.3.2
   PYTHON_VERSION=310 # 3.10, 3.11, 3.12
   ACCELERATOR=metal  # For Mac
   # ACCELERATOR=cu121  # For NVIDIA GPU
   PLATFORM=macosx_11_0_arm64  # For Mac
   # PLATFORM=linux_x86_64  # For Linux
   # PLATFORM=win_amd64  # For Windows

   # Install accelerated version
   pip install "https://github.com/abetlen/llama-cpp-python/releases/download/v$LLAMA_CPP_PYTHON_VERSION-$ACCELERATOR/llama_cpp_python-$LLAMA_CPP_PYTHON_VERSION-cp$PYTHON_VERSION-cp$PYTHON_VERSION-$PLATFORM.whl"
   ```

3. **Install Dependencies**:
   ```bash
   git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git
   cd awesome-llm-apps/rag_tutorials/local_hybrid_search_rag
   pip install -r requirements.txt
   ```

## Model Setup

##### local_rag_agent
-- files --
README.md local_rag_agent.py requirements.txt 
## 🦙 Local RAG Agent with Llama 3.2

### 🎓 FREE Step-by-Step Tutorial 
**👉 [Click here to follow our complete step-by-step tutorial](https://www.theunwindai.com/p/build-a-local-rag-agent) and learn how to build this from scratch with detailed code walkthroughs, explanations, and best practices.**

This application implements a Retrieval-Augmented Generation (RAG) system using Llama 3.2 via Ollama, with Qdrant as the vector database. Built with Agno v2.0.


### Features
- Fully local RAG implementation
- Powered by Llama 3.2 through Ollama
- Vector search using Qdrant
- Interactive AgentOS interface
- No external API dependencies
- Uses Agno v2.0 Knowledge class for document management

### How to get Started?

1. Clone the GitHub repository
```bash
git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git
```

2. Install the required dependencies:

```bash
cd awesome-llm-apps/rag_tutorials/local_rag_agent
pip install -r requirements.txt
```

3. Install and start [Qdrant](https://qdrant.tech/) vector database locally

```bash
docker pull qdrant/qdrant
docker run -p 6333:6333 qdrant/qdrant
```

4. Install [Ollama](https://ollama.com/download) and pull Llama 3.2 for LLM and OpenHermes as the embedder for OllamaEmbedder
```bash
ollama pull llama3.2
ollama pull openhermes
```

5. Run the AI RAG Agent 
```bash
python local_rag_agent.py
```

6. Open your web browser and navigate to the URL provided in the console output (typically `http://localhost:7777`) to interact with the RAG agent through the AgentOS interface.

### Note
- The knowledge base loads a Thai Recipes PDF on the first run. You can comment out the `knowledge_base.add_content()` line after the first run to avoid reloading.
- The AgentOS interface provides a web-based UI for interacting with your agent.



##### multimodal_agentic_rag
-- files --
README.md assets backend frontend 
# Multimodal Agentic RAG

This is a multimodal RAG app built with Gemini Embedding 2 and Google ADK. Add text, URLs, PDFs, images, audio, or video; ask a question; and get a grounded answer with clear citations.

The UI includes a 3D embedding view for inspecting the search space. Each source appears as one point. When you ask a question, the query is projected into the same space and the cited sources are highlighted.

![Architecture diagram](assets/multimodal-agentic-rag-architecture.png)

## What It Does

- Adds and removes multimodal sources from a local in-memory index.
- Uses Gemini Embedding 2 for source and query embeddings.
- Requires `GOOGLE_API_KEY`; the app does not use local vector or answer fallbacks.
- Retrieves evidence with cosine similarity over the stored embeddings.
- Runs a Google ADK agent to coordinate answer generation from the retrieved context.
- Shows citations separately from the answer text so citation IDs do not clutter the response.
- Projects source and query vectors into a 3D PCA view for inspection.

## Architecture

| Layer | Role |
| --- | --- |
| React + Vite frontend | Source manager, Q&A panel, citations, trace, and 3D embedding view |
| FastAPI backend | Ingestion, retrieval, answer API, and embedding-space snapshots |
| `MultimodalRagStore` | In-memory source metadata, chunks, embeddings, search, and PCA projection |
| Gemini Embedding 2 | Source and query embeddings across supported modalities |
| Google ADK agent | Answer coordinator that receives the same retrieval packet shown in the UI |

The important implementation detail is that `/ask` performs retrieval once and passes that same retrieval packet into the ADK answer flow. The answer and the citation panel are therefore based on the same ranked evidence.

## Project Structure

```text
rag_tutorials/multimodal_agentic_rag/
|-- README.md
|-- assets/
|   `-- multimodal-agentic-rag-architecture.png
|-- backend/
|   |-- app_state.py
|   |-- rag_store.py
|   |-- requirements.txt
|   |-- server.py
|   `-- agentic_rag_agent/
|       |-- __init__.py
|       `-- agent.py
`-- frontend/
    |-- index.html
    |-- package.json
    |-- src/
    |   |-- App.tsx
    |   |-- main.tsx
    |   `-- styles.css
    |-- tsconfig.json
    `-- vite.config.ts
```

## Run Locally

Start the backend:

```bash
cd rag_tutorials/multimodal_agentic_rag/backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
export GOOGLE_API_KEY="your-google-ai-studio-key"
python server.py
```

The backend runs at:

##### qwen_local_rag
-- files --
README.md qwen_local_rag_agent.py requirements.txt 
# 🐋 Qwen 3 Local RAG Reasoning Agent

This RAG Application demonstrates how to build a powerful Retrieval-Augmented Generation (RAG) system using locally running Qwen 3 and Gemma 3 models via Ollama. It combines document processing, vector search, and web search capabilities to provide accurate, context-aware responses to user queries. Built with Agno v2.0.

## Features

- **🧠 Multiple Local LLM Options**:

  - Qwen3 (1.7b, 8b) - Alibaba's latest language models
  - Gemma3 (1b, 4b) - Google's efficient language models with multimodal capabilities
  - DeepSeek (1.5b) - Alternative model option
- **📚 Comprehensive RAG System**:

  - Upload and process PDF documents
  - Extract content from web URLs
  - Intelligent chunking and embedding
  - Similarity search with adjustable threshold
- **🌐 Web Search Integration**:

  - Fallback to web search when document knowledge is insufficient
  - Configurable domain filtering
  - Source attribution in responses
- **🔄 Flexible Operation Modes**:

  - Toggle between RAG and direct LLM interaction
  - Force web search when needed
  - Adjust similarity thresholds for document retrieval
- **💾 Vector Database Integration**:

  - Qdrant vector database for efficient similarity search
  - Persistent storage of document embeddings
- **🔧 Agno v2.0 Framework**:

  - Uses Agno v2.0 Knowledge embedder system
  - Debug mode for enhanced development experience
  - Modern agent architecture with improved tool integration

## How to Get Started

### Prerequisites

- [Ollama](https://ollama.ai/) installed locally
- Python 3.8+
- Qdrant running locally (via Docker) for vector storage
- Exa API key (optional, for web search capability)
- Agno v2.0 installed

### Installation

1. Clone the GitHub repository

```bash
git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git
cd rag_tutorials/qwen_local_rag
```

2. Install the required dependencies:

```bash
pip install -r requirements.txt
```

3. Pull the required models using Ollama:

```bash
ollama pull qwen3:1.7b # Or any other model you want to use
ollama pull snowflake-arctic-embed # For embeddings
```

4. Run Qdrant locally through Docker:

##### rag-as-a-service
-- files --
README.md rag_app.py requirements.txt 
## 🖇️ RAG-as-a-Service with Claude 3.5 Sonnet

Build and deploy a production-ready Retrieval-Augmented Generation (RAG) service using Claude 3.5 Sonnet and Ragie.ai. This implementation allows you to create a document querying system with a user-friendly Streamlit interface in less than 50 lines of Python code.

### Features
- Production-ready RAG pipeline
- Integration with Claude 3.5 Sonnet for response generation
- Document upload from URLs
- Real-time document querying
- Support for both fast and accurate document processing modes

### How to get Started?

1. Clone the GitHub repository
```bash
git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git
cd awesome-llm-apps/rag_tutorials/rag-as-a-service
```

2. Install the required dependencies:

```bash
pip install -r requirements.txt
```

3. Get your Anthropic API and Ragie API Key

- Sign up for an [Anthropic account](https://console.anthropic.com/) and get your API key
- Sign up for an [Ragie account](https://www.ragie.ai/) and get your API key

4. Run the Streamlit app
```bash
streamlit run rag_app.py
```
##### rag_agent_cohere
-- files --
README.md rag_agent_cohere.py requirements.txt 
# RAG Agent with Cohere ⌘R 

A RAG Agentic system built with Cohere's new model Command-r7b-12-2024, Qdrant for vector storage, Langchain for RAG and LangGraph for orchestration. This application allows users to upload documents, ask questions about them, and get AI-powered responses with fallback to web search when needed.

## Features

- **Document Processing**
  - PDF document upload and processing
  - Automatic text chunking and embedding
  - Vector storage in Qdrant cloud

- **Intelligent Querying**
  - RAG-based document retrieval
  - Similarity search with threshold filtering
  - Automatic fallback to web search when no relevant documents found
  - Source attribution for answers

- **Advanced Capabilities**
  - DuckDuckGo web search integration
  - LangGraph agent for web research
  - Context-aware response generation
  - Long answer summarization

- **Model Specific Features**
  - Command-r7b-12-2024 model for Chat and RAG
  - cohere embed-english-v3.0 model for embeddings
  - create_react_agent function from langgraph 
  - DuckDuckGoSearchRun tool for web search

## Prerequisites

### 1. Cohere API Key
1. Go to [Cohere Platform](https://dashboard.cohere.ai/api-keys)
2. Sign up or log in to your account
3. Navigate to API Keys section
4. Create a new API key

### 2. Qdrant Cloud Setup
1. Visit [Qdrant Cloud](https://cloud.qdrant.io/)
2. Create an account or sign in
3. Create a new cluster
4. Get your credentials:
   - Qdrant API Key: Found in API Keys section
   - Qdrant URL: Your cluster URL (format: `https://xxx-xxx.aws.cloud.qdrant.io`)


## How to Run

1. Clone the repository:
```bash
git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git
cd rag_tutorials/rag_agent_cohere
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

```bash
streamlit run rag_agent_cohere.py
```



##### rag_chain
-- files --
README.md app.py requirements.txt 
# PharmaQuery

## Overview
PharmaQuery is an advanced Pharmaceutical Insight Retrieval System designed to help users gain meaningful insights from research papers and documents in the pharmaceutical domain.

## Demo
https://github.com/user-attachments/assets/c12ee305-86fe-4f71-9219-57c7f438f291

## Features
- **Natural Language Querying**: Ask complex questions about the pharmaceutical industry and get concise, accurate answers.
- **Custom Database**: Upload your own research documents to enhance the retrieval system's knowledge base.
- **Similarity Search**: Retrieves the most relevant documents for your query using AI embeddings.
- **Streamlit Interface**: User-friendly interface for queries and document uploads.

## Technologies Used
- **Programming Language**: [Python 3.10+](https://www.python.org/downloads/release/python-31011/)
- **Framework**: [LangChain](https://www.langchain.com/)
- **Database**: [ChromaDB](https://www.trychroma.com/)
- **Models**:
  - Embeddings: [Google Gemini API (embedding-001)](https://ai.google.dev/gemini-api/docs/embeddings)
  - Chat: [Google Gemini API (gemini-1.5-pro)](https://ai.google.dev/gemini-api/docs/models/gemini#gemini-1.5-pro)
- **PDF Processing**: [PyPDFLoader](https://python.langchain.com/docs/integrations/document_loaders/pypdfloader/)
- **Document Splitter**: [SentenceTransformersTokenTextSplitter](https://python.langchain.com/api_reference/text_splitters/sentence_transformers/langchain_text_splitters.sentence_transformers.SentenceTransformersTokenTextSplitter.html)

## Requirements
1. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

2. **Run the Application**:
   ```bash
   streamlit run app.py
   ```

3. **Use the Application**:
   - Paste your Google API Key in the sidebar.
   - Enter your query in the main interface.
   - Optionally, upload research papers in the sidebar to enhance the database.

## :mailbox: Connect With Me
<img align="right" src="https://media.giphy.com/media/2HtWpp60NQ9CU/giphy.gif" alt="handshake gif" width="150">

<p align="left">
  <a href="https://linkedin.com/in/codewithcharan" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="codewithcharan" height="30" width="40" style="margin-right: 10px" /></a>
  <a href="https://instagram.com/joyboy._.ig" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="__mr.__.unique" height="30" width="40" /></a>
  <a href="https://twitter.com/Joyboy_x_" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="codewithcharan" height="30" width="40" style="margin-right: 10px" /></a>
</p>
##### rag_database_routing
-- files --
README.md rag_database_routing.py requirements.txt 
# 📠 RAG Agent with Database Routing

### 🎓 FREE Step-by-Step Tutorial 
**👉 [Click here to follow our complete step-by-step tutorial](https://www.theunwindai.com/p/build-a-rag-agent-with-database-routing) and learn how to build this from scratch with detailed code walkthroughs, explanations, and best practices.**

A Streamlit application that demonstrates an advanced implementation of RAG Agent with intelligent query routing. The system combines multiple specialized databases with smart fallback mechanisms to ensure reliable and accurate responses to user queries.

## Features

- **Document Upload**: Users can upload multiple PDF documents related to a particular company. These documents are processed and stored in one of the three databases: Product Information, Customer Support & FAQ, or Financial Information.
  
- **Natural Language Querying**: Users can ask questions in natural language. The system automatically routes the query to the most relevant database using a agno agent as the router.

- **RAG Orchestration**: Utilizes Langchain for orchestrating the retrieval augmented generation process, ensuring that the most relevant information is retrieved and presented to the user.

- **Fallback Mechanism**: If no relevant documents are found in the databases, a LangGraph agent with a DuckDuckGo search tool is used to perform web research and provide an answer.

## How to Run?

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git
   cd rag_tutorials/rag_database_routing
   ```

2. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the Application**:
   ```bash
   streamlit run rag_database_routing.py
   ```

4. **Get OpenAI API Key**: Obtain an OpenAI API key and set it in the application. This is required for initializing the language models used in the application.

5. **Setup Qdrant Cloud** 
- Visit [Qdrant Cloud](https://cloud.qdrant.io/)
- Create an account or sign in
- Create a new cluster
- Get your credentials:
   - Qdrant API Key: Found in API Keys section
   - Qdrant URL: Your cluster URL (format: https://xxx-xxx.aws.cloud.qdrant.io)

5. **Upload Documents**: Use the document upload section to add PDF documents to the desired database.

6. **Ask Questions**: Enter your questions in the query section. The application will route your question to the appropriate database and provide an answer.

## Technologies Used

- **Langchain**: For RAG orchestration, ensuring efficient retrieval and generation of information.
- **Agno Agent**: Used as the router agent to determine the most relevant database for a given query.
- **LangGraph Agent**: Acts as a fallback mechanism, utilizing DuckDuckGo for web research when necessary.
- **Streamlit**: Provides a user-friendly interface for document upload and querying.
- **Qdrant**: Used for managing the databases, storing and retrieving document embeddings efficiently.

## How It Works?

**1. Query Routing**
The system uses a three-stage routing approach:
- Vector similarity search across all databases
- LLM-based routing for ambiguous queries
- Web search fallback for unknown topics

**2. Document Processing**
- Automatic text extraction from PDFs
- Smart text chunking with overlap
- Vector embedding generation
- Efficient database storage

##### rag_failure_diagnostics_clinic
-- files --
.gitignore README.md rag_failure_diagnostics_clinic.py requirements.txt 
# RAG Failure Diagnostics Clinic

A small, framework-agnostic **RAG failure diagnostics clinic**.

You paste a real bug description from your LLM + RAG pipeline.  
The script asks an LLM to classify the failure into one of several **reusable patterns**
and suggests a **minimal structural fix** (not just “add more context” or “try a better model”).

The goal is to show a pattern-driven way to debug RAG incidents that can be
adapted to any stack: LangChain, LlamaIndex, custom microservices, or in-house infra.

---

## What you will learn

By running this example, you will learn how to:

- Describe **real-world RAG bugs** in plain text so an LLM can reason about them.
- Use a small library of **failure patterns** to triage incidents quickly.
- Ask the model to propose **minimal structural changes** instead of pure prompt tweaks.
- Call an **OpenAI-compatible API** from a small Python script.
- Save each diagnosis into a JSON report for later analysis or post-mortems.

This is not a full framework.  
It is a compact **clinic app** that demonstrates a pattern you can adapt in your own stacks.

---

## Folder structure

This tutorial expects the following files in `rag_tutorials/rag_failure_diagnostics_clinic`:

- `README.md` ← this file  
- `rag_failure_diagnostics_clinic.py` ← minimal interactive CLI script  
- `requirements.txt` ← Python dependencies  

The script is completely self-contained.  
All pattern definitions and prompts live inside this folder.

---

## Failure patterns (P01–P12)

The clinic uses a small, opinionated set of **12 reusable failure patterns**.
Each bug is mapped to exactly one primary pattern, with optional secondary candidates.

You can modify or extend these patterns to match your own production incidents.

| ID   | Pattern name                                          | Typical symptom                                                |
| ---- | ----------------------------------------------------- | -------------------------------------------------------------- |
| P01  | Retrieval hallucination / grounding drift             | Answer confidently contradicts retrieved documents.            |
| P02  | Chunk boundary or segmentation bug                    | Relevant facts are split or truncated across chunks.           |
| P03  | Embedding mismatch / semantic vs vector distance      | Cosine similarity does not match true relevance.               |
| P04  | Index skew or staleness                               | Old or missing data even though source of truth is updated.    |
| P05  | Query rewriting or router misalignment                | Router sends queries to the wrong tool or dataset.             |
| P06  | Long-chain reasoning drift                            | Multi-step tasks gradually lose track of earlier constraints.  |
| P07  | Tool-call misuse or ungrounded tools                  | Tools are called with wrong arguments or without grounding.    |
| P08  | Session memory leak / missing context                 | Conversation loses important facts between turns or sessions.  |
| P09  | Evaluation blind spots                                | System passes tests but fails on real incidents.               |
| P10  | Startup ordering / dependency not ready               | Services crash or 5xx during the first minutes after deploy.   |
| P11  | Config or secrets drift across environments           | Works locally, breaks only in staging / prod due to settings.  |
| P12  | Multi-tenant / multi-agent interference               | Requests or agents step on each other’s state or resources.    |

The built-in examples roughly correspond to:

- Example 1 → retrieval hallucination / grounding drift (P01 style).  
- Example 2 → startup ordering / dependency not ready (P10 style).  
- Example 3 → config or secrets drift across environments (P11 style).

You are encouraged to replace these with your own incident snippets.

##### vision_rag
-- files --
README.md requirements.txt vision_rag.py 
# Vision RAG with Cohere Embed-4 🖼️

A powerful visual Retrieval-Augmented Generation (RAG) system that utilizes Cohere's state-of-the-art Embed-4 model for multimodal embedding and Google's efficient Gemini 2.5 Flash model for answering questions about images and PDF pages.

## Features

- **Multimodal Search**: Leverages Cohere Embed-4 to find the most semantically relevant image (or PDF page image) for a given text question.
- **Visual Question Answering**: Employs Google Gemini 2.5 Flash to analyze the content of the retrieved image/page and generate accurate, context-aware answers.
- **Flexible Content Sources**: 
    - Use pre-loaded sample financial charts and infographics.
    - Upload your own custom images (PNG, JPG, JPEG).
    - **Upload PDF documents**: Automatically extracts pages as images for analysis.
- **No OCR Required**: Directly processes complex images and visual elements within PDF pages without needing separate text extraction steps.
- **Interactive UI**: Built with Streamlit for easy interaction, including content loading, question input, and result display.
- **Session Management**: Remembers loaded/uploaded content (images and processed PDF pages) within a session.

## Requirements

- Python 3.8+
- Cohere API key
- Google Gemini API key

## How to Run

Follow these steps to set up and run the application:

1.  **Clone and Navigate to Directory** :
    ```bash
    git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git
    cd awesome-llm-apps/rag_tutorials/vision_rag
    ```

2.  **Install Dependencies**:
    ```bash
    pip install -r requirements.txt
    ```
    *(Ensure you have the latest `PyMuPDF` installed along with other requirements)*

3.  **Set up your API keys**:
    - Get a Cohere API key from: [https://dashboard.cohere.com/api-keys](https://dashboard.cohere.com/api-keys)
    - Get a Google API key from: [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)

4.  **Run the Streamlit app**:
    ```bash
    streamlit run vision_rag.py
    ```

5.  **Access the Web Interface**:
    - Streamlit will provide a local URL (usually `http://localhost:8501`) in your terminal.
    - Open this URL in your web browser.

## How It Works

The application follows a two-stage RAG process:

1.  **Retrieval**: 
    - When you load sample images or upload your own images/PDFs:
        - Regular images are converted to base64 strings.
        - **PDFs are processed page by page**: Each page is rendered as an image, saved temporarily, and converted to a base64 string.
    - Cohere's `embed-v4.0` model (with `input_type="search_document"`) is used to generate a dense vector embedding for each image or PDF page image.
    - When you ask a question, the text query is embedded using the same `embed-v4.0` model (with `input_type="search_query"`).
    - Cosine similarity is calculated between the question embedding and all image embeddings.
    - The image with the highest similarity score (which could be a regular image or a specific PDF page image) is retrieved as the most relevant context.

2.  **Generation**:
    - The original text question and the retrieved image/page image are passed as input to the Google `gemini-2.5-flash-preview-04-17` model.
    - Gemini analyzes the image content in the context of the question and generates a textual answer.

## Usage


