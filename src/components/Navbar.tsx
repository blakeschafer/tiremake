"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "System", href: "#system", hasDropdown: true },
  { label: "Markets", href: "#markets", hasDropdown: true },
  { label: "Resources", href: "#resources" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[900px]"
      >
        <nav
          className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-500 ${
            scrolled
              ? "bg-terminal-dark/90 backdrop-blur-xl shadow-2xl shadow-black/20 border border-white/5"
              : "bg-terminal-dark/70 backdrop-blur-md border border-white/5"
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center group-hover:bg-terminal-lime transition-colors duration-300">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2" width="5" height="5" rx="1" fill="#052424" />
                <rect x="9" y="2" width="5" height="5" rx="1" fill="#052424" />
                <rect x="2" y="9" width="5" height="5" rx="1" fill="#052424" />
                <rect x="9" y="9" width="5" height="5" rx="1" fill="#052424" />
              </svg>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">Terminal</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-1 px-3.5 py-2 text-sm text-white/70 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                {link.label}
                {link.hasDropdown && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" className="opacity-50">
                    <path d="M2.5 4L5 6.5L7.5 4" stroke="currentColor" strokeWidth="1.2" fill="none" />
                  </svg>
                )}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:block px-5 py-2 text-xs font-semibold tracking-[0.15em] uppercase border border-white/20 rounded-full text-white hover:bg-white hover:text-terminal-dark transition-all duration-300"
            >
              Contact
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
              aria-label="Menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className="w-5 h-[1.5px] bg-white block"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-5 h-[1.5px] bg-white block"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className="w-5 h-[1.5px] bg-white block"
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-terminal-dark pt-24 px-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-3xl font-display text-white"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-block px-8 py-3 bg-terminal-lime text-terminal-dark font-semibold tracking-[0.15em] uppercase text-sm rounded-full text-center"
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
