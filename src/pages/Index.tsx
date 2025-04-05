
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

  // Enhanced 3D transforms based on mouse movement - more subtle for polish
  const baseTransform = useMotionValue(0);
  const rotateX = useTransform(baseTransform, [0, 1], [mousePosition.y * -2, mousePosition.y * 2]);
  const rotateY = useTransform(baseTransform, [0, 1], [mousePosition.x * 2, mousePosition.x * -2]);

  return (
    <div ref={pageRef} className="relative space-3d min-h-screen w-full overflow-hidden">
      {/* Enhanced 3D animated background */}
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
          <HeroSection />
          
          {/* Featured Vehicles - Tesla inspired card section */}
          <motion.section 
            className="py-20 md:py-32"
            style={{ 
              transformStyle: "preserve-3d",
              transform: `translateZ(40px) translateY(${scrollY * 0.02}px)`,
            }}
          >
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-blue">Featured Vehicles</h2>
              <p className="text-white/70 mb-12 max-w-2xl text-lg">Explore our premium selection of electric vehicles available for subscription.</p>
              <FeaturedVehicles />
            </div>
          </motion.section>
          
          {/* Clean Glassmorphic section inspired by Apple */}
          <motion.section
            className="py-20 md:py-32 bg-gradient-to-b from-black/20 to-transparent"
            style={{ 
              transformStyle: "preserve-3d",
              transform: `translateZ(30px) translateY(${scrollY * -0.01}px)`,
            }}
          >
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-blue">Experience Refined Mobility</h2>
              <p className="text-white/70 mb-12 max-w-2xl text-lg">A new standard in premium electric vehicle ownership.</p>
              <GlassmorphicCardsSection />
            </div>
          </motion.section>
          
          {/* Tesla-inspired marquee section */}
          <motion.section 
            className="py-20 md:py-32 relative overflow-hidden"
            style={{ 
              transformStyle: "preserve-3d",
              transform: `translateZ(20px)`,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.2), transparent, rgba(0,0,0,0.2))"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 z-10 pointer-events-none"></div>
            <div className="container mx-auto px-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-blue">The Tesla Experience</h2>
              <p className="text-white/70 mb-8 max-w-2xl text-lg">Our vehicles in action across the world.</p>
            </div>
            <ThreeDMarquee images={marqueeImages} />
          </motion.section>
          
          {/* Features with Apple-inspired clean cards */}
          <motion.section 
            className="py-20 md:py-32"
            style={{ 
              transformStyle: "preserve-3d",
              transform: `translateZ(30px) translateY(${scrollY * 0.015}px)`,
            }}
          >
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-blue">Intelligent Features</h2>
              <p className="text-white/70 mb-12 max-w-2xl text-lg">Advanced technology that enhances your driving experience.</p>
              <AnimatedFeatures />
            </div>
          </motion.section>
          
          {/* Stats with subtle motion */}
          <motion.section 
            className="py-20 md:py-32 bg-gradient-to-b from-black/20 to-transparent"
            style={{ 
              transformStyle: "preserve-3d",
              transform: `translateZ(25px) translateY(${scrollY * -0.01}px)`,
            }}
          >
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-blue">Performance Metrics</h2>
              <p className="text-white/70 mb-12 max-w-2xl text-lg">The numbers that define our electric fleet.</p>
              <AnimatedStats />
            </div>
          </motion.section>
          
          {/* TabsSection with enhanced depth */}
          <motion.section 
            className="py-20 md:py-32"
            style={{ 
              transformStyle: "preserve-3d",
              transform: `translateZ(35px) translateY(${scrollY * 0.015}px)`,
            }}
          >
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-blue">Ownership Options</h2>
              <p className="text-white/70 mb-12 max-w-2xl text-lg">Choose the plan that works best for your lifestyle.</p>
              <TabsSection />
            </div>
          </motion.section>
          
          {/* Charging network - inspired by Tesla supercharger UX */}
          <motion.section 
            className="py-20 md:py-32 bg-gradient-to-b from-black/20 to-transparent"
            style={{ 
              transformStyle: "preserve-3d",
              transform: `translateZ(40px) translateY(${scrollY * 0.02}px)`,
            }}
          >
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-blue">Charging Network</h2>
              <p className="text-white/70 mb-12 max-w-2xl text-lg">Fast, convenient charging stations across the country.</p>
              <ChargingHubsSection />
            </div>
          </motion.section>
          
          {/* AtlasVisionOS - Apple Vision Pro inspired section */}
          <motion.section 
            className="py-20 md:py-40 relative overflow-hidden"
            style={{ 
              transformStyle: "preserve-3d",
              transform: `translateZ(50px) translateY(${scrollY * 0.025}px)`,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.3), transparent)"
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)] z-0"></div>
            <div className="container mx-auto px-4 relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-2 text-gradient-blue">Atlas VisionOS</h2>
              <p className="text-white/70 mb-12 max-w-2xl text-lg md:text-xl">The next generation of vehicle interface technology.</p>
              <AtlasVisionOSSection />
            </div>
          </motion.section>
          
          {/* TokenizedOwnership with depth */}
          <motion.section 
            className="py-20 md:py-32"
            style={{ 
              transformStyle: "preserve-3d",
              transform: `translateZ(40px) translateY(${scrollY * 0.02}px)`,
            }}
          >
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-blue">Tokenized Ownership</h2>
              <p className="text-white/70 mb-12 max-w-2xl text-lg">Revolutionary blockchain technology for vehicle ownership.</p>
              <TokenizedOwnershipSection />
            </div>
          </motion.section>
          
          {/* Testimonials with subtle floating */}
          <motion.section 
            className="py-20 md:py-32 bg-gradient-to-b from-black/20 to-transparent"
            style={{ 
              transformStyle: "preserve-3d",
              transform: `translateZ(30px) translateY(${scrollY * -0.01}px)`,
            }}
          >
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-blue">Customer Experiences</h2>
              <p className="text-white/70 mb-12 max-w-2xl text-lg">Hear what our members have to say.</p>
              <AnimatedTestimonials />
            </div>
          </motion.section>
        </motion.div>
      </div>
      
      {/* Sleek footer spacer */}
      <div className="h-20"></div>
    </div>
  );
}
