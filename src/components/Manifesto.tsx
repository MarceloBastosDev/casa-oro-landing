"use client";

import { motion } from "framer-motion";

const lines = [
  { text: "Casa Oro é feita para lares que valorizam o silêncio.", weight: "font-light text-base md:text-lg" },
  { text: "Para quem entende que beleza não precisa ser explicada.", weight: "font-light text-base md:text-lg" },
  { text: "Para quem escolhe poucos objetos mas escolhe bem.", weight: "font-light text-base md:text-lg" },
  { text: "Aqui, a luz não decora.", weight: "font-light text-base md:text-lg" },
  { text: "Ela habita.", weight: "font-light text-base md:text-lg" },
];

function WordReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <span>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.45, delay: delay + i * 0.07, ease: "easeOut" }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export default function Manifesto() {
  return (
    <section className="py-24 md:py-36 bg-gradient-to-b from-cream-dark/40 to-cream">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="space-y-1 md:space-y-1">
          {lines.map((line, i) => (
            <p
              key={i}
              className={`font-sans text-moss leading-relaxed s ${line.weight}`}
            >
              <WordReveal text={line.text} delay={i * 0.08} />
            </p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-terracotta to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
