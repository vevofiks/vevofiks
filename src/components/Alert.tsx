import { motion } from "framer-motion";
import React from "react";
import { PiHandSwipeLeft } from "react-icons/pi";

const Alert = ({ isInView }: { isInView: boolean }) => {
    return (
        <motion.div
            initial={false}
            animate={isInView ? { bottom: 6 * 16 } : { bottom: 16 }}
            className="fixed w-full text-black flex justify-center z-20"
        >
            <div className="flex gap-2 items-center bg-white py-2 px-5 rounded-full shadow-[0_1px_10px] shadow-black/75">
                swipe left to know more about us
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
        </motion.div>
    );
};

export default Alert;
