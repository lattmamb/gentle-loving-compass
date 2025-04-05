
import React from "react";
import { motion } from "framer-motion";

interface StatProps {
  label: string;
  value: number;
  unit: string;
  icon: string;
}

export function Stat({ label, value, unit, icon }: StatProps) {
  return (
    <motion.div 
      className="flex flex-col items-center text-center rounded-lg p-2 bg-blue-500/10"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <span className="text-lg mb-1 text-blue-400">{icon}</span>
      <p className="font-medium text-white text-sm">{value} {unit}</p>
      <p className="text-xs text-white/80">{label}</p>
    </motion.div>
  );
}
