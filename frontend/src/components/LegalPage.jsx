import React from "react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Reveal from "@/components/landing/Reveal";

const Block = ({ block }) => {
  if (block.h2)
    return (
      <h2 className="mt-14 font-display text-2xl font-bold tracking-tight text-[#0A0A0A] md:text-3xl">
        {block.h2}
      </h2>
    );
  if (block.h3)
    return (
      <h3 className="mt-8 font-display text-lg font-semibold tracking-tight text-[#0A0A0A]">
        {block.h3}
      </h3>
    );
  if (block.ul)
    return (
      <ul className="mt-4 space-y-2 pl-1">
        {block.ul.map((li, i) => (
          <li
            key={i}
            className="flex gap-3 text-[15px] leading-relaxed text-neutral-700 md:text-base"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
            <span>{li}</span>
          </li>
        ))}
      </ul>
    );
  if (block.address)
    return (
      <address className="mt-4 not-italic text-[15px] leading-relaxed text-neutral-700 md:text-base">
        {block.address.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </address>
    );
  return (
    <p className="mt-4 text-[15px] leading-relaxed text-neutral-700 md:text-base">
      {block.p}
    </p>
  );
};

export default function LegalPage({
  testId,
  path,
  title,
  effectiveDate,
  intro,
  sections,
}) {
  return (
    <Layout>
      <Seo
        title={title}
        path={path}
        description={`${title} for the Actalink website — Actalink Limited.`}
      />
      <main
        data-testid={testId}
        className="relative w-full px-5 pt-36 pb-24 md:px-10 md:pt-44 md:pb-32"
      >
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">
              Legal
            </span>
            <h1 className="mt-6 font-display text-4xl font-black leading-[1.0] tracking-tighter text-[#0A0A0A] md:text-6xl">
              {title}
            </h1>
            {effectiveDate && (
              <p className="mt-5 font-mono text-xs uppercase tracking-[0.16em] text-indigo-600">
                Effective Date: {effectiveDate}
              </p>
            )}
            {intro && intro.map((block, i) => <Block key={i} block={block} />)}
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-6">
              {sections.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
          </Reveal>
        </div>
      </main>
    </Layout>
  );
}
