import { Link } from "react-router-dom";
import { BRAND, TIERS } from "@/lib/brandData";

const Footer = () => {
  return (
    <footer className="wf-footer">
      <div className="wf-section-tag text-background/40">Footer</div>
      <div className="text-[22px] font-medium uppercase leading-none tracking-[0.14em] text-background">SUNRISE<span className="align-top text-[10px] font-bold tracking-normal">™</span></div>
      <div className="mt-2 text-[9px] uppercase tracking-[0.22em] text-background/60">Refresh the way the world drinks</div>
      <div className="wf-footer-grid">
        <div>
          <div className="wf-footer-head">Newsletter</div>
          <div className="mt-2 h-8 rounded border border-background/40" />
        </div>
        <div>
          <div className="wf-footer-head">Shop</div>
          {TIERS.map((tier) => <Link key={tier.mg} to="/products" className="wf-footer-link">{tier.label}{tier.mg === 5 ? " · Subtle Lift" : tier.mg === 10 ? " · Perfect Buzz" : tier.mg === 30 ? " · Deeper Dive" : " · Elevated"}</Link>)}
          <Link to="/near-you" className="wf-footer-link">Find Near You</Link>
        </div>
        <div>
          <div className="wf-footer-head">Brand</div>
          <Link to="/about" className="wf-footer-link">About</Link>
          <Link to="/contact" className="wf-footer-link">Contact</Link>
          <Link to="/products" className="wf-footer-link">Product COAs</Link>
          <span className="wf-footer-link">Press</span>
        </div>
        <div>
          <div className="wf-footer-head">Legal</div>
          {['Privacy', 'Terms', 'Accessibility', 'Cookie Preferences'].map((item) => <span key={item} className="wf-footer-link">{item}</span>)}
        </div>
      </div>
      <div className="wf-footer-compliance">{BRAND.legal}</div>
    </footer>
  );
};

export default Footer;
