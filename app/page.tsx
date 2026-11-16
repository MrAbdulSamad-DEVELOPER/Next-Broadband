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
  return (
    <div className="relative min-h-screen bg-[#0A0F1C] text-text-primary overflow-x-hidden">
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
  );
}
