"use client";

import AnimatedSection from "./AnimatedSection";

export default function Aromas() {
  return (
    <section id="aromas" className="py-14 md:py-32 bg-moss text-cream">
      <div className="max-w-3xl mx-auto mb-8 px-20 md:px-6 text-center">

        <AnimatedSection>
          <p className="text-cream/30 font-sans text-[10px] tracking-[0.5em] uppercase mb-6">
            A Arte dos Aromas
          </p>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent mx-auto mb-12" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="font-sans text-cream/80 text-base md:text-lg font-light leading-[2] tracking-wide mb-8">
            Um aroma não ocupa espaço. Ele o transforma.
            Antes mesmo de perceber, algo muda — a respiração
            acomoda, o tempo desacelera, o ambiente ganha uma
            camada invisível que só o olfato sabe nomear.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="font-sans text-cream/50 text-sm md:text-base font-light leading-[2] tracking-wide mb-8">
            Na Casa Oro, cada fragrância é escolhida com a mesma
            intenção com que se escolhe uma peça de cerâmica: pela
            permanência. Não queremos aromas que impressionam por
            um instante. Queremos os que ficam na memória, na
            pele, no ar de um cômodo horas depois que a vela foi apagada.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="font-sans text-cream/50 text-sm md:text-base font-light leading-[2] tracking-wide">
            Trabalhamos com óleos essenciais selecionados, combinados
            em proporções que respeitam a natureza de cada nota.
            O resultado são fragrâncias que não perfumam — habitam.
          </p>
        </AnimatedSection>

      </div>
    </section>
  );
}
