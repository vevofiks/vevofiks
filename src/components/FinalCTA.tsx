import Link from "next/link";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center bg-linear-to-b from-[#111] to-[#050505] border border-white/10 rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
        
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-6 relative z-10">
          Ready to stop leaving money on the table?
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto relative z-10">
          Spots are limited. We only take on a few select clients per month to ensure unparalleled quality. Don't wait until your competitors outpace you.
        </p>
        
        <div className="relative z-10">
          <Link 
            href="https://cal.com/vevofiks-mm1vfe/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block coloredButton px-8 md:px-12 py-4 md:py-5 rounded-full text-base md:text-lg font-bold hover:scale-105 shadow-xl shadow-blue-900/40 whitespace-nowrap"
          >
            Book an Intro Call
          </Link>
          <p className="mt-6 text-sm text-gray-500 uppercase tracking-widest font-semibold">
            Takes 30 seconds. No pressure.
          </p>
        </div>
      </div>
    </section>
  );
}
