import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ATTRIBUTES, CANNABINOIDS, TIERS } from "@/lib/brandData";

const Products = () => {
  const [activeMg, setActiveMg] = useState(10);
  const activeTier = useMemo(() => TIERS.find((tier) => tier.mg === activeMg) ?? TIERS[1], [activeMg]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="px-4 py-16 text-center md:py-20">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-primary">01 · Hero</p>
        <h1 className="gradient-text text-5xl font-black uppercase tracking-wider md:text-7xl">Products</h1>
      </section>

      <section className="px-4 pb-20">
        <div className="container mx-auto">
          <div className="mb-8 text-center"><p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-primary">02 · Tier Switcher</p><h2 className="text-3xl font-black uppercase tracking-wider md:text-5xl">Find Your Potency</h2></div>
          <div className="mb-8 grid gap-3 md:grid-cols-4">
            {TIERS.map((tier) => <button key={tier.mg} onClick={() => setActiveMg(tier.mg)} className={`border p-5 text-left transition ${activeTier.mg === tier.mg ? `${tier.bgClass} border-transparent text-primary-foreground` : "border-border bg-card hover:border-primary"}`}><span className="block text-3xl font-black uppercase tracking-wider">{tier.label}</span><span className="mt-2 block text-xs font-bold uppercase tracking-widest opacity-75">{tier.shortName}</span></button>)}
          </div>
          <div className={`${activeTier.bgClass} p-5 md:p-8`}>
            <div className="mb-6 flex flex-col justify-between gap-4 text-primary-foreground md:flex-row md:items-end"><div><p className="text-xs font-black uppercase tracking-[0.28em]">{activeTier.index} · Active</p><h3 className="mt-2 text-4xl font-black uppercase tracking-wider">{activeTier.tagline}</h3></div><p className="max-w-lg text-sm leading-relaxed text-primary-foreground/80">{activeTier.description}</p></div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">{activeTier.products.map((product) => <ProductCard key={product.id} product={product} tier={activeTier} />)}</div>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 px-4 py-20">
        <div className="container mx-auto"><div className="mb-10 text-center"><p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-primary">03 · Minor Cannabinoids</p><h2 className="text-3xl font-black uppercase tracking-wider md:text-5xl">Find Your Effect</h2></div><div className="grid gap-5 md:grid-cols-3">{CANNABINOIDS.map((item) => <div key={item.name} className="border border-border bg-card p-8 text-center"><p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-primary">{item.mood}</p><h3 className="text-5xl font-black uppercase tracking-wider">{item.name}</h3><p className="mt-5 text-sm text-muted-foreground">{item.detail}</p></div>)}</div></div>
      </section>

      <section className="overflow-hidden bg-primary py-6 text-primary-foreground"><div className="flex min-w-max gap-8 px-4 text-xs font-black uppercase tracking-[0.25em]">{[...ATTRIBUTES, ...ATTRIBUTES].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}</div></section>

      <section className="px-4 py-20 text-center"><p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-primary">05 · Transparency</p><h2 className="text-3xl font-black uppercase tracking-wider md:text-5xl">What’s Inside</h2><div className="mt-8 flex justify-center gap-3"><Link to="/#inside"><Button variant="outline" className="rounded-none">See Full Ingredient Breakdown →</Button></Link><Button className="rounded-none bg-primary text-primary-foreground">Download COAs →</Button></div></section>

      <section className="bg-primary px-4 py-16 text-center text-primary-foreground"><h2 className="text-3xl font-black uppercase tracking-wider md:text-5xl">Ready for a conversation?</h2><div className="mt-8 flex justify-center gap-3"><Button className="rounded-none bg-primary-foreground text-primary hover:bg-primary-foreground/90">Shop Now →</Button><Link to="/near-you"><Button variant="outline" className="rounded-none border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">Find Near You →</Button></Link></div></section>
      <Footer />
    </div>
  );
};
export default Products;
