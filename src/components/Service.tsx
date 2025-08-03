import React from "react";
import { MdOutlineMedicalServices } from "react-icons/md";

const Home = () => {
    const services = [
        {
            id: 1,
            title: "IoT Smart Sensor",
            description: "Real-time home monitoring solution",
        },
        {
            id: 2,
            title: "Wearable Tracker",
            description: "Safety and efficiency on the go",
        },
        {
            id: 3,
            title: "Industrial IoT Module",
            description:
                "Optimize your operations, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
    ];

    return (
        <section id="services" className="grid grid-cols-1 gap-8 p-6 sm:p-10 min-w-[100%]">
            <div className="flex justify-center">
                <div className="flex items-center gap-2 text-sm bg-white rounded-2xl text-black py-0.5 px-2.5">
                    <MdOutlineMedicalServices />
                    Services
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 col-span-full">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="bg-[#277CE2] text-black flex flex-col p-4 rounded-3xl shadow-md hover:shadow-lg transition-shadow items-center text-center"
                    >
                        <h2 className="text-xl font-semibold mb-2">
                            {service.title}
                        </h2>
                        <p className="text-gray-800">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Home;
