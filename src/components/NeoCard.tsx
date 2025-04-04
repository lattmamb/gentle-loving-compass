
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface NeoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "flat" | "elevated" | "pressed";
  glow?: boolean;
  glowColor?: "blue" | "green" | "purple" | "red" | "cyan";
  depth?: "sm" | "md" | "lg";
  hover3D?: boolean;
  maxRotation?: number;
}

const NeoCard = ({ 
  children, 
  className, 
  variant = "elevated", 
  glow = false,
  glowColor = "blue",
  depth = "md",
  hover3D = false,
  maxRotation = 10,
  ...props 
}: NeoCardProps) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Determine variant classes
  let variantClass = "";
  switch (variant) {
    case "flat":
      variantClass = "neo-flat";
      break;
    case "pressed":
      variantClass = "neo-pressed";
      break;
    case "elevated":
    default:
      variantClass = "neo-elevated";
      break;
  }
  
  // Determine glow classes
  let glowClass = "";
  if (glow) {
    switch (glowColor) {
      case "green":
        glowClass = "relative after:absolute after:inset-0 after:rounded-xl after:bg-green-500/20 after:blur-xl after:-z-10";
        break;
      case "purple":
        glowClass = "relative after:absolute after:inset-0 after:rounded-xl after:bg-purple-500/20 after:blur-xl after:-z-10";
        break;
      case "red":
        glowClass = "relative after:absolute after:inset-0 after:rounded-xl after:bg-red-500/20 after:blur-xl after:-z-10";
        break;
      case "cyan":
        glowClass = "relative after:absolute after:inset-0 after:rounded-xl after:bg-cyan-500/20 after:blur-xl after:-z-10";
        break;
      case "blue":
      default:
        glowClass = "relative after:absolute after:inset-0 after:rounded-xl after:bg-blue-500/20 after:blur-xl after:-z-10";
        break;
    }
  }
  
  // Determine depth classes
  let depthClass = "";
  switch (depth) {
    case "sm":
      depthClass = "shadow-sm";
      break;
    case "lg":
      depthClass = "shadow-xl";
      break;
    case "md":
    default:
      depthClass = "shadow-md";
      break;
  }
  
  // Handle mouse movement for 3D hover effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hover3D) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const rotateY = ((mouseX - centerX) / (rect.width / 2)) * maxRotation;
    const rotateX = -((mouseY - centerY) / (rect.height / 2)) * maxRotation;
    
    setRotation({ x: rotateX, y: rotateY });
  };
  
  // Reset rotation when mouse leaves
  const resetRotation = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };
  
  if (hover3D) {
    return (
      <motion.div 
        className={cn("p-6 rounded-xl transition-all duration-300", variantClass, glowClass, depthClass, className)} 
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={resetRotation}
        // Explicitly remove the drag event handlers that are causing TypeScript errors
        onDrag={undefined}
        onDragEnd={undefined}
        onDragStart={undefined}
        {...props}
      >
        <div className="relative" style={{ transform: "translateZ(20px)" }}>
          {children}
        </div>
        
        {isHovered && (
          <motion.div 
            className="absolute inset-0 rounded-xl pointer-events-none opacity-0"
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.3 }}
            style={{
              background: `radial-gradient(circle at ${rotation.y}% ${rotation.x}%, ${
                glowColor === "blue" ? "rgba(59, 130, 246, 0.3)" : 
                glowColor === "green" ? "rgba(16, 185, 129, 0.3)" : 
                glowColor === "purple" ? "rgba(139, 92, 246, 0.3)" : 
                glowColor === "red" ? "rgba(239, 68, 68, 0.3)" : 
                "rgba(6, 182, 212, 0.3)"
              }, transparent 70%)`,
              zIndex: 10,
            }}
          />
        )}
      </motion.div>
    );
  }
  
  return (
    <div 
      className={cn("p-6 rounded-xl", variantClass, glowClass, depthClass, className)} 
      {...props}
    >
      {children}
    </div>
  );
};

export default NeoCard;
