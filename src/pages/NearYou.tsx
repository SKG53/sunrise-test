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
      <section className="site-section"><SectionLabel name="Find SUNRISE Near You" /><h1 className="site-heading max-w-3xl">Find SUNRISE near you.</h1><p className="site-subhead mt-6">Search nearby retailers or choose a direct purchase path when you’re ready.</p></section>
      <section className="site-section-tight"><SectionLabel name="Search" /><div className="locator-bar"><input className="locator-input" placeholder="Enter ZIP or city" /><button className="locator-select">State ▾</button><button className="wf-btn h-11 rounded-md md:w-32">Search</button></div><div className="mt-3 flex flex-wrap gap-2">{filters.map((item)=><button key={item} onClick={()=>setFilter(item)} className={`filter-pill ${filter===item?'filter-pill-active':''}`}>{item}</button>)}</div></section>
      <section className="site-section-tight"><SectionLabel name="Nearby Retailers" /><div className="map-zone bg-tier-30">Map zone · pinned retailers</div><div className="retailer-list">{retailers.map((name,i)=><div key={name} className="retailer-row"><h3 className="text-sm font-black uppercase tracking-[0.12em]">{name}</h3><p className="mt-2 text-sm text-muted-foreground">{i + 1}.{i + 4} miles away · {filter === "All" ? "Retailer" : filter}</p></div>)}</div></section>
      <section className="site-section"><SectionLabel name="Don’t See SUNRISE Near You?" /><h2 className="site-heading max-w-3xl">Ask for SUNRISE or shop direct.</h2><p className="site-subhead mt-5">If SUNRISE is not on a nearby shelf yet, help us start the conversation.</p><div className="mt-6 flex flex-wrap gap-3"><a href="/contact" className="wf-btn wf-btn-ghost">Request a Retailer →</a><a href="/products" className="wf-btn wf-btn-ghost">Shop Online →</a></div></section>
      <section className="site-section bg-foreground text-background"><SectionLabel name="Are You a Retailer?" /><h2 className="site-heading max-w-3xl text-background">Bring SUNRISE to your shelves.</h2><p className="mt-5 max-w-xl text-base leading-relaxed text-background/75">For wholesale or retail inquiries, reach out and we’ll connect you with the right team.</p><a href="/contact" className="wf-btn wf-btn-on-color mt-6">Wholesale Inquiries →</a></section>
    </PageShell>
  );
};
export default NearYou;
