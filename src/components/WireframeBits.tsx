import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

export const Line = ({ kind = "body", width = "70", className = "" }: { kind?: "xl" | "head" | "sub" | "body" | "caption"; width?: string; className?: string }) => (
  <div className={`wf-line ${kind === "xl" ? "wf-line-xl" : kind === "head" ? "wf-line-head" : kind === "sub" ? "wf-line-sub" : kind === "caption" ? "wf-line-caption" : "wf-line-body"} wf-w-${width} ${className}`} />
);

export const SectionLabel = ({ tag, name, intent }: { tag: string; name?: string; intent?: string }) => (
  <>
    <div className="wf-section-tag">{tag}</div>
    {name && <div className="wf-section-name">{name}</div>}
    {intent && <div className="wf-section-intent">{intent}</div>}
  </>
);

export const PathToPurchase = ({ tag = "Path to Purchase" }: { tag?: string }) => (
  <section className="wf-ptp">
    <div className="wf-section-tag text-background/40">{tag}</div>
    <div>
      <div className="wf-section-name text-background/55">Ready for a Conversation?</div>
      <Line kind="xl" width="80" className="bg-background/95" />
      <Line kind="xl" width="60" className="mt-1.5 bg-background/95" />
    </div>
    <div className="flex flex-col gap-2.5">
      <Link to="/products" className="wf-btn wf-btn-on-color justify-center">Shop Now →</Link>
      <Link to="/near-you" className="wf-btn wf-btn-on-color-ghost justify-center">Find Near You →</Link>
    </div>
  </section>
);

export const PageShell = ({ children }: { children: React.ReactNode }) => <div className="wf-page">{children}<Footer /></div>;
