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
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden ">
      {/* Background gradient glow */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="overflow-hidden"
      >
        <h1
          ref={heroRef}
          className={`${montserrat.className} text-[7rem] font-extrabold text-white leading-none tracking-wider flex items-center justify-center `}
        >
          VEV
          <span className="relative inline-block align-middle w-[110px] h-[110px] mx-1">
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
        className="overflow-hidden max-w-2xl px-6 mt-6"
      >
        <TextType
          text={[
            "We build intelligent software that helps teams move faster, think smarter, and lead in the digital era.",
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="text-gray-300 text-6xl md:text-base "
        />
      </motion.div>
    </section>
  );
};

export default Hero;
