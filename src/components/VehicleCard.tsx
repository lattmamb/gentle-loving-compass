
import React from "react";
import { Link } from "react-router-dom";
import { Vehicle } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Battery, Gauge, Clock } from "lucide-react";

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  return (
    <Link to={`/vehicles/${vehicle.id}`}>
      <motion.div 
        className="group h-full neo-blur rounded-2xl overflow-hidden border border-white/10 transition-all duration-500"
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" 
        }}
      >
        <div className="relative overflow-hidden aspect-[16/9]">
          <img
            src={vehicle.image}
            alt={vehicle.model}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full">
            {vehicle.type}
          </div>
        </div>
        
        <div className="p-5">
          <h3 className="font-bold text-xl mb-1 text-white">Tesla {vehicle.model}</h3>
          
          <div className="flex flex-wrap gap-3 mt-3 mb-4">
            <div className="flex items-center text-white/70 text-sm">
              <Battery size={16} className="mr-1" />
              <span>{vehicle.range} mi</span>
            </div>
            <div className="flex items-center text-white/70 text-sm">
              <Gauge size={16} className="mr-1" />
              <span>{vehicle.acceleration}s 0-60</span>
            </div>
            <div className="flex items-center text-white/70 text-sm">
              <Clock size={16} className="mr-1" />
              <span>{vehicle.year}</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
            <div>
              <p className="text-white/60 text-xs uppercase tracking-wider">Starting at</p>
              <p className="font-semibold text-lg">{formatCurrency(vehicle.price.daily)}<span className="text-sm font-normal text-white/60">/day</span></p>
            </div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-blue-600/20 group-hover:border-blue-500/30 transition-all">
              <ArrowRight size={18} className="text-white/70 group-hover:text-blue-400 transition-colors" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default VehicleCard;
