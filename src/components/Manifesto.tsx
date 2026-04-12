"use client";

import { motion } from "framer-motion";

const lines = [
  { text: "Casa Oro é feita para lares que valorizam o silêncio.", weight: "font-light text-xl md:text-2xl" },
  { text: "Para quem entende que beleza não precisa ser explicada.", weight: "font-light text-xl md:text-2xl" },
  { text: "Para quem escolhe poucos objetos mas escolhe bem.", weight: "font-light text-xl md:text-2xl" },
  { text: "Aqui, a luz não decora.", weight: "font-medium text-2xl md:text-3xl" },
  { text: "Ela habita.", weight: "font-semibold italic text-3xl md:text-4xl mt-2" },
];

export default function Manifesto() {
  return (
    <section className="py-24 md:py-36 bg-gradient-to-b from-cream-dark/40 to-cream">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-terracotta/40 font-sans text-[10px] tracking-[0.5em] uppercase mb-12"
        >
          Manifesto
        </motion.p>

        <div className="space-y-6 md:space-y-8">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              className={`font-sans text-moss leading-relaxed tracking-wide ${line.weight}`}
            >
              {line.text}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-terracotta to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
