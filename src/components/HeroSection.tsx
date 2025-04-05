
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
      {/* Subtle grid pattern for depth */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at ${50 + mousePosition.x * 25}% ${50 + mousePosition.y * 25}%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)`,
          }}
        />
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
              textShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
              x: mousePosition.x * -30,
              y: mousePosition.y * -30,
              rotateX: mousePosition.y * 5,
              rotateY: mousePosition.x * -5,
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
          <p className="text-xl md:text-2xl text-blue-100/90 mb-8 max-w-2xl mx-auto font-light">
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
          <Button asChild size="lg" className="text-lg bg-blue-600 hover:bg-blue-700 group glass-card border-none">
            <Link to="/vehicles">
              <span className="inline-block transition-transform group-hover:translate-x-1">
                Book Your EV Now
              </span>
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg border-white/10 text-white hover:bg-white/5 glass-card backdrop-blur-md">
            <Link to="/visionos">
              Experience Atlas VisionOS
            </Link>
          </Button>
        </motion.div>

        {/* Enhanced vehicle model with realistic shadow */}
        <motion.div 
          className="relative w-full h-80 mt-20 perspective-1000 transform-style-3d"
          initial={{ opacity: 0, z: -50 }}
          animate={{ opacity: 1, z: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.div 
            className="absolute inset-0 flex justify-center transform-style-3d"
            style={{
              rotateX: mousePosition.y * 10,
              rotateY: mousePosition.x * 10,
              z: 80
            }}
            animate={{ 
              y: [0, -10, 0],
              rotateZ: [0, -1, 0, 1, 0],
              z: [80, 90, 80]
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
              className="h-full object-contain"
              style={{ 
                filter: "drop-shadow(0 20px 50px rgba(0, 0, 0, 0.5))",
                transformStyle: "preserve-3d",
              }}
            />
            
            {/* Realistic shadow reflection */}
            <div className="absolute bottom-0 left-1/2 right-0 transform -translate-x-1/2 h-20 w-3/4 bg-gradient-radial from-black/20 to-transparent opacity-60 blur-xl rounded-full z-0"></div>
            
            {/* Branded overlay with apple-inspired minimal design */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-white/90 backdrop-blur-sm px-6 py-2 rounded-full bg-black/20 border border-white/10"
              animate={{ 
                opacity: [0.7, 1, 0.7],
                textShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                  "0 0 30px rgba(59, 130, 246, 0.5)",
                  "0 0 20px rgba(59, 130, 246, 0.3)"
                ],
                z: [20, 30, 20]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              Unity Link
            </motion.div>
          </motion.div>
          
          {/* Subtle light reflection effect */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            style={{ transformStyle: "preserve-3d", z: 60 }}
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
          className="text-white/80 hover:text-white glass-card backdrop-blur-sm px-4 py-2 rounded-full"
        >
          <motion.svg 
            animate={{ 
              y: [0, 5, 0],
              z: [0, 10, 0]
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
