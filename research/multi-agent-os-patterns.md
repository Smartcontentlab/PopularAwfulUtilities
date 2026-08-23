# Multi-Agent Operating System: Open-Source Patterns

**Research date:** August 23, 2026  
**Scope:** Personal orchestration for OpenClaw, Hermes, agent workforces, skills, projects, and Obsidian-backed memory.

## Recommendation

Build the product around a **chief agent inside a project workspace**, not a global chat plus a collection of dashboards. The chief agent should translate the operator’s request into an inspectable plan, create named workers with bounded responsibilities, keep a visible parent/child task graph, and pause on approvals. This combines Hermes’ reusable orchestration engine and profile scoping with the manager/worker visibility described by HiClaw and the resumable approval pattern in the OpenAI Agents SDK. [Hermes Architecture](https://hermes-agent.nousresearch.com/docs/developer-guide/architecture) · [HiClaw](https://github.com/agentscope-ai/hiclaw) · [OpenAI human-in-the-loop](https://openai.github.io/openai-agents-python/human_in_the_loop)

## Product model to carry into the design

| Product object | Why it belongs in the OS | Pattern sources |
|---|---|---|
| **Project** | Keeps agent membership, runs, files, approvals, budgets, and memory scope together. | [OpenAgents](https://github.com/openagents-org/openagents), [Hermes memory providers](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/features/memory-providers.md), [Langfuse](https://github.com/langfuse/langfuse) |
| **Chief agent** | Owns the plan, task graph, delegation, escalation, and final synthesis; it should be conversational but never opaque. | [Hermes](https://hermes-agent.nousresearch.com/docs/developer-guide/architecture), [HiClaw](https://github.com/agentscope-ai/hiclaw), [supervisor-worker reference](https://github.com/Paul-Orlando/ai-agent-team-supervisor-pattern) |
| **Workforce** | Makes roles, handoffs, dependencies, retry limits, budgets, tools, and recovery posture visible. | [CrewAI](https://github.com/crewAIInc/crewAI), [LangGraph](https://github.com/langchain-ai/langgraph), [Open Multi-Agent](https://github.com/open-multi-agent/open-multi-agent) |
| **Skill** | Needs discoverability plus compatibility, version, scope, provenance, permission review, updates, and rollback—not merely an install button. | [Skills Registry](https://github.com/opendatahub-io/skills-registry), [skills-cli](https://github.com/antfu/skills-cli), [MCP Registry](https://github.com/modelcontextprotocol/registry) |
| **Memory connection** | Keeps the user’s Markdown vault readable and authoritative while agents access scoped read/search/write tools. | [Open Second Brain](https://github.com/itechmeat/open-second-brain), [obsidian-mcp-server](https://github.com/cyanheads/obsidian-mcp-server), [Obsidian API](https://github.com/obsidianmd/obsidian-api) |

## Strong references to evaluate

- **Hermes Agent** — closest fit for the user’s requested runtime because it documents one orchestration engine, delegation, profiles, and local session lineage. Use its profile isolation as a product clue, not a complete security boundary. [Repository](https://github.com/NousResearch/hermes-agent)
- **LangGraph** — strong reference for durable execution, human state inspection, and recoverable agent runs. [Repository](https://github.com/langchain-ai/langgraph)
- **CrewAI** — strong reference for legible role/task/crew composition. [Repository](https://github.com/crewAIInc/crewAI)
- **HiClaw / AgentTeams** — useful model for a human-visible manager and worker collaboration surface. [Repository](https://github.com/agentscope-ai/hiclaw)
- **OpenAgents** — useful project/workspace model for shared threads, files, browser controls, and lifecycle status. [Repository](https://github.com/openagents-org/openagents)
- **Open Second Brain** — promising Markdown-first, local-first connection for a human-owned Obsidian memory layer. [Repository](https://github.com/itechmeat/open-second-brain)
- **obsidian-mcp-server** — practical tool surface for scoped vault search/read/write via the Local REST API. [Repository](https://github.com/cyanheads/obsidian-mcp-server)
- **skills-cli** — useful experience reference for target-agent selection, canonical copies, lockfiles, updates, and install scope. [Repository](https://github.com/antfu/skills-cli)

## Design consequences

1. **Chief agent home:** prioritize an approachable conversation and a legible “what I’m doing for you” plan, with approvals and active worker status always nearby.
2. **Workforce builder:** make every worker’s role, access, budget, assigned outcome, and dependency understandable before launch.
3. **Skill library:** show trust, compatibility, install destination, access request, version, and update/rollback state before installing.
4. **Projects:** use a clear project switcher and make isolation visible, especially for memory and permissions.
5. **Obsidian memory:** show the vault path, project scope, current index health, read/search access, proposed writes, source links, and conflict posture.
6. **Trust controls:** give every autonomous action a discernible policy: approval required, delegated authority, retry cap, token/cost budget, or safe read-only execution.

## Important limits

Repository popularity and feature claims are not independent audits. Do not assume any framework gives complete credential isolation, safe concurrent writes to an Obsidian vault, skill supply-chain security, or ideal run reliability. Validate the chosen runtime against the actual OpenClaw/Hermes setup, introduce project-scoped permissions and approval expiry, and use a write coordinator for memory before automating broad actions.