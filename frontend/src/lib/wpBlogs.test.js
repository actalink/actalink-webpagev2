import { mapPost } from "./wpBlogs";

// One check over the mapping, which is the only real logic here: entity
// decoding, category extraction from _embedded, cover fallback and read time.
const wpPost = {
  id: 17,
  slug: "why-we-charge-only-gas",
  date: "2026-04-28T09:00:00",
  title: { rendered: "Why we charge only gas &#8212; and never take a cut" },
  excerpt: { rendered: "<p>The economics behind Bexo&#8217;s pricing.</p>" },
  content: { rendered: `<p>${"word ".repeat(400)}</p>` },
  _embedded: {
    "wp:featuredmedia": [{ source_url: "https://blogs.acta.link/x/pricing.jpg" }],
    "wp:term": [[{ taxonomy: "category", name: "Pricing" }], [{ taxonomy: "post_tag", name: "fees" }]],
  },
};

test("maps a WordPress post onto the shape the blog components expect", () => {
  const post = mapPost(wpPost, 0);

  // Entities decoded, tags stripped — cards render these as plain text.
  expect(post.title).toBe("Why we charge only gas — and never take a cut");
  expect(post.excerpt).toBe("The economics behind Bexo’s pricing.");

  expect(post.slug).toBe("why-we-charge-only-gas");
  expect(post.category).toBe("Pricing"); // category, not the post_tag
  expect(post.tags).toEqual(["fees"]); // post_tags, not the category
  expect(post.iso).toBe("2026-04-28");
  expect(post.date).toBe("Apr 28, 2026");
  expect(post.readTime).toBe("2 min read"); // 400 words / 200

  // Featured image becomes a CSS background value, so BlogCard needs no change.
  expect(post.cover).toBe('url("https://blogs.acta.link/x/pricing.jpg") center/cover no-repeat');

  // Body is handed through untouched for as-is rendering.
  expect(post.html).toBe(wpPost.content.rendered);
});

test("falls back to a gradient cover when a post has no featured image", () => {
  const { _embedded, ...noMedia } = wpPost;
  const post = mapPost({ ...noMedia, _embedded: { "wp:term": [] } }, 1);

  expect(post.cover).toContain("linear-gradient");
  expect(post.category).toBe("Insights"); // default when uncategorised
});
