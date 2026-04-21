import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { PageShell, PathToPurchase, SectionLabel } from "@/components/WireframeBits";
import { ATTRIBUTES, CANNABINOIDS, TIERS } from "@/lib/brandData";

const Products = () => {
  const [activeMg, setActiveMg] = useState(10);
  const activeTier = useMemo(() => TIERS.find((tier) => tier.mg === activeMg) ?? TIERS[1], [activeMg]);

  return (
    <PageShell>
      <Navbar />
      <section className="site-section">
        <SectionLabel name="Products" />
        <h1 className="site-heading max-w-3xl">Shop by potency.</h1>
        <p className="site-subhead mt-6">Twenty-four fruit-forward hemp-infused seltzers, organized tier first and flavor second.</p>
      </section>

      <section className="site-section-tight">
        <SectionLabel name="Find Your Potency" />
        <div className="tier-switcher">
          {TIERS.map((tier) => <button key={tier.mg} onClick={() => setActiveMg(tier.mg)} className={`tier-switch ${activeTier.mg === tier.mg ? `${tier.bgClass} text-background` : "bg-transparent"}`}><div className="tier-switch-mg">{tier.label}</div><div className="tier-switch-name">{tier.shortName}</div></button>)}
        </div>
        <div className={`${activeTier.bgClass} rounded-md px-5 py-10 text-background md:px-8`}>
          <div className="mb-8 grid gap-6 md:grid-cols-[1fr_auto] md:items-start"><div><p className="text-[10px] font-black uppercase tracking-[0.22em] text-background/70">{activeTier.index}</p><h2 className="mt-2 text-4xl font-black uppercase tracking-[0.09em]">{activeTier.tagline}</h2><p className="mt-4 max-w-2xl text-sm leading-relaxed text-background/80">{activeTier.occasion}</p></div><div className="text-[54px] font-black uppercase leading-none tracking-normal">{activeTier.label}</div></div>
          <div className="flavor-grid">
            {activeTier.products.map((product) => <Link key={product.id} to={`/products/${product.id}`} className="flavor-card"><div className="flavor-can"><img src={product.image} alt={`SUNRISE ${product.flavor} ${product.potency} hemp-infused seltzer can`} className="h-28 w-auto object-contain" /></div><div><div className="flavor-name">{product.name}</div><div className="flavor-sub">{product.descriptor}</div></div></Link>)}
          </div>
        </div>
      </section>

      <section className="site-section">
        <SectionLabel name="Find Your Effect" />
        <h2 className="site-heading max-w-2xl">Select flavors add another layer.</h2>
        <div className="cannabinoid-grid">
          {CANNABINOIDS.map((item, i) => <div key={item.name} className={`cannabinoid-card ${i === 0 ? "bg-tier-5" : i === 1 ? "bg-tier-60" : "bg-tier-10"}`}><div><p className="text-[10px] font-black uppercase tracking-[0.2em] text-background/75">{item.mood}</p><div className="my-4 text-[44px] font-black uppercase leading-none tracking-normal">{item.name}</div></div><p className="text-sm leading-relaxed text-background/80">{item.detail}</p></div>)}
        </div>
      </section>

      <section className="ticker"><div className="ticker-track">{ATTRIBUTES.map((item) => <span key={item} className="contents"><span>{item}</span><span className="dot" /></span>)}</div></section>
      <section className="site-section-tight"><SectionLabel name="Transparency" /><h2 className="site-heading max-w-2xl">What’s inside matters.</h2><p className="site-subhead mt-5">Simple ingredients, full-panel testing, and a clean experience with every sip.</p><div className="mt-6 flex flex-wrap gap-3"><Link to="/#inside" className="wf-btn wf-btn-ghost">Ingredient Breakdown</Link><Link to="/products" className="wf-btn wf-btn-ghost">Product COAs</Link></div></section>
      <PathToPurchase />
    </PageShell>
  );
};
export default Products;
