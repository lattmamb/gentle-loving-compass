
import React from 'react';
import { motion } from 'framer-motion';

interface ParallaxHeadingProps {
  mousePosition: { x: number; y: number };
  scrollY: any;
  opacity: any;
  y: any;
  scale: any;
}

export default function ParallaxHeading({ mousePosition, scrollY, opacity, y, scale }: ParallaxHeadingProps) {
  return (
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
        Drive The Future. Own The Network.
      </h1>
      
      <motion.p
        className="text-xl md:text-2xl text-blue-100/90 mb-8 max-w-2xl mx-auto font-light"
        style={{
          transformStyle: "preserve-3d",
          z: 30
        }}
      >
        Experience premium electric vehicles with flexible subscription plans, powered by our innovative tokenized ownership system.
      </motion.p>
      
      <motion.div 
        className="flex flex-col md:flex-row gap-4 justify-center mt-8"
        style={{
          transformStyle: "preserve-3d",
          z: 20,
        }}
      >
        <button className="text-lg bg-blue-600 hover:bg-blue-700 group glass-card border-none px-4 py-2 rounded">
          <span className="inline-block transition-transform group-hover:translate-x-1">
            Book Your EV Now
          </span>
        </button>
        <button className="text-lg border-white/10 text-white hover:bg-white/5 glass-card backdrop-blur-md px-4 py-2 rounded">
          Experience Atlas VisionOS
        </button>
      </motion.div>
    </motion.div>
  );
}
