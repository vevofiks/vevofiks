"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TEAM = [
  {
    name: "Muhammad Shibili",
    role: "CEO & Strategic Lead",
    image: "/team/shibili_new.png",
  },
  {
    name: "Muhammad Asjad",
    role: "Lead Creative Designer",
    image: "/team/asjad_new.png",
  },
  {
    name: "Amraz Rafeeque",
    role: "Chief Technology Officer",
    image: "/team/amraz_new.png",
  }
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [activeTap, setActiveTap] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.from(titleRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
        }
      });

      // Team cards reveal
      gsap.from(".team-card", {
        y: 120,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 85%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-32 px-6 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.4em] text-blue-500 font-bold mb-6">The Collective</div>
            <h2 ref={titleRef} className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
              The minds <br/>
              <span className="bg-linear-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">behind the craft.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl">
              We aren't just developers. We are a collective of digital architects, 
              strategic thinkers, and relentless problem solvers.
            </p>
          </div>
          <div className="hidden md:block pb-4">
             <div className="text-xs uppercase tracking-[0.3em] text-gray-600 font-bold mb-4 text-right">Engineering Excellence</div>
             <div className="w-32 h-px bg-white/20 ml-auto"></div>
          </div>
        </div>

        <div className="team-grid grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {TEAM.map((member, idx) => (
            <div 
              key={idx} 
              onClick={() => setActiveTap(activeTap === idx ? null : idx)}
              className="team-card group relative cursor-pointer"
            >
              <div className={`relative aspect-4/5 overflow-hidden rounded-[2.5rem] bg-zinc-900 mb-8 border border-white/5 transition-all duration-500 group-hover:border-blue-500/30 group-hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)] ${activeTap === idx ? "border-blue-500/30 shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)]" : ""}`}>
                 <img 
                   src={member.image} 
                   alt={member.name}
                   className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110   group-hover:grayscale-0 ${activeTap === idx ? "grayscale-0 scale-110" : ""}`}
                 />
                 
                 {/* Premium Overlay */}
                 <div className={`absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-10 ${activeTap === idx ? "opacity-100" : ""}`}>
                    <div className="overflow-hidden">
                      <p className={`text-blue-400 text-xs uppercase tracking-widest font-bold mb-2 translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-100 ${activeTap === idx ? "translate-y-0" : ""}`}>{member.role}</p>
                    </div>
                    <div className="overflow-hidden">
                      <h3 className={`text-3xl font-bold text-white translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-200 ${activeTap === idx ? "translate-y-0" : ""}`}>{member.name}</h3>
                    </div>
                 </div>
              </div>

              <div className={`flex justify-between items-start px-4 group-hover:opacity-40 transition-opacity duration-500 ${activeTap === idx ? "opacity-40" : ""}`}>
                <div>
                  <h3 className="text-2xl font-bold mb-1 tracking-tight">{member.name}</h3>
                  <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">{member.role}</p>
                </div>
                <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500 transition-all duration-500 ${activeTap === idx ? "border-blue-500/50 bg-blue-500" : ""}`}>
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M7 17l9.2-9.2M17 17V7H7" />
                   </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
