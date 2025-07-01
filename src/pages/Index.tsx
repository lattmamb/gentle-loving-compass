
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import { NavBarDemo } from "@/components/ui/navbar-demo";
import HeroSection from "@/components/sections/HeroSection";
import AISubscriptionSection from "@/components/sections/AISubscriptionSection";
import VehicleShowcaseSection from "@/components/sections/VehicleShowcaseSection";
import ChargingEcosystemSection from "@/components/sections/ChargingEcosystemSection";
import FeaturesSection from "@/components/sections/FeaturesSection";

const Index = () => {
  return (
    <div className="min-h-screen text-white overflow-x-hidden relative bg-black">
      <Header />
      
      <main className="relative z-10">
        <HeroSection />
        <AISubscriptionSection />
        <VehicleShowcaseSection />
        <ChargingEcosystemSection />
        <FeaturesSection />
      </main>
      
      <Footer />
      <AIAssistant />
      <NavBarDemo />
    </div>
  );
};

export default Index;
