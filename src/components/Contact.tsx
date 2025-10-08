"use client";

import React, { useState } from "react";
import { LiaTelegramPlane } from "react-icons/lia";
import { Globe } from "@/components/ui/globe"; // confirm path
import { motion } from "motion/react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((p) => ({ ...p, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.naam || !formData.email || !formData.message) return;

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    alert(data.message);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen px-6 md:px-16 py-20 overflow-hidden"
    >
      

      <div className="container mx-auto">
        {/* grid layout: form left, globe right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="z-30"
          >
            <div className="bg-[#0e1525]/60 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/10">
              <div className="flex flex-col gap-3 mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-left text-white">
                  Let&apos;s Build Something Together
                </h1>
                <p className="text-gray-300 text-sm md:text-base">
                  Got a project in mind? Tell us what you need, and we’ll take care
                  of the rest — from concept to completion.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label htmlFor="naam" className="text-sm font-medium text-white">
                      Name
                    </label>
                    <input
                      id="naam"
                      type="text"
                      onChange={handleChange}
                      className="bg-[#162c50]/60 text-white rounded-lg w-full outline-none p-2 mt-1 border border-white/10 focus:border-[#6a00ff] transition"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="email" className="text-sm font-medium text-white">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      onChange={handleChange}
                      className="bg-[#162c50]/60 text-white rounded-lg w-full outline-none p-2 mt-1 border border-white/10 focus:border-[#6a00ff] transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    onChange={handleChange}
                    className="bg-[#162c50]/60 text-white rounded-lg outline-none p-2 mt-1 min-h-[8em] w-full border border-white/10 focus:border-[#6a00ff] transition"
                  />
                </div>

                <button
                  type="submit"
                  className="flex justify-center items-center gap-2 bg-[#6a00ff] hover:bg-[#7d26ff] transition text-white text-lg font-semibold rounded-xl py-2 mt-2"
                >
                  <LiaTelegramPlane size={22} />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right: constrained Globe */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative flex justify-center items-center"
          >
            {/* IMPORTANT: wrapper constrains the globe, hides overflow, and prevents it from covering the left column */}
            <div
              className="w-[300px] md:w-[420px] lg:w-[520px] h-[300px] md:h-[420px] lg:h-[520px] overflow-hidden rounded-full  z-10"
              style={{ WebkitMaskImage: "radial-gradient(white, black)" }}
            >
              {/* scale down the globe if it's too big internally */}
              <div className="w-full h-full transform scale-[0.95] md:scale-100 origin-center">
                <Globe />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
