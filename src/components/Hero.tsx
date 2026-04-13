"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Presentes", href: "#colecao" },
  { label: "Coleções", href: "#colecao" },
  { label: "Nós", href: "#sobre" },
  { label: "Contatos", href: "#contato" },
];

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 600], [0, 110]);

  return (
    <section id="inicio" className="relative overflow-visible" ref={heroRef}>

      {/* ── Hero image com parallax ────────────────────────────────────── */}
      <div className=" relative h-[52vw] min-h-[320px] max-h-[580px] overflow-hidden">
        <motion.div className="absolute inset-0 scale-110" style={{ y: parallaxY }}>
          <Image
            src="/images/fundo.png"
            alt="Cerâmica artesanal Casa Oro"
            fill
            className="object-cover object-[85%_center]"
            priority
          />
        </motion.div>
      </div>

      {/* ── Terracotta nav bar — oculto em mobile (Header tem hambúrguer) ── */}
      <nav className="relative bg-terracotta z-10 h-[52px]">
        <div
          className="hidden md:flex items-center justify-center gap-10 h-full"
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

      {/* ── Badge — responsivo via classe CSS ──────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hero-badge absolute top-0 left-0 md:left-38 z-20 pointer-events-none"
      >
        <Image
          src="/images/badge.png"
          alt="Casa Oro — Ateliê Velas e Cerâmica"
          fill
          className="object-contain object-top "
          priority
        />
      </motion.div>

    </section>
  );
}
