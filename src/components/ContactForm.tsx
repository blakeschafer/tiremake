"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

const options = [
  "Schedule a 30-minute meeting with a yard expert",
  "Schedule a YOS™ Demo",
  "Arrange ROI consultation",
  "Set Up a 2-Day Proof of Value on site",
  "Something else",
];

export default function ContactForm() {
  const { ref, isInView } = useInView(0.2);
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <section ref={ref} id="contact" className="bg-white text-terminal-dark py-28 md:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display text-[clamp(2.5rem,5vw,4rem)] tracking-tight text-center mb-20"
        >
          Contact Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left: Options */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-lg text-terminal-dark/70 mb-8">
              Reach out to learn more about Terminal, on your terms:
            </p>
            <div className="flex flex-col gap-4">
              {options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedOption(option)}
                  className={`flex items-start gap-4 text-left group transition-all duration-300 ${
                    selectedOption === option ? "opacity-100" : "opacity-60 hover:opacity-80"
                  }`}
                >
                  <span
                    className={`font-mono text-xs mt-1 transition-colors ${
                      selectedOption === option
                        ? "text-terminal-lime"
                        : "text-terminal-dark/30"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-base leading-relaxed transition-all ${
                      selectedOption === option
                        ? "text-terminal-dark font-medium pl-3 border-l-2 border-terminal-lime"
                        : "text-terminal-dark/70"
                    }`}
                  >
                    {option}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-terminal-dark/70 mb-8">
              Tell us a bit about you:
            </p>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm text-terminal-dark/50 mb-1.5 block">
                  Full Name <span className="text-terminal-lime">*</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-terminal-dark/15 py-3 text-terminal-dark placeholder:text-terminal-dark/25 focus:border-terminal-lime focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-terminal-dark/50 mb-1.5 block">
                  Role or position <span className="text-terminal-lime">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Project manager"
                  className="w-full bg-transparent border-b border-terminal-dark/15 py-3 text-terminal-dark placeholder:text-terminal-dark/25 focus:border-terminal-lime focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-terminal-dark/50 mb-1.5 block">
                  Phone number
                </label>
                <input
                  type="tel"
                  placeholder="(323) 555-0147"
                  className="w-full bg-transparent border-b border-terminal-dark/15 py-3 text-terminal-dark placeholder:text-terminal-dark/25 focus:border-terminal-lime focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-terminal-dark/50 mb-1.5 block">
                  Email <span className="text-terminal-lime">*</span>
                </label>
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="w-full bg-transparent border-b border-terminal-dark/15 py-3 text-terminal-dark placeholder:text-terminal-dark/25 focus:border-terminal-lime focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-terminal-dark/50 mb-1.5 block">
                  Company name <span className="text-terminal-lime">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Acme"
                  className="w-full bg-transparent border-b border-terminal-dark/15 py-3 text-terminal-dark placeholder:text-terminal-dark/25 focus:border-terminal-lime focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-terminal-dark/50 mb-1.5 block">
                  How Can We Help? <span className="text-terminal-lime">*</span>
                </label>
                <select
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="w-full bg-transparent border-b border-terminal-dark/15 py-3 text-terminal-dark/50 focus:border-terminal-lime focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select options</option>
                  {options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="mt-4 w-full py-4 bg-terminal-dark/10 text-terminal-dark/40 font-semibold text-xs tracking-[0.2em] uppercase rounded-lg hover:bg-terminal-dark hover:text-white transition-all duration-400 cursor-pointer"
              >
                Save & Continue
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
