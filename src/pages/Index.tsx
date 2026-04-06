import { Link } from "react-router-dom";
import { TIERS, ATTRIBUTES, VALUE_PROPS, BRAND } from "@/lib/brandData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Leaf, Shield, Droplets } from "lucide-react";
import Wordmark from "@/components/Wordmark";

const ICONS = [Leaf, Droplets, Shield];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 md:py-40 px-4">
        <h1 className="mb-4">
          <Wordmark base={72} />
        </h1>
        <p className="text-foreground/70 text-lg md:text-xl tracking-[0.2em] font-light mb-2 uppercase">
          Hemp-Infused THC Seltzers
        </p>
        <p className="text-primary text-sm md:text-base tracking-[0.3em] font-semibold mb-10 uppercase">
          {BRAND.tagline}
        </p>
        <Link to="/products">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-sm tracking-widest uppercase font-bold rounded-none">
            Explore Our Seltzers
          </Button>
        </Link>
      </section>

      {/* Value Props */}
      <section className="py-20 px-4 bg-foreground/[0.03]">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-bold tracking-widest mb-16 text-foreground">
            Why SUNRISE™
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUE_PROPS.map((prop, i) => {
              const Icon = ICONS[i];
              return (
                <div key={prop.title} className="text-center p-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold tracking-widest mb-3">{prop.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{prop.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tier Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-bold tracking-widest mb-4">
            Find Your Level
          </h2>
          <p className="text-center text-foreground/60 mb-16 text-sm tracking-wide">
            Four potency tiers crafted for every occasion
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIERS.map((tier) => (
              <Link to="/products" key={tier.mg} className="group">
                <div className="relative overflow-hidden rounded-lg border border-border hover:border-primary/30 transition-all duration-300">
                  {/* Colored header band */}
                  <div className={`${tier.bgClass} h-2`} />
                  {/* Can placeholder */}
                  <div className={`${tier.bgClass}/10 h-48 flex items-center justify-center`}>
                    <div className={`w-20 h-32 rounded-lg ${tier.bgClass}/20 border-2 border-dashed ${tier.bgClass}/40 flex items-center justify-center`}>
                      <span className={`${tier.colorClass} text-xs font-bold tracking-wider`}>CAN</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className={`${tier.colorClass} text-2xl font-black`}>{tier.mg}mg</span>
                    <p className="text-foreground font-bold tracking-wider text-sm mt-1">{tier.tagline}</p>
                    <p className="text-foreground/50 text-xs mt-2 leading-relaxed">{tier.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Attributes Strip */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {ATTRIBUTES.map((attr) => (
              <span key={attr} className="text-primary-foreground text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                {attr}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold tracking-widest mb-6">
          Ready to Refresh?
        </h2>
        <p className="text-foreground/60 text-sm tracking-wide mb-10 max-w-md mx-auto">
          Explore our full lineup of premium hemp-infused THC seltzers and find the perfect sip for any moment.
        </p>
        <Link to="/products">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-sm tracking-widest uppercase font-bold rounded-none">
            View All Products
          </Button>
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
