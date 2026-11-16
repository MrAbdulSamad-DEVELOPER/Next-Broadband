import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextbroadband.pk"),
  title: "Next Broadband — High-Speed Fiber Optic & Wireless Internet Provider",
  description:
    "Next Broadband provides high-speed optical fiber and wireless internet solutions across residential sectors and commercial markets. 6 Mbps to 30 Mbps plans, ultra-low latency, and direct WhatsApp engineer dispatch.",
  keywords: [
    "Next Broadband",
    "Internet Service Provider",
    "ISP",
    "Fiber Optic Internet",
    "Wireless Internet",
    "Business Internet",
    "High Speed Broadband",
    "Next Broadband Packages",
  ],
  authors: [{ name: "Next Broadband" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    title: "NEXT BROADBAND — Power Your World. Connect Beyond Limits.",
    description:
      "High-speed fiber optic and wireless internet solutions for homes, offices, and businesses.",
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
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0F1C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className="bg-background text-text-primary antialiased selection:bg-electric-cyan/20 selection:text-electric-cyan">
        {children}
      </body>
    </html>
  );
}
