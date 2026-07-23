import { useEffect } from "react";

const SITE = "https://acta.link";
const DEFAULT_IMAGE = `${SITE}/og-image.png`;
const DEFAULT_DESC = "Actalink is the payment interface layer for stablecoins — infrastructure powering the complete lifecycle of stablecoin payments: store, deposit, accept and spend.";

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Per-route SEO: title, description, canonical, Open Graph, Twitter cards,
 * and JSON-LD structured data (for search engines + AI/LLM crawlers).
 */
export default function Seo({
  title,
  description = DEFAULT_DESC,
  path = "",
  image = DEFAULT_IMAGE,
  type = "website",
  jsonLd = null,
}) {
  useEffect(() => {
    const url = `${SITE}${path}`;
    const fullTitle = title ? `${title} — Actalink` : "Actalink — The Payment Interface Layer for Stablecoins";

    document.title = fullTitle;
    upsertMeta("name", "description", description);

    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:site_name", "Actalink");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:site", "@actalinkhq");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);

    upsertLink("canonical", url);

    const existing = document.getElementById("route-jsonld");
    if (jsonLd) {
      let script = existing;
      if (!script) {
        script = document.createElement("script");
        script.id = "route-jsonld";
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    } else if (existing) {
      existing.remove();
    }
  }, [title, description, path, image, type, jsonLd]);

  return null;
}
