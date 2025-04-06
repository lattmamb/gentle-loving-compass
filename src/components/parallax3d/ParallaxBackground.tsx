
import React from "react";
import { motion } from "framer-motion";
import GridBackground from "@/components/ui/grid-background";

interface ParallaxBackgroundProps {
  mousePosition: { x: number; y: number };
}

export default function ParallaxBackground({ mousePosition }: ParallaxBackgroundProps) {
  return (
    <GridBackground containerClassName="min-h-screen flex items-center justify-center">
      {/* Subtle orb glow effect */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0) 70%)',
          filter: 'blur(100px)',
          opacity: 0.6,
          transformStyle: "preserve-3d",
          x: mousePosition.x * -30,
          y: mousePosition.y * -30,
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
      />
    </GridBackground>
  );
}
