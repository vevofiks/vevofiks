import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vevofiks | High-Performance Design & Engineering Studio",
  description: "Vevofiks helps businesses scale revenue with strategy-led websites, high-converting landing pages, and custom SaaS development. Transform your digital presence today.",
  keywords: ["Vevofiks", "Web Design Agency", "Conversion Optimization", "Next.js Development", "SaaS Development", "AI Automation Agent", "Web Development Studio", "UI/UX Design"],
  authors: [{ name: "Vevofiks Team" }],
  creator: "Vevofiks",
  publisher: "Vevofiks",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vevofiks.com",
    title: "Vevofiks | Strategy-Led Design & Engineering",
    description: "Engineering high-performance digital products that scale businesses. Conversion-focused websites and custom web applications.",
    siteName: "Vevofiks",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vevofiks - Design & Engineering Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vevofiks | High-Performance Web Solutions",
    description: "Stop settling for average websites. Start scaling with strategy-led design and world-class engineering.",
    images: ["/og-image.png"],
    creator: "@vevofiks",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", inter.variable, "font-sans", geist.variable)} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-white selection:text-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Vevofiks",
              "image": "https://vevofiks.com/og-image.png",
              "@id": "https://vevofiks.com",
              "url": "https://vevofiks.com",
              "telephone": "",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "",
                "addressLocality": "",
                "postalCode": "",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 0,
                "longitude": 0
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://twitter.com/vevofiks",
                "https://linkedin.com/company/vevofiks"
              ]
            })
          }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
