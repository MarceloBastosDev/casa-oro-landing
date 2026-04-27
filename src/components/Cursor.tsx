"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function Cursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  const springConfig = { stiffness: 120, damping: 28, mass: 0.6 };
  const x = useSpring(pos.x, springConfig);
  const y = useSpring(pos.y, springConfig);

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => { x.set(pos.x); }, [pos.x]);
  useEffect(() => { y.set(pos.y); }, [pos.y]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[300] pointer-events-none hidden md:block"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
        {/* Halo de luz */}
        <div
          className="absolute rounded-full"
          style={{
            width: 180,
            height: 180,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(184,134,11,0.10) 0%, rgba(184,100,11,0.04) 50%, transparent 75%)",
            filter: "blur(8px)",
          }}
        />

        {/* Chama */}
        <div className="relative flex flex-col items-center">
          <div
            style={{
              width: 3,
              height: 14,
              background:
                "linear-gradient(to top, rgba(255,220,100,0.9), rgba(255,255,200,0.6), transparent)",
              borderRadius: "50% 50% 40% 40%",
              filter: "blur(0.8px)",
              animation: "flicker 1.8s ease-in-out infinite alternate",
            }}
          />
          <div
            style={{
              width: 6,
              height: 20,
              marginTop: -14,
              background:
                "linear-gradient(to top, rgba(180,80,10,0.55), rgba(220,140,30,0.35), transparent)",
              borderRadius: "50% 50% 35% 35%",
              filter: "blur(2px)",
              animation: "flicker 1.8s ease-in-out infinite alternate",
            }}
          />
          <div
            style={{
              width: 1,
              height: 5,
              background: "rgba(60,30,10,0.6)",
              marginTop: -1,
            }}
          />
          <div
            style={{
              width: 6,
              height: 18,
              background:
                "linear-gradient(to bottom, rgba(230,224,209,0.9), rgba(200,190,170,0.7))",
              borderRadius: "1px",
            }}
          />
        </div>
    </motion.div>
  );
}
