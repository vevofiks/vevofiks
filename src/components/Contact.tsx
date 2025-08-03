"use client";

import React, { useState } from "react";
import { LiaTelegramPlane } from "react-icons/lia";
import { LuPhoneCall } from "react-icons/lu";

const Contact = () => {
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
        if (!formData.naam || !formData.email || !formData.message) {
            return;
        }
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        alert(data.message);
    };

    return (
        <section id="contact" className="flex gap-4 flex-col items-center">
            <div className="flex justify-center">
                <div className="flex items-center gap-2 text-sm bg-white rounded-2xl text-black py-0.5 px-2.5">
                    <LuPhoneCall />
                    Contact
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-4xl text-center">
                    Let's build something together
                </h1>
                <p>
                    Got a project in mind? Just tell us what you need, we&apos;ll
                    handle the rest, from concept to completion.
                </p>
            </div>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-1 my-[2em] w-[75vw] md:w-[30vw] outline-none"
            >
                <label htmlFor="naam">Name</label>
                <input
                    id="naam"
                    type="text"
                    onChange={handleChange}
                    className="bg-[#162c50] text-white rounded-lg outline-none p-1 h-[2em]"
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    onChange={handleChange}
                    className="bg-[#162c50] text-white rounded-lg outline-none p-1 h-[2em]"
                />
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    onChange={handleChange}
                    className="bg-[#162c50] text-white rounded-lg outline-none p-1 min-h-[6em]"
                ></textarea>
                <button
                    type="submit"
                    className="flex justify-center items-center gap-1 bg-black dark:bg-white text-white text-lg dark:text-black rounded-xl py-1 my-4 cursor-pointer"
                >
                    <LiaTelegramPlane size={20}/>
                    send
                </button>
            </form>
        </section>
    );
};

export default Contact;
