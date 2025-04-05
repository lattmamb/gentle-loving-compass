
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";

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
        
        {/* Star field background using SparklesCore */}
        <div className="absolute inset-0 opacity-60">
          <SparklesCore
            id="sparkles-core"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleColor="#ffffff"
            particleDensity={600}
            className="w-full h-full"
            speed={0.1}
          />
        </div>
      </div>

      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.25) 0%, rgba(0, 0, 0, 0) 70%)",
              "radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.25) 0%, rgba(0, 0, 0, 0) 70%)",
              "radial-gradient(circle at 30% 80%, rgba(59, 130, 246, 0.25) 0%, rgba(0, 0, 0, 0) 70%)",
              "radial-gradient(circle at 70% 20%, rgba(59, 130, 246, 0.25) 0%, rgba(0, 0, 0, 0) 70%)",
              "radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.25) 0%, rgba(0, 0, 0, 0) 70%)",
            ],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
        
        {/* 3D grid lines for depth perception */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
        
        {/* Animated floating orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{ 
            background: `radial-gradient(circle at center, rgba(96, 165, 250, ${opacity}) 0%, rgba(96, 165, 250, 0) 70%)`,
            filter: "blur(120px)", 
            opacity: opacity * 2,
            transformStyle: "preserve-3d",
          }}
          animate={{
            y: [0, -movement, 0],
            z: [0, 50, 0],
            transition: {
              duration: duration,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
            }
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{ 
            background: `radial-gradient(circle at center, rgba(167, 139, 250, ${opacity}) 0%, rgba(167, 139, 250, 0) 70%)`,
            filter: "blur(100px)", 
            opacity: opacity * 1.8,
            transformStyle: "preserve-3d",
          }}
          animate={{
            y: [0, movement, 0],
            z: [0, 70, 0],
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
            background: `radial-gradient(circle at center, rgba(56, 189, 248, ${opacity}) 0%, rgba(56, 189, 248, 0) 70%)`,
            filter: "blur(90px)", 
            opacity: opacity * 1.7,
            transformStyle: "preserve-3d",
          }}
          animate={{
            y: [0, -movement * 0.7, 0],
            x: [0, movement * 0.5, 0],
            z: [0, 30, 0],
            transition: {
              duration: duration * 0.9,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
            },
          }}
        />
      </div>
      
      {/* Content with 3D perspective */}
      <div className="relative z-10 perspective-2000 transform-style-3d">
        {children}
      </div>
    </div>
  );
}
