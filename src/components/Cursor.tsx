"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

const TRAIL_LENGTH = 18;

export default function Cursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const trailRef = useRef<{ x: number; y: number; id: number }[]>([]);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const idRef = useRef(0);

  const springConfig = { stiffness: 120, damping: 28, mass: 0.6 };
  const x = useSpring(pos.x, springConfig);
  const y = useSpring(pos.y, springConfig);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setPos(newPos);

      // Adiciona ponto ao rastro
      idRef.current += 1;
      trailRef.current = [
        { x: e.clientX, y: e.clientY, id: idRef.current },
        ...trailRef.current,
      ].slice(0, TRAIL_LENGTH);
      setTrail([...trailRef.current]);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => { x.set(pos.x); }, [pos.x]);
  useEffect(() => { y.set(pos.y); }, [pos.y]);

  return (
    <div className="fixed inset-0 top-0 left-0 z-[300] pointer-events-none hidden md:block">

      {/* Rastro de luz */}
      {trail.map((point, i) => {
        const progress = i / TRAIL_LENGTH;
        const opacity = (1 - progress) * 0.18;
        const size = (1 - progress) * 28 + 4;
        return (
          <div
            key={point.id}
            className="absolute rounded-full"
            style={{
              left: point.x,
              top: point.y,
              width: size,
              height: size,
              transform: "translate(-50%, -50%)",
              background: `radial-gradient(circle, rgba(184,134,11,${opacity * 2}) 0%, rgba(220,160,30,${opacity}) 50%, transparent 80%)`,
              filter: `blur(${3 + progress * 4}px)`,
              pointerEvents: "none",
            }}
          />
        );
      })}

      {/* Vela com mola */}
      <motion.div
        className="fixed top-0 left-0"
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
    </div>
  );
}
