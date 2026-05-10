"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const PROJECTS = [
  {
    title: "AI Automation Agent",
    year: "2023",
    image: "/works/ai-agent.png",
    description: "Advanced AI-driven automation for enterprise workflows.",
    link: "#"
  },
  {
    title: "Arrham Portfolio",
    year: "2025—2026",
    image: "/works/arrham.png",
    description: "Clean, minimalist portfolio for a international clients.",
    link: "https://arrham-group.vercel.app/"
  },
  {
    title: "Brown Beans Coffee",
    year: "2025—2026",
    image: "/works/brownbeans.png",
    description: "Premium coffee shop website.",
    link: "https://brownbeans.vercel.app/"
  },
  {
    title: "Cool Star Ac Services",
    year: "2026",
    image: "/works/cool-star.png",
    description: "Online platform for ac services",
    link: "https://cool-star-ebon.vercel.app/"
  },
  {
    title: "Flower Grid Wellness",
    year: "2025—2026",
    image: "/works/flowergrid.png",
    description: "Health and wellness care services",
    link: "https://flowergrid.co.uk"
  },
  {
    title: "Grainora",
    year: "2025—2026",
    image: "/works/grainora.png",
    description: "Bring together producers and buyers worldwide",
    link: "https://grainora-group.com/"
  }

];

export default function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(2); // Default active project
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      panelsRef.current.forEach((panel, idx) => {
        if (!panel) return;
        const isActive = idx === hoveredIndex;

        // Smoothly animate the flex-grow of the panel
        gsap.to(panel, {
          flexGrow: isActive ? 1 : 0,
          duration: 1.0,
          ease: "power4.inOut",
          overwrite: "auto",
        });

        // Animate Image Section opacity
        const imgContainer = panel.querySelector(".img-container");
        if (imgContainer) {
          gsap.to(imgContainer, {
            opacity: isActive ? 1 : 0,
            duration: 1.0,
            ease: "power4.inOut",
            overwrite: "auto",
          });
        }

        // Animate Description Section
        const descSection = panel.querySelector(".desc-section");
        if (descSection) {
          gsap.to(descSection, {
            opacity: isActive ? 1 : 0,
            y: isActive ? 0 : 20,
            duration: 0.8,
            delay: isActive ? 0.3 : 0,
            ease: "power3.out",
            overwrite: "auto",
          });
        }

        // Animate Title Text Color
        const titleText = panel.querySelector(".title-text");
        if (titleText) {
          gsap.to(titleText, {
            color: isActive ? "#ffffff" : "#666666",
            duration: 0.5,
            overwrite: "auto",
          });
        }

        // Animate Year Text
        const yearText = panel.querySelector(".year-text");
        if (yearText) {
          gsap.to(yearText, {
            opacity: isActive ? 1 : 0,
            y: isActive ? 0 : -20,
            duration: 0.8,
            ease: "power2.out",
            overwrite: "auto",
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [hoveredIndex]);

  return (
    <section id="projects" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Selected <span className="bg-linear-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">Works.</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl">
          Engineering high-performance digital products that scale businesses.
        </p>
      </div>

      {/* Responsive Accordion Container */}
      <div
        ref={containerRef}
        className="flex flex-col md:flex-row w-full h-[750px] md:h-[600px] border-y border-white/10 overflow-hidden bg-[#0d0d0d]"
      >
        {PROJECTS.map((project, idx) => {
          return (
            <div
              key={idx}
              ref={el => { panelsRef.current[idx] = el }}
              onMouseEnter={() => {
                if (window.innerWidth >= 768) setHoveredIndex(idx);
              }}
              onClick={() => {
                if (hoveredIndex !== idx) {
                  setHoveredIndex(idx);
                } else {
                  window.open(project.link, '_blank');
                }
              }}
              className="relative w-full md:w-auto h-full border-b md:border-b-0 md:border-r border-white/10 last:border-b-0 last:border-r-0 cursor-pointer overflow-hidden flex flex-col md:flex-row basis-[60px] md:basis-[80px] shrink-0"
              style={{
                flexGrow: idx === hoveredIndex ? 1 : 0,
                willChange: "flex-grow"
              }}
            >
              {/* Title Bar - Horizontal on Mobile, Vertical on Desktop */}
              <div className="relative w-full md:w-[80px] shrink-0 h-[60px] md:h-full flex md:flex-col justify-between items-center px-6 md:px-0 md:py-8 z-10 bg-[#0d0d0d]">

                {/* Year */}
                <div className="year-text opacity-0 -translate-y-4 md:-translate-y-8 pointer-events-none absolute md:static left-6">
                  <span className="text-white text-sm md:text-xl font-medium tracking-[0.2em] md:[writing-mode:vertical-rl] md:rotate-180 whitespace-nowrap">
                    {project.year}
                  </span>
                </div>

                {/* Title */}
                <div className="flex-1 flex items-center md:items-end justify-center w-full">
                  <span className="title-text text-[#666666] text-sm md:text-2xl font-medium tracking-wide whitespace-nowrap md:[writing-mode:vertical-rl] md:rotate-180">
                    {project.title}
                  </span>
                </div>
              </div>

              {/* Expandable Image Section */}
              <div className="img-container absolute top-[60px] md:top-0 bottom-0 right-0 left-0 md:left-[80px] opacity-0 overflow-hidden py-4 px-4 md:py-6 md:pr-6 pointer-events-none">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl md:rounded-[2rem]"
                />

                {/* Description Overlay */}
                <div className="desc-section absolute bottom-8 md:bottom-12 left-6 md:left-8 max-w-[280px] md:max-w-sm opacity-0 translate-y-5 pointer-events-none z-20">
                  <p className="text-white/60 text-xs md:text-lg leading-relaxed font-medium drop-shadow-lg">
                    {project.description}
                  </p>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
