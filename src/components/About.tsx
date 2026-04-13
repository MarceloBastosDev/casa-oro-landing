"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  /* Badge width from the LEFT edge of the viewport:
     badgeHeight = hero(capped 580) + nav(52) + overflow(110)
     badgeWidth  = badgeHeight × 0.759  */
  const badgePL =
    "calc((min(52vw, 0px) + 52px + 10px) * 0.759 + 40px)";

  return (
    <section
      id="sobre"
      className="relative bg-cream px-5 pt-8 pb-12 md:pt-16 md:pb-24"
      style={{ paddingLeft: undefined, paddingRight: undefined }}
    >
      {/* Wrapper com paddingLeft apenas em desktop para limpar o badge */}
      <div
        className="md:pr-[4vw]"
        style={{ paddingLeft: "clamp(1.25rem, 8vw, calc((min(52vw, 580px) + 52px + 20px) * 0.759 + 40px))" }}
      >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_1fr_1.8fr] gap-4 md:gap-7 items-start">

        {/* Col 1 — Pote cerâmico (quadrante inf-dir do brand-collage) */}
        <AnimatedSection delay={0.1}>
          <div className="relative aspect-[3/3] overflow-hidden rounded shadow-md">
            <div className="absolute inset-0">
              <Image
                src="/images/bitmap.png"
                alt="Cerâmica Casa Oro"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Col 2 — Soy Candle */}
        <AnimatedSection delay={0.15}>
          <div className="relative aspect-[3/3] overflow-hidden rounded shadow-md">
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
