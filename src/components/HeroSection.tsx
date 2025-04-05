
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
  const scale = useTransform(scrollY, [0, 200], [1, 0.95]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden perspective-2000">
      {/* Grid pattern for depth perception */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at ${50 + mousePosition.x * 25}% ${50 + mousePosition.y * 25}%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
          }}
        />
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 flex flex-col opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`h-line-${i}`}
              className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent w-full"
              style={{
                marginTop: `${i * 5}vh`,
                x: mousePosition.x * -10 * (i % 2 ? 1 : -1),
                z: -100 + i * 5,
              }}
            />
          ))}
          
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`v-line-${i}`}
              className="w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent h-screen absolute top-0"
              style={{
                left: `${i * 5}vw`,
                y: mousePosition.y * -10 * (i % 2 ? 1 : -1),
                z: -100 + i * 5,
              }}
            />
          ))}
        </div>
      </div>
      
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
        <motion.div
          initial={{ opacity: 0, y: 20, z: -50 }}
          animate={{ opacity: 1, y: 0, z: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="transform-style-3d"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200"
            style={{
              transformStyle: "preserve-3d",
              textShadow: "0 10px 30px rgba(59, 130, 246, 0.5)",
              x: mousePosition.x * -30,
              y: mousePosition.y * -30,
              rotateX: mousePosition.y * 10,
              rotateY: mousePosition.x * -10,
              z: 50
            }}
          >
            Drive The Future. Own The Network.
          </motion.h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20, z: -30 }}
          animate={{ opacity: 1, y: 0, z: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="transform-style-3d"
          style={{
            x: mousePosition.x * -15,
            y: mousePosition.y * -15,
            z: 30
          }}
        >
          <p className="text-xl md:text-2xl text-blue-100/80 mb-8 max-w-2xl mx-auto">
            Experience premium electric vehicles with flexible subscription plans, powered by our innovative tokenized ownership system.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-4 justify-center mt-8 transform-style-3d"
          initial={{ opacity: 0, y: 20, z: -20 }}
          animate={{ opacity: 1, y: 0, z: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            x: mousePosition.x * -10,
            y: mousePosition.y * -10,
            z: 20,
          }}
        >
          <Button asChild size="lg" className="text-lg bg-blue-600 hover:bg-blue-700 group floating-element">
            <Link to="/vehicles">
              <span className="inline-block transition-transform group-hover:translate-x-1">
                Book Your EV Now
              </span>
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg border-white/20 text-white hover:bg-white/10 floating-element">
            <Link to="/visionos">
              Experience Atlas VisionOS
            </Link>
          </Button>
        </motion.div>

        {/* Enhanced animated car illustration with Unity Link branding */}
        <motion.div 
          className="relative w-full h-64 mt-20 perspective-1000 transform-style-3d"
          initial={{ opacity: 0, z: -50 }}
          animate={{ opacity: 1, z: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.div 
            className="absolute inset-0 flex justify-center transform-style-3d"
            style={{
              rotateX: mousePosition.y * 15,
              rotateY: mousePosition.x * 15,
              z: 80
            }}
            animate={{ 
              y: [0, -15, 0],
              rotateZ: [0, -1, 0, 1, 0],
              z: [80, 100, 80]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img 
              src="/unity-fleet.webp" 
              alt="Unity Link Fleet" 
              className="h-full object-contain neo-glow-blue floating-element-lg"
              style={{ 
                filter: "drop-shadow(0 20px 50px rgba(59, 130, 246, 0.5))",
                transformStyle: "preserve-3d",
              }}
            />
            
            {/* Unity Link Logo Overlay */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-white/90"
              animate={{ 
                opacity: [0.7, 1, 0.7],
                textShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 30px rgba(59, 130, 246, 0.8)",
                  "0 0 20px rgba(59, 130, 246, 0.5)"
                ],
                z: [20, 40, 20]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              Unity Link
            </motion.div>
            
            {/* Enhanced reflection effect */}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-500/20 to-transparent blur-md opacity-80"
              style={{ transformStyle: "preserve-3d", z: 40 }}
              animate={{
                opacity: [0.8, 0.4, 0.8],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
          
          {/* Enhanced light streaks effect */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            style={{ transformStyle: "preserve-3d", z: 60 }}
            animate={{
              background: [
                "linear-gradient(45deg, rgba(59, 130, 246, 0) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(59, 130, 246, 0) 100%)",
                "linear-gradient(45deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0) 50%, rgba(59, 130, 246, 0.2) 100%)",
                "linear-gradient(45deg, rgba(59, 130, 246, 0) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(59, 130, 246, 0) 100%)",
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Floating particles */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full bg-blue-500"
              style={{ 
                width: Math.random() * 5 + 2,
                height: Math.random() * 5 + 2,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
                transformStyle: "preserve-3d",
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
                z: [0, 50, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center transform-style-3d"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          z: 30 + mousePosition.y * 10
        }}
      >
        <Button 
          variant="ghost" 
          onClick={() => window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
          })}
          className="text-white/80 hover:text-white floating-element-sm"
        >
          <motion.svg 
            animate={{ 
              y: [0, 10, 0],
              z: [0, 20, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            }}
            style={{ transformStyle: "preserve-3d" }}
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
