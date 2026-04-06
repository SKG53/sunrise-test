import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon. Thanks for reaching out.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black tracking-widest mb-4 gradient-text">
              Contact
            </h1>
            <p className="font-script text-3xl text-primary">Give us a buzz</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-xs font-bold tracking-widest uppercase">
                Name
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="mt-2 rounded-none border-foreground/20 bg-transparent focus-visible:ring-primary"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-xs font-bold tracking-widest uppercase">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="mt-2 rounded-none border-foreground/20 bg-transparent focus-visible:ring-primary"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-xs font-bold tracking-widest uppercase">
                Message
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="mt-2 rounded-none border-foreground/20 bg-transparent focus-visible:ring-primary"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-sm tracking-widest uppercase font-bold rounded-none"
            >
              Send Message
            </Button>
          </form>

          {/* Social / Locator placeholders */}
          <div className="mt-16 pt-12 border-t border-border text-center">
            <p className="text-foreground/40 text-xs tracking-widest uppercase mb-4">Find Us</p>
            <div className="flex justify-center gap-6">
              {["Instagram", "Facebook", "TikTok"].map((platform) => (
                <span
                  key={platform}
                  className="text-foreground/50 text-sm hover:text-primary transition-colors cursor-pointer"
                >
                  {platform}
                </span>
              ))}
            </div>
            <p className="text-foreground/30 text-xs mt-8 tracking-wide">
              Store locator coming soon
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
