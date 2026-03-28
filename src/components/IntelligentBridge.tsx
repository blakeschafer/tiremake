"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { useScroll, useTransform } from "framer-motion";

const fullText = "Imagine the yard as an intelligent bridge seamlessly connecting highway to warehouse.";
const highlightStart = fullText.indexOf("intelligent bridge");
const highlightEnd = highlightStart + "intelligent bridge".length;

export default function IntelligentBridge() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const revealProgress = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);
  const [progress, setProgress] = useState(0);

  const handleChange = useCallback((v: number) => setProgress(v), []);

  useEffect(() => {
    const unsub = revealProgress.on("change", handleChange);
    return unsub;
  }, [revealProgress, handleChange]);

  const chars = fullText.split("");
  const visibleCount = Math.floor(progress * chars.length);

  return (
    <section ref={containerRef} className="relative bg-terminal-darker text-white min-h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 grid-lines opacity-30" />

        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.15] tracking-tight">
            {chars.map((char, i) => {
              const isHighlight = i >= highlightStart && i < highlightEnd;
              const isVisible = i < visibleCount;

              return (
                <span
                  key={i}
                  className={`transition-opacity duration-75 ${
                    isHighlight ? "italic font-semibold" : ""
                  } ${isVisible ? "" : "opacity-0"}`}
                  style={{
                    color: isHighlight && isVisible ? "#abff02" : undefined,
                  }}
                >
                  {char}
                </span>
              );
            })}
          </h2>
        </div>
      </div>
    </section>
  );
}
