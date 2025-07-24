import Image from "next/image";
import React from "react";

const NavBar = () => {
    return (
        <header className="bg-white p-4">
            <div className="grid place-items-center">
                <Image
                    className="dark:invert"
                    src="/logo.png"
                    alt="Vevofiks Logo"
                    width={180}
                    height={38}
                    priority
                />
            </div>
        </header>
    );
};

export default NavBar;
