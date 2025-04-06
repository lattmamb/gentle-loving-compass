
import React from "react";
import { motion } from "framer-motion";
import TabsSection from "@/components/TabsSection";

interface TabsFeatureSectionProps {
  scrollY: number;
}

export default function TabsFeatureSection({ scrollY }: TabsFeatureSectionProps) {
  return (
    <motion.section 
      className="py-20 md:py-32"
      style={{ 
        transformStyle: "preserve-3d",
        transform: `translateZ(35px) translateY(${scrollY * 0.015}px)`,
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-blue">Ownership Options</h2>
        <p className="text-white/70 mb-12 max-w-2xl text-lg">Choose the plan that works best for your lifestyle.</p>
        <TabsSection />
      </div>
    </motion.section>
  );
}
