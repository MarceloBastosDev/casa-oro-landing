"use client";

import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  return (
    <section id="contato" className="py-16 md:py-32 bg-moss text-cream">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-cream/30 font-sans text-[10px] tracking-[0.5em] uppercase mb-4">
              Contato
            </p>
            <h2 className="font-sans text-4xl md:text-5xl font-light tracking-[0.15em]">
              Fale Conosco
            </h2>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-cream/30 to-transparent mx-auto mt-6" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start md:items-center">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <div>
                <p className="text-cream/40 text-[10px] font-sans tracking-[0.3em] uppercase mb-2">
                  WhatsApp
                </p>
                <p className="text-cream/80 font-sans text-sm font-light tracking-wide">
                  (51) 9 0000-0000
                </p>
              </div>
              <div>
                <p className="text-cream/40 text-[10px] font-sans tracking-[0.3em] uppercase mb-2">
                  E-mail
                </p>
                <p className="text-cream/80 font-sans text-sm font-light tracking-wide">
                  contato@casaoro.com
                </p>
              </div>
              <div>
                <p className="text-cream/40 text-[10px] font-sans tracking-[0.3em] uppercase mb-2">
                  Endereço
                </p>
                <p className="text-cream/80 font-sans text-sm font-light tracking-wide leading-relaxed">
                  Rua João Cristiano Scheffer Filho, 368
                  <br />
                  Centro — Capão da Canoa/RS
                </p>
              </div>
              <div>
                <p className="text-cream/40 text-[10px] font-sans tracking-[0.3em] uppercase mb-2">
                  Redes
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-cream/60 hover:text-cream transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  <span className="font-sans text-xs tracking-wider">@casaoro</span>
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="text-center md:text-left">
              <p className="text-cream/50 font-sans text-sm font-light leading-[1.9] mb-8">
                Quer conhecer nossas peças ou encomendar algo especial? Entre em
                contato pelo WhatsApp. Cada peça é feita com intenção, e
                ficaremos felizes em criar algo único para o seu lar.
              </p>
              <a
                href="https://wa.me/5551900000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 rounded-full text-sm font-sans tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/20"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Fale Conosco
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
