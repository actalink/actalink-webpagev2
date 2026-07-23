import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Reveal from "@/components/landing/Reveal";
import { getBlog, blogs } from "@/data/blogs";

const Block = ({ block }) => {
  if (block.h2) return <h2 className="mt-12 font-display text-2xl font-bold tracking-tight text-[#0A0A0A] md:text-3xl">{block.h2}</h2>;
  if (block.quote)
    return (
      <blockquote className="my-10 border-l-2 border-indigo-600 pl-6 font-display text-xl font-medium leading-snug text-[#0A0A0A] md:text-2xl">
        “{block.quote}”
      </blockquote>
    );
  return <p className="mt-6 text-base leading-relaxed text-neutral-700 md:text-lg">{block.p}</p>;
};

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getBlog(slug);

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
        <article className="mx-auto max-w-[820px]">
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
            <h1 className="font-display text-4xl font-black leading-[1.0] tracking-tighter text-[#0A0A0A] md:text-6xl">{post.title}</h1>
            <p className="mt-5 text-lg font-light leading-relaxed text-neutral-500">{post.excerpt}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 h-52 w-full rounded-[24px] md:h-72" style={{ background: post.cover }} />
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-2">
              {post.content.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
            <div className="mt-12 flex items-center gap-3 border-t border-black/10 pt-8">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-indigo-100 font-display text-sm font-bold text-indigo-600">A</div>
              <div>
                <div className="text-sm font-semibold text-[#0A0A0A]">{post.author}</div>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">Actalink</div>
              </div>
            </div>
          </Reveal>
        </article>

        <div className="mx-auto mt-24 max-w-[1400px]">
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
      </main>
    </Layout>
  );
}
