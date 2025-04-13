
import React from "react";
import { motion } from "framer-motion";
import ThreeDMarquee from "@/components/ThreeDMarquee";
import { marqueeImages } from "@/data/marqueeImages";

export default function MarqueeSection() {
  return (
    <section className="py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold mb-6 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience Our Fleet
        </motion.h2>
        
        <motion.p 
          className="text-xl text-white/70 max-w-2xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Browse through our premium Tesla collection
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <ThreeDMarquee 
            images={marqueeImages} 
            className="mt-8"
          />
        </motion.div>
      </div>
    </section>
  );
}
