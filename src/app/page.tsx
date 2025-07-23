'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSwipeable } from 'react-swipeable';

const services = [
  { id: 1, title: 'IoT Smart Sensor', description: 'Real-time home monitoring solution' },
  { id: 2, title: 'Wearable Tracker', description: 'Safety and efficiency on the go' },
  { id: 3, title: 'Industrial IoT Module', description: 'Optimize your operations' },
];

export default function Home() {
  const router = useRouter();

  const handlers = useSwipeable({
    onSwipedRight: () => router.push('/about'),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
  });

  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] min-h-screen bg-gray-100" {...handlers}>
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
      {/* Main Content */}
      <main className="grid grid-cols-1 gap-8 p-6 sm:p-10">
        <h1 className="text-3xl font-bold text-center col-span-full">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 col-span-full">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-gray-200 p-4 text-center text-gray-500">
        © 2025 Vevofiks. All rights reserved.
      </footer>
    </div>
  );
}