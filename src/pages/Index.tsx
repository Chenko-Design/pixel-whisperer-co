import Hero from "@/components/landing/Hero";
import ValueProposition from "@/components/landing/ValueProposition";
import Services from "@/components/landing/Services";
import Process from "@/components/landing/Process";
import Portfolio from "@/components/landing/Portfolio";
import Testimonials from "@/components/landing/Testimonials";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValueProposition />
      <Services />
      <Process />
      <Portfolio />
      <div className="w-full flex justify-center py-8">
        <div className="w-1/2 h-[2px] bg-[#D87341]" />
      </div>
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
