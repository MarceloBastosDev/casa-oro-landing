"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

export default function About() {

  return (
    <section
      id="sobre"
      className="relative bg-cream pt-8 pb-12 md:pt-40 md:pb-40"
    >
      {/* Wrapper com paddingLeft apenas em desktop para limpar o badge */}
      <div className="px-5 md:pr-[15vw]" style={{ paddingLeft: "max(1.25rem, var(--content-left))" }}>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.8fr] gap-6 md:gap-7 items-stretch">

        {/* Col 1 — Pote cerâmico (quadrante inf-dir do brand-collage) */}
        <AnimatedSection delay={0.1} className="h-full">
          <div className="relative h-full min-h-[240px] overflow-hidden rounded shadow-md">
            <Image
              src="/images/bitmap.png"
              alt="Cerâmica Casa Oro"
              fill
              className="object-cover object-center"
            />
          </div>
        </AnimatedSection>

        {/* Col 2 — Soy Candle */}
        <AnimatedSection delay={0.15} className="h-full">
          <div className="relative h-full min-h-[240px] overflow-hidden rounded shadow-md">
            <Image
              src="/images/soy-candle.jpg"
              alt="Soy Candle Casa Oro"
              fill
              className="object-cover object-center"
            />
          </div>
        </AnimatedSection>

        {/* Col 3 — Texto */}
        <AnimatedSection delay={0.2}>
          <div className="space-y-3 pt-1">
            <h2 className="font-sans text-lg md:text-xl font-semibold text-moss tracking-wide">
              Essência
            </h2>
            <p className="font-sans text-moss/80 text-[12.5px] md:text-[13px] font-light leading-[1.85] tracking-wide">
              Casa Oro é a celebração do essencial elevado à sua forma mais
              pura. Uma marca que nasce do encontro entre tempo, matéria e
              intenção, criando objetos que não apenas ocupam o espaço, mas
              qualificam a experiência de habitar. Velas aromáticas e peças
              em cerâmica são concebidas como extensões do lar não como
              decoração passageira, mas como presenças silenciosas, que
              ancoram o ambiente, organizam a energia e convidam à pausa
              consciente.
            </p>
            <div className="space-y-0.5 pt-1">
              {[
                "Nada é supérfluo.",
                "Nada é feito para chamar atenção.",
                "Tudo existe porque precisa existir.",
                "Casa Oro não segue tendências.",
                "Ela permanece.",
              ].map((line) => (
                <p
                  key={line}
                  className="font-sans text-moss text-[12px] md:text-[13px] font-semibold leading-[1.7]"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
      </div>
    </section>
  );
}
