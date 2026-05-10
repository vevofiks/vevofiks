"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled
        ? "backdrop-blur-md border-b border-white/10 bg-black/50"
        : "backdrop-blur-none border-b border-transparent bg-transparent"
    )}>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl flex items-center font-bold tracking-tighter">
          VEV<img src="/company-logo.png" className="w-9 h-10" />FIKS
        </Link>
        <Link
          href="https://cal.com/vevofiks-mm1vfe/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="coloredButton px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap"
        >
          <span className="hidden sm:inline">Schedule a Strategy Call</span>
          <span className="sm:hidden">Book Call</span>
        </Link>
      </div>
    </header>
  );
}
