"use client";

import AboutSection from "@/components/About";
import ServiceSection from "@/components/Service";
import { useEffect, useRef, useState } from "react";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Alert from "@/components/Alert";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
    const [isFtrInView, setFtrInView] = useState(false);
    const [shouldItView, setInView] = useState(true);
    const scrollRef = useRef<HTMLDivElement>(null);
    const router = useRouter()

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
                threshold: 0.5,
            }
        );

        sections.forEach((story) => observer.observe(story));

        return () => {
            sections.forEach((story) => observer.unobserve(story));
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const el = scrollRef.current;
            if (!el) return;

            const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth;

            if (isAtEnd) {
                setInView(() => false)
                router.push('#top')
            }

            if(!el.scrollLeft) {
                setInView(() => true)
            }
        };

        const el = scrollRef.current;
        if (el) {
            el.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (el) {
                el.removeEventListener("scroll", handleScroll);
            }
        };
    }, [router]);

    return (
        <div className="font-sans bg-[#0B1628] pattern">
            {/* Main Content */}
            <main ref={scrollRef} className="sections w-full pb-[4em]">
                {/* home sections */}
                <section className="section flex flex-col gap-[8em] min-w-full active">
                    <Hero />
                    <ServiceSection />
                    <Contact />
                </section>
                <AnimatePresence>
                    <Alert shouldIt={shouldItView} isInView={isFtrInView} />
                </AnimatePresence>
                {/* about section */}
                <AboutSection />
            </main>
            {/* Footer */}
            <Footer setIsInView={setFtrInView} />
        </div>
    );
}
