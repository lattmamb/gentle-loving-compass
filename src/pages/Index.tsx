
import React, { useState, useEffect, useRef } from "react";
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
import { motion, useMotionValue, useTransform } from "framer-motion";
import AnimatedBackground from "@/components/AnimatedBackground";
import { marqueeImages } from "@/data/marqueeImages";

export default function Index() {
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

  // Enhanced 3D transforms based on mouse movement
  const baseTransform = useMotionValue(0);
  const rotateX = useTransform(baseTransform, [0, 1], [mousePosition.y * -3, mousePosition.y * 3]);
  const rotateY = useTransform(baseTransform, [0, 1], [mousePosition.x * 3, mousePosition.x * -3]);

  return (
    <div ref={pageRef} className="relative space-3d min-h-screen w-full overflow-hidden">
      {/* Enhanced 3D animated background */}
      <AnimatedBackground intensity="high" />
      
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
          <HeroSection />
          
          {/* FeaturedVehicles - enhanced floating effect */}
          <motion.section 
            className="floating-element-lg magic-dust"
            style={{ 
              transformStyle: "preserve-3d",
              transform: `translateZ(50px) translateY(${scrollY * 0.03}px)`,
            }}
          >
            <FeaturedVehicles />
          </motion.section>
          
          {/* GlassmorphicCardsSection - enhanced with glass effect */}
          <motion.section
            className="floating-element-sm mt-20 md:mt-32 magic-dust"
            style={{ 
              transformStyle: "preserve-3d",
              transform: `translateZ(30px) translateY(${scrollY * -0.02}px)`,
            }}
          >
            <GlassmorphicCardsSection />
          </motion.section>
          
          {/* Marquee section elevated and floating */}
          <motion.section 
            className="my-20 md:my-32 floating-element"
            style={{ 
              transformStyle: "preserve-3d",
              transform: `translateZ(40px) translateY(${scrollY * 0.01}px)`,
            }}
          >
            <ThreeDMarquee images={marqueeImages} />
          </motion.section>
          
          {/* AnimatedFeatures with stronger floating effect */}
          <motion.section 
            className="floating-element-lg magic-dust"
            style={{ 
              transformStyle: "preserve-3d",
              transform: `translateZ(60px) translateY(${scrollY * 0.04}px)`,
            }}
          >
            <AnimatedFeatures />
          </motion.section>
          
          {/* AnimatedStats with subtle motion */}
          <motion.section 
            className="floating-element-sm my-20 md:my-32"
            style={{ 
              transformStyle: "preserve-3d",
              transform: `translateZ(25px) translateY(${scrollY * -0.015}px)`,
            }}
          >
            <AnimatedStats />
          </motion.section>
          
          {/* TabsSection with enhanced depth */}
          <motion.section 
            className="my-20 md:my-32 floating-element"
            style={{ 
              transformStyle: "preserve-3d",
              transform: `translateZ(35px) translateY(${scrollY * 0.025}px)`,
            }}
          >
            <TabsSection />
          </motion.section>
          
          {/* ChargingHubsSection with maximum depth */}
          <motion.section 
            className="floating-element-lg my-20 md:my-32 magic-dust"
            style={{ 
              transformStyle: "preserve-3d",
              transform: `translateZ(70px) translateY(${scrollY * 0.05}px)`,
            }}
          >
            <ChargingHubsSection />
          </motion.section>
          
          {/* AtlasVisionOSSection as a prominent feature */}
          <motion.section 
            className="floating-element-lg my-20 md:my-40 magic-dust"
            style={{ 
              transformStyle: "preserve-3d",
              transform: `translateZ(80px) translateY(${scrollY * 0.03}px)`,
            }}
          >
            <AtlasVisionOSSection />
          </motion.section>
          
          {/* TokenizedOwnershipSection with depth */}
          <motion.section 
            className="floating-element my-20 md:my-32"
            style={{ 
              transformStyle: "preserve-3d",
              transform: `translateZ(40px) translateY(${scrollY * 0.02}px)`,
            }}
          >
            <TokenizedOwnershipSection />
          </motion.section>
          
          {/* AnimatedTestimonials with subtle floating */}
          <motion.section 
            className="floating-element-sm mb-20 md:mb-32"
            style={{ 
              transformStyle: "preserve-3d",
              transform: `translateZ(30px) translateY(${scrollY * -0.01}px)`,
            }}
          >
            <AnimatedTestimonials />
          </motion.section>
        </motion.div>
      </div>
      
      {/* Footer spacer to ensure everything floats above the ground */}
      <div className="h-20"></div>
    </div>
  );
}
