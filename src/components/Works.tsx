import React from "react";
import {ourWorks} from "@/app/index.js";

type Project = {
    id: string;
    title: string;
    client: string;
    date?: string;
    overview: string;
    technologies: string[]; 
    features: string[];
    result: string;
    image: string;
    link?: string;
};


function ProjectCard(props: { work: Project; }) {
    const { work } = props;

    return (
        <article
            className="group relative overflow-hidden rounded-2xl p-8 bg-[rgba(39,124,226,0.08)] border border-[rgba(39,124,226,0.2)] shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_60px_rgba(39,124,226,0.3)] transition-all duration-300 ease-out will-change-transform hover:-translate-y-2"
        >
            {/* Trust Badge - Top Right */}
            {work.result && (
                <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00FF85] text-[#0B1628] text-sm font-semibold shadow-[0_0_20px_rgba(0,255,133,0.4)]">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        {work.result}
                    </span>
                </div>
            )}
        
            {/* Visuals - image area */}
            <div className="relative w-full mb-6 overflow-hidden rounded-xl aspect-[16/10] bg-[rgba(39,124,226,0.05)]">
                <img
                    src={work.image}
                    alt={work.title}
                    className="h-full w-full object-cover transition-transform duration-400 ease-out group-hover:scale-105 contrast-[1.05] saturate-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1628] via-transparent to-transparent opacity-40"></div>
            </div>

            {/* Content area */}
            <div className="flex flex-col gap-4">
                <div className="space-y-2">
                    <p className="text-sm font-medium text-[#277CE2] uppercase tracking-wider">{work.client}</p>
                    <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight tracking-[-0.01em] text-white">
                        {work.title}
                    </h3>
                </div>

                <p className="text-sm text-[rgba(255,255,255,0.7)] leading-relaxed">
                    {work.overview}
                </p>

                {/* Features/Categories */}
                {/* {work.features && work.features.length > 0 && (
                    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                        {work.features.map((feature) => (
                            <span
                                key={feature}
                                className="shrink-0 px-3 py-2 rounded-lg text-sm font-medium bg-[rgba(39,124,226,0.15)] backdrop-blur-[10px] whitespace-nowrap text-white border border-[rgba(39,124,226,0.3)]"
                            >
                                {feature}
                            </span>
                        ))}
                    </div>
                )} */}

                {/* Technologies */}
                {work.technologies && work.technologies.length > 0 && (
                    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                        {work.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="shrink-0 px-3 py-1.5 rounded-md text-xs font-medium bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] whitespace-nowrap text-[rgba(255,255,255,0.6)] border border-[rgba(255,255,255,0.1)]"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}


            </div>
        </article>
    );
}

const Works: React.FC = () => {
    return (
        <section className="w-full bg-[#0B1628] text-white min-h-screen relative">
            {/* Background grid pattern overlay */}
            <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: 'linear-gradient(#277CE210 3px, transparent 3px), linear-gradient(to right, #277CE210 3px, #0b162800 3px)',
                backgroundSize: '60px 60px'
            }}></div>

            <div className="relative mx-auto max-w-[1400px] px-8 py-20">
                <header className="mb-16 max-w-[800px] text-left">
                  
                    <h2 className="text-[clamp(2.5rem,5vw,3rem)]  leading-tight tracking-[-0.02em] mb-4">
                        Selected Works
                    </h2>
                    <p className="mt-4 text-lg text-[rgba(255,255,255,0.7)] max-w-prose leading-relaxed">
                        Results‑driven product design and engineering. High‑contrast visuals, social proof, and premium execution for ambitious startups.
                    </p>
                </header>

                <div className="grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(340px,1fr))]">
                    {ourWorks.map((w, index) => (
                        <ProjectCard key={w.id || index} work={w} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Works;