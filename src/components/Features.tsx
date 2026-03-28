"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  "Autonomous, agentic AI-driven workflows from gate to dock",
  "Single pane of glass visibility of all yard operations",
  "Managed by a unified platform with AI computer vision",
  "Highly configurable to all yards in your network",
  "Unlocked value of your existing WMS/TMS",
  "Digitally transformed, data rich, and predictive",
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollProgress = Math.max(
        0,
        Math.min(1, (viewportHeight - rect.top) / (sectionHeight + viewportHeight))
      );
      const idx = Math.min(features.length - 1, Math.floor(scrollProgress * features.length));
      setActiveIndex(idx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white text-terminal-dark min-h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left: feature list with counter */}
          <div className="relative">
            <div className="flex items-start gap-8">
              {/* Animated counter */}
              <div className="relative w-20 h-24 overflow-hidden flex-shrink-0">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={activeIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 flex items-center justify-center font-mono text-6xl font-bold text-terminal-lime"
                  >
                    {String(activeIndex + 1).padStart(2, "0")}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Feature list */}
              <div className="flex flex-col gap-5 pt-2">
                {features.map((feature, i) => (
                  <motion.p
                    key={i}
                    animate={{
                      opacity: i === activeIndex ? 1 : 0.25,
                      x: i === activeIndex ? 0 : -5,
                    }}
                    transition={{ duration: 0.4 }}
                    className={`text-lg md:text-xl leading-relaxed transition-all ${
                      i === activeIndex ? "font-medium" : "font-normal"
                    }`}
                  >
                    {feature}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-10 h-[2px] bg-terminal-dark/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-terminal-lime rounded-full"
                animate={{ width: `${((activeIndex + 1) / features.length) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

          {/* Right: visual placeholder with wireframe yard */}
          <div className="relative aspect-[4/3] bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                viewBox="0 0 500 400"
                className="w-[85%] h-[85%]"
                fill="none"
                stroke="rgba(5,36,36,0.15)"
                strokeWidth="0.8"
              >
                {/* Dock bays */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <g key={i}>
                    <rect
                      x={60 + i * 80}
                      y={20}
                      width={60}
                      height={140}
                      rx={3}
                      stroke={i === activeIndex % 5 ? "rgba(171,255,2,0.8)" : "rgba(5,36,36,0.12)"}
                      strokeWidth={i === activeIndex % 5 ? 1.5 : 0.8}
                    />
                    <text
                      x={90 + i * 80}
                      y={40}
                      textAnchor="middle"
                      fill={i === activeIndex % 5 ? "#abff02" : "rgba(5,36,36,0.3)"}
                      fontSize="12"
                      fontFamily="monospace"
                    >
                      {i + 1}
                    </text>
                    {/* Truck in bay */}
                    <rect
                      x={70 + i * 80}
                      y={50}
                      width={40}
                      height={95}
                      rx={2}
                      strokeDasharray={i === activeIndex % 5 ? "0" : "3 3"}
                      stroke={i === activeIndex % 5 ? "rgba(171,255,2,0.5)" : "rgba(5,36,36,0.1)"}
                    />
                  </g>
                ))}
                {/* Yard lanes */}
                <line x1="40" y1="200" x2="460" y2="200" strokeDasharray="8 4" stroke="rgba(5,36,36,0.1)" />
                <line x1="40" y1="260" x2="460" y2="260" strokeDasharray="8 4" stroke="rgba(5,36,36,0.1)" />
                {/* Moving trucks */}
                <rect x={100 + activeIndex * 40} y={220} width={50} height={25} rx={3} stroke="rgba(171,255,2,0.6)" strokeWidth="1" />
                <rect x={300 - activeIndex * 20} y={270} width={50} height={25} rx={3} stroke="rgba(5,36,36,0.15)" />
                {/* Gate */}
                <rect x="20" y="320" width="460" height="40" rx="4" stroke="rgba(5,36,36,0.08)" />
                <text x="250" y="345" textAnchor="middle" fill="rgba(5,36,36,0.2)" fontSize="11" fontFamily="monospace">
                  GATE ENTRY
                </text>
              </svg>
            </div>

            {/* Corner detection brackets */}
            <svg className="absolute top-4 left-4 w-6 h-6" viewBox="0 0 24 24" stroke="#abff02" strokeWidth="2" fill="none">
              <path d="M1 8V1h7" />
            </svg>
            <svg className="absolute top-4 right-4 w-6 h-6" viewBox="0 0 24 24" stroke="#abff02" strokeWidth="2" fill="none">
              <path d="M23 8V1h-7" />
            </svg>
            <svg className="absolute bottom-4 left-4 w-6 h-6" viewBox="0 0 24 24" stroke="#abff02" strokeWidth="2" fill="none">
              <path d="M1 16v7h7" />
            </svg>
            <svg className="absolute bottom-4 right-4 w-6 h-6" viewBox="0 0 24 24" stroke="#abff02" strokeWidth="2" fill="none">
              <path d="M23 16v7h-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
