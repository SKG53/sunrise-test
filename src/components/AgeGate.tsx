import { useState } from "react";
import Wordmark from "@/components/Wordmark";

const AgeGate = () => {
  const [status, setStatus] = useState(() => sessionStorage.getItem("sunrise-age-ok") === "true" ? "accepted" : "pending");
  if (status === "accepted") return null;
  const enter = () => { sessionStorage.setItem("sunrise-age-ok", "true"); setStatus("accepted"); };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 px-4">
      <div className="w-full max-w-[460px] rounded-md border border-border bg-background px-8 py-10 text-center">
        <Wordmark base={48} />
        {status === "declined" ? <><h2 className="mt-8 text-2xl font-black uppercase tracking-[0.09em]">You must be 21 or older to visit this site.</h2><button onClick={() => setStatus("pending")} className="wf-btn wf-btn-ghost mt-7">Back</button></> : <><h2 className="mt-8 text-3xl font-black uppercase tracking-[0.09em]">Are you 21 or older?</h2><div className="mt-7 flex justify-center gap-3"><button onClick={enter} className="wf-btn">Yes, I’m 21+</button><button onClick={() => setStatus("declined")} className="wf-btn wf-btn-ghost">No</button></div><p className="mt-7 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">SUNRISE™ products contain hemp-derived Delta-9 THC. Must be 21+ to purchase. Consume responsibly.</p></>}
      </div>
    </div>
  );
};
export default AgeGate;
