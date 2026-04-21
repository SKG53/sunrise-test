import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ATTRIBUTES, FEATURED_PRODUCTS } from "@/lib/brandData";

const values = [
  {
    title: "Family-Owned",
    desc: "Built by a family that believes in doing things the right way — with integrity, care, and a relentless pursuit of quality.",
  },
  {
    title: "Formulated In-House",
    desc: "Every recipe is developed by our team. We control the process from concept to can for a polished beverage experience.",
  },
  {
    title: "Produced in the USA",
    desc: "Proudly manufactured in American facilities with strict quality controls and thoughtful ingredient standards.",
  },
  {
    title: "Beverage First",
    desc: "We are a beverage company that happens to infuse hemp — not the other way around. Flavor always leads.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="overflow-hidden px-4 py-16 md:py-24">
        <div className="container mx-auto grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h1 className="gradient-text mb-4 text-4xl font-black tracking-widest md:text-6xl">Our Story</h1>
            <p className="mb-8 text-sm font-black uppercase tracking-[0.24em] text-primary">Born in the Heart of America</p>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                SUNRISE™ was born along the storied roads of America’s heartland. What started as a family passion for crafting the perfect seltzer has grown into a beverage-first lineup made for modern refreshment.
              </p>
              <p>
                We believe premium taste should never be sacrificed for potency. Every SUNRISE™ seltzer is formulated in-house by beverage scientists and flavor experts using natural fruit-forward profiles.
              </p>
              <p>
                From Route 66 inspiration to the finished can, SUNRISE™ is crafted with care, built on consistency, and made to refresh the way the world drinks.
              </p>
            </div>
          </div>
          <div className="relative flex min-h-[360px] items-end justify-center">
            <div className="absolute inset-x-10 bottom-10 top-10 rounded-full bg-primary/10 blur-3xl" />
            {FEATURED_PRODUCTS.slice(0, 3).map((product, index) => (
              <img
                key={product.id}
                src={product.image}
                alt={`SUNRISE ${product.flavor} can`}
                loading="lazy"
                className={`relative h-80 w-auto object-contain drop-shadow-2xl md:h-96 ${index > 0 ? "-ml-20" : ""} ${index === 1 ? "mb-8" : ""}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/50 px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-2xl font-black tracking-widest md:text-3xl">What We Stand For</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="border border-border bg-card p-8">
                <h3 className="mb-3 text-sm font-black tracking-widest text-primary">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-4 py-16 md:py-20">
        <div className="container mx-auto text-center">
          <h2 className="mb-10 text-2xl font-black tracking-widest text-primary-foreground">What’s Inside</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {ATTRIBUTES.map((attr) => (
              <div key={attr} className="rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-6 py-3">
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground">{attr}</span>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-lg text-sm leading-relaxed text-primary-foreground/75">
            Every batch is third-party lab tested. Scan the QR code on any SUNRISE™ can to view the full Certificate of Analysis.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
