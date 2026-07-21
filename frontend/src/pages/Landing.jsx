import React from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Manifesto from "@/components/landing/Manifesto";
import Products from "@/components/landing/Products";
import Marquee from "@/components/landing/Marquee";
import Footer from "@/components/landing/Footer";

export default function Landing() {
  return (
    <main data-testid="landing-page" className="relative w-full overflow-x-hidden bg-[#FBFBF7]">
      <Navbar />
      <Hero />
      <Manifesto />
      <Products />
      <Marquee />
      <Footer />
    </main>
  );
}
