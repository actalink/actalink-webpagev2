import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProductFlow from "./ProductFlow";

const heroLines = ["The payment", "interface layer for", "programmable money."];

const lineWrap = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } };
const lineUp = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const stats = [
  { value: "04", label: "Specialised products", color: "#4F46E5" },
  { value: "6+", label: "Networks supported", color: "#E1613A" },
  { value: "99.99%", label: "Uptime target", color: "#2563EB" },
  { value: "Real-time", label: "Settlement", color: "#2563EB" },
];

const MeshBackground = () => (
  <div className="mesh-bg" aria-hidden>
    <div className="mesh-blob left-[-10%] top-[-10%] h-[55vw] w-[55vw] bg-[#F3ECC9]" style={{ animation: "drift 18s ease-in-out infinite" }} />
    <div className="mesh-blob right-[-5%] top-[0%] h-[45vw] w-[45vw] bg-[#DAD7F7]" style={{ animation: "drift 22s ease-in-out infinite reverse" }} />
    <div className="mesh-blob bottom-[-15%] left-[20%] h-[48vw] w-[48vw] bg-[#D6E4FB]" style={{ animation: "drift 26s ease-in-out infinite" }} />
  </div>
);

export default function Hero() {
  const scrollToProducts = () => document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" data-testid="hero-section" className="relative min-h-screen w-full overflow-hidden pt-32 md:pt-40">
      <MeshBackground />

      <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 pb-20 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8">
        {/* Left — copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            data-testid="hero-overline"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-white/70 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-600 backdrop-blur md:text-xs"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Actalink — Programmable Money Infrastructure
          </motion.div>

          <motion.h1
            variants={lineWrap}
            initial="hidden"
            animate="show"
            data-testid="hero-heading"
            className="font-display text-5xl font-black leading-[0.94] tracking-tighter text-[#0A0A0A] sm:text-6xl md:text-7xl lg:text-[5.6rem]"
          >
            {heroLines.map((line, i) => (
              <span key={i} className="reveal-mask">
                <motion.span variants={lineUp} className="block">
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 max-w-md text-base leading-relaxed text-neutral-600 md:text-lg"
          >
            Actalink unifies crypto, cards, and fiat into seamless interfaces — from storing
            assets to depositing funds, accepting payments and spending globally.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-10"
          >
            <button
              onClick={scrollToProducts}
              data-testid="hero-cta"
              className="group inline-flex items-center gap-2.5 rounded-full bg-acta-indigo px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_-8px_rgba(79,70,229,0.6)] transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#4338CA]"
            >
              Explore the products
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 grid grid-cols-2 gap-y-8 border-t border-black/10 pt-8 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label} data-testid={`hero-stat-${s.value}`}>
                <div className="font-display text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: s.color }}>
                  {s.value}
                </div>
                <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500 md:text-[11px]">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — animated flow */}
        <div className="relative">
          <ProductFlow />
        </div>
      </div>
    </section>
  );
}
