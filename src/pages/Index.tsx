import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Wordmark from "@/components/Wordmark";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { FEATURED_PRODUCTS, INGREDIENTS, TIERS, getTierByMg } from "@/lib/brandData";

const reviews = [
  "Clean, bright, and actually tastes like a beverage first.",
  "The tier system makes it easy to choose the right pour.",
  "Bold cans, clear flavors, no clutter. Exactly what this category needed.",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="min-h-[calc(100vh-4rem)] overflow-hidden">
        <div className="grid h-3 grid-cols-4">{TIERS.map((tier) => <div key={tier.mg} className={tier.bgClass} />)}</div>
        <div className="container mx-auto grid min-h-[calc(100vh-4.75rem)] items-center gap-10 px-4 py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h1 className="mb-8"><Wordmark base={88} /></h1>
            <p className="max-w-2xl text-4xl font-black uppercase leading-tight tracking-wider md:text-6xl">Refresh the way the world drinks</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/products"><Button className="rounded-none bg-primary px-8 py-6 text-xs font-black uppercase tracking-widest text-primary-foreground">Shop Now <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <Link to="/near-you"><Button variant="outline" className="rounded-none px-8 py-6 text-xs font-black uppercase tracking-widest">Find Near You</Button></Link>
            </div>
          </div>
          <div className="relative flex min-h-[420px] items-end justify-center">
            <div className="absolute inset-x-8 bottom-12 top-12 rounded-full bg-primary/10 blur-3xl" />
            {FEATURED_PRODUCTS.map((product, i) => (
              <img key={product.id} src={product.image} alt={`SUNRISE ${product.flavor} can`} className={`relative h-[330px] w-auto object-contain drop-shadow-2xl md:h-[470px] ${i > 0 ? "-ml-20 md:-ml-32" : ""} ${i % 2 ? "mb-10" : ""}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 text-center">
        <p className="mx-auto max-w-5xl text-4xl font-black uppercase leading-tight tracking-wider md:text-6xl">Bold and natural at the same time.</p>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">SUNRISE is built from cream warmth, saturated tier color, disciplined composition, and beverage-first flavor.</p>
      </section>

      <section className="grid min-h-[520px] md:grid-cols-2">
        <div className="bg-tier-30 p-8 text-primary-foreground md:p-14">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.28em]">Origin</p>
          <h2 className="max-w-xl text-4xl font-black uppercase leading-tight tracking-wider md:text-6xl">From Route 66 to your fridge.</h2>
        </div>
        <div className="flex items-center bg-muted/60 p-8 md:p-14">
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">A single heritage statement with heartland warmth: family-built, American-made, and composed with the restraint of modern beverage design.</p>
        </div>
      </section>

      <section id="inside" className="px-4 py-20">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="relative flex min-h-[440px] items-end justify-center bg-muted/50">
            <img src={FEATURED_PRODUCTS[1].image} alt="Centered SUNRISE hero can" className="h-[400px] w-auto object-contain drop-shadow-2xl" />
          </div>
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-primary">What’s Inside</p>
            <h2 className="mb-8 text-3xl font-black uppercase tracking-wider md:text-5xl">Transparency, structured.</h2>
            <div className="divide-y divide-border border-y border-border">
              {INGREDIENTS.map((item) => <div key={item} className="flex justify-between py-4 text-sm font-bold uppercase tracking-widest"><span>{item}</span><span className="text-primary">•</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="container mx-auto">
          <p className="gradient-text mx-auto max-w-5xl text-center text-4xl font-black uppercase leading-tight tracking-wider md:text-7xl">A beverage company that happens to infuse hemp.</p>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-primary">The Four Tiers</p><h2 className="text-3xl font-black uppercase tracking-wider md:text-5xl">Potency Tiers</h2></div></div>
          <div className="grid gap-5 md:grid-cols-4">
            {TIERS.map((tier) => <Link key={tier.mg} to="/products" className="border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-xl"><p className={`${tier.colorClass} mb-8 text-xs font-black uppercase tracking-widest`}>{tier.index}</p><h3 className="text-2xl font-black uppercase tracking-wider">{tier.tagline}</h3><p className="mt-3 text-sm text-muted-foreground">{tier.triad}</p><p className="mt-10 text-xs font-black uppercase tracking-widest text-primary">Explore →</p></Link>)}
          </div>
        </div>
      </section>

      <section className="px-4 py-20"><div className="container mx-auto grid gap-5 md:grid-cols-4">{FEATURED_PRODUCTS.map((p) => <ProductCard key={p.id} product={p} tier={getTierByMg(p.tier)} featured />)}</div></section>

      <section className="grid min-h-[460px] md:grid-cols-2">
        <div className="bg-muted/60 p-8 md:p-14"><p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-primary">Story Teaser</p><h2 className="text-4xl font-black uppercase tracking-wider md:text-6xl">Our Story</h2><Link to="/about" className="mt-10 inline-block text-xs font-black uppercase tracking-widest text-primary">Read Our Story →</Link></div>
        <div className="bg-tier-30 p-8 text-primary-foreground md:p-14"><p className="mb-4 text-xs font-black uppercase tracking-[0.28em]">Near You</p><h2 className="text-4xl font-black uppercase tracking-wider md:text-6xl">Find SUNRISE</h2><Link to="/near-you" className="mt-10 inline-block text-xs font-black uppercase tracking-widest">Find Near You →</Link></div>
      </section>

      <section className="px-4 py-20"><div className="container mx-auto"><h2 className="mb-10 text-3xl font-black uppercase tracking-wider">What People Say</h2><div className="grid gap-5 md:grid-cols-3">{reviews.map((r) => <blockquote key={r} className="border border-border bg-card p-8 text-lg font-bold leading-relaxed">“{r}”</blockquote>)}</div></div></section>

      <section className="bg-primary px-4 py-16 text-center text-primary-foreground"><h2 className="text-3xl font-black uppercase tracking-wider md:text-5xl">Ready for a conversation?</h2><div className="mt-8 flex justify-center gap-3"><Link to="/products"><Button className="rounded-none bg-primary-foreground text-primary hover:bg-primary-foreground/90">Shop Now →</Button></Link><Link to="/near-you"><Button variant="outline" className="rounded-none border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">Find Near You →</Button></Link></div></section>
      <Footer />
    </div>
  );
};

export default Index;
