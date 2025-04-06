
import React from "react";
import { motion } from "framer-motion";

export default function VehicleHeroHeader() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6 max-w-3xl"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-blue-400">
        Experience Tesla Electrified
      </h1>
      <p className="text-lg text-white/70 max-w-xl mx-auto">
        Browse through our premium Tesla collection with flexible subscription options
      </p>
    </motion.div>
  );
}
