
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface AnimatedBackgroundProps {
  children?: React.ReactNode;
  intensity?: "low" | "medium" | "high";
}

export default function AnimatedBackground({
  children,
  intensity = "medium",
}: AnimatedBackgroundProps) {
  const controls = useAnimation();
  
  // Define animation intensity levels
  const getIntensityValues = () => {
    switch (intensity) {
      case "low":
        return { movement: 40, duration: 20, opacity: 0.15 };
      case "high":
        return { movement: 100, duration: 15, opacity: 0.3 };
      case "medium":
      default:
        return { movement: 70, duration: 18, opacity: 0.2 };
    }
  };
  
  const { movement, duration, opacity } = getIntensityValues();

  useEffect(() => {
    // Animate background elements
    controls.start({
      y: [0, -movement, 0],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "reverse",
      },
    });
  }, [controls, movement, duration]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Fixed background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#141821] to-[#0a0c12]"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 30% 20%, rgba(14, 165, 233, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
              "radial-gradient(circle at 70% 60%, rgba(14, 165, 233, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
              "radial-gradient(circle at 30% 80%, rgba(14, 165, 233, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
              "radial-gradient(circle at 70% 20%, rgba(14, 165, 233, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
              "radial-gradient(circle at 30% 20%, rgba(14, 165, 233, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
            ],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
        
        {/* Animated floating orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{ 
            background: `radial-gradient(circle at center, rgba(59, 130, 246, ${opacity}) 0%, rgba(59, 130, 246, 0) 70%)`,
            filter: "blur(120px)", 
            opacity: opacity * 2 
          }}
          animate={controls}
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{ 
            background: `radial-gradient(circle at center, rgba(139, 92, 246, ${opacity}) 0%, rgba(139, 92, 246, 0) 70%)`,
            filter: "blur(100px)", 
            opacity: opacity * 1.8
          }}
          animate={{
            y: [0, movement, 0],
            transition: {
              duration: duration * 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
            },
          }}
        />
        
        <motion.div 
          className="absolute top-2/3 right-1/3 w-64 h-64 rounded-full"
          style={{ 
            background: `radial-gradient(circle at center, rgba(6, 182, 212, ${opacity}) 0%, rgba(6, 182, 212, 0) 70%)`,
            filter: "blur(90px)", 
            opacity: opacity * 1.7
          }}
          animate={{
            y: [0, -movement * 0.7, 0],
            x: [0, movement * 0.5, 0],
            transition: {
              duration: duration * 0.9,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
            },
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
