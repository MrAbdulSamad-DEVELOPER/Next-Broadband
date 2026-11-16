import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextbroadband.vercel.app"),
  title: "Next Broadband | High-Speed Fiber Optic & Wireless Internet ISP in Pakistan",
  description:
    "Get ultra-low latency Fiber Optic and long-range Wireless Internet from 6 Mbps to 30 Mbps with Next Broadband. Fast installation and direct WhatsApp engineer support at 0349 1988224.",
  keywords: [
    "Next Broadband",
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
  alternates: {
    canonical: "https://nextbroadband.vercel.app/",
  },
  authors: [{ name: "Next Broadband" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Next Broadband | High-Speed Fiber Optic & Wireless Internet ISP in Pakistan",
    description:
      "Get ultra-low latency Fiber Optic and long-range Wireless Internet from 6 Mbps to 30 Mbps with Next Broadband. Fast installation and direct WhatsApp engineer support at 0349 1988224.",
    url: "https://nextbroadband.vercel.app/",
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
  twitter: {
    card: "summary_large_image",
    title: "Next Broadband | High-Speed Fiber Optic & Wireless Internet ISP in Pakistan",
    description:
      "Get ultra-low latency Fiber Optic and long-range Wireless Internet from 6 Mbps to 30 Mbps with Next Broadband. Fast installation and direct WhatsApp engineer support at 0349 1988224.",
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#090D16",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Rich JSON-LD Schemas: InternetServiceProvider + FAQPage
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "InternetServiceProvider",
    name: "Next Broadband",
    alternateName: ["Next Broadband ISP", "Next Broadband Pakistan"],
    url: "https://nextbroadband.vercel.app/",
    logo: "https://nextbroadband.vercel.app/logo.png",
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
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between Fiber Optic and Wireless Internet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fiber Optic uses dedicated glass strands to transmit data at light speed, providing ultra-low latency, maximum speed consistency, and peak bandwidth stability. Wireless Internet uses high-gain directional antennas to beam high-speed internet to premises where physical fiber cabling is not yet deployed or is undergoing expansion.",
        },
      },
      {
        "@type": "Question",
        name: "How do I check pricing and installation charges?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pricing and installation charges depend on your physical location and the feasibility of fiber cable distance or wireless antenna alignment. By clicking any WhatsApp button on our website, you connect directly with our dispatch team, who will instantly share an exact, transparent quote with zero hidden charges.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can Next Broadband install my connection?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Once your location coverage is verified on WhatsApp and your preferred package is confirmed, our local field engineers typically schedule and complete your wireless or optical fiber installation within 24 to 48 hours, weather and local site access permitting.",
        },
      },
      {
        "@type": "Question",
        name: "Which package speed should I choose for my home or business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For light use such as social browsing, messaging, and 1–3 phones, 6 to 8 Mbps is sufficient. For multi-device households streaming HD video and remote work Zoom calls, 10 to 16 Mbps offers an optimal balance. For competitive online gaming, 4K streaming, or commercial offices with heavy multi-user workloads, 20 to 30 Mbps is strongly recommended.",
        },
      },
      {
        "@type": "Question",
        name: "How do I reach customer support if I experience connectivity issues?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Clients have direct WhatsApp and phone access to our site incharge and field engineers at 0349 1988224. There are zero robotic IVR call center menus—you communicate directly with our technical personnel who manage the physical fiber nodes and wireless links.",
        },
      },
      {
        "@type": "Question",
        name: "Can I upgrade or downgrade my speed tier in the future?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, absolutely. We offer flexible speed adjustments anytime without penalties or hidden lock-ins. Simply send a quick message to our team on WhatsApp at 0349 1988224, and our network administrators will adjust your bandwidth profile remotely for your next billing cycle.",
        },
      },
    ],
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-PK">
      <head>
        <link rel="canonical" href="https://nextbroadband.vercel.app/" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@700;800&family=Space+Grotesk:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#FAFAFA] text-[#0F172A] font-sans antialiased selection:bg-[#1D4ED8]/15 selection:text-[#1D4ED8]">
        {children}
      </body>
    </html>
  );
}
