
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface GlassmorphicCardProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
  expanded?: boolean;
  mouseTracking?: boolean;
  parallaxIntensity?: number;
}

export default function GlassmorphicCard({
  title,
  children,
  className,
  expanded = false,
  mouseTracking = true,
  parallaxIntensity = 20,
}: GlassmorphicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse tracking values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring animations for smoother movement
  const springConfig = { damping: 25, stiffness: 300 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [parallaxIntensity, -parallaxIntensity]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-parallaxIntensity, parallaxIntensity]), springConfig);
  
  // Parallax elements movement
  const contentX = useSpring(useTransform(mouseX, [-0.5, 0.5], [5, -5]), springConfig);
  const contentY = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  
  // Glow effect position
  const glowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), springConfig);
  const glowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !mouseTracking) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Normalize mouse position between -0.5 and 0.5
    const normalizedX = (e.clientX - centerX) / rect.width;
    const normalizedY = (e.clientY - centerY) / rect.height;
    
    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };

  // Parallax scroll effect
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ skewX: 10 }}
      whileHover={{ 
        height: expanded ? 254 : undefined, 
        skewX: 0,
        transition: { duration: 0.4 }
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{
        rotateX: mouseTracking ? rotateX : 0,
        rotateY: mouseTracking ? rotateY : 0,
        transformStyle: "preserve-3d",
        transformPerspective: "1000px",
        z: useTransform(mouseY, [-0.5, 0.5], [10, -10]),
        y: scrollY ? scrollY * 0.03 : 0, // Subtle parallax on scroll
      }}
      className={cn(
        "w-[190px] h-[120px] p-2 bg-[rgba(198,198,198,0.34)] rounded-lg backdrop-blur-md",
        "border-b-[3px] border-b-[rgba(255,255,255,0.44)]", 
        "border-l-2 border-l-[rgba(255,255,255,0.545)]",
        "neo-shadow transition-all duration-400 overflow-hidden",
        "text-white cursor-pointer",
        isHovered ? "neo-shadow-hover" : "",
        className
      )}
    >
      {/* Glow effect on hover */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 opacity-50 rounded-lg pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glowX.get()}% ${glowY.get()}%, rgba(255,255,255,0.8) 0%, transparent 70%)`,
            zIndex: 1,
          }}
        />
      )}
      
      {/* Control dots */}
      <div className="p-4 flex flex-row gap-[5px] self-start relative z-10">
        <motion.div 
          className="w-[10px] h-[10px] rounded-full bg-[#ff605c]"
          style={{ 
            boxShadow: "-5px 5px 5px rgba(0,0,0,0.28)",
            x: contentX,
            y: contentY,
          }}
        />
        <motion.div 
          className="w-[10px] h-[10px] rounded-full bg-[#ffbd44]"
          style={{ 
            boxShadow: "-5px 5px 5px rgba(0,0,0,0.28)",
            x: useTransform(contentX, v => v * 1.1),
            y: useTransform(contentY, v => v * 1.1),
          }}
        />
        <motion.div 
          className="w-[10px] h-[10px] rounded-full bg-[#00ca4e]"
          style={{ 
            boxShadow: "-5px 5px 5px rgba(0,0,0,0.28)",
            x: useTransform(contentX, v => v * 1.2),
            y: useTransform(contentY, v => v * 1.2),
          }}
        />
      </div>
      
      {/* Title with parallax effect */}
      {title && (
        <motion.h1 
          className="text-center m-5 text-[rgb(218,244,237)] text-shadow-[-10px_5px_10px_rgba(0,0,0,0.573)] relative z-10"
          style={{ 
            x: useTransform(contentX, v => v * 2),
            y: useTransform(contentY, v => v * 2),
          }}
        >
          {title}
        </motion.h1>
      )}
      
      {/* Main content with parallax effect */}
      <motion.div 
        className="relative z-10"
        style={{ 
          x: contentX,
          y: contentY,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
