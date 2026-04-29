import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="bg-[#ff6a2a] px-6 py-12 text-slate-950 md:px-20 md:py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[360px_1fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl bg-white p-4 shadow-xl">
          <img className="h-[320px] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=900&auto=format&fit=crop" alt="Equipe trabalhando em arquitetura front-end" />
        </motion.div>
        <div>
          <p className="mb-12 text-lg font-extrabold text-white">Claudio Alvarenga Jr.</p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="max-w-3xl text-5xl font-black leading-tight md:text-7xl">
            Hub de Arquitetura Front-end
          </motion.h1>
          <p className="mt-8 max-w-2xl text-xl font-bold text-white">React + TypeScript + Tailwind + MFEs + Feed em tempo real + Design System + Performance.</p>
        </div>
      </div>
    </section>
  );
}