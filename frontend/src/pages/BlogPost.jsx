import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import BlogSidebar from "@/components/blog/BlogSidebar";
import Reveal from "@/components/landing/Reveal";
import { useBlog, useBlogs } from "@/lib/wpBlogs";

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { post, isLoading } = useBlog(slug);
  const { data: blogs = [] } = useBlogs();
  // There is no list to filter here, so the sidebar's search hands the term to
  // the archive instead of doing nothing.
  const [query, setQuery] = useState("");
  const submitSearch = (event) => {
    event.preventDefault();
    if (query.trim()) navigate(`/blogs?q=${encodeURIComponent(query.trim())}`);
  };

  if (isLoading) {
    return (
      <Layout>
        <main data-testid="blog-post-loading" className="mx-auto max-w-[1400px] px-5 pt-44 pb-32 md:px-10">
          <div className="h-4 w-40 animate-pulse rounded bg-black/10" />
          <div className="mt-6 h-12 w-full animate-pulse rounded bg-black/10" />
          <div className="mt-3 h-12 w-2/3 animate-pulse rounded bg-black/10" />
          <div className="mt-10 h-52 w-full animate-pulse rounded-[24px] bg-black/10 md:h-72" />
        </main>
      </Layout>
    );
  }

  // Checked only once loading has finished — otherwise every post would flash
  // "Article not found" on the way in.
  if (!post) {
    return (
      <Layout>
        <main data-testid="blog-post-not-found" className="mx-auto max-w-[900px] px-5 pt-44 pb-32 text-center md:px-10">
          <h1 className="font-display text-4xl font-black text-[#0A0A0A]">Article not found</h1>
          <button onClick={() => navigate("/blogs")} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#4F46E5] px-6 py-3 text-sm font-semibold text-white">
            <ArrowLeft size={16} /> Back to blog
          </button>
        </main>
      </Layout>
    );
  }

  const more = blogs.filter((b) => b.slug !== slug).slice(0, 2);
  const url = `https://acta.link/blogs/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: "https://acta.link/og-image.png",
    datePublished: post.iso,
    dateModified: post.iso,
    articleSection: post.category,
    author: { "@type": "Organization", name: post.author, url: "https://acta.link/" },
    publisher: {
      "@type": "Organization",
      name: "Actalink",
      logo: { "@type": "ImageObject", url: "https://acta.link/logos/actalink-black.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  return (
    <Layout>
      <Seo title={post.title} description={post.excerpt} path={`/blogs/${post.slug}`} type="article" jsonLd={jsonLd} />
      <main data-testid="blog-post-page" className="relative w-full px-5 pt-36 pb-24 md:px-10 md:pt-44 md:pb-32">
        <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <article className="lg:col-span-9">
          <Reveal>
            <button
              onClick={() => navigate("/blogs")}
              data-testid="blog-back"
              className="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-neutral-500 transition-colors hover:text-indigo-600"
            >
              <ArrowLeft size={14} /> All articles
            </button>
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-indigo-600">
              <span>{post.category}</span><span className="text-neutral-300">·</span>
              <span className="text-neutral-400">{post.date}</span><span className="text-neutral-300">·</span>
              <span className="text-neutral-400">{post.readTime}</span>
            </div>
            {/* No excerpt under the title: WP auto-generates it from the opening
                of the post, so it printed the first paragraph twice. It still
                feeds <Seo> and the JSON-LD description above. */}
            <h1 className="font-display text-4xl font-black leading-[1.0] tracking-tighter text-[#0A0A0A] md:text-6xl">{post.title}</h1>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 h-52 w-full rounded-[24px] md:h-72" style={{ background: post.cover }} />
          </Reveal>

          <Reveal delay={0.15}>
            {/* Rendered as-is from WordPress: plain text stays text, HTML
                renders as HTML. Styled by `.post-body` in App.css. */}
            <div
              className="post-body mt-2"
              data-testid="blog-post-body"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <div className="mt-12 flex items-center gap-3 border-t border-black/10 pt-8">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-indigo-100 font-display text-sm font-bold text-indigo-600">A</div>
              <div>
                <div className="text-sm font-semibold text-[#0A0A0A]">{post.author}</div>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">Actalink</div>
              </div>
            </div>
          </Reveal>
        </article>

        <BlogSidebar
          query={query}
          onQueryChange={setQuery}
          onSubmit={submitSearch}
          excludeSlug={slug}
        />
        </div>

        <div className="mt-24">
          <h3 className="mb-8 font-display text-2xl font-bold tracking-tight text-[#0A0A0A]">More articles</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {more.map((p) => (
              <button
                key={p.slug}
                onClick={() => navigate(`/blogs/${p.slug}`)}
                data-testid={`more-article-${p.slug}`}
                className="group flex items-center gap-5 rounded-[20px] border border-black/[0.07] bg-white p-5 text-left transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-30px_rgba(79,70,229,0.3)]"
              >
                <div className="h-20 w-24 shrink-0 rounded-2xl" style={{ background: p.cover }} />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-indigo-600">{p.category}</div>
                  <div className="mt-1 font-display text-lg font-bold leading-snug tracking-tight text-[#0A0A0A]">{p.title}</div>
                </div>
                <ArrowUpRight size={18} className="ml-auto shrink-0 text-neutral-300 transition-colors group-hover:text-indigo-600" />
              </button>
            ))}
          </div>
        </div>
        </div>
      </main>
    </Layout>
  );
}
