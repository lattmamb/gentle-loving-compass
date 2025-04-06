
import React from "react";
import { motion } from "framer-motion";
import ParticleAnimation from "@/components/ParticleAnimation";
import GridBackground from "@/components/ui/grid-background";

interface HeroBackgroundProps {
  children: React.ReactNode;
}

export default function HeroBackground({ children }: HeroBackgroundProps) {
  return (
    <GridBackground containerClassName="min-h-[50vh] py-16 flex flex-col justify-center bg-[#11151e]">
      {/* Subtle particle animation in background */}
      <ParticleAnimation 
        count={20}
        colors={["#3b82f6", "#60a5fa"]}
        speed="slow"
      />
      
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent opacity-30" />
      </div>
      
      {children}
    </GridBackground>
  );
}
