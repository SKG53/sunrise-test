import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ATTRIBUTES } from "@/lib/brandData";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black tracking-widest mb-4 gradient-text">
          Our Story
        </h1>
        <p className="text-foreground/60 text-sm tracking-[0.2em] uppercase">
          Born in the Heart of America
        </p>
      </section>

      {/* Origin Story */}
      <section className="py-16 px-4 bg-foreground/[0.03]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-widest mb-8 text-center">
            From Route 66 to Your Fridge
          </h2>
          <div className="space-y-6 text-foreground/70 text-sm leading-relaxed">
            <p>
              SUNRISE™ was born along the storied roads of America's heartland. What started as a family passion
              for crafting the perfect seltzer has grown into a movement — redefining what a hemp-infused beverage
              can be.
            </p>
            <p>
              We believe that premium taste should never be sacrificed for potency. Every SUNRISE™ seltzer is
              formulated in-house by our team of beverage scientists and flavor experts, using only the finest
              natural ingredients. No shortcuts. No compromises.
            </p>
            <p>
              Our nano-emulsion technology delivers consistent, reliable effects — the same great experience
              every time you crack open a can. From our family to yours, we're proud to bring you a beverage
              that's crafted with care and built on trust.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold tracking-widest mb-12 text-center">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Family-Owned",
                desc: "Built by a family that believes in doing things the right way — with integrity, passion, and a relentless pursuit of quality.",
              },
              {
                title: "Formulated In-House",
                desc: "Every recipe is developed by our team. We control the process from concept to can, ensuring premium results.",
              },
              {
                title: "Produced in the USA",
                desc: "Proudly manufactured in American facilities with strict quality controls and GMP compliance.",
              },
              {
                title: "Beverage First",
                desc: "We're a beverage company that happens to infuse hemp — not the other way around. Flavor always leads.",
              },
            ].map((value) => (
              <div key={value.title} className="border border-border p-8 rounded-lg">
                <h3 className="text-primary text-sm font-bold tracking-widest mb-3">{value.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-widest mb-12 text-primary-foreground">
            What's Inside
          </h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {ATTRIBUTES.map((attr) => (
              <div key={attr} className="bg-primary-foreground/10 border border-primary-foreground/20 px-6 py-3 rounded-full">
                <span className="text-primary-foreground text-xs font-bold tracking-[0.15em] uppercase">
                  {attr}
                </span>
              </div>
            ))}
          </div>
          <p className="text-primary-foreground/70 text-sm mt-10 max-w-lg mx-auto leading-relaxed">
            Every batch is third-party lab tested. Scan the QR code on any SUNRISE™ can to view the
            full Certificate of Analysis.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
