import { useState } from "react";
import { Button } from "@/components/ui/button";
import Wordmark from "@/components/Wordmark";

const AgeGate = () => {
  const [status, setStatus] = useState(() => localStorage.getItem("sunrise-age-ok") === "true" ? "accepted" : "pending");
  const [birthdate, setBirthdate] = useState({ month: "", day: "", year: "" });

  if (status === "accepted") return null;

  const enter = () => {
    localStorage.setItem("sunrise-age-ok", "true");
    setStatus("accepted");
  };

  if (status === "declined") {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground px-4 text-background">
        <div className="max-w-xl text-center">
          <button onClick={() => setStatus("pending")} className="mb-12 text-xs font-black uppercase tracking-widest text-background/60">← Back</button>
          <Wordmark base={54} />
          <h2 className="mt-10 text-3xl font-black uppercase tracking-widest md:text-5xl">You must be 21 or older to visit this site.</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-2xl text-center">
        <Wordmark base={64} />
        <div className="mx-auto mt-12 grid max-w-md grid-cols-3 gap-3">
          <input aria-label="Month" placeholder="MM" value={birthdate.month} onChange={(e) => setBirthdate({ ...birthdate, month: e.target.value })} className="border border-border bg-card px-4 py-4 text-center text-sm font-black uppercase tracking-widest outline-none focus:border-primary" />
          <input aria-label="Day" placeholder="DD" value={birthdate.day} onChange={(e) => setBirthdate({ ...birthdate, day: e.target.value })} className="border border-border bg-card px-4 py-4 text-center text-sm font-black uppercase tracking-widest outline-none focus:border-primary" />
          <input aria-label="Year" placeholder="YYYY" value={birthdate.year} onChange={(e) => setBirthdate({ ...birthdate, year: e.target.value })} className="border border-border bg-card px-4 py-4 text-center text-sm font-black uppercase tracking-widest outline-none focus:border-primary" />
        </div>
        <div className="mt-6 flex justify-center gap-3">
          <Button onClick={enter} className="rounded-none bg-primary px-10 text-primary-foreground hover:bg-primary/90">Enter</Button>
          <Button onClick={() => setStatus("declined")} variant="outline" className="rounded-none px-10">Exit</Button>
        </div>
        <p className="mx-auto mt-8 max-w-lg text-xs leading-relaxed text-muted-foreground">You must be 21 or older to enter. SUNRISE™ products contain hemp-derived Delta-9 THC. Federally compliant. Consume responsibly.</p>
      </div>
    </div>
  );
};

export default AgeGate;
