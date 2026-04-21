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
      <section className="relative overflow-hidden border-b border-dashed border-border">
        <div className="hero-strip">
          {TIERS.map((tier, index) => (
            <div key={tier.mg} className={`hero-tier ${tier.bgClass}`}>
              <img src={FEATURED_PRODUCTS[index].image} alt={`SUNRISE hemp-infused seltzer ${tier.label} lineup`} className="opacity-85" />
            </div>
          ))}
        </div>
        <div className="hero-overlay">
          <Wordmark base={76} color="cream" />
        </div>
      </section>

      <section className="brand-statement border-b border-dashed border-border">
        <SectionLabel name="Brand Statement" />
        <h1 className="site-heading max-w-4xl">Seltzers infused with hemp. Real flavor. Real effects. Crafted with intention.</h1>
        <p className="site-subhead mt-6">We’re here to refresh the way the world drinks.</p>
      </section>

      <section className="statement home-origin">
        <p className="statement-eyebrow">Origin</p>
        <div className="home-origin-copy">
          <h2 className="site-heading max-w-2xl">Born in the heart of America.</h2>
          <p className="site-subhead mt-5">Founded along historic Route 66 and proudly family-owned, SUNRISE is built from beverage experience, natural flavor, and a belief that refreshment should feel bold and grounded.</p>
        </div>
        <div className="statement-media"><img src={FEATURED_PRODUCTS[2].image} alt="SUNRISE Peach Mango hemp-infused seltzer can" className="h-[260px] w-auto object-contain" /></div>
      </section>

      <section id="inside" className="site-section">
        <SectionLabel name="What’s Inside" />
        <div className="inside-layout grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-start">
          <div className="image-stage min-h-[360px]"><img src={FEATURED_PRODUCTS[1].image} alt="SUNRISE Blood Orange hemp-infused seltzer can" className="h-[320px] w-auto object-contain" /></div>
          <div>
            {INGREDIENTS.map((item) => <div key={item.name} className="ingredient-row"><div className="ingredient-name">{item.name}</div><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p></div>)}
          </div>
        </div>
      </section>

      <section className="statement">
        <p className="statement-eyebrow">Stance</p>
        <p className="gradient-text max-w-[760px] text-[38px] font-black uppercase leading-tight tracking-[0.09em] md:text-[64px]">Refresh the Way the World Drinks.</p>
        <p className="site-subhead mt-6">A confident, fruit-forward alternative made for the fridge, the cooler, and the conversation.</p>
        <div className="statement-media"><img src={FEATURED_PRODUCTS[0].image} alt="SUNRISE Strawberry hemp-infused seltzer can" className="h-[220px] w-auto object-contain" /></div>
      </section>

      <section className="site-section-tight">
        <SectionLabel name="Potency Tiers" />
        <h2 className="mb-3 text-[24px] font-black uppercase leading-tight tracking-[0.09em] md:text-[34px]">Four tiers.</h2>
        <p className="site-subhead">Twenty-four ways in.</p>
        <div className="tier-grid">
          {TIERS.map((tier) => <Link key={tier.mg} to="/products" className={`tier-card ${tier.bgClass}`}><div><div className="tier-eyebrow">{tier.index}</div><div className="my-5"><PotencyLockup dose={tier.mg} base={42} color="hsl(var(--background))" /></div><div className="tier-name">{tier.tagline}</div><div className="tier-desc">{tier.triad}</div></div><div className="tier-card-arrow text-[11px] font-bold uppercase tracking-[0.14em]"><span>Explore</span><span>→</span></div></Link>)}
        </div>
      </section>

      <section className="site-section">
        <SectionLabel name="Our Story" />
        <div className="story-grid">
          <div className="story-media"><img src={FEATURED_PRODUCTS[3].image} alt="SUNRISE Strawberry Kiwi hemp-infused seltzer can" className="h-[280px] w-auto object-contain" /></div>
          <div><h2 className="site-heading max-w-xl">Bold and natural at the same time.</h2><p className="site-subhead mt-5">Every product is created in-house and proudly made in the USA with an uncompromising focus on quality and simple ingredients.</p><Link to="/about" className="wf-btn wf-btn-ghost mt-6">Read Our Story →</Link></div>
        </div>
      </section>

      <section className="near-teaser">
        <div className="near-teaser-map">US map · retailer footprint</div>
        <div className="near-card"><h2 className="text-2xl font-black uppercase tracking-[0.09em]">Find SUNRISE near you.</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Search nearby retailers or choose a direct purchase path.</p><Link to="/near-you" className="wf-btn mt-5">Find Near You →</Link></div>
      </section>

      <section className="site-section">
        <SectionLabel name="What People Say" />
        <div className="reviews-layout"><div className="reviews-quote-mark">“</div><h2 className="site-heading mx-auto max-w-xl">Crisp, bright, and built for the moment.</h2><p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-primary">SUNRISE drinkers</p><div className="reviews-progress"><span className="reviews-progress-seg reviews-progress-seg-active" /><span className="reviews-progress-seg" /><span className="reviews-progress-seg" /></div></div>
      </section>

      <section className="ticker"><div className="ticker-track">{ATTRIBUTES.map((item) => <span key={item} className="contents"><span>{item}</span><span className="dot" /></span>)}</div></section>
      <PathToPurchase />
    </PageShell>
  );
};

export default Index;
