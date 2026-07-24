import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import Reveal from "./Reveal";

const products = [
  { label: "Bexo", href: "https://bexowallet.com" },
  { label: "OpenDeposit", href: "https://opendeposit.xyz" },
  { label: "ActaPay", href: "https://getactapay.com" },
  { label: "Straight", href: "https://usestraight.com" },
];

const socials = [
  { label: "X", href: "https://x.com/actalinkhq" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/actalink/" },
  { label: "YouTube", href: "https://www.youtube.com/@actalink" },
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const goSection = (id) => {
    const scroll = () => {
      const el = document.getElementById(id);
      if (!el) return;
      if (window.__lenis) window.__lenis.scrollTo(el, { offset: -90 });
      else el.scrollIntoView({ behavior: "smooth" });
    };
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scroll, 200);
    } else scroll();
  };

  return (
    <footer
      id="footer"
      data-testid="footer"
      className="relative w-full overflow-hidden bg-[#0A0A0A] px-5 pt-24 pb-10 text-white md:px-10 md:pt-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="border-b border-white/10 pb-16 md:pb-24">
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-white/40">
            Get in touch
          </span>
          <div className="mt-6 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="font-display text-[16vw] font-black leading-[0.82] tracking-tighter lg:text-[11vw]">
              Let&apos;s talk.
            </h2>
            <a
              href="mailto:hello@acta.link"
              data-testid="footer-contact-cta"
              className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-[#4F46E5] px-7 py-4 text-sm font-semibold text-white transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#4338CA]"
            >
              hello@acta.link
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-10 py-16 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <button onClick={() => navigate("/")} className="block">
              <img
                src="/logos/actalink-white.png"
                alt="Actalink"
                className="h-9 w-auto md:h-11"
              />
            </button>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Infrastructure powering the complete lifecycle of stablecoin
              payments.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
              Products
            </h4>
            <ul className="mt-5 space-y-3">
              {products.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`footer-social-${s.label.toLowerCase()}`}
                    className="inline-flex items-center gap-1 text-sm text-white/70 transition-colors duration-200 hover:text-indigo-400"
                  >
                    {s.label} <ArrowUpRight size={13} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
              Resources
            </h4>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="https://docs.acta.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-link-docs"
                  className="inline-flex items-center gap-1 text-sm text-white/70 transition-colors duration-200 hover:text-indigo-400"
                >
                  Docs <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <button
                  onClick={() => navigate("/about-us")}
                  data-testid="footer-link-about-us"
                  className="text-sm text-white/70 transition-colors duration-200 hover:text-indigo-400"
                >
                  About us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
              Social
            </h4>
            <ul className="mt-5 space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`footer-social-${s.label.toLowerCase()}`}
                    className="inline-flex items-center gap-1 text-sm text-white/70 transition-colors duration-200 hover:text-indigo-400"
                  >
                    {s.label} <ArrowUpRight size={13} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} Actalink. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="#footer" className="transition-colors hover:text-white">
              Privacy
            </a>
            <a href="#footer" className="transition-colors hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
