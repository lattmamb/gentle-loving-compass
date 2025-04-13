
import React from "react";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import FeaturedVehicles from "@/components/FeaturedVehicles";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import LampDemo from "@/components/ui/lamp-demo";
import { NavBarDemo } from "@/components/ui/navbar-demo";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import MarqueeSection from "@/components/sections/MarqueeSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";

const Index = () => {
  return (
    <div className="min-h-screen text-white overflow-x-hidden relative">
      <Header />
      <HeroSection />
      <FeaturesGrid />
      <MarqueeSection />
      <FeaturedVehicles />
      <LampDemo />
      <HowItWorksSection />
      <SubscriptionPlans />
      <Footer />
      <AIAssistant />
      <NavBarDemo />
    </div>
  );
};

export default Index;
