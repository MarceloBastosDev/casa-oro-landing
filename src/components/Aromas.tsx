"use client";

import AnimatedSection from "./AnimatedSection";

const features = [
  {
    title: "Memória",
    text: "Aromas que despertam lembranças e conectam ao que é essencial.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="24" cy="24" r="18" opacity="0.3" />
        <path d="M24 12 C20 18, 16 22, 16 28 C16 33, 20 36, 24 36 C28 36, 32 33, 32 28 C32 22, 28 18, 24 12Z" opacity="0.6" />
        <circle cx="24" cy="26" r="4" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Presença",
    text: "Fragrâncias que ancoram no momento presente e acalmam a mente.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="24" cy="24" r="18" opacity="0.3" />
        <path d="M24 8 L24 40" opacity="0.4" />
        <path d="M8 24 L40 24" opacity="0.4" />
        <circle cx="24" cy="24" r="8" opacity="0.5" />
        <circle cx="24" cy="24" r="3" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: "Transformação",
    text: "Cada vela acesa transforma o espaço e a energia do ambiente.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="24" cy="24" r="18" opacity="0.3" />
        <path d="M18 32 C18 24, 24 20, 24 12 C24 20, 30 24, 30 32" opacity="0.5" />
        <path d="M14 36 L34 36" opacity="0.3" />
        <path d="M20 36 L20 40" opacity="0.3" />
        <path d="M28 36 L28 40" opacity="0.3" />
      </svg>
    ),
  },
];

export default function Aromas() {
  return (
    <section id="aromas" className="py-16 md:py-32 bg-moss text-cream">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-cream/30 font-sans text-[10px] tracking-[0.5em] uppercase mb-4">
              A Arte dos Aromas
            </p>
            <h2 className="font-sans text-4xl md:text-5xl font-light tracking-[0.15em]">
              Cada fragrância é uma história
            </h2>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-cream/30 to-transparent mx-auto mt-6" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-center text-cream/60 font-sans text-sm md:text-base font-light leading-[1.9] max-w-3xl mx-auto mb-20">
            Na Casa Oro, cada aroma é cuidadosamente selecionado para despertar
            sensações, memórias e experiências. Não criamos apenas velas —
            criamos portais sensoriais que transformam o ambiente e convidam à
            pausa consciente.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={0.2 + i * 0.1}>
              <div className="text-center group">
                <div className="text-cream/40 group-hover:text-cream/70 transition-colors duration-500 flex justify-center mb-6">
                  {f.icon}
                </div>
                <h3 className="font-sans text-2xl font-light tracking-[0.15em] mb-4">
                  {f.title}
                </h3>
                <div className="w-6 h-px bg-cream/20 mx-auto mb-4" />
                <p className="text-cream/50 font-sans text-xs font-light leading-relaxed tracking-wide">
                  {f.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
