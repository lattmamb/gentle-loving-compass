
import React, { useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import AnimatedFeatures from "@/components/AnimatedFeatures";
import AnimatedTestimonials from "@/components/AnimatedTestimonials";
import AnimatedStats from "@/components/AnimatedStats";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import VehicleCardsCarousel from "@/components/VehicleCardsCarousel";
import { vehicles } from "@/data/vehicles";
import { motion, useScroll, useTransform } from "framer-motion";
import NeomorphicCard3D from "@/components/NeomorphicCard3D";
import NeoCard from "@/components/NeoCard";
import ThreeDMarquee from "@/components/ThreeDMarquee";
import { marqueeImages, featuredImages } from "@/data/marqueeImages";
import AnimatedBackground from "@/components/AnimatedBackground";
import GlassmorphicCardsSection from "@/components/GlassmorphicCardsSection";
import AtlasVisionOSSection from "@/components/AtlasVisionOSSection";
import ChargingHubsSection from "@/components/ChargingHubsSection";
import TokenizedOwnershipSection from "@/components/TokenizedOwnershipSection";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Parallax effects for different sections
  const featuresScale = useTransform(scrollYProgress, [0.4, 0.6], [0.95, 1]);
  const statsY = useTransform(scrollYProgress, [0.1, 0.3], [100, 0]);
  const carouselRotateY = useTransform(scrollYProgress, [0.2, 0.4], [5, 0]);

  // 3D perspective styles
  const perspectiveStyle = {
    perspective: "1000px",
    transformStyle: "preserve-3d" as "preserve-3d",
  };
  
  // Initialize glow effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!scrollRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      const glowElements = scrollRef.current.querySelectorAll('.neo-glow-blue');
      glowElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.setProperty('--mouse-x', `${x * 100}%`);
        htmlEl.style.setProperty('--mouse-y', `${y * 100}%`);
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <AnimatedBackground intensity="medium">
      <div ref={scrollRef} className="min-h-screen overflow-hidden" style={perspectiveStyle}>
        {/* Header with glassmorphism */}
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        
        {/* Hero Section */}
        <section className="w-full relative">
          <HeroSection />
        </section>
        
        {/* Animated Stats Section with parallax */}
        <motion.section
          style={{ y: statsY, translateZ: "30px" }}
          className="relative"
        >
          <AnimatedStats />
        </motion.section>
        
        {/* Vehicle Cards Carousel Section with 3D rotation */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="py-16 relative"
          style={{ 
            rotateY: carouselRotateY,
            translateZ: "10px"
          }}
        >
          <VehicleCardsCarousel 
            title="Premium Electric Fleet"
            subtitle="Explore our collection of premium Tesla vehicles available for flexible subscription"
            vehiclesToShow={vehicles.slice(0, 6)}
          />
        </motion.section>
        
        {/* Subscription Plans Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
          style={{ translateZ: "15px" }}
        >
          <SubscriptionPlans />
        </motion.div>
        
        {/* Atlas VisionOS Section */}
        <AtlasVisionOSSection />
        
        {/* Features Section with scale effect */}
        <motion.section
          style={{ 
            scale: featuresScale,
            translateZ: "25px" 
          }}
          className="relative"
        >
          <AnimatedFeatures />
        </motion.section>
        
        {/* Charging Hubs Section */}
        <ChargingHubsSection />
        
        {/* 3D Marquee Gallery Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="py-16 relative"
          style={{ translateZ: "40px" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-blue">
                Experience Unity Fleet
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Our premium collection of Tesla vehicles
              </p>
            </motion.div>
            
            <ThreeDMarquee images={marqueeImages} />
          </div>
        </motion.section>
        
        {/* Tokenized Ownership Section */}
        <TokenizedOwnershipSection />
        
        {/* Testimonials with 3D depth */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
          style={{ translateZ: "35px" }}
        >
          <AnimatedTestimonials />
        </motion.section>
        
        <Footer />
        <AIAssistant />
      </div>
    </AnimatedBackground>
  );
};

export default Index;
