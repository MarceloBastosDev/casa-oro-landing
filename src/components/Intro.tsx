"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Intro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] bg-moss flex flex-col items-center justify-center"
        >
          {/* Glow ambiental */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[400px] h-[400px] rounded-full bg-terracotta/15 blur-[100px]" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative text-center px-8 z-10"
          >
            <p className="font-sans text-cream/40 text-[9px] tracking-[0.6em] uppercase mb-8">
              Casa Oro
            </p>
            <p className="font-sans text-cream text-xl md:text-3xl font-light tracking-[0.12em] leading-loose">
              O espaço sagrado da<br />abundância consciente.
            </p>
          </motion.div>

          {/* Linha de loading */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.4, delay: 0.3, ease: "easeInOut" }}
            className="absolute bottom-14 w-24 h-px bg-cream/20 origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
