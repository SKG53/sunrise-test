import { useState } from "react";
import { Mail, MapPin, Store } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const inquiryTypes = [
  { icon: Store, title: "Retail", text: "Bring SUNRISE™ into your shop, bar, or bottle program." },
  { icon: MapPin, title: "Distribution", text: "Connect with our team for market and territory inquiries." },
  { icon: Mail, title: "General", text: "Questions about products, flavors, or brand partnerships." },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent!", {
      description: "We'll get back to you soon. Thanks for reaching out.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <h1 className="gradient-text mb-4 text-4xl font-black tracking-widest md:text-6xl">Contact</h1>
            <p className="font-script mb-8 text-4xl text-primary">Give us a buzz</p>
            <p className="mb-10 max-w-md text-sm leading-relaxed text-muted-foreground">
              For wholesale, retail, distribution, and general inquiries, send us a note and the SUNRISE™ team will follow up.
            </p>
            <div className="grid gap-4">
              {inquiryTypes.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4 border border-border bg-card p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-sm font-black tracking-widest">{item.title}</h2>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="border border-border bg-card p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest">Name</Label>
                <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="mt-2 rounded-none border-foreground/20 bg-background focus-visible:ring-primary" />
              </div>
              <div>
                <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest">Email</Label>
                <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="mt-2 rounded-none border-foreground/20 bg-background focus-visible:ring-primary" />
              </div>
              <div>
                <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest">Message</Label>
                <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={7} className="mt-2 rounded-none border-foreground/20 bg-background focus-visible:ring-primary" />
              </div>
              <Button type="submit" className="w-full rounded-none bg-primary py-6 text-sm font-bold uppercase tracking-widest text-primary-foreground hover:bg-primary/90">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
