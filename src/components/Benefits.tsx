"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

const benefits = [
  {
    number: "01",
    title: "A single solution for maximum, automated throughput",
    keywords: ["solution"],
    description:
      "Deep integrations anticipate incoming loads, enabling our AI computer vision technology to automate gate check-ins and all critical yard operations: from assigning locations and maintaining real-time visibility to coordinating spotters for efficient load movement.",
    gradient: "from-amber-900/40 via-terminal-dark to-terminal-dark",
  },
  {
    number: "02",
    title: "Easy, scalable operation",
    keywords: ["Easy", "operation"],
    description:
      "Terminal was designed from the ground up for disruption-free operations. Easy to deploy and support, the system has a low IT lift with no 3rd party devices to support, and a modern UI/UX that's super-easy for operators to use from day one.",
    gradient: "from-slate-800 via-terminal-dark to-terminal-dark",
  },
  {
    number: "03",
    title: "Rapid, repeatable ROI",
    keywords: ["Rapid", "repeatable ROI"],
    description:
      "We know that yard operations run on lean budgets, which is why we price our all-inclusive solution as a service with terms that won't bust the bank. Ready to deploy right away, and rapid to scale over time.",
    gradient: "from-indigo-900/40 via-terminal-dark to-terminal-dark",
  },
];

function BenefitCard({ benefit, index }: { benefit: (typeof benefits)[0]; index: number }) {
  const { ref, isInView } = useInView(0.3);

  const highlightKeywords = (text: string, keywords: string[]) => {
    let result = text;
    keywords.forEach((kw) => {
      result = result.replace(
        new RegExp(`(${kw})`, "gi"),
        `<strong class="font-semibold">$1</strong>`
      );
    });
    return result;
  };

  return (
    <div ref={ref} className="relative min-h-screen flex items-end pb-20">
      {/* Background visual */}
      <div className={`absolute inset-0 bg-gradient-to-b ${benefit.gradient}`}>
        {/* Wireframe overlay */}
        <div className="absolute inset-0 grid-lines opacity-30" />

        {/* Truck wireframes */}
        <svg
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[70%] max-w-[700px] opacity-20"
          viewBox="0 0 700 300"
          fill="none"
          stroke="rgba(171,255,2,0.3)"
          strokeWidth="0.5"
        >
          {index === 0 && (
            <>
              {[0, 1, 2].map((i) => (
                <g key={i}>
                  <rect x={50 + i * 220} y={60} width={180} height={80} rx={4} />
                  <rect x={60 + i * 220} y={150} width={40} height={60} rx={3} />
                  <circle cx={80 + i * 220} cy={230} r={15} />
                  <circle cx={170 + i * 220} cy={230} r={15} />
                </g>
              ))}
            </>
          )}
          {index === 1 && (
            <>
              {[0, 1, 2, 3].map((i) => (
                <g key={i}>
                  <rect x={30 + i * 170} y={80} width={140} height={70} rx={3} />
                  <rect x={140 + i * 170} y={100} width={25} height={50} rx={2} />
                  <circle cx={60 + i * 170} cy={170} r={12} />
                  <circle cx={130 + i * 170} cy={170} r={12} />
                </g>
              ))}
            </>
          )}
          {index === 2 && (
            <>
              <circle cx="350" cy="150" r="120" strokeDasharray="4 4" />
              <circle cx="350" cy="150" r="80" strokeDasharray="2 2" />
              {/* Pre-computed line coordinates to avoid SSR/client float mismatch */}
              <line x1="430" y1="150" x2="470" y2="150" stroke="rgba(171,255,2,0.5)" strokeWidth="1" />
              <line x1="390" y1="219.3" x2="410" y2="253.9" stroke="rgba(171,255,2,0.5)" strokeWidth="1" />
              <line x1="310" y1="219.3" x2="290" y2="253.9" stroke="rgba(171,255,2,0.5)" strokeWidth="1" />
              <line x1="270" y1="150" x2="230" y2="150" stroke="rgba(171,255,2,0.5)" strokeWidth="1" />
              <line x1="310" y1="80.7" x2="290" y2="46.1" stroke="rgba(171,255,2,0.5)" strokeWidth="1" />
              <line x1="390" y1="80.7" x2="410" y2="46.1" stroke="rgba(171,255,2,0.5)" strokeWidth="1" />
              {/* Pre-computed circle positions */}
              <circle cx="453.9" cy="210" r="4" fill="rgba(171,255,2,0.4)" />
              <circle cx="350" cy="270" r="4" fill="rgba(171,255,2,0.4)" />
              <circle cx="246.1" cy="210" r="4" fill="rgba(171,255,2,0.4)" />
              <circle cx="246.1" cy="90" r="4" fill="rgba(171,255,2,0.4)" />
              <circle cx="350" cy="30" r="4" fill="rgba(171,255,2,0.4)" />
              <circle cx="453.9" cy="90" r="4" fill="rgba(171,255,2,0.4)" />
            </>
          )}
        </svg>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:w-1/3"
          >
            <span className="font-mono text-terminal-lime text-sm tracking-wider">
              Benefit {benefit.number}
            </span>
            <h3
              className="font-display text-3xl md:text-4xl leading-tight text-white mt-3"
              dangerouslySetInnerHTML={{
                __html: highlightKeywords(benefit.title, benefit.keywords),
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:w-2/3"
          >
            <div className="border-l-2 border-terminal-lime pl-6">
              <p className="text-white/60 text-base md:text-lg leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function Benefits() {
  return (
    <section>
      {benefits.map((benefit, i) => (
        <BenefitCard key={benefit.number} benefit={benefit} index={i} />
      ))}
    </section>
  );
}
