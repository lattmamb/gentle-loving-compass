
import React, { useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface NeoCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "elevated" | "pressed" | "flat";
  glow?: boolean;
  glowColor?: string; // Added glowColor property
  hover3D?: boolean;
  maxRotation?: number;
}

export default function NeoCard({
  children,
  className = "",
  variant = "elevated",
  glow = false,
  glowColor = "blue", // Default to blue
  hover3D = false,
  maxRotation = 10
}: NeoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Transform mouse position to rotation values
  const rotateX = useTransform(y, [-0.5, 0.5], [maxRotation, -maxRotation]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-maxRotation, maxRotation]);
  
  // Handle mouse move for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !hover3D) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate normalized mouse position between -0.5 and 0.5
    const xValue = (e.clientX - rect.left) / width - 0.5;
    const yValue = (e.clientY - rect.top) / height - 0.5;
    
    // Update motion values
    x.set(xValue);
    y.set(yValue);
  };

  // Reset on mouse leave
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  // Base styles based on variant
  const variantStyles = {
    elevated: "shadow-lg border border-white/10 bg-gradient-to-br from-gray-900/90 to-gray-800",
    pressed: "shadow-inner border border-white/5 bg-gradient-to-br from-gray-800 to-gray-900",
    flat: "border border-white/10 bg-gray-900/80",
  };

  // Glow effect styles with dynamic color
  const glowStyles = glow
    ? `before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-${glowColor}-500/20 before:to-purple-500/20 before:opacity-0 before:transition-opacity hover:before:opacity-100`
    : "";

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-2xl backdrop-blur-lg transition-all",
        variantStyles[variant],
        glowStyles,
        className
      )}
      onMouseMove={hover3D ? handleMouseMove : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={hover3D ? {
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
        transition: "transform 0.1s ease"
      } : undefined}
    >
      {children}
    </motion.div>
  );
}
