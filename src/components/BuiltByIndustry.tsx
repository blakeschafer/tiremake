"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

const logos = ["Ryder", "Prologis", "NFI", "Lineage", "8VC"];

export default function BuiltByIndustry() {
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
            Built by the Industry
          </span>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] tracking-tight mt-4 max-w-3xl mx-auto">
            Built by logistics leaders who want a new industry standard in the yard
          </h2>
        </motion.div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 border border-terminal-dark/10">
          {logos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`flex items-center justify-center py-12 md:py-16 ${
                i < logos.length - 1 ? "border-r border-terminal-dark/10" : ""
              } ${i < 3 ? "border-b md:border-b-0 border-terminal-dark/10" : ""}`}
            >
              <span className="text-xl md:text-2xl font-semibold text-terminal-dark/30 tracking-tight italic font-display">
                {logo}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
