
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, ShieldCheck, Sparkles } from "lucide-react";
import NeomorphicCard3D from "@/components/NeomorphicCard3D";
import FoamBlock from "@/components/FoamBlock";

const HeroSection3D = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center py-24 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-blue-900/10 to-black/40 z-0"></div>
      
      {/* Hero content */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        <motion.div 
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-gradient">Drive the Future</span>
            <br /> 
            <span className="text-gradient-blue">Today</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/70 mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Experience Tesla's cutting-edge electric vehicles with flexible subscription plans tailored to your lifestyle.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button asChild className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-full px-8 py-6 text-lg font-medium">
              <Link to="/vehicles">
                <span>Explore Vehicles</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-full px-8 py-6 text-lg font-medium">
              <Link to="/pricing">
                <span>View Pricing</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* 3D hero image container */}
        <motion.div
          className="relative h-[400px] md:h-[500px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="absolute w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1666919643134-d97687c1826c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Tesla Model 3" 
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </div>
      
      {/* Feature cards */}
      <motion.div 
        className="absolute -bottom-16 left-0 right-0 px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Premium Tesla Fleet",
                description: "Access all Tesla models with unlimited supercharging",
                icon: <Zap className="text-blue-400" size={24} />,
                color: "blue"
              },
              {
                title: "Flexible Plans",
                description: "Daily, weekly or monthly with no commitments",
                icon: <ShieldCheck className="text-green-400" size={24} />,
                color: "green"
              },
              {
                title: "Concierge Service",
                description: "White-glove delivery and 24/7 roadside assistance",
                icon: <Sparkles className="text-amber-400" size={24} />,
                color: "purple"
              }
            ].map((feature, index) => (
              <div key={index} className="relative z-20">
                <FoamBlock variant="interactive" className="p-6">
                  <div className="flex flex-col">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                </FoamBlock>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection3D;
