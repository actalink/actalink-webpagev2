import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Menu } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -90 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  const goSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToId(id), 200);
    } else {
      scrollToId(id);
    }
  };

  const navItems = [
    { label: "Home", action: () => navigate("/") },
    { label: "Products", action: () => goSection("products") },
    { label: "Blog", action: () => navigate("/blogs") },
  ];

  // Radix locks body scroll while the sheet is open, so a goSection() fired from
  // a drawer link would be swallowed. Close first, then act once the 0.3s
  // slide-out has finished.
  const runAndClose = (action) => {
    setMenuOpen(false);
    setTimeout(action, 300);
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
          scrolled
            ? "my-2 rounded-full border border-black/5 bg-white/70 py-2.5 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            : "py-6"
        }`}
      >
        <button
          onClick={() => navigate("/")}
          data-testid="nav-logo"
          className="flex items-center"
        >
          <img
            src="/logos/actalink-black.png"
            alt="Actalink"
            className="h-9 w-auto md:h-11"
          />
        </button>

        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map((l) => (
            <button
              key={l.label}
              onClick={l.action}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="group relative text-sm font-medium text-neutral-700 transition-colors hover:text-black"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-black transition-[width] duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => goSection("footer")}
            data-testid="nav-get-in-touch"
            className="group inline-flex items-center gap-1.5 rounded-full border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-[#0A0A0A] transition-colors hover:border-black hover:bg-black hover:text-white"
          >
            Get in touch
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>

          {/* Mobile only — the md+ breakpoint has the inline nav above. */}
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                data-testid="nav-menu-toggle"
                className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white p-2 text-[#0A0A0A] transition-colors hover:border-black hover:bg-black hover:text-white md:hidden"
              >
                <Menu size={18} />
              </button>
            </SheetTrigger>
            {/* The scaffold's default is 500ms in / 300ms out; both are pinned to
                300ms here. */}
            <SheetContent
              side="left"
              data-testid="nav-mobile-menu"
              className="w-[78%] max-w-[320px] border-black/5 bg-[#FBFBF7] data-[state=closed]:duration-300 data-[state=open]:duration-300"
            >
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <img
                src="/logos/actalink-black.png"
                alt="Actalink"
                className="h-9 w-auto"
              />
              <nav className="mt-10 flex flex-col">
                {navItems.map((l) => (
                  <button
                    key={l.label}
                    onClick={() => runAndClose(l.action)}
                    data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                    className="border-b border-black/5 py-4 text-left font-display text-2xl font-extrabold tracking-tight text-[#0A0A0A] transition-colors hover:text-indigo-600"
                  >
                    {l.label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
