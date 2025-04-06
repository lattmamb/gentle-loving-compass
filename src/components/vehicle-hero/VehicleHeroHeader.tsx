
import React, { memo } from "react";
import { motion } from "framer-motion";

// Memoize the component to prevent unnecessary re-renders
const VehicleHeroHeader = memo(function VehicleHeroHeader() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6 max-w-3xl"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-gradient-blue">
        Future of Transportation
      </h1>
      <p className="text-lg text-white/80 max-w-xl mx-auto">
        Experience revolutionary flying vehicles with our premium Tesla-inspired electric fleet
      </p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <button className="mt-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all group">
          <span className="flex items-center gap-2">
            Reserve Your Flight
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >→</motion.span>
          </span>
        </button>
      </motion.div>
    </motion.div>
  );
});

export default VehicleHeroHeader;
