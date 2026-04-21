import { useState } from "react";
import Navbar from "@/components/Navbar";
import { PageShell, SectionLabel } from "@/components/WireframeBits";
import { toast } from "sonner";
import { BRAND } from "@/lib/brandData";

const paths = [["General Questions","For product, purchase, and brand questions."],["Wholesale","For retailers and distribution conversations."],["Retail","For shops interested in carrying SUNRISE."],["Press","For media, partnerships, and brand inquiries."]];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", reason: "", message: "" });
  const submit = (e: React.FormEvent) => { e.preventDefault(); toast.success("Thanks for reaching out."); setFormData({ name: "", email: "", reason: "", message: "" }); };
  return (
    <PageShell>
      <Navbar />
      <section className="site-section"><SectionLabel name="Give Us a Buzz" /><h1 className="site-heading max-w-3xl">Tell us your story.</h1><p className="site-subhead mt-6">Questions, retail inquiries, wholesale conversations, or anything in between — we’re here.</p></section>
      <section className="site-section-tight"><SectionLabel name="General Inquiry" /><form onSubmit={submit} className="product-panel"><div className="grid gap-4 md:grid-cols-2"><div><label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">Name</label><input required value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})} className="h-11 w-full rounded-md border border-border bg-background px-3 outline-none" /></div><div><label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">Email</label><input required type="email" value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} className="h-11 w-full rounded-md border border-border bg-background px-3 outline-none" /></div></div><div className="mt-4"><label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">Reason for Reaching Out</label><input required value={formData.reason} onChange={(e)=>setFormData({...formData,reason:e.target.value})} className="h-11 w-full rounded-md border border-border bg-background px-3 outline-none" /></div><div className="mt-4"><label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">Message</label><textarea required value={formData.message} onChange={(e)=>setFormData({...formData,message:e.target.value})} className="h-36 w-full rounded-md border border-border bg-background px-3 py-3 outline-none" /></div><button type="submit" className="wf-btn mt-5">Send →</button></form></section>
      <section className="site-section"><SectionLabel name="Or Reach the Right Team" /><div className="direct-path-grid">{paths.map(([title,body])=><div key={title} className="product-panel"><h2 className="text-sm font-black uppercase tracking-[0.12em] text-primary">{title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p></div>)}</div></section>
      <section className="site-section"><SectionLabel name="Where We Are" /><h2 className="site-heading max-w-3xl">{BRAND.url}</h2><p className="site-subhead mt-5">SUNRISE Beverage Company · Route 66 roots · made in the USA.</p></section>
    </PageShell>
  );
};
export default Contact;
