import { useState } from "react";
import Wordmark from "@/components/Wordmark";
import { Line } from "@/components/WireframeBits";

const AgeGate = () => {
  const [status, setStatus] = useState(() => localStorage.getItem("sunrise-age-ok") === "true" ? "accepted" : "pending");
  const [birthdate, setBirthdate] = useState({ month: "", day: "", year: "" });
  if (status === "accepted") return null;
  const enter = () => { localStorage.setItem("sunrise-age-ok", "true"); setStatus("accepted"); };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/85 px-4">
      <div className="w-full max-w-[460px] rounded-md border border-foreground bg-background px-8 py-9 text-center">
        <Wordmark base={32} />
        {status === "declined" ? <><Line kind="head" width="80" className="mx-auto mt-5" /><Line width="80" className="mx-auto bg-border" /><Line width="60" className="mx-auto bg-border" /><button onClick={() => setStatus("pending")} className="wf-btn wf-btn-ghost mt-6">← Back</button><div className="mt-5 border-t border-border pt-4 text-[7.5px] leading-relaxed text-muted-foreground">You must be 21 or older to visit this site.</div></> : <><Line kind="head" width="70" className="mx-auto mt-5" /><Line width="80" className="mx-auto bg-border" /><Line width="60" className="mx-auto bg-border" /><div className="my-5 grid grid-cols-[1fr_1fr_1.4fr] gap-2">{[["month","MM"],["day","DD"],["year","YYYY"]].map(([key,label]) => <input key={key} aria-label={label} placeholder={label} value={birthdate[key as keyof typeof birthdate]} onChange={(e)=>setBirthdate({...birthdate,[key]:e.target.value})} className="rounded border border-border bg-card px-2 py-2.5 text-center text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground outline-none" />)}</div><div className="flex justify-center gap-2"><button onClick={enter} className="wf-btn">Enter</button><button onClick={() => setStatus("declined")} className="wf-btn wf-btn-ghost">Exit</button></div><div className="mt-5 border-t border-border pt-4 text-[7.5px] leading-relaxed text-muted-foreground">You must be 21 or older to enter. SUNRISE™ products contain hemp-derived Delta-9 THC. Federally compliant. Consume responsibly.</div></>}
      </div>
    </div>
  );
};
export default AgeGate;
