"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const candles = [
  {
    name: "Flor de Laranjeira",
    aroma: "Cítrico & Floral",
    description: "Frescor delicado que ilumina o ambiente com leveza e alegria.",
    price: "R$ 89,00",
    gradient: "from-[#F5DEB3] via-[#FAEBD7] to-[#FFE4B5]",
  },
  {
    name: "Âmbar & Sândalo",
    aroma: "Quente & Amadeirado",
    description: "Profundidade e aconchego para momentos de introspecção.",
    price: "R$ 95,00",
    gradient: "from-[#D2691E]/40 via-[#CD853F]/30 to-[#DEB887]/40",
  },
  {
    name: "Baunilha Negra",
    aroma: "Doce & Envolvente",
    description: "Um abraço aromático que aquece o lar com doçura sofisticada.",
    price: "R$ 89,00",
    gradient: "from-[#8B7355]/30 via-[#D2B48C]/30 to-[#F5DEB3]/40",
  },
  {
    name: "Cedro & Musgo",
    aroma: "Terroso & Verde",
    description: "A calma da floresta traduzida em fragrância.",
    price: "R$ 95,00",
    gradient: "from-[#556B2F]/30 via-[#6B8E23]/20 to-[#8FBC8F]/30",
  },
  {
    name: "Rosa & Patchouli",
    aroma: "Floral & Terroso",
    description: "Feminilidade e força em equilíbrio.",
    price: "R$ 92,00",
    gradient: "from-[#BC8F8F]/30 via-[#D2B48C]/20 to-[#DEB887]/30",
  },
  {
    name: "Canela & Cardamomo",
    aroma: "Especiarias Quentes",
    description: "Energia vibrante que acolhe e reconforta.",
    price: "R$ 89,00",
    gradient: "from-[#A0522D]/30 via-[#CD853F]/20 to-[#DEB887]/30",
  },
];

export default function Collection() {
  return (
    <section id="colecao" className="py-16 md:py-32 bg-cream-dark/30">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-terracotta/60 font-sans text-[10px] tracking-[0.5em] uppercase mb-4">
              Coleção
            </p>
            <h2 className="font-sans text-4xl md:text-5xl font-light text-moss tracking-[0.15em]">
              Nossas Velas
            </h2>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-terracotta to-transparent mx-auto mt-6" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {candles.map((candle, i) => (
            <AnimatedSection key={candle.name} delay={i * 0.1}>
              <div className="group bg-cream rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-terracotta/5 hover:-translate-y-1">
                {/* Product image */}
                <div className="relative aspect-square mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/vela-caixa.jpg"
                    alt={candle.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="text-center">
                  <p className="text-terracotta/50 text-[9px] font-sans tracking-[0.3em] uppercase mb-2">
                    {candle.aroma}
                  </p>
                  <h3 className="font-sans text-2xl text-moss font-medium tracking-wide">
                    {candle.name}
                  </h3>
                  <p className="text-moss/60 text-xs font-sans font-light mt-2 leading-relaxed">
                    {candle.description}
                  </p>
                  <p className="text-[9px] text-terracotta/40 tracking-[0.2em] uppercase mt-3 font-sans">
                    Cera de Soja &middot; Até 60h de queima
                  </p>
                  <div className="w-6 h-px bg-terracotta/20 mx-auto my-3" />
                  <p className="text-terracotta font-sans text-sm font-medium tracking-wider">
                    {candle.price}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
