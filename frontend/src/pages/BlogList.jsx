import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { BlogCard } from "@/components/landing/BlogPreview";
import Reveal from "@/components/landing/Reveal";
import { Skeleton } from "@/components/ui/skeleton";
import { useBlogs } from "@/lib/wpBlogs";

export default function BlogList() {
  const navigate = useNavigate();
  const { data: blogs = [], isLoading, isError } = useBlogs();
  const [query, setQuery] = useState("");

  // ponytail: the whole archive is already in memory (one /posts?per_page=50
  // fetch), so search is a filter, not a request. Move to WP's ?search= if the
  // archive ever outgrows that page.
  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return blogs;
    return blogs.filter((post) =>
      `${post.title} ${post.excerpt}`.toLowerCase().includes(needle),
    );
  }, [blogs, query]);

  // Recent stays recent — it lists the newest posts regardless of the search.
  const recent = blogs.slice(0, 5);

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
                  No articles match “{query.trim()}”.
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2">
                  {isLoading
                    ? Array.from({ length: 4 }, (_, i) => (
                        <Skeleton key={i} className="h-[420px] w-full rounded-[24px]" />
                      ))
                    : results.map((post, i) => (
                        <BlogCard key={post.slug} post={post} index={i} onClick={() => navigate(`/blogs/${post.slug}`)} />
                      ))}
                </div>
              )}
            </div>

            <aside data-testid="blog-sidebar" className="lg:col-span-3">
              <div className="lg:sticky lg:top-28">
                <label className="relative block">
                  <span className="sr-only">Search articles</span>
                  <Search size={16} className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search articles"
                    data-testid="blog-search"
                    className="w-full rounded-full border border-black/[0.12] bg-white py-3 pl-12 pr-5 text-sm text-[#0A0A0A] outline-none transition-colors placeholder:text-neutral-400 focus:border-indigo-600"
                  />
                </label>

                <div className="mt-10">
                  <h2 className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">Recent posts</h2>
                  <ul data-testid="blog-recent" className="mt-6 space-y-5">
                    {isLoading
                      ? Array.from({ length: 5 }, (_, i) => (
                          <li key={i}><Skeleton className="h-14 w-full rounded-2xl" /></li>
                        ))
                      : recent.map((post) => (
                          <li key={post.slug}>
                            <button
                              onClick={() => navigate(`/blogs/${post.slug}`)}
                              data-testid={`blog-recent-${post.slug}`}
                              className="group flex w-full gap-4 text-left"
                            >
                              <span className="h-14 w-14 shrink-0 rounded-2xl" style={{ background: post.cover }} />
                              <span className="min-w-0">
                                <span className="block font-display text-sm font-bold leading-snug tracking-tight text-[#0A0A0A] transition-colors group-hover:text-indigo-600">
                                  {post.title}
                                </span>
                                <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-400">
                                  {post.date}
                                </span>
                              </span>
                            </button>
                          </li>
                        ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </Layout>
  );
}
