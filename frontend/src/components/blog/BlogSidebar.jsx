import React from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useBlogs } from "@/lib/wpBlogs";

// The 3-col column shared by the archive and the single post: search, whatever
// the page wants in the middle (the archive puts its Tags filter there), and
// the five most recent posts.
//
// Search is a form so it works on both pages. The archive filters as you type
// and just swallows the submit; the post page has no list to filter, so it
// hands the term to /blogs?q= instead.
export default function BlogSidebar({
  query,
  onQueryChange,
  onSubmit,
  excludeSlug,
  children,
}) {
  const navigate = useNavigate();
  const { data: blogs = [], isLoading } = useBlogs();
  const recent = blogs.filter((post) => post.slug !== excludeSlug).slice(0, 5);

  return (
    <aside data-testid="blog-sidebar" className="lg:col-span-3">
      <div className="lg:sticky lg:top-28">
        <form onSubmit={onSubmit} className="relative block">
          <label className="sr-only" htmlFor="blog-search">Search articles</label>
          <Search size={16} className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            id="blog-search"
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search articles"
            data-testid="blog-search"
            className="w-full rounded-full border border-black/[0.12] bg-white py-3 pl-12 pr-5 text-sm text-[#0A0A0A] outline-none transition-colors placeholder:text-neutral-400 focus:border-indigo-600"
          />
        </form>

        {children}

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
  );
}
