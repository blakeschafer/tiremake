"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

export default function HowItWorks() {
  const { ref, isInView } = useInView(0.3);

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="relative bg-white text-terminal-dark py-32 md:py-44 overflow-hidden"
    >
      {/* Decorative corner accents */}
      <svg className="absolute top-12 left-12 w-32 h-32 opacity-20" viewBox="0 0 128 128" fill="none">
        <path d="M0 40 Q0 0 40 0" stroke="#abff02" strokeWidth="1.5" />
        <circle cx="0" cy="40" r="3" fill="#abff02" />
      </svg>
      <svg className="absolute bottom-12 right-12 w-32 h-32 opacity-20" viewBox="0 0 128 128" fill="none">
        <path d="M128 88 Q128 128 88 128" stroke="#abff02" strokeWidth="1.5" />
        <circle cx="128" cy="88" r="3" fill="#abff02" />
      </svg>
      <svg className="absolute top-12 right-12 w-32 h-32 opacity-20" viewBox="0 0 128 128" fill="none">
        <path d="M128 40 Q128 0 88 0" stroke="#abff02" strokeWidth="1.5" />
      </svg>
      <svg className="absolute bottom-12 left-12 w-32 h-32 opacity-20" viewBox="0 0 128 128" fill="none">
        <path d="M0 88 Q0 128 40 128" stroke="#abff02" strokeWidth="1.5" />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-[0.2em] uppercase text-terminal-dark/40"
        >
          How it Works
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.1] tracking-tight mt-5"
        >
          Revolutionary technology that transforms your yard from gate to dock
        </motion.h2>
        <motion.a
          href="#system"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-block mt-10 text-xs font-semibold tracking-[0.2em] uppercase text-terminal-dark/60 hover:text-terminal-dark border-b border-terminal-dark/20 hover:border-terminal-dark pb-1 transition-all duration-300"
        >
          Take a Closer Look
        </motion.a>
      </div>
    </section>
  );
}
