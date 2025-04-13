
import React from "react";
import { motion } from "framer-motion";
import { Vehicle } from "@/types";
import VehicleCard from "@/components/VehicleCard";
import NoVehiclesFound from "@/components/vehicles/NoVehiclesFound";

interface VehicleGridProps {
  vehicles: Vehicle[];
  resetFilters: () => void;
}

const VehicleGrid: React.FC<VehicleGridProps> = ({ vehicles, resetFilters }) => {
  if (vehicles.length === 0) {
    return <NoVehiclesFound resetFilters={resetFilters} />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {vehicles.map((vehicle, index) => (
        <motion.div
          key={vehicle.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <VehicleCard vehicle={vehicle} />
        </motion.div>
      ))}
    </div>
  );
};

export default VehicleGrid;
