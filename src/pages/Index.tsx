
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import AnimatedBackground from "@/components/AnimatedBackground";
import GridHero from "@/components/index/GridHero";
import IndexContent from "@/components/index/IndexContent";

const Index = () => {
  return (
    <AnimatedBackground intensity="medium">
      {/* Header with glassmorphism */}
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      
      {/* Grid Hero Section */}
      <GridHero />
      
      {/* Main content */}
      <IndexContent />
      
      <Footer />
      <AIAssistant />
    </AnimatedBackground>
  );
};

export default Index;
