import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Reveal from "@/components/landing/Reveal";

const productList = [
  {
    name: "Bexo",
    tagline: "Banking On-Chain. Own your money.",
    desc: "Self-custody wallet to securely manage digital assets while keeping full ownership of your keys.",
    url: "https://bexo.xyz",
    x: "https://x.com/bexohq",
    linkedin: "https://www.linkedin.com/company/bexo/",
  },
  {
    name: "OpenDeposit",
    tagline: "Stablecoin deposits without the friction.",
    desc: "Embedded flows that let apps accept stablecoin deposits directly from connected wallets.",
    url: "https://opendeposit.xyz",
    x: "https://x.com/opendeposit",
    linkedin: "https://www.linkedin.com/company/opendeposit/",
  },
  {
    name: "ActaPay",
    tagline: "Accept stablecoins. Grow your business.",
    desc: "Merchant gateway with payment links, checkouts, subscriptions, invoices and POS — no wallets to manage.",
    url: "https://getactapay.com",
    x: "https://x.com/actapay",
    linkedin: "https://www.linkedin.com/company/actapay/",
  },
  {
    name: "Straight",
    tagline: "Use Straight. Spend stablecoins.",
    desc: "Spend stablecoins from self-custody wallets anywhere cards are accepted — no top-ups or pre-funding.",
    url: "https://usestraight.com",
    x: "https://x.com/straighthq",
    linkedin: "https://www.linkedin.com/company/straighthq/",
  },
];

const connect = [
  { label: "Website", href: "https://acta.link" },
  { label: "Blog", href: "/blogs", internal: true },
  { label: "YouTube", href: "https://www.youtube.com/@Actalink" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/actalink/" },
  { label: "X", href: "https://x.com/actalink" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Actalink",
  url: "https://acta.link/about-us",
  description:
    "Actalink is building the payment interface layer for programmable money. Money should move as freely as the internet.",
  mainEntity: {
    "@type": "Organization",
    name: "Actalink",
    url: "https://acta.link/",
  },
};

const Label = ({ children }) => (
  <span className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">
    {children}
  </span>
);

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <Layout>
      <Seo
        title="About us"
        path="/about-us"
        description="Actalink is building the payment interface layer for programmable money. Money should move as freely as the internet."
        jsonLd={jsonLd}
      />
      <main
        data-testid="about-page"
        className="relative w-full px-5 pt-36 pb-24 md:px-10 md:pt-44 md:pb-32"
      >
        <div className="mx-auto max-w-[960px]">
          {/* Our vision */}
          <Reveal>
            <Label>Our vision</Label>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-black leading-[0.98] tracking-tighter text-[#0A0A0A] sm:text-6xl md:text-7xl">
              Money should move as freely as the internet.
            </h1>
            <p className="mt-8 text-justify text-lg font-light leading-relaxed text-neutral-500">
              Information moves instantly across the world — money still
              doesn&apos;t. As stablecoins and tokenized value go mainstream,
              businesses need infrastructure that makes moving money as simple
              as sending information. That&apos;s what we&apos;re building.
            </p>
          </Reveal>

          {/* About Actalink & why */}
          <div className="mt-24 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <Label>About Actalink</Label>
              <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-[#0A0A0A] md:text-4xl">
                Why we do what we do
              </h2>
            </Reveal>
            <Reveal
              delay={0.1}
              className="space-y-6 text-base leading-relaxed text-neutral-700 md:text-lg"
            >
              <p>
                Actalink is the payment interface layer for programmable money —
                infrastructure powering the complete lifecycle of stablecoin
                payments, from storing assets and funding accounts to accepting
                payments and spending anywhere cards are accepted.
              </p>
              <p>
                Most companies solve just one part of that journey. We connect
                every stage through a single interoperable platform, so
                developers, fintechs, merchants and consumers can build on
                programmable money with one technology stack.
              </p>
              <p className="font-mono text-sm uppercase tracking-[0.14em] text-indigo-600">
                Store → Deposit → Accept → Spend
              </p>
              <p className="text-[15px] text-neutral-500">
                Actalink is a non-custodial technology provider. We don&apos;t
                hold customer funds, custody assets, or provide regulated
                financial services — you stay in control of your digital assets.
              </p>
            </Reveal>
          </div>

          {/* Products */}
          <div className="mt-24">
            <Reveal>
              <Label>Our products</Label>
              <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-[#0A0A0A] md:text-4xl">
                One platform. Four products.
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {productList.map((p, i) => (
                <Reveal key={p.name} delay={(i % 2) * 0.08}>
                  <div className="flex h-full flex-col rounded-[24px] border border-black/[0.07] bg-white p-8 shadow-[0_10px_40px_-24px_rgba(15,23,42,0.35)]">
                    <h3 className="font-display text-2xl font-extrabold tracking-tight text-[#0A0A0A]">
                      {p.name}
                    </h3>
                    <p className="mt-1 font-medium text-indigo-600">
                      {p.tagline}
                    </p>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-neutral-600">
                      {p.desc}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em]">
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`about-product-${p.name.toLowerCase()}-site`}
                        className="inline-flex items-center gap-1 text-[#0A0A0A] transition-colors hover:text-indigo-600"
                      >
                        Visit Webpage <ArrowUpRight size={13} />
                      </a>
                      <a
                        href={p.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-neutral-500 transition-colors hover:text-indigo-600"
                      >
                        X <ArrowUpRight size={12} />
                      </a>
                      <a
                        href={p.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-neutral-500 transition-colors hover:text-indigo-600"
                      >
                        LinkedIn <ArrowUpRight size={12} />
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Contact us */}
          <Reveal className="mt-24">
            <div className="rounded-[28px] bg-[#0A0A0A] p-10 text-white md:p-14">
              <Label>Contact us</Label>
              <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                Let&apos;s build together.
              </h2>
              <p className="mt-3 max-w-md text-white/60">
                Reach out at hello@acta.link or connect with us anywhere.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                {connect.map((c) =>
                  c.internal ? (
                    <button
                      key={c.label}
                      onClick={() => navigate(c.href)}
                      data-testid={`about-connect-${c.label.toLowerCase()}`}
                      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left transition-colors duration-300 hover:bg-white/10"
                    >
                      <span className="font-semibold text-white">
                        {c.label}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="text-white/40 transition-colors group-hover:text-indigo-400"
                      />
                    </button>
                  ) : (
                    <a
                      key={c.label}
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`about-connect-${c.label.toLowerCase()}`}
                      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-colors duration-300 hover:bg-white/10"
                    >
                      <span className="font-semibold text-white">
                        {c.label}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="text-white/40 transition-colors group-hover:text-indigo-400"
                      />
                    </a>
                  ),
                )}
              </div>
              <button
                onClick={() => navigate("/")}
                data-testid="about-cta"
                className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-[#4F46E5] px-7 py-4 text-sm font-semibold text-white transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#4338CA]"
              >
                Explore Actalink
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </Reveal>
        </div>
      </main>
    </Layout>
  );
}
