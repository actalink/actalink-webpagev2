import React from "react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Hero from "@/components/landing/Hero";
import Manifesto from "@/components/landing/Manifesto";
import Products from "@/components/landing/Products";
import BlogPreview from "@/components/landing/BlogPreview";
import Marquee from "@/components/landing/Marquee";

export default function Landing() {
  return (
    <Layout>
      <Seo path="/" />
      <main data-testid="landing-page">
        <Hero />
        <Manifesto />
        <Products />
        <BlogPreview />
        <Marquee />
      </main>
    </Layout>
  );
}
