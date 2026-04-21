import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const retailers = ["Route Market", "Heartland Bottle Co.", "Sunset Spirits", "Corner Cooler"];
const filters = ["All", "Dispensary", "Liquor", "Convenience", "Bar / Restaurant"];

const NearYou = () => { const [filter,setFilter]=useState('All'); return <div className="min-h-screen bg-background"><Navbar />
  <section className="px-4 py-20 text-center md:py-28"><p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-primary">01 · Hero</p><h1 className="gradient-text text-5xl font-black uppercase tracking-wider md:text-7xl">Find SUNRISE Near You</h1></section>
  <section className="px-4 pb-12"><div className="container mx-auto border border-border bg-card p-5 md:p-8"><p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-primary">02 · Locator Input</p><div className="grid gap-3 md:grid-cols-[1fr_180px_140px]"><Input placeholder="ENTER ZIP OR CITY" className="rounded-none bg-background"/><Button variant="outline" className="rounded-none">STATE ▾</Button><Button className="rounded-none bg-primary text-primary-foreground">Search</Button></div><div className="mt-5 flex flex-wrap gap-2">{filters.map((item)=><button key={item} onClick={()=>setFilter(item)} className={`border px-4 py-2 text-xs font-black uppercase tracking-widest ${filter===item?'border-primary bg-primary text-primary-foreground':'border-border bg-background'}`}>{item}</button>)}</div></div></section>
  <section className="px-4 py-12"><div className="container mx-auto grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-primary">03 · Results</p><h2 className="mb-8 text-4xl font-black uppercase tracking-wider">Nearby Retailers</h2><div className="divide-y divide-border border-y border-border">{retailers.map((r)=><div key={r} className="py-5"><p className="font-black uppercase tracking-wider">{r}</p><p className="mt-1 text-sm text-muted-foreground">Retailer type · 2.4 miles</p></div>)}</div></div><div className="flex min-h-[460px] items-center justify-center bg-tier-30 text-primary-foreground"><p className="text-center text-3xl font-black uppercase tracking-wider">Map zone · pinned retailers</p></div></div></section>
  <section className="grid md:grid-cols-2"><div className="bg-muted/50 p-10 md:p-14"><h2 className="text-4xl font-black uppercase tracking-wider">Don’t See SUNRISE Near You?</h2><Button className="mt-8 rounded-none bg-primary text-primary-foreground">Request a Retailer →</Button></div><div className="bg-tier-60 p-10 text-primary-foreground md:p-14"><h2 className="text-4xl font-black uppercase tracking-wider">Are You a Retailer?</h2><Button variant="outline" className="mt-8 rounded-none border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">Wholesale Inquiries →</Button></div></section>
  <Footer /></div>};
export default NearYou;
