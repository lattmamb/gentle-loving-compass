
import React from "react";
import { motion } from "framer-motion";

export function Stat({
  label,
  value,
  unit,
  icon,
}: {
  label: string;
  value: number;
  unit: string;
  icon: string;
}) {
  return (
    <motion.div 
      className="flex flex-col items-center text-center neo-pressed rounded-lg p-2"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      <span className="text-lg mb-1">{icon}</span>
      <p className="font-medium text-white/90 text-sm">{value} {unit}</p>
      <p className="text-xs text-white/60">{label}</p>
    </motion.div>
  );
}

export function PriceTag({ period, amount }: { period: string; amount: number }) {
  return (
    <motion.div 
      className="flex flex-col items-center text-center neo-pressed rounded-lg p-3"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      <p className="text-sm text-white/60">{period}</p>
      <p className="font-bold text-white text-lg">{amount}</p>
    </motion.div>
  );
}
