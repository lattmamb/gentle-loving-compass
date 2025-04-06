
import React from "react";
import { motion } from "framer-motion";

interface HeroHeadingProps {
  mousePosition: { x: number; y: number };
}

export default function HeroHeading({ mousePosition }: HeroHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, z: -50 }}
      animate={{ opacity: 1, y: 0, z: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="transform-style-3d"
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
        Drive The Future. Own The Network.
      </h1>
    </motion.div>
  );
}
