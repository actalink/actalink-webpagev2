import React, { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { BlogCard } from "@/components/landing/BlogPreview";
import Reveal from "@/components/landing/Reveal";
import { Skeleton } from "@/components/ui/skeleton";
import { useBlogs } from "@/lib/wpBlogs";

// A labelled pill group — used under the page description and in the sidebar,
// so the label sits above the pills rather than inline. Renders nothing when
// there is only one option to pick from: a lone "All" is not a filter.
const FilterGroup = ({ label, options, value, onChange, testid, className = "" }) => {
  if (options.length < 2) return null;
  return (
    <div data-testid={testid} className={className}>
      <h2 className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">{label}</h2>
      <div className="mt-4 flex flex-wrap items-center gap-2">
      {["All", ...options].map((option) => {
        const isActive = option === "All" ? value === null : value === option;
        return (
          <button
            key={option}
            onClick={() => onChange(option === "All" ? null : option)}
            data-testid={`${testid}-${option}`}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
              isActive
                ? "border-black bg-black text-white"
                : "border-black/[0.12] bg-white text-neutral-600 hover:border-black hover:text-[#0A0A0A]"
            }`}
          >
            {option}
          </button>
        );
      })}
      </div>
    </div>
  );
};

export default function BlogList() {
  const navigate = useNavigate();
  const { data: blogs = [], isLoading, isError } = useBlogs();
  // Seeded from ?q= so the single post's sidebar can hand its search over here.
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get("q") || "");
  const [category, setCategory] = useState(null);
  const [tag, setTag] = useState(null);

  // Options come from the loaded posts, not /categories + /tags — that way a
  // term with nothing published under it never shows up as a dead filter.
  const categories = useMemo(
    () => [...new Set(blogs.map((post) => post.category))].sort(),
    [blogs],
  );
  const tags = useMemo(
    () => [...new Set(blogs.flatMap((post) => post.tags))].sort(),
    [blogs],
  );

  // ponytail: the whole archive is already in memory (one /posts?per_page=50
  // fetch), so search and the filters are all client-side. Move to WP's
  // ?search=/?categories= if the archive ever outgrows that page.
  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return blogs.filter(
      (post) =>
        (!needle || `${post.title} ${post.excerpt}`.toLowerCase().includes(needle)) &&
        (!category || post.category === category) &&
        (!tag || post.tags.includes(tag)),
    );
  }, [blogs, query, category, tag]);

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
            {/* The display heading and the description under it were dropped on
                2026-07-30 — the eyebrow carries the page title now, so it is the
                h1 rather than a span (the page would otherwise have none; the
                full sentence still ships to search via <Seo>). */}
            <h1 className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">The blog</h1>
            <FilterGroup className="mt-8" label="Categories" options={categories} value={category} onChange={setCategory} testid="blog-filter-category" />
          </Reveal>

          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-9">
              {isError ? (
                <div data-testid="blog-list-error" className="py-16 text-base font-light text-neutral-500">
                  We couldn&apos;t load the articles just now. Please refresh to try again.
                </div>
              ) : !isLoading && blogs.length === 0 ? (
                <div data-testid="blog-list-empty" className="py-16 text-base font-light text-neutral-500">
                  No articles published yet — check back soon.
                </div>
              ) : !isLoading && results.length === 0 ? (
                <div data-testid="blog-search-empty" className="py-16 text-base font-light text-neutral-500">
                  No articles match {query.trim() ? `“${query.trim()}”` : "that filter"}.
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {isLoading
                    ? Array.from({ length: 6 }, (_, i) => (
                        <Skeleton key={i} className="h-[420px] w-full rounded-[24px]" />
                      ))
                    : results.map((post, i) => (
                        <BlogCard key={post.slug} post={post} index={i} onClick={() => navigate(`/blogs/${post.slug}`)} />
                      ))}
                </div>
              )}
            </div>

            <BlogSidebar
              query={query}
              onQueryChange={setQuery}
              onSubmit={(event) => event.preventDefault()}
            >
              <FilterGroup className="mt-10" label="Tags" options={tags} value={tag} onChange={setTag} testid="blog-filter-tag" />
            </BlogSidebar>
          </div>
        </div>
      </main>
    </Layout>
  );
}
