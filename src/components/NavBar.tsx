import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuPhoneCall } from "react-icons/lu";

const NavBar = () => {
    return (
        <header className="bg-[#0B1628] pr-10">
            <ul className="flex justify-between items-center">
                <Image
                    src="/full_logo.svg"
                    alt="Vevofiks Logo"
                    width={250}
                    height={50}
                    priority
                />
                <a href="#contact" className="scroll-smooth">
                    <li className="flex items-center gap-2 text-[1.1em] bg-white rounded-2xl text-black py-1 px-3">
                        <LuPhoneCall size={18} />
                        Contact Us
                    </li>
                </a>
            </ul>
        </header>
    );
};

export default NavBar;
