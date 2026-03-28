"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

const operators = ["Coca-Cola", "HP", "Sysco", "PepsiCo", "Unilever"];

export default function TrustedByOperators() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section ref={ref} className="bg-white text-terminal-dark py-28 md:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-terminal-dark/40">
            Trusted by Operators
          </span>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] tracking-tight mt-4 max-w-3xl mx-auto">
            Trusted by leading operators looking for real yard innovation
          </h2>
        </motion.div>

        {/* Logo ticker */}
        <div className="relative overflow-hidden py-8">
          <div className="flex gap-16 animate-[marquee_20s_linear_infinite]">
            {[...operators, ...operators].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center px-8"
              >
                <span className="text-2xl font-semibold text-terminal-dark/25 tracking-tight whitespace-nowrap italic font-display">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
