
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
        return { movement: 40, duration: 20, opacity: 0.2 };
      case "high":
        return { movement: 100, duration: 15, opacity: 0.4 };
      case "medium":
      default:
        return { movement: 70, duration: 18, opacity: 0.3 };
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
    <div className="relative min-h-screen w-full overflow-hidden perspective-2000">
      {/* Fixed background gradient */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2436] to-[#111827]"></div>
        
        {/* 3D grid for depth perception - more subtle */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>
      </div>

      {/* Animated background elements with enhanced 3D depth */}
      <div className="fixed inset-0 -z-10">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
              "radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
              "radial-gradient(circle at 30% 80%, rgba(59, 130, 246, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
              "radial-gradient(circle at 70% 20%, rgba(59, 130, 246, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
              "radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
            ],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
        
        {/* Clean subtle floating orbs with more polish - inspired by Apple design */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[35vw] h-[35vw] rounded-full"
          style={{ 
            background: `radial-gradient(circle at center, rgba(96, 165, 250, ${opacity * 0.8}) 0%, rgba(96, 165, 250, 0) 70%)`,
            filter: "blur(120px)", 
            opacity: opacity * 1.5,
            transformStyle: "preserve-3d",
          }}
          animate={{
            y: [0, -movement * 1.2, 0],
            z: [0, 100, 0],
            scale: [1, 1.1, 1],
            transition: {
              duration: duration * 1.3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
            }
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[28vw] h-[28vw] rounded-full"
          style={{ 
            background: `radial-gradient(circle at center, rgba(125, 211, 252, ${opacity * 0.8}) 0%, rgba(125, 211, 252, 0) 70%)`,
            filter: "blur(100px)", 
            opacity: opacity * 1.2,
            transformStyle: "preserve-3d",
          }}
          animate={{
            y: [0, movement * 1.5, 0],
            z: [0, 120, 0],
            scale: [1, 1.15, 1],
            transition: {
              duration: duration * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
            },
          }}
        />
      </div>
      
      {/* Content with enhanced 3D perspective */}
      <div className="relative z-10 perspective-2000 transform-style-3d">
        {children}
      </div>
    </div>
  );
}
