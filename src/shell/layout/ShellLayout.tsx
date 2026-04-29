
import { Sparkles } from "lucide-react";
import { TopBar } from "@/shell/navigation/TopBar";
import { Hero } from "./Hero";
import { MfeRegistrySection } from "@/shell/mfe-registry/MfeRegistrySection";


export function ShellLayout({ children }: { children?: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#f3e4dc] font-sans text-slate-950">
      <TopBar />

      <Hero />

      <MfeRegistrySection />

      <div className="mx-auto max-w-6xl px-6 py-10">
        {children}
      </div>

      <div className="fixed bottom-5 right-5 hidden rounded-full bg-white px-4 py-2 text-xs font-black text-slate-950 shadow-xl md:block">
        <span className="inline-flex items-center gap-2">
          <Sparkles size={14} />
          Shell pronto para MFEs
        </span>
      </div>
    </main>
  );
}