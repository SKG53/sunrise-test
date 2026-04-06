import { TIERS } from "@/lib/brandData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black tracking-widest mb-4 gradient-text">
          Our Seltzers
        </h1>
        <p className="text-foreground/60 text-sm tracking-[0.2em] uppercase">
          Premium hemp-infused THC seltzers in four potency tiers
        </p>
      </section>

      {/* Tier Sections */}
      {TIERS.map((tier) => (
        <section key={tier.mg} className="py-16 px-4 border-t border-border">
          <div className="container mx-auto">
            {/* Tier header */}
            <div className="flex flex-col md:flex-row md:items-end gap-4 mb-12">
              <div className={`${tier.bgClass} text-white px-6 py-3 inline-block`}>
                <span className="text-3xl font-black tracking-wider">{tier.label}</span>
              </div>
              <div className="md:ml-4">
                <p className="text-lg font-bold tracking-wider">{tier.tagline}</p>
                <p className="text-foreground/50 text-sm max-w-lg">{tier.description}</p>
              </div>
            </div>

            {/* Can placeholder row */}
            <div className="mb-10 flex items-center justify-center">
              <div className={`${tier.bgClass}/10 border-2 border-dashed ${tier.bgClass}/30 rounded-xl w-full max-w-2xl h-48 flex items-center justify-center`}>
                <span className={`${tier.colorClass} text-sm font-bold tracking-widest`}>
                  {tier.mg}mg CAN PHOTOGRAPHY PLACEHOLDER
                </span>
              </div>
            </div>

            {/* Flavors grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {tier.flavors.map((flavor) => (
                <div key={flavor.name} className="text-center group">
                  <div
                    className="w-full aspect-square rounded-lg mb-3 flex items-center justify-center transition-transform group-hover:scale-105"
                    style={{ backgroundColor: flavor.color + "20", border: `2px solid ${flavor.color}40` }}
                  >
                    <div
                      className="w-10 h-10 rounded-full"
                      style={{ backgroundColor: flavor.color }}
                    />
                  </div>
                  <p className="text-sm font-bold tracking-wide">{flavor.name}</p>
                  <p className="text-foreground/50 text-xs mt-1">{flavor.descriptor}</p>
                </div>
              ))}
            </div>

            {/* Cannabinoid extras for 60mg */}
            {tier.extras && (
              <div className="mt-10">
                <h3 className="text-sm font-bold tracking-widest mb-4 text-foreground/70">
                  CANNABINOID BLEND VARIANTS
                </h3>
                <div className="flex flex-wrap gap-3">
                  {tier.extras.map((extra) => (
                    <span
                      key={extra}
                      className={`${tier.bgClass}/10 ${tier.colorClass} px-4 py-2 text-xs font-bold tracking-widest rounded-full border ${tier.bgClass}/20`}
                    >
                      {extra}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
};

export default Products;
