import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextbroadband.pk"),
  title: "Best Fiber Optic & Wireless Internet in Pakistan | Next Broadband ISP",
  description:
    "Next Broadband is a premier Pakistan Internet Service Provider offering high-speed fiber optic and wireless broadband from 6 Mbps to 30 Mbps. Low latency gaming connection, buffer-free 4K streaming, and 24/7 direct WhatsApp dispatch (+92 349 1988224).",
  keywords: [
    "Best Fiber Optic Internet in Pakistan",
    "High-Speed Wireless Broadband Pakistan",
    "Low Latency Gaming Internet ISP",
    "Unlimited Home & Office WiFi Packages",
    "Next Broadband ISP",
    "fast fiber internet Pakistan",
    "wireless point-to-point internet",
    "buffer-free 4K streaming",
    "low ping gaming connection PUBG Valorant",
    "home WiFi packages",
    "commercial broadband solutions Pakistan",
    "03491988224",
  ],
  authors: [{ name: "Next Broadband" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Next Broadband — Best Fiber Optic & Wireless Internet ISP in Pakistan",
    description:
      "High-speed fiber optic and point-to-point wireless broadband packages from 6 Mbps to 30 Mbps. Low ping gaming and direct WhatsApp support in Pakistan.",
    url: "https://nextbroadband.pk",
    siteName: "Next Broadband",
    images: [
      {
        url: "/logo.png",
        width: 1762,
        height: 1731,
        alt: "Next Broadband Official Logo",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0F1C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InternetServiceProvider",
  name: "Next Broadband",
  alternateName: ["Next Broadband ISP", "Next Broadband Pakistan"],
  url: "https://nextbroadband.pk",
  logo: "https://nextbroadband.pk/logo.png",
  description:
    "Next Broadband provides high-speed optical fiber and wireless internet solutions across residential sectors and commercial markets in Pakistan. Unlimited speed tiers from 6 Mbps to 30 Mbps with ultra-low latency.",
  telephone: "+923491988224",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+923491988224",
    contactType: "customer service",
    areaServed: "PK",
    availableLanguage: ["English", "Urdu"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
  },
  founder: {
    "@type": "Person",
    name: "M. Jahangir",
    jobTitle: "Chief Executive Officer",
  },
  employee: {
    "@type": "Person",
    name: "Sher Muhammad",
    jobTitle: "Site Incharge",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Next Broadband Internet Packages",
    itemListElement: [
      { "@type": "Offer", name: "6 Mbps Package", description: "Essential Browsing & WhatsApp Messaging" },
      { "@type": "Offer", name: "8 Mbps Package", description: "Social Media & Everyday Use" },
      { "@type": "Offer", name: "10 Mbps Package", description: "Family Home Connectivity" },
      { "@type": "Offer", name: "12 Mbps Package", description: "Home Streaming & Remote Work" },
      { "@type": "Offer", name: "16 Mbps Package", description: "High-Definition Entertainment" },
      { "@type": "Offer", name: "20 Mbps Featured Tier", description: "Flagship 4K Ultra HD & Low Ping Gaming" },
      { "@type": "Offer", name: "25 Mbps Package", description: "Commercial Shops & Smart Homes" },
      { "@type": "Offer", name: "30 Mbps Package", description: "Offices & Maximum Performance" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-PK" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-text-primary antialiased selection:bg-electric-cyan/20 selection:text-electric-cyan">
        {children}
      </body>
    </html>
  );
}
