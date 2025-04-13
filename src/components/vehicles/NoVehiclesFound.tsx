
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface NoVehiclesFoundProps {
  resetFilters: () => void;
}

const NoVehiclesFound: React.FC<NoVehiclesFoundProps> = ({ resetFilters }) => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center h-64 text-center neo-blur rounded-2xl p-6"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-5xl mb-4">🔍</div>
      <h2 className="text-xl font-bold mb-2">No vehicles found</h2>
      <p className="text-white/70 mb-4">
        Try adjusting your search criteria to find more options.
      </p>
      <Button onClick={resetFilters} className="bg-red-600 hover:bg-red-700 rounded-full">
        Reset Filters
      </Button>
    </motion.div>
  );
};

export default NoVehiclesFound;
