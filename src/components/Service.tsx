"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Home: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      image: "/web.jpg",
      description:
        "We build modern, responsive, and scalable web apps tailored to your business. From elegant UIs to powerful backends, our systems perform flawlessly across devices.",
    },
    {
      id: 2,
      title: "Mobile App Development",
      image: "/app.webp",
      description:
        "We design sleek, high-performance mobile apps that captivate users and deliver real business results — native or cross-platform, fast and reliable.",
    },
    {
      id: 3,
      title: "Software Repair & Upgrade",
      image: "/repair.png",
      width: 130,
      height: 130,
      description:
        "We fix, refine, and modernize existing software — from crushing bugs to upgrading ancient systems into stable, efficient, future-proof applications.",
    },
    {
      id: 4,
      title: "Industrial IoT Module",
      image: "/iot.png",
      description:
        "We craft IoT modules that transform industrial workflows — smart monitoring, real-time analytics, and scalable integrations for true operational intelligence.",
    },
  ];

  return (
    <section
      id="services"
      className="relative flex flex-col gap-12 md:px-[10em] px-6 pb-14 min-w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{
              scale: 1.03,
              rotateX: 5,
              rotateY: -5,
              transition: { type: "spring", stiffness: 200, damping: 10 },
            }}
            className="relative group bg-white/5 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/40 rounded-3xl p-6 flex flex-col gap-4 text-center items-center shadow-lg shadow-cyan-500/5 hover:shadow-cyan-500/20 transition-all"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h2 className="text-xl font-semibold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
              {service.title}
            </h2>

            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="relative w-[130px] h-[130px] rounded-full overflow-hidden border border-cyan-400/30 shadow-md shadow-cyan-500/20"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </motion.div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {service.description}
            </p>

            <motion.div
              layoutId={`glow-${service.id}`}
              className="absolute inset-0 rounded-3xl bg-cyan-500/10 opacity-0 group-hover:opacity-10 blur-2xl transition duration-700"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Home;
