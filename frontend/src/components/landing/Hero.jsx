import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProductFlow from "./ProductFlow";

const heroLines = ["The Stablecoin Payment", "Interface Layer"];

const lineWrap = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const lineUp = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const stats = [
  // Tracks the cards in Products.jsx — was "04" before OpenDeposit and Straight
  // came off the site on 2026-07-30.
  { value: "02", label: "Specialised products", color: "#0A0A0A" },
  { value: "6+", label: "Networks supported", color: "#4F46E5" },
  { value: "99.99%", label: "Uptime target", color: "#0A0A0A" },
  { value: "Real-time", label: "Settlement", color: "#4F46E5" },
];

export default function Hero() {
  const scrollToProducts = () => document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" data-testid="hero-section" className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-[#FBFBF7] pt-28 pb-16 md:pt-32">
      {/* simple, subtle indigo glow (single, static) */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[-5%] h-[60vw] w-[60vw] rounded-full opacity-[0.5]"
        style={{ background: "radial-gradient(circle, rgba(129,140,248,0.13), transparent 62%)" }}
      />

      {/* items-start, not items-center: the flow cluster's first card has to line
          up with the top of the heading. Its height is tuned to land the second
          card on the stats row — see ProductFlow. */}
      <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-10">
        {/* Left — copy */}
        <div>
          <motion.h1
            variants={lineWrap}
            initial="hidden"
            animate="show"
            data-testid="hero-heading"
            className="font-display text-4xl font-black leading-[1.02] tracking-tight text-[#0A0A0A] sm:text-5xl md:text-[3.25rem] lg:text-[3.75rem]"
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
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-7 max-w-lg text-sm font-light leading-relaxed text-neutral-500 md:text-[15px]"
          >
            Infrastructure powering the complete lifecycle of stablecoin payments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-10"
          >
            <button
              onClick={scrollToProducts}
              data-testid="hero-cta"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#4F46E5] px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_-8px_rgba(79,70,229,0.55)] transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#4338CA]"
            >
              Explore the products
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* stats. gap-x: without it "Specialised products" ran straight into
              "Networks supported" — the labels are wider than their columns. */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-black/10 pt-8 sm:grid-cols-4"
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
