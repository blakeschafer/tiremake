"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

function TruckSVG({ fill, stroke, scan }: {
  fill: number;
  stroke: number;
  scan: number;
}) {
  const scanX = 50 + scan * 700;
  const s = stroke;
  const f = fill;

  return (
    <svg
      viewBox="0 0 800 400"
      fill="none"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Trailer body */}
      <rect x="80" y="130" width="420" height="160" rx="4"
        fill={`rgba(30,30,30,${f})`}
        stroke={`rgba(171,255,2,${s})`} strokeWidth="1" />
      {/* Trailer ribbing */}
      {[0,1,2,3,4,5,6].map(i => (
        <line key={`rib-${i}`}
          x1={120+i*55} y1="130" x2={120+i*55} y2="290"
          stroke={`rgba(171,255,2,${s*0.6})`} strokeWidth="0.5" strokeDasharray="3 3" />
      ))}
      {/* Trailer horizontal detail lines */}
      <line x1="80" y1="145" x2="500" y2="145"
        stroke={`rgba(171,255,2,${s*0.4})`} strokeWidth="0.5" strokeDasharray="2 4" />
      <line x1="80" y1="275" x2="500" y2="275"
        stroke={`rgba(171,255,2,${s*0.4})`} strokeWidth="0.5" strokeDasharray="2 4" />
      {/* Cross-bracing */}
      <line x1="80" y1="130" x2="500" y2="290"
        stroke={`rgba(171,255,2,${s*0.12})`} strokeWidth="0.5" />
      <line x1="500" y1="130" x2="80" y2="290"
        stroke={`rgba(171,255,2,${s*0.12})`} strokeWidth="0.5" />

      {/* Cab */}
      <path d="M500 170 L500 290 L640 290 L640 200 Q640 170 610 170 Z"
        fill={`rgba(30,30,30,${f})`}
        stroke={`rgba(171,255,2,${s})`} strokeWidth="1" />
      {/* Windshield */}
      <path d="M530 180 L610 180 Q625 180 625 195 L625 225 L530 225 Z"
        fill={`rgba(171,255,2,${f*0.05})`}
        stroke={`rgba(171,255,2,${s*0.8})`} strokeWidth="0.8" />
      {/* Door line */}
      <line x1="560" y1="180" x2="560" y2="280"
        stroke={`rgba(171,255,2,${s*0.5})`} strokeWidth="0.5" />
      {/* Mirror */}
      <rect x="635" y="190" width="15" height="8" rx="2"
        fill={`rgba(30,30,30,${f*0.8})`}
        stroke={`rgba(171,255,2,${s*0.6})`} strokeWidth="0.5" />
      {/* Headlight */}
      <rect x="635" y="240" width="8" height="20" rx="3"
        fill={`rgba(171,255,2,${f*0.3})`}
        stroke={`rgba(171,255,2,${s})`} strokeWidth="0.8" />
      {/* Exhaust stack */}
      <rect x="505" y="110" width="8" height="60" rx="3"
        fill={`rgba(30,30,30,${f*0.6})`}
        stroke={`rgba(171,255,2,${s*0.5})`} strokeWidth="0.5" />
      {/* Fuel tank */}
      <rect x="520" y="260" width="35" height="25" rx="6"
        fill={`rgba(30,30,30,${f*0.5})`}
        stroke={`rgba(171,255,2,${s*0.5})`} strokeWidth="0.5" />

      {/* Undercarriage */}
      <line x1="80" y1="295" x2="640" y2="295"
        stroke={`rgba(171,255,2,${s*0.3})`} strokeWidth="1" />

      {/* Rear wheels (tandem) */}
      <circle cx="150" cy="312" r="28" fill={`rgba(20,20,20,${f})`}
        stroke={`rgba(171,255,2,${s})`} strokeWidth="1" />
      <circle cx="150" cy="312" r="18"
        stroke={`rgba(171,255,2,${s*0.5})`} strokeWidth="0.5" strokeDasharray="3 3" fill="none" />
      <circle cx="150" cy="312" r="6" fill={`rgba(171,255,2,${s*0.3})`} />

      <circle cx="210" cy="312" r="28" fill={`rgba(20,20,20,${f})`}
        stroke={`rgba(171,255,2,${s})`} strokeWidth="1" />
      <circle cx="210" cy="312" r="18"
        stroke={`rgba(171,255,2,${s*0.5})`} strokeWidth="0.5" strokeDasharray="3 3" fill="none" />
      <circle cx="210" cy="312" r="6" fill={`rgba(171,255,2,${s*0.3})`} />

      {/* Mid wheels */}
      <circle cx="370" cy="312" r="28" fill={`rgba(20,20,20,${f})`}
        stroke={`rgba(171,255,2,${s})`} strokeWidth="1" />
      <circle cx="370" cy="312" r="18"
        stroke={`rgba(171,255,2,${s*0.5})`} strokeWidth="0.5" strokeDasharray="3 3" fill="none" />
      <circle cx="370" cy="312" r="6" fill={`rgba(171,255,2,${s*0.3})`} />

      {/* Front wheels */}
      <circle cx="590" cy="312" r="28" fill={`rgba(20,20,20,${f})`}
        stroke={`rgba(171,255,2,${s})`} strokeWidth="1" />
      <circle cx="590" cy="312" r="18"
        stroke={`rgba(171,255,2,${s*0.5})`} strokeWidth="0.5" strokeDasharray="3 3" fill="none" />
      <circle cx="590" cy="312" r="6" fill={`rgba(171,255,2,${s*0.3})`} />

      {/* Ground */}
      <line x1="20" y1="342" x2="780" y2="342"
        stroke={`rgba(171,255,2,${s*0.15})`} strokeWidth="1" />

      {/* Scan line */}
      {s > 0.1 && (
        <line x1={scanX} y1="80" x2={scanX} y2="360"
          stroke={`rgba(171,255,2,${s*0.5})`} strokeWidth="1.5" strokeDasharray="4 8" />
      )}

      {/* Detection brackets */}
      <path d="M55 100 L55 85 L75 85"
        stroke={`rgba(171,255,2,${s*0.7})`} strokeWidth="1.5" fill="none" />
      <path d="M745 100 L745 85 L725 85"
        stroke={`rgba(171,255,2,${s*0.7})`} strokeWidth="1.5" fill="none" />
      <path d="M55 350 L55 365 L75 365"
        stroke={`rgba(171,255,2,${s*0.7})`} strokeWidth="1.5" fill="none" />
      <path d="M745 350 L745 365 L725 365"
        stroke={`rgba(171,255,2,${s*0.7})`} strokeWidth="1.5" fill="none" />

      {/* Data labels */}
      {s > 0.3 && (
        <>
          <text x="60" y="80" fill={`rgba(171,255,2,${s*0.5})`}
            fontSize="8" fontFamily="monospace">SCAN_ID: 0x7A3F</text>
          <text x="640" y="80" fill={`rgba(171,255,2,${s*0.5})`}
            fontSize="8" fontFamily="monospace">CV_ACTIVE</text>
          <text x="60" y="380" fill={`rgba(171,255,2,${s*0.5})`}
            fontSize="8" fontFamily="monospace">GATE_01</text>
          <text x="640" y="380" fill={`rgba(171,255,2,${s*0.5})`}
            fontSize="8" fontFamily="monospace">STATUS: OK</text>
        </>
      )}
    </svg>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // All scroll-driven values as state for reliable rendering
  const [s, setS] = useState({
    fill: 0.9, stroke: 0.1, scan: 0,
    truckX: 100, truckScale: 1, truckY: 0, truckDim: 1,
    textY: 80, textOp: 0, subOp: 0, ctaOp: 0,
    sectionOp: 1, parallaxY: 0,
    gridOp: 0, horizonOp: 0.6, glowOp: 0,
  });

  useEffect(() => {
    const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
    const lerp = (p: number, inMin: number, inMax: number, outMin: number, outMax: number) => {
      const t = clamp((p - inMin) / (inMax - inMin), 0, 1);
      return outMin + t * (outMax - outMin);
    };

    const unsub = scrollYProgress.on("change", (p) => {
      setS({
        fill: lerp(p, 0.15, 0.4, 0.9, 0),
        stroke: lerp(p, 0.15, 0.35, 0.1, 1),
        scan: lerp(p, 0.2, 0.5, 0, 1),
        truckX: lerp(p, 0, 0.25, 100, 0),
        truckScale: lerp(p, 0.35, 0.5, 1, 0.55),
        truckY: lerp(p, 0.35, 0.5, 0, -180),
        truckDim: lerp(p, 0.4, 0.55, 1, 0.4),
        textY: lerp(p, 0.38, 0.5, 80, 0),
        textOp: lerp(p, 0.38, 0.5, 0, 1),
        subOp: lerp(p, 0.48, 0.58, 0, 1),
        ctaOp: lerp(p, 0.55, 0.65, 0, 1),
        sectionOp: lerp(p, 0.82, 1, 1, 0),
        parallaxY: lerp(p, 0.75, 1, 0, -120),
        gridOp: lerp(p, 0.15, 0.35, 0, 0.6),
        horizonOp: p < 0.2 ? lerp(p, 0, 0.2, 0.6, 0.3) : lerp(p, 0.2, 0.4, 0.3, 0),
        glowOp: p < 0.4 ? lerp(p, 0.2, 0.4, 0, 0.5) : lerp(p, 0.4, 0.6, 0.5, 0),
      });
    });
    return unsub;
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-terminal-darker">
        <div className="absolute inset-0" style={{ opacity: s.sectionOp }}>
          {/* Horizon glow */}
          <div className="absolute inset-0 pointer-events-none" style={{ opacity: s.horizonOp }}>
            <div className="absolute bottom-[35%] left-0 right-0 h-[200px] bg-gradient-to-t from-amber-900/50 via-amber-800/20 to-transparent" />
            <div className="absolute bottom-[35%] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-amber-600/40 to-transparent" />
          </div>

          {/* Grid dots */}
          <div className="absolute inset-0 grid-dots pointer-events-none" style={{ opacity: s.gridOp }} />

          {/* Scan glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-terminal-lime/10 blur-[120px] pointer-events-none"
            style={{ opacity: s.glowOp }}
          />

          {/* Truck */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-[85%] max-w-[950px]"
              style={{
                transform: `translateX(${s.truckX}%) translateY(${s.truckY}px) scale(${s.truckScale})`,
                opacity: s.truckDim,
              }}
            >
              <TruckSVG fill={s.fill} stroke={s.stroke} scan={s.scan} />
            </div>
          </div>

          {/* Text content */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
            style={{ transform: `translateY(${s.parallaxY}px)` }}
          >
            <div className="max-w-5xl mx-auto px-6 text-center mt-[15vh] pointer-events-auto">
              <div style={{ opacity: s.textOp, transform: `translateY(${s.textY}px)` }}>
                <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] tracking-tight text-white">
                  We have reinvented
                </h1>
                <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] tracking-tight text-white">
                  the future of logistics
                </h1>
                <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] tracking-tight italic text-terminal-lime">
                  through the yard.
                </h1>
              </div>

              <p
                style={{ opacity: s.subOp }}
                className="mt-8 text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light"
              >
                AI-native technology that turns manual tasks into connected missions.
                Moving the world by making goods flow.
              </p>

              <div
                style={{ opacity: s.ctaOp }}
                className="mt-10 flex gap-4 justify-center"
              >
                <a href="#contact"
                  className="px-8 py-3.5 bg-terminal-lime text-terminal-dark font-semibold text-sm tracking-[0.1em] uppercase rounded-full hover:shadow-[0_0_40px_rgba(171,255,2,0.3)] transition-all duration-300">
                  Request Demo
                </a>
                <a href="#how-it-works"
                  className="px-8 py-3.5 border border-white/20 text-white font-medium text-sm tracking-[0.1em] uppercase rounded-full hover:bg-white/5 transition-all duration-300">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
