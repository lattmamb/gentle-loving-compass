
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import HeroParallaxDemo from "@/components/hero-parallax-demo";
import AnimatedBackground from "@/components/AnimatedBackground";

const ParallaxDemo = () => {
  return (
    <AnimatedBackground intensity="medium">
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-24">
          <HeroParallaxDemo />
        </main>
        
        <Footer />
        <AIAssistant />
      </div>
    </AnimatedBackground>
  );
};

export default ParallaxDemo;
