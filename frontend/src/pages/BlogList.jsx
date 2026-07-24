import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { BlogCard } from "@/components/landing/BlogPreview";
import Reveal from "@/components/landing/Reveal";
import { Skeleton } from "@/components/ui/skeleton";
import { useBlogs } from "@/lib/wpBlogs";

export default function BlogList() {
  const navigate = useNavigate();
  const { data: blogs = [], isLoading, isError } = useBlogs();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Actalink Blog",
    url: "https://acta.link/blogs",
    description: "Insights on programmable money and stablecoin payments from Actalink.",
    blogPost: blogs.map((b) => ({
      "@type": "BlogPosting",
      headline: b.title,
      description: b.excerpt,
      datePublished: b.iso,
      url: `https://acta.link/blogs/${b.slug}`,
      author: { "@type": "Organization", name: "Actalink" },
    })),
  };
  return (
    <Layout>
      <Seo title="Blog" path="/blogs" description="Insights, guides and engineering notes on stablecoin payments — from storing assets to spending anywhere." jsonLd={jsonLd} />
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

          {isError ? (
            <div data-testid="blog-list-error" className="py-16 text-base font-light text-neutral-500">
              We couldn&apos;t load the articles just now. Please refresh to try again.
            </div>
          ) : !isLoading && blogs.length === 0 ? (
            <div data-testid="blog-list-empty" className="py-16 text-base font-light text-neutral-500">
              No articles published yet — check back soon.
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {isLoading
                ? Array.from({ length: 6 }, (_, i) => (
                    <Skeleton key={i} className="h-[420px] w-full rounded-[24px]" />
                  ))
                : blogs.map((post, i) => (
                    <BlogCard key={post.slug} post={post} index={i} onClick={() => navigate(`/blogs/${post.slug}`)} />
                  ))}
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}
