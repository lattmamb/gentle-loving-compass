
import React from "react";
import { motion } from "framer-motion";
import FeaturedVehicles from "@/components/FeaturedVehicles";

interface FeaturedVehiclesSectionProps {
  scrollY: number;
}

export default function FeaturedVehiclesSection({ scrollY }: FeaturedVehiclesSectionProps) {
  return (
    <motion.section 
      className="py-20 md:py-32"
      style={{ 
        transformStyle: "preserve-3d",
        transform: `translateZ(40px) translateY(${scrollY * 0.02}px)`,
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-blue">Featured Vehicles</h2>
        <p className="text-white/70 mb-12 max-w-2xl text-lg">Explore our premium selection of electric vehicles available for subscription.</p>
        <FeaturedVehicles />
      </div>
    </motion.section>
  );
}
