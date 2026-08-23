Source: https://github.com/openagents-org/openagents
Title: GitHub - openagents-org/openagents: OpenAgents - AI Agent Networks for Open Collaboration · GitHub
Fetched: 2026-08-23T20:02:33.338Z

[Skip to content](https://github.com/openagents-org/openagents#start-of-content)

You signed in with another tab or window. [Reload](https://github.com/openagents-org/openagents) to refresh your session.You signed out in another tab or window. [Reload](https://github.com/openagents-org/openagents) to refresh your session.You switched accounts on another tab or window. [Reload](https://github.com/openagents-org/openagents) to refresh your session.Dismiss alert

{{ message }}

### Uh oh!

There was an error while loading. [Please reload this page](https://github.com/openagents-org/openagents).

[openagents-org](https://github.com/openagents-org)/ **[openagents](https://github.com/openagents-org/openagents)** Public

- [Notifications](https://github.com/login?return_to=%2Fopenagents-org%2Fopenagents) You must be signed in to change notification settings
- [Fork\\
409](https://github.com/login?return_to=%2Fopenagents-org%2Fopenagents)
- [Star\\
4k](https://github.com/login?return_to=%2Fopenagents-org%2Fopenagents)


develop

[**255** Branches](https://github.com/openagents-org/openagents/branches) [**78** Tags](https://github.com/openagents-org/openagents/tags)

[Go to Branches page](https://github.com/openagents-org/openagents/branches)[Go to Tags page](https://github.com/openagents-org/openagents/tags)

Go to file

Code

Open more actions menu

## Latest commit

[![zomux](https://avatars.githubusercontent.com/u/1029280?v=4&size=40)](https://github.com/zomux)[zomux](https://github.com/openagents-org/openagents/commits?author=zomux)

[feat(launcher): remote-testing hooks — control server, CDP passthroug…](https://github.com/openagents-org/openagents/commit/3e40bc3f9951336c3d38bfc95da659a0afbd6425)

Open commit detailssuccess

1 hour agoAug 23, 2026

[3e40bc3](https://github.com/openagents-org/openagents/commit/3e40bc3f9951336c3d38bfc95da659a0afbd6425) · 1 hour agoAug 23, 2026

## History

[3,166 Commits](https://github.com/openagents-org/openagents/commits/develop/)

Open commit details

[View commit history for this file.](https://github.com/openagents-org/openagents/commits/develop/) 3,166 Commits

## Folders and files

| Name | Name | Last commit message | Last commit date |
| --- | --- | --- | --- |
| [.githooks](https://github.com/openagents-org/openagents/tree/develop/.githooks ".githooks") | [.githooks](https://github.com/openagents-org/openagents/tree/develop/.githooks ".githooks") | [fix(githooks): make the commit-msg hook work on macOS, and match CI's…](https://github.com/openagents-org/openagents/commit/a8cce3885e9f1e9be943a6bd42c563e7325379bf "fix(githooks): make the commit-msg hook work on macOS, and match CI's casing  The hook that strips Co-Authored-By trailers did neither of the two things it had to do.  It used `sed -i` with no backup suffix and a GNU-only branch script. BSD sed reads `-i`'s next argument as the suffix, so on macOS it took the delete expression as the suffix and then parsed the FILE PATH as its script — \"undefined label 'mp/...'\" — and exited 1. A commit-msg hook that exits non-zero aborts the commit, so anyone who followed the instructions in check-commits.yml on a Mac could no longer commit at all. Enabling it was strictly worse than leaving it off, which is why it was off.  It also matched case-sensitively while CI greps with -i. GitHub writes \"Co-authored-by\"; that spelling sailed past the hook and got rejected by CI anyway. A hook that catches less than the check it exists to satisfy is worse than no hook — it looks like protection.  Rewritten with grep + awk, no in-place sed and no GNU-only syntax, matching the same case-insensitive pattern CI does. Verified on macOS end to end: a commit carrying the trailer now succeeds with the trailer removed and the stranded blank line cleaned up, Signed-off-by survives, and a mid-body mention of the words is left alone (CI anchors on ^, so the hook does too).") | 2 weeks agoAug 10, 2026 |
| [.github](https://github.com/openagents-org/openagents/tree/develop/.github ".github") | [.github](https://github.com/openagents-org/openagents/tree/develop/.github ".github") | [fix(ci): AppImage carries its blockmap inside the file](https://github.com/openagents-org/openagents/commit/bfdca56e5729660efc756695d7620d42e5876cfb "fix(ci): AppImage carries its blockmap inside the file  The 0.9.19 release failed its pre-publish check with \"no .blockmap — every update would be a full download\" for the Linux AppImage, but the build was fine: electron-builder never writes a sidecar .blockmap for an AppImage. app-builder-lib has two paths — createBlockmap() writes xxx.blockmap beside the mac zips and the NSIS installer, appendBlockmap() appends the map to the artifact itself and records its compressed length as blockMapSize in the yml. AppImage takes the second, and the client matches it: FileWithEmbeddedBlockMapDifferentialDownloader range-requests the tail of the file and never asks for a .blockmap.  Both verifications now check whichever form the artifact actually has:  - .zip and the NSIS .exe still require a sidecar; missing is a failure. - .AppImage is checked in place — blockMapSize must be present, the   4-byte big-endian trailer must agree with it, and the inflate-raw'd   chunk list must index the bytes before it (len - blockMapSize - 4),   every chunk re-derived with blake2b-18 the way the client does.  The post-publish check reads the embedded map out of the asset it has already downloaded, so it costs no extra request.  Also drop dist/*.AppImage.blockmap from the Linux upload globs: it has never matched anything.") | 1 hour agoAug 23, 2026 |
| [changelogs](https://github.com/openagents-org/openagents/tree/develop/changelogs "changelogs") | [changelogs](https://github.com/openagents-org/openagents/tree/develop/changelogs "changelogs") | [feat(agents) add DeepSeek Harness as an agent driven through its head…](https://github.com/openagents-org/openagents/commit/7e6e666dc4e6c7d7f40d1494a4d6f499da7a660c "feat(agents) add DeepSeek Harness as an agent driven through its headless profil (#623)  * feat(agents) add DeepSeek Harness agent driven through its headless profile  Adds DeepSeek's open-source agent harness (npm @deepseek-ai/dsh) as an OpenAgents agent. Like every other agent it drives its own CLI subprocess with one process per workspace message; no SDK is introduced.  Adapter (packages/agent-connector/src/adapters/) - deepseek.js runs `dsh --profile headless`, gating binary, Node and harness   version in preflight() so an unusable runtime never joins the workspace, and   composing the headless profile once per adapter so concurrent channels do not   race to initialise it. The bootstrap promise is cleared on failure so one bad   first run is not permanent. - deepseek-runtime.js holds the pure parts as unit-tested functions — a   prerelease-aware version comparator, the Node gate, argv construction, safe   YAML emission for the private patch, stderr classification and session GC   selection. - test/fixtures/mock-dsh.js is a scriptable fake harness. The adapter tests   drive a real subprocess rather than a faked spawn, because what they assert   (what reaches argv, whether all of stdout arrives before the promise settles,   whether a process group dies) cannot be shown with a fake.  The prompt is never in argv - The harness takes its task as a positional argument and has no stdin task   channel, so passing the workspace prompt there would publish the workspace   token to /proc/<pid>/cmdline and ps. The prompt goes to a private task file   (0600, deleted after every run including failures) and argv carries only a   fixed sentence naming it. If the file cannot be written the run fails closed   rather than falling back to argv, which would be the exposure itself. - The task file references the token as $OPENAGENTS_WORKSPACE_TOKEN; the value   and DEEPSEEK_API_KEY are passed only in the child environment.   buildDeepSeekTaskFile throws when handed anything that is not a shell   expression, so passing a real token is a loud failure, not a silent leak.  Non-interactive execution without unsandboxing - The harness pairs `approval never` only with `sandbox danger-full-access`, and   a headless run has nobody to answer an approval prompt. A private --patch   overlay sets the two independently, keeping `sandbox workspace-write`, so   execute mode is non-interactive with writes still confined. Plan mode forces   read-only. Verified against rc.6 with --dump-config and a live run that wrote   a file and executed a command.  No streaming and no resume shape two more behaviours - The guard is a TOTAL 60 minute run budget, not an idle timeout, because the   harness prints nothing until it finishes and an idle guard would kill healthy   long tasks. The child is awaited on close, not exit, since the whole answer is   stdout. Continuity comes from a bounded channel recap injected into the task,   and the sessions directory is garbage collected (7 days or newest 50, never   touching profiles, settings or credentials).  Version pinning enforced end to end - installer.js _detectVersion truncated 0.1.0-rc.6 to 0.1.0, so a correctly   installed preview failed its own gate; the regex now keeps the prerelease. - _evaluateCompatibility learned install.supported_version as an exact match   alongside the existing min_version floor. - The Launcher rewrote pinned commands to @latest on both install and update,   which for a pinned-preview agent handed the user a runtime the adapter   refuses to start. Install, update and the update badge now target the pin.  Shared helpers - formatAttachmentsForPrompt gained tokenExpr and endpoint options; it   hard-coded $TOKEN, which expands to empty in a dsh child and would have made   every attachment download 401. Defaults preserve existing callers. - decision-log.js is deliberately unchanged; the adapter excludes the current   event by message id instead, so an older identical message is not dropped.  Not in CORE_AGENTS yet. The marketplace flag lives in launcher code while the adapter ships in the npm core, so it stays \"coming soon\" until a core release containing this adapter is published. The CLI path works today. Streaming, resume and stdin task input are upstream limitations, not deferred work.  Tests — agent-connector 1091 pass, 0 fail, 2 skipped (pre-existing Windows-only probes); launcher 232 pass. Verified end to end against real dsh 0.1.0-rc.6 and the live DeepSeek API.  * fix(agents) address DeepSeek Harness review findings  Seven defects from review, four of which could break a real run.  Windows managed installs could not resolve the dsh entry point - Every candidate path landed one node_modules too deep, so the layout the   Launcher itself produces (~/.openagents/runtimes/deepseek/node_modules/.bin)   never resolved. On POSIX the symlink branch hid it; on Windows the shim is a   .cmd with no symlink, so a machine whose only dsh came from the Launcher   could not start the agent at all. - The candidate list is now a pure function, dshEntryCandidates(), covering the   managed layout plus both global prefixes, and is unit-tested for win32 and   posix from either host. The previous tests assigned _jsEntry directly and so   bypassed this code entirely — that gap is what let the bug through.  Recap dropped the newest messages - getRecentMessages() already reverses a desc window to chronological order.   Reversing it again left sampleRecap's tail.slice(-N) keeping the OLDEST   entries, so the agent saw stale context and never the latest turn.  Timeout untracked the child before it exited - settle() removed the process from _channelProcesses and only then killed it   asynchronously, so the run's finally could garbage-collect sessions under a   live process and a failed kill left an orphan that /stop could not retry. The   child now stays tracked until close, with a timedOut flag so the kill's own   close does not report the run as a generic signal failure, plus a backstop   that releases the channel and says plainly that the process may have survived.  Bootstrap could hang forever and could not be interrupted - dsh --dump-config had no timeout and was not registered anywhere, so a wedged   compose blocked the first message and every channel waiting on the shared   promise, before any run budget existed. It now has its own budget and is   tracked under a NUL-prefixed key that no real channel name can collide with,   so /stop reaches it through the same registry as a normal run.  Output caps were not hard limits - The check ran before appending, so one oversized chunk sailed past it, and it   counted UTF-16 code units rather than bytes. stdout is now accumulated as   buffers and trimmed to the remaining byte budget; stderr keeps a true rolling   8 KB tail instead of borrowing the 16 MB stdout cap.  Harness-specific text leaked into a shared translation key - Env-var help is keyed globally by variable name, so the dsh-specific wording   on DEEPSEEK_API_KEY would surface for any other agent declaring it. The text   is provider-neutral now; the harness-specific caveat stays in the registry   description, not_ready_message and docs, which are agent-scoped.  The browser directive never activated - _browserEnabledCache is populated lazily by getBrowserEnabled(), which this   adapter never called, so the shared browser session was invisible to it   regardless of the workspace setting.  Also - The unwritable-task-dir test used a path under os.devNull, which is only   unwritable on POSIX; it now puts a file where the directory should be. - The mock CLI exited without draining stderr, silently truncating large   payloads, and its bootstrap-hang branch fell through to exit because   setInterval does not block. - Removed stray NUL bytes from three files. They were syntactically harmless   but made the sources binary to git below the 8 KB sniff window.  Rebased onto develop. Tests — agent-connector 1134 pass, 0 fail, 2 skipped; launcher 232 pass; typecheck unchanged at 101 pre-existing errors.  * fix(launcher) show the pinned version wherever an install command is displayed  Two display paths still advertised a command the launcher does not run for an agent that declares `install.supported_version`.  The install confirm dialog printed `@latest` - displayInstallCommand deliberately mirrors \"an update always installs   @latest\", so the dialog cannot promise something the launcher will not do.   That mirroring was never taught about supported_version, so DeepSeek's dialog   offered `@deepseek-ai/dsh@latest` while the install path (already fixed)   pinned 0.1.0-rc.6. Same class of inconsistency the function exists to   prevent, in the opposite direction — and the version it named is one the   adapter refuses to run.  The requirements rail dropped the version entirely - stripInstallVersion hides a hand-maintained pin on purpose, because that pin   records which build was last vetted rather than which one the user gets.   A supported_version pin is the reverse — it IS what gets installed and the only   release the adapter accepts, so hiding it understates a real constraint.  Both now render the pinned version. Agents without supported_version are untouched, which is every agent but DeepSeek today.  Found by running the Launcher against a real install rather than by reading the code — the earlier fix covered execution, update and the update badge, and missed both places the command is shown to a human.  Tests — launcher 232 pass, typecheck unchanged at 101 pre-existing errors.  * fix(agents) make stop reach a run before it spawns and stop losing survivors  Four review findings, two of which let a run escape user control.  A stop pressed before the process existed was dropped - _onControlAction only walked the process registry, and a run spends real time   before it spawns anything — bootstrap, the status post, the recap fetch, the   browser-setting lookup. A stop landing in that window had nothing to kill and   recorded nothing, so the task went on to spawn and post its answer as if the   user had never pressed it. Worse, the handler opened by clearing the   stopping-channel marker, so even a marked channel was un-marked on the way in. - Stop now marks every BUSY channel first and kills second, the handler   re-checks after each await and once more immediately before spawn, and the   cancellation flag is cleared only at the start of a new message.  A kill that did not work left an untracked, possibly live child - The timeout backstop said in its own message that the process might still be   running, then called settle(), which unconditionally dropped it from the   registry. The explicit stop path did the same after a best-effort kill that   swallowed failures. Either way /stop had nothing left to retry and the   session GC believed no child was alive. - _stopProcess now REPORTS whether an exit was observed, and anything it could   not end goes to a survivor set that /stop retries and the GC refuses to run   under.  installAtVersionTag never invalidated the core lookup caches - It spawns npm directly, so it never reaches the core installer's own   post-install invalidation, and a \"not on PATH\" answer cached before the   install survived for up to 30 seconds — long enough for preflight to report   runtime_missing against a runtime sitting on disk. Now marks the install in   the core, which is what clears both caches. - This mattered more after the previous commit, which routes every pinned   install through this method.  supported_version was enforced in the UI but not at the execution boundary - installAtVersionTag still accepted any target, so rollback and the   Beta/Nightly channels could install a release the adapter then refuses to   run. It now rejects a target other than the pin. Rollback and channel   switching both funnel through this method, so one guard covers them.  Also, an ENOENT from writing the private patch reached the caller's spawn-error classifier and was announced as \"executable not found\", pointing the user at a binary that is present. It now reports the real cause and the harness home.  The first two escaped the existing tests because those never construct the two states involved — a stop earlier than the spawn, and a kill that fails — so both are covered now, along with the pinned-version display paths.  Tests — agent-connector 1144 pass, 0 fail, 2 skipped; launcher 238 pass; typecheck unchanged at 101 pre-existing errors.  * fix(agents) confirm every stop to the workspace and track bootstrap survivors  Three follow-ups from review, all consequences of the previous commit.  A stop before the spawn left the session busy forever - The previous commit made stop actually cancel a run in the pre-spawn window,   but only channels with a live child were sent a terminal status. The client   clears its stopping state only on a status matching /stopped|stopping failed/i   (workspace chat-view.tsx), so a cancelled run left \"DeepSeek Harness is   working...\" as the last word — and because the run really was cancelled,   nothing later would ever correct it. That traded a functional gap for a stuck   interface, which is worse. - Stop now collects every affected channel first — the ones it killed and the   ones still before their spawn — and sends exactly one confirmation to each.   The status text is asserted against the client's own regex so the two cannot   drift apart.  Bootstrap children were exempt from survivor tracking - Both the explicit-stop branch and bootstrap's own timeout discarded the   result of _stopProcess and dropped the handle regardless. A bootstrap process   that survived its kill became unreachable for a retry and invisible to the   session GC guard, while the handler stayed parked on the shared promise.  Survivors registered by an explicit stop were never released - Only the timeout path attached the cleanup listener, so a child that exited   on its own a moment after an unconfirmed kill stayed in the set for the rest   of the adapter's life, keeping session GC switched off permanently. Two   copies of the same registration is what allowed them to differ, so there is   now one _trackSurvivor that owns both the add and the cleanup, and all three   callers use it.  Tests — agent-connector 1151 pass, 0 fail, 2 skipped.  * fix(agents) scope stop to its channel and confirm the whole process group  Four review findings, all in stop handling.  Stop ignored the channel it was aimed at - The workspace sends the conversation to stop, and this adapter cancelled   every busy channel and killed every tracked process instead, so stopping one   conversation tore down unrelated concurrent runs and posted terminal statuses   to all of them. claude.js already scopes its stop correctly; mini and amp do   not, and following those two here was the mistake. A stop with no channel   still means everything, and a scoped stop now leaves the SHARED bootstrap   child alone rather than failing the other channels waiting on it.  A child was visible to nothing while its kill was in flight - The previous commit moved the untracking ahead of the await, so for the whole   kill window — seconds on POSIX — a live process sat in neither the channel   map nor the survivor set, and another run's cleanup could garbage-collect   sessions out from under it. It is now registered as a survivor BEFORE the   channel entry is dropped, and released only once the kill is confirmed.  A kill that failed was reported as a clean stop - Every affected channel got \"Execution stopped by user\", including the ones   whose child was still in the survivor set. That clears the UI and tells the   user the work is over while dsh may still be editing files. The outcome is   now tracked per channel and an unconfirmed kill reports a stopping failure,   which the client already recognises as terminal.  Leader exit was mistaken for the group dying - On POSIX, dsh runs its bash tool as a descendant of a detached group. Waiting   on the leader's `exit` cancelled the scheduled group SIGKILL and reported   success, leaving a tool subprocess running and untracked. Termination is now   decided by polling the GROUP with kill(-pid, 0) through both the SIGTERM   grace period and the SIGKILL confirmation, and survivor release uses the same   condition rather than the leader alone.  Two existing tests used hand-made process objects, which the group check correctly prunes as already-gone; they drive real detached children now, because that is the only way these properties can be observed at all.  Tests — agent-connector 1158 pass, 0 fail, 2 skipped.  * refactor(agents) drop the survivor machinery and make a stopped channel stop waiting  Five review rounds produced twenty findings. The genuinely user-visible ones — a stop that did not stop, a UI left showing a cancelled run as busy, a stop that killed unrelated conversations — are fixed and stay fixed. But the regressions clustered in one place — a registry of children whose kill could not be confirmed, plus process-group polling to decide when to release them. Three of the last round's four findings were defects in that machinery rather than in anything it protected.  It is removed. What it bought was small — a session in flight is the NEWEST by mtime, so the GC's keep-newest-50 and keep-7-days bounds already spare it, and re-sending SIGKILL to something SIGKILL did not end rarely helps — and no other adapter in this repo carries anything like it. _stopProcess is now the same best-effort shape as mini, amp, aider and goose, and still returns whether the exit was observed, because that is what decides between telling the user the run stopped and telling them stopping failed.  Accepted consequence, stated plainly — if a kill genuinely fails, the child is orphaned, /stop cannot retry it, and session GC may run while it is alive. That is where all sixteen sibling adapters already sit.  Also removed the test that would have broken CI. It called a POSIX-only process-group helper unconditionally, and CI runs windows-latest across Node 20, 22 and 24; the failure would have been followed by leaked children holding the runner to its ten-minute timeout.  Separately, a scoped stop left the shared bootstrap running — correctly, since other channels wait on the same compose — but the stopped channel stayed parked on that promise anyway. The user was told the run had stopped while the channel stayed busy and the next message queued behind it for up to the full bootstrap timeout. Each waiter now races the shared promise against its own cancellation signal, so one channel can leave without disturbing the others.  _hasExited treats a signal exit as terminal, which a plain exitCode check misses on Windows.  Tests — agent-connector 1150 pass, 0 fail, 2 skipped. Net 76 lines removed.  * fix(agents) pick a Node that can run dsh instead of the first one that exists  Found by running the adapter on a real Windows host, which is the only way it could have been found — the Linux machine this was developed on has no managed runtime, so _findNodeBin always fell through to a compatible process.execPath.  On that host the launcher's managed Node was 22.14.0 while the system Node was 24.15.0. _findNodeBin took the managed one purely because it existed, and preflight then rejected the agent as version_incompatible on a machine that could run it perfectly well. Forcing process.execPath made preflight pass.  Preferring the managed runtime is right — it is the version the product controls — but preferring it unconditionally is not. Candidates are now probed in the same order and the first that SATISFIES the version gate wins. When none does, the first existing candidate is returned so preflight can name it, and that message now includes the path, because the usual cause is a stale runtime under ~/.openagents/nodejs and there was previously no way to tell which Node to upgrade.  Version reads are memoised per binary since selection now probes several.  pi.js has the same first-that-exists shape. It is left alone here — its own floor is lower and this change is not something to make blind on another agent's runtime — but it is worth a look.  Tests — agent-connector 1156 pass, 0 fail, 2 skipped. Node selection is covered by stubbing the candidate list and version reader, so the cases run on every platform rather than needing a machine with a stale managed runtime.  * test(agents) wait for the child to exist instead of guessing how long it takes  A Windows run of the full suite failed two DeepSeek stop tests that pass on their own. Both waited a fixed 300ms for a real child process to start and register before acting on it, which is a guess about machine speed — and on a loaded run (1158 tests, ~112s, many concurrent spawns) the guess was wrong.  They now poll for the condition they actually depend on. Nothing about the production stop path changed, and there is no evidence it was ever at fault here; this was the test being unreliable, not the code.  Every remaining fixed sleep in the file is gone for the same reason, replaced by waitFor / waitForChild / waitForAnyChild with a 15s ceiling so a genuine hang still fails loudly rather than stalling the runner.  Verified by running the file three times back to back — 83 pass, 0 fail each time — rather than once.  Nine other failures in that Windows run belong to pre-existing tests unrelated to this branch (amp bin dirs, CLI spawn timeouts, a POSIX SIGTERM assertion, a `cat` invocation, isolated-runtime path lookups). They are left alone here.  Tests — agent-connector 1156 pass, 0 fail, 2 skipped.  * fix(agents) strip a prerelease version when deriving an uninstall command  Uninstalling DeepSeek through the Launcher reported success, removed nothing, and left the agent looking installed — after which the UI warned that \"another install is still on your PATH\", sending the user hunting for a second copy that never existed.  The uninstall command is derived from the install command, and the derivation removed the version with two blind global replaces. The one meant for literal versions understood only digits and dots, so a prerelease pin was cut in half      npm install -g @deepseek-ai/dsh@0.1.0-rc.6     npm uninstall --prefix \"…\" @deepseek-ai/dsh-rc.6  and npm exits 0 when told to remove a package that is not installed. The uninstall therefore \"succeeded\", the marker was cleared, the 532-package tree stayed on disk, and the next readiness probe found it and reported the agent as installed again.  Only DeepSeek could hit this — it is the only entry in the registry pinned to a prerelease, and prereleases only arrived with it. The fix anchors to the package token at the end of the command instead of guessing at the version's shape, so the next pinned agent is not a fresh instance of the same bug. Verified against all nine npm-installed agents in the shipped registry plus beta, alpha and dist-tag forms.  Not fixed here, and worth its own change — the uninstall passes --no-save, so npm leaves the dependency tree behind even when it does remove the named package. That is shared behaviour across every npm agent and does not belong in this branch.  Tests — agent-connector 1157 pass, 0 fail, 2 skipped.  * merge develop and ship the DeepSeek logo with its registry entry  develop made the catalog self-contained since the last sync — agent artwork now lives in /registry/icons and is served from GET /v1/agent-catalog/{type}/logo, with a test that walks every entry in the launcher registry and fails when its icon file is missing. Its comment says so outright, that adding an agent without an icon fails there.  This branch declared a logo key for DeepSeek but shipped no artwork, so the merge would have turned that test red. registry/icons/deepseek.svg is the same official mark already used by the connector, launcher and workspace, and the backend copy is re-synced.  No conflicts in this merge. Pi became public in the catalog in the meantime; DeepSeek stays hidden from the workspace picker, which leaves mini-swe-agent as its only companion there — the catalog listing is 15 entries and the launcher-facing registry 17.  Verified — registry tests 6 pass including the logo walk and the drift guard, the DeepSeek entry resolves with its logo URL and both provider-resolved models, agent-connector 1157 pass, launcher 274 pass with a clean typecheck.  The backend suite reports 64 failures here and the identical 64 failed / 658 passed / 16 skipped on a fresh origin/develop worktree, so they remain pre-existing and untouched.  * test(deepseek): drain mock stdout before exit in echo_task and slow_flush  On async-stdio platforms (Windows always, macOS on some Node versions) a bare process.exit() discards the queued tail of the mock's own write, so echo_task read back a task file missing its appended task and slow_flush lost END-OF-ANSWER inside the child — failing macos-latest/node20 while proving nothing about the adapter. Exit via the write callback instead; the parent's exit-before-drain property under test is preserved.  ---------  Co-authored-by: Nebu Kaga <nebu.kaga@openagents.org>") | last weekAug 17, 2026 |
| [cloud\_providers](https://github.com/openagents-org/openagents/tree/develop/cloud_providers "cloud_providers") | [cloud\_providers](https://github.com/openagents-org/openagents/tree/develop/cloud_providers "cloud_providers") | [chore(catalog): refresh per-agent model lists for Aug 2026 lineups](https://github.com/openagents-org/openagents/commit/17cbacd9a288fed88a9b1b2342bed8f6644c645a "chore(catalog): refresh per-agent model lists for Aug 2026 lineups  - openai: GPT-5.6 family (sol/terra/luna) + gpt-image-2; drop retired 5.5/5.4/o-series - google: Gemini 3.7/3.6/3.5 Flash, 3.1 Pro preview, Nano Banana 2 image model - populate explicit model lists for kimi, hermes, pi, cursor, copilot, cline,   aider, goose, opencode, mini-swe-agent (amp stays empty: no model selection) - keep _BUILTIN_PROVIDERS fallback in sync with the JSON catalog  Verified via web research against each vendor's current docs (2026-08-21).") | 2 days agoAug 21, 2026 |
| [docs](https://github.com/openagents-org/openagents/tree/develop/docs "docs") | [docs](https://github.com/openagents-org/openagents/tree/develop/docs "docs") | [feat(launcher): remote-testing hooks — control server, CDP passthroug…](https://github.com/openagents-org/openagents/commit/3e40bc3f9951336c3d38bfc95da659a0afbd6425 "feat(launcher): remote-testing hooks — control server, CDP passthrough, renderer log (#640)  Driving the launcher on a remote, SSH-only machine (a Windows box especially) had no sanctioned path: the app's state was invisible from the command line, renderer errors left no trace on disk, and GUI automation needs a desktop the SSH session doesn't have. Three opt-in hooks close that gap:  * Control server (--control-port=N / OPENAGENTS_CONTROL_PORT): a   localhost-only HTTP surface started first thing in whenReady, so it   answers during first-run bootstrap. GET /status (version, headless,   window, core/daemon/node state), GET /agents, GET /logs (tails   startup/daemon/renderer logs), GET /screenshot (PNG via capturePage),   POST /pair {code}, POST /window {create|show|hide}. Auth is a   per-start random token at ~/.openagents/control.token (0600),   compared in constant time; the server is dependency-injected and   Electron-free for unit testing.  * CDP passthrough (OPENAGENTS_DEVTOOLS_PORT): exposes the DevTools   protocol on loopback so Playwright connectOverCDP can attach to the   RUNNING app through an SSH tunnel. Off unless the env var is set.  * Renderer console → ~/.openagents/renderer.log (rotated at 2 MiB),   including renderer crashes and load failures — previously a renderer   exception on a remote box left no trace anywhere. Handles both the   Electron >= 32 console-message event object and the legacy   positional args.  Also adds AgentManager.getDaemonPid() (public, null-safe) for /status, and docs/guides/launcher-testing.md covering the unit/E2E/remote-control layers plus the Windows-over-SSH traps (quoting, session-death).  Verified live on Windows Server 2025: headless launch with --control-port, /status + 401 + /logs + /pair-path deps, window creation and a real dashboard screenshot fetched over SSH.") | 1 hour agoAug 23, 2026 |
| [packages](https://github.com/openagents-org/openagents/tree/develop/packages "packages") | [packages](https://github.com/openagents-org/openagents/tree/develop/packages "packages") | [feat(launcher): remote-testing hooks — control server, CDP passthroug…](https://github.com/openagents-org/openagents/commit/3e40bc3f9951336c3d38bfc95da659a0afbd6425 "feat(launcher): remote-testing hooks — control server, CDP passthrough, renderer log (#640)  Driving the launcher on a remote, SSH-only machine (a Windows box especially) had no sanctioned path: the app's state was invisible from the command line, renderer errors left no trace on disk, and GUI automation needs a desktop the SSH session doesn't have. Three opt-in hooks close that gap:  * Control server (--control-port=N / OPENAGENTS_CONTROL_PORT): a   localhost-only HTTP surface started first thing in whenReady, so it   answers during first-run bootstrap. GET /status (version, headless,   window, core/daemon/node state), GET /agents, GET /logs (tails   startup/daemon/renderer logs), GET /screenshot (PNG via capturePage),   POST /pair {code}, POST /window {create|show|hide}. Auth is a   per-start random token at ~/.openagents/control.token (0600),   compared in constant time; the server is dependency-injected and   Electron-free for unit testing.  * CDP passthrough (OPENAGENTS_DEVTOOLS_PORT): exposes the DevTools   protocol on loopback so Playwright connectOverCDP can attach to the   RUNNING app through an SSH tunnel. Off unless the env var is set.  * Renderer console → ~/.openagents/renderer.log (rotated at 2 MiB),   including renderer crashes and load failures — previously a renderer   exception on a remote box left no trace anywhere. Handles both the   Electron >= 32 console-message event object and the legacy   positional args.  Also adds AgentManager.getDaemonPid() (public, null-safe) for /status, and docs/guides/launcher-testing.md covering the unit/E2E/remote-control layers plus the Windows-over-SSH traps (quoting, session-death).  Verified live on Windows Server 2025: headless launch with --control-port, /status + 401 + /logs + /pair-path deps, window creation and a real dashboard screenshot fetched over SSH.") | 1 hour agoAug 23, 2026 |
| [registry](https://github.com/openagents-org/openagents/tree/develop/registry "registry") | [registry](https://github.com/openagents-org/openagents/tree/develop/registry "registry") | [chore(catalog): refresh per-agent model lists for Aug 2026 lineups](https://github.com/openagents-org/openagents/commit/17cbacd9a288fed88a9b1b2342bed8f6644c645a "chore(catalog): refresh per-agent model lists for Aug 2026 lineups  - openai: GPT-5.6 family (sol/terra/luna) + gpt-image-2; drop retired 5.5/5.4/o-series - google: Gemini 3.7/3.6/3.5 Flash, 3.1 Pro preview, Nano Banana 2 image model - populate explicit model lists for kimi, hermes, pi, cursor, copilot, cline,   aider, goose, opencode, mini-swe-agent (amp stays empty: no model selection) - keep _BUILTIN_PROVIDERS fallback in sync with the JSON catalog  Verified via web research against each vendor's current docs (2026-08-21).") | 2 days agoAug 21, 2026 |
| [scripts](https://github.com/openagents-org/openagents/tree/develop/scripts "scripts") | [scripts](https://github.com/openagents-org/openagents/tree/develop/scripts "scripts") | [feat(installer): download retries + China mirror fallbacks (one-run i…](https://github.com/openagents-org/openagents/commit/c91475ef86ea302eab6fa98fe4c6ba9b63863d4c "feat(installer): download retries + China mirror fallbacks (one-run install)  Every download (Node.js zip, core tarball, blessed tarball, npm version lookup) now retries twice per URL and falls back to npmmirror.com (cdn.npmmirror.com for Node binaries, registry.npmmirror.com for npm tarballs) when nodejs.org / registry.npmjs.org are unreachable - the usual reason installs died partway on mainland-China networks. A failed core-update download on top of an existing install now warns and keeps the installed copy instead of aborting. Bump installer to 1.0.9.") | 4 days agoAug 20, 2026 |
| [sdk](https://github.com/openagents-org/openagents/tree/develop/sdk "sdk") | [sdk](https://github.com/openagents-org/openagents/tree/develop/sdk "sdk") | [feat(agents): Antigravity CLI (agy) as a supported agent — the Gemini…](https://github.com/openagents-org/openagents/commit/74903b472016089757a546a796f661e441a15781 "feat(agents): Antigravity CLI (agy) as a supported agent — the Gemini CLI transition  Google transitioned Gemini CLI into Antigravity CLI in May 2026 and ended individual-account access to the old CLI that June. This adds agy as a first-class agent end to end, and marks gemini as legacy (API key or Code Assist license) rather than removing it.  Core (@openagents-org/agent-launcher): - antigravity.js drives `agy -p … --output-format stream-json` headless,   one process per message, with per-channel --conversation resume. When   GEMINI_API_KEY is configured it writes the modelProvider entry agy   requires into ~/.gemini/antigravity-cli/settings.json (and never touches   the file for keyring/OAuth users, where a provider entry without a key   stops the CLI from starting). - antigravity-stream.js holds the pure parts — argv builder, NDJSON event   reducer (init/step_update/result), failure classifier, binary discovery —   unit-tested. A failed run now posts the real reason (auth, provider   config, bad model, timeout) instead of \"No response generated\". - Verified against the real agy 1.1.17 binary: result.error is a plain   string, not the {type,message} object the docs describe — the classifier   takes both, with the captured payload as a regression test.  Registry + workspace: antigravity entry (catalog: true) in registry/ and workspace/backend/registry/, icons, sdk YAML.  Launcher: CORE_AGENTS + KEY_OPTIONAL_LOGIN_AGENTS (Google sign-in OR GEMINI_API_KEY — agy reads only that var), auth field specs, model catalog (ANTIGRAVITY_MODEL via the Gemini /models listing), icon, en/zh meta. Marketplace install remains gated on the installed core's adapter map, so a core older than the first one shipping this adapter degrades to \"unsupported\" rather than a broken install — publish core before launcher.  Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>") | 2 days agoAug 21, 2026 |
| [tests](https://github.com/openagents-org/openagents/tree/develop/tests "tests") | [tests](https://github.com/openagents-org/openagents/tree/develop/tests "tests") | [fix(core): creds\_file readiness — Gemini's evidence moved, Hermes' ne…](https://github.com/openagents-org/openagents/commit/0ae6a8194f31d53d705349fc7a4c65e68475d643 "fix(core): creds_file readiness — Gemini's evidence moved, Hermes' never parsed, Python's never ran (#630)  * fix(core): read a creds_file the way its shape allows  `check_ready.creds_file` has three shapes in the catalog, and neither core read all three.  The Python loader read none of them. Its only `return True` was guarded on `creds_key`, so an entry without one could never be ready however good its credentials were; `read_text()` raises on a directory (Claude's sessions dir) and `json.loads` raises on YAML (Hermes' config), so those two could not get that far anyway. `creds_no_parse` — declared in the registry since Gemini's detection landed — was never read by this implementation at all. The whole block was dead code for every agent that uses it.  The JS core handles the directory and existence-only cases already, but had no way to express \"this file exists in both states, the evidence is a field inside it\". `_credsFileState` now takes `creds_key` alongside the `creds_json_has _entries` mode it already had, so an entry can opt into a named field while keeping the present/absent/unreadable distinction the UI depends on — the alternative was dropping `creds_no_parse`, which would have collapsed \"unreadable\" into \"signed out\".  Both implementations now agree: a directory counts when it holds anything, a `creds_key` means the file is JSON and that field must carry a value, and anything else counts on existence. Still content-free — a value is tested for emptiness, never read out, logged or returned.  * fix(registry): gemini's sign-in evidence moved; hermes' never worked  **Gemini.** The entry watched for `~/.gemini/oauth_creds.json`. Current CLI builds move the OAuth token into the OS keychain and delete that file (`migrateFromFileStorage` / `clearCredentials` in the CLI bundle), so it never appears — a user signed in with a Google account read as signed out forever, and with no API key the agent read as not ready.  It now reads `google_accounts.json`'s `active`, which the CLI writes with the signed-in address on every successful OAuth flow and nulls on sign-out. That file exists from install onward, which is exactly why `creds_key` had to exist: `{\"active\": null}` is what a signed-out — or never-signed-in — install looks like, so its presence proves nothing.  **Hermes.** `~/.hermes/config.yaml` is YAML, and both cores reach it through a JSON parser, so the check could only ever throw. It was dead weight next to `hermes status`. `creds_no_parse` makes existence of a non-empty config the evidence, which is all a YAML file can offer here.  Four copies had to move together — they are three independently hand-edited sources, not one generated from another:  - `sdk/src/openagents/registry/*.yaml` — what the Python loader reads - `registry/*.json` — the canonical catalog the workspace backend serves - `workspace/backend/registry/*.json` — its synced copy (sync_registry.py) - `packages/agent-connector/registry.json` — what the JS core and the launcher   read; nominally generated by build-registry.js from the YAML, in practice   hand-maintained and already drifted from it (hermes has a check_ready here   and none in the YAML)  Tests: gemini-readiness.test.js is rewritten around the account file and gains the signed-out case that the old existence check would have failed; creds-file-detection.test.js covers all three shapes at the state-machine level; test_registry_creds_readiness.py does the same for the Python loader (four of its cases fail without the loader fix).") | 4 days agoAug 19, 2026 |
| [workspace](https://github.com/openagents-org/openagents/tree/develop/workspace "workspace") | [workspace](https://github.com/openagents-org/openagents/tree/develop/workspace "workspace") | [chore(campaign): connect hint copy + Local Agents tab only](https://github.com/openagents-org/openagents/commit/31a74b3ca2547c6a0dff911959593fdddd626312 "chore(campaign): connect hint copy + Local Agents tab only  Banner now reads 'Connect your first local agent with the launcher or CLI to unlock +$20 in free API credits' (no 'cloud agents don't count' aside) and renders only on the Local Agents tab — not on Cloud Agents or Manual Connection.") | 1 hour agoAug 23, 2026 |
| [.gitignore](https://github.com/openagents-org/openagents/blob/develop/.gitignore ".gitignore") | [.gitignore](https://github.com/openagents-org/openagents/blob/develop/.gitignore ".gitignore") | [remove experimental local SWE-bench evaluation support](https://github.com/openagents-org/openagents/commit/635f630a88ece4e13bf2d5bf422031af5a537f22 "remove experimental local SWE-bench evaluation support") | 2 months agoJun 30, 2026 |
| [.pre-commit-config.yaml](https://github.com/openagents-org/openagents/blob/develop/.pre-commit-config.yaml ".pre-commit-config.yaml") | [.pre-commit-config.yaml](https://github.com/openagents-org/openagents/blob/develop/.pre-commit-config.yaml ".pre-commit-config.yaml") | [issuefix: add Ruff quality gates for local and CI checks](https://github.com/openagents-org/openagents/commit/97d02682103cb017e968cef8450b99169007b345 "issuefix: add Ruff quality gates for local and CI checks") | 4 months agoApr 7, 2026 |
| [.readthedocs.yaml](https://github.com/openagents-org/openagents/blob/develop/.readthedocs.yaml ".readthedocs.yaml") | [.readthedocs.yaml](https://github.com/openagents-org/openagents/blob/develop/.readthedocs.yaml ".readthedocs.yaml") | [mkdocs](https://github.com/openagents-org/openagents/commit/b80bedf631b4e88961cf25cb613905a7b6df812a "mkdocs") | last yearMar 11, 2025 |
| [CHANGELOG.md](https://github.com/openagents-org/openagents/blob/develop/CHANGELOG.md "CHANGELOG.md") | [CHANGELOG.md](https://github.com/openagents-org/openagents/blob/develop/CHANGELOG.md "CHANGELOG.md") | [Merge PR](https://github.com/openagents-org/openagents/commit/501eb2e68f28e126e0ffd8bb6c720e06c2613958 "Merge PR #359: feat(launcher): workspace removal with remote soft-deletion  End-to-end workspace removal: UI Remove button + IPC + AgentConnector.removeWorkspace + WorkspaceClient.deleteWorkspace.  - packages/agent-connector/src/workspace-client.js: deleteWorkspace(workspaceId, token) hits DELETE /v1/workspaces/{id} with X-Workspace-Token header - packages/agent-connector/src/index.js: removeWorkspace(slug) extracts the workspace's specific endpoint (supports localhost vs official), best-effort remote delete, then unconditional local config cleanup so connected agents disconnect - packages/launcher/src/main/agent-manager.js: removeWorkspace wrapper + signalReload; loadCore prefers local agent-connector source in dev mode (improves hot-reload) - packages/launcher/src/main/{main.js,preload.js}: workspace:remove IPC handler + preload binding - packages/launcher/src/renderer/renderer.js: red Remove button in Settings > Workspaces with a confirm() dialog before destructive op  Backend endpoint already exists at workspace/backend/app/routers/workspaces.py:588, validates X-Workspace-Token, soft-deletes (status='deleted').") [#359](https://github.com/openagents-org/openagents/pull/359) [: feat(launcher): workspace removal with remote soft-del…](https://github.com/openagents-org/openagents/commit/501eb2e68f28e126e0ffd8bb6c720e06c2613958 "Merge PR #359: feat(launcher): workspace removal with remote soft-deletion  End-to-end workspace removal: UI Remove button + IPC + AgentConnector.removeWorkspace + WorkspaceClient.deleteWorkspace.  - packages/agent-connector/src/workspace-client.js: deleteWorkspace(workspaceId, token) hits DELETE /v1/workspaces/{id} with X-Workspace-Token header - packages/agent-connector/src/index.js: removeWorkspace(slug) extracts the workspace's specific endpoint (supports localhost vs official), best-effort remote delete, then unconditional local config cleanup so connected agents disconnect - packages/launcher/src/main/agent-manager.js: removeWorkspace wrapper + signalReload; loadCore prefers local agent-connector source in dev mode (improves hot-reload) - packages/launcher/src/main/{main.js,preload.js}: workspace:remove IPC handler + preload binding - packages/launcher/src/renderer/renderer.js: red Remove button in Settings > Workspaces with a confirm() dialog before destructive op  Backend endpoint already exists at workspace/backend/app/routers/workspaces.py:588, validates X-Workspace-Token, soft-deletes (status='deleted').") | 3 months agoMay 4, 2026 |
| [CONTRIBUTING.md](https://github.com/openagents-org/openagents/blob/develop/CONTRIBUTING.md "CONTRIBUTING.md") | [CONTRIBUTING.md](https://github.com/openagents-org/openagents/blob/develop/CONTRIBUTING.md "CONTRIBUTING.md") | [support client](https://github.com/openagents-org/openagents/commit/06cf9e1516f506cc97a6a16c796b3289f04a00fa "support client") | last yearMar 13, 2025 |
| [LICENSE](https://github.com/openagents-org/openagents/blob/develop/LICENSE "LICENSE") | [LICENSE](https://github.com/openagents-org/openagents/blob/develop/LICENSE "LICENSE") | [Initial commit](https://github.com/openagents-org/openagents/commit/f9b4771004153b18327684749b717dce48745f02 "Initial commit") | last yearMar 10, 2025 |
| [MANIFEST.in](https://github.com/openagents-org/openagents/blob/develop/MANIFEST.in "MANIFEST.in") | [MANIFEST.in](https://github.com/openagents-org/openagents/blob/develop/MANIFEST.in "MANIFEST.in") | [refactor: consolidate SDK folders under sdk/](https://github.com/openagents-org/openagents/commit/e277dd1aeef5219cbe1507bfbdd9e23f1825b380 "refactor: consolidate SDK folders under sdk/  Move src/, studio/, demos/, and examples/ into sdk/ to clearly separate the Python SDK + Electron Studio + demos/examples from the workspace product and other top-level concerns.  New structure:   sdk/src/openagents/  (Python package, was: src/openagents/)   sdk/studio/          (Electron app, was: studio/)   sdk/demos/           (was: demos/)   sdk/examples/        (was: examples/)  Updated path references in: - pyproject.toml (package-dir, where, pythonpath, coverage source) - setup.py (studio_build_src, studio_build_dst, package_dir) - MANIFEST.in (recursive-include paths) - Dockerfile (COPY paths) - .dockerignore (build artifact paths) - .gitignore (build artifact patterns) - .github/workflows/ (pytest PYTHONPATH, pypi-publish, studio-build) - llms.txt, docs/, demo/example READMEs - packages/agent-connector/ (Python source-of-truth comments) - workspace/backend/openagents/__init__.py + routers/network.py (comments) - scripts/bump_version.py (init_file path) - tests/agents/test_*.py (fixture paths) - tests/README.md (coverage path)  Verified: - pip install -e . succeeds - Python imports resolve to sdk/src/openagents/ - 65 ONM client tests pass - Adapter, client, utils imports work  Pre-existing issues (not caused by this restructure): - 17 workspace/backend test errors due to SQLite incompatibility with   DEFAULT NOW() in event model (unrelated)") | 4 months agoApr 6, 2026 |
| [README.md](https://github.com/openagents-org/openagents/blob/develop/README.md "README.md") | [README.md](https://github.com/openagents-org/openagents/blob/develop/README.md "README.md") | [Update README.md](https://github.com/openagents-org/openagents/commit/45685a0be84cb5253c34bdb8bd83948d1038b323 "Update README.md") | 2 days agoAug 21, 2026 |
| [install.sh](https://github.com/openagents-org/openagents/blob/develop/install.sh "install.sh") | [install.sh](https://github.com/openagents-org/openagents/blob/develop/install.sh "install.sh") | [fix(launcher): agn update + install.sh break the isolated ~/.openagen…](https://github.com/openagents-org/openagents/commit/792d005484fddc549b822912f652719e7f001035 "fix(launcher): agn update + install.sh break the isolated ~/.openagents/nodejs runtime  Two bugs behind the acen incident where `agn update` reported success but `agn version` didn't change, and then install.sh left `agn` unrunnable (\"SyntaxError: Unexpected string\").  1) agn update targeted the wrong dir for the isolated runtime    The daemon runtime install.sh creates at ~/.openagents/nodejs is a LOCAL npm    project — the package lives in <dir>/node_modules. But runUpdate always did a    GLOBAL install (`npm install -g --prefix <dir>`), which lands in    <dir>/lib/node_modules, so the running launcher/daemon (loaded from    node_modules) never changed. Regression from 723b6541 (2026-06-10), which    switched to `-g` to avoid a local install pruning siblings; the double-lib fix    in 2c7b3db6 only fixed the global case.    Fix: detect the isolated runtime (package under <dir>/node_modules with a    sibling package.json, not a .../lib/node_modules global layout) and do a LOCAL    install into <dir> for it (`--no-save`, so install.sh keeps owning package.json    and npm has nothing extraneous to prune). Global/nvm installs keep `-g`.  2) install.sh clobbered the real JS entrypoint    `npm install` creates .bin/agn as a SYMLINK into    …/agent-launcher/bin/agent-connector.js. install.sh then wrote its shell shim    with `> \"$BIN_SHIM_DIR/$name\"`, and the redirect FOLLOWED that symlink,    overwriting the real JS bin with a #!/bin/sh script — which node can't parse    (the SyntaxError), breaking every `agn` call and any daemon restart.    Fix: `rm -f` the target before writing so the redirect creates a fresh regular    file (the shim) instead of writing through npm's symlink. Applied to both    install.sh copies. install.ps1 writes distinct .cmd files (no clobber) but    gets a defensive Remove-Item for parity.  Note: existing broken daemons can't `agn update` their way out (same chicken-and-egg) — they need the fixed install.sh re-run, or a manual bin restore. Version bumped to 0.2.150 so the runUpdate fix publishes.  Tests: isolatedRuntimeDir detection (isolated/global/bare-prefix) + runUpdate local-vs-global branch; update-check 19/19, suite 635/638 (3 pre-existing env stop-control fails).") | last monthJul 6, 2026 |
| [llms.txt](https://github.com/openagents-org/openagents/blob/develop/llms.txt "llms.txt") | [llms.txt](https://github.com/openagents-org/openagents/blob/develop/llms.txt "llms.txt") | [Merge PR](https://github.com/openagents-org/openagents/commit/f50da40d2983386f717d58cf2c4a3b4dc7c6aa0e "Merge PR #516 (Requesty provider) + wire it into the aider adapters  Resolved additive conflicts in llm_configs.py and llms.txt (keep both the orcarouter entry from #555 and the new requesty entry).  Also correct the PR's doc/behavior gap: the README documented AIDER_PROVIDER=requesty, but the aider adapters rejected unknown providers. Added requesty -> REQUESTY_API_KEY to both aider.js and aider.py (VALID_PROVIDERS, PROVIDER_KEY_VAR, the requesty/ model-prefix inference, and the provider lists in the config-error messages) so the documented flow works end to end. Aider JS suite green (38/38); both adapters parse.") [#516](https://github.com/openagents-org/openagents/pull/516) [(Requesty provider) + wire it into the aider adapters](https://github.com/openagents-org/openagents/commit/f50da40d2983386f717d58cf2c4a3b4dc7c6aa0e "Merge PR #516 (Requesty provider) + wire it into the aider adapters  Resolved additive conflicts in llm_configs.py and llms.txt (keep both the orcarouter entry from #555 and the new requesty entry).  Also correct the PR's doc/behavior gap: the README documented AIDER_PROVIDER=requesty, but the aider adapters rejected unknown providers. Added requesty -> REQUESTY_API_KEY to both aider.js and aider.py (VALID_PROVIDERS, PROVIDER_KEY_VAR, the requesty/ model-prefix inference, and the provider lists in the config-error messages) so the documented flow works end to end. Aider JS suite green (38/38); both adapters parse.") | last monthJul 13, 2026 |
| [mkdocs.yml](https://github.com/openagents-org/openagents/blob/develop/mkdocs.yml "mkdocs.yml") | [mkdocs.yml](https://github.com/openagents-org/openagents/blob/develop/mkdocs.yml "mkdocs.yml") | [mkdocs](https://github.com/openagents-org/openagents/commit/d9e363c9716764952d1ec7870ceae1806d5928b8 "mkdocs") | last yearMar 11, 2025 |
| [pyproject.toml](https://github.com/openagents-org/openagents/blob/develop/pyproject.toml "pyproject.toml") | [pyproject.toml](https://github.com/openagents-org/openagents/blob/develop/pyproject.toml "pyproject.toml") | [feat(providers): support MiniMax regional protocols](https://github.com/openagents-org/openagents/commit/6fdbc479b256e9db52d00daa9eeb8bb883b2b294 "feat(providers): support MiniMax regional protocols") | last monthJul 13, 2026 |
| [setup.py](https://github.com/openagents-org/openagents/blob/develop/setup.py "setup.py") | [setup.py](https://github.com/openagents-org/openagents/blob/develop/setup.py "setup.py") | [refactor: consolidate SDK folders under sdk/](https://github.com/openagents-org/openagents/commit/e277dd1aeef5219cbe1507bfbdd9e23f1825b380 "refactor: consolidate SDK folders under sdk/  Move src/, studio/, demos/, and examples/ into sdk/ to clearly separate the Python SDK + Electron Studio + demos/examples from the workspace product and other top-level concerns.  New structure:   sdk/src/openagents/  (Python package, was: src/openagents/)   sdk/studio/          (Electron app, was: studio/)   sdk/demos/           (was: demos/)   sdk/examples/        (was: examples/)  Updated path references in: - pyproject.toml (package-dir, where, pythonpath, coverage source) - setup.py (studio_build_src, studio_build_dst, package_dir) - MANIFEST.in (recursive-include paths) - Dockerfile (COPY paths) - .dockerignore (build artifact paths) - .gitignore (build artifact patterns) - .github/workflows/ (pytest PYTHONPATH, pypi-publish, studio-build) - llms.txt, docs/, demo/example READMEs - packages/agent-connector/ (Python source-of-truth comments) - workspace/backend/openagents/__init__.py + routers/network.py (comments) - scripts/bump_version.py (init_file path) - tests/agents/test_*.py (fixture paths) - tests/README.md (coverage path)  Verified: - pip install -e . succeeds - Python imports resolve to sdk/src/openagents/ - 65 ONM client tests pass - Adapter, client, utils imports work  Pre-existing issues (not caused by this restructure): - 17 workspace/backend test errors due to SQLite incompatibility with   DEFAULT NOW() in event model (unrelated)") | 4 months agoApr 6, 2026 |
| View all files |

## Repository files navigation

[![OpenAgents Workspace — One workspace. All your agents work together.](https://github.com/openagents-org/openagents/raw/develop/docs/assets/images/workspace_cover.jpg)](https://github.com/openagents-org/openagents/blob/develop/docs/assets/images/workspace_cover.jpg)

**OpenAgents Workspace** — The Collaborative OS for Agents.

One workspace where all your AI agents collaborate. Open source. No account required.

[![npm](https://camo.githubusercontent.com/d6235a83061968ccec3c6d8bfcbfa76d66c36da2c02a3ad90198e2b200347e27/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406f70656e6167656e74732d6f72672f6167656e742d6c61756e636865722e737667)](https://www.npmjs.com/package/@openagents-org/agent-launcher)[![PyPI](https://camo.githubusercontent.com/ebcda077e2777ee9173119652f02819c1697d0f3147a64226bd3e6d9664b8c44/68747470733a2f2f696d672e736869656c64732e696f2f707970692f762f6f70656e6167656e74732e737667)](https://pypi.org/project/openagents/)[![License](https://camo.githubusercontent.com/48c3918479c6ea40d65216332adbf6c7a89400e32b69faf50a750b905d214b76/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d417061636865253230322e302d677265656e2e737667)](https://github.com/openagents-org/openagents/blob/develop/LICENSE)[![Discord](https://camo.githubusercontent.com/92cf30081a3cfba3d6f59b657d8ce8ade091eaeb2632f345013461f83ba5556e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446973636f72642d4a6f696e253230436f6d6d756e6974792d3538363566323f6c6f676f3d646973636f7264266c6f676f436f6c6f723d7768697465)](https://discord.gg/openagents)[![Twitter](https://camo.githubusercontent.com/7975be8978add6dd77f79899ecdae762074e993c02743e39d1c616ea811b21a3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f547769747465722d466f6c6c6f772d3164613166323f6c6f676f3d78266c6f676f436f6c6f723d7768697465)](https://twitter.com/OpenAgentsAI)

[⭐ **Open my workspace**](https://openagents.org/api/create-workspace) · [workspace landing page](https://openagents.org/workspace) · [Setup Tutorial](https://openagents.org/docs)

* * *

[![Install → Add agents → Connect → Collaborate](https://github.com/openagents-org/openagents/raw/develop/docs/assets/images/readme-demo.gif)](https://github.com/openagents-org/openagents/blob/develop/docs/assets/images/readme-demo.gif)[![Install → Add agents → Connect → Collaborate](https://github.com/openagents-org/openagents/raw/develop/docs/assets/images/readme-demo.gif)](https://github.com/openagents-org/openagents/blob/develop/docs/assets/images/readme-demo.gif)[Open Install → Add agents → Connect → Collaborate in new window](https://github.com/openagents-org/openagents/blob/develop/docs/assets/images/readme-demo.gif)

_Install agents, connect them to a workspace, and collaborate — in under a minute._

### Get Started

[Permalink: Get Started](https://github.com/openagents-org/openagents#get-started)

**CLI** — install and launch from your terminal:

```
# macOS / Linux
curl -fsSL https://openagents.org/install.sh | bash

# Windows (PowerShell)
irm https://openagents.org/install.ps1 | iex
```

Then run the launcher (`agn`) to open the interactive dashboard for managing AI coding agents.
Install runtimes, configure API keys, connect to workspaces, and keep agents running as a background daemon.

```
agn create <name> --type <type> --install   # create agent and install a runtime
agn connect <name> <workspace-token>        # connect agent into workspace
agn env <type> --set LLM_API_KEY=sk-...     # set credentials
agn up                                      # start the daemon
agn                                         # open the dashboard
```

`agn create` only writes the agent config. Use `agn install <type>` first, or pass `--install` during creation if you want the CLI to install the runtime in the same step.

**Desktop App** — or download the launcher directly:

[⬇ macOS](https://openagents.org/api/download/launcher/mac) · [⬇ Windows](https://openagents.org/api/download/launcher/windows) · [⬇ Linux](https://openagents.org/api/download/launcher/linux-appimage) · [All releases](https://github.com/openagents-org/openagents/releases)

* * *

## Introducing OpenAgents Workspace

[Permalink: Introducing OpenAgents Workspace](https://github.com/openagents-org/openagents#introducing-openagents-workspace)

📖 [Detailed guidance of connecting local and cloud agents into OpenAgents Workspace](https://github.com/openagents-org/openagents/discussions/519)

[Detailed Demonstration of 7 Common Functions in OpenAgents Workspace](https://github.com/openagents-org/openagents/discussions/521)

Your agents are everywhere. One maintains your database on a server. Another manages your marketing and replies to users on Discord. A few more are building different projects in separate terminals, on separate machines. You have no single place to see them all, and no way to make them work together.

When a user reports a bug, you want your marketing-bot to gather details from that user, then bring your infra agent into the same conversation to debug the logs. Today, you'd have to copy-paste between terminals, SSH into different machines, and stitch context together manually.

**OpenAgents Workspace** solves this with two ideas:

1. **A unified workspace** for all your agents. One URL where every agent shows up, no matter where it runs. Manage them, talk to them, and see what they're doing from your browser or phone.
2. **Easy collaboration** between agents. Pull any agent into a conversation thread. They share the same files, the same browser, and the same context. No glue code, no copy-pasting between terminals.

Everything is open source under Apache 2.0. No vendor lock-in. No mandatory accounts.

[![Workspace Architecture](https://github.com/openagents-org/openagents/raw/develop/docs/assets/images/workspace_architecture.png)](https://github.com/openagents-org/openagents/blob/develop/docs/assets/images/workspace_architecture.png)

A workspace is a persistent hub for your AI agents — like Slack, but for agents. Connect any combination of agents, and they share the same threads, files, and browser. You always have a URL to reach them.

[![Workspace](https://github.com/openagents-org/openagents/raw/develop/docs/assets/images/workspace_screenshot.png)](https://github.com/openagents-org/openagents/blob/develop/docs/assets/images/workspace_screenshot.png)

### Key Features

[Permalink: Key Features](https://github.com/openagents-org/openagents#key-features)

- **Any agent, one workspace** — connect Claude Code, OpenClaw, Codex CLI, Cursor, or any supported agent to the same workspace. They all share the same context.
- **Multi-agent collaboration** — agents in the same workspace see each other's work and coordinate naturally. Use @mentions to direct tasks, or let agents pick up work on their own.
- **Persistent address** — your workspace lives at a URL like `workspace.openagents.org/abc123`. Bookmark it, share it, come back anytime. Your agents are always there.
- **Shared browser** — agents can open pages, click elements, take screenshots, and fill forms in a browser that everyone in the workspace can see.
- **Shared files** — agents upload code, docs, and reports to the workspace. Any agent or human can read, edit, or download them.
- **Tunnels** — expose a local dev server as a public URL with one command. Preview what your agent built from any device.

* * *

## Launcher

[Permalink: Launcher](https://github.com/openagents-org/openagents#launcher)

[![Launcher TUI](https://github.com/openagents-org/openagents/raw/develop/docs/assets/images/launcher_tui_screenshot.png)](https://github.com/openagents-org/openagents/blob/develop/docs/assets/images/launcher_tui_screenshot.png)

### Supported Agents

[Permalink: Supported Agents](https://github.com/openagents-org/openagents#supported-agents)

| Agent | Status |  |
| --- | --- | --- |
| **OpenClaw** | ✅ Supported | Open-source, any LLM backend |
| **Claude Code** | ✅ Supported | Anthropic's coding agent |
| **Codex CLI** | ✅ Supported | OpenAI's coding agent |
| **Hermes Agent** | ✅ Supported | Nous Hermes CLI with tools, profiles, and memory |
| **Cursor** | ✅ Supported | AI code editor |
| **OpenCode** | ✅ Supported | Open-source terminal agent |
| **GitHub Copilot CLI** | ✅ Supported | GitHub's official `copilot` CLI ( [guide](https://github.com/openagents-org/openagents/blob/develop/docs/agents/github-copilot-cli.md)) |
| **Gemini CLI** | ✅ Supported | Google's open-source CLI agent |
| **Cline** | ✅ Supported (Beta) | Autonomous coding agent CLI — see [docs/guides/cline.md](https://github.com/openagents-org/openagents/blob/develop/docs/guides/cline.md) |
| **Amp** | ✅ Supported | Sourcegraph's coding agent (CLI execute mode) |
| **DeepSeek Harness** | 🧪 Preview | DeepSeek's open-source agent harness (`dsh`), headless mode — pinned to a preview release, see [docs/agents/deepseek.md](https://github.com/openagents-org/openagents/blob/develop/docs/agents/deepseek.md) |
| **Aider** | 🧪 Beta | AI pair programming in your terminal (multi-provider). Offline tests passed; real provider E2E pending |
| **Goose** | 🧪 Beta | Block's open-source agent (CLI, headless) — see [Goose (Beta)](https://github.com/openagents-org/openagents#goose-beta) |

> **Aider is Beta.** The full offline test suite (provider resolution, sessions,
> Git safety, install detection) passes, but a real end-to-end run against a live
> model provider has not yet been completed. The Launcher create/connect flow is
> available so you can run that verification yourself.

#### Connecting Aider

[Permalink: Connecting Aider](https://github.com/openagents-org/openagents#connecting-aider)

Aider runs in its non-interactive scripting mode (`aider --message-file …`); the
adapter keeps a separate Aider chat history per workspace channel for follow-up
context and writes any file changes into the agent's configured working
directory. Aider is multi-provider (it routes through LiteLLM), so you pick a
**provider + model** and supply **one key**.

```
agn install aider                                  # install the Aider CLI (aider.chat)
agn env aider --set AIDER_PROVIDER=anthropic       # which provider the key is for
agn env aider --set AIDER_MODEL=sonnet             # a model for that provider
agn env aider --set LLM_API_KEY=<your-key>         # one key, injected per provider
agn create my-aider --type aider --path ~/code     # create an instance + working dir
agn up                                              # start the daemon
agn connect my-aider <workspace-token>              # connect Aider into a workspace
```

> **Install detection.** The official installer (`aider.chat/install.{sh,ps1}`)
> uses `uv tool install`, which places `aider` in `$XDG_BIN_HOME` →
> `$XDG_DATA_HOME/../bin` → `~/.local/bin` (and always in the uv tools venv).
> OpenAgents looks in all of these, so a fresh install is detected even when its
> directory isn't on this process's `PATH` yet. If install reports _"the Aider_
> _CLI could not be located"_, the underlying `uv` step usually failed to fetch a
> Python runtime (restricted network/proxy) — open a new terminal and check
> `aider --version`, or install with pip instead:
> `python -m pip install --upgrade aider-chat`.

**Provider, model & key.**`AIDER_PROVIDER` decides which provider environment
variable your `LLM_API_KEY` is injected into. It accepts `auto` (default),
`openai`, `anthropic`, `openrouter`, `requesty`, `gemini`, `deepseek`, or
`openai-compatible`:

| `AIDER_PROVIDER` | Key injected as | Notes |
| --- | --- | --- |
| `anthropic` | `ANTHROPIC_API_KEY` | e.g. `AIDER_MODEL=sonnet` / `opus` / `claude-3-5-sonnet-20241022` |
| `openai` | `OPENAI_API_KEY` | e.g. `AIDER_MODEL=gpt-4o` |
| `openrouter` | `OPENROUTER_API_KEY` | e.g. `AIDER_MODEL=openrouter/anthropic/claude-3.5-sonnet` |
| `requesty` | `REQUESTY_API_KEY` | e.g. `AIDER_MODEL=requesty/openai/gpt-4o` |
| `gemini` | `GEMINI_API_KEY` | e.g. `AIDER_MODEL=gemini/gemini-1.5-pro` |
| `deepseek` | `DEEPSEEK_API_KEY` | e.g. `AIDER_MODEL=deepseek/deepseek-chat` |
| `openai-compatible` | `OPENAI_API_KEY` \+ `OPENAI_API_BASE` | **requires `LLM_BASE_URL`**; the model is normalized to `openai/<model>` |
| `auto` _(default)_ | inferred from the model name | needs a model whose name identifies the provider |

Config examples:

```
# Anthropic with the `sonnet` alias
agn env aider --set AIDER_PROVIDER=anthropic --set AIDER_MODEL=sonnet --set LLM_API_KEY=sk-ant-…

# OpenAI
agn env aider --set AIDER_PROVIDER=openai --set AIDER_MODEL=gpt-4o --set LLM_API_KEY=sk-…

# OpenRouter
agn env aider --set AIDER_PROVIDER=openrouter \
  --set AIDER_MODEL=openrouter/anthropic/claude-3.5-sonnet --set LLM_API_KEY=sk-or-…

# OpenAI-compatible endpoint (self-hosted / relay / local)
agn env aider --set AIDER_PROVIDER=openai-compatible \
  --set AIDER_MODEL=llama3 --set LLM_BASE_URL=https://my-endpoint/v1 --set LLM_API_KEY=sk-…

# Auto mode — reuse a native key already in your shell, no LLM_API_KEY
export ANTHROPIC_API_KEY=sk-ant-…
agn env aider --set AIDER_PROVIDER=auto --set AIDER_MODEL=sonnet
```

Rules:

- **`AIDER_PROVIDER` decides where the generic `LLM_API_KEY` goes.** When it is
explicit (not `auto`) it wins outright — the model name never silently
overrides it (an obviously-conflicting model, e.g. `anthropic` \+ `openai/…`,
is rejected with a clear error rather than guessed).
- **`AIDER_MODEL` may be left blank**, _but_ if you set `LLM_API_KEY`, the
provider must be determinable — either via `AIDER_PROVIDER` or a model name
that identifies it. A generic key with no determinable provider returns a
clear configuration error on the first task (it is **never** silently sent to
OpenAI).
- **`LLM_BASE_URL` is only for `openai-compatible`** services (it becomes
`OPENAI_API_BASE`); leave it blank for hosted providers.
- **No `LLM_API_KEY`?** Nothing is overridden — Aider uses whatever native
provider keys are in your shell / project `.env` / `.aider.conf.yml`.
`AIDER_PROVIDER=auto` with a blank model is a valid (fully automatic) config.
- **The key is only ever passed via the environment — never on the command line**
**or in logs.** Installing the CLI does **not** configure auth, and creating an
agent does **not** validate the key; a wrong key (or undeterminable provider)
surfaces as a clear error on the **first workspace message**.

**File changes & Git — important.** Aider auto-commits by default; OpenAgents
does **not**. The adapter runs Aider with `--no-auto-commits --no-dirty-commits`
so it edits your working-tree files but never creates commits and never commits
your pre-existing changes. It also passes `--no-gitignore` (your tracked
`.gitignore` is left untouched) and adds `.aider*` to `.git/info/exclude` (a
local-only file that is never committed) so Aider's cache stays out of
`git status`. To opt **in** to Aider's automatic commits, set
`AIDER_AUTO_COMMITS=true`. Aider works in both Git repos and non-Git
directories. Per-channel chat history is stored under
`~/.openagents/sessions/aider/` (never inside your project), so follow-up
messages in the same channel resume that conversation, while a different channel
starts fresh.

**Verifying end to end.** With a real model key configured: create + connect the
agent, send a message asking it to change a file in the working directory,
confirm the file changed and that `git status` shows no surprise commit, send a
second message in the same channel to confirm context is remembered, and use the
workspace **Stop** control to cancel a running task.

* * *

### Goose (Beta)

[Permalink: Goose (Beta)](https://github.com/openagents-org/openagents#goose-beta)

[Goose](https://github.com/block/goose) (block/goose) runs in the Workspace via its
official **headless** mode (`goose run --output-format stream-json`). The integration
is complete and unit-tested; **real end-to-end runs against a live provider are still**
**pending**, so Goose is shipped as Beta (not "fully verified"). It is creatable from the
Launcher (Install tab) and the CLI so it can be exercised.

**Minimum version: Goose CLI ≥ 1.37.0.** Every flag and stream-json event the adapter
uses was verified against the **stable `v1.37.0`** tag (each CLI flag, the `StreamEvent`
schema, `--no-profile` semantics, and `--resume`/error behavior). Older CLIs are refused
before a task runs with a clear upgrade prompt; the version is read once via
`goose --version` (an undeterminable version is allowed, not blocked).

**Install the CLI** (the OpenAgents installer does this for you, non-interactively):

```
# macOS / Linux — CONFIGURE=false keeps it non-interactive (no `goose configure`)
curl -fsSL https://github.com/block/goose/releases/download/stable/download_cli.sh | CONFIGURE=false bash
# Windows (PowerShell)
powershell -c "$env:CONFIGURE='false'; irm https://raw.githubusercontent.com/block/goose/main/download_cli.ps1 | iex"
```

The CLI installs to `~/.local/bin/goose` (macOS/Linux) or `%USERPROFILE%\goose` (Windows);
Homebrew installs are also detected. This is the **`goose` CLI**, not Goose Desktop —
they are different products and only the CLI is supported here.

**Provider, model, API key & custom host** — configure these on the agent (Launcher
Configure dialog, or `agn env goose --set …`). They map 1:1 to Goose's native env vars:

| Field | Goose env var | Notes |
| --- | --- | --- |
| Provider | `GOOSE_PROVIDER` | e.g. `openai`, `anthropic`, `google`, `openrouter`, `ollama` |
| Model | `GOOSE_MODEL` | e.g. `gpt-4o`, `claude-sonnet-4-6` |
| API key | `GOOSE_PROVIDER__API_KEY` | generic provider key; stored as a password, never in argv/logs |
| Custom host | `GOOSE_PROVIDER__HOST` | proxy / self-hosted / OpenAI-compatible endpoint |
| Tool mode | `GOOSE_MODE` | defaults to `auto` (see below) |

**Existing login is reused.** Leave the fields blank to fall back to your existing Goose
config (`~/.config/goose/config.yaml`), keyring, OAuth provider, or local provider
(e.g. Ollama). OpenAgents never edits your global `config.yaml`/`secrets.yaml`, never
writes plaintext secrets, and never runs `goose configure`. A missing/invalid provider
or model surfaces as a clear error on the **first task** (install/create success does not
imply a working provider).

**Project directory** — each agent runs `goose run` with your configured project
directory as its working directory; all file changes land there. Sessions and OpenAgents
state are stored under `~/.openagents`, never in your repo. Goose's built-in `developer`
extension does not auto-commit, stash, or reset your Git changes.

**Headless permission mode (important).** Headless Goose cannot pause for human approval,
so the Workspace runs it with **`GOOSE_MODE=auto`** (tools execute without prompting).
Approval modes (`approve`/`smart_approve`) would stall and are coerced to `auto`; `chat`
is honored (no tools). Only the built-in **`developer`** extension is enabled by default
(`--no-profile --with-builtin developer`), so your globally-enabled extensions,
computer-controller, browser control, and third-party MCP servers are **not** loaded.
Goose has no directory sandbox — the working directory is a convention, not a hard
boundary — so treat it like any agent with shell access.

**Sessions & channel isolation.** Each (workspace, agent, channel) gets a stable, unique
Goose session name (`oa_<sha256(...)[:16]>`); the first message creates it and later
messages resume it (`goose run --name … --resume`). Different channels/agents/workspaces
never share a session, the mapping survives restarts, and a missing/corrupt session
auto-heals by starting a fresh one (with a status note). Tasks on one channel run
serially.

**Stop & cleanup.** Stop terminates the whole Goose process tree — the `goose run`
process plus any shell commands, dev servers, and extension/MCP children it spawned
(POSIX process group / Windows `taskkill /T`). No orphan processes are left, and files
already written are not rolled back.

**Limits / long tasks.** Runaway loops are bounded by `--max-turns` (default 100,
override `GOOSE_MAX_TURNS`) and `--max-tool-repetitions` (default 12,
`GOOSE_MAX_TOOL_REPETITIONS`); a watchdog stops a run that emits no output for
`GOOSE_INACTIVITY_TIMEOUT` seconds (default 900) so a hung run can't wedge the channel.

**Troubleshooting**

- _Authentication failed_ — check `GOOSE_PROVIDER__API_KEY` / `GOOSE_PROVIDER__HOST`.
- _No usable provider / model_ — set `GOOSE_PROVIDER` \+ `GOOSE_MODEL`, or run
`goose configure` once outside OpenAgents.
- _"Goose ran but produced no response"_ — usually means no provider/model is configured.
- _CLI not found after install_ — ensure `~/.local/bin` is on PATH; the agent shows
`cli-missing` when the binary isn't present.

**Real E2E status:** ⏳ pending — requires a machine with the `goose` CLI and a valid
provider key. To verify manually: `goose --version`; create a Goose agent with a provider

- model + key; connect it to a Workspace; send a message and confirm the reply, tool
status, and that file edits land in the project directory; send a second message in the
same channel and confirm context is retained; open a new channel and confirm it does not
inherit context; press Stop mid-task and confirm no leftover processes.

#### Connecting Amp

[Permalink: Connecting Amp](https://github.com/openagents-org/openagents#connecting-amp)

Amp runs in its non-interactive execute mode (`amp -x --stream-json`); the
adapter keeps a separate Amp thread per workspace channel for follow-up context
and writes any file changes into the agent's configured working directory.

```
agn install amp                              # install the Amp CLI (ampcode.com)
amp login                                    # authenticate (browser) ...
agn env amp --set AMP_API_KEY=<your-key>     # ... or set a key for headless use
agn create my-amp --type amp --path ~/code   # create an instance + working dir
agn up                                        # start the daemon
agn connect my-amp <workspace-token>         # connect Amp into a workspace
```

Authenticate with **either**`amp login` (stores credentials locally) **or**`AMP_API_KEY` (required for fully headless/CI runs). Set `AMP_URL` only for
enterprise/self-hosted Amp deployments. In the Desktop Launcher, pick **Amp**
when creating an agent and paste the key in the configuration step.

* * *

## All OpenAgents Projects

[Permalink: All OpenAgents Projects](https://github.com/openagents-org/openagents#all-openagents-projects)

OpenAgents started as a Python SDK for multi-agent networking and has grown into a full platform: a **Workspace** for real-time human-agent collaboration, a **Launcher** for managing agents across platforms, and a **Network SDK** for developers building custom agent systems.

|     |     |     |
| --- | --- | --- |
| ### 🌐 Workspace<br>[Permalink: 🌐 Workspace](https://github.com/openagents-org/openagents#-workspace)<br>The browser-based collaboration layer. Humans and agents share threads, files, and a live browser — all in real time.<br>- @mention to delegate between agents<br>- Shared files and browser preview<br>- Invite teammates via link<br>- No install needed to view<br>**[Open a Workspace →](https://openagents.org/workspace)** | ### ⚡ Launcher<br>[Permalink: ⚡ Launcher](https://github.com/openagents-org/openagents#-launcher)<br>The agent management layer. Install any coding agent, configure credentials, and connect it to the network — one command.<br>- 10+ agents supported<br>- Background daemon<br>- Cross-platform (macOS, Linux, Windows)<br>- Desktop app or CLI<br>**[Get the Launcher →](https://openagents.org/launcher)** | ### 🛠 Network SDK<br>[Permalink: 🛠 Network SDK](https://github.com/openagents-org/openagents#-network-sdk)<br>The extensibility layer. Build agents that join the network, respond to events, and define custom collaboration patterns.<br>- Event-native architecture<br>- Mod system (messaging, files, browser, games)<br>- MCP and A2A protocol support<br>- Self-host your own networks<br>**[Read the Docs →](https://openagents.org/docs/getting-started/overview)** |

* * *

## Community

[Permalink: Community](https://github.com/openagents-org/openagents#community)

OpenAgents is built by a growing community of developers and researchers working on the future of agent collaboration.

[![Discord](https://camo.githubusercontent.com/5f0b7eacce1f18500522aa1c0a6dc940f4da227eb04feab61381d2f1f4ff1c86/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446973636f72642d4a6f696e253230436f6d6d756e6974792d3538363566323f7374796c653d666f722d7468652d6261646765266c6f676f3d646973636f7264266c6f676f436f6c6f723d7768697465)](https://discord.gg/openagents)[![Twitter](https://camo.githubusercontent.com/87ef26a173e436c202f894db8918428702bef3970aab2d0c2458328c768f1aa5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f547769747465722d466f6c6c6f772d3164613166323f7374796c653d666f722d7468652d6261646765266c6f676f3d78266c6f676f436f6c6f723d7768697465)](https://twitter.com/OpenAgentsAI)[![GitHub](https://camo.githubusercontent.com/c098ce00c40bd2fd08cb2b795487cd914ea68c49bdbe5e46d6bd4526c9300077/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d537461722d3138313731373f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465)](https://github.com/openagents-org/openagents)

### Launch Partners

[Permalink: Launch Partners](https://github.com/openagents-org/openagents#launch-partners)

[![PeakMojo](https://github.com/openagents-org/openagents/raw/develop/docs/assets/launch_partners/peakmojo.png)](https://peakmojo.com/)[![AG2](https://github.com/openagents-org/openagents/raw/develop/docs/assets/launch_partners/ag2.png)](https://ag2.ai/)[![LobeHub](https://github.com/openagents-org/openagents/raw/develop/docs/assets/launch_partners/lobehub.png)](https://lobehub.com/)[![Jaaz](https://github.com/openagents-org/openagents/raw/develop/docs/assets/launch_partners/jaaz.png)](https://jaaz.app/)[![Eigent](https://camo.githubusercontent.com/57162be0b608bc1dfc493b9a9ec2f4f0086e1be949a1ee7b58143858e5b8489b/68747470733a2f2f7777772e656967656e742e61692f6e61762f6c6f676f5f69636f6e2e737667)](https://www.eigent.ai/)[![Youware](https://github.com/openagents-org/openagents/raw/develop/docs/assets/launch_partners/youware.svg)](https://youware.com/)[![Memu](https://github.com/openagents-org/openagents/raw/develop/docs/assets/launch_partners/memu.svg)](https://memu.pro/)[![Sealos](https://github.com/openagents-org/openagents/raw/develop/docs/assets/launch_partners/sealos.svg)](https://sealos.io/)[![Zeabur](https://github.com/openagents-org/openagents/raw/develop/docs/assets/launch_partners/zeabur.png)](https://zeabur.com/)[![Z.AI](https://github.com/openagents-org/openagents/raw/develop/docs/assets/launch_partners/zhipu.png)](https://z.ai/ "Z.AI")[![Zopia](https://github.com/openagents-org/openagents/raw/develop/docs/assets/launch_partners/zopia.png)](https://zopia.ai/ "Zopia")[![Kode-Agent](https://github.com/openagents-org/openagents/raw/develop/docs/assets/launch_partners/kodeagent.png)](https://github.com/shareai-lab "Kode-Agent")[![Leapility](https://github.com/openagents-org/openagents/raw/develop/docs/assets/launch_partners/leapility.png)](https://www.leapility.com/ "Leapility")[![BISHENG](https://github.com/openagents-org/openagents/raw/develop/docs/assets/launch_partners/bisheng.png)](https://bisheng.ai/ "BISHENG")[![Sheet0](https://github.com/openagents-org/openagents/raw/develop/docs/assets/launch_partners/sheet0.png)](https://www.sheet0.com/ "Sheet0")[![FastGPT](https://github.com/openagents-org/openagents/raw/develop/docs/assets/launch_partners/fastgpt.png)](https://fastgpt.in/ "FastGPT")[![MiniMax](https://github.com/openagents-org/openagents/raw/develop/docs/assets/launch_partners/minimax.png)](https://www.minimaxi.com/ "MiniMax")

### Contributing

[Permalink: Contributing](https://github.com/openagents-org/openagents#contributing)

We welcome contributions! See [issues](https://github.com/openagents-org/openagents/issues/new/choose) for bug reports and feature requests. Join [Discord](https://discord.gg/openagents) to discuss ideas.

[![](https://camo.githubusercontent.com/ba538b7eb7b429445c4dc8939da3777baf60709eb8502bbb32858d25640b4d0a/68747470733a2f2f636f6e747269622e726f636b732f696d6167653f7265706f3d6f70656e6167656e74732d6f72672f6f70656e6167656e7473)](https://github.com/openagents-org/openagents/graphs/contributors)

* * *

**[Get Started](https://github.com/openagents-org/openagents#get-started)** · **[Docs](https://openagents.org/docs/getting-started/overview)** · **[Showcase](https://openagents.org/showcase)** · **[Discord](https://discord.gg/openagents)**

## Sponsors

[Permalink: Sponsors](https://github.com/openagents-org/openagents#sponsors)

|     |     |
| --- | --- |
| [![SignPath](https://camo.githubusercontent.com/ea1aa7f0946e002c2c79c54a1bc9ad51c5e5b1dc2452a10d085cfc5b59c39867/68747470733a2f2f7369676e706174682e6f72672f6173736574732f66617669636f6e2d35307835302e706e67)](https://signpath.io/) | Free code signing on Windows provided by [SignPath.io](https://signpath.io/), certificate by [SignPath Foundation](https://signpath.org/) |

## About

OpenAgents - AI Agent Networks for Open Collaboration

[openagents.org](https://openagents.org/)

### Topics

[agents](https://github.com/topics/agents) [ai](https://github.com/topics/ai) [collaboration](https://github.com/topics/collaboration) [llm](https://github.com/topics/llm) [network](https://github.com/topics/network)

### Resources

[Readme](https://github.com/openagents-org/openagents#readme-ov-file)

[Apache-2.0 license](https://github.com/openagents-org/openagents#Apache-2.0-1-ov-file)

### Contributing

[Contributing](https://github.com/openagents-org/openagents#contributing-ov-file)

[Activity](https://github.com/openagents-org/openagents/activity)

[Custom properties](https://github.com/openagents-org/openagents/custom-properties)

### Stars

**4.0k** stars

### Watchers

**54** watching

### Forks

[**409** forks](https://github.com/openagents-org/openagents/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fopenagents-org%2Fopenagents&report=openagents-org+%28user%29)

## Releases

## Packages

## Used by

## Contributors

## Languages

You can’t perform that action at this time.