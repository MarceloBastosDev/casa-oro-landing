"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

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
  const count = useCountUp(10, 2200, isInView);

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-48 overflow-hidden"
    >
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <Image
          src="/images/velas.png"
          alt="Velas Casa Oro"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-moss/85" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">

        {/* Contador */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="mb-12"
        >
          <p className="font-bold text-cream/30 text-[9px] tracking-[0.6em] uppercase mb-4">
            Neste momento
          </p>
          <p className="font-sans text-cream text-7xl sm:text-7xl md:text-9xl font-thin tracking-widest tabular-nums">
            {count.toLocaleString("pt-BR")}
          </p>
          <p className="font-bold text-cream/30 text-[10px] tracking-[0.5em] uppercase mt-4">
            velas foram acesas
          </p>
        </motion.div>

        {/* Linha divisória */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="h-px w-32 bg-gradient-to-r from-transparent via-cream/60 to-transparent mx-auto mb-12"
        />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="space-y-6"
        >
          <p className="font-sans text-cream/70 text-lg md:text-2xl font-light leading-relaxed tracking-wide">
            Faça parte dessa história.<br />
            <span className="text-cream/40 text-base">Garanta a sua agora.</span>
          </p>
          <a
            href="https://wa.me/555182114164"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-cream/20 hover:border-cream/50 text-cream/70 hover:text-cream px-8 py-4 rounded-full text-sm font-sans tracking-[0.2em] uppercase transition-all duration-500 hover:bg-cream/5"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar com a Casa Oro
          </a>
        </motion.div>
      </div>
    </section>
  );
}
