import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const TESTIMONIALS = [
  {
    quote: "Vevofiks helped us bridge the gap between producers and buyers globally. The platform is intuitive and handled our complex scaling needs perfectly.",
    name: "Michael Chen",
    role: "Founder, Grainora",
    image: "https://i.pravatar.cc/150?u=grainora",
    category: "B2B Platform"
  },
  {
    quote: "Our online presence finally matches the quality of our coffee. The animations and speed are exactly what we needed to stand out in a crowded market.",
    name: "Sarah Williams",
    role: "Owner, Brown Beans Coffee",
    image: "https://i.pravatar.cc/150?u=brownbeans",
    category: "E-Commerce"
  },
  {
    quote: "The wellness space is competitive, but our new site gives us a major edge. Vevofiks' focus on strategy-led design is truly unmatched.",
    name: "Dr. Elena Frost",
    role: "Director, Flower Grid Wellness",
    image: "https://i.pravatar.cc/150?u=flowergrid",
    category: "Wellness"
  },
  {
    quote: "A minimalist masterpiece. They captured my vision perfectly and delivered a portfolio that has already helped me land new international clients.",
    name: "Arrham Rafeeque",
    role: "Creative Lead, Arrham Group",
    image: "https://i.pravatar.cc/150?u=arrham",
    category: "Portfolio"
  },
  {
    quote: "Our AC service booking process is now 100% digital and seamless. Our customers love the new interface and it's boosted our efficiency.",
    name: "James Wilson",
    role: "Manager, Cool Star AC",
    image: "https://i.pravatar.cc/150?u=coolstar",
    category: "Service Platform"
  },
  {
    quote: "The AI automation they built has eliminated hundreds of hours of manual work. It's been a game-changer for our enterprise workflows.",
    name: "Robert Vance",
    role: "Ops Lead, AI Automation Agent",
    image: "https://i.pravatar.cc/150?u=aiagent",
    category: "AI / SaaS"
  }
];

const firstRow = TESTIMONIALS.slice(0, TESTIMONIALS.length / 2);
const secondRow = TESTIMONIALS.slice(TESTIMONIALS.length / 2);

const ReviewCard = ({
  image,
  name,
  role,
  quote,
  category,
}: {
  image: string;
  name: string;
  role: string;
  quote: string;
  category: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-6 mx-4 flex flex-col",
        "border-white/5 bg-[#111111] hover:bg-[#151515] transition-colors"
      )}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold border border-white/10 px-2 py-1 rounded-md">
          {category}
        </span>
      </div>
      <blockquote className="text-sm text-gray-300 leading-relaxed mb-6 grow">
        "{quote}"
      </blockquote>
      <div className="flex flex-row items-center gap-4 mt-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="rounded-full object-cover" width="40" height="40" alt={name} src={image} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-bold text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-500">{role}</p>
        </div>
      </div>
    </figure>
  );
};

export default function Testimonials() {
  return (
    <section id="case-studies" className="py-32 bg-[#050505] border-none">
      <div className="max-w-6xl mx-auto mb-16 text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Don't just take our <span className="bg-linear-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">word</span> for it.
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          See how we've helped founders and businesses scale their operations and revenue.
        </p>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden border-none">
        <Marquee pauseOnHover className="[--duration:40s] mb-4">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-[#050505] to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-[#050505] to-transparent z-10"></div>
      </div>
    </section>
  );
}
