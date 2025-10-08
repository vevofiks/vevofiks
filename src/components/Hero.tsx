"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import TextType from "./TextType";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"] });

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLHeadingElement | null>(null);
  const introRef = useRef<HTMLParagraphElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    gsap.set([heroRef.current, introRef.current], {
      yPercent: 120,
      opacity: 0,
    });

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.to(heroRef.current, {
      yPercent: 0,
      opacity: 1,
      duration: 1.4,
    }).to(
      introRef.current,
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.2,
      },
      "-=0.8"
    );
  }, [pathname]);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden px-4">
      {/* Background glow or gradient if you want one */}
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="overflow-hidden"
      >
        <h1
          ref={heroRef}
          className={`${montserrat.className} font-extrabold text-white leading-none tracking-wider flex items-center justify-center 
          text-[clamp(2.5rem,10vw,7rem)]`} // responsive size scaling
        >
          VEV
          <span className="relative inline-block align-middle mx-1 w-[clamp(50px,12vw,110px)] h-[clamp(50px,12vw,110px)]">
            <Image
              src="/logo_icon.svg"
              alt="Vevofiks Logo"
              fill
              className="object-contain inline-block"
            />
          </span>
          FIKS
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="overflow-hidden max-w-[90%] sm:max-w-xl md:max-w-2xl mt-6"
      >
        <TextType
          text={[
            "We build intelligent software that helps teams move faster, think smarter, and lead in the digital era.",
          ]}
          typingSpeed={65}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="text-gray-300 text-[clamp(1rem,2vw,1.25rem)] leading-relaxed"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
