
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
  
  // Parallax effects for different sections with enhanced depth
  const featuresScale = useTransform(scrollYProgress, [0.4, 0.6], [0.95, 1.05]);
  const featuresZ = useTransform(scrollYProgress, [0.4, 0.6], [0, 50]);
  const statsY = useTransform(scrollYProgress, [0.1, 0.3], [100, 0]);
  const statsZ = useTransform(scrollYProgress, [0.1, 0.3], [0, 50]); 
  const carouselRotateY = useTransform(scrollYProgress, [0.2, 0.4], [8, 0]);
  const carouselZ = useTransform(scrollYProgress, [0.2, 0.4], [0, 40]);
  
  // Mouse tracking for 3D effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // 3D perspective styles
  const perspectiveStyle = {
    perspective: "2000px",
    transformStyle: "preserve-3d" as "preserve-3d",
  };
  
  // Initialize glow effects and track mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!scrollRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      setMousePosition({ x, y });
      
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
      <div 
        ref={scrollRef} 
        className="min-h-screen overflow-hidden perspective-2000" 
        style={perspectiveStyle}
      >
        {/* Header with glassmorphism */}
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        
        {/* Hero Section */}
        <section className="w-full relative">
          <HeroSection />
        </section>
        
        {/* Animated Stats Section with parallax and floating effect */}
        <motion.section
          style={{ 
            y: statsY, 
            z: statsZ,
            rotateX: mousePosition.y * -5,
            rotateY: mousePosition.x * 5,
          }}
          className="relative transform-style-3d"
        >
          <AnimatedStats />
        </motion.section>
        
        {/* Vehicle Cards Carousel Section with enhanced 3D rotation */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="py-16 relative transform-style-3d"
          style={{ 
            rotateY: carouselRotateY,
            z: carouselZ,
            transformStyle: "preserve-3d",
            rotateX: mousePosition.y * -3,
          }}
        >
          <VehicleCardsCarousel 
            title="Premium Electric Fleet"
            subtitle="Explore our collection of premium Tesla vehicles available for flexible subscription"
            vehiclesToShow={vehicles.slice(0, 6)}
          />
        </motion.section>
        
        {/* Subscription Plans Section with hover effects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative transform-style-3d"
          style={{ 
            z: 30 + mousePosition.x * 20,
            rotateX: mousePosition.y * -2,
            rotateY: mousePosition.x * 2,
          }}
        >
          <SubscriptionPlans />
        </motion.div>
        
        {/* Atlas VisionOS Section with enhanced depth */}
        <motion.section
          className="transform-style-3d"
          style={{
            z: 40,
            rotateX: mousePosition.y * -3,
            rotateY: mousePosition.x * 3,
          }}
        >
          <AtlasVisionOSSection />
        </motion.section>
        
        {/* Features Section with scale and depth effect */}
        <motion.section
          style={{ 
            scale: featuresScale,
            z: featuresZ,
            rotateX: mousePosition.y * -2,
            rotateY: mousePosition.x * 2,
            transformStyle: "preserve-3d",
          }}
          className="relative"
        >
          <AnimatedFeatures />
        </motion.section>
        
        {/* Charging Hubs Section with 3D transform */}
        <motion.section
          className="transform-style-3d"
          style={{
            z: 50,
            rotateX: mousePosition.y * -2,
            rotateY: mousePosition.x * 2,
          }}
        >
          <ChargingHubsSection />
        </motion.section>
        
        {/* 3D Marquee Gallery Section with enhanced depth */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="py-16 relative transform-style-3d"
          style={{ 
            z: 60,
            rotateX: mousePosition.y * -3,
            rotateY: mousePosition.x * 3,
          }}
        >
          <div className="max-w-7xl mx-auto transform-style-3d">
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
        
        {/* Tokenized Ownership Section with 3D hover effect */}
        <motion.section
          className="transform-style-3d"
          style={{
            z: 30,
            rotateX: mousePosition.y * -2,
            rotateY: mousePosition.x * 2,
          }}
        >
          <TokenizedOwnershipSection />
        </motion.section>
        
        {/* Testimonials with enhanced 3D depth */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative transform-style-3d"
          style={{ 
            z: 50,
            rotateX: mousePosition.y * -2,
            rotateY: mousePosition.x * 2,
          }}
        >
          <AnimatedTestimonials />
        </motion.section>
        
        <motion.div
          className="relative transform-style-3d"
          style={{
            z: 20,
          }}
        >
          <Footer />
        </motion.div>
        <AIAssistant />
      </div>
    </AnimatedBackground>
  );
};

export default Index;
