
import React from "react";
import { motion } from "framer-motion";
import AnimatedTestimonials from "@/components/AnimatedTestimonials";

interface TestimonialsSectionProps {
  scrollY: number;
}

export default function TestimonialsSection({ scrollY }: TestimonialsSectionProps) {
  return (
    <motion.section 
      className="py-20 md:py-32 bg-gradient-to-b from-black/20 to-transparent"
      style={{ 
        transformStyle: "preserve-3d",
        transform: `translateZ(30px) translateY(${scrollY * -0.01}px)`,
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-blue">Customer Experiences</h2>
        <p className="text-white/70 mb-12 max-w-2xl text-lg">Hear what our members have to say.</p>
        <AnimatedTestimonials />
      </div>
    </motion.section>
  );
}
