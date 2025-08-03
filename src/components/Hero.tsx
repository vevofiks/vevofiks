import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
    const heroRef = useRef(null);
    const introRef = useRef(null);
    useEffect(() => {
        gsap.from(heroRef.current, {
            yPercent: 130,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.1,
        });
        gsap.from(introRef.current, {
            yPercent: 130,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.1,
            delay: 0.15,
        });
    }, []);

    return (
        <section className="mt-[10em] flex flex-col gap-4 items-center">
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
                <p
                    ref={introRef}
                    className="text-center text-gray-200 text-lg"
                >
                    We create innovative software that helps businesses move
                    faster, work smarter, and stay ahead in a digital-first
                    world.
                </p>
            </motion.div>
        </section>
    );
};

export default Hero;
