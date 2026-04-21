import { useState } from "react";
import Navbar from "@/components/Navbar";
import { PageShell, SectionLabel } from "@/components/WireframeBits";

const filters = ["All", "Dispensary", "Liquor", "Convenience", "Bar / Restaurant"];
const retailers = ["Route 66 Market", "Heartland Beverage Co.", "Sunset Bottle Shop", "The Corner Cooler"];

const NearYou = () => {
  const [filter, setFilter] = useState("All");
  return (
    <PageShell>
      <Navbar />
      <section className="site-section"><SectionLabel name="Where to Find Us" /><h1 className="site-heading max-w-3xl">Find SUNRISE near you.</h1><p className="site-subhead mt-6">Search nearby retailers or choose a direct purchase path when you’re ready.</p></section>
      <section className="site-section-tight"><div className="flex flex-col gap-3 md:flex-row"><input className="h-12 flex-1 rounded-md border-2 border-foreground bg-background px-4 text-sm uppercase tracking-wider text-foreground outline-none" placeholder="Enter ZIP or city" /><button className="h-12 rounded-md border-2 border-foreground px-4 text-left text-sm uppercase tracking-wider text-foreground md:w-36">State ▾</button><button className="wf-btn h-12 rounded-md md:w-32">Search</button></div><div className="mt-4 flex flex-wrap gap-2">{filters.map((item)=><button key={item} onClick={()=>setFilter(item)} className={`rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] ${filter===item?'border-foreground bg-foreground text-background':'border-border bg-card text-muted-foreground'}`}>{item}</button>)}</div></section>
      <section className="site-section-tight"><div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]"><div className="map-zone min-h-[360px] bg-tier-30"><div><h2 className="text-3xl font-black uppercase tracking-[0.09em]">SUNRISE Retailers</h2><p className="mt-3 text-sm text-background/75">Explore nearby shops, bottle stores, and hospitality partners carrying SUNRISE.</p></div></div><div className="rounded-md border border-border bg-card">{retailers.map((name,i)=><div key={name} className="border-b border-border p-5 last:border-b-0"><h3 className="text-sm font-black uppercase tracking-[0.12em]">{name}</h3><p className="mt-2 text-sm text-muted-foreground">{i + 1}.{i + 4} miles away · {filter === "All" ? "Retailer" : filter}</p></div>)}</div></div></section>
      <section className="site-section bg-foreground text-background"><SectionLabel name="Retailer Inquiries" /><h2 className="site-heading max-w-3xl text-background">Bring SUNRISE to your shelves.</h2><p className="mt-5 max-w-xl text-base leading-relaxed text-background/75">For wholesale, retail, or general inquiries, reach out and we’ll connect you with the right team.</p><a href="/contact" className="wf-btn wf-btn-on-color mt-6">Contact Us</a></section>
    </PageShell>
  );
};
export default NearYou;
