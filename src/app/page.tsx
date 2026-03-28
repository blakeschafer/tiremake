import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntelligentBridge from "@/components/IntelligentBridge";
import Features from "@/components/Features";
import YOSReveal from "@/components/YOSReveal";
import Benefits from "@/components/Benefits";
import BuiltByIndustry from "@/components/BuiltByIndustry";
import Testimonial from "@/components/Testimonial";
import TrustedByOperators from "@/components/TrustedByOperators";
import HowItWorks from "@/components/HowItWorks";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <IntelligentBridge />
      <Features />
      <YOSReveal />
      <Benefits />
      <BuiltByIndustry />
      <Testimonial />
      <TrustedByOperators />
      <HowItWorks />
      <ContactForm />
      <CTASection />
      <Footer />
    </main>
  );
}
