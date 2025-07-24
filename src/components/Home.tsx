import React from "react";

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
        <section className="grid grid-cols-1 gap-8 p-6 sm:p-10 min-w-[100%] section">
            <h1 className="text-3xl font-bold text-center col-span-full">
                Our Services
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 col-span-full">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="bg-white flex flex-col p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow items-center text-center"
                    >
                        <h2 className="text-xl font-semibold mb-2">
                            {service.title}
                        </h2>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Home;
