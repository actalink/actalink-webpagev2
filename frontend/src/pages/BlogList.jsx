import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { BlogCard } from "@/components/landing/BlogPreview";
import Reveal from "@/components/landing/Reveal";
import { blogs } from "@/data/blogs";

export default function BlogList() {
  const navigate = useNavigate();
  return (
    <Layout>
      <main data-testid="blog-list-page" className="relative w-full px-5 pt-36 pb-24 md:px-10 md:pt-44 md:pb-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="mb-14 md:mb-20">
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">The blog</span>
            <h1 className="mt-6 max-w-3xl font-display text-5xl font-black leading-[0.98] tracking-tighter text-[#0A0A0A] sm:text-6xl md:text-7xl">
              Insights on programmable money.
            </h1>
            <p className="mt-6 max-w-lg text-base font-light leading-relaxed text-neutral-500">
              Perspectives, guides and engineering notes on stablecoin payments — from storing assets to spending anywhere.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} onClick={() => navigate(`/blogs/${post.slug}`)} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
