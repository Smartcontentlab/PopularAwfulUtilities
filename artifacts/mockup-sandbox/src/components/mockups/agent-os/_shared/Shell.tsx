import { ReactNode, useState } from "react";
import { Activity, Archive, ArrowUpRight, Bell, BrainCircuit, ChevronRight, Command, Cpu, Database, Gauge, Grid2X2, Layers3, Menu, Pause, Play, Radio, Search, Settings2, ShieldCheck, Sparkles, Terminal, X } from "lucide-react";

export type NavKey = "Overview" | "Fleets" | "Runs" | "Memory";

const nav: { label: NavKey; icon: typeof Gauge; meta: string }[] = [
  { label: "Overview", icon: Gauge, meta: "01" },
  { label: "Fleets", icon: Layers3, meta: "07" },
  { label: "Runs", icon: Terminal, meta: "03" },
  { label: "Memory", icon: Database, meta: "12k" },
];

export function Shell({ active, children, title, eyebrow }: { active: NavKey; children: ReactNode; title: string; eyebrow: string }) {
  const [railOpen, setRailOpen] = useState(false);
  const [quiet, setQuiet] = useState(false);
  return (
    <div className="agent-shell min-h-screen bg-[#e9edf0] text-[#11161b]">
      <aside className={`${railOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-30 w-[238px] border-r-2 border-[#11161b] bg-[#f7f8f5] p-5 transition-transform md:translate-x-0`}>
        <div className="flex items-center justify-between border-b border-[#bbc3c9] pb-5">
          <div className="flex items-center gap-2"><span className="grid h-8 w-8 place-items-center bg-[#11161b] text-[#d5eaff]"><Command size={17}/></span><div><div className="text-[15px] font-black tracking-[-.05em]">COMMAND ARRAY</div><div className="mono text-[8px] uppercase tracking-[.22em] text-[#63717c]">private ops / 01</div></div></div>
          <button className="md:hidden" onClick={() => setRailOpen(false)}><X size={16}/></button>
        </div>
        <div className="mono mt-7 text-[9px] uppercase tracking-[.2em] text-[#73808a]">Mission desk</div>
        <nav className="mt-3 space-y-1">
          {nav.map(({ label, icon: Icon, meta }) => <a key={label} href={label === "Overview" ? "#" : `#${label.toLowerCase()}`} className={`group flex items-center justify-between border-l-2 px-3 py-3 text-[12px] font-bold ${active === label ? "border-[#1479c9] bg-[#dcecf8] text-[#125c94]" : "border-transparent text-[#65717a] hover:bg-[#edf1f3]"}`}><span className="flex items-center gap-3"><Icon size={16}/>{label}</span><span className="mono text-[9px] opacity-60">{meta}</span></a>)}
        </nav>
        <div className="mt-10 border-t border-[#bbc3c9] pt-5">
          <div className="mono mb-3 text-[9px] uppercase tracking-[.2em] text-[#73808a]">Network</div>
          <div className="flex items-center gap-2 text-[11px] font-bold"><span className="h-2 w-2 rounded-full bg-[#1ca672]"/><span>All systems nominal</span></div>
          <div className="mt-2 flex items-center gap-2 text-[11px] text-[#73808a]"><Radio size={13}/> Berlin / UTC+01</div>
        </div>
        <div className="absolute bottom-5 left-5 right-5 border-t border-[#bbc3c9] pt-4">
          <button className="flex w-full items-center gap-3 py-2 text-left text-[11px] font-bold text-[#65717a]"><Settings2 size={15}/> Desk settings</button>
          <div className="mt-4 flex items-center gap-2"><div className="grid h-7 w-7 place-items-center bg-[#f0c94d] text-[10px] font-black">AM</div><div><div className="text-[11px] font-bold">Ari Mendez</div><div className="mono text-[8px] text-[#73808a]">operator / owner</div></div></div>
        </div>
      </aside>
      {railOpen && <button aria-label="close navigation" className="fixed inset-0 z-20 bg-[#11161b]/30 md:hidden" onClick={() => setRailOpen(false)}/>}
      <main className="md:pl-[238px]">
        <header className="flex h-[68px] items-center justify-between border-b-2 border-[#11161b] bg-[#f7f8f5] px-5 md:px-8">
          <div className="flex items-center gap-3"><button className="md:hidden" onClick={() => setRailOpen(true)}><Menu size={19}/></button><div><div className="mono text-[9px] uppercase tracking-[.2em] text-[#73808a]">{eyebrow}</div><h1 className="mt-1 text-[18px] font-black tracking-[-.04em]">{title}</h1></div></div>
          <div className="flex items-center gap-2"><button onClick={() => setQuiet(!quiet)} className={`relative grid h-9 w-9 place-items-center border border-[#bbc3c9] ${quiet ? "bg-[#dcecf8] text-[#1479c9]" : "bg-[#f7f8f5]"}`}><Bell size={15}/><span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-[#ed6a5a]"/></button><div className="hidden border-l border-[#bbc3c9] pl-3 sm:block"><span className="mono text-[9px] text-[#73808a]">LAST SYNC</span><span className="ml-2 text-[11px] font-bold">14:32:08</span></div></div>
        </header>
        <div className="mx-auto max-w-[1500px] p-5 md:p-8">{children}</div>
      </main>
    </div>
  );
}

export function SectionLabel({ children, right }: { children: ReactNode; right?: ReactNode }) { return <div className="mb-3 flex items-center justify-between"><div className="mono text-[9px] font-bold uppercase tracking-[.2em] text-[#73808a]">{children}</div>{right}</div>; }
export function Panel({ children, className = "" }: { children: ReactNode; className?: string }) { return <section className={`border border-[#aeb8bf] bg-[#f7f8f5] shadow-[3px_3px_0_#c7d0d5] ${className}`}>{children}</section>; }
export function Meter({ value, color = "#1479c9" }: { value: number; color?: string }) { return <div className="h-1.5 overflow-hidden bg-[#dce2e5]"><div className="h-full transition-all duration-500" style={{ width: `${value}%`, background: color }}/></div>; }
export function Chip({ children, tone = "blue" }: { children: ReactNode; tone?: "blue" | "green" | "amber" | "red" }) { const c = {blue:"bg-[#dcecf8] text-[#125c94]",green:"bg-[#dff3e9] text-[#16724e]",amber:"bg-[#fff0c7] text-[#80600b]",red:"bg-[#fbe0dc] text-[#a4453a]"}[tone]; return <span className={`mono inline-flex px-2 py-1 text-[9px] font-bold uppercase tracking-[.08em] ${c}`}>{children}</span>; }
export function Sparkline({ points = "0,17 10,15 20,18 30,8 40,12 50,4 60,9 70,2" }: { points?: string }) { return <svg viewBox="0 0 70 20" className="h-6 w-20" preserveAspectRatio="none"><polyline points={points} fill="none" stroke="#1479c9" strokeWidth="1.5"/></svg>; }
export function Stat({ label, value, note, trend }: { label: string; value: string; note: string; trend?: string }) { return <Panel className="p-4"><div className="flex items-start justify-between"><span className="mono text-[9px] uppercase tracking-[.16em] text-[#73808a]">{label}</span>{trend && <Sparkline/>}</div><div className="mt-4 text-[25px] font-black tracking-[-.06em]">{value}</div><div className="mt-1 text-[10px] text-[#73808a]">{note}</div></Panel>; }