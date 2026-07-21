import React from "react";
import Reveal from "./Reveal";

const chapters = [
  {
    n: "01",
    title: "Most companies solve one part.",
    body: "The stablecoin payment journey is fragmented — storing, depositing, accepting and spending each live in separate silos, forcing everyone to stitch tools together.",
  },
  {
    n: "02",
    title: "Actalink connects every stage.",
    body: "A single interoperable platform links the full lifecycle, so developers, fintechs, merchants and consumers move seamlessly from holding assets to spending them anywhere.",
  },
  {
    n: "03",
    title: "Adopt one, or the whole ecosystem.",
    body: "Each product stands on its own, but together they compound — creating a complete programmable money ecosystem with four reinforcing revenue engines.",
  },
];

export default function Manifesto() {
  return (
    <section id="manifesto" data-testid="manifesto-section" className="relative w-full px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-16 md:mb-24">
          <h2 className="max-w-4xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-[#0A0A0A] sm:text-5xl md:text-6xl">
            One company. One platform.
            <br />
            <span className="text-neutral-400">Four revenue engines.</span>
          </h2>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-black/10 bg-black/10 md:grid-cols-3">
          {chapters.map((c, i) => (
            <Reveal
              key={c.n}
              delay={i * 0.12}
              data-testid={`manifesto-chapter-${c.n}`}
              className="group relative flex flex-col justify-between bg-[#FBFBF7] p-8 transition-colors duration-500 hover:bg-white md:p-12"
            >
              <div>
                <span className="font-display text-7xl font-black leading-none text-black/[0.07] transition-colors duration-500 group-hover:text-indigo-500/40 md:text-8xl">
                  {c.n}
                </span>
                <h3 className="mt-8 font-display text-2xl font-bold tracking-tight text-[#0A0A0A] md:text-3xl">
                  {c.title}
                </h3>
              </div>
              <p className="mt-6 text-base leading-relaxed text-neutral-600">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
