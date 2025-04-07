
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import AnimatedFeatures from "@/components/AnimatedFeatures";
import AnimatedTestimonials from "@/components/AnimatedTestimonials";
import AnimatedStats from "@/components/AnimatedStats";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import VehicleCardsCarousel from "@/components/VehicleCardsCarousel";
import { vehicles } from "@/data/vehicles";
import NeomorphicCard3D from "@/components/NeomorphicCard3D";
import NeoCard from "@/components/NeoCard";
import ThreeDMarquee from "@/components/ThreeDMarquee";
import { marqueeImages, featuredImages } from "@/data/marqueeImages";
import GlassmorphicCardsSection from "@/components/GlassmorphicCardsSection";

const IndexContent = () => {
  const { scrollYProgress } = useScroll();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Parallax effects for different sections - fixed MotionValue<number> type issues
  // by using the useTransform values directly in the style objects
  
  // 3D perspective styles
  const perspectiveStyle = {
    perspective: "1000px",
    transformStyle: "preserve-3d" as "preserve-3d",
  };

  return (
    <div ref={scrollRef} className="min-h-screen overflow-hidden" style={perspectiveStyle}>
      {/* 3D Marquee Gallery Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-16 relative"
        style={{ translateZ: 40 }}
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
              Experience Tesla Fleet
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Our premium collection of Tesla vehicles
            </p>
          </motion.div>
          
          <ThreeDMarquee images={marqueeImages} />
        </div>
      </motion.section>
      
      {/* Animated Stats Section with parallax */}
      <motion.section
        style={{ y: useTransform(scrollYProgress, [0.1, 0.3], [100, 0]), translateZ: 30 }}
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
          rotateY: useTransform(scrollYProgress, [0.2, 0.4], [5, 0]),
          translateZ: 10
        }}
      >
        <VehicleCardsCarousel 
          title="Experience Tesla Electrified"
          subtitle="Browse through our premium Tesla collection with flexible subscription options"
          vehiclesToShow={vehicles.slice(0, 6)}
        />
      </motion.section>
      
      {/* Glassmorphic Cards Section */}
      <GlassmorphicCardsSection />
      
      {/* 3D Featured Vehicle Card */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 px-6 relative"
        style={{ translateZ: 50 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-blue">
              Premium Tesla Experience
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Discover what makes our vehicles exceptional
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <NeomorphicCard3D
              maxRotation={15}
              glowColor="rgba(10, 132, 255, 0.4)"
              className="p-0 rounded-2xl overflow-hidden h-[400px]"
            >
              <img 
                src={featuredImages[0].url}
                alt={featuredImages[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{featuredImages[0].title}</h3>
                <p className="text-white/80">{featuredImages[0].description}</p>
              </div>
            </NeomorphicCard3D>
            
            <div className="grid grid-rows-2 gap-8 h-[400px]">
              <NeomorphicCard3D
                maxRotation={10}
                glowColor="rgba(94, 92, 230, 0.4)"
                className="p-0 rounded-2xl overflow-hidden"
              >
                <img 
                  src={featuredImages[1].url}
                  alt={featuredImages[1].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-xl font-bold text-white">{featuredImages[1].title}</h3>
                  <p className="text-white/80 text-sm">{featuredImages[1].description}</p>
                </div>
              </NeomorphicCard3D>
              
              <NeomorphicCard3D
                maxRotation={10}
                glowColor="rgba(16, 185, 129, 0.4)"
                className="p-0 rounded-2xl overflow-hidden"
              >
                <img 
                  src={featuredImages[2].url}
                  alt={featuredImages[2].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-xl font-bold text-white">{featuredImages[2].title}</h3>
                  <p className="text-white/80 text-sm">{featuredImages[2].description}</p>
                </div>
              </NeomorphicCard3D>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Features Section with scale effect */}
      <motion.section
        style={{ 
          scale: useTransform(scrollYProgress, [0.4, 0.6], [0.95, 1]),
          translateZ: 25
        }}
        className="relative"
      >
        <AnimatedFeatures />
      </motion.section>
      
      {/* Testimonials with 3D depth */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
        style={{ translateZ: 35 }}
      >
        <AnimatedTestimonials />
      </motion.section>
      
      {/* Subscription Plans with neomorphism */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative"
        style={{ translateZ: 15 }}
      >
        <SubscriptionPlans />
      </motion.div>
    </div>
  );
};

export default IndexContent;
