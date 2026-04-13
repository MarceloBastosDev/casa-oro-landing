"use client";

import AnimatedSection from "./AnimatedSection";

const pillars = [
  {
    title: "Cera de Soja",
    subtitle: "100% natural, queima limpa",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="0.8">
        <ellipse cx="24" cy="34" rx="14" ry="6" opacity="0.3" />
        <path d="M24 8 C20 16, 14 20, 14 28 C14 34, 18 38, 24 38 C30 38, 34 34, 34 28 C34 20, 28 16, 24 8Z" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Cerâmica Artesanal",
    subtitle: "Feita à mão, peça única",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="0.8">
        <path d="M16 12 C14 12, 12 16, 12 22 L12 32 C12 36, 16 40, 24 40 C32 40, 36 36, 36 32 L36 22 C36 16, 34 12, 32 12" opacity="0.4" />
        <ellipse cx="24" cy="12" rx="8" ry="3" opacity="0.3" />
        <path d="M18 22 Q24 26 30 22" opacity="0.2" />
      </svg>
    ),
  },
  {
    title: "Fragrâncias Naturais",
    subtitle: "Óleos essenciais selecionados",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="0.8">
        <path d="M24 40 L24 20" opacity="0.3" />
        <path d="M24 20 C20 16, 16 12, 18 8 C20 4, 24 6, 24 10 C24 6, 28 4, 30 8 C32 12, 28 16, 24 20Z" opacity="0.4" />
        <path d="M18 28 C16 26, 12 28, 14 32" opacity="0.3" />
        <path d="M30 24 C32 22, 36 24, 34 28" opacity="0.3" />
      </svg>
    ),
  },
];

export default function Materials() {
  return (
    <section className="py-16 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="font-sans text-4xl md:text-5xl font-light text-moss tracking-[0.15em]">
              Materiais & Significado
            </h2>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-terracotta to-transparent mx-auto mt-6" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-center text-moss/70 font-sans text-sm md:text-base font-light leading-[1.9] max-w-3xl mx-auto mb-20">
            Na Casa Oro, a matéria é respeitada em seu estado mais honesto. A
            cerâmica carrega a memória da terra, do fogo e do tempo. A vela
            representa a luz viva — não artificial, não agressiva, mas aquela que
            aquece, acolhe e transforma o ambiente de forma sutil e contínua.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.title} delay={0.2 + i * 0.1}>
              <div className="text-center group">
                <div className="text-terracotta/50 group-hover:text-terracotta transition-colors duration-500 flex justify-center mb-6">
                  {p.icon}
                </div>
                <h3 className="font-sans text-xl md:text-2xl text-moss font-medium tracking-wide mb-2">
                  {p.title}
                </h3>
                <p className="text-moss/50 font-sans text-xs font-light tracking-wider">
                  {p.subtitle}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
