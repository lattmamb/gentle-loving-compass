
import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GridBackground from "@/components/ui/grid-background";

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
    <GridBackground containerClassName="min-h-screen flex items-center justify-center">
      <div 
        ref={containerRef}
        className="relative w-full min-h-screen flex items-center justify-center perspective-2000"
      >
        {/* Subtle orb glow effect */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0) 70%)',
            filter: 'blur(100px)',
            opacity: 0.6,
            transformStyle: "preserve-3d",
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.05, 1],
            z: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            x: mousePosition.x * -30,
            y: mousePosition.y * -30,
          }}
        />
        
        {/* Foreground content with 3D depth */}
        <motion.div 
          className="max-w-5xl mx-auto px-4 py-32 text-center relative z-10"
          style={{ 
            opacity, 
            y,
            scale,
            transformStyle: "preserve-3d"
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, z: -50 }}
            animate={{ opacity: 1, y: 0, z: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              transformStyle: "preserve-3d",
              x: mousePosition.x * -30,
              y: mousePosition.y * -30,
              rotateX: mousePosition.y * 5,
              rotateY: mousePosition.x * -5,
              z: 50
            }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200">
              Experience The Future of Mobility
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20, z: -30 }}
            animate={{ opacity: 1, y: 0, z: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              transformStyle: "preserve-3d",
              x: mousePosition.x * -15,
              y: mousePosition.y * -15,
              z: 30
            }}
          >
            <p className="text-xl md:text-2xl text-blue-100/90 mb-8 max-w-2xl mx-auto font-light">
              Discover our premium electric vehicles with revolutionary features and unparalleled performance.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col md:flex-row gap-4 justify-center mt-8"
            initial={{ opacity: 0, y: 20, z: -20 }}
            animate={{ opacity: 1, y: 0, z: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              transformStyle: "preserve-3d",
              x: mousePosition.x * -10,
              y: mousePosition.y * -10,
              z: 20,
            }}
          >
            <Button asChild size="lg" className="text-lg bg-blue-600 hover:bg-blue-700 group glass-card border-none">
              <Link to="/vehicles">
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  Explore Vehicles
                </span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg border-white/10 text-white hover:bg-white/5 glass-card backdrop-blur-md">
              <Link to="/visionos">
                Try Atlas VisionOS
              </Link>
            </Button>
          </motion.div>
          
          {/* 3D floating vehicle image */}
          <motion.div 
            className="relative w-full h-80 mt-20"
            initial={{ opacity: 0, scale: 0.9, z: -50 }}
            animate={{ opacity: 1, scale: 1, z: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div 
              className="absolute inset-0 flex justify-center"
              style={{
                transformStyle: "preserve-3d",
                rotateX: mousePosition.y * 10,
                rotateY: mousePosition.x * 10,
                z: 80
              }}
              animate={{ 
                y: [0, -15, 0],
                rotateZ: [0, -1, 0, 1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img 
                src="/unity-fleet.webp" 
                alt="Electric Vehicle Fleet" 
                className="h-full object-contain"
                style={{ 
                  filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.5))",
                  transformStyle: "preserve-3d",
                }}
              />
              
              {/* Realistic shadow reflection */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-12 w-3/4 bg-gradient-radial from-black/30 to-transparent opacity-50 blur-xl rounded-full"></div>
              
              {/* Branding overlay */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-white/90 backdrop-blur-sm px-6 py-2 rounded-full bg-black/20 border border-white/10"
                animate={{ 
                  opacity: [0.7, 1, 0.7],
                  textShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.3)",
                    "0 0 30px rgba(59, 130, 246, 0.5)",
                    "0 0 20px rgba(59, 130, 246, 0.3)"
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ transformStyle: "preserve-3d", z: 90 }}
              >
                Unity Link
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
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
            className="text-white/80 hover:text-white glass-card backdrop-blur-sm px-4 py-2 rounded-full"
          >
            <motion.svg 
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
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
    </GridBackground>
  );
}
