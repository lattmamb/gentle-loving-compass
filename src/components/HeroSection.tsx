
import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import HeroHeading from "@/components/hero/HeroHeading";
import HeroContent from "@/components/hero/HeroContent";
import Hero3DModel from "@/components/hero/Hero3DModel";
import HeroScrollIndicator from "@/components/hero/HeroScrollIndicator";
import HeroBackground from "@/components/hero/HeroBackground";

export default function HeroSection() {
  // State to track mouse position for 3D effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      });
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
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden perspective-2000">
      <HeroBackground mousePosition={mousePosition} />
      
      <motion.div 
        className="max-w-5xl mx-auto px-4 py-32 text-center relative z-10 space-3d"
        style={{ 
          opacity, 
          y,
          scale,
          perspective: 2000,
          transformStyle: "preserve-3d"
        }}
      >
        <HeroHeading mousePosition={mousePosition} />
        <HeroContent mousePosition={mousePosition} />
        <Hero3DModel mousePosition={mousePosition} />
      </motion.div>
      
      <HeroScrollIndicator mousePosition={mousePosition} />
    </div>
  );
}
