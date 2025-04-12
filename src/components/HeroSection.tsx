
import React from "react";
import BackgroundBoxesDemo from "@/components/ui/background-boxes-demo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative w-full">
      <BackgroundBoxesDemo />
      
      <motion.div 
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <Link to="/vehicles">
          <Button className="bg-blue-600 hover:bg-blue-700 group">
            <span>Discover Our Fleet</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </motion.div>
      
      {/* 3D floating cards */}
      <div className="hidden md:flex absolute -bottom-24 left-1/2 -translate-x-1/2 w-full max-w-6xl mx-auto">
        <div className="flex justify-between w-full px-8 gap-6">
          {[
            { 
              title: "Premium Fleet", 
              icon: "⚡", 
              description: "Access to all Tesla models with unlimited supercharging" 
            },
            { 
              title: "Flexible Plans", 
              icon: "🔄", 
              description: "Daily, weekly or monthly subscriptions with no commitment" 
            },
            { 
              title: "Concierge Service", 
              icon: "✨", 
              description: "White-glove delivery and 24/7 roadside assistance" 
            },
          ].map((card, index) => (
            <motion.div 
              key={index}
              className="foam-block foam-block-hover neo-glow-blue flex-1 p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
            >
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{card.title}</h3>
              <p className="text-white/70">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
