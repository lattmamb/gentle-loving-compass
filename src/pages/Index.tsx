
import React, { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturedVehicles from "@/components/FeaturedVehicles";
import GlassmorphicCardsSection from "@/components/GlassmorphicCardsSection";
import AnimatedFeatures from "@/components/AnimatedFeatures";
import AnimatedStats from "@/components/AnimatedStats";
import AnimatedTestimonials from "@/components/AnimatedTestimonials";
import ChargingHubsSection from "@/components/ChargingHubsSection";
import AtlasVisionOSSection from "@/components/AtlasVisionOSSection";
import TokenizedOwnershipSection from "@/components/TokenizedOwnershipSection";
import ThreeDMarquee from "@/components/ThreeDMarquee";
import TabsSection from "@/components/TabsSection";
import { motion } from "framer-motion";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Index() {
  // Track scroll position for parallax effects
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative space-3d min-h-screen w-full">
      {/* Fixed 3D Background */}
      <div className="fixed inset-0 -z-10">
        <AnimatedBackground />
      </div>
      
      <div className="relative z-10 perspective-1000">
        {/* Main content with 3D space */}
        <motion.div 
          className="w-full"
          style={{ 
            transformStyle: "preserve-3d",
          }}
        >
          <HeroSection />
          
          <motion.div 
            className="floating-element"
            style={{ 
              transform: `translateZ(20px) translateY(${scrollY * 0.05}px)`,
            }}
          >
            <FeaturedVehicles />
          </motion.div>
          
          <motion.div 
            className="floating-element-sm"
            style={{ 
              transform: `translateZ(10px) translateY(${scrollY * -0.02}px)`,
            }}
          >
            <GlassmorphicCardsSection />
          </motion.div>
          
          <div className="my-20">
            <ThreeDMarquee />
          </div>
          
          <motion.div 
            className="floating-element"
            style={{ 
              transform: `translateZ(15px) translateY(${scrollY * 0.03}px)`,
            }}
          >
            <AnimatedFeatures />
          </motion.div>
          
          <motion.div 
            className="floating-element-sm"
            style={{ 
              transform: `translateZ(5px) translateY(${scrollY * -0.01}px)`,
            }}
          >
            <AnimatedStats />
          </motion.div>
          
          <div className="my-20">
            <TabsSection />
          </div>
          
          <motion.div 
            className="floating-element-lg"
            style={{ 
              transform: `translateZ(25px) translateY(${scrollY * 0.04}px)`,
            }}
          >
            <ChargingHubsSection />
          </motion.div>
          
          <motion.div 
            className="floating-element"
            style={{ 
              transform: `translateZ(30px) translateY(${scrollY * -0.02}px)`,
            }}
          >
            <AtlasVisionOSSection />
          </motion.div>
          
          <motion.div 
            className="floating-element-sm"
            style={{ 
              transform: `translateZ(10px) translateY(${scrollY * 0.01}px)`,
            }}
          >
            <TokenizedOwnershipSection />
          </motion.div>
          
          <motion.div 
            className="floating-element"
            style={{ 
              transform: `translateZ(20px) translateY(${scrollY * -0.03}px)`,
            }}
          >
            <AnimatedTestimonials />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
