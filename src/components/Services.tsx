"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, ShoppingCart, Layers, Sparkles, Fingerprint } from "lucide-react";

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });

      // Animate spotlight with GSAP for smoothness
      gsap.to(spotlightRef.current, {
        x: x - 300,
        y: y - 300,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const ctx = gsap.context(() => {
      // Reveal animations
      gsap.from(".reveal-item", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });
    }, containerRef);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ctx.revert();
    };
  }, []);

  const services = [
    {
      title: "Conversion-Led Websites",
      desc: "High-performance landing pages engineered to turn traffic into revenue.",
      icon: <Globe className="w-6 h-6" />,
      tag: "Conversion",
    },
    {
      title: "SaaS & Product Build",
      desc: "Custom multi-tenant platforms designed for speed, scale, and longevity.",
      icon: <Layers className="w-6 h-6" />,
      tag: "Scalability",
    },
    {
      title: "E-Commerce",
      desc: "Frictionless shopping experiences that maximize average order value.",
      icon: <ShoppingCart className="w-6 h-6" />,
      tag: "Revenue",
    },
    {
      title: "AI & Automation",
      desc: "Custom AI integrations that eliminate manual friction and save time.",
      icon: <Sparkles className="w-6 h-6" />,
      tag: "Efficiency",
    },
    {
      title: "White-Label Dev",
      desc: "Confidential, high-fidelity development for design studios and agencies.",
      icon: <Fingerprint className="w-6 h-6" />,
      tag: "Partnership",
    },
  ];

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative pt-22 bg-[#050505] overflow-hidden group/container"
    >
      {/* Global Spotlight Glow */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full opacity-0 group-hover/container:opacity-100 transition-opacity duration-700 z-0"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <div className="reveal-item flex items-center gap-3 text-blue-500 font-bold tracking-[0.3em] text-[10px] uppercase mb-4">
            <span className="w-8 h-px bg-blue-500/50"></span>
            Our Expertise
          </div>
          <h2 className="reveal-item text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8">
            Solving <span className="bg-linear-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">Complex</span><br />Problems with Design.
          </h2>
        </div>

        {/* Unique Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-px bg-white/5 border border-white/5 rounded-[1.5rem] overflow-hidden backdrop-blur-3xl">
          {services.map((service, idx) => {
            const gridSpans = idx < 3 ? "lg:col-span-2" : "lg:col-span-3";
            const mdGridSpans = idx === 4 ? "md:col-span-2" : "md:col-span-1";
            return (
              <div
                key={idx}
                className={`reveal-item group relative p-10 md:p-12 bg-[#050505] hover:bg-white/2 transition-colors duration-500 overflow-hidden ${gridSpans} ${mdGridSpans}`}
              >
                {/* Local Border Highlight Following Mouse */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(200px circle at ${mousePos.x % 400}px ${mousePos.y % 400}px, rgba(255,255,255,0.08), transparent)`,
                  }}
                />

                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-12 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:text-blue-400 transition-all duration-500">
                    {service.icon}
                  </div>

                  <div className="mt-auto">
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">
                      {service.tag}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Decorative Element */}
        <div className="reveal-item mt-20 flex flex-col md:flex-row items-center justify-between gap-8 py-8 border-t border-white/5">
          <p className="text-gray-500 text-sm">
            Interested in something custom? <span className="text-white font-medium">Let's build it.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
