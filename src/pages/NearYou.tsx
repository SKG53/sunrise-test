import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Line, PageShell, SectionLabel } from "@/components/WireframeBits";

const filters = ["All", "Dispensary", "Liquor", "Convenience", "Bar / Restaurant"];

const NearYou = () => {
  const [filter, setFilter] = useState("All");
  return (
    <PageShell>
      <Navbar />
      <section className="wf-section-roomy"><SectionLabel tag="01 · Hero" name="Find SUNRISE Near You" /><h1 className="max-w-3xl text-[44px] font-black uppercase leading-tight tracking-wider md:text-[68px]">Find SUNRISE Near You</h1></section>
      <section className="wf-section"><SectionLabel tag="02 · Locator Input" name="Search" /><div className="flex flex-col gap-2 md:flex-row"><input className="h-[42px] flex-1 rounded border-2 border-foreground bg-background px-3.5 text-[10px] uppercase tracking-wider text-muted-foreground outline-none" placeholder="ENTER ZIP OR CITY" /><button className="h-[42px] rounded border-2 border-foreground px-3.5 text-left text-[10px] uppercase tracking-wider text-muted-foreground md:w-36">STATE ▾</button><button className="wf-btn h-[42px] justify-center rounded md:w-28">Search</button></div><div className="mt-3 flex flex-wrap gap-2">{filters.map((item)=><button key={item} onClick={()=>setFilter(item)} className={`rounded-full border px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.16em] ${filter===item?'border-foreground bg-foreground text-background':'border-border bg-card/60 text-muted-foreground'}`}>{item}</button>)}</div></section>
      <section className="wf-section"><SectionLabel tag="03 · Results" name="Nearby Retailers" /><div className="wf-map-zone">Map zone · pinned retailers</div><div className="mt-4 rounded border border-border bg-card/60">{[60,50,60,50].map((w,i)=><div key={i} className="border-b border-border p-3.5 last:border-b-0"><Line kind="sub" width={String(w)} /><Line width={i%2?'70':'80'} /><Line kind="caption" width="30" className="bg-muted-foreground/60" /></div>)}</div></section>
      <section className="wf-section"><SectionLabel tag="04 · Fallback" name="Don't See SUNRISE Near You?" /><Line width="80" /><Line width="60" /><div className="mt-3.5 flex flex-wrap gap-2"><span className="wf-btn wf-btn-ghost">Request a Retailer →</span><span className="wf-btn wf-btn-ghost">Shop Online →</span></div></section>
      <section className="wf-section bg-foreground text-background"><SectionLabel tag="05 · Retailer Gateway" name="Are You a Retailer?" /><Line kind="head" width="70" className="bg-background/95" /><Line width="80" className="mt-3 bg-background/45" /><Line width="60" className="bg-background/45" /><div className="mt-4"><span className="wf-btn wf-btn-on-color">Wholesale Inquiries →</span></div></section>
    </PageShell>
  );
};
export default NearYou;
