import { useState } from "react";
import Navbar from "@/components/Navbar";
import { PageShell, SectionLabel } from "@/components/WireframeBits";
import { toast } from "sonner";

const paths = ["General Questions", "Wholesale", "Retail", "Press"];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", reason: "", message: "" });
  const submit = (e: React.FormEvent) => { e.preventDefault(); toast.success("Thanks for reaching out."); setFormData({ name: "", email: "", reason: "", message: "" }); };
  return (
    <PageShell>
      <Navbar />
      <section className="site-section"><SectionLabel name="Contact" /><h1 className="site-heading max-w-3xl">Give us a <em className="text-tier-30">buzz</em>.</h1><p className="site-subhead mt-6">Questions, retail inquiries, wholesale conversations, or anything in between — we’re here.</p></section>
      <section className="site-section-tight"><div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]"><div><h2 className="text-2xl font-black uppercase tracking-[0.09em]">WWW.SAVORSUNRISE.COM</h2><p className="mt-5 text-base leading-relaxed text-muted-foreground">Tell us what you’re looking for and the right SUNRISE team member will follow up.</p><div className="mt-8 grid gap-3">{paths.map((path)=><div key={path} className="product-panel text-sm font-black uppercase tracking-[0.12em]">{path}</div>)}</div></div><form onSubmit={submit} className="product-panel"><div className="grid gap-4 md:grid-cols-2"><div><label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">Name</label><input required value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})} className="h-11 w-full rounded-md border border-border bg-background px-3 outline-none" /></div><div><label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">Email</label><input required type="email" value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} className="h-11 w-full rounded-md border border-border bg-background px-3 outline-none" /></div></div><div className="mt-4"><label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">Reason for Reaching Out</label><input required value={formData.reason} onChange={(e)=>setFormData({...formData,reason:e.target.value})} className="h-11 w-full rounded-md border border-border bg-background px-3 outline-none" /></div><div className="mt-4"><label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">Message</label><textarea required value={formData.message} onChange={(e)=>setFormData({...formData,message:e.target.value})} className="h-36 w-full rounded-md border border-border bg-background px-3 py-3 outline-none" /></div><button type="submit" className="wf-btn mt-5">Send</button></form></div></section>
    </PageShell>
  );
};
export default Contact;
