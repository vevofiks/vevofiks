import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Vevofiks",
  description: "Learn how Vevofiks collects, uses, and protects your personal information and project data. Read our privacy commitment.",
  keywords: ["Privacy Policy", "Data Protection", "Vevofiks Privacy"],
  openGraph: {
    title: "Privacy Policy | Vevofiks",
    description: "Learn how Vevofiks collects, uses, and protects your personal information.",
    url: "https://vevofiks.com/privacy",
    type: "website",
  }
};

export default function PrivacyPolicyPage() {
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
              <span className="text-gray-300">Privacy Policy</span>
            </div>
          </div>

          {/* Header */}
          <header className="mb-12 border-b border-white/10 pb-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
              Privacy <span className="bg-linear-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-sm text-gray-500">
              Last updated: {lastUpdated}
            </p>
          </header>

          {/* Content */}
          <div className="space-y-10 text-gray-300 leading-relaxed font-normal">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">1. Introduction</h2>
              <p>
                At Vevofiks ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">vevofiks.com</Link>, use our services, or interact with us.
              </p>
              <p>
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">2. Information We Collect</h2>
              <p>
                We may collect information about you in a variety of ways. The information we may collect on the website includes:
              </p>
              <div className="space-y-3 pl-4 border-l-2 border-blue-500/30">
                <p>
                  <strong className="text-white">Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you fill out contact forms, book strategy calls, or correspond with us.
                </p>
                <p>
                  <strong className="text-white">Derivative Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the site.
                </p>
                <p>
                  <strong className="text-white">Cookies and Tracking:</strong> We may use cookies, web beacons, tracking pixels, and other tracking technologies on the site to help customize the site and improve your experience.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">3. How We Use Your Information</h2>
              <p>
                Having accurate information about you allows us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your product inquiries and deliver the services requested.</li>
                <li>Schedule strategy calls via integrated scheduling tools (such as Calendly).</li>
                <li>Email you regarding your project proposals, ongoing projects, or administrative updates.</li>
                <li>Improve the efficiency, layout, and operation of our website.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the website.</li>
                <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">4. Disclosure of Your Information</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share information we have collected about you in certain situations, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-white">By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.
                </li>
                <li>
                  <strong className="text-white">Third-Party Service Providers:</strong> We may share your data with third-party service providers that perform services for us or on our behalf, including hosting providers, analytics tools, and scheduling systems.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">5. Data Security</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">6. Policy for Children</h2>
              <p>
                We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">7. Changes to This Privacy Policy</h2>
              <p>
                We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of this Privacy Policy. Any changes or modifications will become effective immediately upon posting the updated Privacy Policy on the site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">8. Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
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
