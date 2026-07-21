import React from "react";
import { motion } from "framer-motion";
import { Wallet, ArrowDownToLine, Store, CreditCard, Wifi, Check } from "lucide-react";

/*
  Kinetic product-flow cluster used inside the Hero.
  Black / white / indigo (#4F46E5) aesthetic (frosted white cards).
  2x2 grid of EQUALLY sized cards. Flow: Deposit (top-left) -> Store (top-right)
  -> Spend (bottom-right) -> Accept (bottom-left), linked by self-drawing lines.
  500x530 reference grid, sized in container-query width units (cqw). SVG viewBox
  (0 0 500 530) with preserveAspectRatio="none" keeps scaling uniform.
*/

const cardIn = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, delay: 0.2 + i * 0.16, ease: [0.22, 1, 0.36, 1] },
  }),
};

const pathDraw = (i) => ({
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.6, delay: 0.75 + i * 0.35, ease: "easeInOut" }, opacity: { duration: 0.2, delay: 0.75 + i * 0.35 } },
  },
});

const CARD =
  "absolute flex h-[44cqw] flex-col overflow-hidden rounded-[3cqw] border border-black/[0.07] bg-white/85 p-[3cqw] backdrop-blur-xl shadow-[0_24px_60px_-30px_rgba(15,23,42,0.5)]";

const StepTag = ({ n, label }) => (
  <div className="mb-[2cqw] flex items-center gap-[1.6cqw]">
    <span className="grid place-items-center rounded-[1.2cqw] bg-[#4F46E5] px-[1.8cqw] py-[0.8cqw] font-display text-[2.4cqw] font-bold leading-none text-white">
      {n}
    </span>
    <span className="font-mono text-[2.4cqw] font-semibold uppercase tracking-[0.14em] text-neutral-800">{label}</span>
  </div>
);

const Chip = ({ children }) => (
  <span className="rounded-full border border-black/[0.07] bg-neutral-50 px-[1.8cqw] py-[0.7cqw] text-[1.8cqw] font-medium text-neutral-600">
    {children}
  </span>
);

const Head = ({ icon, label }) => (
  <div className="flex items-center gap-[1.8cqw]">
    <span className="grid h-[6cqw] w-[6cqw] place-items-center rounded-full bg-indigo-100 text-indigo-600">{icon}</span>
    <span className="whitespace-nowrap font-mono text-[2cqw] uppercase tracking-[0.12em] text-neutral-400">{label}</span>
  </div>
);

export default function ProductFlow() {
  return (
    <div
      data-testid="product-flow"
      className="relative mx-auto w-full max-w-[500px] aspect-[500/530]"
      style={{ containerType: "inline-size" }}
    >
      {/* connecting lines — indigo. Deposit->Store->Spend->Accept */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 530" fill="none" preserveAspectRatio="none">
        <motion.path d="M230 140 L270 140" stroke="#818CF8" strokeWidth="2.6" strokeLinecap="round" variants={pathDraw(0)} initial="hidden" animate="show" />
        <motion.path d="M385 250 L385 290" stroke="#A5B4FC" strokeWidth="2.6" strokeLinecap="round" variants={pathDraw(1)} initial="hidden" animate="show" />
        <motion.path d="M270 400 L230 400" stroke="#818CF8" strokeWidth="2.6" strokeLinecap="round" variants={pathDraw(2)} initial="hidden" animate="show" />
      </svg>

      {/* 01 — DEPOSIT / OpenDeposit  (TOP-LEFT) */}
      <motion.div custom={0} variants={cardIn} initial="hidden" animate="show" className={`${CARD} left-[0cqw] top-[6cqw] w-[46cqw]`}>
        <StepTag n="01" label="Deposit" />
        <Head icon={<ArrowDownToLine className="h-[3.2cqw] w-[3.2cqw]" />} label="OpenDeposit" />
        <div className="mt-auto rounded-[2cqw] border border-black/[0.06] bg-neutral-50 p-[2.2cqw]">
          <div className="flex items-center justify-between text-[2.1cqw] text-neutral-500">
            <span>Incoming deposit</span><span className="flex items-center gap-[1cqw] text-indigo-600"><span className="h-[1.4cqw] w-[1.4cqw] rounded-full bg-indigo-600" />live</span>
          </div>
          <div className="mt-[1.2cqw] font-display text-[4.8cqw] font-bold text-neutral-900">+ 5,000.00 <span className="text-[2.2cqw] text-neutral-400">USDC</span></div>
        </div>
      </motion.div>

      {/* 02 — STORE / Bexo  (TOP-RIGHT) */}
      <motion.div custom={1} variants={cardIn} initial="hidden" animate="show" className={`${CARD} left-[54cqw] top-[6cqw] w-[46cqw]`}>
        <StepTag n="02" label="Store" />
        <Head icon={<Wallet className="h-[3.2cqw] w-[3.2cqw]" />} label="Bexo · Wallet" />
        <div className="mt-auto">
          <div className="font-display text-[6.4cqw] font-extrabold leading-none text-neutral-900">
            <span className="text-[2.8cqw] align-top text-neutral-400">US$</span> 12,847<span className="text-neutral-400">.36</span>
          </div>
          <div className="mt-[2cqw] flex flex-wrap gap-[1.2cqw]">
            <Chip>Base</Chip><Chip>Polygon</Chip><Chip>Ethereum</Chip>
          </div>
        </div>
      </motion.div>

      {/* 03 — SPEND / Straight  (BOTTOM-RIGHT) */}
      <motion.div custom={2} variants={cardIn} initial="hidden" animate="show" className={`${CARD} left-[54cqw] top-[58cqw] w-[46cqw]`}>
        <StepTag n="03" label="Spend" />
        <Head icon={<CreditCard className="h-[3.2cqw] w-[3.2cqw]" />} label="Straight · Card" />
        <div className="mt-auto flex items-center justify-between rounded-[2cqw] bg-gradient-to-br from-neutral-900 to-neutral-700 p-[2.2cqw]">
          <div>
            <div className="font-mono text-[1.9cqw] uppercase tracking-[0.16em] text-white/60">USDC · Base</div>
            <div className="mt-[1.6cqw] h-[3.2cqw] w-[5.6cqw] rounded-[0.8cqw] bg-indigo-400/90" />
            <div className="mt-[1.6cqw] font-mono text-[1.9cqw] uppercase tracking-[0.16em] text-white/80">Alex Chen</div>
          </div>
          <Wifi className="h-[4cqw] w-[4cqw] text-white/60" />
        </div>
      </motion.div>

      {/* 04 — ACCEPT / ActaPay  (BOTTOM-LEFT) */}
      <motion.div custom={3} variants={cardIn} initial="hidden" animate="show" className={`${CARD} left-[0cqw] top-[58cqw] w-[46cqw]`}>
        <StepTag n="04" label="Accept" />
        <Head icon={<Store className="h-[3.2cqw] w-[3.2cqw]" />} label="ActaPay · Merchant" />
        <div className="mt-auto flex items-end justify-between">
          <div>
            <div className="font-display text-[3.4cqw] font-bold text-neutral-900">Café Loro</div>
            <div className="flex items-center gap-[1cqw] font-mono text-[1.9cqw] uppercase tracking-[0.12em] text-indigo-600">
              <span className="h-[1.4cqw] w-[1.4cqw] rounded-full bg-indigo-600" />Received
            </div>
          </div>
          <div className="text-right">
            <div className="font-display text-[4.2cqw] font-extrabold text-indigo-600">+$28.40</div>
            <div className="font-mono text-[1.9cqw] uppercase tracking-[0.12em] text-neutral-400">USDC · Instant</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
