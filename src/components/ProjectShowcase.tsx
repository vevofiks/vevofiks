"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const PROJECTS = [
  {
    title: "Flower Grid Wellness",
    year: "2026-2027",
    image: "/works/flowergrid.png",
    description: "Health and wellness care services provider.",
    link: "https://flowergrid.co.uk",
    category: "Creative & Wellness",
  },
  {
    title: "Tdot Cafe",
    year: "2025—2026",
    image: "/works/tdotcafe.png",
    description: "Premium dining experience and gourmet coffee shop website.",
    link: "https://tdot-cafe.vercel.app/",
    category: "Creative & Brand",
  },
  {
    title: "Grainora",
    year: "2025—2026",
    image: "/works/grainora.png",
    description: "Bring together producers and buyers worldwide",
    link: "https://grainora-group.com/",
    category: "Corporate & Logistics",
  },
  {
    title: "Brown Beans Coffee",
    year: "2025—2026",
    image: "/works/brownbeans.png",
    description: "Premium coffee shop website.",
    link: "https://brownbeans.vercel.app/",
    category: "Creative & Brand",
  },
  {
    title: "Extra Logic",
    year: "2025—2026",
    image: "/works/extralogic.png",
    description:
      "Global business consultancy and custom engineering solutions.",
    link: "https://extra-logic.com/",
    category: "Corporate Consulting",
  },
  {
    title: "Letsellr",
    year: "2025—2026",
    image: "/works/letsellr.jpg",
    description:
      "Real estate search platform for verified PGs, hostels, and apartments.",
    link: "https://letsellr.in/",
    category: "SaaS & Web App",
  },
  {
    title: "Bakwa",
    year: "2026-2027",
    image: "/works/bakwa.png",
    description:
      "Sustainable luxury packaging and biodegradable plant-based plastic bottles movement.",
    link: "https://bakwa.vercel.app/",
    category: "SaaS & Brand",
  },
  {
    title: "AndMedia Solutions",
    year: "2026-2027",
    image: "/works/andmedia.png",
    description:
      "Global media planning, OOH, DOOH, transit, and airport advertising solutions.",
    link: "https://andmedia.me/",
    category: "Corporate & Media",
  },
  {
    title: "Cool Star Ac Services",
    year: "2026-2027",
    image: "/works/cool-star.png",
    description: "Online platform for ac services",
    link: "https://cool-star-ebon.vercel.app/",
    category: "Creative & Services",
  },
  {
    title: "Arrham Portfolio",
    year: "2025—2026",
    image: "/works/arrham.png",
    description: "Clean, minimalist portfolio for a international clients.",
    link: "https://arrham-group.vercel.app/",
    category: "Creative & Portfolio",
  },
  {
    title: "Harfa Trading",
    year: "2025—2026",
    image: "/works/harfatrading.png",
    description:
      "Automotive components and car accessories wholesale platform in Qatar.",
    link: "https://www.harfatrading.com/",
    category: "SaaS & Brand",
  },
  {
    title: "Flash Car",
    year: "2025—2026",
    image: "/works/flashcar.png",
    description:
      "Premium automotive care, detailing, and luxury car services.",
    link: "https://www.flashcarsaudi.com/",
    category: "Creative & Services",
  },
  {
    title: "PowerVolt",
    year: "2026-2027",
    image: "/works/powervolt.png",
    description:
      "Electrical contracting, installation, and maintenance engineering solutions.",
    link: "https://powervolt-lilac.vercel.app/",
    category: "SaaS & Platform",
  },
  {
    title: "AI Automation Agent",
    year: "2026-2027",
    image: "/works/ai-agent.png",
    description: "Advanced AI-driven automation for enterprise workflows.",
    link: "#",
    category: "SaaS & AI Systems",
  },
];

export default function ProjectShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const cardElements = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      const totalCards = cardElements.length;

      if (totalCards === 0) return;

      // Set initial state for all cards
      gsap.set(cardElements[0], { y: "0%", scale: 1, rotation: 0 });
      for (let i = 1; i < totalCards; i++) {
        gsap.set(cardElements[i], { y: "120%", scale: 1, rotation: 0 });
      }

      // Timeline that controls card stacking on scroll
      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".sticky-cards-trigger",
          start: "top top",
          end: `+=${window.innerHeight * (totalCards * 0.55)}`, // Snappy transition rate
          pin: true,
          scrub: 0.6,
          pinSpacing: true,
        },
      });

      for (let i = 0; i < totalCards - 1; i++) {
        const currentCard = cardElements[i];
        const nextCard = cardElements[i + 1];
        const position = i;

        if (!currentCard || !nextCard) continue;

        // Current card scales down, rotates slightly and peeks out in the background
        scrollTimeline.to(
          currentCard,
          {
            scale: 0.92,
            rotation: i % 2 === 0 ? -3 : 3,
            y: "-8%",
            duration: 1,
            ease: "none",
          },
          position,
        );

        // Next card slides up in overlay
        scrollTimeline.to(
          nextCard,
          {
            y: "0%",
            duration: 1,
            ease: "none",
          },
          position,
        );
      }

      // Dynamic resize syncing
      const resizeObserver = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });

      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      return () => {
        resizeObserver.disconnect();
        scrollTimeline.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="projects"
      className="bg-[#050505] relative w-full overflow-hidden"
    >
      <div className="sticky-cards-trigger h-screen w-full flex flex-col justify-center items-center px-4 md:px-12 py-6 relative">
        
        {/* Decorative Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/5 rounded-full blur-[150px] pointer-events-none" />

        {/* Section Header */}
        <div className="w-full max-w-5xl mb-8 md:mb-10 flex justify-between items-end relative z-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Selected{" "}
              <span className="bg-linear-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
                Works.
              </span>
            </h2>
            <p className="text-sm md:text-lg text-gray-400 max-w-xl">
              High-performance digital products and strategic platforms engineered to scale.
            </p>
          </div>

          <div className="hidden md:block">
            <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
              Total / {PROJECTS.length} Projects
            </span>
          </div>
        </div>

        {/* Pinned Card Stack Container */}
        <div className="relative w-full max-w-5xl h-[530px] md:h-[480px] rounded-[2.5rem] relative z-10">
          {PROJECTS.map((project, i) => (
            <div
              key={`${project.title}-${i}`}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="absolute inset-0 rounded-[2rem] border border-white/10 bg-[#0c0c0c] flex flex-col md:flex-row overflow-hidden shadow-2xl p-5 md:p-8 gap-6 md:gap-8"
              style={{
                zIndex: i,
              }}
            >
              {/* Image Column */}
              <div className="relative w-full md:w-3/5 h-[200px] md:h-full overflow-hidden rounded-2xl border border-white/5 bg-zinc-950 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />

                {/* Visit Site Overlay Link */}
                <a
                  href={project.link}
                  target={project.link.startsWith("http") ? "_blank" : undefined}
                  rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs group"
                >
                  <span className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs md:text-sm flex items-center gap-2 transform translate-y-4 hover:translate-y-0 transition-all duration-300 shadow-xl">
                    Visit Platform
                    <svg
                      className="w-4 h-4"
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
                </a>
              </div>

              {/* Content Column */}
              <div className="w-full md:w-2/5 flex flex-col justify-between py-1">
                <div>
                  {/* Meta Tags Row */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-zinc-500">
                      {project.year}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed max-w-sm">
                    {project.description}
                  </p>
                </div>

                {/* Launch Button */}
                <div className="mt-4 md:mt-0">
                  <a
                    href={project.link}
                    target={project.link.startsWith("http") ? "_blank" : undefined}
                    rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-xs font-semibold tracking-wide border border-white/10 hover:border-white/20 text-white bg-zinc-900/60 hover:bg-zinc-900 transition-all duration-300 group shadow-lg"
                  >
                    Launch Platform
                    <svg
                      className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-zinc-400 group-hover:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 19.5L19.5 4M19.5 4H10M19.5 4V13.5"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
