import { Check } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "High-Converting Landing Page",
      description: "Perfect for single-offer businesses or specific ad campaigns.",
      features: [
        "Custom UI/UX Design",
        "Copywriting that Converts",
        "GSAP Animations & Micro-interactions",
        "Performance & SEO Optimization",
        "Analytics & Tracking Setup",
      ]
    },
    {
      name: "Websites & E-Commerce",
      description: "Comprehensive digital platforms built to scale and dominate.",
      features: [
        "Everything in Landing Page",
        "Multi-page Architecture",
        "E-Commerce Integration",
        "Custom CMS or Web App Logic",
        "Advanced Security & Hosting Setup",
        "Priority Post-Launch Support",
      ],
      popular: true
    }
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Transparent packages. Outsized ROI.
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We don't do complex billing. Choose the scope of your project, and we'll deliver a world-class solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative bg-[#0a0a0a] border ${plan.popular ? 'border-gray-400' : 'border-white/10'} p-8 rounded-3xl flex flex-col hover:border-gray-500 transition-colors duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 coloredButton px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-none">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-8">{plan.description}</p>
              
              <ul className="space-y-4 mb-8 grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-300 shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="https://cal.com/vevofiks-mm1vfe/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center py-4 rounded-full text-sm font-semibold transition-all ${
                  plan.popular 
                    ? 'coloredButton' 
                    : 'bg-[#1a1a1a] text-white hover:bg-[#252525]'
                }`}
              >
                Book an Intro Call
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
