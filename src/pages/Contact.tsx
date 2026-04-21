import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Line, PageShell, SectionLabel } from "@/components/WireframeBits";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", reason: "", message: "" });
  const submit = (e: React.FormEvent) => { e.preventDefault(); toast.success("Message sent!"); setFormData({ name: "", email: "", reason: "", message: "" }); };
  return (
    <PageShell>
      <Navbar />
      <section className="wf-section-roomy"><SectionLabel tag="01 · Hero" name="Give Us a Buzz" /><h1 className="max-w-2xl text-[44px] font-black uppercase leading-tight tracking-wider md:text-[66px]">Give Us a Buzz</h1></section>
      <section className="wf-section"><SectionLabel tag="02 · General Inquiry" name="Tell Us Your Story" /><form onSubmit={submit}><div className="wf-zone-row"><div><label className="mb-1 block text-[8px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Name</label><input required value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})} className="h-9 w-full rounded border border-border bg-card/60 px-3 outline-none" /></div><div><label className="mb-1 block text-[8px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Email</label><input required type="email" value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} className="h-9 w-full rounded border border-border bg-card/60 px-3 outline-none" /></div></div><div className="mt-3.5"><label className="mb-1 block text-[8px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Reason for Reaching Out</label><input required value={formData.reason} onChange={(e)=>setFormData({...formData,reason:e.target.value})} className="h-9 w-full rounded border border-border bg-card/60 px-3 outline-none" /></div><div className="mt-3.5"><label className="mb-1 block text-[8px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Message</label><textarea required value={formData.message} onChange={(e)=>setFormData({...formData,message:e.target.value})} className="h-[100px] w-full rounded border border-border bg-card/60 px-3 py-2 outline-none" /></div><button type="submit" className="wf-btn mt-3">Send →</button></form></section>
      <section className="wf-section"><SectionLabel tag="03 · Direct Paths" name="Or Reach the Right Team" /><div className="wf-zone-row">{[40,50,40,60].map((w,i)=><div key={i} className="wf-zone"><Line kind="sub" width={String(w)} /><Line width="80" /><Line kind="caption" width="40" className="bg-muted-foreground/60" /></div>)}</div></section>
      <section className="wf-section"><SectionLabel tag="04 · Location" name="Where We Are" /><Line kind="head" width="60" /><Line width="70" className="mt-2.5" /><Line width="50" /></section>
    </PageShell>
  );
};
export default Contact;
