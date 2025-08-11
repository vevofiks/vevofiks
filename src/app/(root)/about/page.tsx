"use client";

import SwipeablePages from "@/components/SwipeablePages";
import { useAppContext } from "@/context/AppContext";
import { motion } from "framer-motion";
import React, { useEffect } from "react";

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
                    <p className="text-center text-gray-400 max-w-2xl">
                        Vevofiks, founded on July 23, 2025, is dedicated to
                        delivering honest fixes and happy customer experiences
                        through innovative IoT solutions. Our core values—trust,
                        honesty, and friendliness—guide us in serving our
                        customers with integrity and care.
                    </p>
                </div>
                {/* partners section */}
                <div className="flex flex-col gap-[4em] mb-[20em]">
                    {/* <h1 className="text-4xl text-center">Our brand partners</h1> */}
                </div>
            </motion.section>
        </SwipeablePages>
    );
};

export default About;
