
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function HeroSection() {
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

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
                "radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
                "radial-gradient(circle at 20% 80%, rgba(14, 165, 233, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
                "radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.15) 0%, rgba(0, 0, 0, 0) 70%)"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute inset-0"
          />
        </div>
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 flex flex-col opacity-20">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={`h-line-${i}`}
              className="h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent w-full"
              style={{ marginTop: `${i * 10}vh` }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 0.5 }}
              transition={{ 
                delay: i * 0.1, 
                duration: 1.5, 
                ease: "easeInOut" 
              }}
            />
          ))}
          
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={`v-line-${i}`}
              className="w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent h-screen absolute top-0"
              style={{ left: `${i * 10}vw` }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 0.5 }}
              transition={{ 
                delay: i * 0.1 + 0.5, 
                duration: 1.5, 
                ease: "easeInOut" 
              }}
            />
          ))}
        </div>
        
        {/* Animated particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full bg-blue-500"
              style={{ 
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>
      
      <motion.div 
        className="max-w-5xl mx-auto px-4 py-32 text-center relative z-10"
        style={{ opacity, y }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200"
            style={{
              x: mousePosition.x * -20,
              y: mousePosition.y * -20,
              rotateX: mousePosition.y * 5,
              rotateY: mousePosition.x * -5,
            }}
          >
            Your Tesla Experience Awaits
          </motion.h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            x: mousePosition.x * -10,
            y: mousePosition.y * -10,
          }}
        >
          <p className="text-xl md:text-2xl text-blue-100/80 mb-8 max-w-2xl mx-auto">
            Subscribe to drive the world's most advanced electric vehicles with flexible plans and no long-term commitments.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-4 justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            x: mousePosition.x * -5,
            y: mousePosition.y * -5,
          }}
        >
          <Button asChild size="lg" className="text-lg bg-blue-600 hover:bg-blue-700 group">
            <Link to="/vehicles">
              <span className="inline-block transition-transform group-hover:translate-x-1">
                Browse Vehicles
              </span>
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg border-white/20 text-white hover:bg-white/10">
            <Link to="/pricing">
              View Pricing
            </Link>
          </Button>
        </motion.div>

        {/* Enhanced animated car illustration */}
        <motion.div 
          className="relative w-full h-64 mt-20 perspective-1000"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.div 
            className="absolute inset-0 flex justify-center transform-3d"
            style={{
              rotateX: mousePosition.y * 5,
              rotateY: mousePosition.x * 5,
            }}
            animate={{ 
              y: [0, -15, 0],
              rotateZ: [0, -1, 0, 1, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img 
              src="/unity-fleet.webp" 
              alt="Tesla Fleet" 
              className="h-full object-contain neo-glow-blue"
            />
            
            {/* Reflection effect */}
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-blue-500/10 to-transparent blur-sm opacity-80" />
          </motion.div>
          
          {/* Light streaks effect */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(59, 130, 246, 0) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(59, 130, 246, 0) 100%)",
                "linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0) 50%, rgba(59, 130, 246, 0.1) 100%)",
                "linear-gradient(45deg, rgba(59, 130, 246, 0) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(59, 130, 246, 0) 100%)",
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <Button 
          variant="ghost" 
          onClick={() => window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
          })}
          className="text-white/80 hover:text-white"
        >
          <motion.svg 
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            }}
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </motion.svg>
        </Button>
      </motion.div>
    </div>
  );
}
