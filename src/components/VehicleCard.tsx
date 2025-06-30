
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Vehicle } from "@/types";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import VehicleCardImage from "./vehicles/VehicleCardImage";
import VehicleCardDetails from "./vehicles/VehicleCardDetails";
import VehicleDetailModal from "./vehicles/VehicleDetailModal";
import FavoriteToggle from "./vehicles/FavoriteToggle";
import { Info } from "lucide-react";

interface VehicleCardProps {
  vehicle: Vehicle;
  onRent?: (vehicleId: string) => void;
  onFavorite?: (vehicleId: string, isFavorite: boolean) => void;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ 
  vehicle, 
  onRent = () => {},
  onFavorite = () => {}
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Check if it's the Model S Plaid or Model 3 to highlight it
  const isModelSPlaid = vehicle.model.includes("Plaid");
  const isModel3 = vehicle.id === "model-3";
  
  // Special effects for Model 3
  const cardGlowClass = isModel3 ? 
    'shadow-[0_0_20px_rgba(220,38,38,0.25)] hover:shadow-[0_0_30px_rgba(220,38,38,0.35)]' : '';

  const handleDetailsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleRentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onRent(vehicle.id);
  };

  const handleFavoriteToggle = (vehicleId: string, isFavorite: boolean) => {
    onFavorite(vehicleId, isFavorite);
  };

  return (
    <>
      <Link to={`/vehicles/${vehicle.id}`}>
        <motion.div 
          className={`group h-full neo-blur rounded-2xl overflow-hidden border relative ${
            isModelSPlaid ? 'border-blue-400/30' : 
            isModel3 ? 'border-red-500/40' : 
            'border-white/10'
          } transition-all duration-500 ${cardGlowClass}`}
          whileHover={{ 
            scale: isModel3 ? 1.05 : 1.02,
            boxShadow: isModel3 ? "0 20px 25px -5px rgba(220, 38, 38, 0.3), 0 10px 10px -5px rgba(220, 38, 38, 0.2)" :
              "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <div className="relative">
            <VehicleCardImage 
              vehicle={vehicle} 
              isModelSPlaid={isModelSPlaid}
              isModel3={isModel3}
            />
            
            {/* Favorite Toggle */}
            <FavoriteToggle
              vehicleId={vehicle.id}
              onToggle={handleFavoriteToggle}
            />

            {/* Quick Actions Overlay */}
            <motion.div 
              className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center space-x-3 opacity-0 transition-opacity duration-300"
              animate={{ opacity: isHovered ? 1 : 0 }}
            >
              <Button
                size="sm"
                variant="outline"
                onClick={handleDetailsClick}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Info size={16} className="mr-1" />
                Details
              </Button>
              <Button
                size="sm"
                onClick={handleRentClick}
                disabled={vehicle.status !== "available"}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Rent Now
              </Button>
            </motion.div>
          </div>
          
          <VehicleCardDetails 
            vehicle={vehicle}
            isModelSPlaid={isModelSPlaid}
            isModel3={isModel3}
          />
        </motion.div>
      </Link>

      {/* Detail Modal */}
      <VehicleDetailModal
        vehicle={vehicle}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onRent={onRent}
      />
    </>
  );
};

export default VehicleCard;
