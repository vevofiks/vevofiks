"use client";

import ServiceSection from "@/components/Service";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import SwipeablePages from "@/components/SwipeablePages";
import { motion } from "framer-motion";
import { useAppContext } from "@/context/AppContext";
import { useEffect } from "react";

export default function Home() {
  const { setPage, isSwiped } = useAppContext();

  useEffect(() => {
    setPage(0);
  }, []);

  return (
    <SwipeablePages pageI={0}>
      <motion.main
        initial={isSwiped ? { x: -100 } : false}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 25,
        }}
        className="flex flex-col gap-[6em] min-w-full mb-[4em]"
      >
        <Hero />
        <ServiceSection />
        <Contact />
      </motion.main>
    </SwipeablePages>
  );
}
