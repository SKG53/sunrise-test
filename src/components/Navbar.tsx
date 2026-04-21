import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Wordmark from "@/components/Wordmark";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "About", path: "/about" },
  { label: "Near You", path: "/near-you" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="wf-nav">
      <Link to="/" className="wf-nav-logo" aria-label="SUNRISE home">
        <Wordmark base={18} />
      </Link>
      <div className="wf-nav-links">
        {NAV_LINKS.map((link) => (
          <Link key={link.path} to={link.path} className={`wf-nav-link ${location.pathname === link.path ? "wf-nav-link-active" : ""}`}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className="wf-nav-right">
        <Link to="/products" className="wf-nav-cta">COAs</Link>
        <Link to="/products" className="wf-nav-cta wf-nav-cta-solid">Shop</Link>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" aria-label="Open navigation"><Menu className="h-5 w-5" /></Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-background">
          <SheetTitle><Wordmark base={24} /></SheetTitle>
          <div className="mt-8 flex flex-col gap-5">
            {[...NAV_LINKS, { label: "COAs", path: "/products" }, { label: "Shop", path: "/products" }].map((link) => (
              <Link key={`${link.label}-${link.path}`} to={link.path} onClick={() => setOpen(false)} className="text-sm font-black uppercase tracking-widest text-foreground">
                {link.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
