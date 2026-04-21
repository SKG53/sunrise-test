import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Line, PageShell, PathToPurchase, SectionLabel } from "@/components/WireframeBits";
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
      <div className="relative border-b border-border px-5 py-3 text-[8px] font-semibold uppercase tracking-[0.16em] text-muted-foreground md:px-8"><div className="wf-section-tag">01 · Breadcrumb</div><Link to="/products">Products</Link> · {tier.label} · {product.name}</div>
      <section className="wf-product-hero">
        <div className="wf-section-tag">02 · Product Hero</div>
        <div className="wf-product-can-zone"><img src={product.image} alt={`SUNRISE ${product.flavor} can`} className="h-[390px] w-auto object-contain drop-shadow-2xl" /></div>
        <div className="pt-2.5"><div className={`${tier.colorClass} mb-3.5 inline-block rounded-full border px-3 py-1 text-[8px] font-bold uppercase tracking-[0.16em] ${tier.borderClass} ${tier.softClass}`}>{product.potency}{product.cannabinoids ? ` · +${product.cannabinoids}` : ""}</div><h1 className={`${tier.colorClass} mb-3 text-[42px] font-black uppercase leading-[0.95] tracking-normal`}>{product.flavor}</h1><span className="inline-block rounded-full border-2 border-foreground px-3 py-1 text-[8px] font-bold uppercase tracking-[0.16em]">{product.notes}</span><Line width="90" className="mt-3.5" /><Line width="80" /><Line width="60" className="mb-4" /><div className="mb-3.5 text-[13px] font-black tracking-wider">{product.price}</div><div className="flex flex-wrap gap-2"><span className="wf-btn">Add to Cart →</span><Link to="/near-you" className="wf-btn wf-btn-ghost">Find Near You</Link></div></div>
      </section>
      <section className="wf-stat-strip"><div className="wf-section-tag">03 · Stat Strip</div>{[["12","Can Size"],[String(product.servings),"Servings Per Can"],[String(product.tier/product.servings),"mg THC / Serving"],[product.cannabinoids ? product.cannabinoids.replace(/MG /, "") : product.flavor, `${cannabinoid} / Can`]].map(([num,label]) => <div key={label}><div className="wf-stat-num">{num}</div><div className="wf-stat-label">{label}</div></div>)}</section>
      <section className="wf-section"><SectionLabel tag="04 · What's In It" name="Ingredients" /><div className="wf-zone-row"><div>{INGREDIENTS.slice(0,4).map((item)=><div key={item} className="wf-ingredient-row"><div className="wf-ingredient-name">{item}</div><Line width="90" /></div>)}</div><div>{INGREDIENTS.slice(4).map((item)=><div key={item} className="wf-ingredient-row"><div className="wf-ingredient-name">{item}</div><Line width="80" /></div>)}</div></div></section>
      <section className="wf-section"><SectionLabel tag="05 · Other Flavors in Tier" name={`Others in ${tier.label}`} /><div className="grid gap-2.5 md:grid-cols-5">{related.map((item)=><Link to={`/products/${item.id}`} key={item.id} className="flex h-[120px] flex-col justify-between rounded border border-border bg-card/60 p-2"><div className="flex h-[70px] items-center justify-center rounded bg-muted"><img src={item.image} alt={`${item.flavor} can`} className="h-16 w-auto object-contain" /></div><div className="text-center text-[6px] font-bold uppercase tracking-wider text-muted-foreground">{item.flavor}</div></Link>)}</div></section>
      <section className="wf-section"><SectionLabel tag="06 · FAQ" name="FAQ" />{[70,80,60,70].map((w,i)=><div key={i} className="flex items-center justify-between border-b border-border py-3.5"><Line kind="sub" width={String(w)} /><span className="text-sm font-bold text-muted-foreground">+</span></div>)}</section>
      <PathToPurchase tag="07 · Path to Purchase" />
    </PageShell>
  );
};
export default ProductDetail;
