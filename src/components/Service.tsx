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
    title: "Software Repaire & Upgrade",
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
      className={`${montserrat.className} relative flex flex-col justify-center min-h-screen py-20 px-4 md:px-8 lg:px-16`}
    >
      {/* <div className="flex flex-col items-center text-center mb-16 space-y-2">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-extrabold tracking-wider text-white uppercase"
        >
          Our Expertise
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "80px" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 rounded-full"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-gray-300 max-w-lg text-sm md:text-base font-light pt-4 leading-relaxed"
        >
          Engineering the future of your business with intelligent software.
        </motion.p>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto w-full">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-[300px] md:h-[350px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/30 transition-all duration-500"
          >
            <div className="absolute inset-0 z-0">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-end p-8">
              <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">

                <span className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-2 block opacity-70">
                  0{index + 1}
                </span>


                <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-md">
                  {service.title}
                </h3>


                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                  <p className="text-gray-200 text-sm overflow-hidden leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {service.description}
                  </p>
                </div>
              </div>


              <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="text-white"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;