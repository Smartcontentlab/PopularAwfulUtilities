Source: https://github.com/crewAIInc/crewAI
Title: GitHub - crewAIInc/crewAI: Framework for orchestrating role-playing, autonomous AI agents. By fostering collaborative intelligence, CrewAI empowers agents to work together seamlessly, tackling complex tasks. · GitHub
Fetched: 2026-08-23T20:02:33.699Z

[Skip to content](https://github.com/crewAIInc/crewAI#start-of-content)

You signed in with another tab or window. [Reload](https://github.com/crewAIInc/crewAI) to refresh your session.You signed out in another tab or window. [Reload](https://github.com/crewAIInc/crewAI) to refresh your session.You switched accounts on another tab or window. [Reload](https://github.com/crewAIInc/crewAI) to refresh your session.Dismiss alert

{{ message }}

### Uh oh!

There was an error while loading. [Please reload this page](https://github.com/crewAIInc/crewAI).

[crewAIInc](https://github.com/crewAIInc)/ **[crewAI](https://github.com/crewAIInc/crewAI)** Public

- [Notifications](https://github.com/login?return_to=%2FcrewAIInc%2FcrewAI) You must be signed in to change notification settings
- [Fork\\
8.2k](https://github.com/login?return_to=%2FcrewAIInc%2FcrewAI)
- [Star\\
57.5k](https://github.com/login?return_to=%2FcrewAIInc%2FcrewAI)


main

[**1218** Branches](https://github.com/crewAIInc/crewAI/branches) [**238** Tags](https://github.com/crewAIInc/crewAI/tags)

[Go to Branches page](https://github.com/crewAIInc/crewAI/branches)[Go to Tags page](https://github.com/crewAIInc/crewAI/tags)

Go to file

Code

Open more actions menu

## Latest commit

![joaomdmoura](https://avatars.githubusercontent.com/u/667063?v=4&size=40)![claude](https://avatars.githubusercontent.com/u/81847?v=4&size=40)

[joaomdmoura](https://github.com/crewAIInc/crewAI/commits?author=joaomdmoura)

and

[claude](https://github.com/crewAIInc/crewAI/commits?author=claude)

[feat(events): record whether a run had inputs, without recording the …](https://github.com/crewAIInc/crewAI/commit/f4731f5025f861c78e3af0487cc80bf5e7c64782)

Open commit detailssuccess

2 days agoAug 21, 2026

[f4731f5](https://github.com/crewAIInc/crewAI/commit/f4731f5025f861c78e3af0487cc80bf5e7c64782) · 2 days agoAug 21, 2026

## History

[2,773 Commits](https://github.com/crewAIInc/crewAI/commits/main/)

Open commit details

[View commit history for this file.](https://github.com/crewAIInc/crewAI/commits/main/) 2,773 Commits

## Folders and files

| Name | Name | Last commit message | Last commit date |
| --- | --- | --- | --- |
| [.github](https://github.com/crewAIInc/crewAI/tree/main/.github ".github") | [.github](https://github.com/crewAIInc/crewAI/tree/main/.github ".github") | [fix(deps): bump torch to 2.13.0 for](https://github.com/crewAIInc/crewAI/commit/505d52323fd4613227edcfdc119c51e0022caef3 "fix(deps): bump torch to 2.13.0 for GHSA-rrmf-rvhw-rf47 (#6957)  Force torch>=2.13.0 via override-dependencies so the transitive docling/unstructured stack picks up the CVE-2025-3000 fix, and drop the now-unnecessary pip-audit ignore. chromadb's CVE-2026-45829 remains ignored: the upstream fix is merged but not released on PyPI.  Co-authored-by: Cursor Agent <cursoragent@cursor.com> Co-authored-by: Rip&Tear <theCyberTech@users.noreply.github.com>") [GHSA-rrmf-rvhw-rf47](https://github.com/advisories/GHSA-rrmf-rvhw-rf47 "GHSA-rrmf-rvhw-rf47") [(](https://github.com/crewAIInc/crewAI/commit/505d52323fd4613227edcfdc119c51e0022caef3 "fix(deps): bump torch to 2.13.0 for GHSA-rrmf-rvhw-rf47 (#6957)  Force torch>=2.13.0 via override-dependencies so the transitive docling/unstructured stack picks up the CVE-2025-3000 fix, and drop the now-unnecessary pip-audit ignore. chromadb's CVE-2026-45829 remains ignored: the upstream fix is merged but not released on PyPI.  Co-authored-by: Cursor Agent <cursoragent@cursor.com> Co-authored-by: Rip&Tear <theCyberTech@users.noreply.github.com>") [#6957](https://github.com/crewAIInc/crewAI/pull/6957) [)](https://github.com/crewAIInc/crewAI/commit/505d52323fd4613227edcfdc119c51e0022caef3 "fix(deps): bump torch to 2.13.0 for GHSA-rrmf-rvhw-rf47 (#6957)  Force torch>=2.13.0 via override-dependencies so the transitive docling/unstructured stack picks up the CVE-2025-3000 fix, and drop the now-unnecessary pip-audit ignore. chromadb's CVE-2026-45829 remains ignored: the upstream fix is merged but not released on PyPI.  Co-authored-by: Cursor Agent <cursoragent@cursor.com> Co-authored-by: Rip&Tear <theCyberTech@users.noreply.github.com>") | 2 weeks agoAug 11, 2026 |
| [docs](https://github.com/crewAIInc/crewAI/tree/main/docs "docs") | [docs](https://github.com/crewAIInc/crewAI/tree/main/docs "docs") | [feat(events): record whether a run had inputs, without recording the …](https://github.com/crewAIInc/crewAI/commit/f4731f5025f861c78e3af0487cc80bf5e7c64782 "feat(events): record whether a run had inputs, without recording the inputs (#7072)  * feat(telemetry): record whether a run had inputs, without recording the inputs  The `crew_inputs` payload is gated behind `share_crew` and stays that way, so the only way to tell a parameterised run from an unparameterised one was to read a gated key: it is present on roughly 0.02% of spans, all of them opt-in sharers. That is a measurement of people who opted into sharing, not of users.  `crew_inputs_present` carries just the answer -- \"true\"/\"false\" -- on the already-ungated `Crew Created` span. The payload stays inside the `share_crew` branch, so nothing new about the contents of anyone's inputs is collected.  A string, for the reason `crew_memory` is a string, and the encoding matters more here because the majority case is the empty one. Measured over a single day (312,424,709 spans): `vInt64='0'` occurs 0 times and `vBool='false'` occurs 0 times, while `vStr='0'` does occur. proto3 omits the zero value for ints as well as bools, so an integer key count would have silently dropped every unparameterised run -- and among sharers, 54.46% of runs pass `{}`.  `{}` and `None` are both \"false\": an empty dict parameterises nothing, so truthiness is the question being asked.  Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com> Claude-Session: https://claude.ai/code/session_01RfV2uMqWRcdfufMvtdCVoN  * test(telemetry): assert input keys are absent too, not only input values  The gating test checked only the input value. A regression that emitted the input keys - json.dumps(sorted(inputs)) or similar - would have passed it, and key names are user data as much as values are.  Verified by injecting exactly that regression: the new assertion fails on it and passes once reverted.  Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com> Claude-Session: https://claude.ai/code/session_01RfV2uMqWRcdfufMvtdCVoN  ---------  Co-authored-by: Claude Opus 5 (1M context) <noreply@anthropic.com>") | 2 days agoAug 21, 2026 |
| [lib](https://github.com/crewAIInc/crewAI/tree/main/lib "lib") | [lib](https://github.com/crewAIInc/crewAI/tree/main/lib "lib") | [feat(events): record whether a run had inputs, without recording the …](https://github.com/crewAIInc/crewAI/commit/f4731f5025f861c78e3af0487cc80bf5e7c64782 "feat(events): record whether a run had inputs, without recording the inputs (#7072)  * feat(telemetry): record whether a run had inputs, without recording the inputs  The `crew_inputs` payload is gated behind `share_crew` and stays that way, so the only way to tell a parameterised run from an unparameterised one was to read a gated key: it is present on roughly 0.02% of spans, all of them opt-in sharers. That is a measurement of people who opted into sharing, not of users.  `crew_inputs_present` carries just the answer -- \"true\"/\"false\" -- on the already-ungated `Crew Created` span. The payload stays inside the `share_crew` branch, so nothing new about the contents of anyone's inputs is collected.  A string, for the reason `crew_memory` is a string, and the encoding matters more here because the majority case is the empty one. Measured over a single day (312,424,709 spans): `vInt64='0'` occurs 0 times and `vBool='false'` occurs 0 times, while `vStr='0'` does occur. proto3 omits the zero value for ints as well as bools, so an integer key count would have silently dropped every unparameterised run -- and among sharers, 54.46% of runs pass `{}`.  `{}` and `None` are both \"false\": an empty dict parameterises nothing, so truthiness is the question being asked.  Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com> Claude-Session: https://claude.ai/code/session_01RfV2uMqWRcdfufMvtdCVoN  * test(telemetry): assert input keys are absent too, not only input values  The gating test checked only the input value. A regression that emitted the input keys - json.dumps(sorted(inputs)) or similar - would have passed it, and key names are user data as much as values are.  Verified by injecting exactly that regression: the new assertion fails on it and passes once reverted.  Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com> Claude-Session: https://claude.ai/code/session_01RfV2uMqWRcdfufMvtdCVoN  ---------  Co-authored-by: Claude Opus 5 (1M context) <noreply@anthropic.com>") | 2 days agoAug 21, 2026 |
| [scripts](https://github.com/crewAIInc/crewAI/tree/main/scripts "scripts") | [scripts](https://github.com/crewAIInc/crewAI/tree/main/scripts "scripts") | [feat: adopt directory-based docs versioning with Edge channel (](https://github.com/crewAIInc/crewAI/commit/a237ebabba91dcccdc10364862836fa14f4b54bf "feat: adopt directory-based docs versioning with Edge channel (#6202)  * feat: adopt directory-based docs versioning with Edge channel  Switch docs.crewai.com from navigation-only versioning (every version selector entry rendered the same docs/<lang>/* source files) to Mintlify's directory-based versioning so each version selector entry renders its own snapshot. Add an \"Edge\" channel under docs/edge/<lang>/* that always reflects main HEAD for unreleased work, eliminating pre-release leakage onto frozen release labels. External links to canonical /<lang>/* URLs are preserved via wildcard redirects that always land on the current default version.  Layout: - docs/edge/<lang>/*         rolling source (you edit here) - docs/edge/enterprise-api.*.yaml - docs/v<X.Y.Z>/<lang>/*     frozen, immutable snapshots - docs/v<X.Y.Z>/enterprise-api.*.yaml - docs/images/               shared, append-only - docs/docs.json             nav + redirects  URLs follow the Mintlify-idiomatic shape: /edge/<lang>/<page> for Edge, /v<X.Y.Z>/<lang>/<page> for every frozen snapshot. The wildcard redirects /<lang>/:slug* -> /<default>/<lang>/:slug* keep stale links working, and every freeze rewrites them (plus all per-section/per-page redirects) so destinations always resolve to the current default without depending on a second redirect hop.  Release flow integration (devtools release): - New module crewai_devtools.docs_versioning.freeze() materialises   docs/v<X.Y.Z>/ from docs/edge/, rewrites openapi: refs inside the   snapshot, inserts the version into every language block in   docs.json, and refreshes all redirect destinations. - _update_docs_and_create_pr() in cli.py now calls that freeze during   Phase 2 of devtools release. Edge changelogs are updated first (so   the snapshot freeze picks them up), then the snapshot is staged   alongside docs.json, branched as docs/freeze-v<X.Y.Z>, and the PR   is titled [docs-freeze] docs: snapshot and changelog for v<X.Y.Z>   — the title prefix the new CI guard reads. - The PR still gates tag, GitHub release, PyPI publish, and the   enterprise release as before; no new PRs are added. - Pre-releases (1.X.YaN, 1.X.YbN, ...) skip the snapshot — they ride   Edge — and the docs PR title omits the [docs-freeze] prefix. - docs_check (AI-generated docs scaffolding) writes to   docs/edge/<lang>/* so newly-generated unreleased docs land in Edge   and never accidentally touch a frozen snapshot.  Migration scripts (one-shot): - scripts/docs/freeze_historical_versions.py reconstructs all 16   historical snapshots (v1.10.0 .. v1.14.7) from git tags via   git archive | tar, rewriting openapi: MDX refs so each snapshot   reads its own enterprise-api YAML rather than the live one. - scripts/docs/prefix_version_paths.py one-shot-migrates docs.json:   rewrites every page path in 16 versioned blocks to point under   docs/v<X.Y.Z>/, inserts a new Edge entry per language, tags   v1.14.7 as Latest (default), prunes pages whose target file   doesn't exist in the snapshot (e.g. docs/ar/ didn't exist before   v1.12.0), and writes the wildcard + per-section redirects. - scripts/docs/freeze_current_edge.py is now a thin CLI wrapper   around docs_versioning.freeze for manual one-off freezes (e.g.   retroactively snapshotting a forgotten release).  CI guards (.github/workflows/docs-snapshots.yml): - Frozen snapshots under docs/v[0-9]*/ are immutable; only PRs whose   title contains [docs-freeze] (i.e. release-cut PRs generated by   devtools release or the manual wrapper) may modify them. - Images under docs/images/ are append-only since snapshots share a   single image directory. Deleting or renaming an image breaks every   historical snapshot that still references it.  Restored docs/images/crewai-otel-export.png from PR #3673; it was deleted in PR #4908 but v1.10.0 / v1.10.1 snapshots still reference it. Restoring instead of editing the snapshots preserves historical rendering fidelity and validates the new append-only rule retroactively.  Tests: - lib/devtools/tests/test_docs_versioning.py covers the freeze: file   copy, openapi rewrite, version insertion, default demotion, redirect   upserts, per-section redirect rewriting, idempotency, and invalid   inputs.  Verified locally with mintlify broken-links: 0 broken links across the full site (Edge + 16 frozen versions, 4 locales).  AGENTS.md (repo root) is the contributor guide for the new model; RELEASING.md is the release-cut runbook; README's Contribution section links to both.  Co-authored-by: Cursor <cursoragent@cursor.com>  * style: resolve linter issues  ---------  Co-authored-by: Cursor <cursoragent@cursor.com>") [#6202](https://github.com/crewAIInc/crewAI/pull/6202) [)](https://github.com/crewAIInc/crewAI/commit/a237ebabba91dcccdc10364862836fa14f4b54bf "feat: adopt directory-based docs versioning with Edge channel (#6202)  * feat: adopt directory-based docs versioning with Edge channel  Switch docs.crewai.com from navigation-only versioning (every version selector entry rendered the same docs/<lang>/* source files) to Mintlify's directory-based versioning so each version selector entry renders its own snapshot. Add an \"Edge\" channel under docs/edge/<lang>/* that always reflects main HEAD for unreleased work, eliminating pre-release leakage onto frozen release labels. External links to canonical /<lang>/* URLs are preserved via wildcard redirects that always land on the current default version.  Layout: - docs/edge/<lang>/*         rolling source (you edit here) - docs/edge/enterprise-api.*.yaml - docs/v<X.Y.Z>/<lang>/*     frozen, immutable snapshots - docs/v<X.Y.Z>/enterprise-api.*.yaml - docs/images/               shared, append-only - docs/docs.json             nav + redirects  URLs follow the Mintlify-idiomatic shape: /edge/<lang>/<page> for Edge, /v<X.Y.Z>/<lang>/<page> for every frozen snapshot. The wildcard redirects /<lang>/:slug* -> /<default>/<lang>/:slug* keep stale links working, and every freeze rewrites them (plus all per-section/per-page redirects) so destinations always resolve to the current default without depending on a second redirect hop.  Release flow integration (devtools release): - New module crewai_devtools.docs_versioning.freeze() materialises   docs/v<X.Y.Z>/ from docs/edge/, rewrites openapi: refs inside the   snapshot, inserts the version into every language block in   docs.json, and refreshes all redirect destinations. - _update_docs_and_create_pr() in cli.py now calls that freeze during   Phase 2 of devtools release. Edge changelogs are updated first (so   the snapshot freeze picks them up), then the snapshot is staged   alongside docs.json, branched as docs/freeze-v<X.Y.Z>, and the PR   is titled [docs-freeze] docs: snapshot and changelog for v<X.Y.Z>   — the title prefix the new CI guard reads. - The PR still gates tag, GitHub release, PyPI publish, and the   enterprise release as before; no new PRs are added. - Pre-releases (1.X.YaN, 1.X.YbN, ...) skip the snapshot — they ride   Edge — and the docs PR title omits the [docs-freeze] prefix. - docs_check (AI-generated docs scaffolding) writes to   docs/edge/<lang>/* so newly-generated unreleased docs land in Edge   and never accidentally touch a frozen snapshot.  Migration scripts (one-shot): - scripts/docs/freeze_historical_versions.py reconstructs all 16   historical snapshots (v1.10.0 .. v1.14.7) from git tags via   git archive | tar, rewriting openapi: MDX refs so each snapshot   reads its own enterprise-api YAML rather than the live one. - scripts/docs/prefix_version_paths.py one-shot-migrates docs.json:   rewrites every page path in 16 versioned blocks to point under   docs/v<X.Y.Z>/, inserts a new Edge entry per language, tags   v1.14.7 as Latest (default), prunes pages whose target file   doesn't exist in the snapshot (e.g. docs/ar/ didn't exist before   v1.12.0), and writes the wildcard + per-section redirects. - scripts/docs/freeze_current_edge.py is now a thin CLI wrapper   around docs_versioning.freeze for manual one-off freezes (e.g.   retroactively snapshotting a forgotten release).  CI guards (.github/workflows/docs-snapshots.yml): - Frozen snapshots under docs/v[0-9]*/ are immutable; only PRs whose   title contains [docs-freeze] (i.e. release-cut PRs generated by   devtools release or the manual wrapper) may modify them. - Images under docs/images/ are append-only since snapshots share a   single image directory. Deleting or renaming an image breaks every   historical snapshot that still references it.  Restored docs/images/crewai-otel-export.png from PR #3673; it was deleted in PR #4908 but v1.10.0 / v1.10.1 snapshots still reference it. Restoring instead of editing the snapshots preserves historical rendering fidelity and validates the new append-only rule retroactively.  Tests: - lib/devtools/tests/test_docs_versioning.py covers the freeze: file   copy, openapi rewrite, version insertion, default demotion, redirect   upserts, per-section redirect rewriting, idempotency, and invalid   inputs.  Verified locally with mintlify broken-links: 0 broken links across the full site (Edge + 16 frozen versions, 4 locales).  AGENTS.md (repo root) is the contributor guide for the new model; RELEASING.md is the release-cut runbook; README's Contribution section links to both.  Co-authored-by: Cursor <cursoragent@cursor.com>  * style: resolve linter issues  ---------  Co-authored-by: Cursor <cursoragent@cursor.com>") | 2 months agoJun 17, 2026 |
| [.editorconfig](https://github.com/crewAIInc/crewAI/blob/main/.editorconfig ".editorconfig") | [.editorconfig](https://github.com/crewAIInc/crewAI/blob/main/.editorconfig ".editorconfig") | [adding editor config](https://github.com/crewAIInc/crewAI/commit/c95eed3fe0ce7a8486e38779d4b972e3ed39c9d4 "adding editor config") | 2 years agoApr 1, 2024 |
| [.env.test](https://github.com/crewAIInc/crewAI/blob/main/.env.test ".env.test") | [.env.test](https://github.com/crewAIInc/crewAI/blob/main/.env.test ".env.test") | [fix: bedrock region was always set to "us-east-1" not respecting the …](https://github.com/crewAIInc/crewAI/commit/7377e1aa2658e9d03dad715976ec94a41b6b5e6d "fix: bedrock region was always set to \"us-east-1\" not respecting the env var. (#4582)  * fix: bedrock region was always set to \"us-east-1\" not respecting the env var.  code had AWS_REGION_NAME referenced, but not used, unified to AWS_DEFAULT_REGION as per documentation  * DRY code improvement and fix caught by tests.  * Supporting litellm configuration") | 6 months agoFeb 24, 2026 |
| [.gitignore](https://github.com/crewAIInc/crewAI/blob/main/.gitignore ".gitignore") | [.gitignore](https://github.com/crewAIInc/crewAI/blob/main/.gitignore ".gitignore") | [JSON first crews (](https://github.com/crewAIInc/crewAI/commit/bb477f8a91460c744871e02fc606077eeb634a95 "JSON first crews (#6131)  * feat(cli): introduce JSON crew project support and TUI enhancements  - Added support for creating and running JSON-defined crew projects, allowing users to scaffold projects with a new `create_json_crew.py` file. - Implemented a full-screen Textual TUI for crew execution in `crew_run_tui.py`, enhancing user interaction with a two-column layout. - Updated `run_crew.py` to prioritize JSON crew projects and added daemon mode for running without TUI. - Introduced interactive pickers in `tui_picker.py` for improved CLI prompts. - Enhanced validation for JSON crew files in `validate.py` to ensure proper structure and agent definitions. - Updated `.gitignore` to exclude demo and crewai directories.  * feat: update LLM model references to gpt-5.4-mini  - Changed default LLM model from gpt-4o-mini to gpt-5.4-mini across various files, including CLI options, JSON crew configurations, and agent definitions. - Enhanced benchmark and human feedback functionalities to utilize the new model. - Improved user interface elements in the TUI for better interaction and feedback during execution. - Added support for new skills directory in JSON crew project creation.  * feat(benchmark): add crew-level benchmarking functionality  - Introduced a new `benchmark` command in the CLI for crew-level benchmarking, allowing users to specify agents, models, and timeout settings. - Implemented `CrewBenchmarkCase` to handle crew-level benchmark cases with inputs and criteria. - Enhanced the benchmark runner to support progress tracking and detailed reporting of results for multiple models. - Added tests for loading crew benchmark cases and validating their structure. - Updated existing benchmark functions to accommodate the new crew-level execution model.  * feat(cli): enhance JSON crew project functionality and TUI improvements  - Added optional agent-level guardrails and advanced options in JSON crew configurations to improve output validation and flexibility. - Updated the TUI to better handle plan step statuses, including visual indicators for task completion and failure. - Introduced methods for parsing and managing step observation events, ensuring accurate updates to task statuses during execution. - Enhanced validation for JSON crew projects, ensuring proper structure and error handling for agent and task definitions. - Added comprehensive tests for new features and validation logic, ensuring robustness in JSON crew project handling.  * refactor(cli): streamline JSON crew project handling and improve validation  - Refactored JSON crew project loading and validation logic to enhance clarity and maintainability. - Introduced utility functions for finding JSON crew files, improving code reuse across modules. - Removed deprecated benchmark functionality and associated tests to simplify the codebase. - Updated CLI commands to utilize the new JSON project structure, ensuring compatibility with recent changes. - Enhanced test coverage for JSON crew project features, ensuring robust validation and error handling.  * feat(cli): enhance activity log navigation and focus management  - Added functionality to focus on the activity log when navigating through log entries. - Implemented refresh logic for the log panel to ensure updates are displayed correctly during navigation. - Improved keyboard navigation for log entries, allowing users to expand and scroll through logs seamlessly. - Added tests to verify the correct behavior of log navigation and focus management in the TUI.  * feat(cli): enhance JSON crew project interaction and input handling  - Introduced a new function to enable prompt line editing for better user experience during input prompts. - Updated the JSON crew project wizards to show interpolation hints for dynamic values, improving user guidance. - Enhanced the handling of missing input placeholders by prompting users for required values during crew setup. - Refactored the crew run logic to ensure proper loading and preparation of JSON-defined crews, including runtime input management. - Added tests to verify the correct behavior of new input handling features and JSON crew project interactions.  * feat(cli): improve crew project input prompts and event handling  - Enhanced the `_prompt_text` function to allow for configurable spacing before prompts, improving user experience during input collection. - Updated the wizards for agent and task creation to utilize the new prompt configuration, ensuring a more compact and streamlined interaction. - Introduced new plan step lifecycle events (`PlanStepStartedEvent`, `PlanStepCompletedEvent`) to better track the execution status of plan steps. - Refactored the step executor to emit these events during the execution of tasks, improving observability and debugging capabilities. - Added tests to verify the correct behavior of new prompt handling and event emissions during crew project execution.  * fix: refine json-first crew interactions  * fix: prioritize common json crew tools  * fix: make json crew more tools expandable  * fix: show json crew tools by category  * feat(memory): update default embedder to OpenAI text-embedding-3-large and enhance memory compatibility  - Changed the default embedding model for Memory to OpenAI text-embedding-3-large, which uses 3072-dimensional vectors. - Added warnings regarding compatibility issues with existing local memory stores created with 1536-dimensional embeddings. - Updated documentation to reflect the new default embedder and its configuration options. - Enhanced the CLI and codebase to support the new embedding model across various components, ensuring a seamless transition for users.  * fix: address PR review feedback for JSON-first crews  Review blockers: - Forward trained_agents_file to JSON crews: crewai run -f now exports   CREWAI_TRAINED_AGENTS_FILE for the in-process JSON crew path - Wizard agent picker: Esc/cancel now reprompts instead of silently   assigning the first agent - JSON tool resolution hard-fails: unknown tool names, missing custom   tool files, and invalid custom tool modules raise JSONProjectError   with actionable messages instead of warn-and-continue - Embedding dimension mismatch: LanceDB and Qdrant Edge storages raise   EmbeddingDimensionMismatchError with reset/pin guidance instead of   silently zero-filling vectors or returning empty search results - Custom tool code execution documented in loader docstring and the   scaffolded project README  CI fixes: - ruff format across lib/ - All 133 PR-introduced mypy errors fixed (llm.py lazy-litellm and   cli.py lazy command shims now use TYPE_CHECKING imports; textual   is_mounted misuse fixed; pick_many overloads; misc annotations)  Bot review comments: - Empty except blocks now have explanatory comments or debug logging - Removed unused _C_BG/_C_PANEL/_C_BORDER globals and redundant   import re; tests use a single import style for create_json_crew  Tests: trained-agents propagation, wizard cancel, tool resolution failures, and dimension mismatch guidance.  Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>  * fix: address second round of PR review comments  Cursor Bugbot: - Wizard agent slugs: strip to [a-z0-9_] and fall back to agent_<n> so   symbol-only roles can't produce an empty agents/.jsonc filename - Wizard task names: dedupe against prior task names and fall back to   task_<n> for symbol-only descriptions  CodeRabbit: - Agent.message(): import Task explicitly at runtime instead of relying   on the namespace injection done by crewai/__init__ - Async executor: move the native-tools-unsupported fallback from   _ainvoke_loop_react (self-recursion) to _ainvoke_loop_native_tools,   mirroring the sync implementation - StepExecutor downgrade: keep the in-step conversation and append the   text-tooling instructions instead of rebuilding messages, so completed   native tool calls are not re-executed - crewai-files: extension-based MIME lookup now runs before byte   sniffing so csv/xml types are not degraded to text/plain - Memory storages: validate every record in a save() batch against a   consistent embedding dimension (LanceDB previously checked only the   first record); added mixed-batch tests - _print_post_tui_summary now typed against CrewRunApp - Docs: Azure OpenAI default embedder change called out in the memory   migration warning and provider table  Code quality bots: - Removed unused _C_YELLOW/_C_CYAN (crew_run_tui) and _GREEN (tui_picker)  Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>  * feat(cli): accordion tool picker in JSON crew wizard  The flat tool list had grown to ~90 rows. The picker now shows: - Common tools always visible at the top - Every other category as a single expandable row with tool and   selection counts (e.g. \"Search & Research  (27 tools, 2 selected)\") - Expanding a category collapses the previously expanded one - Selections persist across expand/collapse via new preselected   support in pick_many; cursor follows the toggled category row  tui_picker gains preselected + initial_cursor options on pick_many, and Esc in multi-select now confirms the current selection instead of discarding it (required so collapsing can't silently drop choices).  Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>  * refactor(cli): remove --daemon flag from crewai run  The flag only affected JSON crew projects — classic and flow projects ignored it entirely, which made the behavior inconsistent. Removed the option, the daemon code path (_run_json_crew_daemon), and its helper (_load_json_crew_with_inputs).  Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>  * test: update run command tests after --daemon removal  lib/crewai/tests/cli/test_run_crew.py still asserted the old run_crew(trained_agents_file=..., daemon=False) call signature.  Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>  * fix(cli): exit codes, mid-run quit, async statuses, hyphen placeholders  Addresses the latest Bugbot review round:  - Failed JSON crew runs now exit non-zero (SystemExit(1)) so scripts   and CI don't treat failures as success, mirroring the classic path - Quitting the TUI mid-run now ends the process (os._exit(130));   kickoff runs in a thread worker that cannot be force-cancelled, so   letting the CLI return would leave LLM/tool work burning tokens in   the background - Sidebar task statuses are now async-safe: completion/failure events   resolve the task's own row via identity instead of assuming the most   recently started task, and starting a task no longer blanket-marks   earlier active rows as done - The runtime-input prompt regex now accepts hyphenated placeholder   names ({my-topic}), matching kickoff's interpolation pattern  Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>  * fix: validation safety, custom tool sandboxing, TUI log integrity, memory error surfacing  - Deploy validation no longer executes project code: validation mode   checks tool declarations structurally (well-formed entries, custom   tool file exists) without importing or instantiating anything.   custom:<name> resolution only happens on the actual run path. - custom:<name> is constrained to [A-Za-z_][A-Za-z0-9_]* and the   resolved path must stay inside the project's tools/ directory, so   custom:../foo or absolute-path names cannot execute code outside it.   Tool paths resolve relative to the crew project root, not cwd. - TUI task logs are built from per-task state captured at task start   (idx, description, agent, start time); an out-of-order completion   takes its output from the event and no longer steals or resets the   current task's streamed steps/output. - EmbeddingDimensionMismatchError now inherits ValueError instead of   RuntimeError so background saves surface it through   MemorySaveFailedEvent instead of silently dropping the save; the   shutdown catch in _background_encode_batch is narrowed to the   \"cannot schedule new futures\" case.  Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>  * fix(cli): declared project type wins over crew.json presence  A flow project that also contains a crew.json(c) file now runs and validates as the flow it declares in pyproject.toml instead of being hijacked by the JSON crew path. Both crewai run (_has_json_crew) and deploy validation (_is_json_crew) check tool.crewai.type; a missing or unreadable pyproject still means a bare JSON crew project.  Also documents why StepObservationFailedEvent intentionally marks the plan step \"done\": the event signals an observer failure, not a step failure, and the executor continues past it.  Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>  * fix(cli): type the declared_type locals so mypy stays clean  Comparing an Any-typed .get() chain returns Any, which tripped no-any-return on the previous commit.  Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>  ---------  Co-authored-by: Claude Fable 5 <noreply@anthropic.com>") [#6131](https://github.com/crewAIInc/crewAI/pull/6131) [)](https://github.com/crewAIInc/crewAI/commit/bb477f8a91460c744871e02fc606077eeb634a95 "JSON first crews (#6131)  * feat(cli): introduce JSON crew project support and TUI enhancements  - Added support for creating and running JSON-defined crew projects, allowing users to scaffold projects with a new `create_json_crew.py` file. - Implemented a full-screen Textual TUI for crew execution in `crew_run_tui.py`, enhancing user interaction with a two-column layout. - Updated `run_crew.py` to prioritize JSON crew projects and added daemon mode for running without TUI. - Introduced interactive pickers in `tui_picker.py` for improved CLI prompts. - Enhanced validation for JSON crew files in `validate.py` to ensure proper structure and agent definitions. - Updated `.gitignore` to exclude demo and crewai directories.  * feat: update LLM model references to gpt-5.4-mini  - Changed default LLM model from gpt-4o-mini to gpt-5.4-mini across various files, including CLI options, JSON crew configurations, and agent definitions. - Enhanced benchmark and human feedback functionalities to utilize the new model. - Improved user interface elements in the TUI for better interaction and feedback during execution. - Added support for new skills directory in JSON crew project creation.  * feat(benchmark): add crew-level benchmarking functionality  - Introduced a new `benchmark` command in the CLI for crew-level benchmarking, allowing users to specify agents, models, and timeout settings. - Implemented `CrewBenchmarkCase` to handle crew-level benchmark cases with inputs and criteria. - Enhanced the benchmark runner to support progress tracking and detailed reporting of results for multiple models. - Added tests for loading crew benchmark cases and validating their structure. - Updated existing benchmark functions to accommodate the new crew-level execution model.  * feat(cli): enhance JSON crew project functionality and TUI improvements  - Added optional agent-level guardrails and advanced options in JSON crew configurations to improve output validation and flexibility. - Updated the TUI to better handle plan step statuses, including visual indicators for task completion and failure. - Introduced methods for parsing and managing step observation events, ensuring accurate updates to task statuses during execution. - Enhanced validation for JSON crew projects, ensuring proper structure and error handling for agent and task definitions. - Added comprehensive tests for new features and validation logic, ensuring robustness in JSON crew project handling.  * refactor(cli): streamline JSON crew project handling and improve validation  - Refactored JSON crew project loading and validation logic to enhance clarity and maintainability. - Introduced utility functions for finding JSON crew files, improving code reuse across modules. - Removed deprecated benchmark functionality and associated tests to simplify the codebase. - Updated CLI commands to utilize the new JSON project structure, ensuring compatibility with recent changes. - Enhanced test coverage for JSON crew project features, ensuring robust validation and error handling.  * feat(cli): enhance activity log navigation and focus management  - Added functionality to focus on the activity log when navigating through log entries. - Implemented refresh logic for the log panel to ensure updates are displayed correctly during navigation. - Improved keyboard navigation for log entries, allowing users to expand and scroll through logs seamlessly. - Added tests to verify the correct behavior of log navigation and focus management in the TUI.  * feat(cli): enhance JSON crew project interaction and input handling  - Introduced a new function to enable prompt line editing for better user experience during input prompts. - Updated the JSON crew project wizards to show interpolation hints for dynamic values, improving user guidance. - Enhanced the handling of missing input placeholders by prompting users for required values during crew setup. - Refactored the crew run logic to ensure proper loading and preparation of JSON-defined crews, including runtime input management. - Added tests to verify the correct behavior of new input handling features and JSON crew project interactions.  * feat(cli): improve crew project input prompts and event handling  - Enhanced the `_prompt_text` function to allow for configurable spacing before prompts, improving user experience during input collection. - Updated the wizards for agent and task creation to utilize the new prompt configuration, ensuring a more compact and streamlined interaction. - Introduced new plan step lifecycle events (`PlanStepStartedEvent`, `PlanStepCompletedEvent`) to better track the execution status of plan steps. - Refactored the step executor to emit these events during the execution of tasks, improving observability and debugging capabilities. - Added tests to verify the correct behavior of new prompt handling and event emissions during crew project execution.  * fix: refine json-first crew interactions  * fix: prioritize common json crew tools  * fix: make json crew more tools expandable  * fix: show json crew tools by category  * feat(memory): update default embedder to OpenAI text-embedding-3-large and enhance memory compatibility  - Changed the default embedding model for Memory to OpenAI text-embedding-3-large, which uses 3072-dimensional vectors. - Added warnings regarding compatibility issues with existing local memory stores created with 1536-dimensional embeddings. - Updated documentation to reflect the new default embedder and its configuration options. - Enhanced the CLI and codebase to support the new embedding model across various components, ensuring a seamless transition for users.  * fix: address PR review feedback for JSON-first crews  Review blockers: - Forward trained_agents_file to JSON crews: crewai run -f now exports   CREWAI_TRAINED_AGENTS_FILE for the in-process JSON crew path - Wizard agent picker: Esc/cancel now reprompts instead of silently   assigning the first agent - JSON tool resolution hard-fails: unknown tool names, missing custom   tool files, and invalid custom tool modules raise JSONProjectError   with actionable messages instead of warn-and-continue - Embedding dimension mismatch: LanceDB and Qdrant Edge storages raise   EmbeddingDimensionMismatchError with reset/pin guidance instead of   silently zero-filling vectors or returning empty search results - Custom tool code execution documented in loader docstring and the   scaffolded project README  CI fixes: - ruff format across lib/ - All 133 PR-introduced mypy errors fixed (llm.py lazy-litellm and   cli.py lazy command shims now use TYPE_CHECKING imports; textual   is_mounted misuse fixed; pick_many overloads; misc annotations)  Bot review comments: - Empty except blocks now have explanatory comments or debug logging - Removed unused _C_BG/_C_PANEL/_C_BORDER globals and redundant   import re; tests use a single import style for create_json_crew  Tests: trained-agents propagation, wizard cancel, tool resolution failures, and dimension mismatch guidance.  Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>  * fix: address second round of PR review comments  Cursor Bugbot: - Wizard agent slugs: strip to [a-z0-9_] and fall back to agent_<n> so   symbol-only roles can't produce an empty agents/.jsonc filename - Wizard task names: dedupe against prior task names and fall back to   task_<n> for symbol-only descriptions  CodeRabbit: - Agent.message(): import Task explicitly at runtime instead of relying   on the namespace injection done by crewai/__init__ - Async executor: move the native-tools-unsupported fallback from   _ainvoke_loop_react (self-recursion) to _ainvoke_loop_native_tools,   mirroring the sync implementation - StepExecutor downgrade: keep the in-step conversation and append the   text-tooling instructions instead of rebuilding messages, so completed   native tool calls are not re-executed - crewai-files: extension-based MIME lookup now runs before byte   sniffing so csv/xml types are not degraded to text/plain - Memory storages: validate every record in a save() batch against a   consistent embedding dimension (LanceDB previously checked only the   first record); added mixed-batch tests - _print_post_tui_summary now typed against CrewRunApp - Docs: Azure OpenAI default embedder change called out in the memory   migration warning and provider table  Code quality bots: - Removed unused _C_YELLOW/_C_CYAN (crew_run_tui) and _GREEN (tui_picker)  Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>  * feat(cli): accordion tool picker in JSON crew wizard  The flat tool list had grown to ~90 rows. The picker now shows: - Common tools always visible at the top - Every other category as a single expandable row with tool and   selection counts (e.g. \"Search & Research  (27 tools, 2 selected)\") - Expanding a category collapses the previously expanded one - Selections persist across expand/collapse via new preselected   support in pick_many; cursor follows the toggled category row  tui_picker gains preselected + initial_cursor options on pick_many, and Esc in multi-select now confirms the current selection instead of discarding it (required so collapsing can't silently drop choices).  Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>  * refactor(cli): remove --daemon flag from crewai run  The flag only affected JSON crew projects — classic and flow projects ignored it entirely, which made the behavior inconsistent. Removed the option, the daemon code path (_run_json_crew_daemon), and its helper (_load_json_crew_with_inputs).  Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>  * test: update run command tests after --daemon removal  lib/crewai/tests/cli/test_run_crew.py still asserted the old run_crew(trained_agents_file=..., daemon=False) call signature.  Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>  * fix(cli): exit codes, mid-run quit, async statuses, hyphen placeholders  Addresses the latest Bugbot review round:  - Failed JSON crew runs now exit non-zero (SystemExit(1)) so scripts   and CI don't treat failures as success, mirroring the classic path - Quitting the TUI mid-run now ends the process (os._exit(130));   kickoff runs in a thread worker that cannot be force-cancelled, so   letting the CLI return would leave LLM/tool work burning tokens in   the background - Sidebar task statuses are now async-safe: completion/failure events   resolve the task's own row via identity instead of assuming the most   recently started task, and starting a task no longer blanket-marks   earlier active rows as done - The runtime-input prompt regex now accepts hyphenated placeholder   names ({my-topic}), matching kickoff's interpolation pattern  Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>  * fix: validation safety, custom tool sandboxing, TUI log integrity, memory error surfacing  - Deploy validation no longer executes project code: validation mode   checks tool declarations structurally (well-formed entries, custom   tool file exists) without importing or instantiating anything.   custom:<name> resolution only happens on the actual run path. - custom:<name> is constrained to [A-Za-z_][A-Za-z0-9_]* and the   resolved path must stay inside the project's tools/ directory, so   custom:../foo or absolute-path names cannot execute code outside it.   Tool paths resolve relative to the crew project root, not cwd. - TUI task logs are built from per-task state captured at task start   (idx, description, agent, start time); an out-of-order completion   takes its output from the event and no longer steals or resets the   current task's streamed steps/output. - EmbeddingDimensionMismatchError now inherits ValueError instead of   RuntimeError so background saves surface it through   MemorySaveFailedEvent instead of silently dropping the save; the   shutdown catch in _background_encode_batch is narrowed to the   \"cannot schedule new futures\" case.  Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>  * fix(cli): declared project type wins over crew.json presence  A flow project that also contains a crew.json(c) file now runs and validates as the flow it declares in pyproject.toml instead of being hijacked by the JSON crew path. Both crewai run (_has_json_crew) and deploy validation (_is_json_crew) check tool.crewai.type; a missing or unreadable pyproject still means a bare JSON crew project.  Also documents why StepObservationFailedEvent intentionally marks the plan step \"done\": the event signals an observer failure, not a step failure, and the executor continues past it.  Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>  * fix(cli): type the declared_type locals so mypy stays clean  Comparing an Any-typed .get() chain returns Any, which tripped no-any-return on the previous commit.  Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>  ---------  Co-authored-by: Claude Fable 5 <noreply@anthropic.com>") | 2 months agoJun 14, 2026 |
| [.pre-commit-config.yaml](https://github.com/crewAIInc/crewAI/blob/main/.pre-commit-config.yaml ".pre-commit-config.yaml") | [.pre-commit-config.yaml](https://github.com/crewAIInc/crewAI/blob/main/.pre-commit-config.yaml ".pre-commit-config.yaml") | [fix(deps): bump torch to 2.13.0 for](https://github.com/crewAIInc/crewAI/commit/505d52323fd4613227edcfdc119c51e0022caef3 "fix(deps): bump torch to 2.13.0 for GHSA-rrmf-rvhw-rf47 (#6957)  Force torch>=2.13.0 via override-dependencies so the transitive docling/unstructured stack picks up the CVE-2025-3000 fix, and drop the now-unnecessary pip-audit ignore. chromadb's CVE-2026-45829 remains ignored: the upstream fix is merged but not released on PyPI.  Co-authored-by: Cursor Agent <cursoragent@cursor.com> Co-authored-by: Rip&Tear <theCyberTech@users.noreply.github.com>") [GHSA-rrmf-rvhw-rf47](https://github.com/advisories/GHSA-rrmf-rvhw-rf47 "GHSA-rrmf-rvhw-rf47") [(](https://github.com/crewAIInc/crewAI/commit/505d52323fd4613227edcfdc119c51e0022caef3 "fix(deps): bump torch to 2.13.0 for GHSA-rrmf-rvhw-rf47 (#6957)  Force torch>=2.13.0 via override-dependencies so the transitive docling/unstructured stack picks up the CVE-2025-3000 fix, and drop the now-unnecessary pip-audit ignore. chromadb's CVE-2026-45829 remains ignored: the upstream fix is merged but not released on PyPI.  Co-authored-by: Cursor Agent <cursoragent@cursor.com> Co-authored-by: Rip&Tear <theCyberTech@users.noreply.github.com>") [#6957](https://github.com/crewAIInc/crewAI/pull/6957) [)](https://github.com/crewAIInc/crewAI/commit/505d52323fd4613227edcfdc119c51e0022caef3 "fix(deps): bump torch to 2.13.0 for GHSA-rrmf-rvhw-rf47 (#6957)  Force torch>=2.13.0 via override-dependencies so the transitive docling/unstructured stack picks up the CVE-2025-3000 fix, and drop the now-unnecessary pip-audit ignore. chromadb's CVE-2026-45829 remains ignored: the upstream fix is merged but not released on PyPI.  Co-authored-by: Cursor Agent <cursoragent@cursor.com> Co-authored-by: Rip&Tear <theCyberTech@users.noreply.github.com>") | 2 weeks agoAug 11, 2026 |
| [.python-version](https://github.com/crewAIInc/crewAI/blob/main/.python-version ".python-version") | [.python-version](https://github.com/crewAIInc/crewAI/blob/main/.python-version ".python-version") | [fix: add .python-version to fix Dependabot uv updates (](https://github.com/crewAIInc/crewAI/commit/fee94450677e685cb6443b0e971d9d1a3ceda9da "fix: add .python-version to fix Dependabot uv updates (#4352)  Dependabot's uv updater defaults to Python 3.14.2, which is incompatible with the project's requires-python constraint (>=3.10, <3.14). Adding .python-version pins the Python version to 3.13 for dependency updates.  Co-authored-by: Greyson LaLonde <greyson.r.lalonde@gmail.com>") [#4352](https://github.com/crewAIInc/crewAI/pull/4352) [)](https://github.com/crewAIInc/crewAI/commit/fee94450677e685cb6443b0e971d9d1a3ceda9da "fix: add .python-version to fix Dependabot uv updates (#4352)  Dependabot's uv updater defaults to Python 3.14.2, which is incompatible with the project's requires-python constraint (>=3.10, <3.14). Adding .python-version pins the Python version to 3.13 for dependency updates.  Co-authored-by: Greyson LaLonde <greyson.r.lalonde@gmail.com>") | 6 months agoFeb 3, 2026 |
| [AGENTS.md](https://github.com/crewAIInc/crewAI/blob/main/AGENTS.md "AGENTS.md") | [AGENTS.md](https://github.com/crewAIInc/crewAI/blob/main/AGENTS.md "AGENTS.md") | [docs: add DOCS\_TRANSLATIONS workflow for locale sync (](https://github.com/crewAIInc/crewAI/commit/03e3724bff26587b3d2e6eecc75c1ba9a04d5258 "docs: add DOCS_TRANSLATIONS workflow for locale sync (#6846)  * docs: add DOCS_TRANSLATIONS workflow for locale sync  Document how to git-detect English MDX changes and sync ar, ko, and pt-BR translations, and reference it from AGENTS.md.  * docs: add fence language tags in DOCS_TRANSLATIONS.md  Mark the checklist and example output blocks with markdown and text identifiers for correct rendering.") [#6846](https://github.com/crewAIInc/crewAI/pull/6846) [)](https://github.com/crewAIInc/crewAI/commit/03e3724bff26587b3d2e6eecc75c1ba9a04d5258 "docs: add DOCS_TRANSLATIONS workflow for locale sync (#6846)  * docs: add DOCS_TRANSLATIONS workflow for locale sync  Document how to git-detect English MDX changes and sync ar, ko, and pt-BR translations, and reference it from AGENTS.md.  * docs: add fence language tags in DOCS_TRANSLATIONS.md  Mark the checklist and example output blocks with markdown and text identifiers for correct rendering.") | 2 weeks agoAug 7, 2026 |
| [DOCS\_TRANSLATIONS.md](https://github.com/crewAIInc/crewAI/blob/main/DOCS_TRANSLATIONS.md "DOCS_TRANSLATIONS.md") | [DOCS\_TRANSLATIONS.md](https://github.com/crewAIInc/crewAI/blob/main/DOCS_TRANSLATIONS.md "DOCS_TRANSLATIONS.md") | [docs: add DOCS\_TRANSLATIONS workflow for locale sync (](https://github.com/crewAIInc/crewAI/commit/03e3724bff26587b3d2e6eecc75c1ba9a04d5258 "docs: add DOCS_TRANSLATIONS workflow for locale sync (#6846)  * docs: add DOCS_TRANSLATIONS workflow for locale sync  Document how to git-detect English MDX changes and sync ar, ko, and pt-BR translations, and reference it from AGENTS.md.  * docs: add fence language tags in DOCS_TRANSLATIONS.md  Mark the checklist and example output blocks with markdown and text identifiers for correct rendering.") [#6846](https://github.com/crewAIInc/crewAI/pull/6846) [)](https://github.com/crewAIInc/crewAI/commit/03e3724bff26587b3d2e6eecc75c1ba9a04d5258 "docs: add DOCS_TRANSLATIONS workflow for locale sync (#6846)  * docs: add DOCS_TRANSLATIONS workflow for locale sync  Document how to git-detect English MDX changes and sync ar, ko, and pt-BR translations, and reference it from AGENTS.md.  * docs: add fence language tags in DOCS_TRANSLATIONS.md  Mark the checklist and example output blocks with markdown and text identifiers for correct rendering.") | 2 weeks agoAug 7, 2026 |
| [LICENSE](https://github.com/crewAIInc/crewAI/blob/main/LICENSE "LICENSE") | [LICENSE](https://github.com/crewAIInc/crewAI/blob/main/LICENSE "LICENSE") | [preparing new version](https://github.com/crewAIInc/crewAI/commit/435bfca186e62db8f2675347f7b60f2eae028301 "preparing new version") | last yearMar 9, 2025 |
| [README.md](https://github.com/crewAIInc/crewAI/blob/main/README.md "README.md") | [README.md](https://github.com/crewAIInc/crewAI/blob/main/README.md "README.md") | [docs: fix broken README links, TOC, and contribution guidance (](https://github.com/crewAIInc/crewAI/commit/0a8f6c920f806e0af5f433b16bcade0afd371d4e "docs: fix broken README links, TOC, and contribution guidance (#6854)  * docs: fix broken README links, TOC, and contribution guidance  Update stale docs/AMP URLs, repair the Learning Resources heading and TOC nesting, align contribution commands with the monorepo CONTRIBUTING guide, and clean up small copy issues in examples and FAQ.  Co-authored-by: Rip&Tear <theCyberTech@users.noreply.github.com>  * docs: restore tiktoken troubleshooting wording in README  Keep the more explicit install guidance per review feedback.  Co-authored-by: Rip&Tear <theCyberTech@users.noreply.github.com>  ---------  Co-authored-by: Cursor Agent <cursoragent@cursor.com> Co-authored-by: Rip&Tear <theCyberTech@users.noreply.github.com>") [#6854](https://github.com/crewAIInc/crewAI/pull/6854) [)](https://github.com/crewAIInc/crewAI/commit/0a8f6c920f806e0af5f433b16bcade0afd371d4e "docs: fix broken README links, TOC, and contribution guidance (#6854)  * docs: fix broken README links, TOC, and contribution guidance  Update stale docs/AMP URLs, repair the Learning Resources heading and TOC nesting, align contribution commands with the monorepo CONTRIBUTING guide, and clean up small copy issues in examples and FAQ.  Co-authored-by: Rip&Tear <theCyberTech@users.noreply.github.com>  * docs: restore tiktoken troubleshooting wording in README  Keep the more explicit install guidance per review feedback.  Co-authored-by: Rip&Tear <theCyberTech@users.noreply.github.com>  ---------  Co-authored-by: Cursor Agent <cursoragent@cursor.com> Co-authored-by: Rip&Tear <theCyberTech@users.noreply.github.com>") | 2 weeks agoAug 7, 2026 |
| [conftest.py](https://github.com/crewAIInc/crewAI/blob/main/conftest.py "conftest.py") | [conftest.py](https://github.com/crewAIInc/crewAI/blob/main/conftest.py "conftest.py") | [Keep JSON crew projects and deploy archives Python-free (](https://github.com/crewAIInc/crewAI/commit/4cbfbdb23222cfa2c289eab6b64b55b8a312aa79 "Keep JSON crew projects and deploy archives Python-free (#6228)  * fix: scaffold deployable json crews  * fix: keep json crew scaffolds python-free  * fix: keep json deploy archives python-free  * fix: tighten json crew deploy validation  * fix: address json crew pr checks  * fix: clear langsmith audit advisory") [#6228](https://github.com/crewAIInc/crewAI/pull/6228) [)](https://github.com/crewAIInc/crewAI/commit/4cbfbdb23222cfa2c289eab6b64b55b8a312aa79 "Keep JSON crew projects and deploy archives Python-free (#6228)  * fix: scaffold deployable json crews  * fix: keep json crew scaffolds python-free  * fix: keep json deploy archives python-free  * fix: tighten json crew deploy validation  * fix: address json crew pr checks  * fix: clear langsmith audit advisory") | 2 months agoJun 22, 2026 |
| [pyproject.toml](https://github.com/crewAIInc/crewAI/blob/main/pyproject.toml "pyproject.toml") | [pyproject.toml](https://github.com/crewAIInc/crewAI/blob/main/pyproject.toml "pyproject.toml") | [fix(deps): raise the pip floor to 26.2 for PYSEC-2026-3721 (](https://github.com/crewAIInc/crewAI/commit/113e572e0535a00a5f2d908a4b073cb7aa72246d "fix(deps): raise the pip floor to 26.2 for PYSEC-2026-3721 (#7076)  pip-audit started failing on every open PR. The advisory is against pip itself: PYSEC-2026-3721 / CVE-2026-13346, which OSV records as affecting pip up to but not including 26.2. The floor was already pinned at >=26.1.2, so the previously patched version became the vulnerable one.  Not caused by any open PR. Reproduced on tag 1.15.17 itself (`b3ab193c3`), which resolves pip 26.1.2: `uv run pip-audit` with CI's exact arguments reports \"Found 1 known vulnerability\" there with no branch changes at all. That is why this is its own PR rather than a fix inside whichever PR happened to run first.  Raising the floor rather than adding --ignore-vuln, since a patched release exists: 26.2 fixes it and 26.2.1 is current. The trailing comment follows the convention already used for setuptools>=83.0.0.  The uv.lock change is deliberately hand-scoped to pip's four lines. Running `uv lock` -- with either uv 0.11.12 or 0.11.15 -- also re-expands environment markers for numpy, humanfriendly, grpcio, mcp and a dozen nvidia-* packages, because the committed lock was produced by a uv that simplifies markers differently from any version available here. Those rewrites change CUDA and platform resolution and have no business riding along in a security fix. The four lines applied here are exactly the ones uv itself produced for pip.  Verified: `uv lock --check` passes, so the lock is consistent with pyproject and needs no regeneration; pip resolves to 26.2.1; `uv run pip-audit` with CI's arguments reports \"No known vulnerabilities found, 1 ignored\"; crewai and crewai_core still import.   Claude-Session: https://claude.ai/code/session_01RfV2uMqWRcdfufMvtdCVoN  Co-authored-by: Claude Opus 5 (1M context) <noreply@anthropic.com> Co-authored-by: Vidit Ostwal <110953813+Vidit-Ostwal@users.noreply.github.com>") [#7076](https://github.com/crewAIInc/crewAI/pull/7076) [)](https://github.com/crewAIInc/crewAI/commit/113e572e0535a00a5f2d908a4b073cb7aa72246d "fix(deps): raise the pip floor to 26.2 for PYSEC-2026-3721 (#7076)  pip-audit started failing on every open PR. The advisory is against pip itself: PYSEC-2026-3721 / CVE-2026-13346, which OSV records as affecting pip up to but not including 26.2. The floor was already pinned at >=26.1.2, so the previously patched version became the vulnerable one.  Not caused by any open PR. Reproduced on tag 1.15.17 itself (`b3ab193c3`), which resolves pip 26.1.2: `uv run pip-audit` with CI's exact arguments reports \"Found 1 known vulnerability\" there with no branch changes at all. That is why this is its own PR rather than a fix inside whichever PR happened to run first.  Raising the floor rather than adding --ignore-vuln, since a patched release exists: 26.2 fixes it and 26.2.1 is current. The trailing comment follows the convention already used for setuptools>=83.0.0.  The uv.lock change is deliberately hand-scoped to pip's four lines. Running `uv lock` -- with either uv 0.11.12 or 0.11.15 -- also re-expands environment markers for numpy, humanfriendly, grpcio, mcp and a dozen nvidia-* packages, because the committed lock was produced by a uv that simplifies markers differently from any version available here. Those rewrites change CUDA and platform resolution and have no business riding along in a security fix. The four lines applied here are exactly the ones uv itself produced for pip.  Verified: `uv lock --check` passes, so the lock is consistent with pyproject and needs no regeneration; pip resolves to 26.2.1; `uv run pip-audit` with CI's arguments reports \"No known vulnerabilities found, 1 ignored\"; crewai and crewai_core still import.   Claude-Session: https://claude.ai/code/session_01RfV2uMqWRcdfufMvtdCVoN  Co-authored-by: Claude Opus 5 (1M context) <noreply@anthropic.com> Co-authored-by: Vidit Ostwal <110953813+Vidit-Ostwal@users.noreply.github.com>") | 2 days agoAug 21, 2026 |
| [uv.lock](https://github.com/crewAIInc/crewAI/blob/main/uv.lock "uv.lock") | [uv.lock](https://github.com/crewAIInc/crewAI/blob/main/uv.lock "uv.lock") | [fix(deps): raise the pip floor to 26.2 for PYSEC-2026-3721 (](https://github.com/crewAIInc/crewAI/commit/113e572e0535a00a5f2d908a4b073cb7aa72246d "fix(deps): raise the pip floor to 26.2 for PYSEC-2026-3721 (#7076)  pip-audit started failing on every open PR. The advisory is against pip itself: PYSEC-2026-3721 / CVE-2026-13346, which OSV records as affecting pip up to but not including 26.2. The floor was already pinned at >=26.1.2, so the previously patched version became the vulnerable one.  Not caused by any open PR. Reproduced on tag 1.15.17 itself (`b3ab193c3`), which resolves pip 26.1.2: `uv run pip-audit` with CI's exact arguments reports \"Found 1 known vulnerability\" there with no branch changes at all. That is why this is its own PR rather than a fix inside whichever PR happened to run first.  Raising the floor rather than adding --ignore-vuln, since a patched release exists: 26.2 fixes it and 26.2.1 is current. The trailing comment follows the convention already used for setuptools>=83.0.0.  The uv.lock change is deliberately hand-scoped to pip's four lines. Running `uv lock` -- with either uv 0.11.12 or 0.11.15 -- also re-expands environment markers for numpy, humanfriendly, grpcio, mcp and a dozen nvidia-* packages, because the committed lock was produced by a uv that simplifies markers differently from any version available here. Those rewrites change CUDA and platform resolution and have no business riding along in a security fix. The four lines applied here are exactly the ones uv itself produced for pip.  Verified: `uv lock --check` passes, so the lock is consistent with pyproject and needs no regeneration; pip resolves to 26.2.1; `uv run pip-audit` with CI's arguments reports \"No known vulnerabilities found, 1 ignored\"; crewai and crewai_core still import.   Claude-Session: https://claude.ai/code/session_01RfV2uMqWRcdfufMvtdCVoN  Co-authored-by: Claude Opus 5 (1M context) <noreply@anthropic.com> Co-authored-by: Vidit Ostwal <110953813+Vidit-Ostwal@users.noreply.github.com>") [#7076](https://github.com/crewAIInc/crewAI/pull/7076) [)](https://github.com/crewAIInc/crewAI/commit/113e572e0535a00a5f2d908a4b073cb7aa72246d "fix(deps): raise the pip floor to 26.2 for PYSEC-2026-3721 (#7076)  pip-audit started failing on every open PR. The advisory is against pip itself: PYSEC-2026-3721 / CVE-2026-13346, which OSV records as affecting pip up to but not including 26.2. The floor was already pinned at >=26.1.2, so the previously patched version became the vulnerable one.  Not caused by any open PR. Reproduced on tag 1.15.17 itself (`b3ab193c3`), which resolves pip 26.1.2: `uv run pip-audit` with CI's exact arguments reports \"Found 1 known vulnerability\" there with no branch changes at all. That is why this is its own PR rather than a fix inside whichever PR happened to run first.  Raising the floor rather than adding --ignore-vuln, since a patched release exists: 26.2 fixes it and 26.2.1 is current. The trailing comment follows the convention already used for setuptools>=83.0.0.  The uv.lock change is deliberately hand-scoped to pip's four lines. Running `uv lock` -- with either uv 0.11.12 or 0.11.15 -- also re-expands environment markers for numpy, humanfriendly, grpcio, mcp and a dozen nvidia-* packages, because the committed lock was produced by a uv that simplifies markers differently from any version available here. Those rewrites change CUDA and platform resolution and have no business riding along in a security fix. The four lines applied here are exactly the ones uv itself produced for pip.  Verified: `uv lock --check` passes, so the lock is consistent with pyproject and needs no regeneration; pip resolves to 26.2.1; `uv run pip-audit` with CI's arguments reports \"No known vulnerabilities found, 1 ignored\"; crewai and crewai_core still import.   Claude-Session: https://claude.ai/code/session_01RfV2uMqWRcdfufMvtdCVoN  Co-authored-by: Claude Opus 5 (1M context) <noreply@anthropic.com> Co-authored-by: Vidit Ostwal <110953813+Vidit-Ostwal@users.noreply.github.com>") | 2 days agoAug 21, 2026 |
| View all files |

## Repository files navigation

[![Open source Multi-AI Agent orchestration framework](https://github.com/crewAIInc/crewAI/raw/main/docs/images/crewai_logo.png)](https://github.com/crewAIInc/crewAI)

[![crewAIInc%2FcrewAI | Trendshift](https://camo.githubusercontent.com/56e320fe5f2eff0be9b37b0de7edb835fd7b791434293b5e4a69254d1a596443/68747470733a2f2f7472656e6473686966742e696f2f6170692f62616467652f7265706f7369746f726965732f3131323339)](https://trendshift.io/repositories/11239)

[Homepage](https://crewai.com/)
·
[Open Source](https://crewai.com/open-source)
·
[Docs](https://docs.crewai.com/)
·
[Start Cloud Trial](https://app.crewai.com/)
·
[Blog](https://blog.crewai.com/)
·
[Forum](https://community.crewai.com/)

[![GitHub Repo stars](https://camo.githubusercontent.com/5a0bf1ea10322791dd0a49a4be7e75cb4f02fa96f679921d805fc811c9575c53/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f637265774149496e632f637265774149)](https://github.com/crewAIInc/crewAI)[![GitHub forks](https://camo.githubusercontent.com/ceab8cadbb7b2c6ef783c2dcd0f17fdf37602e2287e2ba5e3f4251e5a64bb59a/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f666f726b732f637265774149496e632f637265774149)](https://github.com/crewAIInc/crewAI/network/members)[![GitHub issues](https://camo.githubusercontent.com/48965e98189f77e59d4ea15f6cf6c1bd58ff49e8cff5ce63848d24bca95885ea/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6973737565732f637265774149496e632f637265774149)](https://github.com/crewAIInc/crewAI/issues)[![GitHub pull requests](https://camo.githubusercontent.com/41719fc94304c826406102dc613cd7372f79cb3cb0e843dfebd26e51a4b6dc6b/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6973737565732d70722f637265774149496e632f637265774149)](https://github.com/crewAIInc/crewAI/pulls)[![License: MIT](https://camo.githubusercontent.com/784362b26e4b3546254f1893e778ba64616e362bd6ac791991d2c9e880a3a64e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4d49542d677265656e2e737667)](https://opensource.org/licenses/MIT)

[![PyPI version](https://camo.githubusercontent.com/db2effa40237f6653d3cdd3914d5db0761fb0e25ebe3a5c2b57ae12753ead65d/68747470733a2f2f696d672e736869656c64732e696f2f707970692f762f637265776169)](https://pypi.org/project/crewai/)[![PyPI downloads](https://camo.githubusercontent.com/9473c42e6a95831cff27a60c0a9b5f14635f755886a603e7fcebc13a3d80c307/68747470733a2f2f696d672e736869656c64732e696f2f707970692f646d2f637265776169)](https://pypi.org/project/crewai/)[![Twitter Follow](https://camo.githubusercontent.com/95e9be3c1806ed7868fb83aaffc99bfe25654ca6570c8d46e38b4a925e1cd60a/68747470733a2f2f696d672e736869656c64732e696f2f747769747465722f666f6c6c6f772f637265774149496e633f7374796c653d736f6369616c)](https://twitter.com/crewAIInc)

### Fast and Flexible Multi-Agent Automation Framework

[Permalink: Fast and Flexible Multi-Agent Automation Framework](https://github.com/crewAIInc/crewAI#fast-and-flexible-multi-agent-automation-framework)

> CrewAI is an open-source Python framework with high-level abstractions and low-level APIs for building production-ready multi-agent workflows.
> It gives developers autonomous agent collaboration through Crews and precise, event-driven control through Flows.

- **CrewAI Crews**: Optimize for autonomy and collaborative intelligence with role-based AI agents.
- **CrewAI Flows**: Build event-driven automations that combine precise workflow control, single LLM calls, and native support for Crews.

With over 100,000 developers certified through our community courses at [learn.crewai.com](https://learn.crewai.com/), CrewAI is rapidly becoming the
standard for production-ready agentic automation.

# CrewAI AMP Suite

[Permalink: CrewAI AMP Suite](https://github.com/crewAIInc/crewAI#crewai-amp-suite)

For organizations that need a commercial control plane around CrewAI, [CrewAI AMP Suite](https://crewai.com/amp) adds managed deployment, observability, governance, security, and enterprise support.

You can try one part of the suite, the [Crew Control Plane, for free](https://app.crewai.com/).

## Crew Control Plane Key Features:

[Permalink: Crew Control Plane Key Features:](https://github.com/crewAIInc/crewAI#crew-control-plane-key-features)

- **Tracing & Observability**: Monitor and track your AI agents and workflows in real-time, including metrics, logs, and traces.
- **Unified Control Plane**: A centralized platform for managing, monitoring, and scaling your AI agents and workflows.
- **Seamless Integrations**: Easily connect with existing enterprise systems, data sources, and cloud infrastructure.
- **Advanced Security**: Built-in robust security and compliance measures ensuring safe deployment and management.
- **Actionable Insights**: Real-time analytics and reporting to optimize performance and decision-making.
- **24/7 Support**: Dedicated enterprise support to ensure uninterrupted operation and quick resolution of issues.
- **On-premise and Cloud Deployment Options**: Deploy CrewAI AMP on-premise or in the cloud, depending on your security and compliance requirements.

CrewAI AMP is designed for enterprises seeking a powerful, reliable solution to transform complex business processes into efficient,
intelligent automations.

## Table of contents

[Permalink: Table of contents](https://github.com/crewAIInc/crewAI#table-of-contents)

- [Build with AI](https://github.com/crewAIInc/crewAI#build-with-ai)
- [Why CrewAI?](https://github.com/crewAIInc/crewAI#why-crewai)
- [Getting Started](https://github.com/crewAIInc/crewAI#getting-started)
  - [Learning Resources](https://github.com/crewAIInc/crewAI#learning-resources)
  - [Understanding Flows and Crews](https://github.com/crewAIInc/crewAI#understanding-flows-and-crews)
  - [Installation](https://github.com/crewAIInc/crewAI#1-installation)
  - [Setting Up Your Crew](https://github.com/crewAIInc/crewAI#2-setting-up-your-crew-with-the-yaml-configuration)
  - [Running Your Crew](https://github.com/crewAIInc/crewAI#3-running-your-crew)
- [Key Features](https://github.com/crewAIInc/crewAI#key-features)
- [Examples](https://github.com/crewAIInc/crewAI#examples)
  - [Quick Tutorial](https://github.com/crewAIInc/crewAI#quick-tutorial)
  - [Write Job Descriptions](https://github.com/crewAIInc/crewAI#write-job-descriptions)
  - [Trip Planner](https://github.com/crewAIInc/crewAI#trip-planner)
  - [Stock Analysis](https://github.com/crewAIInc/crewAI#stock-analysis)
  - [Using Crews and Flows Together](https://github.com/crewAIInc/crewAI#using-crews-and-flows-together)
- [Connecting Your Crew to a Model](https://github.com/crewAIInc/crewAI#connecting-your-crew-to-a-model)
- [When to Use CrewAI](https://github.com/crewAIInc/crewAI#when-to-use-crewai)
- [Contribution](https://github.com/crewAIInc/crewAI#contribution)
- [Telemetry](https://github.com/crewAIInc/crewAI#telemetry)
- [License](https://github.com/crewAIInc/crewAI#license)
- [Frequently Asked Questions (FAQ)](https://github.com/crewAIInc/crewAI#frequently-asked-questions-faq)

## Build with AI

[Permalink: Build with AI](https://github.com/crewAIInc/crewAI#build-with-ai)

Using an AI coding agent? Teach it CrewAI best practices in one command:

**Claude Code:**

```
/plugin marketplace add crewAIInc/skills
/plugin install crewai-skills@crewai-plugins
/reload-plugins
```

Four skills that activate automatically when you ask relevant CrewAI questions:

| Skill | When it runs |
| --- | --- |
| `getting-started` | Scaffolding new projects, choosing between `LLM.call()` / `Agent` / `Crew` / `Flow`, wiring `crew.py` / `main.py` |
| `design-agent` | Configuring agents — role, goal, backstory, tools, LLMs, memory, guardrails |
| `design-task` | Writing task descriptions, dependencies, structured output (`output_pydantic`, `output_json`), human review |
| `ask-docs` | Querying the live [CrewAI docs MCP server](https://docs.crewai.com/mcp) for up-to-date API details |

**Cursor, Codex, Windsurf, and others ( [skills.sh](https://skills.sh/crewaiinc/skills)):**

```
npx skills add crewaiinc/skills
```

This installs the official [CrewAI Skills](https://github.com/crewAIInc/skills) — structured instructions that teach coding agents how to scaffold Flows, configure Crews, design agents and tasks, and follow CrewAI patterns.

## Why CrewAI?

[Permalink: Why CrewAI?](https://github.com/crewAIInc/crewAI#why-crewai)

[![CrewAI Logo](https://github.com/crewAIInc/crewAI/raw/main/docs/images/asset.png)](https://github.com/crewAIInc/crewAI/blob/main/docs/images/asset.png)

CrewAI unlocks the true potential of multi-agent automation, delivering speed, flexibility, and control through Crews of AI agents and event-driven Flows:

- **Purpose-built architecture**: Designed specifically for agent orchestration, with a lightweight Python core and clean primitives for real-world automation.
- **High Performance**: Optimized for speed and minimal resource usage, enabling faster execution.
- **Flexible Low-Level Customization**: Complete freedom to customize everything from workflows and system architecture to agent behaviors, internal prompts, and execution logic.
- **Ideal for Every Use Case**: Proven effective for simple tasks, complex workflows, and production-grade automation.
- **Robust Community**: Backed by a rapidly growing community of over **100,000 certified** developers offering comprehensive support and resources.

CrewAI empowers developers and teams to build intelligent automations that balance simplicity, flexibility, and production-grade control.

## Getting Started

[Permalink: Getting Started](https://github.com/crewAIInc/crewAI#getting-started)

Setup and run your first CrewAI agents by following this tutorial.

[![CrewAI Getting Started Tutorial](https://camo.githubusercontent.com/d2356c0ab53c416b6c07ca56bfbeae5e5a1a488675b0abd25b97ac392d701fdb/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f2d6b534f5474597a6745772f687164656661756c742e6a7067)](https://www.youtube.com/watch?v=-kSOTtYzgEw "CrewAI Getting Started Tutorial")

### Learning Resources

[Permalink: Learning Resources](https://github.com/crewAIInc/crewAI#learning-resources)

Learn CrewAI through our comprehensive courses:

- [Multi AI Agent Systems with CrewAI](https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/) \- Master the fundamentals of multi-agent systems
- [Practical Multi AI Agents and Advanced Use Cases](https://www.deeplearning.ai/short-courses/practical-multi-ai-agents-and-advanced-use-cases-with-crewai/) \- Deep dive into advanced implementations

### Understanding Flows and Crews

[Permalink: Understanding Flows and Crews](https://github.com/crewAIInc/crewAI#understanding-flows-and-crews)

CrewAI offers two powerful, complementary approaches that work seamlessly together to build sophisticated AI applications:

1. **Crews**: Teams of AI agents with true autonomy and agency, working together to accomplish complex tasks through role-based collaboration. Crews enable:
   - Natural, autonomous decision-making between agents
   - Dynamic task delegation and collaboration
   - Specialized roles with defined goals and expertise
   - Flexible problem-solving approaches
2. **Flows**: Production-ready, event-driven workflows that deliver precise control over complex automations. Flows provide:
   - Fine-grained control over execution paths for real-world scenarios
   - Secure, consistent state management between tasks
   - Clean integration of AI agents with production Python code
   - Conditional branching for complex business logic

The true power of CrewAI emerges when combining Crews and Flows. This synergy allows you to:

- Build complex, production-grade applications
- Balance autonomy with precise control
- Handle sophisticated real-world scenarios
- Maintain clean, maintainable code structure

### Getting Started with Installation

[Permalink: Getting Started with Installation](https://github.com/crewAIInc/crewAI#getting-started-with-installation)

To get started with CrewAI, follow these simple steps:

### 1\. Installation

[Permalink: 1. Installation](https://github.com/crewAIInc/crewAI#1-installation)

Ensure you have Python >=3.10 <3.14 installed on your system. CrewAI uses [UV](https://docs.astral.sh/uv/) for dependency management and package handling, offering a seamless setup and execution experience.

First, install CrewAI:

```
uv pip install crewai
```

If you want to install the 'crewai' package along with its optional features that include additional tools for agents, you can do so by using the following command:

```
uv pip install 'crewai[tools]'
```

The command above installs the basic package and also adds extra components which require more dependencies to function.

### Troubleshooting Dependencies

[Permalink: Troubleshooting Dependencies](https://github.com/crewAIInc/crewAI#troubleshooting-dependencies)

If you encounter issues during installation or usage, here are some common solutions:

#### Common Issues

[Permalink: Common Issues](https://github.com/crewAIInc/crewAI#common-issues)

1. **ModuleNotFoundError: No module named 'tiktoken'**
   - Install tiktoken explicitly: `uv pip install 'crewai[embeddings]'`
   - If using embedchain or other tools: `uv pip install 'crewai[tools]'`
2. **Failed building wheel for tiktoken**
   - Ensure Rust compiler is installed (see installation steps above)
   - For Windows: Verify Visual C++ Build Tools are installed
   - Try upgrading pip: `uv pip install --upgrade pip`
   - If issues persist, use a pre-built wheel: `uv pip install tiktoken --prefer-binary`

### 2\. Setting Up Your Crew with the YAML Configuration

[Permalink: 2. Setting Up Your Crew with the YAML Configuration](https://github.com/crewAIInc/crewAI#2-setting-up-your-crew-with-the-yaml-configuration)

To create a new CrewAI project, run the following CLI (Command Line Interface) command:

```
crewai create crew <project_name>
```

This command creates a new project folder with the following structure:

```
my_project/
├── .gitignore
├── pyproject.toml
├── README.md
├── .env
└── src/
    └── my_project/
        ├── __init__.py
        ├── main.py
        ├── crew.py
        ├── tools/
        │   ├── custom_tool.py
        │   └── __init__.py
        └── config/
            ├── agents.yaml
            └── tasks.yaml
```

You can now start developing your crew by editing the files in the `src/my_project` folder. The `main.py` file is the entry point of the project, the `crew.py` file is where you define your crew, the `agents.yaml` file is where you define your agents, and the `tasks.yaml` file is where you define your tasks.

#### To customize your project, you can:

[Permalink: To customize your project, you can:](https://github.com/crewAIInc/crewAI#to-customize-your-project-you-can)

- Modify `src/my_project/config/agents.yaml` to define your agents.
- Modify `src/my_project/config/tasks.yaml` to define your tasks.
- Modify `src/my_project/crew.py` to add your own logic, tools, and specific arguments.
- Modify `src/my_project/main.py` to add custom inputs for your agents and tasks.
- Add your environment variables into the `.env` file.

#### Example of a simple crew with a sequential process:

[Permalink: Example of a simple crew with a sequential process:](https://github.com/crewAIInc/crewAI#example-of-a-simple-crew-with-a-sequential-process)

Instantiate your crew:

```
crewai create crew latest-ai-development
```

Modify the files as needed to fit your use case:

**agents.yaml**

```
# src/my_project/config/agents.yaml
researcher:
  role: >
    {topic} Senior Data Researcher
  goal: >
    Uncover cutting-edge developments in {topic}
  backstory: >
    You're a seasoned researcher with a knack for uncovering the latest
    developments in {topic}. Known for your ability to find the most relevant
    information and present it in a clear and concise manner.

reporting_analyst:
  role: >
    {topic} Reporting Analyst
  goal: >
    Create detailed reports based on {topic} data analysis and research findings
  backstory: >
    You're a meticulous analyst with a keen eye for detail. You're known for
    your ability to turn complex data into clear and concise reports, making
    it easy for others to understand and act on the information you provide.
```

**tasks.yaml**

````
# src/my_project/config/tasks.yaml
research_task:
  description: >
    Conduct a thorough research about {topic}
    Make sure you find any interesting and relevant information given
    the current year is 2026.
  expected_output: >
    A list with 10 bullet points of the most relevant information about {topic}
  agent: researcher

reporting_task:
  description: >
    Review the context you got and expand each topic into a full section for a report.
    Make sure the report is detailed and contains any and all relevant information.
  expected_output: >
    A fully fledged report with the main topics, each with a full section of information.
    Formatted as markdown without '```'
  agent: reporting_analyst
  output_file: report.md
````

**crew.py**

```
# src/my_project/crew.py
from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task
from crewai_tools import SerperDevTool
from crewai.agents.agent_builder.base_agent import BaseAgent
from typing import List

@CrewBase
class LatestAiDevelopmentCrew():
	"""LatestAiDevelopment crew"""
	agents: List[BaseAgent]
	tasks: List[Task]

	@agent
	def researcher(self) -> Agent:
		return Agent(
			config=self.agents_config['researcher'],
			verbose=True,
			tools=[SerperDevTool()]
		)

	@agent
	def reporting_analyst(self) -> Agent:
		return Agent(
			config=self.agents_config['reporting_analyst'],
			verbose=True
		)

	@task
	def research_task(self) -> Task:
		return Task(
			config=self.tasks_config['research_task'],
		)

	@task
	def reporting_task(self) -> Task:
		return Task(
			config=self.tasks_config['reporting_task'],
			output_file='report.md'
		)

	@crew
	def crew(self) -> Crew:
		"""Creates the LatestAiDevelopment crew"""
		return Crew(
			agents=self.agents, # Automatically created by the @agent decorator
			tasks=self.tasks, # Automatically created by the @task decorator
			process=Process.sequential,
			verbose=True,
		)
```

**main.py**

```
#!/usr/bin/env python
# src/my_project/main.py
import sys
from latest_ai_development.crew import LatestAiDevelopmentCrew

def run():
    """
    Run the crew.
    """
    inputs = {
        'topic': 'AI Agents'
    }
    LatestAiDevelopmentCrew().crew().kickoff(inputs=inputs)
```

### 3\. Running Your Crew

[Permalink: 3. Running Your Crew](https://github.com/crewAIInc/crewAI#3-running-your-crew)

Before running your crew, make sure you have the following keys set as environment variables in your `.env` file:

- An [OpenAI API key](https://platform.openai.com/account/api-keys) (or other LLM API key): `OPENAI_API_KEY=sk-...`
- A [Serper.dev](https://serper.dev/) API key: `SERPER_API_KEY=YOUR_KEY_HERE`

Lock the dependencies and install them by using the CLI command but first, navigate to your project directory:

```
cd my_project
crewai install (Optional)
```

To run your crew, execute the following command in the root of your project:

```
crewai run
```

or

```
python src/my_project/main.py
```

If an error happens due to the usage of poetry, please run the following command to update your crewai package:

```
crewai update
```

You should see the output in the console and the `report.md` file should be created in the root of your project with the full final report.

In addition to the sequential process, you can use the hierarchical process, which automatically assigns a manager to the defined crew to properly coordinate the planning and execution of tasks through delegation and validation of results. [See more about the processes here](https://docs.crewai.com/en/concepts/processes).

## Key Features

[Permalink: Key Features](https://github.com/crewAIInc/crewAI#key-features)

CrewAI gives developers a practical foundation for building agentic systems that move from prototype to production: autonomous collaboration where it helps, explicit workflow control where it matters, and Python-native customization throughout.

- **Crews for autonomy**: Model teams of specialized AI agents with roles, goals, tools, and tasks.
- **Flows for control**: Build event-driven workflows with state, branching, routing, and production logic.
- **Seamless integration**: Combine Crews and Flows to create complex, real-world automations.
- **Python-native customization**: Customize prompts, tools, execution paths, state, and integrations without fighting the framework.
- **Agent-ready capabilities**: Use tools, memory, knowledge, checkpointing, async execution, and MCP/A2A support for more capable production agents.
- **Production-ready patterns**: Add deterministic steps, human input, structured outputs, and checkpointing as your system grows.
- **Thriving community**: Backed by robust documentation and over 100,000 certified developers, providing exceptional support and guidance.

Choose CrewAI to build powerful, adaptable, and production-ready AI automations.

## Examples

[Permalink: Examples](https://github.com/crewAIInc/crewAI#examples)

You can test different real life examples of AI crews in the [CrewAI-examples repo](https://github.com/crewAIInc/crewAI-examples?tab=readme-ov-file):

- [Landing Page Generator](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/landing_page_generator)
- [Having Human input on the execution](https://docs.crewai.com/en/learn/human-input-on-execution)
- [Trip Planner](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/trip_planner)
- [Stock Analysis](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/stock_analysis)

### Quick Tutorial

[Permalink: Quick Tutorial](https://github.com/crewAIInc/crewAI#quick-tutorial)

[![CrewAI Tutorial](https://camo.githubusercontent.com/097281cd9c7f006bf38bfd2080e52d4f57fe73bb773a356322ef8c97a5a73918/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f746e656a72722d306139342f6d617872657364656661756c742e6a7067)](https://www.youtube.com/watch?v=tnejrr-0a94 "CrewAI Tutorial")

### Write Job Descriptions

[Permalink: Write Job Descriptions](https://github.com/crewAIInc/crewAI#write-job-descriptions)

[Check out code for this example](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/job-posting) or watch a video below:

[![Jobs postings](https://camo.githubusercontent.com/4ac659b8f8f9dbea25c021c63f35e94d85d9483fffc4fbaf59a232da11b541cd/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f75393877454d7a2d39746f2f6d617872657364656661756c742e6a7067)](https://www.youtube.com/watch?v=u98wEMz-9to "Jobs postings")

### Trip Planner

[Permalink: Trip Planner](https://github.com/crewAIInc/crewAI#trip-planner)

[Check out code for this example](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/trip_planner) or watch a video below:

[![Trip Planner](https://camo.githubusercontent.com/500c0f98c1f9ed6966a7e6672e58f0c794ffd548fc4622adb65a7da562ca7adf/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f786973377257702d686a732f6d617872657364656661756c742e6a7067)](https://www.youtube.com/watch?v=xis7rWp-hjs "Trip Planner")

### Stock Analysis

[Permalink: Stock Analysis](https://github.com/crewAIInc/crewAI#stock-analysis)

[Check out code for this example](https://github.com/crewAIInc/crewAI-examples/tree/main/crews/stock_analysis) or watch a video below:

[![Stock Analysis](https://camo.githubusercontent.com/8a0fe19fbec5d0f93910c729f99afca1e006d11c6649dc4b22bd3f55a7d15e97/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f6530556a347957646141672f6d617872657364656661756c742e6a7067)](https://www.youtube.com/watch?v=e0Uj4yWdaAg "Stock Analysis")

### Using Crews and Flows Together

[Permalink: Using Crews and Flows Together](https://github.com/crewAIInc/crewAI#using-crews-and-flows-together)

CrewAI's power truly shines when combining Crews with Flows to create sophisticated automation pipelines.
CrewAI flows support logical operators like `or_` and `and_` to combine multiple conditions. This can be used with `@start`, `@listen`, or `@router` decorators to create complex triggering conditions.

- `or_`: Triggers when any of the specified conditions are met.
- `and_`: Triggers when all of the specified conditions are met.

Here's how you can orchestrate multiple Crews within a Flow:

```
from crewai.flow.flow import Flow, listen, start, router, or_
from crewai import Crew, Agent, Task, Process
from pydantic import BaseModel

# Define structured state for precise control
class MarketState(BaseModel):
    sentiment: str = "neutral"
    confidence: float = 0.0
    recommendations: list = []

class AdvancedAnalysisFlow(Flow[MarketState]):
    @start()
    def fetch_market_data(self):
        # Demonstrate low-level control with structured state
        self.state.sentiment = "analyzing"
        return {"sector": "tech", "timeframe": "1W"}  # These parameters match the task description template

    @listen(fetch_market_data)
    def analyze_with_crew(self, market_data):
        # Show crew agency through specialized roles
        analyst = Agent(
            role="Senior Market Analyst",
            goal="Conduct deep market analysis with expert insight",
            backstory="You're a veteran analyst known for identifying subtle market patterns"
        )
        researcher = Agent(
            role="Data Researcher",
            goal="Gather and validate supporting market data",
            backstory="You excel at finding and correlating multiple data sources"
        )

        analysis_task = Task(
            description="Analyze {sector} sector data for the past {timeframe}",
            expected_output="Detailed market analysis with confidence score",
            agent=analyst
        )
        research_task = Task(
            description="Find supporting data to validate the analysis",
            expected_output="Corroborating evidence and potential contradictions",
            agent=researcher
        )

        # Demonstrate crew autonomy
        analysis_crew = Crew(
            agents=[analyst, researcher],
            tasks=[analysis_task, research_task],
            process=Process.sequential,
            verbose=True
        )
        return analysis_crew.kickoff(inputs=market_data)  # Pass market_data as named inputs

    @router(analyze_with_crew)
    def determine_next_steps(self):
        # Show flow control with conditional routing
        if self.state.confidence > 0.8:
            return "high_confidence"
        elif self.state.confidence > 0.5:
            return "medium_confidence"
        return "low_confidence"

    @listen("high_confidence")
    def execute_strategy(self):
        # Demonstrate complex decision making
        strategy_crew = Crew(
            agents=[\
                Agent(role="Strategy Expert",\
                      goal="Develop optimal market strategy")\
            ],
            tasks=[\
                Task(description="Create detailed strategy based on analysis",\
                     expected_output="Step-by-step action plan")\
            ]
        )
        return strategy_crew.kickoff()

    @listen(or_("medium_confidence", "low_confidence"))
    def request_additional_analysis(self):
        self.state.recommendations.append("Gather more data")
        return "Additional analysis required"
```

This example demonstrates how to:

1. Use Python code for basic data operations
2. Create and execute Crews as steps in your workflow
3. Use Flow decorators to manage the sequence of operations
4. Implement conditional branching based on Crew results

## Connecting Your Crew to a Model

[Permalink: Connecting Your Crew to a Model](https://github.com/crewAIInc/crewAI#connecting-your-crew-to-a-model)

CrewAI supports using various LLMs through a variety of connection options. By default your agents will use the OpenAI API when querying the model. However, there are several other ways to allow your agents to connect to models. For example, you can configure your agents to use a local model via the Ollama tool.

Please refer to the [Connect CrewAI to LLMs](https://docs.crewai.com/en/learn/llm-connections) page for details on configuring your agents' connections to models.

## When to Use CrewAI

[Permalink: When to Use CrewAI](https://github.com/crewAIInc/crewAI#when-to-use-crewai)

Use CrewAI when you need more than a single prompt or chatbot: multi-step work, specialized agents, tool use, structured outputs, human review, or workflows that combine autonomous reasoning with explicit business logic.

CrewAI is especially useful when you want to:

- Coordinate multiple agents with clear roles and tasks.
- Wrap agent work in deterministic, event-driven workflows.
- Keep application logic in regular Python.
- Move from experiment to production without changing frameworks.
- Add tools, memory, checkpointing, and async execution as your system grows.

## Contribution

[Permalink: Contribution](https://github.com/crewAIInc/crewAI#contribution)

CrewAI is open-source and we welcome contributions. See
[`.github/CONTRIBUTING.md`](https://github.com/crewAIInc/crewAI/blob/main/.github/CONTRIBUTING.md) for the full setup guide,
branching conventions, and PR checklist.

Quick start:

```
git clone https://github.com/crewAIInc/crewAI.git
cd crewAI
uv sync --all-groups --all-extras
uv run pre-commit install
```

```
# Tests
uv run pytest lib/crewai/tests/ -x -q

# Type checks
uv run mypy lib/
```

### Contributing to the docs

[Permalink: Contributing to the docs](https://github.com/crewAIInc/crewAI#contributing-to-the-docs)

The site at [docs.crewai.com](https://docs.crewai.com/) is published from
`docs/` by [Mintlify](https://www.mintlify.com/). The docs use directory-based
versioning: edits to `docs/edge/<lang>/...` (e.g.
`docs/edge/en/concepts/agents.mdx`) land under the **Edge** version selector
immediately and are frozen into a new versioned snapshot under
`docs/v<X.Y.Z>/` at the next release cut. Frozen snapshots are immutable — CI
rejects PRs that modify them without a `[docs-freeze]` title prefix. The
release CLI (`devtools release`) handles the freeze automatically; see
[`.github/CONTRIBUTING.md`](https://github.com/crewAIInc/crewAI/blob/main/.github/CONTRIBUTING.md) for contributor guidance and
[`lib/devtools/README.md`](https://github.com/crewAIInc/crewAI/blob/main/lib/devtools/README.md) for release tooling.

## Telemetry

[Permalink: Telemetry](https://github.com/crewAIInc/crewAI#telemetry)

CrewAI uses anonymous telemetry to collect usage data with the main purpose of helping us improve the library by focusing our efforts on the most used features, integrations and tools.

It's pivotal to understand that **NO data is collected** concerning prompts, task descriptions, agents' backstories or goals, usage of tools, API calls, responses, any data processed by the agents, or secrets and environment variables, with the exception of the conditions mentioned. When the `share_crew` feature is enabled, detailed data including task descriptions, agents' backstories or goals, and other specific attributes are collected to provide deeper insights while respecting user privacy. Users can disable telemetry by setting the environment variable OTEL\_SDK\_DISABLED to true.

Data collected includes:

- Version of CrewAI
  - So we can understand how many users are using the latest version
- Version of Python
  - So we can decide on what versions to better support
- General OS (e.g. number of CPUs, macOS/Windows/Linux)
  - So we know what OS we should focus on and if we could build specific OS related features
- Number of agents and tasks in a crew
  - So we make sure we are testing internally with similar use cases and educate people on the best practices
- Crew Process being used
  - Understand where we should focus our efforts
- If Agents are using memory or allowing delegation
  - Understand if we improved the features or maybe even drop them
- If Tasks are being executed in parallel or sequentially
  - Understand if we should focus more on parallel execution
- Language model being used
  - Improved support on most used languages
- Roles of agents in a crew
  - Understand high level use cases so we can build better tools, integrations and examples about it
- Tools names available
  - Understand out of the publicly available tools, which ones are being used the most so we can improve them

Users can opt-in to Further Telemetry, sharing the complete telemetry data by setting the `share_crew` attribute to `True` on their Crews. Enabling `share_crew` results in the collection of detailed crew and task execution data, including `goal`, `backstory`, `context`, and `output` of tasks. This enables a deeper insight into usage patterns while respecting the user's choice to share.

## License

[Permalink: License](https://github.com/crewAIInc/crewAI#license)

CrewAI is released under the [MIT License](https://github.com/crewAIInc/crewAI/blob/main/LICENSE).

## Frequently Asked Questions (FAQ)

[Permalink: Frequently Asked Questions (FAQ)](https://github.com/crewAIInc/crewAI#frequently-asked-questions-faq)

### General

[Permalink: General](https://github.com/crewAIInc/crewAI#general)

- [What exactly is CrewAI?](https://github.com/crewAIInc/crewAI#q-what-exactly-is-crewai)
- [How do I install CrewAI?](https://github.com/crewAIInc/crewAI#q-how-do-i-install-crewai)
- [Is CrewAI a standalone framework?](https://github.com/crewAIInc/crewAI#q-is-crewai-a-standalone-framework)
- [Is CrewAI open-source?](https://github.com/crewAIInc/crewAI#q-is-crewai-open-source)
- [Does CrewAI collect data from users?](https://github.com/crewAIInc/crewAI#q-does-crewai-collect-data-from-users)

### Features and Capabilities

[Permalink: Features and Capabilities](https://github.com/crewAIInc/crewAI#features-and-capabilities)

- [Can CrewAI handle complex use cases?](https://github.com/crewAIInc/crewAI#q-can-crewai-handle-complex-use-cases)
- [Can I use CrewAI with local AI models?](https://github.com/crewAIInc/crewAI#q-can-i-use-crewai-with-local-ai-models)
- [What makes Crews different from Flows?](https://github.com/crewAIInc/crewAI#q-what-makes-crews-different-from-flows)
- [Does CrewAI support fine-tuning or training custom models?](https://github.com/crewAIInc/crewAI#q-does-crewai-support-fine-tuning-or-training-custom-models)

### Resources and Community

[Permalink: Resources and Community](https://github.com/crewAIInc/crewAI#resources-and-community)

- [Where can I find real-world CrewAI examples?](https://github.com/crewAIInc/crewAI#q-where-can-i-find-real-world-crewai-examples)
- [How can I contribute to CrewAI?](https://github.com/crewAIInc/crewAI#q-how-can-i-contribute-to-crewai)

### Enterprise Features

[Permalink: Enterprise Features](https://github.com/crewAIInc/crewAI#enterprise-features)

- [What additional features does CrewAI AMP offer?](https://github.com/crewAIInc/crewAI#q-what-additional-features-does-crewai-amp-offer)
- [Is CrewAI AMP available for cloud and on-premise deployments?](https://github.com/crewAIInc/crewAI#q-is-crewai-amp-available-for-cloud-and-on-premise-deployments)
- [Can I try CrewAI AMP for free?](https://github.com/crewAIInc/crewAI#q-can-i-try-crewai-amp-for-free)

### Q: What exactly is CrewAI?

[Permalink: Q: What exactly is CrewAI?](https://github.com/crewAIInc/crewAI#q-what-exactly-is-crewai)

A: CrewAI is a lean, fast Python framework built specifically for orchestrating autonomous AI agents and production-ready agentic workflows.

### Q: How do I install CrewAI?

[Permalink: Q: How do I install CrewAI?](https://github.com/crewAIInc/crewAI#q-how-do-i-install-crewai)

A: Install CrewAI with [UV](https://docs.astral.sh/uv/):

```
uv pip install crewai
```

For additional tools, use:

```
uv pip install 'crewai[tools]'
```

### Q: Is CrewAI a standalone framework?

[Permalink: Q: Is CrewAI a standalone framework?](https://github.com/crewAIInc/crewAI#q-is-crewai-a-standalone-framework)

A: Yes. CrewAI is a standalone Python framework with its own primitives for agents, tasks, crews, flows, tools, and orchestration.

### Q: Can CrewAI handle complex use cases?

[Permalink: Q: Can CrewAI handle complex use cases?](https://github.com/crewAIInc/crewAI#q-can-crewai-handle-complex-use-cases)

A: Yes. CrewAI excels at both simple and highly complex real-world scenarios, offering deep customization options at both high and low levels, from internal prompts to sophisticated workflow orchestration.

### Q: Can I use CrewAI with local AI models?

[Permalink: Q: Can I use CrewAI with local AI models?](https://github.com/crewAIInc/crewAI#q-can-i-use-crewai-with-local-ai-models)

A: Absolutely! CrewAI supports various language models, including local ones. Tools like Ollama and LM Studio allow seamless integration. Check the [LLM Connections documentation](https://docs.crewai.com/en/learn/llm-connections) for more details.

### Q: What makes Crews different from Flows?

[Permalink: Q: What makes Crews different from Flows?](https://github.com/crewAIInc/crewAI#q-what-makes-crews-different-from-flows)

A: Crews provide autonomous agent collaboration, ideal for tasks requiring flexible decision-making and dynamic interaction. Flows offer precise, event-driven control, ideal for managing detailed execution paths and secure state management. You can seamlessly combine both for maximum effectiveness.

### Q: Is CrewAI open-source?

[Permalink: Q: Is CrewAI open-source?](https://github.com/crewAIInc/crewAI#q-is-crewai-open-source)

A: Yes, CrewAI is open-source and actively encourages community contributions and collaboration.

### Q: Does CrewAI collect data from users?

[Permalink: Q: Does CrewAI collect data from users?](https://github.com/crewAIInc/crewAI#q-does-crewai-collect-data-from-users)

A: CrewAI collects anonymous telemetry data strictly for improvement purposes. Sensitive data such as prompts, tasks, or API responses are never collected unless explicitly enabled by the user.

### Q: Where can I find real-world CrewAI examples?

[Permalink: Q: Where can I find real-world CrewAI examples?](https://github.com/crewAIInc/crewAI#q-where-can-i-find-real-world-crewai-examples)

A: Check out practical examples in the [CrewAI-examples repository](https://github.com/crewAIInc/crewAI-examples), covering use cases like trip planners, stock analysis, and job postings.

### Q: How can I contribute to CrewAI?

[Permalink: Q: How can I contribute to CrewAI?](https://github.com/crewAIInc/crewAI#q-how-can-i-contribute-to-crewai)

A: Contributions are warmly welcomed! Fork the repository, create your branch, implement your changes, and submit a pull request. See [`.github/CONTRIBUTING.md`](https://github.com/crewAIInc/crewAI/blob/main/.github/CONTRIBUTING.md) for detailed guidelines.

### Q: What additional features does CrewAI AMP offer?

[Permalink: Q: What additional features does CrewAI AMP offer?](https://github.com/crewAIInc/crewAI#q-what-additional-features-does-crewai-amp-offer)

A: CrewAI AMP provides advanced features such as a unified control plane, real-time observability, secure integrations, advanced security, actionable insights, and dedicated 24/7 enterprise support.

### Q: Is CrewAI AMP available for cloud and on-premise deployments?

[Permalink: Q: Is CrewAI AMP available for cloud and on-premise deployments?](https://github.com/crewAIInc/crewAI#q-is-crewai-amp-available-for-cloud-and-on-premise-deployments)

A: Yes, CrewAI AMP supports both cloud-based and on-premise deployment options, allowing enterprises to meet their specific security and compliance requirements.

### Q: Can I try CrewAI AMP for free?

[Permalink: Q: Can I try CrewAI AMP for free?](https://github.com/crewAIInc/crewAI#q-can-i-try-crewai-amp-for-free)

A: Yes, you can explore part of the CrewAI AMP Suite by accessing the [Crew Control Plane](https://app.crewai.com/) for free.

### Q: Does CrewAI support fine-tuning or training custom models?

[Permalink: Q: Does CrewAI support fine-tuning or training custom models?](https://github.com/crewAIInc/crewAI#q-does-crewai-support-fine-tuning-or-training-custom-models)

A: Yes, CrewAI can integrate with custom-trained or fine-tuned models, allowing you to enhance your agents with domain-specific knowledge and accuracy.

### Q: Can CrewAI agents interact with external tools and APIs?

[Permalink: Q: Can CrewAI agents interact with external tools and APIs?](https://github.com/crewAIInc/crewAI#q-can-crewai-agents-interact-with-external-tools-and-apis)

A: Absolutely! CrewAI agents can easily integrate with external tools, APIs, and databases, empowering them to leverage real-world data and resources.

### Q: Is CrewAI suitable for production environments?

[Permalink: Q: Is CrewAI suitable for production environments?](https://github.com/crewAIInc/crewAI#q-is-crewai-suitable-for-production-environments)

A: Yes, CrewAI is designed with production-grade patterns that support reliable, stable, and scalable agentic workflows.

### Q: How scalable is CrewAI?

[Permalink: Q: How scalable is CrewAI?](https://github.com/crewAIInc/crewAI#q-how-scalable-is-crewai)

A: CrewAI is highly scalable, supporting simple automations and large-scale workflows involving numerous agents and complex tasks simultaneously.

### Q: Does CrewAI offer debugging and monitoring tools?

[Permalink: Q: Does CrewAI offer debugging and monitoring tools?](https://github.com/crewAIInc/crewAI#q-does-crewai-offer-debugging-and-monitoring-tools)

A: Yes, CrewAI AMP includes advanced debugging, tracing, and real-time observability features, simplifying the management and troubleshooting of your automations.

### Q: What programming languages does CrewAI support?

[Permalink: Q: What programming languages does CrewAI support?](https://github.com/crewAIInc/crewAI#q-what-programming-languages-does-crewai-support)

A: CrewAI is primarily Python-based but easily integrates with services and APIs written in any programming language through its flexible API integration capabilities.

### Q: Does CrewAI offer educational resources for beginners?

[Permalink: Q: Does CrewAI offer educational resources for beginners?](https://github.com/crewAIInc/crewAI#q-does-crewai-offer-educational-resources-for-beginners)

A: Yes, CrewAI provides extensive beginner-friendly tutorials, courses, and documentation through learn.crewai.com, supporting developers at all skill levels.

### Q: Can CrewAI automate human-in-the-loop workflows?

[Permalink: Q: Can CrewAI automate human-in-the-loop workflows?](https://github.com/crewAIInc/crewAI#q-can-crewai-automate-human-in-the-loop-workflows)

A: Yes, CrewAI fully supports human-in-the-loop workflows, allowing seamless collaboration between human experts and AI agents for enhanced decision-making.

## About

Framework for orchestrating role-playing, autonomous AI agents. By fostering collaborative intelligence, CrewAI empowers agents to work together seamlessly, tackling complex tasks.

[crewai.com](https://crewai.com/)

### Topics

[agents](https://github.com/topics/agents) [ai](https://github.com/topics/ai) [ai-agents](https://github.com/topics/ai-agents) [aiagentframework](https://github.com/topics/aiagentframework) [llms](https://github.com/topics/llms)

### Resources

[Readme](https://github.com/crewAIInc/crewAI#readme-ov-file)

[MIT license](https://github.com/crewAIInc/crewAI#MIT-1-ov-file)

### Contributing

[Contributing](https://github.com/crewAIInc/crewAI#contributing-ov-file)

### Security policy

[Security policy](https://github.com/crewAIInc/crewAI#security-ov-file)

[Activity](https://github.com/crewAIInc/crewAI/activity)

[Custom properties](https://github.com/crewAIInc/crewAI/custom-properties)

### Stars

**57.5k** stars

### Watchers

**391** watching

### Forks

[**8.2k** forks](https://github.com/crewAIInc/crewAI/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FcrewAIInc%2FcrewAI&report=crewAIInc+%28user%29)

## Releases

## Packages

## Used by

## Contributors

## Languages

You can’t perform that action at this time.