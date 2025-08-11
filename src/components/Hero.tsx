"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Hero: React.FC = () => {
    const heroRef = useRef<HTMLHeadingElement | null>(null);
    const introRef = useRef<HTMLParagraphElement | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        // Reset position before animating (important for replays)
        gsap.set([heroRef.current, introRef.current], {
            yPercent: 130,
        });

        // Animate hero title
        gsap.to(heroRef.current, {
            yPercent: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.1,
        });

        // Animate intro text
        gsap.to(introRef.current, {
            yPercent: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.1,
            delay: 0.15,
        });
    }, [pathname]);

    return (
        <section className="mt-[6em] flex flex-col gap-4 items-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="overflow-hidden"
            >
                <h1 ref={heroRef} className="text-6xl text-center">
                    VEVOFIKS
                </h1>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="overflow-hidden px-6 md:w-1/2"
            >
                <p ref={introRef} className="text-center text-gray-200 text-lg">
                    We create innovative software that helps businesses move
                    faster, work smarter, and stay ahead in a digital-first
                    world.
                </p>
            </motion.div>
        </section>
    );
};

export default Hero;
