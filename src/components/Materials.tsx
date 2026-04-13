"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const pillars = [
  {
    title: "Cera de Soja",
    subtitle: "100% natural, queima limpa",
    image: "/images/soy-candle.jpg",
  },
  {
    title: "Cerâmica Artesanal",
    subtitle: "Feita à mão, peça única",
    image: "/images/ceramicaartesanal.png",
  },
  {
    title: "Fragrâncias Naturais",
    subtitle: "Óleos essenciais selecionados",
    image: "/images/fragancia.png",
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
            representa a luz viva não artificial, não agressiva, mas aquela que
            aquece, acolhe e transforma o ambiente de forma sutil e contínua.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.title} delay={0.2 + i * 0.1}>
              <div className="text-center group">
                <div className="flex justify-center mb-6">
                  {p.image ? (
                    <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-md">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="text-terracotta/50 group-hover:text-terracotta transition-colors duration-500">
                      {p.icon}
                    </div>
                  )}
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
