import { Link } from "react-router-dom";
import { BRAND, TIERS } from "@/lib/brandData";
import Wordmark from "@/components/Wordmark";

const Footer = () => {
  return (
    <footer className="wf-footer">
      <Wordmark base={34} color="cream" />
      <div className="mt-3 text-[12px] uppercase tracking-[0.22em] text-background/65">{BRAND.tagline}</div>
      <div className="wf-footer-grid">
        <div>
          <div className="wf-footer-head">Newsletter</div>
          <div className="mt-3 flex max-w-sm overflow-hidden rounded-full border border-background/35"><input aria-label="Email address" placeholder="EMAIL" className="min-w-0 flex-1 bg-transparent px-4 py-3 text-xs uppercase tracking-[0.12em] text-background outline-none placeholder:text-background/40" /><button className="px-4 text-xs font-bold uppercase tracking-[0.12em] text-background">Join</button></div>
        </div>
        <div><div className="wf-footer-head">Shop</div>{TIERS.map((tier) => <Link key={tier.mg} to="/products" className="wf-footer-link">{tier.label}</Link>)}<Link to="/near-you" className="wf-footer-link">Find Near You</Link></div>
        <div><div className="wf-footer-head">Brand</div><Link to="/about" className="wf-footer-link">About</Link><Link to="/contact" className="wf-footer-link">Contact</Link><Link to="/products" className="wf-footer-link">Product COAs</Link></div>
        <div><div className="wf-footer-head">Legal</div>{['Privacy', 'Terms', 'Accessibility'].map((item) => <span key={item} className="wf-footer-link">{item}</span>)}</div>
      </div>
      <div className="wf-footer-compliance">{BRAND.legal} {BRAND.compliance}</div>
    </footer>
  );
};

export default Footer;
