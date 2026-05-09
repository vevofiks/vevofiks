import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProofMarquee from "@/components/SocialProofMarquee";
import Services from "@/components/Services";
import ProjectShowcase from "@/components/ProjectShowcase";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <SocialProofMarquee />
      <Services />
      <ProjectShowcase />
      <Testimonials />
      <Pricing />
      <About />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
