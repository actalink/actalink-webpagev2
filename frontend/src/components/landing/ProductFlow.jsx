import React from "react";
import { motion } from "framer-motion";
import { Wallet, ArrowDownToLine, Store, CreditCard, Wifi, Check } from "lucide-react";

/*
  Kinetic product-flow cluster used inside the Hero.
  Light, modern, monochrome + blue aesthetic (frosted white cards).
  500x620 reference grid; sized in container-query width units (cqw) so it
  scales perfectly. SVG viewBox (0 0 500 620) with preserveAspectRatio="none"
  against the matched aspect ratio keeps scaling uniform.
*/

const cardIn = {
  hidden: { opacity: 0, y: 26, scale: 0.96 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, delay: 0.25 + i * 0.18, ease: [0.22, 1, 0.36, 1] },
  }),
};

const pathDraw = (i) => ({
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.9, delay: 0.7 + i * 0.4, ease: "easeInOut" }, opacity: { duration: 0.2, delay: 0.7 + i * 0.4 } },
  },
});

const CARD =
  "absolute rounded-[3cqw] border border-black/[0.06] bg-white/80 backdrop-blur-xl shadow-[0_24px_60px_-30px_rgba(15,23,42,0.5)]";

const StepTag = ({ n, label, color }) => (
  <div className="mb-[2cqw] flex items-center gap-[1.4cqw] font-mono text-[2cqw] uppercase tracking-[0.18em]">
    <span className="inline-block h-[1.4cqw] w-[1.4cqw] rounded-full" style={{ background: color }} />
    <span className="text-neutral-400">{n}</span>
    <span className="text-neutral-600">{label}</span>
  </div>
);

const Chip = ({ children }) => (
  <span className="rounded-full border border-black/[0.07] bg-neutral-50 px-[2cqw] py-[0.8cqw] text-[1.9cqw] font-medium text-neutral-600">
    {children}
  </span>
);

export default function ProductFlow() {
  return (
    <div
      data-testid="product-flow"
      className="relative mx-auto w-full max-w-[520px] aspect-[500/620]"
      style={{ containerType: "inline-size" }}
    >
      {/* connecting lines — monochrome + blue */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 620" fill="none" preserveAspectRatio="none">
        <motion.path d="M260 80 C 345 92, 305 190, 235 172" stroke="#CBD5E1" strokeWidth="2.4" strokeLinecap="round" variants={pathDraw(0)} initial="hidden" animate="show" />
        <motion.path d="M362 262 C 362 335, 150 205, 150 268" stroke="#2563EB" strokeWidth="2.4" strokeLinecap="round" variants={pathDraw(1)} initial="hidden" animate="show" />
        <motion.path d="M150 408 C 150 472, 362 352, 362 398" stroke="#94A3B8" strokeWidth="2.4" strokeLinecap="round" variants={pathDraw(2)} initial="hidden" animate="show" />
      </svg>

      {/* External wallets label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute left-[0cqw] top-[-2cqw] font-mono text-[2cqw] uppercase tracking-[0.15em] text-neutral-400"
      >
        ↳ external wallets
      </motion.div>

      {/* 01 — BEXO / Store */}
      <motion.div custom={0} variants={cardIn} initial="hidden" animate="show" className={`${CARD} left-[2cqw] top-[2cqw] w-[50cqw] p-[3cqw]`}>
        <StepTag n="01" label="Store" color="#3B82F6" />
        <div className="flex items-center gap-[2cqw]">
          <span className="grid h-[6cqw] w-[6cqw] place-items-center rounded-full bg-blue-50 text-blue-600">
            <Wallet size={12} className="h-[3.2cqw] w-[3.2cqw]" />
          </span>
          <span className="font-mono text-[2.2cqw] uppercase tracking-[0.2em] text-neutral-400">Bexo · Wallet</span>
        </div>
        <div className="mt-[2.4cqw] font-display text-[7cqw] font-extrabold leading-none text-neutral-900">
          <span className="text-[3cqw] align-top text-neutral-400">US$</span> 12,847<span className="text-neutral-400">.36</span>
        </div>
        <div className="mt-[2.4cqw] flex flex-wrap gap-[1.4cqw]">
          <Chip>Base</Chip><Chip>Polygon</Chip><Chip>Ethereum</Chip>
        </div>
      </motion.div>

      {/* 02 — OPENDEPOSIT / Deposit */}
      <motion.div custom={1} variants={cardIn} initial="hidden" animate="show" className={`${CARD} left-[47cqw] top-[26cqw] w-[51cqw] p-[3cqw]`}>
        <StepTag n="02" label="Deposit" color="#2563EB" />
        <div className="flex items-center gap-[2cqw]">
          <span className="grid h-[6cqw] w-[6cqw] place-items-center rounded-full bg-blue-50 text-blue-600">
            <ArrowDownToLine size={12} className="h-[3.2cqw] w-[3.2cqw]" />
          </span>
          <span className="font-mono text-[2.2cqw] uppercase tracking-[0.2em] text-neutral-400">OpenDeposit</span>
        </div>
        <div className="mt-[2.4cqw] rounded-[2cqw] border border-black/[0.06] bg-neutral-50 p-[2.2cqw]">
          <div className="flex items-center justify-between text-[2.2cqw] text-neutral-500">
            <span>Incoming deposit</span><span className="flex items-center gap-[1cqw] text-blue-600"><span className="h-[1.4cqw] w-[1.4cqw] rounded-full bg-blue-600" />live</span>
          </div>
          <div className="mt-[1.4cqw] font-display text-[5cqw] font-bold text-neutral-900">+ 5,000.00 <span className="text-[2.4cqw] text-neutral-400">USDC</span></div>
        </div>
        <p className="mt-[2cqw] font-mono text-[2cqw] uppercase tracking-[0.14em] text-neutral-400">Embedded · from connected wallet</p>
      </motion.div>

      {/* 03 — ACTAPAY / Accept */}
      <motion.div custom={2} variants={cardIn} initial="hidden" animate="show" className={`${CARD} left-[4cqw] top-[54cqw] w-[52cqw] p-[3cqw]`}>
        <StepTag n="03" label="Accept" color="#64748B" />
        <div className="flex items-center gap-[2cqw]">
          <span className="grid h-[6cqw] w-[6cqw] place-items-center rounded-full bg-neutral-100 text-neutral-700">
            <Store size={12} className="h-[3.2cqw] w-[3.2cqw]" />
          </span>
          <span className="font-mono text-[2.2cqw] uppercase tracking-[0.2em] text-neutral-400">ActaPay · Merchant</span>
        </div>
        <div className="mt-[2.4cqw] flex items-center justify-between">
          <div>
            <div className="font-display text-[3.6cqw] font-bold text-neutral-900">Café Loro</div>
            <div className="font-mono text-[2cqw] uppercase tracking-[0.14em] text-neutral-400">Merchant · Lisbon</div>
          </div>
          <div className="text-right">
            <div className="font-display text-[4.4cqw] font-extrabold text-blue-600">+$28.40</div>
            <div className="font-mono text-[2cqw] uppercase tracking-[0.14em] text-neutral-400">USDC · Instant</div>
          </div>
        </div>
        <div className="mt-[2.4cqw] flex items-center justify-between border-t border-black/[0.06] pt-[2cqw] font-mono text-[2cqw] uppercase tracking-[0.14em] text-neutral-500">
          <span>Settlement</span>
          <span className="flex items-center gap-[1.2cqw] text-blue-600">
            <span className="relative flex h-[1.8cqw] w-[1.8cqw]">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-blue-500" />
              <span className="relative inline-flex h-[1.8cqw] w-[1.8cqw] rounded-full bg-blue-600" />
            </span>
            Received
          </span>
        </div>
      </motion.div>

      {/* 04 — STRAIGHT / Spend */}
      <motion.div custom={3} variants={cardIn} initial="hidden" animate="show" className={`${CARD} left-[46cqw] top-[80cqw] w-[52cqw] p-[3cqw]`}>
        <StepTag n="04" label="Spend" color="#3B82F6" />
        <div className="flex items-center gap-[2cqw]">
          <span className="grid h-[6cqw] w-[6cqw] place-items-center rounded-full bg-blue-50 text-blue-600">
            <CreditCard size={12} className="h-[3.2cqw] w-[3.2cqw]" />
          </span>
          <span className="font-mono text-[2.2cqw] uppercase tracking-[0.2em] text-neutral-400">Straight · Card</span>
        </div>
        <div className="mt-[2.4cqw] flex items-center justify-between rounded-[2cqw] bg-gradient-to-br from-neutral-900 to-neutral-700 p-[2.2cqw]">
          <div>
            <div className="font-mono text-[2cqw] uppercase tracking-[0.16em] text-white/60">USDC · Base</div>
            <div className="mt-[2cqw] h-[3.4cqw] w-[6cqw] rounded-[0.8cqw] bg-blue-400/90" />
            <div className="mt-[2cqw] font-mono text-[2cqw] uppercase tracking-[0.16em] text-white/80">Alex Chen</div>
          </div>
          <Wifi className="h-[4cqw] w-[4cqw] text-white/60" />
        </div>
        <div className="mt-[2.4cqw] flex items-center justify-between font-mono text-[2cqw] uppercase tracking-[0.14em] text-neutral-500">
          <span>Tap to pay · Café Loro</span>
          <span className="flex items-center gap-[1cqw] rounded-full bg-blue-50 px-[1.8cqw] py-[0.8cqw] text-blue-600">
            <Check className="h-[2.4cqw] w-[2.4cqw]" /> Approved
          </span>
        </div>
      </motion.div>
    </div>
  );
}
