"use client";

import NavBar from "@/components/NavBar";
import AboutSection from "@/components/About";
import ServiceSection from "@/components/Service";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import { PiHandSwipeLeft } from "react-icons/pi";
import { motion } from "framer-motion";

export default function Home() {
    useEffect(() => {
        const sections = document.querySelectorAll(".section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    } else {
                        entry.target.classList.remove("active");
                    }
                });
            },
            {
                root: document.querySelector(".sections"),
                threshold: 0.75,
            }
        );

        sections.forEach((story) => observer.observe(story));

        return () => {
            sections.forEach((story) => observer.unobserve(story));
        };
    }, []);

    return (
        <div className="font-sans bg-[#0B1628]">
            <NavBar />
            {/* Main Content */}
            <main className="sections w-full ">
                {/* home sections */}
                <section className="section min-w-full">
                    <Hero />
                    <ServiceSection />
                    <Contact />
                </section>
                <div className="fixed w-full bottom-[1em] text-black flex justify-center z-20">
                    <div className="flex gap-2 items-center bg-white py-2 px-5 rounded-full">
                        swipe right to know more about us
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 20 }}
                            exit={{ rotate: 0 }}
                            transition={{
                                duration: 1,
                                ease: "linear",
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                        >
                            <PiHandSwipeLeft />
                        </motion.div>
                    </div>
                </div>
                {/* about section */}
                <AboutSection />
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
}
