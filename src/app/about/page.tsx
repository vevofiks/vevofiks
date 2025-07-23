import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();

  const handlers = useSwipeable({
    onSwipedLeft: () => router.push('/'),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
  });

  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] min-h-screen bg-gray-100" {...handlers}>
      {/* Header */}
      <header className="bg-white p-4">
        <div className="grid place-items-center">
          <Image
            className="dark:invert"
            src="/logo.png" // Replace with your logo path
            alt="Vevofiks Logo"
            width={180}
            height={38}
            priority
          />
        </div>
      </header>
      {/* Main Content */}
      <main className="grid grid-cols-1 gap-8 p-6 sm:p-10 place-items-center">
        <h1 className="text-3xl font-bold text-center">About Vevofiks</h1>
        <p className="text-center text-gray-600 max-w-2xl">
          Vevofiks, founded on July 23, 2025, is dedicated to delivering honest fixes and happy customer experiences through innovative IoT solutions. Our core values—trust, honesty, and friendliness—guide us in serving our customers with integrity and care.
        </p>
      </main>
      {/* Footer */}
      <footer className="bg-gray-200 p-4 text-center text-gray-500">
        © 2025 Vevofiks. All rights reserved.
      </footer>
    </div>
  );
}