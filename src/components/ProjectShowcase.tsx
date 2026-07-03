"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const PROJECTS = [
  {
    title: "Flower Grid Wellness",
    year: "2026-2027",
    image: "/works/flowergrid.png",
    description: "Health and wellness care services",
    link: "https://flowergrid.co.uk",
    category: "Creative",
  },
  {
    title: "Tdot Cafe",
    year: "2025—2026",
    image: "/works/tdotcafe.png",
    description: "Premium dining experience and gourmet coffee shop website.",
    link: "https://tdot-cafe.vercel.app/",
    category: "Creative",
  },
  {
    title: "Grainora",
    year: "2025—2026",
    image: "/works/grainora.png",
    description: "Bring together producers and buyers worldwide",
    link: "https://grainora-group.com/",
    category: "Brands",
  },
  {
    title: "Brown Beans Coffee",
    year: "2025—2026",
    image: "/works/brownbeans.png",
    description: "Premium coffee shop website.",
    link: "https://brownbeans.vercel.app/",
    category: "Creative",
  },
  {
    title: "Extra Logic",
    year: "2025—2026",
    image: "/works/extralogic.png",
    description:
      "Global business consultancy and custom engineering solutions.",
    link: "https://extra-logic.com/",
    category: "SaaS",
  },
  {
    title: "Letsellr",
    year: "2025—2026",
    image: "/works/letsellr.jpg",
    description:
      "Real estate search platform for verified PGs, hostels, and apartments.",
    link: "https://letsellr.in/",
    category: "SaaS",
  },
  {
    title: "Bakwa",
    year: "2026-2027",
    image: "/works/bakwa.png",
    description:
      "Sustainable luxury packaging and biodegradable plant-based plastic bottles movement.",
    link: "https://bakwa.vercel.app/",
    category: "Brands",
  },
  {
    title: "AndMedia Solutions",
    year: "2026-2027",
    image: "/works/andmedia.png",
    description:
      "Global media planning, OOH, DOOH, transit, and airport advertising solutions.",
    link: "https://andmedia.me/",
    category: "SaaS",
  },
  {
    title: "Cool Star Ac Services",
    year: "2026-2027",
    image: "/works/cool-star.png",
    description: "Online platform for ac services",
    link: "https://cool-star-ebon.vercel.app/",
    category: "Creative",
  },
  {
    title: "Arrham Portfolio",
    year: "2025—2026",
    image: "/works/arrham.png",
    description: "Clean, minimalist portfolio for a international clients.",
    link: "https://arrham-group.vercel.app/",
    category: "Creative",
  },
  {
    title: "Harfa Trading",
    year: "2025—2026",
    image: "/works/harfatrading.png",
    description:
      "Automotive components and car accessories wholesale platform in Qatar.",
    link: "https://www.harfatrading.com/",
    category: "Brands",
  },
  {
    title: "Flash Car",
    year: "2025—2026",
    image: "/works/flashcar.png",
    description:
      "Premium automotive care, detailing, and luxury car services.",
    link: "https://www.flashcarsaudi.com/",
    category: "Brands",
  },
  {
    title: "PowerVolt",
    year: "2026-2027",
    image: "/works/powervolt.png",
    description:
      "Electrical contracting, installation, and maintenance engineering solutions.",
    link: "https://powervolt-lilac.vercel.app/",
    category: "SaaS",
  },
  {
    title: "AI Automation Agent",
    year: "2026-2027",
    image: "/works/ai-agent.png",
    description: "Advanced AI-driven automation for enterprise workflows.",
    link: "#",
    category: "SaaS",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Works" },
  { id: "SaaS", label: "SaaS & Products" },
  { id: "Brands", label: "Brands & E-Commerce" },
  { id: "Creative", label: "Creative & Portfolios" },
];

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: "power3.out",
          overwrite: "auto",
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section id="projects" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Selected{" "}
              <span className="bg-linear-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
                Works.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
              High-performance digital products, interactive brand platforms, and custom software systems designed to scale businesses.
            </p>
          </div>

          {/* Project Count badge */}
          <div className="hidden md:block">
            <span className="text-sm font-mono text-zinc-600 uppercase tracking-widest">
              Total Showcase / {PROJECTS.length} Projects
            </span>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="mt-16 flex flex-wrap gap-3 border-b border-white/5 pb-8">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? "border-blue-500/40 text-white bg-linear-to-r from-blue-950/50 to-blue-900/40 shadow-[0_0_25px_-5px_rgba(59,130,246,0.25)]"
                    : "border-white/5 text-zinc-400 hover:text-white hover:border-white/10 bg-zinc-950/20"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20"
        >
          {filteredProjects.map((project, idx) => {
            return (
              <a
                key={`${project.title}-${idx}`}
                href={project.link}
                target={project.link.startsWith("http") ? "_blank" : undefined}
                rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative flex flex-col cursor-pointer"
              >
                {/* Mockup Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 hover:border-blue-500/20 transition-all duration-700 hover:shadow-[0_0_60px_-15px_rgba(59,130,246,0.2)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-103"
                  />

                  {/* Dark Vignette / Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/30 opacity-60 group-hover:opacity-40 transition-opacity duration-700" />

                  {/* Interactive Explore Badge */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-xs">
                    <span className="px-6 py-3 rounded-full bg-white text-black font-semibold text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out shadow-xl">
                      Explore Project
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Info & Text Details */}
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono text-zinc-500">
                        {project.year}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                      <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 bg-white/5 border border-white/5 px-2.5 py-0.5 rounded-full">
                        {CATEGORIES.find((c) => c.id === project.category)?.label.split(" ")[0]}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl">
                      {project.description}
                    </p>
                  </div>

                  {/* Arrow CTA */}
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/30 transition-all duration-300 shrink-0">
                    <svg
                      className="w-5 h-5 transform transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 19.5L19.5 4M19.5 4H10M19.5 4V13.5"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
