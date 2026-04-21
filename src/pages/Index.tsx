import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Leaf, Shield } from "lucide-react";
import { ATTRIBUTES, BRAND, FEATURED_PRODUCTS, TIERS, VALUE_PROPS } from "@/lib/brandData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import PotencyLockup from "@/components/PotencyLockup";
import Wordmark from "@/components/Wordmark";
import { Button } from "@/components/ui/button";

const ICONS = [Leaf, Droplets, Shield];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden px-4 py-16 md:py-24">
        <div className="container mx-auto grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-2xl text-center lg:text-left">
            <h1 className="mb-5 flex justify-center lg:justify-start">
              <Wordmark base={80} />
            </h1>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-primary md:text-base">
              Hemp-Infused THC Seltzers
            </p>
            <p className="mx-auto mb-8 max-w-xl text-3xl font-black uppercase leading-tight tracking-wider text-foreground md:text-5xl lg:mx-0">
              {BRAND.tagline}
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link to="/products">
                <Button className="rounded-none bg-primary px-8 py-6 text-sm font-bold uppercase tracking-widest text-primary-foreground hover:bg-primary/90">
                  Explore Seltzers <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="rounded-none border-primary px-8 py-6 text-sm font-bold uppercase tracking-widest text-primary hover:bg-primary/10">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative min-h-[360px] md:min-h-[480px]">
            <div className="absolute inset-x-6 bottom-8 top-14 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative flex h-full min-h-[360px] items-end justify-center gap-0 md:min-h-[480px]">
              {FEATURED_PRODUCTS.map((product, index) => (
                <img
                  key={product.id}
                  src={product.image}
                  alt={`SUNRISE ${product.flavor} can`}
                  className={`h-[300px] w-auto object-contain drop-shadow-2xl md:h-[430px] ${index % 2 === 0 ? "-mb-4" : "mb-8"} ${index > 0 ? "-ml-16 md:-ml-24" : ""}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 px-4 py-16 md:py-20">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center text-2xl font-black tracking-widest text-foreground md:text-3xl">Why SUNRISE™</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {VALUE_PROPS.map((prop, i) => {
              const Icon = ICONS[i];
              return (
                <div key={prop.title} className="border border-border bg-card p-8 text-center">
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold tracking-widest">{prop.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{prop.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-black tracking-widest md:text-3xl">Find Your Level</h2>
            <p className="text-sm tracking-wide text-muted-foreground">Four potency tiers crafted for every occasion</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TIERS.map((tier) => (
              <Link to="/products" key={tier.mg} className="group block overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
                <div className={`h-2 ${tier.bgClass}`} />
                <div className="relative flex h-72 items-end justify-center overflow-hidden bg-muted/40 px-4 pt-8">
                  <div className={`absolute inset-x-10 bottom-8 top-16 rounded-full ${tier.softClass} blur-2xl`} />
                  <img src={tier.products[0].image} alt={`SUNRISE ${tier.label} can`} loading="lazy" className="relative z-10 h-64 w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <PotencyLockup dose={tier.mg} base={54} color={tier.token} />
                  <p className="mt-3 text-sm font-black uppercase tracking-widest text-foreground">{tier.tagline}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tier.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-5 md:gap-10">
            {ATTRIBUTES.map((attr) => (
              <span key={attr} className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground md:text-sm">
                {attr}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-2xl font-black tracking-widest md:text-4xl">Featured Flavors</h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">Real can photography, full fruit character, and a clean sparkling finish across the SUNRISE lineup.</p>
            </div>
            <Link to="/products" className="text-sm font-black uppercase tracking-widest text-primary hover:text-primary/80">
              View All Products
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_PRODUCTS.map((product) => {
              const tier = TIERS.find((item) => product.potency.startsWith(`${item.mg}mg`)) ?? TIERS[0];
              return <ProductCard key={product.id} product={product} tier={tier} featured />;
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
