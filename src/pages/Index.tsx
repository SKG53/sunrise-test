import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Wordmark from "@/components/Wordmark";
import PotencyLockup from "@/components/PotencyLockup";
import { Line, PageShell, PathToPurchase, SectionLabel } from "@/components/WireframeBits";
import { FEATURED_PRODUCTS, INGREDIENTS, TIERS } from "@/lib/brandData";

const reviews = ["Clean, bright, and beverage-first.", "The tier system makes the lineup easy.", "Bold color with real restraint."];

const Index = () => {
  return (
    <PageShell>
      <Navbar />
      <section className="relative overflow-hidden border-b border-dashed border-border">
        <div className="wf-section-tag rounded bg-foreground/35 px-2 py-1 text-background">01 · Hero</div>
        <div className="absolute left-8 top-8 z-10 text-[13px] font-bold uppercase tracking-[0.16em] text-background/85">Hero</div>
        <div className="wf-hero-strip">
          {TIERS.map((tier) => <div key={tier.mg} className={tier.bgClass}><div className="absolute bottom-3.5 left-3.5 text-[9px] font-black uppercase tracking-[0.2em] text-background/85">{tier.label}</div></div>)}
        </div>
        <div className="wf-hero-overlay"><Wordmark base={76} color="cream" /></div>
      </section>

      <section className="wf-section-roomy">
        <SectionLabel tag="02 · Brand Statement" name="Brand Statement" intent="Intent · typographic pause on cream. Breathes after the saturated hero. Positions SUNRISE before any product context." />
        <h1 className="max-w-[620px] text-[42px] font-black uppercase leading-[0.98] tracking-[0.08em] md:text-[64px]">Bold and natural at the same time.</h1>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">Cream warmth, saturated color, disciplined structure, and a product line revealed tier-first.</p>
      </section>

      <section className="wf-section-roomy">
        <SectionLabel tag="03 · Origin" />
        <div className="text-[9px] font-black uppercase tracking-[0.28em] text-muted-foreground">ORIGIN</div>
        <div className="wf-section-intent mt-3">Intent · single heritage statement + image. Not enumerated. Breaks the grid rhythm.</div>
        <h2 className="max-w-lg text-[34px] font-black uppercase leading-tight tracking-wider md:text-[50px]">From Route 66 to your fridge.</h2>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">A heartland beverage story built around warmth, confidence, and restraint.</p>
        <div className="wf-img mt-7 h-[260px]">Heritage image — Route 66 / heartland landscape / full-bleed</div>
      </section>

      <section id="inside" className="wf-section">
        <SectionLabel tag="04 · What's Inside" name="What's Inside" intent="Intent · transparency anchor. Structural list — must enumerate. Restructured as side-by-side, image left and ingredient list right." />
        <div className="wf-inside-layout">
          <div className="wf-img h-[360px]"><img src={FEATURED_PRODUCTS[1].image} alt="Centered SUNRISE hero can" className="h-[330px] w-auto object-contain drop-shadow-2xl" /></div>
          <div>{INGREDIENTS.map((item, i) => <div key={item} className="wf-ingredient-row"><div className="wf-ingredient-name">{item}</div><Line width={i % 3 === 0 ? "90" : i % 3 === 1 ? "80" : "60"} /></div>)}</div>
        </div>
      </section>

      <section className="wf-section-roomy">
        <SectionLabel tag="05 · Why SUNRISE" />
        <div className="text-[9px] font-black uppercase tracking-[0.28em] text-muted-foreground">STANCE</div>
        <div className="wf-section-intent mt-3">Intent · single editorial pull-quote carrying the wordmark gradient as display typography. Stays cream.</div>
        <p className="gradient-text max-w-[560px] text-[38px] font-black uppercase leading-tight tracking-wider md:text-[58px]">A beverage company that happens to infuse hemp.</p>
        <div className="wf-img mt-7 h-[220px]">Supporting image — lifestyle / can-in-hand / macro texture</div>
      </section>

      <section className="wf-section">
        <SectionLabel tag="06 · The Four Tiers" name="Potency Tiers" intent="Intent · structural overview of the 4-tier system. Clicks through to Products page anchored at each tier." />
        <Line kind="head" width="40" /><Line width="60" />
        <div className="wf-tier-grid">
          {TIERS.map((tier) => <Link key={tier.mg} to="/products" className={`wf-tier-card ${tier.bgClass}`}><div><div className="wf-tier-eyebrow">{tier.index}</div><div className="my-2"><PotencyLockup dose={tier.mg} base={36} color="hsl(var(--background))" /></div><div className="wf-tier-name">{tier.tagline}</div><div className="wf-tier-desc">{tier.triad}</div></div><div className="wf-tier-arrow"><span>Explore</span><span>→</span></div></Link>)}
        </div>
      </section>

      <section className="wf-section-roomy">
        <SectionLabel tag="07 · Story Teaser" name="Our Story" intent="Intent · portrait-dominant asymmetric. Pulls to About." />
        <div className="wf-story-grid"><div className="wf-img min-h-[340px]">Portrait · founders or brand image</div><div className="flex flex-col justify-center"><Line kind="xl" width="80" /><Line kind="xl" width="60" /><Line width="70" className="mt-4" /><Link to="/about" className="wf-btn wf-btn-ghost mt-4 w-fit">Read Our Story →</Link></div></div>
      </section>

      <section className="wf-section bg-tier-30 text-background">
        <SectionLabel tag="08 · Near You Teaser" />
        <div className="wf-map-zone h-[280px]"><span>US map · retailer footprint</span><div className="wf-map-card text-foreground"><Line kind="sub" width="70" /><Line width="90" /><Link to="/near-you" className="wf-btn mt-3">Find Near You →</Link></div></div>
      </section>

      <section className="wf-section"><SectionLabel tag="09 · Reviews" name="What People Say" intent="Intent · 3 editorial quotes, hairline progress indicator." /><div className="mx-auto max-w-[520px] text-center"><div className="font-serif text-5xl text-border">“</div><p className="text-xl font-bold leading-relaxed">{reviews[0]}</p><div className="mt-6 flex"><div className="h-0.5 flex-1 bg-foreground" /><div className="h-0.5 flex-1 bg-border" /><div className="h-0.5 flex-1 bg-border" /></div></div></section>
      <PathToPurchase tag="10 · Path to Purchase" />
    </PageShell>
  );
};

export default Index;
