
"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function BackgroundBoxesDemo() {
  return (
    <div className="h-[85vh] relative w-full overflow-hidden bg-black flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <div className="flex flex-col items-center justify-center relative z-20 max-w-5xl mx-auto text-center px-4">
        <motion.h1 
          className={cn("md:text-7xl text-5xl font-bold text-white relative z-20 mb-6 tracking-tighter")}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Premium Tesla Experience
        </motion.h1>
        
        <motion.p 
          className="text-center md:text-xl text-lg text-white/80 relative z-20 max-w-3xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Redefining electric vehicle subscriptions with unparalleled luxury and performance
        </motion.p>
        
        <motion.div 
          className="mt-8 flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="apple-button px-8 py-3 text-base font-medium rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all animate-pulse-ring">
            Explore Vehicles
          </button>
          <button className="px-8 py-3 text-base font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all">
            Learn More
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="text-white/50 text-sm mb-2">Scroll to explore</span>
        <ChevronDown className="text-white/50 animate-bounce-subtle" size={20} />
      </motion.div>
    </div>
  );
}
