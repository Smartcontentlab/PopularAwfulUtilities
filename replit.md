# Cyber Array

Cyber Array is a bounded agent workspace for forming workforces, reviewing skills, sharing scoped memory, and supervising replayable chief-agent runs.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/cyber-array` — deployable React/Vite product with the Cyber Array command surface and routes for overview, projects, workforces, skills, memory, and runs.
- `artifacts/mockup-sandbox` — existing approved design sandbox; kept alongside the product.
- `artifacts/api-server/src/routes/cyber-array.ts` — Express API handlers for the workspace product.
- `artifacts/api-server/src/lib/seed.ts` — first-run demo data for a populated workspace.
- `lib/db/src/schema/cyber-array.ts` — Drizzle source of truth for projects, workforces, skills, memory, runs, approvals, events, and artifacts.
- `lib/api-spec/openapi.yaml` — source of truth for the generated Zod schemas and React Query client.

## Architecture decisions

- Cyber Array is a separate web artifact at `/`, while the component mockup sandbox remains available as its own artifact.
- Product state is persisted in the shared PostgreSQL/Drizzle database rather than kept in browser mockup state.
- API request and response contracts are defined in OpenAPI and regenerated into `@workspace/api-zod` and `@workspace/api-client-react`.
- Skills install into projects, memory writes remain proposals, and external run actions remain approval-gated.

## Product

- Dashboard pulse with budget, active-agent, approval, and event summaries.
- Project and workforce creation, status controls, scoped role/tool/credential boundaries, and recovery posture.
- Skill library search, security notes, provenance review, and project-scoped installation.
- Shared memory connection status, indexed-note search, project overlays, and reviewable Markdown write proposals.
- Chief-agent run creation and supervision with worker lineage, budgets, approval gates, artifacts, event history, and replay output.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- The API server seeds demo records on startup when the Cyber Array tables are empty.
- Run `pnpm --filter @workspace/api-spec run codegen` after changing `lib/api-spec/openapi.yaml`.
- The Cyber Array Vite config requires workflow-provided `PORT` and `BASE_PATH`; use the managed web workflow or set both for a manual production build.
- Preview routes are artifact-routed; do not hardcode localhost or a project domain in browser code.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
