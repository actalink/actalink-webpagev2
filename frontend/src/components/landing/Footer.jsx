import React from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const cols = [
  { title: "Products", links: ["Bexo", "OpenDeposit", "ActaPay", "Straight"] },
  { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
  { title: "Resources", links: ["Docs", "API", "Status", "Security"] },
];

export default function Footer() {
  return (
    <footer id="footer" data-testid="footer" className="relative w-full overflow-hidden bg-[#0A0A0A] px-5 pt-24 pb-10 text-white md:px-10 md:pt-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="border-b border-white/10 pb-16 md:pb-24">
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-white/40">Get in touch</span>
          <div className="mt-6 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="font-display text-[16vw] font-black leading-[0.82] tracking-tighter lg:text-[11vw]">
              Let&apos;s talk.
            </h2>
            <a
              href="mailto:hello@acta.link"
              data-testid="footer-contact-cta"
              className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-acta-indigo px-7 py-4 text-sm font-semibold text-white transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#4338CA]"
            >
              hello@acta.link
              <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-10 py-16 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden>
                <path d="M4 28L16 4l12 24H21L16 17l-5 11H4z" fill="#fff" />
              </svg>
              <span className="font-display text-2xl font-extrabold tracking-tight">Actalink</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              The payment interface layer for programmable money — powering the complete lifecycle of stablecoin payments.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">{c.title}</h4>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#footer"
                      data-testid={`footer-link-${l.toLowerCase()}`}
                      className="text-sm text-white/70 transition-colors duration-200 hover:text-indigo-400"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Actalink. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#footer" className="transition-colors hover:text-white">Privacy</a>
            <a href="#footer" className="transition-colors hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
