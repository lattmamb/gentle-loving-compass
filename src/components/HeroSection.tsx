
import React from "react";
import BackgroundBoxesDemo from "@/components/ui/background-boxes-demo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Repeat, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative w-full">
      <BackgroundBoxesDemo />
      
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
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
              icon: <Zap className="text-blue-400" size={28} />, 
              description: "Access to all Tesla models with unlimited supercharging" 
            },
            { 
              title: "Flexible Plans", 
              icon: <Repeat className="text-emerald-400" size={28} />, 
              description: "Daily, weekly or monthly subscriptions with no commitment" 
            },
            { 
              title: "Concierge Service", 
              icon: <Sparkles className="text-amber-400" size={28} />, 
              description: "White-glove delivery and 24/7 roadside assistance" 
            },
          ].map((card, index) => (
            <motion.div 
              key={index}
              className="foam-block foam-block-hover neo-glow-blue flex-1 p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.2 }
              }}
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{card.title}</h3>
              <p className="text-white/70">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
