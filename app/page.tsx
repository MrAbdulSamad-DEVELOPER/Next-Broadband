"use client";

import React, { useState, useEffect } from "react";
import LightningLoader from "../components/LightningLoader";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Packages from "../components/Packages";
import Coverage from "../components/Coverage";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutUs from "../components/AboutUs";
import FAQ from "../components/FAQ";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check if user already saw the intro during this browser session
    const hasSeenIntro = sessionStorage.getItem("nb_intro_viewed");
    if (hasSeenIntro === "true") {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem("nb_intro_viewed", "true");
  };

  return (
    <div className="relative min-h-screen bg-[#07090E] text-text-primary overflow-x-hidden">
      {/* Cinematic Lightning Intro Screen */}
      {isMounted && showIntro && (
        <LightningLoader onComplete={handleIntroComplete} />
      )}

      {/* Main Landing Page Experience */}
      <div
        className={`transition-opacity duration-1000 ${
          showIntro && isMounted ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />

        <main>
          <Hero />
          <Services />
          <Packages />
          <Coverage />
          <WhyChooseUs />
          <AboutUs />
          <FAQ />
          <ContactCTA />
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </div>
  );
}
