"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";

const FAQS = [
  {
    question: "How long does a typical project take?",
    answer: "For a high-converting landing page, expect 2-3 weeks. Comprehensive e-commerce or custom web apps usually take 6-10 weeks, depending on complexity and features."
  },
  {
    question: "What is your development process like?",
    answer: "We follow a strict 4-phase process: Discovery & Strategy, UI/UX Design, Development & Animations, and finally Testing & Launch. You are kept in the loop at every milestone."
  },
  {
    question: "Do you use templates?",
    answer: "Absolutely not. Every project is custom-designed and engineered from scratch to perfectly align with your brand, target audience, and conversion goals."
  },
  {
    question: "What platforms do you build on?",
    answer: "We specialize in the modern React ecosystem, primarily using Next.js for high-performance frontend applications, paired with headless CMS solutions or custom backends as needed."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes. Every project includes a 30-day bug-fix guarantee. For ongoing feature development and optimization, we offer monthly retainer packages."
  },
  {
    question: "How do you ensure the site will convert?",
    answer: "We don't guess. We use proven CRO (Conversion Rate Optimization) principles, psychology-driven copywriting, and clear user flows designed specifically to guide visitors toward your primary CTA."
  },
  {
    question: "Will I be able to edit the content myself?",
    answer: "Yes, if your project scope includes a CMS (like Sanity, Strapi, or WordPress headless). We build intuitive dashboards so you can manage your content without touching code."
  },
  {
    question: "What do you need from me to get started?",
    answer: "We'll need your brand guidelines, any existing copy, high-resolution assets, and a clear understanding of your business goals. If you don't have these, we can help create them during the Strategy phase."
  },
  {
    question: "Do you handle domain and hosting setup?",
    answer: "Yes. We configure all DNS settings and deploy your application on enterprise-grade infrastructure (like Vercel or AWS) for maximum speed and reliability."
  },
  {
    question: "Do you offer white-label development for other agencies?",
    answer: "Yes, we partner with design studios, creative agencies, and marketing firms globally. We operate as your invisible development arm, working under NDA and using your communication channels (Slack, email) as needed."
  }
];

export default function FAQ() {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-400">
          Everything you need to know before we partner up.
        </p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, idx) => (
          <FAQItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        gsap.to(contentRef.current, { height: "auto", duration: 0.3, ease: "power2.out" });
        gsap.to(contentRef.current, { opacity: 1, duration: 0.2, delay: 0.1 });
      } else {
        gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.inOut" });
      }
    }
  }, [isOpen]);

  return (
    <div className="border border-white/10 rounded-2xl bg-[#0a0a0a] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
      >
        <span className="font-semibold text-lg text-white">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>
      <div 
        ref={contentRef} 
        className="h-0 opacity-0 px-6 overflow-hidden"
      >
        <p className="pb-6 text-gray-400 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}
