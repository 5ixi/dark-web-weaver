
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PortfolioSection from "@/components/PortfolioSection";
import PricingPlans from "@/components/PricingPlans";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <PortfolioSection />
      <PricingPlans />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
