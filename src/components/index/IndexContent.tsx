
import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Parallax3DHero from "@/components/Parallax3DHero";
import FeaturedVehiclesSection from "./FeaturedVehiclesSection";
import GlassmorphicSection from "./GlassmorphicSection";
import MarqueeSection from "./MarqueeSection";
import FeaturesSection from "./FeaturesSection";
import StatsSection from "./StatsSection";
import TabsFeatureSection from "./TabsFeatureSection";
import ChargingSection from "./ChargingSection";
import VisionSection from "./VisionSection";
import TokenizedSection from "./TokenizedSection";
import TestimonialsSection from "./TestimonialsSection";
import AnimatedBackground from "@/components/AnimatedBackground";
import GridBackground from "@/components/ui/grid-background";

export default function IndexContent() {
  // Track scroll position for parallax effects
  const [scrollY, setScrollY] = useState(0);
  // Track mouse position for global 3D effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const pageRef = useRef<HTMLDivElement>(null);
  
  // Mouse movement tracking for 3D effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position between -0.5 and 0.5
      if (pageRef.current) {
        const { width, height } = pageRef.current.getBoundingClientRect();
        const x = (e.clientX / width - 0.5) * 2;
        const y = (e.clientY / height - 0.5) * 2;
        setMousePosition({ x, y });
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  // Scroll tracking for parallax
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Enhanced 3D transforms based on mouse movement - more subtle for polish
  const baseTransform = useMotionValue(0);
  const rotateX = useTransform(baseTransform, [0, 1], [mousePosition.y * -2, mousePosition.y * 2]);
  const rotateY = useTransform(baseTransform, [0, 1], [mousePosition.x * 2, mousePosition.x * -2]);

  return (
    <div ref={pageRef} className="relative space-3d min-h-screen w-full overflow-hidden">
      {/* Enhanced 3D animated background with grid */}
      <GridBackground containerClassName="fixed inset-0 -z-20" />
      <AnimatedBackground intensity="low" />
      
      <div className="relative z-10 perspective-2000 transform-style-3d">
        {/* Main content with 3D space */}
        <motion.div 
          className="w-full"
          style={{ 
            transformStyle: "preserve-3d",
            rotateX,
            rotateY
          }}
        >
          {/* Hero section with full bleed */}
          <Parallax3DHero />
          
          {/* Featured Vehicles - Tesla inspired card section */}
          <FeaturedVehiclesSection scrollY={scrollY} />
          
          {/* Clean Glassmorphic section inspired by Apple */}
          <GlassmorphicSection scrollY={scrollY} />
          
          {/* Tesla-inspired marquee section */}
          <MarqueeSection />
          
          {/* Features with Apple-inspired clean cards */}
          <FeaturesSection scrollY={scrollY} />
          
          {/* Stats with subtle motion */}
          <StatsSection scrollY={scrollY} />
          
          {/* TabsSection with enhanced depth */}
          <TabsFeatureSection scrollY={scrollY} />
          
          {/* Charging network - inspired by Tesla supercharger UX */}
          <ChargingSection scrollY={scrollY} />
          
          {/* AtlasVisionOS - Apple Vision Pro inspired section */}
          <VisionSection scrollY={scrollY} />
          
          {/* TokenizedOwnership with depth */}
          <TokenizedSection scrollY={scrollY} />
          
          {/* Testimonials with subtle floating */}
          <TestimonialsSection scrollY={scrollY} />
        </motion.div>
      </div>
      
      {/* Footer spacer */}
      <div className="h-20"></div>
    </div>
  );
}
