import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { FaXTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa6";

interface FooterTypes {
  setIsInView: Dispatch<SetStateAction<boolean>>;
}

const Footer = ({ setIsInView }: FooterTypes) => {
  const footerRef = useRef<HTMLDivElement>(null);

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/vevofiks",
      icon: FaInstagram,
      hoverClass:
        "hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 hover:border-pink-500/30",
    },
    {
      name: "X (Twitter)",
      url: "https://twitter.com",
      icon: FaXTwitter,
      hoverClass: "hover:bg-white/10 hover:border-white/20",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vevofiks-solutions/",
      icon: FaLinkedin,
      hoverClass: "hover:bg-white/10 hover:border-white/20",
    },
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: FaFacebook,
      hoverClass: "hover:bg-blue-500/20 hover:border-blue-500/30",
    },
  ];

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6 md:px-8">
        {/* Mobile Layout: Stacked */}
        <div className="flex flex-col gap-4 md:hidden">
          {/* Logo */}
          <div className="flex justify-center">
            <Image
              className="w-[6em]"
              src="/full_logo.svg"
              alt="Vevofiks Logo"
              width={200}
              height={80}
            />
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                target="_blank"
                href={social.url}
                rel="noopener noreferrer"
                className="group"
                aria-label={social.name}
              >
                <div
                  className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-2 transition-all duration-300 hover:scale-110 ${social.hoverClass}`}
                >
                  <social.icon
                    size={18}
                    className="text-gray-300 group-hover:text-white transition-colors duration-300"
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex justify-center">
            <p className="text-gray-300/80 text-xs font-light tracking-wide text-center">
              © 2025 Vevofiks. All rights reserved.
            </p>
          </div>
        </div>

        {/* Desktop Layout: Horizontal */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-1">
            <Image
              className="w-[8em]"
              src="/full_logo.svg"
              alt="Vevofiks Logo"
              width={200}
              height={80}
            />
          </div>

          {/* Copyright */}
          <div className="flex-1 flex justify-center">
            <p className="text-gray-300/80 text-sm font-light tracking-wide">
              © 2025 Vevofiks. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-end gap-3 flex-1">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                target="_blank"
                href={social.url}
                rel="noopener noreferrer"
                className="group"
                aria-label={social.name}
              >
                <div
                  className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-2.5 transition-all duration-300 hover:scale-110 ${social.hoverClass}`}
                >
                  <social.icon
                    size={20}
                    className="text-gray-300 group-hover:text-white transition-colors duration-300"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;