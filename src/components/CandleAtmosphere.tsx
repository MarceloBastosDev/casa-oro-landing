"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

export default function CandleAtmosphere() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useCountUp(847, 2200, isInView);

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-48 bg-moss overflow-hidden"
    >
      {/* Glow ambiental */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[500px] rounded-full bg-terracotta/10 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">

        {/* Contador */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="mb-12"
        >
          <p className="font-sans text-cream/30 text-[9px] tracking-[0.6em] uppercase mb-4">
            Neste momento
          </p>
          <p className="font-sans text-cream text-5xl sm:text-7xl md:text-9xl font-thin tracking-widest tabular-nums">
            {count.toLocaleString("pt-BR")}
          </p>
          <p className="font-sans text-cream/30 text-[10px] tracking-[0.5em] uppercase mt-4">
            velas acesas
          </p>
        </motion.div>

        {/* Linha divisória */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="w-px h-16 bg-gradient-to-b from-transparent via-terracotta/50 to-transparent mx-auto mb-12 origin-top"
        />

        {/* Citação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.8 }}
        >
          <p className="font-sans text-cream/60 text-lg md:text-2xl font-light leading-relaxed tracking-wide italic">
            "A luz não precisa ser grande<br />para iluminar o que importa."
          </p>
          <p className="font-sans text-cream/20 text-[9px] tracking-[0.5em] uppercase mt-8">
            Casa Oro — Ateliê de Velas e Cerâmica
          </p>
        </motion.div>
      </div>
    </section>
  );
}
