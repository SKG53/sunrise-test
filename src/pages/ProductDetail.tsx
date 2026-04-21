import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { getProductById, getTierByMg, INGREDIENTS } from "@/lib/brandData";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = getProductById(productId) ?? getProductById("10mg-blackberry-lemonade-30mg-cbn")!;
  const tier = getTierByMg(product.tier);
  const related = tier.products.filter((item) => item.id !== product.id).slice(0, 5);

  return <div className="min-h-screen bg-background"><Navbar />
    <section className="px-4 py-6"><div className="container mx-auto text-xs font-black uppercase tracking-widest text-muted-foreground"><Link to="/products">Products</Link> · {tier.label} · {product.name}</div></section>
    <section className="px-4 pb-20"><div className="container mx-auto grid gap-10 lg:grid-cols-2 lg:items-center"><div className={`relative flex min-h-[520px] items-end justify-center ${tier.softClass}`}><img src={product.image} alt={`SUNRISE ${product.flavor} can`} className="h-[480px] w-auto object-contain drop-shadow-2xl" /></div><div><p className={`${tier.colorClass} mb-4 text-xs font-black uppercase tracking-[0.28em]`}>{product.potency}{product.cannabinoids ? ` · +${product.cannabinoids}` : ""}</p><h1 className="text-5xl font-black uppercase tracking-wider md:text-7xl">{product.flavor}</h1><p className="mt-4 text-2xl font-bold text-muted-foreground">{product.notes}</p><p className="mt-8 text-lg font-black">{product.price}</p><div className="mt-8 flex gap-3"><Button className="rounded-none bg-primary text-primary-foreground">Add to Cart →</Button><Link to="/near-you"><Button variant="outline" className="rounded-none">Find Near You</Button></Link></div></div></div></section>
    <section className="grid border-y border-border md:grid-cols-4">{[["Can Size","12 FL OZ"],["Servings Per Can",product.servings],["mg THC / Serving",product.tier/product.servings],[product.cannabinoids ? `${product.cannabinoids.split(' ').at(-1)} / Can` : "Flavor",product.cannabinoids ?? product.flavor]].map(([label,value]) => <div key={label} className="border-border p-8 md:border-r"><p className="text-xs font-black uppercase tracking-widest text-muted-foreground">{label}</p><p className="mt-3 text-3xl font-black uppercase tracking-wider">{value}</p></div>)}</section>
    <section className="px-4 py-20"><div className="container mx-auto grid gap-10 lg:grid-cols-2"><h2 className="text-4xl font-black uppercase tracking-wider">What’s In It</h2><div className="divide-y divide-border border-y border-border">{INGREDIENTS.map((item) => <div key={item} className="py-4 text-sm font-bold uppercase tracking-widest">{item}</div>)}</div></div></section>
    <section className="px-4 py-20"><div className="container mx-auto"><h2 className="mb-8 text-3xl font-black uppercase tracking-wider">Others in {tier.label}</h2><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{related.map((item) => <ProductCard key={item.id} product={item} tier={tier} />)}</div></div></section>
    <Footer /></div>;
};
export default ProductDetail;
