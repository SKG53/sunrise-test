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
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2" aria-label="SUNRISE home">
          <Wordmark base={24} />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/products" className="text-xs font-black uppercase tracking-widest text-primary">
            Shop
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Open navigation">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background">
            <SheetTitle className="mb-8"><Wordmark base={24} /></SheetTitle>
            <div className="mt-4 flex flex-col gap-6">
              {[...NAV_LINKS, { label: "Shop", path: "/products" }, { label: "COAs", path: "/products" }].map((link) => (
                <Link
                  key={`${link.label}-${link.path}`}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`text-lg font-semibold uppercase tracking-wider transition-colors hover:text-primary ${
                    location.pathname === link.path ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
