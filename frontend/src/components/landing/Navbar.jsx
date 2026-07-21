import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Mark = () => (
  <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden>
    <path d="M4 28L16 4l12 24H21L16 17l-5 11H4z" fill="#0A0A0A" />
  </svg>
);

const links = [
  { label: "Home", href: "#hero" },
  { label: "Products", href: "#products" },
  { label: "Company", href: "#manifesto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      data-testid="navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className={`mx-auto flex max-w-[1400px] items-center justify-between px-5 md:px-10 transition-[padding,background,box-shadow] duration-500 ${
          scrolled ? "my-2 rounded-full border border-black/5 bg-white/70 py-2.5 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]" : "py-6"
        }`}
      >
        <a href="#hero" onClick={(e) => scrollTo(e, "#hero")} data-testid="nav-logo" className="flex items-center gap-2">
          <Mark />
          <span className="font-display text-2xl font-extrabold tracking-tight text-[#0A0A0A]">Actalink</span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => scrollTo(e, l.href)}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="group relative text-sm font-medium text-neutral-700 transition-colors hover:text-black"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-black transition-[width] duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#footer"
          onClick={(e) => scrollTo(e, "#footer")}
          data-testid="nav-get-in-touch"
          className="group inline-flex items-center gap-1.5 rounded-full border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-[#0A0A0A] transition-colors hover:border-black hover:bg-black hover:text-white"
        >
          Get in touch
          <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </motion.header>
  );
}
