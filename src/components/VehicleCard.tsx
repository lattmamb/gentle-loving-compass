
import React from "react";
import { Link } from "react-router-dom";
import { Vehicle } from "@/types";
import { motion } from "framer-motion";
import VehicleCardImage from "./vehicles/VehicleCardImage";
import VehicleCardDetails from "./vehicles/VehicleCardDetails";

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  // Check if it's the Model S Plaid or Model 3 to highlight it
  const isModelSPlaid = vehicle.model.includes("Plaid");
  const isModel3 = vehicle.id === "model-3";
  
  // Special effects for Model 3
  const cardGlowClass = isModel3 ? 
    'shadow-[0_0_20px_rgba(220,38,38,0.25)] hover:shadow-[0_0_30px_rgba(220,38,38,0.35)]' : '';

  return (
    <Link to={`/vehicles/${vehicle.id}`}>
      <motion.div 
        className={`group h-full neo-blur rounded-2xl overflow-hidden border ${
          isModelSPlaid ? 'border-blue-400/30' : 
          isModel3 ? 'border-red-500/40' : 
          'border-white/10'
        } transition-all duration-500 ${cardGlowClass}`}
        whileHover={{ 
          scale: isModel3 ? 1.05 : 1.02,
          boxShadow: isModel3 ? "0 20px 25px -5px rgba(220, 38, 38, 0.3), 0 10px 10px -5px rgba(220, 38, 38, 0.2)" :
            "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
        }}
      >
        <VehicleCardImage 
          vehicle={vehicle} 
          isModelSPlaid={isModelSPlaid}
          isModel3={isModel3}
        />
        
        <VehicleCardDetails 
          vehicle={vehicle}
          isModelSPlaid={isModelSPlaid}
          isModel3={isModel3}
        />
      </motion.div>
    </Link>
  );
};

export default VehicleCard;
