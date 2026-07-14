"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import DarkVeil from "@/components/ui/darkVeil";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-element",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden"
    >
      {/* Background DarkVeil */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="hero-element text-4xl md:text-7xl font-bold tracking-tighter leading-tight mb-6">
          Stop settling for average websites. Start scaling with Vevofiks
        </h1>
        <p className="hero-element text-base md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto px-4">
          We eliminate the friction between your brand and your customers with strategy-led design and world-class engineering.
        </p>
        <div className="hero-element flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://calendly.com/vevofiks/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto coloredButton px-8 py-4 rounded-full text-base font-semibold"
          >
            Schedule a Strategy Call
          </Link>
        </div>
      </div>
    </section>
  );
}
