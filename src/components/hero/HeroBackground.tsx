
import React from "react";
import { motion } from "framer-motion";

interface HeroBackgroundProps {
  mousePosition: { x: number; y: number };
}

export default function HeroBackground({ mousePosition }: HeroBackgroundProps) {
  return (
    <>
      {/* Subtle grid pattern for depth */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at ${50 + mousePosition.x * 25}% ${50 + mousePosition.y * 25}%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)`,
          }}
        />
      </div>
    </>
  );
}
