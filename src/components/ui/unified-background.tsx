
import React, { memo } from "react";
import { motion } from "framer-motion";
import ParticleAnimation from "@/components/ParticleAnimation";
import GridBackground from "@/components/ui/grid-background";

interface UnifiedBackgroundProps {
  children: React.ReactNode;
  type?: "grid" | "particles" | "combined";
  intensity?: "low" | "medium" | "high";
  className?: string;
}

// Optimized with memoization to prevent unnecessary re-renders
const UnifiedBackground = memo(function UnifiedBackground({ 
  children, 
  type = "combined", 
  intensity = "medium", 
  className = ""
}: UnifiedBackgroundProps) {
  // Determine particle count based on intensity
  const getParticleCount = () => {
    switch (intensity) {
      case "low": return 20;
      case "high": return 50;
      default: return 30; // medium
    }
  };
  
  // Determine colors based on type
  const getColors = () => {
    switch (type) {
      case "grid": return ["#3b82f6", "#60a5fa"];
      case "particles": return ["#60a5fa", "#93c5fd", "#3b82f6"];
      default: return ["#3b82f6", "#60a5fa", "#93c5fd"];
    }
  };
  
  return (
    <GridBackground containerClassName={`${type !== "particles" ? "" : "hidden"} ${className}`}>
      {/* Conditionally render particle animation */}
      {type !== "grid" && (
        <ParticleAnimation 
          count={getParticleCount()}
          colors={getColors()}
          speed={intensity === "high" ? "fast" : intensity === "low" ? "slow" : "medium"}
        />
      )}
      
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
          {intensity !== "low" && [...Array(5)].map((_, i) => (
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

export default UnifiedBackground;

