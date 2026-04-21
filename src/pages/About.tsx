import Navbar from "@/components/Navbar";
import { PageShell, PathToPurchase, SectionLabel } from "@/components/WireframeBits";
import { FEATURED_PRODUCTS } from "@/lib/brandData";

const About = () => <PageShell><Navbar />
  <section className="site-section"><SectionLabel name="About" /><h1 className="site-heading max-w-4xl">Born in the heart of America.</h1><p className="site-subhead mt-6">SUNRISE is a family-owned beverage company founded along America’s historic Route 66 and built for a new generation of non-alcoholic refreshment.</p></section>
  <section className="statement"><p className="statement-eyebrow">Origin</p><div className="story-grid"><div><h2 className="site-heading max-w-2xl">A beverage company rooted in a real place.</h2><p className="site-subhead mt-5">With deep roots in beverage formulation and manufacturing, our team is uniquely positioned to lead the non-alcoholic beverage boom.</p></div><div className="statement-media"><img src={FEATURED_PRODUCTS[0].image} alt="SUNRISE Strawberry hemp-infused seltzer can" className="h-[260px] w-auto object-contain" /></div></div></section>
  <section className="site-section"><SectionLabel name="Our Approach" /><h2 className="site-heading max-w-3xl">Real flavor. Real effects. Crafted with intention.</h2><p className="site-subhead mt-5">Every can is infused with hemp-derived Delta-9 THC, made with fruit-forward flavor, and designed to elevate without overwhelming.</p></section>
  <section className="site-section"><SectionLabel name="Who We Are" /><div className="grid gap-3 md:grid-cols-3">{FEATURED_PRODUCTS.slice(0,3).map((product)=><div key={product.id} className="image-stage min-h-[280px]"><img src={product.image} alt={`SUNRISE ${product.flavor} hemp-infused seltzer can`} className="h-[220px] w-auto object-contain" /></div>)}</div></section>
  <section className="site-section bg-tier-30 text-background"><SectionLabel name="American Heartland" /><h2 className="site-heading max-w-3xl text-background">Confidence, warmth, and a product line made to feel grounded.</h2><p className="mt-5 max-w-2xl text-base leading-relaxed text-background/80">Cream warmth, saturated color, disciplined structure, and products proudly made in the USA.</p><div className="map-zone mt-6 min-h-[220px]">Route 66 map / geography layer</div></section>
  <PathToPurchase />
</PageShell>;
export default About;
