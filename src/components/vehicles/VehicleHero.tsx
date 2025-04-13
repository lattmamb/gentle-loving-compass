
import React, { useState } from "react";
import { Vehicle, ColorVariant } from "@/types";
import { Link } from "react-router-dom";
import VehicleStats from "./VehicleStats";
import VehicleColorSelector from "./VehicleColorSelector";
import VehiclePricing from "./VehiclePricing";
import { Button } from "@/components/ui/button";

interface VehicleHeroProps {
  vehicle: Vehicle;
  selectedColor: ColorVariant;
  setSelectedColor: React.Dispatch<React.SetStateAction<ColorVariant>>;
}

const VehicleHero: React.FC<VehicleHeroProps> = ({
  vehicle,
  selectedColor,
  setSelectedColor,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <div className="relative h-80 md:h-[500px] overflow-hidden rounded-xl">
        <img
          src={selectedColor.image || vehicle.image}
          alt={vehicle.model}
          className="w-full h-full object-cover"
        />
        {vehicle.status === "available" && (
          <div className="absolute top-4 right-4 bg-green-500/20 text-green-400 border border-green-500/50 text-xs font-medium rounded-full px-3 py-1">
            Available Now
          </div>
        )}
      </div>
      
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Tesla {vehicle.model}
        </h1>
        <p className="text-white/70 text-lg mb-6">{vehicle.type}</p>
        
        <div className="grid grid-cols-3 gap-4 mb-8">
          <VehicleStats label="Range" value={`${vehicle.specs.range} mi`} />
          <VehicleStats label="Top Speed" value={`${vehicle.specs.topSpeed} mph`} />
          <VehicleStats label="0-60 mph" value={`${vehicle.specs.acceleration}s`} />
        </div>
        
        <VehicleColorSelector 
          colorVariants={vehicle.colorVariants}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        
        <VehiclePricing vehicle={vehicle} />
        
        <div className="flex space-x-3">
          <Button variant="outline" className="flex-1 border-white/10 text-white hover:bg-white/10">
            Request a Test Drive
          </Button>
          <Button variant="outline" className="flex-1 border-white/10 text-white hover:bg-white/10">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VehicleHero;
