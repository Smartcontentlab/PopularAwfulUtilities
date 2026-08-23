# Research Notes: Multi-Agent Operating System Patterns

**Status:** complete
**Depth:** Standard

## Plan

- **Question:** Which open-source patterns should shape a personal multi-agent operating system for orchestration, workforces, skills, projects, and Obsidian memory?
- **Scope:** Open-source agent runtimes, orchestration UIs, skill/plugin systems, project isolation, and local knowledge integrations. Out of scope: hosted enterprise platforms and implementation code.
- **Audience:** A technical power user operating OpenClaw, Hermes, and multiple agent fleets.
- **Deliverable:** A source-backed shortlist of reusable patterns and a design brief for the next mockup direction.

## Focus Areas

| # | Area | Status | Sources |
|---|---|---|---|
| 1 | Agent orchestration and delegation | complete | 7 |
| 2 | Workforce and multi-agent frameworks | complete | 5 |
| 3 | Skill/plugin discovery and installation | complete | 6 |
| 4 | Project workspaces and observability | complete | 6 |
| 5 | Obsidian and local memory integration | complete | 6 |

## Coverage Checklist

- [x] Identify strong open-source orchestration patterns for a chief agent and delegated workers.
- [x] Identify workforce / multi-agent frameworks worth modeling or integrating.
- [x] Identify skill-library patterns for one-click discovery, install, versioning, and permissions.
- [x] Identify project isolation and run observability patterns.
- [x] Identify practical Obsidian / Markdown memory connection patterns.
- [x] Surface safety, approval, and trust controls required for autonomous work.

## Findings Log

### Chief agent and delegation

- Model the main agent as a coordinator with durable parent-child task lineage, bounded retries, explicit artifacts, and resumable approval gates. [@hermes-architecture] [@hiclaw] [@openai-hitl]
- Keep the human in a visible intervention loop; an approval inbox should not be conflated with full authorization policy. [@openai-hitl] [@supervisor-pattern]

### Workforces

- Use named roles, tasks, routing, checkpoints, cost/token budgets, and replayable run records as first-class objects. [@crewai] [@langgraph] [@oma]
- Prefer actively maintained frameworks as references; AutoGen remains valuable background but its repository directs new users toward a migration path. [@autogen] [@langgraph] [@crewai]

### Skills

- One-click install must expose catalog metadata, compatibility, target scope, lock/update state, provenance, and permission review. [@opendatahub-skills] [@skills-cli] [@mcp-registry]
- Treat package security claims as leads, not guarantees; skills that can run code need a separate sandbox and revocation model. [@spm] [@mcp-registry]

### Projects and observability

- Make a project the boundary for its chief plan, workforce, runs, artifacts, memory scope, and approvals. [@openagents] [@hermes-memory] [@langfuse]
- Maintain an event vocabulary for model calls, tools, handoffs, guardrails, and custom events. [@openai-tracing] [@langfuse]

### Obsidian memory

- Keep Markdown/frontmatter as the human-readable durable contract; layer indexing and retrieval behind replaceable services. [@open-second-brain] [@basic-memory] [@obsidian-api]
- Scope each vault connection per project; distinguish read/search from proposed writes and preserve provenance/conflict visibility. [@obsidian-mcp] [@obsidian-sync] [@open-second-brain]

## Conflicts & Open Questions

- GitHub metrics and repository claims are snapshots, not proof of reliability or security.
- No source establishes a universal cross-runtime permission model for skills, agents, or project isolation.
- Obsidian concurrent-write guarantees and retention/deletion policies need explicit product validation.

## Gaps

- Validate actual compatibility with the user’s OpenClaw/Hermes setup before selecting a runtime.
- Treat any automated skill scanner or supply-chain claim as advisory until independently reviewed.