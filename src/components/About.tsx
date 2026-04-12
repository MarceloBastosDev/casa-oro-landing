"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="sobre" className="relative bg-cream">
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-16 md:pt-12 md:pb-24">
        <div
          className="grid md:grid-cols-[1fr_1fr_1.6fr] gap-5 md:gap-6 items-start"
          style={{
            paddingLeft: "calc((min(52vw, 580px) + 52px + 110px) * 0.759 + 24px)",
          }}
        >

          {/* Col 1 — Ceramic pot (bottom-right crop of brand collage) */}
          <AnimatedSection delay={0.1}>
            <div className="relative aspect-[3/4] overflow-hidden rounded shadow-md">
              <div
                className="absolute inset-0"
                style={{ transform: "scale(2.1)", transformOrigin: "100% 100%" }}
              >
                <Image
                  src="/images/brand-collage.jpg"
                  alt="Cerâmica Casa Oro"
                  fill
                  className="object-cover object-[right_bottom]"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Col 2 — Soy Candle */}
          <AnimatedSection delay={0.15}>
            <div className="relative aspect-[3/4] overflow-hidden rounded shadow-md">
              <Image
                src="/images/soy-candle.jpg"
                alt="Soy Candle Casa Oro"
                fill
                className="object-cover object-center"
              />
            </div>
          </AnimatedSection>

          {/* Col 3 — text */}
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
