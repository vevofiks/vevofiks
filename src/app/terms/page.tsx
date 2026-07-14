import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Vevofiks",
  description: "Read the Vevofiks terms of service. Understand the terms, guidelines, and rules for working with our design and engineering studio.",
  keywords: ["Terms of Service", "Terms and Conditions", "Vevofiks Terms"],
  openGraph: {
    title: "Terms of Service | Vevofiks",
    description: "Read the terms of service governing the use of Vevofiks website and our services.",
    url: "https://vevofiks.com/terms",
    type: "website",
  }
};

export default function TermsOfServicePage() {
  const lastUpdated = "July 14, 2026";

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050505] text-white pt-32 pb-24 relative overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/5 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Breadcrumbs & Back Link */}
          <div className="flex items-center justify-between mb-12">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-gray-300">Terms of Service</span>
            </div>
          </div>

          {/* Header */}
          <header className="mb-12 border-b border-white/10 pb-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
              Terms of <span className="bg-linear-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-sm text-gray-500">
              Last updated: {lastUpdated}
            </p>
          </header>

          {/* Content */}
          <div className="space-y-10 text-gray-300 leading-relaxed font-normal">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">1. Agreement to Terms</h2>
              <p>
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Vevofiks ("we," "us," or "our"), concerning your access to and use of the <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">vevofiks.com</Link> website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
              </p>
              <p>
                You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">2. Intellectual Property Rights</h2>
              <p>
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
              </p>
              <p>
                For our custom design and engineering services, all intellectual property rights and code ownership for client projects are transferred to the client upon full and final payment, as specified in individual project agreements.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">3. User Representations</h2>
              <p>
                By using the Site, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All registration or contact information you submit will be true, accurate, current, and complete.</li>
                <li>You will maintain the accuracy of such information and promptly update such registration or contact information as necessary.</li>
                <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.</li>
                <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                <li>Your use of the Site will not violate any applicable law or regulation.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">4. Prohibited Activities</h2>
              <p>
                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>
              <p>
                Prohibited activities include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Systematically retrieving data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                <li>Tricking, defrauding, or misleading us and other users, especially in any attempt to learn sensitive account information.</li>
                <li>Circumventing, disabling, or otherwise interfering with security-related features of the Site.</li>
                <li>Disparaging, tarnishing, or otherwise harming, in our opinion, us and/or the Site.</li>
                <li>Using any information obtained from the Site in order to harass, abuse, or harm another person.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">5. Services and Payments</h2>
              <p>
                Specific engagements for our design, engineering, SaaS development, and consulting services will be governed by a separate statement of work, proposal, or service agreement. Payments for services are due in milestones as described in our agreements. We reserve the right to pause work on active projects if payments are not received in accordance with the agreed schedule.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">6. Third-Party Websites and Content</h2>
              <p>
                The Site may contain (or you may be sent via the Site) links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ("Third-Party Content"). We are not responsible for any Third-Party Websites or Third-Party Content accessed through the Site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">7. Limitation of Liability</h2>
              <p>
                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or our services, even if we have been advised of the possibility of such damages.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">8. Governing Law</h2>
              <p>
                These Terms of Service and your use of the Site are governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">9. Contact Us</h2>
              <p>
                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
              </p>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-2">
                <p className="font-semibold text-white">Vevofiks Studio</p>
                <p>Email: <a href="mailto:vevofiks@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">vevofiks@gmail.com</a></p>
                <p>Tel: <a href="tel:+916282699250" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">+91 6282 699 250</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
