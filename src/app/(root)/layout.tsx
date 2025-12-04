"use client";

import Alert from "@/components/Alert";
import Footer from "@/components/Footer";
import { Meteors } from "@/components/ui/meteors";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import AppProvider from "@/context/AppContext";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isFtrInView, setFtrInView] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch devices
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    }
  }, []);

  return (
    <AppProvider>
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <Meteors />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />

        <motion.div
          className="absolute -z-10 w-[600px] h-[600px] bg-[#6a00ff]/25 blur-[120px] rounded-full top-1/3 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 30, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ willChange: "transform" }}
        />
      </div>

      <div className="flex min-h-screen flex-col">
        <main className="flex-1 relative z-10">{children}</main>

        <Footer setIsInView={setFtrInView} />
        <Alert isInView={isFtrInView} />
        {!isTouchDevice && <SmoothCursor />}
      </div>
    </AppProvider>
  );
};

export default Layout;
