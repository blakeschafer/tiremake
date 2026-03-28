"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

export default function CTASection() {
  const { ref, isInView } = useInView(0.3);

  return (
    <section
      ref={ref}
      className="relative bg-terminal-dark py-32 md:py-44 overflow-hidden"
    >
      {/* Decorative geometric lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 500" fill="none" preserveAspectRatio="none">
        {/* Corner arcs */}
        <path d="M0 200 Q100 100 200 0" stroke="rgba(171,255,2,0.06)" strokeWidth="1" />
        <path d="M1200 200 Q1100 100 1000 0" stroke="rgba(171,255,2,0.06)" strokeWidth="1" />
        <path d="M0 300 Q100 400 200 500" stroke="rgba(171,255,2,0.06)" strokeWidth="1" />
        <path d="M1200 300 Q1100 400 1000 500" stroke="rgba(171,255,2,0.06)" strokeWidth="1" />
        {/* Cross lines */}
        <line x1="200" y1="0" x2="200" y2="500" stroke="rgba(171,255,2,0.03)" />
        <line x1="1000" y1="0" x2="1000" y2="500" stroke="rgba(171,255,2,0.03)" />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] tracking-tight text-white italic"
        >
          The yard of the future
          <br />
          starts today.
        </motion.h2>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-block mt-10 px-10 py-4 bg-terminal-dark border border-white/15 text-white font-semibold text-xs tracking-[0.2em] uppercase rounded-full hover:bg-white hover:text-terminal-dark transition-all duration-400"
        >
          Take Charge of Your Yard
        </motion.a>
      </div>
    </section>
  );
}
