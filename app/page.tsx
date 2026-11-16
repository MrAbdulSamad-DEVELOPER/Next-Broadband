import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Packages from "../components/Packages";
import Coverage from "../components/Coverage";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutUs from "../components/AboutUs";
import Testimonials from "../components/Testimonials";
import BlogSection from "../components/BlogSection";
import FAQ from "../components/FAQ";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#FAFAFA] text-[#0F172A] overflow-x-hidden w-full max-w-full font-sans">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Packages />
        <Coverage />
        <WhyChooseUs />
        <AboutUs />
        <Testimonials />
        <BlogSection />
        <FAQ />
        <ContactCTA />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
