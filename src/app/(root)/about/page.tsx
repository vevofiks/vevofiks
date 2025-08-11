"use client";

import SwipeablePages from "@/components/SwipeablePages";
import { useAppContext } from "@/context/AppContext";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import Image from "next/image";

const About: React.FC = () => {
    const { setPage, isSwiped } = useAppContext();

    useEffect(() => {
        setPage(1);
    }, [setPage]);

    return (
        <SwipeablePages pageI={1}>
            <motion.section
                id="about"
                initial={isSwiped ? { x: 100 } : false}
                animate={{ x: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 25,
                }}
                className="min-w-[100%] flex flex-col items-center gap-[10em] mt-[6em] select-none"
            >
                <div className="flex flex-col gap-10">
                    <h1 className="text-5xl font-bold text-center">
                        About Vevofiks
                    </h1>
                    <p className="text-center text-gray-400 md:max-w-2xl px-2 md:px-0" >
                        Vevofiks, founded on July 23, 2025, is dedicated to
                        delivering honest fixes and happy customer experiences
                        through innovative IoT solutions. Our core values—trust,
                        honesty, and friendliness—guide us in serving our
                        customers with integrity and care.
                    </p>
                </div>
                {/* partners section */}
                <div className="flex flex-col gap-[4em] mb-[10em] overflow-hidden">
                    <h1 className="text-4xl text-center">Our brand partners</h1>

                    <div className="relative overflow-hidden w-full">
                        <div className="absolute z-50 top-0 left-0 h-full w-20 bg-gradient-to-r from-[#0B1628] to-transparent pointer-events-none" />
                        <div className="absolute z-50 top-0 right-0 h-full w-20 bg-gradient-to-l from-[#0B1628] to-transparent pointer-events-none" />

                        <div className="animate-scroll-smooth w-screen md:w-[33em]">
                            {/* Single container with both sets */}
                            <div className="flex gap-6 items-center">
                                <Image
                                    className="w-[3.5em] flex-shrink-0 saturate-0 hover:saturate-100 duration-200"
                                    src="/partners/ugency.png"
                                    height={100}
                                    width={100}
                                    alt="ugency"
                                />
                                <Image
                                    className="w-[7.5em] h-[2.5em] flex-shrink-0 saturate-0 hover:saturate-100 duration-200"
                                    src="/partners/goprogen.png"
                                    height={100}
                                    width={100}
                                    alt="goprogen"
                                />
                            </div>

                            {/* Exact duplicate */}
                            <div className="flex gap-6 items-center">
                                <Image
                                    className="w-[3.5em] flex-shrink-0 saturate-0 hover:saturate-100 duration-200"
                                    src="/partners/ugency.png"
                                    height={100}
                                    width={100}
                                    alt="ugency"
                                />
                                <Image
                                    className="w-[7.5em] h-[2.5em] flex-shrink-0 saturate-0 hover:saturate-100 duration-200"
                                    src="/partners/goprogen.png"
                                    height={100}
                                    width={100}
                                    alt="goprogen"
                                />
                            </div>
                            {/* Exact duplicate */}
                            <div className="flex gap-6 items-center">
                                <Image
                                    className="w-[3.5em] flex-shrink-0 saturate-0 hover:saturate-100 duration-200"
                                    src="/partners/ugency.png"
                                    height={100}
                                    width={100}
                                    alt="ugency"
                                />
                                <Image
                                    className="w-[7.5em] h-[2.5em] flex-shrink-0 saturate-0 hover:saturate-100 duration-200"
                                    src="/partners/goprogen.png"
                                    height={100}
                                    width={100}
                                    alt="goprogen"
                                />
                            </div>
                            {/* Exact duplicate */}
                            <div className="flex gap-6 items-center">
                                <Image
                                    className="w-[3.5em] flex-shrink-0 saturate-0 hover:saturate-100 duration-200"
                                    src="/partners/ugency.png"
                                    height={100}
                                    width={100}
                                    alt="ugency"
                                />
                                <Image
                                    className="w-[7.5em] h-[2.5em] flex-shrink-0 saturate-0 hover:saturate-100 duration-200"
                                    src="/partners/goprogen.png"
                                    height={100}
                                    width={100}
                                    alt="goprogen"
                                />
                            </div>
                            {/* Exact duplicate */}
                            <div className="flex gap-6 items-center">
                                <Image
                                    className="w-[3.5em] flex-shrink-0 saturate-0 hover:saturate-100 duration-200"
                                    src="/partners/ugency.png"
                                    height={100}
                                    width={100}
                                    alt="ugency"
                                />
                                <Image
                                    className="w-[7.5em] h-[2.5em] flex-shrink-0 saturate-0 hover:saturate-100 duration-200"
                                    src="/partners/goprogen.png"
                                    height={100}
                                    width={100}
                                    alt="goprogen"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </SwipeablePages>
    );
};

export default About;
