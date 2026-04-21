import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

export const Line = ({ className = "" }: { kind?: "xl" | "head" | "sub" | "body" | "caption"; width?: string; className?: string }) => (
  <span className={className} aria-hidden="true" />
);

export const SectionLabel = ({ name }: { tag?: string; name?: string; intent?: string }) => (
  name ? <p className="section-kicker">{name}</p> : null
);

export const PathToPurchase = () => (
  <section className="purchase-cta">
    <div>
      <p className="section-kicker text-background/70">Ready for a Conversation?</p>
      <h2 className="max-w-3xl text-[36px] font-black uppercase leading-tight tracking-[0.09em] text-background md:text-[58px]">Shop the lineup or find SUNRISE near you.</h2>
      <p className="mt-5 max-w-lg text-sm leading-relaxed text-background/70">Choose your potency, pick your flavor, and start where SUNRISE fits your moment.</p>
    </div>
    <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-start">
      <Link to="/products" className="wf-btn wf-btn-on-color justify-center">Shop Now →</Link>
      <Link to="/near-you" className="wf-btn wf-btn-on-color-ghost justify-center">Find Near You →</Link>
    </div>
  </section>
);

export const PageShell = ({ children }: { children: React.ReactNode }) => <div className="wf-page">{children}<Footer /></div>;
