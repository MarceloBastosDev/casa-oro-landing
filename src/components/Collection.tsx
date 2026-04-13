"use client";

import Image from "next/image";
import { type ReactElement } from "react";
import AnimatedSection from "./AnimatedSection";

const aromaIcons: Record<string, ReactElement> = {
  "Cítrico & Floral": (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2 C10 5, 10 9, 12 12 C14 9, 14 5, 12 2Z" opacity="0.6"/>
      <path d="M2 12 C5 10, 9 10, 12 12 C9 14, 5 14, 2 12Z" opacity="0.6"/>
      <path d="M22 12 C19 10, 15 10, 12 12 C15 14, 19 14, 22 12Z" opacity="0.6"/>
      <path d="M5 5 C7 8, 10 10, 12 12 C10 10, 8 7, 5 5Z" opacity="0.4"/>
      <path d="M19 5 C17 8, 14 10, 12 12 C14 10, 16 7, 19 5Z" opacity="0.4"/>
    </svg>
  ),
  "Quente & Amadeirado": (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 3 L12 18" opacity="0.7"/>
      <path d="M8 7 L12 3 L16 7" opacity="0.6"/>
      <path d="M6 12 Q12 9 18 12" opacity="0.5"/>
      <path d="M7 17 Q12 14 17 17" opacity="0.4"/>
      <path d="M5 21 L19 21" opacity="0.5"/>
    </svg>
  ),
  "Doce & Envolvente": (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 4 C8 4, 5 8, 5 12 C5 17, 8 20, 12 21 C16 20, 19 17, 19 12 C19 8, 16 4, 12 4Z" opacity="0.5"/>
      <path d="M12 4 C12 8, 14 11, 12 14 C10 11, 12 8, 12 4Z" opacity="0.6"/>
      <circle cx="12" cy="16" r="1.5" opacity="0.4"/>
    </svg>
  ),
  "Terroso & Verde": (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 20 L12 10" opacity="0.6"/>
      <path d="M12 10 C9 10, 5 8, 4 4 C8 4, 12 7, 12 10Z" opacity="0.6"/>
      <path d="M12 13 C15 13, 19 11, 20 7 C16 7, 12 10, 12 13Z" opacity="0.5"/>
      <path d="M8 20 L16 20" opacity="0.4"/>
    </svg>
  ),
  "Floral & Terroso": (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="12" r="2.5" opacity="0.7"/>
      <ellipse cx="12" cy="7" rx="2" ry="3" opacity="0.5"/>
      <ellipse cx="12" cy="17" rx="2" ry="3" opacity="0.5"/>
      <ellipse cx="7" cy="12" rx="3" ry="2" opacity="0.5"/>
      <ellipse cx="17" cy="12" rx="3" ry="2" opacity="0.5"/>
      <ellipse cx="8.5" cy="8.5" rx="2" ry="3" transform="rotate(-45 8.5 8.5)" opacity="0.4"/>
      <ellipse cx="15.5" cy="15.5" rx="2" ry="3" transform="rotate(-45 15.5 15.5)" opacity="0.4"/>
    </svg>
  ),
  "Especiarias Quentes": (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 2 L13.8 8.2 L20 8.2 L15 12 L16.8 18.2 L12 14.5 L7.2 18.2 L9 12 L4 8.2 L10.2 8.2 Z" opacity="0.5"/>
    </svg>
  ),
};

const candles = [
  {
    name: "Flor de Laranjeira",
    aroma: "Cítrico & Floral",
    description: "Frescor delicado que ilumina o ambiente com leveza e alegria.",
    price: "R$ 89,00",
  },
  {
    name: "Âmbar & Sândalo",
    aroma: "Quente & Amadeirado",
    description: "Profundidade e aconchego para momentos de introspecção.",
    price: "R$ 95,00",
  },
  {
    name: "Baunilha Negra",
    aroma: "Doce & Envolvente",
    description: "Um abraço aromático que aquece o lar com doçura sofisticada.",
    price: "R$ 89,00",
  },
  {
    name: "Cedro & Musgo",
    aroma: "Terroso & Verde",
    description: "A calma da floresta traduzida em fragrância.",
    price: "R$ 95,00",
  },
  {
    name: "Rosa & Patchouli",
    aroma: "Floral & Terroso",
    description: "Feminilidade e força em equilíbrio.",
    price: "R$ 92,00",
  },
  {
    name: "Canela & Cardamomo",
    aroma: "Especiarias Quentes",
    description: "Energia vibrante que acolhe e reconforta.",
    price: "R$ 89,00",
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
                  {/* Ícone de nota olfativa + aroma */}
                  <div className="flex items-center justify-center gap-1.5 mb-2">
                    <span className="text-terracotta/40">
                      {aromaIcons[candle.aroma]}
                    </span>
                    <p className="text-terracotta/50 text-[9px] font-sans tracking-[0.3em] uppercase">
                      {candle.aroma}
                    </p>
                  </div>

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
