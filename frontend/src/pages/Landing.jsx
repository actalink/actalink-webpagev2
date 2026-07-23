import React from "react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Hero from "@/components/landing/Hero";
import Products from "@/components/landing/Products";
import BlogPreview from "@/components/landing/BlogPreview";

export default function Landing() {
  return (
    <Layout>
      <Seo path="/" />
      <main data-testid="landing-page">
        <Hero />
        <Products />
        <BlogPreview />
      </main>
    </Layout>
  );
}
