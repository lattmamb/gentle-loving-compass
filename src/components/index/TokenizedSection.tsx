
import React from "react";
import { motion } from "framer-motion";
import TokenizedOwnershipSection from "@/components/TokenizedOwnershipSection";

interface TokenizedSectionProps {
  scrollY: number;
}

export default function TokenizedSection({ scrollY }: TokenizedSectionProps) {
  return (
    <motion.section 
      className="py-20 md:py-32"
      style={{ 
        transformStyle: "preserve-3d",
        transform: `translateZ(40px) translateY(${scrollY * 0.02}px)`,
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-blue">Tokenized Ownership</h2>
        <p className="text-white/70 mb-12 max-w-2xl text-lg">Revolutionary blockchain technology for vehicle ownership.</p>
        <TokenizedOwnershipSection />
      </div>
    </motion.section>
  );
}
