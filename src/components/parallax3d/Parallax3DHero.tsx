
import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import ParallaxBackground from "./ParallaxBackground";
import ParallaxHeading from "./ParallaxHeading";
import ParallaxVehicleModel from "./ParallaxVehicleModel";
import ParallaxScrollIndicator from "./ParallaxScrollIndicator";

export default function Parallax3DHero() {
  // State to track mouse position for 3D effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse movement tracking for 3D parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      // Calculate normalized mouse position between -0.5 and 0.5
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  // Scroll progress for animations
  const scrollY = useMotionValue(0);
  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);
  
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, 200]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.95]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center perspective-2000"
    >
      <ParallaxBackground mousePosition={mousePosition} />
      
      <motion.div 
        className="max-w-5xl mx-auto px-4 py-32 text-center relative z-10"
        style={{ 
          opacity, 
          y,
          scale,
          transformStyle: "preserve-3d"
        }}
      >
        <ParallaxHeading 
          mousePosition={mousePosition}
          scrollY={scrollY}
          opacity={opacity}
          y={y}
          scale={scale}
        />
        <ParallaxVehicleModel mousePosition={mousePosition} />
      </motion.div>
      
      <ParallaxScrollIndicator mousePosition={mousePosition} />
    </div>
  );
}
