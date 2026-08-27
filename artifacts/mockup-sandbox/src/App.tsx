import { useEffect, useState, type ComponentType } from "react";
import { ArrowUpRight, Box, Compass, ExternalLink, Layers3, Radio, ScanSearch, ShieldCheck } from "lucide-react";

import { modules as discoveredModules } from "./.generated/mockup-components";
import "./components/mockups/cyber-array/_group.css";

type ModuleMap = Record<string, () => Promise<Record<string, unknown>>>;

function _resolveComponent(
  mod: Record<string, unknown>,
  name: string,
): ComponentType | undefined {
  const fns = Object.values(mod).filter(
    (v) => typeof v === "function",
  ) as ComponentType[];
  return (
    (mod.default as ComponentType) ||
    (mod.Preview as ComponentType) ||
    (mod[name] as ComponentType) ||
    fns[fns.length - 1]
  );
}

function PreviewRenderer({
  componentPath,
  modules,
}: {
  componentPath: string;
  modules: ModuleMap;
}) {
  const [Component, setComponent] = useState<ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    setComponent(null);
    setError(null);

    async function loadComponent(): Promise<void> {
      const key = `./components/mockups/${componentPath}.tsx`;
      const loader = modules[key];
      if (!loader) {
        setError(`No component found at ${componentPath}.tsx`);
        return;
      }

      try {
        const mod = await loader();
        if (cancelled) {
          return;
        }
        const name = componentPath.split("/").pop()!;
        const comp = _resolveComponent(mod, name);
        if (!comp) {
          setError(
            `No exported React component found in ${componentPath}.tsx\n\nMake sure the file has at least one exported function component.`,
          );
          return;
        }
        setComponent(() => comp);
      } catch (e) {
        if (cancelled) {
          return;
        }

        const message = e instanceof Error ? e.message : String(e);
        setError(`Failed to load preview.\n${message}`);
      }
    }

    void loadComponent();

    return () => {
      cancelled = true;
    };
  }, [componentPath, modules]);

  if (error) {
    return (
      <pre style={{ color: "red", padding: "2rem", fontFamily: "system-ui" }}>
        {error}
      </pre>
    );
  }

  if (!Component) return null;

  return <Component />;
}

function getBasePath(): string {
  return import.meta.env.BASE_URL.replace(/\/$/, "");
}

function getPreviewExamplePath(): string {
  const basePath = getBasePath();
  return `${basePath}/preview/ComponentName`;
}

function Gallery() {
  const routes = [
    { name: "Home", path: "Home", kicker: "command deck", description: "A calm entry point for requests, plans, approvals, and the shared pulse.", icon: Compass, tone: "lilac", signal: "Orbit ready" },
    { name: "Workforces", path: "Workforces", kicker: "role routing", description: "See ownership, dependencies, tool boundaries, load, and recovery posture.", icon: Layers3, tone: "sky", signal: "18 roles mapped" },
    { name: "Skill library", path: "SkillLibrary", kicker: "trusted capability shelf", description: "Install versioned skills by project, with provenance and a security review.", icon: Box, tone: "mint", signal: "48 reviewed skills" },
    { name: "Projects", path: "Projects", kicker: "isolation ledger", description: "Keep agents, credentials, runs, artifacts, approvals, and memory scoped.", icon: ShieldCheck, tone: "yellow", signal: "3 spaces healthy" },
    { name: "Memory wire", path: "MemoryWire", kicker: "shared second brain", description: "Search the common Obsidian vault while proposed writes stay reviewable.", icon: ScanSearch, tone: "pink", signal: "1 vault · 1,842 notes" },
    { name: "Chief agent", path: "ChiefAgent", kicker: "supervisory desk", description: "Trace request to plan, named workers, gates, artifacts, replay, and audit.", icon: Radio, tone: "lilac", signal: "4 of 7 tasks complete" },
  ] as const;
  const toneValues: Record<string, string> = { sky: "var(--cyber-sky)", mint: "var(--cyber-mint)", pink: "var(--cyber-pink)", yellow: "var(--cyber-yellow)", lilac: "var(--cyber-lilac)" };
  const basePath = getBasePath();
  return (
    <div className="cyber-shell cyber-noise min-h-screen">
      <div className="mx-auto max-w-[1300px] px-5 py-7 md:px-10 md:py-12">
        <header className="flex flex-col gap-8 border-b border-[var(--cyber-line)] pb-10 md:flex-row md:items-end md:justify-between">
          <div><div className="mono text-[9px] uppercase tracking-[.22em] text-[var(--cyber-muted)]">isolated preview gallery · research pattern study</div><div className="mt-4 flex items-center gap-3"><div className="grid h-11 w-11 place-items-center rounded-[15px] bg-[var(--cyber-ink)] text-[var(--cyber-mint)]"><Compass size={21} /></div><h1 className="text-4xl font-extrabold tracking-[-.08em] md:text-6xl">CYBER ARRAY</h1></div><p className="mt-5 max-w-2xl text-sm leading-6 text-[var(--cyber-muted)]">A shared control surface for an agent constellation. These six isolated previews make the research patterns tangible: delegated work with edges, and an Obsidian second brain that belongs to every agent.</p></div>
          <div className="rounded-2xl border border-[var(--cyber-line)] bg-[var(--cyber-panel)] p-4 md:w-64"><div className="flex items-center gap-2 text-[11px] font-bold"><span className="h-2 w-2 rounded-full bg-[#57bd8b]" /> Preview environment calm</div><div className="mt-3 mono text-[9px] leading-5 text-[var(--cyber-muted)]">NO BACKEND CONNECTED<br />INTERACTIONS ARE LOCAL TO EACH FRAME</div></div>
        </header>
        <div className="mt-9 flex items-end justify-between gap-4"><div><div className="mono text-[9px] uppercase tracking-[.18em] text-[var(--cyber-muted)]">the constellation</div><h2 className="mt-2 text-2xl font-extrabold tracking-[-.06em]">Choose a surface to inspect.</h2></div><a href={getPreviewExamplePath()} className="hidden items-center gap-2 text-[11px] font-bold text-[#7659bd] sm:flex">Generic component route <ExternalLink size={13} /></a></div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{routes.map(({ name, path, kicker, description, icon: Icon, tone, signal }) => <a key={path} href={`${basePath}/preview/cyber-array/${path}`} className="group rounded-2xl border border-[var(--cyber-line)] bg-[var(--cyber-panel)] p-5 shadow-[0_5px_0_rgba(32,38,59,.05)] transition-transform hover:-translate-y-1"><div className="flex items-start justify-between"><div className="grid h-11 w-11 place-items-center rounded-[15px]" style={{ background: toneValues[tone] }}><Icon size={19} /></div><ArrowUpRight size={17} className="text-[var(--cyber-muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></div><div className="mt-5 mono text-[9px] uppercase tracking-[.17em] text-[var(--cyber-muted)]">{kicker}</div><h3 className="mt-2 text-xl font-extrabold tracking-[-.05em]">{name}</h3><p className="mt-2 min-h-12 text-sm leading-5 text-[var(--cyber-muted)]">{description}</p><div className="mt-5 flex items-center justify-between border-t border-[var(--cyber-line)] pt-4"><span className="mono text-[9px] text-[#4c9c76]">{signal}</span><span className="text-[10px] font-bold">Open preview</span></div></a>)}</div>
        <footer className="mt-10 flex flex-col gap-3 border-t border-[var(--cyber-line)] pt-5 text-[10px] text-[var(--cyber-muted)] sm:flex-row sm:items-center sm:justify-between"><span>Each card opens a standalone frame. Nothing here mutates a real project or vault.</span><a href={getPreviewExamplePath()} className="flex items-center gap-1 font-bold text-[var(--cyber-ink)] sm:hidden">Generic component route <ExternalLink size={12} /></a><code className="mono rounded-lg bg-[var(--cyber-panel)] px-2 py-1">{basePath || "/"} · six pages</code></footer>
      </div>
    </div>
  );
}

function getPreviewPath(): string | null {
  const basePath = getBasePath();
  const { pathname } = window.location;
  const local =
    basePath && pathname.startsWith(basePath)
      ? pathname.slice(basePath.length) || "/"
      : pathname;
  const match = local.match(/^\/preview\/(.+)$/);
  return match ? match[1] : null;
}

function App() {
  const previewPath = getPreviewPath();

  if (previewPath) {
    return (
      <PreviewRenderer
        componentPath={previewPath}
        modules={discoveredModules}
      />
    );
  }

  return <Gallery />;
}

export default App;
