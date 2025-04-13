
import React from "react";
import { formatCurrency } from "@/lib/utils";
import { ArrowRight, Battery, Gauge, Clock, Flame } from "lucide-react";
import { Vehicle } from "@/types";

interface VehicleCardDetailsProps {
  vehicle: Vehicle;
  isModelSPlaid: boolean;
  isModel3: boolean;
}

const VehicleCardDetails: React.FC<VehicleCardDetailsProps> = ({
  vehicle,
  isModelSPlaid,
  isModel3
}) => {
  return (
    <div className="p-5">
      <h3 className={`font-bold text-xl mb-1 ${isModel3 ? 'text-red-400' : 'text-white'}`}>
        Tesla {vehicle.model}
        {isModel3 && <span className="ml-1 text-sm font-normal inline-flex items-center">
          <Flame size={12} className="mx-1 text-red-500 animate-pulse-subtle" /> Red
        </span>}
      </h3>
      
      <div className="flex flex-wrap gap-3 mt-3 mb-4">
        <div className="flex items-center text-white/70 text-sm">
          <Battery size={16} className={`mr-1 ${isModel3 ? 'text-red-400' : ''}`} />
          <span>{vehicle.specs.range} mi</span>
        </div>
        <div className="flex items-center text-white/70 text-sm">
          <Gauge size={16} className={`mr-1 ${isModel3 ? 'text-red-400' : ''}`} />
          <span>{vehicle.specs.acceleration}s 0-60</span>
        </div>
        <div className="flex items-center text-white/70 text-sm">
          <Clock size={16} className={`mr-1 ${isModel3 ? 'text-red-400' : ''}`} />
          <span>{vehicle.status === "available" ? isModel3 ? "Ready to drive" : "Ready to go" : vehicle.status}</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
        <div>
          <p className="text-white/60 text-xs uppercase tracking-wider">Starting at</p>
          <p className="font-semibold text-lg">{formatCurrency(vehicle.price.daily)}<span className="text-sm font-normal text-white/60">/day</span></p>
        </div>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 
          ${isModelSPlaid ? 'group-hover:bg-blue-600/20 group-hover:border-blue-500/30' : 
            isModel3 ? 'group-hover:bg-red-600/20 group-hover:border-red-500/30' : 
            'group-hover:bg-blue-600/20 group-hover:border-blue-500/30'} transition-all`}>
          <ArrowRight size={18} className={`text-white/70 
            ${isModelSPlaid ? 'group-hover:text-blue-400' : 
              isModel3 ? 'group-hover:text-red-400' : 
              'group-hover:text-blue-400'} transition-colors`} />
        </div>
      </div>
    </div>
  );
};

export default VehicleCardDetails;
