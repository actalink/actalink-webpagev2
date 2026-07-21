import React from "react";

const items = [
  "The Payment Interface Layer",
  "Programmable Money",
  "Store · Deposit · Accept · Spend",
  "One Interoperable Ecosystem",
];

export default function Marquee() {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <section data-testid="marquee" className="w-full overflow-hidden border-y border-black/10 bg-white py-8 md:py-10">
      <div className="marquee-track">
        {loop.map((t, i) => (
          <div key={i} className="flex items-center whitespace-nowrap">
            <span className="px-8 font-display text-2xl font-bold uppercase tracking-tight text-[#0A0A0A] md:px-12 md:text-4xl">
              {t}
            </span>
            <span className="text-blue-600">✳</span>
          </div>
        ))}
      </div>
    </section>
  );
}
