
import React from "react";
import { motion } from "framer-motion";
import AnimatedStats from "@/components/AnimatedStats";

interface StatsSectionProps {
  scrollY: number;
}

export default function StatsSection({ scrollY }: StatsSectionProps) {
  return (
    <motion.section 
      className="py-20 md:py-32 bg-gradient-to-b from-black/20 to-transparent"
      style={{ 
        transformStyle: "preserve-3d",
        transform: `translateZ(25px) translateY(${scrollY * -0.01}px)`,
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-blue">Performance Metrics</h2>
        <p className="text-white/70 mb-12 max-w-2xl text-lg">The numbers that define our electric fleet.</p>
        <AnimatedStats />
      </div>
    </motion.section>
  );
}
