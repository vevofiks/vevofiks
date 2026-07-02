"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const LOGOS = ["Flowergrid", "Arrham Group", "Forgedots","PowerVolt", "Grainora"];

export default function SocialProofMarquee() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    gsap.to(scroller, {
      xPercent: -50,
      ease: "none",
      duration: 30,
      repeat: -1,
    });
  }, []);

  return (
    <section className="py-12 border-y border-white/10 overflow-hidden bg-black">
      <p className="text-center text-sm text-gray-500 mb-10 uppercase tracking-widest font-medium px-4">
        Trusted by agencies, businesses, and founders worldwide
      </p>
      <div className="flex whitespace-nowrap" ref={scrollerRef} style={{ width: "fit-content" }}>
        {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
          <div 
            key={i} 
            className="inline-flex items-center justify-center px-12 md:px-24"
          >
            <span className="text-xl md:text-2xl font-bold text-gray-600 tracking-tighter">
              {logo}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
