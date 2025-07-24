"use client";
import NavBar from "@/components/NavBar";
import AboutSection from "@/components/About";
import HomeSection from "@/components/Home";
import { useEffect } from "react";

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
        <div className="font-sans bg-gray-100">
            <NavBar />
            {/* Main Content */}
            <main className="sections w-[100%]">
                <HomeSection />
                <AboutSection />
            </main>
            {/* Footer */}
            <footer className="bg-gray-200 p-4 text-center text-gray-500">
                © 2025 Vevofiks. All rights reserved.
            </footer>
        </div>
    );
}
