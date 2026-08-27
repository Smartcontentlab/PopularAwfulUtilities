import { type ReactNode, useState } from "react";
import { Activity, Brain, Check, ChevronRight, Command, FolderKanban, Menu, Network, PackageOpen, ShieldCheck, Sparkles, X } from "lucide-react";
import "../_group.css";

const nav = [
  ["Home", Sparkles, "Home"], ["Workforces", Network, "Workforces"], ["Skill library", PackageOpen, "SkillLibrary"],
  ["Projects", FolderKanban, "Projects"], ["Memory wire", Brain, "MemoryWire"], ["Chief agent", ShieldCheck, "ChiefAgent"],
] as const;
type Tone = "sky" | "mint" | "pink" | "yellow" | "lilac";

const toneValues: Record<Tone, string> = {
  sky: "var(--cyber-sky)",
  mint: "var(--cyber-mint)",
  pink: "var(--cyber-pink)",
  yellow: "var(--cyber-yellow)",
  lilac: "var(--cyber-lilac)",
};

function previewUrl(component: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/preview/cyber-array/${component}`;
}

export function Shell({ active, eyebrow, title, children }: { active: string; eyebrow: string; title: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState(false);

  const navigate = (component: string) => {
    setOpen(false);
    window.location.assign(previewUrl(component));
  };

  return <div className="cyber-shell cyber-noise">
    <aside className={`${open ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-30 w-64 border-r border-[var(--cyber-line)] bg-[var(--cyber-panel)] p-5 transition-transform md:translate-x-0`}>
      <div className="flex items-center justify-between border-b border-[var(--cyber-line)] pb-5">
        <button onClick={() => navigate("Home")} className="flex items-center gap-3 text-left">
          <div className="grid h-9 w-9 place-items-center rounded-[13px] bg-[var(--cyber-ink)] text-[var(--cyber-mint)]"><Command size={18} /></div>
          <div><div className="font-extrabold tracking-[-.06em]">CYBER ARRAY</div><div className="mono text-[9px] uppercase tracking-[.16em] text-[var(--cyber-muted)]">personal ops habitat</div></div>
        </button>
        <button aria-label="Close navigation" className="md:hidden" onClick={() => setOpen(false)}><X size={16} /></button>
      </div>
      <div className="mono mt-7 text-[9px] uppercase tracking-[.18em] text-[var(--cyber-muted)]">your constellation</div>
      <nav className="mt-3 space-y-1">{nav.map(([label, Icon, component]) => <button key={label} onClick={() => navigate(component)} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-[12px] font-semibold ${active === label ? "bg-[var(--cyber-lilac)] text-[var(--cyber-ink)]" : "text-[var(--cyber-muted)] hover:bg-[var(--cyber-paper)]"}`}><Icon size={16} />{label}<span className="ml-auto text-[10px] opacity-50">›</span></button>)}</nav>
      <div className="absolute bottom-5 left-5 right-5 border-t border-[var(--cyber-line)] pt-4">
        <div className="flex items-center gap-2 text-[11px] font-semibold"><span className="h-2 w-2 rounded-full bg-[#57bd8b]" /> All systems calm</div>
        <div className="mt-3 flex items-center gap-2 text-[11px] text-[var(--cyber-muted)]"><div className="grid h-7 w-7 place-items-center rounded-lg bg-[var(--cyber-yellow)] text-[10px] font-bold">AM</div>Ari Mendez · owner</div>
      </div>
    </aside>
    {open && <button aria-label="Close menu overlay" className="fixed inset-0 z-20 bg-[#20263b]/20 md:hidden" onClick={() => setOpen(false)} />} 
    <main className="md:pl-64">
      <header className="flex min-h-[74px] items-center justify-between border-b border-[var(--cyber-line)] bg-[var(--cyber-panel)] px-5 md:px-9">
        <div className="flex items-center gap-3"><button aria-label="Open navigation" className="md:hidden" onClick={() => setOpen(true)}><Menu size={19} /></button><div><div className="mono text-[9px] uppercase tracking-[.2em] text-[var(--cyber-muted)]">{eyebrow}</div><h1 className="mt-1 text-[19px] font-extrabold tracking-[-.04em]">{title}</h1></div></div>
        <div className="hidden items-center gap-4 sm:flex"><button onClick={() => setPulse(!pulse)} className={`flex items-center gap-2 rounded-full px-3 py-2 text-[10px] font-bold ${pulse ? "bg-[var(--cyber-yellow)]" : "bg-[var(--cyber-mint)]"}`}><Activity size={13} /> {pulse ? "pulse acknowledged" : "7 fleets online"}</button><div className="mono text-[9px] text-[var(--cyber-muted)]">SYNC 14:32:08</div></div>
      </header>
      <div className="mx-auto max-w-[1500px] p-5 md:p-9">{children}</div>
    </main>
  </div>;
}
export function Panel({children,className=""}:{children:ReactNode;className?:string}){return <section className={`rounded-2xl border border-[var(--cyber-line)] bg-[var(--cyber-panel)] shadow-[0_5px_0_rgba(32,38,59,.05)] ${className}`}>{children}</section>}
export function Label({children}:{children:ReactNode}){return <div className="mono text-[9px] font-medium uppercase tracking-[.17em] text-[var(--cyber-muted)]">{children}</div>}
export function Chip({children,tone="sky"}:{children:ReactNode;tone?:Tone}){return <span className="mono inline-flex rounded-full px-2 py-1 text-[9px] font-medium" style={{background:toneValues[tone]}}>{children}</span>}
export function Bar({value,color="var(--cyber-ink)"}:{value:number;color?:string}){return <div className="h-2 overflow-hidden rounded-full bg-[#ebe8e2]"><div className="h-full rounded-full transition-all duration-500" style={{width:`${Math.min(100, Math.max(0, value))}%`,background:color}} /></div>}
export function Toggle({on, onToggle, label}:{on:boolean;onToggle:()=>void;label?:string}){return <button aria-pressed={on} aria-label={label} onClick={onToggle} className={`inline-flex h-6 w-11 items-center rounded-full p-1 ${on?"bg-[var(--cyber-ink)]":"bg-[#d7d3ce]"}`}><span className={`h-4 w-4 rounded-full bg-[var(--cyber-panel)] transition-transform ${on?"translate-x-5":"translate-x-0"}`} /></button>}
export function Metric({value,label,tone="lilac"}:{value:string;label:string;tone?:Tone}){return <div className="rounded-xl p-4" style={{background:toneValues[tone]}}><div className="text-2xl font-extrabold tracking-[-.07em]">{value}</div><div className="mt-1 text-[10px]">{label}</div></div>}
export function EventRow({icon:Icon,title,meta,tone="sky",active=false}:{icon:typeof Activity;title:string;meta:string;tone?:Tone;active?:boolean}){return <div className={`flex items-start gap-3 rounded-xl p-3 ${active?"bg-[var(--cyber-paper)]":""}`}><div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg" style={{background:toneValues[tone]}}><Icon size={14} /></div><div className="min-w-0 flex-1"><div className="text-[11px] font-bold">{title}</div><div className="mt-1 text-[10px] leading-4 text-[var(--cyber-muted)]">{meta}</div></div><ChevronRight size={14} className="mt-1 shrink-0 text-[var(--cyber-muted)]" /></div>}
export function Confirmed({children}:{children:ReactNode}){return <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#4c9c76]"><Check size={12} />{children}</span>}