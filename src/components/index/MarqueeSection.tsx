
import React from "react";
import { motion } from "framer-motion";
import ThreeDMarquee from "@/components/ThreeDMarquee";
import { marqueeImages } from "@/data/marqueeImages";

export default function MarqueeSection() {
  return (
    <motion.section 
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ 
        transformStyle: "preserve-3d",
        transform: `translateZ(20px)`,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.2), transparent, rgba(0,0,0,0.2))"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 z-10 pointer-events-none"></div>
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-blue">The Tesla Experience</h2>
        <p className="text-white/70 mb-8 max-w-2xl text-lg">Our vehicles in action across the world.</p>
      </div>
      <ThreeDMarquee images={marqueeImages} />
    </motion.section>
  );
}
