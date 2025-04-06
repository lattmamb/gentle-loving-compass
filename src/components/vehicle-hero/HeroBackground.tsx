
import React, { memo } from "react";
import { motion } from "framer-motion";
import ParticleAnimation from "@/components/ParticleAnimation";
import GridBackground from "@/components/ui/grid-background";

interface HeroBackgroundProps {
  children: React.ReactNode;
}

// Optimize with memoization to prevent unnecessary re-renders
const HeroBackground = memo(function HeroBackground({ children }: HeroBackgroundProps) {
  return (
    <GridBackground containerClassName="min-h-[70vh] py-16 flex flex-col justify-center bg-gradient-to-b from-[#11151e] to-[#1a1f2e]">
      {/* Enhanced particle animation for sky feeling */}
      <ParticleAnimation 
        count={30}
        colors={["#3b82f6", "#60a5fa", "#93c5fd"]}
        speed="slow"
      />
      
      {/* Sky gradient overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-blue-800/5 to-transparent opacity-40" />
        
        {/* Animated light streaks for flying effect - optimized animation */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                left: 0,
                right: 0,
                willChange: 'transform', // Hint for browser optimization
              }}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
            />
          ))}
        </motion.div>
      </div>
      
      {children}
    </GridBackground>
  );
});

export default HeroBackground;
