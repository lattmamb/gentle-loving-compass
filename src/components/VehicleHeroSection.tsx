
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import NeomorphicCard3D from "./NeomorphicCard3D";
import ParticleAnimation from "./ParticleAnimation";

interface VehicleHeroSectionProps {
  onSearchChange?: (value: string) => void;
  searchValue?: string;
}

export default function VehicleHeroSection({ 
  onSearchChange,
  searchValue = ""
}: VehicleHeroSectionProps) {
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
  
  // Scroll progress for fade effect
  const scrollY = useMotionValue(0);
  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);
  
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  return (
    <motion.div 
      className="relative min-h-[80vh] pt-20 flex flex-col justify-center overflow-hidden"
      style={{ opacity }}
    >
      {/* Particle animation */}
      <ParticleAnimation 
        count={40}
        colors={["#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe"]}
        speed="medium"
      />
      
      {/* Background glow effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-center lg:text-left"
              style={{
                x: mousePosition.x * -15,
                y: mousePosition.y * -15,
                rotateX: mousePosition.y * 2,
                rotateY: mousePosition.x * -2,
              }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gradient-blue">
                Experience Tesla Electrified
              </h1>
              <p className="text-lg lg:text-xl text-white/80 max-w-xl">
                Explore our premium fleet of electric vehicles, designed for sustainability, performance, and the future of mobility.
              </p>
              
              <div className="relative max-w-md mx-auto lg:mx-0 neo-pressed rounded-full overflow-hidden group transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 group-hover:text-white/80 transition-colors" size={20} />
                <Input 
                  placeholder="Search vehicles..."
                  value={searchValue}
                  onChange={(e) => onSearchChange?.(e.target.value)}
                  className="pl-12 neo-input border-none bg-transparent text-white"
                />
              </div>
              
              <motion.div 
                className="flex flex-wrap gap-2 justify-center lg:justify-start pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {["Model S", "Model 3", "Model X", "Model Y", "Cybertruck"].map((model, index) => (
                  <motion.div
                    key={model}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    <Button 
                      variant="outline"
                      onClick={() => onSearchChange?.(model)}
                      className="neo-button bg-transparent border-white/10 hover:border-white/20 text-white/90"
                    >
                      {model}
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
            style={{
              x: mousePosition.x * 10,
              y: mousePosition.y * 10,
              rotateX: mousePosition.y * -3,
              rotateY: mousePosition.x * 3,
            }}
          >
            <NeomorphicCard3D 
              className="p-0 rounded-2xl overflow-hidden"
              glowColor="rgba(10, 132, 255, 0.3)"
              scale={true}
            >
              <motion.img
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5,
                  ease: "easeInOut" 
                }}
                src="/unity-fleet.webp" 
                alt="Unity Fleet - Tesla Vehicles" 
                className="w-full h-auto neo-glow-blue"
              />
              
              {/* Enhanced reflection effect */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
              
              {/* Animated light streaks */}
              <motion.div 
                className="absolute inset-0 pointer-events-none opacity-50"
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
            </NeomorphicCard3D>
          </motion.div>
        </div>
      </div>

      {/* Curved shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"
          className="relative block w-full h-16 md:h-32"
        >
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            className="fill-background opacity-20"
          />
        </svg>
      </div>
    </motion.div>
  );
}
