
import React, { useState, useEffect } from "react";
import UnifiedHeader from "@/components/ui/unified-header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import { NavBarDemo } from "@/components/ui/navbar-demo";
import HeroSection from "@/components/sections/HeroSection";
import AISubscriptionSection from "@/components/sections/AISubscriptionSection";
import VehicleShowcaseSection from "@/components/sections/VehicleShowcaseSection";
import ChargingEcosystemSection from "@/components/sections/ChargingEcosystemSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PageLoading from "@/components/ui/page-loading";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoading message="Initializing EV Fleet" progress={85} />;
  }

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden relative bg-background">
      <UnifiedHeader />
      
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
