import React from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function Layout({ children }) {
  return (
    <div className="relative w-full overflow-x-hidden bg-[#FBFBF7]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
