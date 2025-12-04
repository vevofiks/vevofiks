"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const services = [
  {
    id: 1,
    title: "Web Development",
    image: "/services/web-engineering.avif",
    description:
      "We build modern, responsive, and scalable web apps tailored to your business. From elegant UIs to powerful backends, our systems perform flawlessly across devices.",
  },
  {
    id: 2,
    title: "Mobile Development",
    image: "/services/mobile-solutions.avif",
    description:
      "We design sleek, high-performance mobile apps that captivate users and deliver real business results native or cross-platform, fast and reliable.",
  },
  {
    id: 3,
    title: "Software Repair & Upgrade",
    image: "/services/legacy-moderization.avif",
    description:
      "We fix, refine, and modernize existing software from crushing bugs to upgrading ancient systems into stable, efficient, future-proof applications.",
  },
  {
    id: 4,
    title: "Industrial IoT",
    image: "/services/industrial-iot.avif",
    description:
      "We craft IoT modules that transform industrial workflows smart monitoring, real-time analytics, and scalable integrations for true operational intelligence.",
  },
];

const ServiceSection: React.FC = () => {
  return (
    <section
      id="services"
      className={`${montserrat.className} relative flex flex-col justify-center min-h-screen py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-20`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto w-full">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group relative h-[320px] sm:h-[360px] md:h-[360px] lg:h-[420px] 
                    overflow-hidden rounded-2xl border border-white/10 bg-white/5 
                    backdrop-blur-sm md:hover:border-white/30 transition-all duration-500"
          >
            <div className="absolute inset-0 z-0">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover opacity-50 md:group-hover:opacity-70 md:group-hover:scale-105 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-7 md:p-8">
              <div className="transform md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className="text-[10px] sm:text-xs font-bold text-gray-400 tracking-widest uppercase mb-2 block opacity-70">
                  0{index + 1}
                </span>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-white drop-shadow-md">
                  {service.title}
                </h3>

                {/* Mobile: Always visible description */}
                <p className="md:hidden text-gray-200 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Desktop: Hover to reveal description */}
                <div className="hidden md:block">
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                    <p className="text-gray-200 text-sm md:text-base overflow-hidden leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
