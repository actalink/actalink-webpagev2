import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { blogs } from "@/data/blogs";
import Reveal from "./Reveal";

export const BlogCard = ({ post, onClick, index = 0 }) => (
  <Reveal delay={(index % 3) * 0.08}>
    <button
      onClick={onClick}
      data-testid={`blog-card-${post.slug}`}
      className="group flex h-full w-full flex-col overflow-hidden rounded-[24px] border border-black/[0.07] bg-white text-left shadow-[0_10px_40px_-24px_rgba(15,23,42,0.35)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(79,70,229,0.3)]"
    >
      <div className="relative h-44 w-full overflow-hidden" style={{ background: post.cover }}>
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-800 backdrop-blur">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-400">
          <span>{post.date}</span><span>·</span><span>{post.readTime}</span>
        </div>
        <h3 className="font-display text-xl font-bold leading-snug tracking-tight text-[#0A0A0A] md:text-2xl">{post.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">{post.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.16em] text-indigo-600">
          Read article
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </button>
  </Reveal>
);

export default function BlogPreview() {
  const navigate = useNavigate();
  const latest = blogs.slice(0, 3);

  return (
    <section id="blog" data-testid="blog-section" className="relative w-full px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">The blog</span>
            <h2 className="mt-6 max-w-2xl font-display text-4xl font-extrabold leading-[1.03] tracking-tight text-[#0A0A0A] sm:text-5xl md:text-6xl">
              Insights on
              <br />
              programmable money.
            </h2>
          </div>
          <button
            onClick={() => navigate("/blogs")}
            data-testid="blog-view-all"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-semibold text-[#0A0A0A] transition-colors hover:border-black hover:bg-black hover:text-white md:self-auto"
          >
            View all articles
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {latest.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} onClick={() => navigate(`/blogs/${post.slug}`)} />
          ))}
        </div>
      </div>
    </section>
  );
}
