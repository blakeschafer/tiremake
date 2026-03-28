"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

export default function Testimonial() {
  const { ref, isInView } = useInView(0.3);

  return (
    <section
      ref={ref}
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background - moody winter road scene */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900" />
        {/* Atmospheric overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
        {/* Subtle snow/mist texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.3] text-white italic">
            &ldquo;We have not seen this kind of accuracy with computer-vision
            technology... this is a significant milestone in the race to modernize
            the yard.&rdquo;
          </p>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10"
        >
          <p className="text-terminal-lime font-medium text-sm tracking-wide">Karen Jones</p>
          <p className="text-white/40 text-sm mt-1">Head of New Product</p>
          <p className="text-white/60 text-sm font-medium mt-0.5">Ryder System, Inc.</p>
        </motion.div>
      </div>
    </section>
  );
}
