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
        <footer
            ref={footerRef}
            className="flex items-center bg-black text-gray-500 px-2 py-4 md:px-6"
        >
            <div className="flex-1 items-center">
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
            <p className="flex-1/3 text-center text-xs md:text-sm">
                © 2025 Vevofiks. All rights reserved.
            </p>
            <div className="flex-1 flex justify-end gap-2">
                <a target="_blank" href="https://www.instagram.com/vevofiks" rel="noopener noreferrer">
                    <FaInstagram
                        size={24}
                        className="bg-[#277CE2] text-white p-1.5 md:p-1 rounded-full"
                    />
                </a>
                <a target="_blank" rel="noopener noreferrer">
                    <FaXTwitter
                        size={24}
                        className="bg-[#277CE2] text-white p-1.5 md:p-1 rounded-full"
                    />
                </a>
                <a target="_blank" rel="noopener noreferrer">
                    <LuFacebook
                        size={24}
                        className="bg-[#277CE2] text-white p-1.5 md:p-1 rounded-full"
                    />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
