import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";

interface FooterTypes {
  setIsInView: Dispatch<SetStateAction<boolean>>;
}

const Footer = ({ setIsInView }: FooterTypes) => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(() => entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    const el = footerRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [setIsInView]);

  return (
    <footer ref={footerRef} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-gray-800/30 to-gray-900/40 backdrop-blur-xl" />

      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500/30 to-transparent" />

      <div className="relative z-10 flex items-center justify-between px-4 py-6 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center flex-1">
          <Image
            className="hidden md:block w-[8em]"
            src="/full_logo.svg"
            alt="Vevofiks Logo"
            width={200}
            height={80}
            priority
          />
          <Image
            className="md:hidden w-[1.2em]"
            src="/logo_icon.svg"
            alt="Vevofiks Logo"
            width={200}
            height={80}
            priority
          />
        </div>

        {/* Copyright section */}
        <div className="flex-1 flex justify-center">
          <p className="text-gray-300/80 text-xs md:text-sm font-light tracking-wide">
            © 2025 Vevofiks. All rights reserved.
          </p>
        </div>

        {/* Social icons section */}
        <div className="flex items-center justify-end gap-3 flex-1">
          <a
            target="_blank"
            href="https://www.instagram.com/vevofiks"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-2 md:p-2.5 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 hover:border-pink-500/30 transition-all duration-300 hover:scale-110">
              <FaInstagram
                size={20}
                className="text-gray-300 group-hover:text-white transition-colors duration-300"
              />
            </div>
          </a>
          <a target="_blank" rel="noopener noreferrer" className="group">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-2 md:p-2.5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110">
              <FaXTwitter
                size={20}
                className="text-gray-300 group-hover:text-white transition-colors duration-300"
              />
            </div>
          </a>
          <a target="_blank" rel="noopener noreferrer" className="group">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-2 md:p-2.5 hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300 hover:scale-110">
              <LuFacebook
                size={20}
                className="text-gray-300 group-hover:text-white transition-colors duration-300"
              />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
