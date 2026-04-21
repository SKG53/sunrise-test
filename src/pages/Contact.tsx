import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const paths = ["Wholesale", "Retail", "Press", "General"];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", reason: "", message: "" });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); toast.success("Message sent!", { description: "We'll get back to you soon." }); setFormData({ name: "", email: "", reason: "", message: "" }); };
  return <div className="min-h-screen bg-background"><Navbar />
    <section className="px-4 py-20 text-center md:py-28"><p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-primary">01 · Hero</p><h1 className="gradient-text text-5xl font-black uppercase tracking-wider md:text-7xl">Give Us a Buzz</h1></section>
    <section className="px-4 pb-20"><div className="container mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"><form onSubmit={handleSubmit} className="border border-border bg-card p-6 md:p-8"><p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-primary">02 · General Inquiry</p><h2 className="mb-8 text-4xl font-black uppercase tracking-wider">Tell Us Your Story</h2><div className="space-y-6"><div><Label htmlFor="name" className="text-xs font-black uppercase tracking-widest">Name</Label><Input id="name" required value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})} className="mt-2 rounded-none bg-background" /></div><div><Label htmlFor="email" className="text-xs font-black uppercase tracking-widest">Email</Label><Input id="email" type="email" required value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} className="mt-2 rounded-none bg-background" /></div><div><Label htmlFor="reason" className="text-xs font-black uppercase tracking-widest">Reason for Reaching Out</Label><Input id="reason" required value={formData.reason} onChange={(e)=>setFormData({...formData,reason:e.target.value})} className="mt-2 rounded-none bg-background" /></div><div><Label htmlFor="message" className="text-xs font-black uppercase tracking-widest">Message</Label><Textarea id="message" required rows={7} value={formData.message} onChange={(e)=>setFormData({...formData,message:e.target.value})} className="mt-2 rounded-none bg-background" /></div><Button type="submit" className="w-full rounded-none bg-primary py-6 text-primary-foreground">Send →</Button></div></form><div className="space-y-8"><div><p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-primary">03 · Direct Paths</p><h2 className="mb-5 text-4xl font-black uppercase tracking-wider">Or Reach the Right Team</h2><div className="grid gap-3">{paths.map((path)=><button key={path} className="border border-border bg-card p-5 text-left text-sm font-black uppercase tracking-widest hover:border-primary">{path} →</button>)}</div></div><div className="bg-tier-30 p-8 text-primary-foreground"><p className="mb-5 text-xs font-black uppercase tracking-[0.28em]">04 · Location</p><h2 className="text-4xl font-black uppercase tracking-wider">Where We Are</h2><p className="mt-5 text-primary-foreground/80">American heartland roots. National conversation.</p></div></div></div></section>
    <Footer /></div>;
};
export default Contact;
