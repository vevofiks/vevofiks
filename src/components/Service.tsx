import Image from "next/image";
import React from "react";

const Home: React.FC = () => {
    const services = [
        {
            id: 1,
            title: "Web Development",
            image: "/web.jpg",
            description:
                "We specialize in building modern, responsive, and high-performing web applications tailored to your business needs. From intuitive user interfaces to powerful backend systems, our team delivers scalable solutions that work seamlessly across devices and platforms. Whether you're launching a new product, automating internal processes, or upgrading an existing system, we bring your vision to life with clean code, agile development, and a focus on user experience.",
        },
        {
            id: 2,
            title: "Mobile App Development",
            image: "/app.webp",
            description:
                "We design and develop custom mobile apps that deliver seamless performance, intuitive user experiences, and real business value. Whether you need a native iOS or Android app or a cross platform solution we build scalable, secure, and feature-rich applications that connect you with users on the go. From concept to launch, we help turn your ideas into engaging mobile experiences.",
        },
        {
            id: 3,
            title: "Software Repair & Upgrade",
            image: "/repair.png",
            width: 130,
            height: 130,
            description:
                "We specialize in restoring, refining, and enhancing existing software to ensure it performs at its best. Whether your application is experiencing errors, running slow, or missing critical features, our team works to identify the root cause and implement effective solutions. From fixing bugs and improving stability to upgrading outdated systems and adding new capabilities, we help extend the life of your software and align it with current business needs and technologies.",
        },
        {
            id: 4,
            title: "Industrial IoT Module",
            image: "/iot.png",
            description:
                "Enhance your industrial operations with our cutting-edge IoT modules. We design and implement smart solutions that optimize efficiency, monitor performance in real-time, and reduce downtime. Our reliable technology integrates seamlessly with your existing systems, providing actionable insights and supporting sustainable growth. Trust us to deliver innovative IoT solutions tailored to your industry’s unique challenges.",
        },
    ];

    return (
        <section
            id="services"
            className="flex flex-col gap-12 md:px-[10em] px-10 min-w-[100%]"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 col-span-full">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="bg-[#fff] text-black flex flex-col gap-2 p-4 rounded-3xl shadow-md hover:shadow-lg transition-shadow items-center text-center"
                    >
                        <h2 className="text-2xl font-semibold mb-2">
                            {service.title}
                        </h2>
                        <Image
                            className="rounded-full"
                            src={service.image}
                            width={service.width || 140}
                            height={service.width || 140}
                            alt="preview"
                        />
                        <p className="text-gray-800 text-sm">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Home;
