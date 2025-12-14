"use client";

import SwipeablePages from "@/components/SwipeablePages";
import { useAppContext } from "@/context/AppContext";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
                className="min-w-[100%] flex flex-col items-center gap-[10em] mt-10 select-none"
            >
                <div className="flex flex-col">
                    <h1 className="text-3xl text-white md:text-4xl font-bold mb-5 text-center">
                        About Vevofiks
                    </h1>
                    <p className="text-center text-sm md:text-base text-gray-400 md:max-w-2xl px-2 md:px-0">
                        Vevofiks, founded on July 23, 2025, is dedicated to
                        delivering honest fixes and happy customer experiences
                        through innovative IoT solutions. Our core values—trust,
                        honesty, and friendliness—guide us in serving our
                        customers with integrity and care.
                    </p>
                </div>
                <div className="flex flex-col gap-[4em] overflow-hidden">
                    <h1 className="text-3xl text-white md:text-4xl font-bold mb-5 text-center">
                        Our brand partners</h1>

                    <div className="relative overflow-hidden w-full">

                        <div className="animate-scroll-smooth w-screen md:w-[33em]">
                            {new Array(5).fill(0).map((item, i) => (
                                <div key={i} className="flex gap-8 items-center">
                                    <Link
                                        className="flex items-center justify-center w-[3em] saturate-0 hover:saturate-100 duration-200"
                                        href="https://www.instagram.com/ugency.in?igsh=MTlvY3o1c3J1aTltMg=="
                                    >
                                        <Image
                                            src="/partners/ugency.png"
                                            height={100}
                                            width={100}
                                            alt="ugency"
                                        />
                                    </Link>
                                    <Link
                                        className="flex items-center justify-center w-[7.5em] saturate-0 hover:saturate-100 duration-200"
                                        href="https://goprogen.com/"
                                    >
                                        <Image
                                            src="/partners/goprogen.png"
                                            height={100}
                                            width={100}
                                            alt="goprogen"
                                        />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                {/* <Works /> */}
            </motion.section>
        </SwipeablePages>
    );
};

export default About;