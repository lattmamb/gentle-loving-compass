
import React from "react";
import { Flame, Zap } from "lucide-react";
import StatusBadge from "./StatusBadge";
import ColorVariantPreview from "./ColorVariantPreview";
import { Vehicle } from "@/types";

interface VehicleCardImageProps {
  vehicle: Vehicle;
  isModelSPlaid: boolean;
  isModel3: boolean;
}

const VehicleCardImage: React.FC<VehicleCardImageProps> = ({ 
  vehicle,
  isModelSPlaid,
  isModel3
}) => {
  return (
    <div className="relative overflow-hidden aspect-[16/9]">
      <img
        src={vehicle.image}
        alt={vehicle.model}
        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
          isModel3 ? 'brightness-105' : ''
        }`}
        loading="lazy"
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent ${
        isModel3 ? 'via-red-900/20' : ''
      }`} />
      
      {/* Vehicle type badge */}
      <div className={`absolute top-4 right-4 ${
        isModelSPlaid ? 'bg-blue-600' : 
        isModel3 ? 'bg-red-600 animate-pulse-subtle' : 
        'bg-blue-600/90'
      } backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full`}>
        {vehicle.type} 
        {isModelSPlaid && "• Plaid"}
        {isModel3 && "• Performance"}
      </div>
      
      {/* Status badge */}
      <StatusBadge status={vehicle.status} vehicleId={vehicle.id} />
      
      {/* Color variants preview */}
      <ColorVariantPreview variants={vehicle.colorVariants} isModel3={isModel3} />
      
      {/* Special highlight for Model 3 */}
      {isModel3 && (
        <>
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-red-500/20 via-red-500/10 to-transparent rounded-full blur-xl"></div>
          <div className="absolute -left-10 bottom-0 w-[150px] h-20 bg-gradient-to-tr from-red-500/20 to-transparent rounded-full blur-xl"></div>
        </>
      )}
    </div>
  );
};

export default VehicleCardImage;
