import Image from "next/image";
import React, { Dispatch, RefObject, SetStateAction, useEffect, useRef } from "react";
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
                setIsInView(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.1, // Trigger when 10% is visible
            }
        );

        const el = footerRef.current;
        if (el) observer.observe(el);

        return () => {
            if (el) observer.unobserve(el);
        };
    }, []);

    return (
        <footer ref={footerRef} className="flex items-center bg-black text-gray-500">
            <div className="flex-1 items-center">
                <Image
                    src="/full_logo.svg"
                    alt="Vevofiks Logo"
                    width={200}
                    height={80}
                    priority
                />
            </div>
            <p className="flex-1 text-center">
                © 2025 Vevofiks. All rights reserved.
            </p>
            <div className="flex-1 flex justify-end gap-2">
                <a target="_blank" rel="noopener noreferrer">
                    <FaInstagram
                        size={24}
                        className="bg-[#277CE2] text-white p-1 rounded-full"
                    />
                </a>
                <a target="_blank" rel="noopener noreferrer">
                    <FaXTwitter
                        size={24}
                        className="bg-[#277CE2] text-white p-1 rounded-full"
                    />
                </a>
                <a className="mr-10" target="_blank" rel="noopener noreferrer">
                    <LuFacebook
                        size={24}
                        className="bg-[#277CE2] text-white p-1 rounded-full"
                    />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
