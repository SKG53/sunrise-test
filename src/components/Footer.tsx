import { Link } from "react-router-dom";
import { BRAND } from "@/lib/brandData";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <span className="gradient-text text-3xl font-black tracking-widest block mb-3">SUNRISE</span>
            <p className="text-background/60 text-sm tracking-wide">{BRAND.tagline}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold tracking-widest mb-4">NAVIGATE</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "Products", path: "/products" },
                { label: "About", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-background/60 hover:text-background transition-colors text-sm tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social placeholder */}
          <div>
            <h4 className="text-sm font-bold tracking-widest mb-4">FOLLOW US</h4>
            <div className="flex gap-4">
              {["Instagram", "Facebook", "TikTok"].map((platform) => (
                <span
                  key={platform}
                  className="text-background/60 text-sm hover:text-background transition-colors cursor-pointer"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/40 text-xs tracking-wide">{BRAND.legal}</p>
          <p className="text-background/30 text-xs mt-2">
            Must be 21+ to purchase. Please consume responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
