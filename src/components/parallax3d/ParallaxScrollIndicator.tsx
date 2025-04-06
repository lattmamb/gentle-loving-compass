
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ParallaxScrollIndicatorProps {
  mousePosition: { x: number; y: number };
}

export default function ParallaxScrollIndicator({ mousePosition }: ParallaxScrollIndicatorProps) {
  return (
    <motion.div 
      className="absolute bottom-10 left-0 right-0 flex justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      style={{
        z: 30 + mousePosition.y * 10
      }}
    >
      <Button 
        variant="ghost" 
        onClick={() => window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth"
        })}
        className="text-white/80 hover:text-white glass-card backdrop-blur-sm px-4 py-2 rounded-full"
      >
        <motion.svg 
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </motion.svg>
      </Button>
    </motion.div>
  );
}
