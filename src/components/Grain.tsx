"use client";

export default function Grain() {
  return (
    <>
      {/* SVG filter de ruído */}
      <svg className="fixed w-0 h-0 overflow-hidden" aria-hidden>
        <filter id="grain-filter" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.68"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>

      {/* Camada de grain sobre tudo */}
      <div
        className="fixed inset-0 z-[9990] pointer-events-none"
        style={{
          filter: "url(#grain-filter)",
          opacity: 0.055,
          mixBlendMode: "overlay",
        }}
      />
    </>
  );
}
