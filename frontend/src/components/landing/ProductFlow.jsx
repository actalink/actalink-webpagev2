import React from "react";
import { motion } from "framer-motion";
import { Wallet, Store } from "lucide-react";

/*
  Kinetic product-flow cluster used inside the Hero.
  Black / white / indigo (#4F46E5) aesthetic (frosted white cards).
  Two EQUALLY sized cards, side by side. Flow: Accept (left) -> Store (right),
  linked by a self-drawing line. Was a 2x2 with Deposit/OpenDeposit and
  Spend/Straight until 2026-07-30; dropping them collapsed the grid to one row,
  so the reference box went 500x530 -> 500x300. 500-wide reference grid, sized in
  container-query width units (cqw). SVG viewBox (0 0 500 300) with
  preserveAspectRatio="none" keeps scaling uniform.

  Geometry and the connector path have to move together. 1cqw = 5px of the
  reference grid. Cards are 44cqw wide with a 12cqw gutter (x 0-220 and 280-500),
  and the right card sits 12cqw lower than the left so the elbow has room to
  step down. Change any of that and the path below needs the same edit.
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
    {/* Deliberately under the 2.6cqw product name below it — this is the step,
        not the headline. nowrap because "Track & manage" is the long one. */}
    <span className="whitespace-nowrap font-mono text-[1.9cqw] font-semibold uppercase tracking-[0.14em] text-[#4F46E5]">{label}</span>
  </div>
);

const Chip = ({ children }) => (
  <span className="rounded-full border border-black/[0.07] bg-neutral-50 px-[1.8cqw] py-[0.7cqw] text-[1.8cqw] font-medium text-neutral-600">
    {children}
  </span>
);

// The product name carries the row — larger, bold and black — with its audience
// trailing in the old small grey. Both stay on one line: Space Mono advances a
// flat 0.6em, so at these sizes "ACTAPAY · MERCHANT" measures ~35cqw against the
// 38cqw of card left inside the padding. Push either size up and it will clip
// (the card is overflow-hidden), so re-measure before changing them.
const Head = ({ icon, name, role }) => (
  <div className="flex items-center gap-[1.8cqw]">
    <span className="grid h-[6cqw] w-[6cqw] place-items-center rounded-full bg-indigo-100 text-indigo-600">{icon}</span>
    <span className="whitespace-nowrap font-mono uppercase tracking-[0.12em]">
      <span className="text-[2.6cqw] font-bold text-[#0A0A0A]">{name}</span>
      <span className="text-[1.8cqw] text-neutral-400"> · {role}</span>
    </span>
  </div>
);

export default function ProductFlow() {
  return (
    <div
      data-testid="product-flow"
      className="relative mx-auto w-full max-w-[500px] aspect-[500/300]"
      style={{ containerType: "inline-size" }}
    >
      {/* Connecting elbow — indigo. Accept -> Track & manage. Leaves the left
          card's right edge at its mid-height (y 120), steps down through the
          gutter on rounded corners and enters the right card at its mid-height
          (y 180). preserveAspectRatio="none" stretches the box, so the corner
          arcs skew a little off a 500x300 render — imperceptible at these radii. */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 300" fill="none" preserveAspectRatio="none">
        <motion.path
          d="M220 120 H240 Q250 120 250 130 V170 Q250 180 260 180 H280"
          stroke="#818CF8"
          strokeWidth="2.6"
          strokeLinecap="round"
          variants={pathDraw(0)}
          initial="hidden"
          animate="show"
        />
      </svg>

      {/* 01 — ACCEPT / ActaPay  (LEFT, raised) */}
      <motion.div custom={0} variants={cardIn} initial="hidden" animate="show" className={`${CARD} left-[0cqw] top-[2cqw] w-[44cqw]`}>
        <StepTag n="01" label="Accept" />
        <Head icon={<Store className="h-[3.2cqw] w-[3.2cqw]" />} name="ActaPay" role="Merchant" />
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

      {/* 02 — TRACK & MANAGE / Bexo  (RIGHT, dropped 12cqw) */}
      <motion.div custom={1} variants={cardIn} initial="hidden" animate="show" className={`${CARD} left-[56cqw] top-[14cqw] w-[44cqw]`}>
        <StepTag n="02" label="Track & manage" />
        <Head icon={<Wallet className="h-[3.2cqw] w-[3.2cqw]" />} name="Bexo" role="Consumer" />
        <div className="mt-auto">
          <div className="font-display text-[6.4cqw] font-extrabold leading-none text-neutral-900">
            <span className="text-[2.8cqw] align-top text-neutral-400">US$</span> 12,847<span className="text-neutral-400">.36</span>
          </div>
          <div className="mt-[2cqw] flex flex-wrap gap-[1.2cqw]">
            <Chip>Base</Chip><Chip>Polygon</Chip><Chip>Ethereum</Chip>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
