import { Link } from "react-router-dom";
import { BRAND, TIERS } from "@/lib/brandData";
import Wordmark from "@/components/Wordmark";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16 text-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <span className="mb-4 block"><Wordmark base={38} /></span>
            <p className="max-w-sm text-sm uppercase tracking-[0.18em] text-background/65">Refresh the way the world drinks</p>
            <div className="mt-8 flex max-w-sm border border-background/20">
              <input aria-label="Newsletter email" placeholder="Newsletter" className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-background placeholder:text-background/45 outline-none" />
              <button className="border-l border-background/20 px-4 text-xs font-black uppercase tracking-widest">Join</button>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-black uppercase tracking-widest">Shop</h4>
            <div className="flex flex-col gap-2">
              {TIERS.map((tier) => <Link key={tier.mg} to="/products" className="text-sm text-background/65 hover:text-background">{tier.label} · {tier.shortName}</Link>)}
              <Link to="/near-you" className="text-sm text-background/65 hover:text-background">Find Near You</Link>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-black uppercase tracking-widest">Brand</h4>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-sm text-background/65 hover:text-background">About</Link>
              <Link to="/contact" className="text-sm text-background/65 hover:text-background">Contact</Link>
              <Link to="/products" className="text-sm text-background/65 hover:text-background">Product COAs</Link>
              <span className="text-sm text-background/45">Press</span>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-black uppercase tracking-widest">Legal</h4>
            <div className="flex flex-col gap-2">
              {['Privacy', 'Terms', 'Accessibility', 'Cookie Preferences'].map((item) => <span key={item} className="text-sm text-background/65">{item}</span>)}
            </div>
          </div>
        </div>
        <p className="mt-12 border-t border-background/20 pt-8 text-xs leading-relaxed tracking-wide text-background/45">{BRAND.legal}</p>
      </div>
    </footer>
  );
};

export default Footer;
