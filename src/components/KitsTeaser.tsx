"use client";

import AnimatedSection from "./AnimatedSection";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const kits = [
  {
    title: "Dia das Mães",
    period: "Maio",
    description: "Uma homenagem ao amor que aquece. Peças pensadas para celebrar com delicadeza quem cuida.",
  },
  {
    title: "Dia dos Namorados",
    period: "Junho",
    description: "Aromas e formas que traduzem afeto. Um presente que permanece além da data.",
  },
  {
    title: "Dia da Mulher",
    period: "Março",
    description: "Para celebrar presença, força e sensibilidade. Uma coleção que honra o feminino em todas as formas.",
  },
  {
    title: "Páscoa",
    period: "Abril",
    description: "Renovação e leveza em cada detalhe. Kits que convidam ao recomeço com cuidado e intenção.",
  },
  {
    title: "Dia dos Avós",
    period: "Julho",
    description: "Gratidão em forma de presente. Peças que carregam calor, memória e afeto verdadeiro.",
  },
  {
    title: "Primavera · Verão",
    period: "Set — Fev",
    description: "Frescor, florescimento e luz. Aromas e texturas que acompanham o despertar da natureza.",
  },
  {
    title: "Outono · Inverno",
    period: "Mar — Ago",
    description: "Aconchego, profundidade e quietude. Uma coleção para os dias que pedem pausa e presença.",
  },
  {
    title: "Natal · Ano Novo",
    period: "Dezembro",
    description: "Encerrar um ciclo com beleza e começar outro com intenção. Kits para os momentos que marcam.",
  },
  {
    title: "Black Friday",
    period: "Novembro",
    description: "Acesso especial às peças Casa Oro. Uma oportunidade de presentear com significado.",
  },
];

export default function KitsTeaser() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (next: number) => {
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  };

  const prev = () => go(current === 0 ? kits.length - 1 : current - 1);
  const next = () => go(current === kits.length - 1 ? 0 : current + 1);

  const kit = kits[current];

  return (
    <section id="kits" className="relative overflow-hidden bg-moss">

      {/* Decorativos */}
      <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-terracotta/10 pointer-events-none" />
      <div className="absolute -left-20 bottom-0 w-[300px] h-[300px] rounded-full bg-cream/5 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 md:px-6 py-14 md:py-28">

        {/* Header */}
        <AnimatedSection>
          <div className="mb-14">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 text-center md:text-left">
              <div>
                <h2 className="font-sans text-4xl md:text-5xl font-light text-cream tracking-[0.1em] leading-tight">
                  Kits<br />
                  <span className="text-gold-light">Sazonais</span>
                </h2>
                <p className="text-cream/50 font-sans text-[10px] tracking-[0.5em] uppercase mt-3">
                  Datas Especiais
                </p>
              </div>
              <p className="font-sans text-cream/50 text-xs font-light leading-relaxed px-20 md:max-w-xs md:text-right">
                Coleções criadas para cada momento do ano,
                com intenção, beleza e presença.
              </p>
            </div>
            <div className="w-10 h-px bg-terracotta/50 mt-8 mx-auto md:mx-0" />
          </div>
        </AnimatedSection>

        {/* Carrossel */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">

          {/* Foto — em breve */}
          <div className="relative aspect-square max-h-[280px] md:max-h-[380px] lg:max-h-[440px] w-full rounded-2xl bg-cream/5 border border-cream/10 flex items-center justify-center overflow-hidden mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <p className="text-cream/20 font-sans text-[10px] tracking-[0.5em] uppercase">
                  Em breve
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Índice */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
              {kits.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`rounded-full transition-all duration-300 ${i === current ? "w-4 h-1.5 bg-cream/70" : "w-1.5 h-1.5 bg-cream/25 hover:bg-cream/40"}`}
                  aria-label={`Kit ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Conteúdo */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left px-15">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: direction * 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: direction * -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <p className="text-[9px] font-sans tracking-[0.5em] uppercase text-gold-light/70 mb-3">
                  {kit.period}
                </p>
                <h3 className="font-sans text-3xl md:text-4xl font-light text-cream tracking-wide leading-snug mb-5">
                  {kit.title}
                </h3>
                <div className="w-10 h-px bg-terracotta/40 mb-6 mx-auto md:mx-0" />
                <p className="font-sans text-cream/60 text-sm font-light leading-relaxed mb-8">
                  {kit.description}
                </p>

              </motion.div>
            </AnimatePresence>

            {/* Controles */}
            <div className="flex items-center gap-5 mt-10">
              <button
                onClick={prev}
                aria-label="Anterior"
                className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/50 hover:border-cream/50 hover:text-cream transition-all duration-300"
              >
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M13 5H1M5 1L1 5l4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <span className="text-cream/30 font-sans text-[11px] tracking-widest">
                {String(current + 1).padStart(2, "0")} / {String(kits.length).padStart(2, "0")}
              </span>
              <button
                onClick={next}
                aria-label="Próximo"
                className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/50 hover:border-cream/50 hover:text-cream transition-all duration-300"
              >
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
