
import React from "react";
import { motion } from "framer-motion";
import ChargingHubsSection from "@/components/ChargingHubsSection";

interface ChargingSectionProps {
  scrollY: number;
}

export default function ChargingSection({ scrollY }: ChargingSectionProps) {
  return (
    <motion.section 
      className="py-20 md:py-32 bg-gradient-to-b from-black/20 to-transparent"
      style={{ 
        transformStyle: "preserve-3d",
        transform: `translateZ(40px) translateY(${scrollY * 0.02}px)`,
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-blue">Charging Network</h2>
        <p className="text-white/70 mb-12 max-w-2xl text-lg">Fast, convenient charging stations across the country.</p>
        <ChargingHubsSection />
      </div>
    </motion.section>
  );
}
