"use client";

import NavBar from "@/components/NavBar";
import AboutSection from "@/components/About";
import ServiceSection from "@/components/Service";
import { useEffect, useRef, useState } from "react";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Alert from "@/components/Alert";

export default function Home() {
    const [isFtrInView, setFtrInView] = useState(false);

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

    return (
        <div className="font-sans bg-[#0B1628] pattern">
            <NavBar />
            {/* Main Content */}
            <main className="sections w-full pb-[4em]">
                {/* home sections */}
                <section className="section flex flex-col gap-[8em] min-w-full active">
                    <Hero />
                    <ServiceSection />
                    <Contact />
                </section>
                <Alert isInView={isFtrInView} />
                {/* about section */}
                <AboutSection />
            </main>
            {/* Footer */}
            <Footer setIsInView={setFtrInView} />
        </div>
    );
}
