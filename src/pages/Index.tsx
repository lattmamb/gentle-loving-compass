
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import HeroSection from "@/components/HeroSection";
import AnimatedFeatures from "@/components/AnimatedFeatures";
import AnimatedTestimonials from "@/components/AnimatedTestimonials";
import AnimatedStats from "@/components/AnimatedStats";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import ThreeDMarquee from "@/components/ThreeDMarquee";
import { marqueeImages } from "@/data/marqueeImages";
import VehicleCardsCarousel from "@/components/VehicleCardsCarousel";
import { vehicles } from "@/data/vehicles";
import { motion } from "framer-motion";
import TabsSection from "@/components/TabsSection";
import GlassmorphicCardsSection from "@/components/GlassmorphicCardsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />
      <HeroSection />
      
      {/* Animated Stats Section */}
      <AnimatedStats />
      
      {/* Tabs Section with Animated Cards */}
      <TabsSection />
      
      {/* Vehicle Cards Carousel Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-16"
      >
        <VehicleCardsCarousel 
          title="Experience Tesla Electrified"
          subtitle="Browse through our premium Tesla collection with flexible subscription options"
          vehiclesToShow={vehicles.slice(0, 6)}
        />
      </motion.section>
      
      {/* Glassmorphic Cards Section */}
      <GlassmorphicCardsSection />
      
      {/* Features Section */}
      <AnimatedFeatures />
      
      {/* 3D Marquee Section */}
      <motion.section 
        className="py-16 px-6 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
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
              Experience Our Fleet
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Browse through our premium Tesla collection
            </p>
          </motion.div>
          
          <ThreeDMarquee 
            images={marqueeImages} 
            className="mt-8"
          />
        </div>
      </motion.section>
      
      {/* Testimonials Section */}
      <AnimatedTestimonials />
      
      {/* Subscription Plans */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <SubscriptionPlans />
      </motion.div>
      
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default Index;
