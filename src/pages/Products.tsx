import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Line, PageShell, PathToPurchase, SectionLabel } from "@/components/WireframeBits";
import { ATTRIBUTES, CANNABINOIDS, TIERS } from "@/lib/brandData";

const Products = () => {
  const [activeMg, setActiveMg] = useState(10);
  const activeTier = useMemo(() => TIERS.find((tier) => tier.mg === activeMg) ?? TIERS[1], [activeMg]);

  return (
    <PageShell>
      <Navbar />
      <section className="wf-section-roomy">
        <SectionLabel tag="01 · Hero" name="Products" intent="Intent · short typographic hero. Lets the tier-switcher below do the work." />
        <h1 className="max-w-xl text-[48px] font-black uppercase leading-tight tracking-wider md:text-[72px]">Shop by potency.</h1>
        <Line width="70" className="mt-5" /><Line width="50" />
      </section>

      <section className="wf-section">
        <SectionLabel tag="02 · Tier Switcher" name="Find Your Potency" intent="Intent · one viewport, one active tier. Click a tier → panel below swaps color + flavors. Solves the 24-SKU problem without four stacked full-bleed sections." />
        <div className="wf-tier-switcher">
          {TIERS.map((tier) => <button key={tier.mg} onClick={() => setActiveMg(tier.mg)} className={`wf-tier-switch ${activeTier.mg === tier.mg ? tier.bgClass : "bg-transparent"}`}><div className="wf-tier-switch-mg">{tier.label}</div><div className="wf-tier-switch-name">{tier.shortName}</div></button>)}
        </div>
        <div className={`${activeTier.bgClass} rounded px-5 py-10 text-background md:px-8`}>
          <div className="mb-6 flex items-start justify-between gap-6"><div className="flex-1 pt-1.5"><div className="mb-1.5 text-[8px] font-black uppercase tracking-[0.22em] text-background/70">{activeTier.index} · Active</div><h2 className="text-3xl font-black uppercase tracking-wider">{activeTier.tagline}</h2><Line width="80" className="mt-3 bg-background/45" /><Line width="60" className="bg-background/45" /></div><div className="text-[44px] font-black uppercase leading-none tracking-normal">{activeTier.label}</div></div>
          <div className="wf-flavor-grid">
            {activeTier.products.map((product) => <Link key={product.id} to={`/products/${product.id}`} className="wf-flavor-card"><div className="wf-flavor-can"><img src={product.image} alt={`${product.flavor} can`} className="h-[76px] w-auto object-contain" /></div><div><div className="wf-flavor-name">{product.flavor}</div><div className="wf-flavor-sub">{product.notes}</div></div></Link>)}
          </div>
        </div>
      </section>

      <section className="wf-section">
        <SectionLabel tag="03 · Minor Cannabinoids" name="Find Your Effect" intent="Intent · educational strip for the cannabinoid variants. Each variant carries a canonical color. Quiet explainer — not a shopping nav." />
        <Line width="70" />
        <div className="wf-cannabinoid-grid">
          {CANNABINOIDS.map((item, i) => <div key={item.name} className={`wf-cannabinoid-card ${i === 0 ? "bg-tier-60" : i === 1 ? "bg-foreground" : "bg-tier-5"}`}><div><div className="text-[8px] font-black uppercase tracking-[0.22em] text-background/75">{item.mood}</div><div className="my-2 text-[28px] font-black uppercase leading-none tracking-normal">{item.name}</div><Line width="90" className="bg-background/40" /><Line width="80" className="bg-background/40" /></div><div className="text-[7px] font-bold uppercase tracking-[0.16em] text-background/65">{item.detail}</div></div>)}
        </div>
      </section>

      <section className="wf-ticker"><div className="wf-section-tag text-background/40">04 · Ticker</div><div className="wf-ticker-track">{ATTRIBUTES.map((item) => <span key={item} className="contents"><span>{item}</span><span className="wf-dot" /></span>)}</div></section>

      <section className="wf-section"><SectionLabel tag="05 · Transparency" name="What's Inside" intent="Intent · small anchor to Home's What's Inside section. Compliance + transparency as a hyperlinked promise, not a duplicate block." /><Line kind="head" width="70" /><Line width="80" className="mt-2" /><Line width="70" /><div className="mt-4 flex flex-wrap gap-2"><Link to="/#inside" className="wf-btn wf-btn-ghost">See Full Ingredient Breakdown →</Link><span className="wf-btn wf-btn-ghost">Download COAs →</span></div></section>
      <PathToPurchase tag="06 · Path to Purchase" />
    </PageShell>
  );
};
export default Products;
