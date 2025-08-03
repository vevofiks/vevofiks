import { motion } from "framer-motion";
import React from "react";

const About: React.FC = () => {

    return (
        <motion.section
            layout
            id="about"
            className="min-w-[100%] section flex flex-col items-center gap-4 mt-[4em]"
        >
            <h1 className="text-3xl font-bold text-center">About Vevofiks</h1>
            <p className="text-center text-gray-400 max-w-2xl">
                Vevofiks, founded on July 23, 2025, is dedicated to delivering
                honest fixes and happy customer experiences through innovative
                IoT solutions. Our core values—trust, honesty, and
                friendliness—guide us in serving our customers with integrity
                and care.
            </p>
        </motion.section>
    );
};

export default About;
