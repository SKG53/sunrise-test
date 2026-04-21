import { Link } from "react-router-dom";
import type { Product, Tier } from "@/lib/brandData";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  tier: Tier;
  featured?: boolean;
}

const ProductCard = ({ product, tier, featured = false }: ProductCardProps) => {
  return (
    <Link to={`/products/${product.id}`} className="group block h-full">
      <article className="relative flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
        <div className={`h-1.5 ${tier.bgClass}`} />
        <div className="relative flex min-h-72 flex-1 items-end justify-center overflow-hidden bg-muted/40 px-6 pt-8">
          <div className={`absolute inset-x-8 bottom-8 top-12 rounded-full ${tier.softClass} blur-2xl`} />
          <img
            src={product.image}
            alt={`SUNRISE ${product.potency} ${product.flavor} can`}
            loading={featured ? "eager" : "lazy"}
            className="relative z-10 h-64 w-auto max-w-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="space-y-3 p-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className={`${tier.bgClass} text-primary-foreground`}>{product.potency}</Badge>
            {product.cannabinoids && (
              <Badge variant="outline" className={`${tier.colorClass} ${tier.borderClass} bg-background/60`}>
                + {product.cannabinoids}
              </Badge>
            )}
          </div>
          <div>
            <h3 className="text-base font-black tracking-wider text-foreground">{product.flavor}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{product.notes}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
