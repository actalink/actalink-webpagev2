import { useQuery } from "@tanstack/react-query";

// Blog content lives in WordPress at blogs.acta.link. Public read-only REST —
// no auth, and WP reflects any Origin, so this works from prod and localhost
// alike with no proxy.
const WP_API = "https://blogs.acta.link/wp-json/wp/v2";

// Cover fallbacks for posts with no featured image — the same gradients the
// hand-written blog set used, so an image-less post still looks intentional.
const GRADIENTS = [
  "linear-gradient(135deg,#4F46E5 0%,#818CF8 55%,#0A0A0A 140%)",
  "linear-gradient(135deg,#0A0A0A 0%,#1F2937 60%,#4F46E5 150%)",
  "linear-gradient(135deg,#4F46E5 0%,#0A0A0A 130%)",
  "linear-gradient(135deg,#818CF8 0%,#4F46E5 45%,#0A0A0A 150%)",
];

// WP returns titles/excerpts as HTML with entities ("Bexo&#8217;s"). Cards show
// them as plain text, so decode to text content.
const toText = (html = "") =>
  new DOMParser().parseFromString(html, "text/html").body.textContent || "";

const readTime = (html) => {
  const words = toText(html).trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
};

const formatDate = (value) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
};

export const mapPost = (post, index) => {
  const embedded = post._embedded || {};
  const image = embedded["wp:featuredmedia"]?.[0]?.source_url;
  const category = (embedded["wp:term"] || [])
    .flat()
    .find((term) => term?.taxonomy === "category")?.name;

  return {
    id: post.id,
    slug: post.slug,
    title: toText(post.title?.rendered),
    excerpt: toText(post.excerpt?.rendered).trim(),
    category: category || "Insights",
    date: formatDate(post.date),
    iso: (post.date || "").slice(0, 10),
    readTime: readTime(post.content?.rendered),
    // WP's author is the CMS account ("admin"); the site bylines the company.
    author: "Actalink Team",
    // Applied via `style={{ background: post.cover }}`, and CSS `background`
    // takes a url() as happily as a gradient — so the cards need no changes.
    cover: image
      ? `url("${image}") center/cover no-repeat`
      : GRADIENTS[index % GRADIENTS.length],
    // Rendered as-is: plain text stays text, HTML renders as HTML.
    html: post.content?.rendered || "",
  };
};

const fetchPosts = async () => {
  const response = await fetch(
    `${WP_API}/posts?_embed&per_page=50&orderby=date&order=desc`,
  );
  if (!response.ok) throw new Error(`WordPress returned ${response.status}`);
  const posts = await response.json();
  return posts.map(mapPost);
};

export const useBlogs = () =>
  useQuery({
    queryKey: ["wp-posts"],
    queryFn: fetchPosts,
    staleTime: 5 * 60 * 1000,
  });

// ponytail: single post is picked out of the same cached list rather than its
// own request — the post page needs the list anyway for "More articles".
// Switch to /posts?slug= if the archive ever outgrows one page of 50.
export const useBlog = (slug) => {
  const query = useBlogs();
  return { ...query, post: query.data?.find((post) => post.slug === slug) };
};
