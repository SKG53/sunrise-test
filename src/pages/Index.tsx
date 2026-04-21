import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Wordmark from "@/components/Wordmark";
import PotencyLockup from "@/components/PotencyLockup";
import { PageShell, PathToPurchase, SectionLabel } from "@/components/WireframeBits";
import { ATTRIBUTES, FEATURED_PRODUCTS, INGREDIENTS, TIERS } from "@/lib/brandData";

const Index = () => {
  return (
    <PageShell>
      <Navbar />
      <section className="relative overflow-hidden">
        <div className="hero-strip">
          {TIERS.map((tier, index) => (
            <div key={tier.mg} className={`hero-tier ${tier.bgClass}`}>
              <img src={FEATURED_PRODUCTS[index].image} alt={`SUNRISE hemp-infused seltzer ${tier.label} lineup`} />
              <div className="absolute bottom-5 left-5 text-[10px] font-black uppercase tracking-[0.2em] text-background/85">{tier.label} · {tier.shortName}</div>
            </div>
          ))}
        </div>
        <div className="hero-overlay">
          <Wordmark base={76} color="cream" />
          <h1 className="hero-title">Seltzers infused with hemp</h1>
          <p className="mt-4 max-w-xl text-lg font-medium leading-relaxed text-background/90">Real flavor. Real effects. Crafted with intention.</p>
          <p className="mt-6 text-sm uppercase tracking-[0.16em] text-background/85">We’re here to <strong>refresh the way the world drinks.</strong></p>
        </div>
      </section>

      <section className="site-section">
        <SectionLabel name="Born in the Heart of America" />
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <h2 className="site-heading max-w-2xl">Bold and natural at the same time.</h2>
          <div className="site-subhead space-y-4">
            <p>Founded along America’s historic Route 66 and proudly family-owned, SUNRISE is a beverage company reimagining drinks for today’s consumers.</p>
            <p>Every product is created in-house and proudly made in the USA with an uncompromising focus on quality and simple ingredients.</p>
          </div>
        </div>
      </section>

      <section id="inside" className="site-section bg-card">
        <SectionLabel name="What’s Inside" />
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="image-stage min-h-[420px]"><img src={FEATURED_PRODUCTS[1].image} alt="SUNRISE Blood Orange 5mg THC hemp-infused seltzer can" className="h-[380px] w-auto object-contain" /></div>
          <div>
            <h2 className="site-heading mb-6">Simple ingredients. Real refreshment.</h2>
            <div className="ingredient-grid">
              {INGREDIENTS.map((item) => <div key={item.name} className="ingredient-row"><div className="ingredient-name">{item.name}</div><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <SectionLabel name="Designed to Deliver" />
        <p className="gradient-text max-w-[760px] text-[38px] font-black uppercase leading-tight tracking-[0.09em] md:text-[64px]">Refresh the Way the World Drinks.</p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["Flavor", "Real, natural fruit ingredients and pure cane sugar create a crisp, mid-calorie profile that tastes as good as it looks."],
            ["Consistency", "Expertly emulsified hemp extracts guarantee a reliable and enjoyable experience every single time."],
            ["Transparency", "Certified production facilities paired with full-panel testing ensure every can is perfectly dosed and fully compliant."],
          ].map(([title, body]) => <div key={title} className="product-panel"><h3 className="text-sm font-black uppercase tracking-[0.12em] text-primary">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p></div>)}
        </div>
      </section>

      <section className="site-section-tight">
        <SectionLabel name="Find Your Level" />
        <h2 className="site-heading max-w-2xl">Four tiers. Twenty-four ways in.</h2>
        <div className="tier-grid">
          {TIERS.map((tier) => <Link key={tier.mg} to="/products" className={`tier-card ${tier.bgClass}`}><div><div className="tier-eyebrow">{tier.index}</div><div className="my-5"><PotencyLockup dose={tier.mg} base={46} color="hsl(var(--background))" /></div><div className="tier-name">{tier.tagline}</div><div className="tier-desc">{tier.triad}</div></div><div className="text-[11px] font-bold uppercase tracking-[0.14em]">Explore</div></Link>)}
        </div>
      </section>

      <section className="site-section bg-tier-30 text-background">
        <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
          <div><p className="section-kicker text-background/70">Where to Find Us</p><h2 className="site-heading max-w-2xl text-background">SUNRISE belongs in the fridge.</h2><p className="mt-5 max-w-xl text-base leading-relaxed text-background/80">Find nearby retailers or choose a direct purchase path when you’re ready.</p></div>
          <Link to="/near-you" className="wf-btn wf-btn-on-color w-fit">Find Near You</Link>
        </div>
      </section>

      <section className="ticker"><div className="ticker-track">{ATTRIBUTES.map((item) => <span key={item} className="contents"><span>{item}</span><span className="dot" /></span>)}</div></section>
      <PathToPurchase />
    </PageShell>
  );
};

export default Index;
