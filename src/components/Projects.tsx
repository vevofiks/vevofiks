"use client";

import React, { useState } from "react";
import projects from "@/app/(root)/data/projects.js";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full py-24 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10 w-full flex flex-col gap-4 md:gap-4">
        
        {projects.map((project, index) => {
          const isHovered = hoveredIndex === index;
          const isDimmed = hoveredIndex !== null && hoveredIndex !== index;
          
          return (
            <div 
              key={project.id}
              className="relative w-full flex items-center justify-between group py-2 md:py-0"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              
              {/* Left: Images */}
              <div className="w-[30%] hidden md:flex items-center justify-start h-full">
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="flex gap-2 lg:gap-4 pointer-events-none"
                    >
                      {project.images.slice(0, 3).map((img: string, i: number) => (
                        <div key={i} className="relative w-20 h-14 lg:w-28 lg:h-20 overflow-hidden shadow-2xl border border-border/10 rounded-sm">
                          <Image
                            src={img}
                            alt={`${project.title} preview ${i + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Center: Title */}
              <div className="w-full md:w-[40%] flex justify-center items-center relative z-10">
                <div className="relative inline-block">
                  <h2 
                    className={`text-4xl md:text-5xl lg:text-6xl text-white font-serif font-light text-center transition-all duration-700 ease-in-out tracking-tight leading-none ${isDimmed ? 'opacity-30 blur-[2px]' : 'opacity-100'}`}
                    style={{
                      fontFamily: '"Times New Roman", Times, serif',
                    }}
                  >
                    {project.title.split(' ').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </h2>
                  
                  <span className="absolute -top-2 -right-4 text-[10px] md:text-xs font-sans text-white">
                    {romanNumerals[index] || index + 1}
                  </span>

                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-[2px] bg-white origin-center"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </div>
              </div>

              {/* Right: View Link */}
              <div className="w-[30%] hidden md:flex items-center justify-end">
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xs md:text-sm font-medium tracking-widest uppercase transition-all duration-700 ease-in-out ${isHovered ? 'text-white opacity-100' : 'text-white opacity-40'}`}
                >
                  View {project.title.split(' ')[0]}
                </Link>
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}
