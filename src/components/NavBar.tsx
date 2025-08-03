import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { IoInformationCircleOutline } from "react-icons/io5";

const NavBar: React.FC = () => {
    return (
        <header id="top" className="bg-gradient-to-b from-black/25 px-5 md:px-5 md:py-4">
            <ul className="flex justify-between items-center py-4 md:py-0">
                <Link href={"/"}>
                    <Image
                        className="hidden md:block md:w-[10em]"
                        src="/full_logo.svg"
                        alt="Vevofiks Logo"
                        width={250}
                        height={50}
                        priority
                    />
                    <Image
                        className="md:hidden w-[2em]"
                        src="/logo_icon.svg"
                        alt="Vevofiks Logo"
                        width={250}
                        height={50}
                        priority
                    />
                </Link>
                <div className="flex gap-2 md:gap-4">
                    <a href="#about">
                        <li className="flex items-center gap-1.5 text-sm md:text-[1.05em] bg-white rounded-2xl text-black h-full py-1 px-2 md:px-3">
                            <IoInformationCircleOutline size={22} />
                            About Us
                        </li>
                    </a>
                    <a href="#contact">
                        <li className="flex items-center gap-2.5 text-sm md:text-[1.05em] bg-white rounded-2xl text-black h-full py-1 px-2 md:px-3">
                            <LuPhoneCall size={17} />
                            Contact Us
                        </li>
                    </a>
                </div>
            </ul>
        </header>
    );
};

export default NavBar;
