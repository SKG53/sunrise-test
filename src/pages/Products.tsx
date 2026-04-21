import { TIERS } from "@/lib/brandData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TierSection from "@/components/TierSection";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="px-4 py-16 text-center md:py-20">
        <h1 className="gradient-text mb-4 text-4xl font-black tracking-widest md:text-6xl">Our Seltzers</h1>
        <p className="mx-auto max-w-2xl text-sm uppercase tracking-[0.2em] text-muted-foreground">
          24 premium hemp-infused THC seltzers across four potency tiers
        </p>
      </section>

      {TIERS.map((tier) => (
        <TierSection key={tier.mg} tier={tier} />
      ))}

      <Footer />
    </div>
  );
};

export default Products;
