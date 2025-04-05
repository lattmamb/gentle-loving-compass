
import React, { useState, useRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

// Update the interface to omit all drag events to prevent type conflicts
interface NeomorphicCard3DProps extends Omit<HTMLMotionProps<"div">, "onDrag" | "onDragEnd" | "onDragStart"> {
  maxRotation?: number;
  glowColor?: string;
  shadow?: boolean;
  scale?: boolean;
  perspective?: number;
  children?: React.ReactNode;
  depth?: number; // New prop for z-translation
}

const NeomorphicCard3D: React.FC<NeomorphicCard3DProps> = ({
  children,
  className,
  maxRotation = 10,
  glowColor = "rgba(59, 130, 246, 0.3)", // Brighter blue with opacity
  shadow = true,
  scale = true,
  perspective = 1000,
  depth = 30, // Default depth value for 3D effect
  ...props
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Calculate rotation based on mouse position
    const rotateY = ((mouseX - centerX) / (rect.width / 2)) * maxRotation;
    const rotateX = -((mouseY - centerY) / (rect.height / 2)) * maxRotation;
    
    // Calculate glow position
    const glowX = ((mouseX - rect.left) / rect.width) * 100;
    const glowY = ((mouseY - rect.top) / rect.height) * 100;
    
    setRotation({ x: rotateX, y: rotateY, z: 0 });
    setGlowPosition({ x: glowX, y: glowY });
  };

  const resetRotation = () => {
    setRotation({ x: 0, y: 0, z: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "rounded-xl overflow-hidden bg-[#1a2436]/40 backdrop-blur-sm",
        shadow && "shadow-2xl shadow-blue-500/10",
        className
      )}
      style={{
        perspective: `${perspective}px`,
        transformStyle: "preserve-3d",
        transform: `translateZ(${depth}px)`,
      }}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
        scale: isHovered && scale ? 1.05 : 1,
        z: isHovered ? depth + 15 : depth,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 20,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={resetRotation}
      {...props}
    >
      <div className="relative">
        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, ${glowColor}, transparent 70%)`,
              opacity: isHovered ? 1 : 0,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.9 : 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
        <div className="relative z-10">{children}</div>
      </div>
    </motion.div>
  );
};

export default NeomorphicCard3D;
