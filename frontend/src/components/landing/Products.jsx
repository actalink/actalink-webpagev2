import React, { useRef } from "react";
import { Wallet, Store, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

// OpenDeposit (Deposit) and Straight (Spend) were pulled from the site on
// 2026-07-30 — neither is public yet. Their cards, hero-flow tiles and footer
// links went with them; the copy above the grid counts this array, so keep the
// heading in step if a product comes back.
// Order matters twice over: it sets the card order AND the 01/02 step numbers,
// which have to agree with the hero flow cluster in ProductFlow.jsx.
const products = [
  {
    step: "Accept",
    name: "ActaPay",
    logo: "/logos/actapay.webp",
    icon: Store,
    desc: "Merchant payment gateway for accepting stablecoin payments online and in-store with payment links, subscriptions, invoices, POS, and instant settlement.",
    tags: ["Merchant", "Online + POS", "Instant"],
    href: "https://getactapay.com",
  },
  {
    step: "Track & manage",
    name: "Bexo",
    logo: "/logos/bexo.webp",
    icon: Wallet,
    desc: "Store, manage, and move digital assets with a self-custody wallet featuring gasless transactions — your keys, your funds. Banking On-Chain.",
    tags: ["Self-custody", "Multi-chain", "Consumer"],
    href: "https://bexowallet.com/",
  },
];

const ProductCard = ({ p, index }) => {
  const ref = useRef(null);
  const Icon = p.icon;

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <Reveal delay={(index % 2) * 0.1}>
      <div
        ref={ref}
        onMouseMove={onMove}
        data-testid={`product-card-${p.name.toLowerCase()}`}
        className="group relative h-full overflow-hidden rounded-[28px] border border-black/[0.07] bg-white p-8 shadow-[0_10px_40px_-24px_rgba(15,23,42,0.35)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(79,70,229,0.3)] md:p-10"
      >
        {/* indigo spotlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(360px circle at var(--mx) var(--my), rgba(79,70,229,0.09), transparent 70%)",
          }}
        />
        <div className="relative z-10">
          <div className="flex items-start justify-between">
            <span className="grid h-12 w-12 place-items-center rounded-2xl border border-black/[0.06] bg-indigo-50 text-indigo-600">
              <Icon size={20} />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-indigo-600">
              {String(index + 1).padStart(2, "0")} · {p.step}
            </span>
          </div>

          {p.logo ? (
            <img
              src={p.logo}
              alt={`${p.name} logo`}
              data-testid={`product-logo-${p.name.toLowerCase()}`}
              className={`${p.name === "ActaPay" ? "mt-8 h-10 md:h-12" : "mt-8 h-8 md:h-9"} w-auto object-contain`}
            />
          ) : (
            <h3 className="mt-8 font-display text-4xl font-extrabold tracking-tight text-[#0A0A0A] md:text-5xl">
              {p.name}
            </h3>
          )}
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-neutral-600">
            {p.desc}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-black/[0.07] bg-neutral-50 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500"
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-neutral-400 transition-colors duration-300 group-hover:text-indigo-600"
          >
            Visit Webpage
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </Reveal>
  );
};

export default function Products() {
  return (
    <section
      id="products"
      data-testid="products-section"
      className="relative w-full px-5 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">
              The products
            </span>
            <h2 className="mt-6 max-w-2xl font-display text-4xl font-extrabold leading-[1.03] tracking-tight text-[#0A0A0A] sm:text-5xl md:text-6xl">
              One platform.
              <br />
              Two capabilities.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-neutral-600">
            Accept and manage — the lifecycle of programmable money, connected
            end to end.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {products.map((p, i) => (
            <ProductCard key={p.name} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
