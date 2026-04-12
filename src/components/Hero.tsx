"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Presentes", href: "#colecao" },
  { label: "Coleções", href: "#colecao" },
  { label: "Nós", href: "#sobre" },
  { label: "Contatos", href: "#contato" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-visible">

      {/* ── Hero image ────────────────────────────────────────────────── */}
      <div className="relative h-[52vw] min-h-[320px] max-h-[580px] overflow-hidden">
        <Image
          src="/images/fundo.png"
          alt="Cerâmica artesanal Casa Oro"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* ── Terracotta nav bar ─────────────────────────────────────────── */}
      <nav className="relative bg-terracotta z-10">
        <div
          className="flex items-center justify-around h-[52px]"
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

      {/* ── Badge image ───────────────────────────────────────────────────
          Sized by HEIGHT so it fills: hero + nav + ~70px into About.
          Width = height × (880/1160) = natural aspect ratio of badge.png
          The PNG has transparency outside the badge shape.
      ─────────────────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-0 z-20 pointer-events-none"
        style={{
          /* total height = hero(capped at 580) + nav(52) + overflow into About(110) */
          height: "calc(min(52vw, 580px) + 52px + 110px)",
          /* width derived from aspect ratio 880:1160 ≈ 0.759 */
          width: "calc((min(52vw, 580px) + 52px + 110px) * 0.759)",
        }}
      >
        <Image
          src="/images/badge.png"
          alt="Casa Oro — Ateliê Velas e Cerâmica"
          fill
          className="object-contain object-top"
          priority
        />
      </motion.div>

    </section>
  );
}
