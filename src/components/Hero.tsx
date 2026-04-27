"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Coleções", href: "#colecao" },
  { label: "Kits", href: "#kits" },
  { label: "Nós", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 600], [0, 110]);

  return (
    <section id="inicio" className="relative overflow-visible" ref={heroRef}>

      {/* ── MOBILE: Fundo verde com logo centralizada (< 768px) ────────── */}
      <div className="md:hidden relative h-[60vw] min-h-[240px] max-h-[380px] bg-moss flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-[160px] h-[160px] sm:w-[200px] sm:h-[200px]"
        >
          <Image
            src="/images/logo-vertical.png"
            alt="Casa Oro — Ateliê Velas e Cerâmica"
            fill
            className="object-contain"
            style={{ filter: "brightness(0) saturate(100%) invert(84%) sepia(12%) saturate(380%) hue-rotate(8deg) brightness(95%)" }}
            priority
          />
        </motion.div>
      </div>

      {/* ── DESKTOP: Hero image com parallax + badge (≥ 768px) ────────── */}
      <div className="hidden md:block">
        {/* Hero image com parallax */}
        <div className="relative h-[52vw] min-h-[320px] max-h-[580px] overflow-hidden">
          <motion.div className="absolute inset-0 scale-110" style={{ y: parallaxY }}>
            <Image
              src="/images/fundo.png"
              alt="Cerâmica artesanal Casa Oro"
              fill
              className="object-cover hero-bg-image"
              priority
            />
          </motion.div>
        </div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hero-badge absolute -top-14 z-20 pointer-events-none"
          style={{ left: "var(--content-left)", top: "-60px" }}
        >
          <Image
            src="/images/badge2.png"
            alt="Casa Oro — Ateliê Velas e Cerâmica"
            fill
            className="object-contain object-top"
            priority
          />
        </motion.div>

        {/* Terracotta nav bar */}
        <nav className="relative bg-terracotta z-10 h-[52px]">
          <div
            className="flex items-center justify-center gap-10 h-full"
            style={{
              paddingLeft: "calc((min(52vw, 580px) + 52px + 72px) * 0.759 + 8px)",
              paddingRight: "3%",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-cream/90 hover:text-cream font-sans text-[11px] md:text-[12px] tracking-[0.3em] uppercase transition-colors duration-300 whitespace-nowrap font-light"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

      </div>

    </section>
  );
}
