import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <section className="mt-[8em] flex flex-col gap-4 items-center">
            <h1 className="text-6xl text-center">VEVOFIKS</h1>
            <p className="text-center px-6 md:w-1/2 text-gray-200 text-lg">
                We create innovative software that helps businesses move faster,
                work smarter, and stay ahead in a digital-first world.
            </p>
        </section>
    );
};

export default Hero;
