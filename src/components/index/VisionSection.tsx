
import React from "react";
import { motion } from "framer-motion";
import AtlasVisionOSSection from "@/components/AtlasVisionOSSection";

interface VisionSectionProps {
  scrollY: number;
}

export default function VisionSection({ scrollY }: VisionSectionProps) {
  return (
    <motion.section 
      className="py-20 md:py-40 relative overflow-hidden"
      style={{ 
        transformStyle: "preserve-3d",
        transform: `translateZ(50px) translateY(${scrollY * 0.025}px)`,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.3), transparent)"
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)] z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-2 text-gradient-blue">Atlas VisionOS</h2>
        <p className="text-white/70 mb-12 max-w-2xl text-lg md:text-xl">The next generation of vehicle interface technology.</p>
        <AtlasVisionOSSection />
      </div>
    </motion.section>
  );
}
