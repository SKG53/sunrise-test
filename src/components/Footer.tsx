import { Link } from "react-router-dom";
import { BRAND } from "@/lib/brandData";
import Wordmark from "@/components/Wordmark";

const links = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground py-16 text-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_0.7fr_1fr]">
          <div>
            <span className="mb-4 block"><Wordmark base={38} /></span>
            <p className="max-w-sm text-sm uppercase tracking-[0.18em] text-background/65">{BRAND.tagline}</p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold tracking-widest">NAVIGATE</h4>
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link key={link.path} to={link.path} className="text-sm tracking-wide text-background/65 transition-colors hover:text-background">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold tracking-widest">FOLLOW US</h4>
            <div className="flex flex-wrap gap-4">
              {['Instagram', 'Facebook', 'TikTok'].map((platform) => (
                <span key={platform} className="cursor-pointer text-sm text-background/65 transition-colors hover:text-background">
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-background/20 pt-8 text-center">
          <p className="text-xs tracking-wide text-background/45">{BRAND.legal}</p>
          <p className="mt-2 text-xs text-background/35">Must be 21+ to purchase. Please consume responsibly.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
