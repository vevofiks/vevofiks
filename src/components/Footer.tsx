import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black pt-24 pb-12 px-6 overflow-hidden">
      {/* Massive Background Brand Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0">
        <h2 className="flex items-center justify-center text-[12vw] md:text-[15vw] font-black text-white/[0.07] tracking-tighter uppercase leading-[0.8] whitespace-nowrap">
          VEV
          <img
            src="/company-logo.png"
            className="w-[1.2em] h-[1.2em] object-contain opacity-[0.07] brightness-0 invert mx-[-0.05em]"
            alt=""
          />
          FIKS
        </h2>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-24">
          <div>
            <Link href="/" className="flex  items-center text-3xl font-bold tracking-tighter">
              VEV<img src="/company-logo.png" className="w-9 h-10" />FIKS
            </Link>
            <p className="text-gray-500 text-base mt-4 max-w-xs leading-relaxed font-medium">
              Strategy-led websites engineered to scale your revenue and crush your competition.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <span className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Navigation</span>
              <Link href="/#projects" className="text-gray-400 hover:text-white text-sm transition-colors font-medium">Work</Link>
              <Link href="/#services" className="text-gray-400 hover:text-white text-sm transition-colors font-medium">Services</Link>
              <Link href="/#contact" className="text-gray-400 hover:text-white text-sm transition-colors font-medium">Contact</Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Socials</span>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors font-medium">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors font-medium">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors font-medium">Twitter</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Contact</span>
              <a href="mailto:vevofiks@gmail.com" className="text-gray-400 hover:text-white text-sm transition-colors font-medium">vevofiks@gmail.com</a>
              <a href="tel:+916282699250" className="text-gray-400 hover:text-white text-sm transition-colors font-medium">+91 6282 699 250</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-gray-600 gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p>&copy; {new Date().getFullYear()} Vevofiks. All rights reserved.</p>
            <div className="flex items-center  gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
