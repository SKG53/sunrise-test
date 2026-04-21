import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { PageShell, PathToPurchase, SectionLabel } from "@/components/WireframeBits";
import { getProductById, getTierByMg, INGREDIENTS } from "@/lib/brandData";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = getProductById(productId) ?? getProductById("10mg-blackberry-lemonade-30mg-cbn")!;
  const tier = getTierByMg(product.tier);
  const related = tier.products.filter((item) => item.id !== product.id).slice(0, 5);
  const cannabinoid = product.cannabinoids?.split(" ").at(-1) ?? "Flavor";

  return (
    <PageShell>
      <Navbar />
      <div className="border-b border-border px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground md:px-8"><Link to="/products">Products</Link> · {tier.label} · {product.name}</div>
      <section className="product-hero">
        <div className="product-can-zone"><img src={product.image} alt={`SUNRISE ${product.flavor} ${product.potency} hemp-infused seltzer can`} className="h-[390px] w-auto object-contain" /></div>
        <div className="pt-2.5"><div className={`${tier.colorClass} mb-4 inline-block rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] ${tier.borderClass} ${tier.softClass}`}>{product.potency}{product.cannabinoids ? ` · +${product.cannabinoids}` : ""}</div><h1 className={`${tier.colorClass} mb-4 text-[46px] font-black uppercase leading-[0.95] tracking-[0.09em]`}>{product.name}</h1><span className="inline-block rounded-full bg-card px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: tier.token }}>{product.descriptor}</span><p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">{product.notes}</p><div className="mt-6 text-lg font-black tracking-wider">{product.price}</div><div className="mt-5 flex flex-wrap gap-3"><span className="wf-btn">Shop Now</span><Link to="/near-you" className="wf-btn wf-btn-ghost">Find Near You</Link></div></div>
      </section>
      <section className="stat-strip">{[["12","Ounce Can"],[String(product.servings),"Servings Per Can"],[String(product.tier/product.servings),"mg THC / Serving"],[product.cannabinoids ? product.cannabinoids.replace(/MG /, "") : product.flavor, `${cannabinoid} / Can`]].map(([num,label]) => <div key={label}><div className="stat-num">{num}</div><div className="stat-label">{label}</div></div>)}</section>
      <section className="site-section-tight"><SectionLabel name="Ingredients" /><div className="ingredient-grid">{INGREDIENTS.map((item)=><div key={item.name} className="ingredient-row"><div className="ingredient-name">{item.name}</div><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p></div>)}</div></section>
      <section className="site-section-tight bg-card"><SectionLabel name={`Other Flavors in ${tier.label}`} /><div className="grid gap-3 sm:grid-cols-2 md:grid-cols-5">{related.map((item)=><Link to={`/products/${item.id}`} key={item.id} className="product-panel text-center"><div className="flex h-[120px] items-center justify-center"><img src={item.image} alt={`SUNRISE ${item.flavor} hemp-infused seltzer can`} className="h-28 w-auto object-contain" /></div><div className="mt-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{item.name}</div></Link>)}</div></section>
      <section className="site-section-tight"><SectionLabel name="FAQ" />{["What size is each can?", "How many servings are in each can?", "Where can I find product COAs?", "Where can I buy SUNRISE?"].map((q)=><details key={q} className="border-b border-border py-4"><summary className="cursor-pointer text-sm font-black uppercase tracking-[0.12em]">{q}</summary><p className="mt-3 text-sm text-muted-foreground">Reach out or check the product resources for the latest information.</p></details>)}</section>
      <PathToPurchase />
    </PageShell>
  );
};
export default ProductDetail;
