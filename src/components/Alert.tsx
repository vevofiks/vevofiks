import { motion, AnimatePresence } from "motion/react";
import React from "react";
import { PiHandSwipeLeft, PiHandSwipeRight } from "react-icons/pi";
import { useAppContext } from "@/context/AppContext";

interface AlertType {
  isInView: boolean;
}

const Alert = ({ isInView }: AlertType) => {
  const { page } = useAppContext();

  const content = [
    {
      text: "Swipe left to know more",
      icon: <PiHandSwipeLeft className="text-lg" />,
      anim: { x: [0, -6, 0] },
    },
    {
      text: "Swipe right to return",
      icon: <PiHandSwipeRight className="text-lg" />,
      anim: { x: [0, 6, 0] },
    },
  ];

  const currentContent = content[page] || content[0];

  return (
    <motion.div
      initial={false}
      animate={
        isInView 
          ? { 
              bottom: window.innerWidth < 768 ? "10rem" : "6rem" // Mobile: 10rem, Desktop: 6rem
            } 
          : { bottom: "2rem" }
      }
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed inset-x-0 flex justify-center z-50 pointer-events-none"
    >
      <motion.div
        layout
        className="pointer-events-auto flex items-center gap-3 bg-white/95 backdrop-blur-sm py-3 px-6 rounded-full shadow-lg shadow-black/20 border border-white/50"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={page}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="text-neutral-900 text-[10px] md:text-xs font-bold uppercase tracking-[0.1em]"
          >
            {currentContent.text}
          </motion.span>
        </AnimatePresence>

        <motion.div
          key={`icon-${page}`}
          animate={currentContent.anim}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.2,
          }}
          className="text-neutral-900"
        >
          {currentContent.icon}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Alert;