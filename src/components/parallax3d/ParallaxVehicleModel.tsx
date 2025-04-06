
import React from "react";
import { motion } from "framer-motion";

interface ParallaxVehicleModelProps {
  mousePosition: { x: number; y: number };
}

export default function ParallaxVehicleModel({ mousePosition }: ParallaxVehicleModelProps) {
  return (
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
  );
}
