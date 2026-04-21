import PotencyLockup from "@/components/PotencyLockup";
import ProductCard from "@/components/ProductCard";
import type { Tier } from "@/lib/brandData";

interface TierSectionProps {
  tier: Tier;
}

const TierSection = ({ tier }: TierSectionProps) => {
  return (
    <section className="border-t border-border py-16 px-4 md:py-20">
      <div className="container mx-auto">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end">
          <div>
            <PotencyLockup dose={tier.mg} base={88} color={tier.token} />
            <p className={`mt-4 text-sm font-black uppercase tracking-[0.24em] ${tier.colorClass}`}>
              {tier.tagline}
            </p>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground lg:justify-self-end">
            {tier.description}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {tier.products.map((product) => (
            <ProductCard key={product.id} product={product} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TierSection;
