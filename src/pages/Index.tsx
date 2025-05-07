
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import MarqueeSection from "@/components/sections/MarqueeSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import { NavBarDemo } from "@/components/ui/navbar-demo";
import HeroSection3D from "@/components/sections/HeroSection3D";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import FeaturedVehiclesCarousel from "@/components/vehicles/FeaturedVehiclesCarousel";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ModelHighlight from "@/components/sections/ModelHighlight";

const Index = () => {
  return (
    <div className="min-h-screen text-white overflow-x-hidden relative">
      <Header />
      
      <main className="relative z-10">
        <HeroSection3D />
        <FeaturesGrid />
        <ModelHighlight />
        <MarqueeSection />
        <FeaturedVehiclesCarousel />
        <HowItWorksSection />
        <TestimonialsSection />
        <SubscriptionPlans />
      </main>
      
      <Footer />
      <AIAssistant />
      <NavBarDemo />
    </div>
  );
};

export default Index;
