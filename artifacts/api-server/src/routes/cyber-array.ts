import { Router, type IRouter, type Response } from "express";
import { and, desc, eq, ilike, sql } from "drizzle-orm";
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
import {
  CreateMemoryProposalBody,
  CreateProjectBody,
  CreateRunBody,
  CreateWorkforceBody,
  GetRunParams,
  InstallSkillBody,
  InstallSkillParams,
  ListMemoryProposalsResponse,
  ListProjectsResponse,
  ListRunsResponse,
  ListSkillsResponse,
  ListWorkforcesResponse,
  ReviewMemoryProposalBody,
  ReviewMemoryProposalParams,
  ReviewApprovalBody,
  ReviewApprovalParams,
  ReviewApprovalResponse,
  ReviewMemoryProposalResponse,
  SearchMemoryQueryParams,
  SearchMemoryResponse,
  UpdateMemoryConnectionBody,
  UpdateProjectBody,
  UpdateProjectParams,
  UpdateRunStatusBody,
  UpdateRunStatusParams,
  UpdateWorkforceBody,
  UpdateWorkforceParams,
  GetDashboardResponse,
  GetMemoryConnectionResponse,
  GetRunResponse,
  CreateProjectResponse,
  CreateRunResponse,
  CreateWorkforceResponse,
  CreateMemoryProposalResponse,
  InstallSkillResponse,
  UpdateMemoryConnectionResponse,
  UpdateProjectResponse,
  UpdateRunStatusResponse,
  UpdateWorkforceResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

function error(res: Response, status: number, message: string): void {
  res.status(status).json({ error: message });
}

function projectView(project: typeof projectsTable.$inferSelect) {
  return project;
}

function runView(run: typeof runsTable.$inferSelect, projectName: string) {
  return {
    id: run.id,
    request: run.request,
    projectId: run.projectId,
    projectName,
    status: run.status,
    budgetCap: run.budgetCap,
    budgetUsed: run.budgetUsed,
    retryLimit: run.retryLimit,
    retriesLeft: run.retriesLeft,
    gatesPending: run.gatesPending,
    createdAt: run.createdAt,
    updatedAt: run.updatedAt,
  };
}

router.get("/dashboard", async (req, res): Promise<void> => {
  const [projects, workforces, runs, approvals, events] = await Promise.all([
    db.select().from(projectsTable),
    db.select().from(workforcesTable),
    db.select().from(runsTable),
    db.select().from(approvalsTable).where(eq(approvalsTable.status, "pending")),
    db.select().from(runEventsTable).orderBy(desc(runEventsTable.createdAt)).limit(6),
  ]);
  const data = GetDashboardResponse.parse({
    projects: projects.length,
    workforces: workforces.length,
    agents: workforces.reduce((total, workforce) => total + workforce.roles.length, 0),
    pendingApprovals: approvals.length,
    budgetUsed: projects.reduce((total, project) => total + project.budgetUsed, 0),
    budgetCap: projects.reduce((total, project) => total + project.budgetCap, 0),
    activeRuns: runs.filter((run) => run.status === "running").length,
    pendingApprovalId: approvals[0]?.id ?? null,
    pendingApprovalTitle: approvals[0]?.title ?? null,
    pendingApprovalDetail: approvals[0]?.detail ?? null,
    recentEvents: events,
  });
  req.log.info({ projects: data.projects }, "Loaded Cyber Array dashboard");
  res.json(data);
});

router.get("/projects", async (_req, res): Promise<void> => {
  const rows = await db.select().from(projectsTable).orderBy(desc(projectsTable.createdAt));
  res.json(ListProjectsResponse.parse(rows.map(projectView)));
});

router.post("/projects", async (req, res): Promise<void> => {
  const parsed = CreateProjectBody.safeParse(req.body);
  if (!parsed.success) {
    error(res, 400, parsed.error.message);
    return;
  }
  const [project] = await db.insert(projectsTable).values(parsed.data).returning();
  res.status(201).json(CreateProjectResponse.parse(projectView(project)));
});

router.patch("/projects/:id", async (req, res): Promise<void> => {
  const params = UpdateProjectParams.safeParse(req.params);
  const parsed = UpdateProjectBody.safeParse(req.body);
  if (!params.success || !parsed.success) {
    const issue = !params.success ? params.error : !parsed.success ? parsed.error : null;
    error(res, 400, issue?.message ?? "Invalid request");
    return;
  }
  const [project] = await db.update(projectsTable).set(parsed.data).where(eq(projectsTable.id, params.data.id)).returning();
  if (!project) {
    error(res, 404, "Project not found");
    return;
  }
  res.json(UpdateProjectResponse.parse(projectView(project)));
});

router.get("/workforces", async (_req, res): Promise<void> => {
  const rows = await db.select().from(workforcesTable).orderBy(desc(workforcesTable.createdAt));
  res.json(ListWorkforcesResponse.parse(rows));
});

router.post("/workforces", async (req, res): Promise<void> => {
  const parsed = CreateWorkforceBody.safeParse(req.body);
  if (!parsed.success) {
    error(res, 400, parsed.error.message);
    return;
  }
  const [workforce] = await db.insert(workforcesTable).values(parsed.data).returning();
  res.status(201).json(CreateWorkforceResponse.parse(workforce));
});

router.patch("/workforces/:id", async (req, res): Promise<void> => {
  const params = UpdateWorkforceParams.safeParse(req.params);
  const parsed = UpdateWorkforceBody.safeParse(req.body);
  if (!params.success || !parsed.success) {
    const issue = !params.success ? params.error : !parsed.success ? parsed.error : null;
    error(res, 400, issue?.message ?? "Invalid request");
    return;
  }
  const [workforce] = await db.update(workforcesTable).set(parsed.data).where(eq(workforcesTable.id, params.data.id)).returning();
  if (!workforce) {
    error(res, 404, "Workforce not found");
    return;
  }
  res.json(UpdateWorkforceResponse.parse(workforce));
});

router.get("/skills", async (_req, res): Promise<void> => {
  const [skills, installations] = await Promise.all([
    db.select().from(skillsTable).orderBy(skillsTable.name),
    db.select().from(skillInstallationsTable),
  ]);
  const installedBySkill = new Map<number, number[]>();
  for (const installation of installations) {
    const projectIds = installedBySkill.get(installation.skillId) ?? [];
    projectIds.push(installation.projectId);
    installedBySkill.set(installation.skillId, projectIds);
  }
  res.json(ListSkillsResponse.parse(skills.map((skill) => ({
    ...skill,
    installedProjectIds: installedBySkill.get(skill.id) ?? [],
  }))));
});

router.post("/skills/:id/install", async (req, res): Promise<void> => {
  const params = InstallSkillParams.safeParse(req.params);
  const parsed = InstallSkillBody.safeParse(req.body);
  if (!params.success || !parsed.success) {
    const issue = !params.success ? params.error : !parsed.success ? parsed.error : null;
    error(res, 400, issue?.message ?? "Invalid request");
    return;
  }
  const [skill] = await db.select().from(skillsTable).where(eq(skillsTable.id, params.data.id));
  const [project] = await db.select().from(projectsTable).where(eq(projectsTable.id, parsed.data.projectId));
  if (!skill || !project) {
    error(res, 404, "Skill or project not found");
    return;
  }
  const existing = await db.select().from(skillInstallationsTable).where(and(
    eq(skillInstallationsTable.skillId, skill.id),
    eq(skillInstallationsTable.projectId, project.id),
  ));
  const installation = existing[0] ?? (await db.insert(skillInstallationsTable).values({
    skillId: skill.id,
    projectId: project.id,
  }).returning())[0];
  res.status(existing.length ? 200 : 201).json(InstallSkillResponse.parse(installation));
});

router.get("/memory", async (_req, res): Promise<void> => {
  let [connection] = await db.select().from(memoryConnectionsTable).limit(1);
  if (!connection) {
    [connection] = await db.insert(memoryConnectionsTable).values({
      name: "Shared second brain",
      provider: "Obsidian",
      readScope: "global read + search · all agents",
      writeScope: "proposed writes · review only",
    }).returning();
  }
  res.json(GetMemoryConnectionResponse.parse(connection));
});

router.patch("/memory", async (req, res): Promise<void> => {
  const parsed = UpdateMemoryConnectionBody.safeParse(req.body);
  if (!parsed.success) {
    error(res, 400, parsed.error.message);
    return;
  }
  let [connection] = await db.select().from(memoryConnectionsTable).limit(1);
  if (!connection) {
    [connection] = await db.insert(memoryConnectionsTable).values({
      name: "Shared second brain",
      provider: "Obsidian",
      readScope: "global read + search · all agents",
      writeScope: "proposed writes · review only",
    }).returning();
  }
  const [updated] = await db.update(memoryConnectionsTable).set({
    status: parsed.data.status,
    lastIndexedAt: parsed.data.reindex ? new Date() : connection.lastIndexedAt,
  }).where(eq(memoryConnectionsTable.id, connection.id)).returning();
  res.json(UpdateMemoryConnectionResponse.parse(updated));
});

router.get("/memory/search", async (req, res): Promise<void> => {
  const parsed = SearchMemoryQueryParams.safeParse(req.query);
  if (!parsed.success) {
    error(res, 400, parsed.error.message);
    return;
  }
  const query = parsed.data.query?.trim();
  const rows = query
    ? await db.select().from(memoryNotesTable).where(orSearch(query))
    : await db.select().from(memoryNotesTable);
  res.json(SearchMemoryResponse.parse(rows));
});

function orSearch(query: string) {
  return sql`(${ilike(memoryNotesTable.title, `%${query}%`)} OR ${ilike(memoryNotesTable.path, `%${query}%`)} OR ${ilike(memoryNotesTable.excerpt, `%${query}%`)})`;
}

router.get("/memory/proposals", async (_req, res): Promise<void> => {
  const rows = await db.select().from(memoryProposalsTable).orderBy(desc(memoryProposalsTable.createdAt));
  res.json(ListMemoryProposalsResponse.parse(rows));
});

router.post("/memory/proposals", async (req, res): Promise<void> => {
  const parsed = CreateMemoryProposalBody.safeParse(req.body);
  if (!parsed.success) {
    error(res, 400, parsed.error.message);
    return;
  }
  const [proposal] = await db.insert(memoryProposalsTable).values(parsed.data).returning();
  res.status(201).json(CreateMemoryProposalResponse.parse(proposal));
});

router.patch("/memory/proposals/:id", async (req, res): Promise<void> => {
  const params = ReviewMemoryProposalParams.safeParse(req.params);
  const parsed = ReviewMemoryProposalBody.safeParse(req.body);
  if (!params.success || !parsed.success) {
    const issue = !params.success ? params.error : !parsed.success ? parsed.error : null;
    error(res, 400, issue?.message ?? "Invalid request");
    return;
  }
  const [proposal] = await db.update(memoryProposalsTable).set({ status: parsed.data.status }).where(eq(memoryProposalsTable.id, params.data.id)).returning();
  if (!proposal) {
    error(res, 404, "Memory proposal not found");
    return;
  }
  res.json(ReviewMemoryProposalResponse.parse(proposal));
});

async function listRunRows() {
  return db.select({
    run: runsTable,
    projectName: projectsTable.name,
  }).from(runsTable).innerJoin(projectsTable, eq(runsTable.projectId, projectsTable.id)).orderBy(desc(runsTable.updatedAt));
}

router.get("/runs", async (_req, res): Promise<void> => {
  const rows = await listRunRows();
  res.json(ListRunsResponse.parse(rows.map(({ run, projectName }) => runView(run, projectName))));
});

router.post("/runs", async (req, res): Promise<void> => {
  const parsed = CreateRunBody.safeParse(req.body);
  if (!parsed.success) {
    error(res, 400, parsed.error.message);
    return;
  }
  const [project] = await db.select().from(projectsTable).where(eq(projectsTable.id, parsed.data.projectId));
  if (!project) {
    error(res, 404, "Project not found");
    return;
  }
  const workers: RunWorker[] = [
    { id: "mica", name: "Mica", role: "source audit", status: "active", detail: "eligible for read-only research" },
    { id: "vale", name: "Vale", role: "structure draft", status: "waiting", detail: "receives the source checkpoint" },
    { id: "nix", name: "Nix", role: "artifact assembler", status: "queued", detail: "stages Markdown with frontmatter" },
    { id: "orbit", name: "Orbit", role: "approval synthesis", status: "blocked", detail: "holds external writes for review" },
  ];
  const [run] = await db.insert(runsTable).values({
    request: parsed.data.request,
    projectId: project.id,
    budgetCap: parsed.data.budgetCap ?? Math.min(18, project.budgetCap),
    workers,
  }).returning();
  await db.update(projectsTable).set({ runCount: project.runCount + 1 }).where(eq(projectsTable.id, project.id));
  await db.insert(runEventsTable).values([
    { runId: run.id, kind: "model", title: "Orbit accepted the request", detail: "Bounded plan emitted with approval gates", },
    { runId: run.id, kind: "handoff", title: "Workers were assigned by role boundary", detail: "Mica → Vale → Nix → Orbit", },
  ]);
  await db.insert(approvalsTable).values({
    runId: run.id,
    title: "Review external write before publish",
    detail: `Run ${run.id} has a draft write waiting for your decision.`,
    expiresAt: new Date(Date.now() + 60 * 60 * 1000),
  });
  const detail = await getRunDetail(run.id);
  res.status(201).json(CreateRunResponse.parse(detail));
});

async function getRunDetail(id: number) {
  const [row] = await db.select({
    run: runsTable,
    projectName: projectsTable.name,
  }).from(runsTable).innerJoin(projectsTable, eq(runsTable.projectId, projectsTable.id)).where(eq(runsTable.id, id));
  if (!row) return null;
  const [events, approvals, artifacts] = await Promise.all([
    db.select().from(runEventsTable).where(eq(runEventsTable.runId, id)).orderBy(runEventsTable.createdAt),
    db.select().from(approvalsTable).where(eq(approvalsTable.runId, id)).orderBy(desc(approvalsTable.id)),
    db.select().from(runArtifactsTable).where(eq(runArtifactsTable.runId, id)).orderBy(desc(runArtifactsTable.id)),
  ]);
  return {
    ...runView(row.run, row.projectName),
    workers: row.run.workers,
    events,
    approvals,
    artifacts,
  };
}

router.get("/runs/:id", async (req, res): Promise<void> => {
  const params = GetRunParams.safeParse(req.params);
  if (!params.success) {
    error(res, 400, params.error.message);
    return;
  }
  const detail = await getRunDetail(params.data.id);
  if (!detail) {
    error(res, 404, "Run not found");
    return;
  }
  res.json(GetRunResponse.parse(detail));
});

router.patch("/runs/:id/status", async (req, res): Promise<void> => {
  const params = UpdateRunStatusParams.safeParse(req.params);
  const parsed = UpdateRunStatusBody.safeParse(req.body);
  if (!params.success || !parsed.success) {
    const issue = !params.success ? params.error : !parsed.success ? parsed.error : null;
    error(res, 400, issue?.message ?? "Invalid request");
    return;
  }
  const [run] = await db.update(runsTable).set({
    status: parsed.data.status,
    updatedAt: new Date(),
  }).where(eq(runsTable.id, params.data.id)).returning();
  if (!run) {
    error(res, 404, "Run not found");
    return;
  }
  await db.insert(runEventsTable).values({
    runId: run.id,
    kind: "status",
    title: `Run ${parsed.data.status}`,
    detail: "Operator decision recorded in the replay stream",
  });
  const [row] = await db.select({ projectName: projectsTable.name }).from(projectsTable).where(eq(projectsTable.id, run.projectId));
  res.json(UpdateRunStatusResponse.parse(runView(run, row?.projectName ?? "Unknown project")));
});

router.patch("/approvals/:id", async (req, res): Promise<void> => {
  const params = ReviewApprovalParams.safeParse(req.params);
  const parsed = ReviewApprovalBody.safeParse(req.body);
  if (!params.success || !parsed.success) {
    const issue = !params.success ? params.error : !parsed.success ? parsed.error : null;
    error(res, 400, issue?.message ?? "Invalid request");
    return;
  }
  const [approval] = await db.update(approvalsTable).set({ status: parsed.data.status }).where(eq(approvalsTable.id, params.data.id)).returning();
  if (!approval) {
    error(res, 404, "Approval not found");
    return;
  }
  await db.update(runsTable).set({
    gatesPending: sql`GREATEST(${runsTable.gatesPending} - 1, 0)`,
    updatedAt: new Date(),
  }).where(eq(runsTable.id, approval.runId));
  await db.insert(runEventsTable).values({
    runId: approval.runId,
    kind: "approval",
    title: parsed.data.status === "approved" ? "Approval granted once" : "Approval denied",
    detail: approval.title,
  });
  res.json(ReviewApprovalResponse.parse(approval));
});

export default router;