import { db } from "@workspace/db";
import {
  approvalsTable,
  memoryConnectionsTable,
  memoryNotesTable,
  memoryProposalsTable,
  projectsTable,
  runArtifactsTable,
  runEventsTable,
  runsTable,
  skillInstallationsTable,
  skillsTable,
  workforcesTable,
  type RunWorker,
} from "@workspace/db";

export async function seedCyberArray(): Promise<void> {
  const existing = await db.select({ id: projectsTable.id }).from(projectsTable).limit(1);
  if (existing.length > 0) return;

  const projects = await db
    .insert(projectsTable)
    .values([
      {
        name: "Northstar launch",
        team: "Launch observatory",
        memoryPath: "/Projects/Northstar",
        budgetCap: 300,
        budgetUsed: 184,
        progress: 68,
        agentCount: 6,
        artifactCount: 12,
        runCount: 14,
        toolBoundary: "web scout · markdown",
        credentialBoundary: "none",
      },
      {
        name: "Quiet archive",
        team: "Memory garden",
        memoryPath: "/Projects/Archive",
        budgetCap: 120,
        budgetUsed: 36,
        progress: 42,
        agentCount: 3,
        artifactCount: 248,
        runCount: 5,
        toolBoundary: "vault search only",
        credentialBoundary: "none",
      },
      {
        name: "Q3 ledger",
        team: "Ledger lantern",
        status: "paused",
        memoryPath: "/Projects/Ledger",
        budgetCap: 100,
        budgetUsed: 72,
        progress: 91,
        agentCount: 8,
        artifactCount: 6,
        runCount: 2,
        toolBoundary: "CSV + files",
        credentialBoundary: "bank export · scoped",
      },
    ])
    .returning();

  const workforces = await db
    .insert(workforcesTable)
    .values([
      {
        name: "Launch observatory",
        route: "research → brief → approval",
        budgetCap: 40,
        budgetUsed: 24.8,
        roles: [
          { id: "orbit", name: "Orbit", purpose: "chief planner", access: "full project read", tools: ["handoffs", "events"], blocked: ["external writes"] },
          { id: "mica", name: "Mica", purpose: "source auditor", access: "web + read-only", tools: ["web search"], blocked: ["vault writes"] },
          { id: "vale", name: "Vale", purpose: "brief writer", access: "drafts only", tools: ["markdown proposal"], blocked: ["publish"] },
          { id: "nix", name: "Nix", purpose: "checkpoint keeper", access: "events + artifacts", tools: ["artifacts"], blocked: ["external tools"] },
        ],
      },
      {
        name: "Signal garden",
        route: "watch → cluster → cite",
        budgetCap: 30,
        budgetUsed: 11.4,
        roles: [
          { id: "sora", name: "Sora", purpose: "signal watcher", access: "global read", tools: ["vault search"], blocked: ["writes"] },
          { id: "juno", name: "Juno", purpose: "cluster mapper", access: "project read", tools: ["handoffs"], blocked: ["credentials"] },
        ],
      },
      {
        name: "Ledger lantern",
        status: "paused",
        route: "parse → reconcile → export",
        budgetCap: 40,
        budgetUsed: 8.62,
        roles: [
          { id: "nix-ledger", name: "Nix", purpose: "ledger reconciler", access: "scoped files", tools: ["CSV"], blocked: ["bank writes"] },
        ],
      },
    ])
    .returning();

  const skills = await db
    .insert(skillsTable)
    .values([
      {
        name: "Web Scout",
        description: "Browse and cite sources without losing the thread.",
        source: "community / Jun Park",
        trust: "community reviewed",
        version: "v2.4.1",
        updateState: "current",
        compatibility: "Mica · research",
        access: "web · read-only",
        scope: "project only",
        securityNotes: "No credential access requested. Browser sessions are read-only and logged.",
      },
      {
        name: "Markdown Gardener",
        description: "Propose tidy frontmatter, backlinks, and safe note edits.",
        source: "verified / Obsidian team",
        trust: "verified publisher",
        version: "v1.8.0",
        updateState: "update available",
        compatibility: "Orbit · Memory wire",
        access: "vault · proposed write",
        scope: "choose per project",
        securityNotes: "Writes are proposals only. A human reviews the exact Markdown diff before apply.",
      },
      {
        name: "Ledger Lens",
        description: "Reconcile CSVs with explainable diffs and a recoverable trail.",
        source: "private / Ari Mendez",
        trust: "owner signed",
        version: "v3.1.2",
        updateState: "current",
        compatibility: "Nix · files",
        access: "files · scoped",
        scope: "Ledger lantern",
        securityNotes: "Only the selected project file boundary is available to this skill.",
      },
    ])
    .returning();

  await db.insert(skillInstallationsTable).values([
    { skillId: skills[0].id, projectId: projects[0].id },
    { skillId: skills[1].id, projectId: projects[0].id },
  ]);

  await db.insert(memoryConnectionsTable).values({
    name: "Ari’s Obsidian vault",
    provider: "Obsidian",
    notesIndexed: 1842,
    linkedClusters: 17,
    readScope: "global read + search · all agents",
    writeScope: "proposed writes · review only",
  });

  await db.insert(memoryNotesTable).values([
    {
      title: "Launch decision / April cohort",
      path: "/Projects/Northstar/brief.md",
      excerpt: "Shorter setup time is the strongest positioning signal.",
      scope: "Northstar overlay",
      provenance: "Orbit · seeded context",
    },
    {
      title: "Research / competitor onboarding",
      path: "/Research/market/onboarding.md",
      excerpt: "Six cited sources mention setup friction in the first session.",
      scope: "global vault",
      provenance: "Mica · seeded context",
    },
    {
      title: "Archive / old launch assumptions",
      path: "/Archive/launch-2023.md",
      excerpt: "Historical context, read-only for current project agents.",
      scope: "archive overlay",
      provenance: "Ari · indexed",
    },
  ]);

  const workers: RunWorker[] = [
    { id: "mica", name: "Mica", role: "source audit", status: "active", detail: "collect 6 cited sources" },
    { id: "vale", name: "Vale", role: "structure draft", status: "waiting", detail: "waiting on source audit checkpoint" },
    { id: "nix", name: "Nix", role: "artifact assembler", status: "queued", detail: "draft Markdown + frontmatter" },
    { id: "orbit", name: "Orbit", role: "approval synthesis", status: "blocked", detail: "blocked by child tasks" },
  ];
  const [run] = await db.insert(runsTable).values({
    request: "Shape the launch brief from the latest research",
    projectId: projects[0].id,
    budgetCap: 18,
    budgetUsed: 10.8,
    gatesPending: 1,
    workers,
  }).returning();

  await db.insert(runEventsTable).values([
    { runId: run.id, kind: "model", title: "Orbit made a plan from the request", detail: "Request accepted · plan emitted", createdAt: new Date(Date.now() - 26 * 60 * 1000) },
    { runId: run.id, kind: "tool", title: "Mica opened a read-only browser session", detail: "Permission scope · expires in 18m", createdAt: new Date(Date.now() - 9 * 60 * 1000) },
    { runId: run.id, kind: "handoff", title: "Mica handed six citations to Vale", detail: "Checkpoint stored · worker lineage preserved", createdAt: new Date(Date.now() - 2 * 60 * 1000) },
    { runId: run.id, kind: "guardrail", title: "Orbit paused the publish step", detail: "External-write policy · approval required", createdAt: new Date(Date.now() - 1 * 60 * 1000) },
  ]);
  const expiresAt = new Date(Date.now() + 42 * 60 * 1000);
  await db.insert(approvalsTable).values({
    runId: run.id,
    title: "Allow brief-writer to write one draft to /launch/briefs?",
    detail: "Proposed by Orbit · no publish access",
    expiresAt,
  });
  await db.insert(runArtifactsTable).values({
    runId: run.id,
    name: "brief-v3.md",
    path: "/artifacts/brief-v3.md",
    status: "draft",
    provenance: "Vale · run #1 · Northstar launch",
  });
  await db.insert(memoryProposalsTable).values({
    title: "Add launch decision to project brief",
    path: "/Projects/Northstar/brief.md",
    change: "Position the April cohort around shorter setup time.",
    agent: "Orbit",
    runId: run.id,
    project: "Northstar launch",
    confidence: 0.91,
  });

  void workforces;
}