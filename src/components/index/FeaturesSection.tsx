
import React from "react";
import { motion } from "framer-motion";
import AnimatedFeatures from "@/components/AnimatedFeatures";

interface FeaturesSectionProps {
  scrollY: number;
}

export default function FeaturesSection({ scrollY }: FeaturesSectionProps) {
  return (
    <motion.section 
      className="py-20 md:py-32"
      style={{ 
        transformStyle: "preserve-3d",
        transform: `translateZ(30px) translateY(${scrollY * 0.015}px)`,
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-blue">Intelligent Features</h2>
        <p className="text-white/70 mb-12 max-w-2xl text-lg">Advanced technology that enhances your driving experience.</p>
        <AnimatedFeatures />
      </div>
    </motion.section>
  );
}
