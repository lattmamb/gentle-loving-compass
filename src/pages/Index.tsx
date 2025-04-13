
import React from "react";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import FeaturedVehicles from "@/components/FeaturedVehicles";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import ThreeDMarquee from "@/components/ThreeDMarquee";
import { marqueeImages } from "@/data/marqueeImages";
import LampDemo from "@/components/ui/lamp-demo";
import { NavBarDemo } from "@/components/ui/navbar-demo";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/SparklesBackground";
import { ExternalLink, ShieldCheck, Zap, Clock, HeartPulse, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen text-white overflow-x-hidden relative">
      <Header />
      <HeroSection />
      
      {/* Features Grid Section */}
      <motion.section 
        className="py-32 px-6 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <SparklesCore
            id="tsparticles"
            background="transparent"
            particleSize={0.8}
            particleDensity={50}
            particleColor="#3b82f6"
            className="w-full h-full"
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6 text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Why Choose Tesla Subscription
            </motion.h2>
            <motion.p 
              className="text-xl text-white/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Experience the future of transportation with flexibility and convenience
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<ShieldCheck className="text-blue-400" />}
              title="Insurance Included"
              description="Comprehensive coverage with every subscription plan for worry-free driving."
              delay={0.1}
            />
            
            <FeatureCard
              icon={<Zap className="text-blue-400" />}
              title="Unlimited Charging"
              description="Access to Tesla's entire Supercharger network included at no additional cost."
              delay={0.3}
            />
            
            <FeatureCard
              icon={<Clock className="text-blue-400" />}
              title="Flexible Terms"
              description="Choose daily, weekly, or monthly plans to fit your lifestyle and budget."
              delay={0.5}
            />
            
            <FeatureCard
              icon={<HeartPulse className="text-blue-400" />}
              title="Premium Maintenance"
              description="Regular maintenance and service included with every subscription."
              delay={0.7}
            />
            
            <FeatureCard
              icon={<MapPin className="text-blue-400" />}
              title="Delivery & Pickup"
              description="Complimentary white-glove delivery and pickup wherever you need."
              delay={0.9}
            />
            
            <FeatureCard
              icon={<ExternalLink className="text-blue-400" />}
              title="Vehicle Swapping"
              description="Flexibility to change vehicles during your subscription period."
              delay={1.1}
            />
          </div>
        </div>
      </motion.section>
      
      {/* 3D Marquee Section */}
      <section className="py-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Experience Our Fleet
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/70 max-w-2xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Browse through our premium Tesla collection
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <ThreeDMarquee 
              images={marqueeImages} 
              className="mt-8"
            />
          </motion.div>
        </div>
      </section>
      
      <FeaturedVehicles />
      
      {/* Lamp Demo Section */}
      <LampDemo />
      
      {/* How It Works Section */}
      <section className="py-24 px-6 relative bg-gradient-to-b from-transparent to-blue-950/20">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How It Works
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/70 max-w-2xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience the future of mobility in three simple steps
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <StepCard
              number="01"
              title="Choose Your Tesla"
              description="Browse our fleet of premium Tesla vehicles and select your perfect match."
              delay={0.1}
            />
            
            <StepCard
              number="02"
              title="Select Your Plan"
              description="Pick a subscription that fits your lifestyle and budget needs."
              delay={0.3}
            />
            
            <StepCard
              number="03"
              title="Drive & Enjoy"
              description="We'll deliver your Tesla to your door. Just drive and enjoy the experience."
              delay={0.5}
            />
          </div>
        </div>
      </section>
      
      <SubscriptionPlans />
      
      <Footer />
      <AIAssistant />
      <NavBarDemo />
    </div>
  );
};

function FeatureCard({ icon, title, description, delay = 0 }: { icon: React.ReactNode; title: string; description: string; delay?: number }) {
  return (
    <motion.div 
      className="backdrop-blur-xl bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="bg-blue-500/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-blue-400">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white/70">{description}</p>
    </motion.div>
  );
}

function StepCard({ number, title, description, delay = 0 }: { number: string; title: string; description: string; delay?: number }) {
  return (
    <motion.div 
      className="text-center relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 p-[2px]">
        <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center">
          <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            {number}
          </span>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-white/70">{description}</p>
    </motion.div>
  );
}

export default Index;
