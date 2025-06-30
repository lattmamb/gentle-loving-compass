
import React from "react";
import { Link } from "react-router-dom";
import { Vehicle } from "@/types";
import { motion } from "framer-motion";
import { Battery, Zap, MapPin, ArrowRight } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface LuxuryVehicleCardProps {
  vehicle: Vehicle;
  index: number;
}

const LuxuryVehicleCard: React.FC<LuxuryVehicleCardProps> = ({ vehicle, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="luxury-card group cursor-pointer"
    >
      <Link to={`/vehicles/${vehicle.id}`}>
        <div className="relative overflow-hidden rounded-xl mb-4">
          <div className="aspect-video relative">
            <img
              src={vehicle.image}
              alt={vehicle.model}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Status Badge */}
            <div className="absolute top-4 right-4 glass-luxury px-3 py-1 rounded-full">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full charging-pulse" />
                <span className="text-xs font-medium text-white">Available</span>
              </div>
            </div>
            
            {/* Location Badge */}
            <div className="absolute bottom-4 left-4 glass-panel px-3 py-1 rounded-full">
              <div className="flex items-center space-x-1">
                <MapPin size={12} className="text-blue-400" />
                <span className="text-xs text-white/80">{vehicle.location}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-light text-white mb-1">
              Tesla {vehicle.model}
            </h3>
            <p className="text-white/60 text-sm">{vehicle.type}</p>
          </div>
          
          {/* Premium Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-luxury p-3 rounded-lg">
              <div className="flex items-center space-x-2 mb-1">
                <Battery size={16} className="text-blue-400" />
                <span className="text-xs text-white/60">Range</span>
              </div>
              <p className="text-lg font-medium text-white">{vehicle.specs.range} mi</p>
            </div>
            
            <div className="glass-luxury p-3 rounded-lg">
              <div className="flex items-center space-x-2 mb-1">
                <Zap size={16} className="text-green-400" />
                <span className="text-xs text-white/60">0-60 mph</span>
              </div>
              <p className="text-lg font-medium text-white">{vehicle.specs.acceleration}s</p>
            </div>
          </div>
          
          {/* Clean Energy Impact */}
          <div className="glass-panel p-3 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-green-400 mb-1">Clean Energy Impact</p>
                <p className="text-sm text-white">{vehicle.carbonSavings?.toLocaleString()} kg CO₂ saved/year</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center">
                <div className="w-3 h-3 bg-green-400 rounded-full charging-pulse" />
              </div>
            </div>
          </div>
          
          {/* Pricing */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div>
              <p className="text-xs text-white/60 uppercase tracking-wider">Starting at</p>
              <p className="text-xl font-medium text-white">
                {formatCurrency(vehicle.price.daily)}
                <span className="text-sm font-normal text-white/60">/day</span>
              </p>
            </div>
            
            <div className="tesla-button-dark p-3 rounded-full group-hover:bg-blue-600/20 transition-colors">
              <ArrowRight size={20} className="text-white group-hover:text-blue-400 transition-colors" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default LuxuryVehicleCard;
