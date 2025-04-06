
import React from "react";
import { motion } from "framer-motion";

interface Hero3DModelProps {
  mousePosition: { x: number; y: number };
}

export default function Hero3DModel({ mousePosition }: Hero3DModelProps) {
  return (
    <motion.div 
      className="relative w-full h-80 mt-20 perspective-1000 transform-style-3d"
      initial={{ opacity: 0, z: -50 }}
      animate={{ opacity: 1, z: 0 }}
      transition={{ duration: 1, delay: 0.8 }}
    >
      <motion.div 
        className="absolute inset-0 flex justify-center transform-style-3d"
        style={{
          rotateX: mousePosition.y * 10,
          rotateY: mousePosition.x * 10,
          z: 80
        }}
        animate={{ 
          y: [0, -10, 0],
          rotateZ: [0, -1, 0, 1, 0],
          z: [80, 90, 80]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img 
          src="/unity-fleet.webp" 
          alt="Unity Link Fleet" 
          className="h-full object-contain"
          style={{ 
            filter: "drop-shadow(0 20px 50px rgba(0, 0, 0, 0.5))",
            transformStyle: "preserve-3d",
          }}
        />
        
        {/* Realistic shadow reflection */}
        <div className="absolute bottom-0 left-1/2 right-0 transform -translate-x-1/2 h-20 w-3/4 bg-gradient-radial from-black/20 to-transparent opacity-60 blur-xl rounded-full z-0"></div>
        
        {/* Branded overlay with apple-inspired minimal design */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-white/90 backdrop-blur-sm px-6 py-2 rounded-full bg-black/20 border border-white/10"
          animate={{ 
            opacity: [0.7, 1, 0.7],
            textShadow: [
              "0 0 20px rgba(59, 130, 246, 0.3)",
              "0 0 30px rgba(59, 130, 246, 0.5)",
              "0 0 20px rgba(59, 130, 246, 0.3)"
            ],
            z: [20, 30, 20]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          Unity Link
        </motion.div>
      </motion.div>
      
      {/* Subtle light reflection effect */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ transformStyle: "preserve-3d", z: 60 }}
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
    </motion.div>
  );
}
