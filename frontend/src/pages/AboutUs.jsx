import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Reveal from "@/components/landing/Reveal";

const stats = [
  { value: "2021", label: "Founded" },
  { value: "40+", label: "Team members" },
  { value: "6+", label: "Networks supported" },
  { value: "4", label: "Products shipped" },
];

const values = [
  { title: "Self-custody first", body: "We believe people and businesses should control their own money. Every product defaults to ownership, not intermediation." },
  { title: "Interoperable by design", body: "Money should move without friction between apps, chains and rails. We build the connective layer that makes it seamless." },
  { title: "Boringly reliable", body: "Payments infrastructure has to just work. We optimise for finality, uptime and clarity over novelty." },
  { title: "Global from day one", body: "Stablecoins are borderless. Our products are built to serve developers, merchants and consumers everywhere." },
];

const team = [
  { name: "Alex Chen", role: "Co-founder & CEO" },
  { name: "Mara Devlin", role: "Co-founder & CTO" },
  { name: "Yusuf Rahman", role: "Head of Product" },
  { name: "Sofia Marchetti", role: "Head of Engineering" },
];

export default function AboutUs() {
  const navigate = useNavigate();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Actalink",
    url: "https://acta.link/about-us",
    description: "Actalink is building the payment interface layer for stablecoins — infrastructure powering the complete lifecycle of stablecoin payments.",
    mainEntity: { "@type": "Organization", name: "Actalink", url: "https://acta.link/" },
  };
  return (
    <Layout>
      <Seo title="About us" path="/about-us" description="Actalink is building the payment interface layer for stablecoins — one company, four products, one interoperable platform." jsonLd={jsonLd} />
      <main data-testid="about-page" className="relative w-full px-5 pt-36 pb-24 md:px-10 md:pt-44 md:pb-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">About us</span>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-black leading-[0.98] tracking-tighter text-[#0A0A0A] sm:text-6xl md:text-7xl">
              Building the payment interface layer for stablecoins.
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-neutral-500">
              Actalink is infrastructure powering the complete lifecycle of stablecoin payments —
              from storing assets and funding accounts to accepting payments and spending anywhere
              card payments are accepted. One company, four products, one interoperable platform.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-16 grid grid-cols-2 gap-y-10 border-y border-black/10 py-12 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} data-testid={`about-stat-${s.value}`}>
                  <div className="font-display text-4xl font-extrabold tracking-tight text-[#0A0A0A] md:text-5xl">{s.value}</div>
                  <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-500">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-24 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#0A0A0A] md:text-4xl">Our story</h2>
            </Reveal>
            <Reveal delay={0.1} className="space-y-6 text-base leading-relaxed text-neutral-700 md:text-lg">
              <p>
                We started Actalink after watching the same problem play out again and again: stablecoins
                had become a genuine global settlement rail, but actually using them meant stitching
                together a dozen disconnected tools.
              </p>
              <p>
                So we set out to build the missing layer — a single, interoperable platform spanning the
                entire payment journey. Store with Bexo, fund with OpenDeposit, accept with ActaPay, and
                spend with Straight. Each works on its own, but together they form a complete programmable
                money ecosystem.
              </p>
              <p>
                Today we're a small, focused team building infrastructure that developers, fintechs,
                merchants and consumers rely on to move money the way the internet always should have.
              </p>
            </Reveal>
          </div>

          <div className="mt-24">
            <Reveal>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#0A0A0A] md:text-4xl">What we value</h2>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={(i % 2) * 0.08}>
                  <div className="h-full rounded-[24px] border border-black/[0.07] bg-white p-8 shadow-[0_10px_40px_-24px_rgba(15,23,42,0.35)]">
                    <div className="mb-4 h-1.5 w-10 rounded-full bg-indigo-600" />
                    <h3 className="font-display text-xl font-bold tracking-tight text-[#0A0A0A]">{v.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">{v.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-24">
            <Reveal>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#0A0A0A] md:text-4xl">The team</h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
              {team.map((m, i) => (
                <Reveal key={m.name} delay={(i % 4) * 0.06}>
                  <div className="rounded-[24px] border border-black/[0.07] bg-white p-6">
                    <div className="mb-5 h-40 w-full rounded-2xl" style={{ background: "linear-gradient(135deg,#EEF2FF,#C7D2FE 60%,#818CF8)" }} />
                    <div className="font-display text-lg font-bold tracking-tight text-[#0A0A0A]">{m.name}</div>
                    <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">{m.role}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="mt-24">
            <div className="flex flex-col items-start justify-between gap-6 rounded-[28px] bg-[#0A0A0A] p-10 text-white md:flex-row md:items-center md:p-14">
              <div>
                <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">Want to work with us?</h2>
                <p className="mt-3 max-w-md text-white/60">Explore the products or get in touch — we'd love to hear from you.</p>
              </div>
              <button
                onClick={() => navigate("/")}
                data-testid="about-cta"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#4F46E5] px-7 py-4 text-sm font-semibold text-white transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#4338CA]"
              >
                Explore Actalink
                <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </Reveal>
        </div>
      </main>
    </Layout>
  );
}
