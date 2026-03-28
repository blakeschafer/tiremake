"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

export default function YOSReveal() {
  const { ref, isInView } = useInView(0.4);

  return (
    <>
      {/* Dark section: "That's the Yard Operating System" */}
      <section
        ref={ref}
        className="relative bg-terminal-dark py-40 md:py-56 overflow-hidden curve-divider"
      >
        <div className="absolute inset-0 grid-dots" />

        {/* Decorative geometric lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" fill="none" preserveAspectRatio="none">
          <line x1="100" y1="0" x2="100" y2="600" stroke="rgba(171,255,2,0.04)" strokeWidth="1" />
          <line x1="1100" y1="0" x2="1100" y2="600" stroke="rgba(171,255,2,0.04)" strokeWidth="1" />
          <line x1="0" y1="300" x2="1200" y2="300" stroke="rgba(171,255,2,0.03)" strokeWidth="1" />
        </svg>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-white/40 text-lg mb-6 font-light"
          >
            That&apos;s the
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(3rem,8vw,7rem)] leading-[1] tracking-tight text-white"
          >
            Yard Operating
            <br />
            System.
          </motion.h2>
        </div>
      </section>

      {/* White section: giant YOS™ */}
      <section className="relative bg-white py-32 md:py-44 overflow-hidden curve-divider-top">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(5rem,15vw,14rem)] leading-[0.9] tracking-tighter text-terminal-dark font-bold"
          >
            YOS<sup className="text-[0.3em] align-super">™</sup>
          </motion.h2>
        </div>
      </section>
    </>
  );
}
