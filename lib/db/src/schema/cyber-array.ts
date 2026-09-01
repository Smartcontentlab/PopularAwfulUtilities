import { createInsertSchema } from "drizzle-zod";
import {
  boolean,
  integer,
  jsonb,
  numeric,
  pgTable,
  serial,
  text,
  timestamp,
  unique,
} from "drizzle-orm/pg-core";
import { z } from "zod/v4";

export type WorkforceRole = {
  id: string;
  name: string;
  purpose: string;
  access: string;
  tools: string[];
  blocked: string[];
};

export type RunWorker = {
  id: string;
  name: string;
  role: string;
  status: string;
  detail: string;
};

export const projectsTable = pgTable("cyber_projects", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  team: text("team").notNull(),
  status: text("status").notNull().default("active"),
  memoryPath: text("memory_path").notNull(),
  budgetCap: numeric("budget_cap", { mode: "number" }).notNull().default(100),
  budgetUsed: numeric("budget_used", { mode: "number" }).notNull().default(0),
  progress: integer("progress").notNull().default(0),
  agentCount: integer("agent_count").notNull().default(0),
  artifactCount: integer("artifact_count").notNull().default(0),
  runCount: integer("run_count").notNull().default(0),
  toolBoundary: text("tool_boundary").notNull().default("No tools granted"),
  credentialBoundary: text("credential_boundary").notNull().default("No credentials"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertProjectSchema = createInsertSchema(projectsTable).omit({
  id: true,
  createdAt: true,
});
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projectsTable.$inferSelect;

export const workforcesTable = pgTable("cyber_workforces", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  status: text("status").notNull().default("active"),
  route: text("route").notNull(),
  budgetCap: numeric("budget_cap", { mode: "number" }).notNull().default(40),
  budgetUsed: numeric("budget_used", { mode: "number" }).notNull().default(0),
  autoRoute: boolean("auto_route").notNull().default(true),
  checkpointRecovery: boolean("checkpoint_recovery").notNull().default(true),
  roles: jsonb("roles").$type<WorkforceRole[]>().notNull().default([]),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertWorkforceSchema = createInsertSchema(workforcesTable).omit({
  id: true,
  createdAt: true,
});
export type InsertWorkforce = z.infer<typeof insertWorkforceSchema>;
export type Workforce = typeof workforcesTable.$inferSelect;

export const skillsTable = pgTable("cyber_skills", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  source: text("source").notNull(),
  trust: text("trust").notNull(),
  version: text("version").notNull(),
  updateState: text("update_state").notNull(),
  compatibility: text("compatibility").notNull(),
  access: text("access").notNull(),
  scope: text("scope").notNull(),
  securityNotes: text("security_notes").notNull(),
});

export const insertSkillSchema = createInsertSchema(skillsTable).omit({ id: true });
export type InsertSkill = z.infer<typeof insertSkillSchema>;
export type Skill = typeof skillsTable.$inferSelect;

export const skillInstallationsTable = pgTable(
  "cyber_skill_installations",
  {
    id: serial("id").primaryKey(),
    skillId: integer("skill_id").notNull().references(() => skillsTable.id),
    projectId: integer("project_id").notNull().references(() => projectsTable.id),
    installedAt: timestamp("installed_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [unique("cyber_skill_installation_unique").on(table.skillId, table.projectId)],
);

export const insertSkillInstallationSchema = createInsertSchema(skillInstallationsTable).omit({
  id: true,
  installedAt: true,
});
export type SkillInstallation = typeof skillInstallationsTable.$inferSelect;

export const memoryConnectionsTable = pgTable("cyber_memory_connections", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  provider: text("provider").notNull(),
  status: text("status").notNull().default("online"),
  notesIndexed: integer("notes_indexed").notNull().default(0),
  linkedClusters: integer("linked_clusters").notNull().default(0),
  lastIndexedAt: timestamp("last_indexed_at", { withTimezone: true }).notNull().defaultNow(),
  readScope: text("read_scope").notNull(),
  writeScope: text("write_scope").notNull(),
  frontmatterPreserved: boolean("frontmatter_preserved").notNull().default(true),
});

export const memoryNotesTable = pgTable("cyber_memory_notes", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  path: text("path").notNull(),
  excerpt: text("excerpt").notNull(),
  scope: text("scope").notNull(),
  provenance: text("provenance").notNull(),
});

export const memoryProposalsTable = pgTable("cyber_memory_proposals", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  path: text("path").notNull(),
  change: text("change").notNull(),
  agent: text("agent").notNull(),
  runId: integer("run_id").notNull(),
  project: text("project").notNull(),
  confidence: numeric("confidence", { mode: "number" }).notNull(),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertMemoryProposalSchema = createInsertSchema(memoryProposalsTable).omit({
  id: true,
  createdAt: true,
});
export type InsertMemoryProposal = z.infer<typeof insertMemoryProposalSchema>;
export type MemoryProposal = typeof memoryProposalsTable.$inferSelect;

export const runsTable = pgTable("cyber_runs", {
  id: serial("id").primaryKey(),
  request: text("request").notNull(),
  projectId: integer("project_id").notNull().references(() => projectsTable.id),
  status: text("status").notNull().default("running"),
  budgetCap: numeric("budget_cap", { mode: "number" }).notNull().default(18),
  budgetUsed: numeric("budget_used", { mode: "number" }).notNull().default(0),
  retryLimit: integer("retry_limit").notNull().default(2),
  retriesLeft: integer("retries_left").notNull().default(2),
  gatesPending: integer("gates_pending").notNull().default(2),
  workers: jsonb("workers").$type<RunWorker[]>().notNull().default([]),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertRunSchema = createInsertSchema(runsTable).omit({
  id: true,
  status: true,
  budgetUsed: true,
  retryLimit: true,
  retriesLeft: true,
  gatesPending: true,
  createdAt: true,
  updatedAt: true,
});
export type InsertRun = z.infer<typeof insertRunSchema>;
export type Run = typeof runsTable.$inferSelect;

export const runEventsTable = pgTable("cyber_run_events", {
  id: serial("id").primaryKey(),
  runId: integer("run_id").notNull().references(() => runsTable.id),
  kind: text("kind").notNull(),
  title: text("title").notNull(),
  detail: text("detail").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const approvalsTable = pgTable("cyber_approvals", {
  id: serial("id").primaryKey(),
  runId: integer("run_id").notNull().references(() => runsTable.id),
  title: text("title").notNull(),
  detail: text("detail").notNull(),
  status: text("status").notNull().default("pending"),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
});

export const runArtifactsTable = pgTable("cyber_run_artifacts", {
  id: serial("id").primaryKey(),
  runId: integer("run_id").notNull().references(() => runsTable.id),
  name: text("name").notNull(),
  path: text("path").notNull(),
  status: text("status").notNull(),
  provenance: text("provenance").notNull(),
});