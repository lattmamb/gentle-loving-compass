
import React from "react";
import { Link } from "react-router-dom";
import { Vehicle } from "@/types";
import { motion } from "framer-motion";
import { Battery, Zap, ArrowRight } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface LuxuryVehicleCardProps {
  vehicle: Vehicle;
  index: number;
}

const LuxuryVehicleCard: React.FC<LuxuryVehicleCardProps> = ({ vehicle, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <Link to={`/vehicles/${vehicle.id}`}>
        <div className="relative overflow-hidden bg-black border border-white/10 hover:border-white/20 transition-all duration-500">
          {/* Image Container */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={vehicle.image}
              alt={vehicle.model}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Status Badge */}
            <div className="absolute top-6 right-6 bg-green-500/90 text-white text-xs font-medium px-3 py-1 rounded-full">
              Available
            </div>
            
            {/* Model Badge */}
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-sm text-white text-sm font-medium px-3 py-1 rounded-full border border-white/20">
              {vehicle.type}
            </div>
          </div>
          
          {/* Content */}
          <div className="p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-light text-white mb-2">
                Tesla {vehicle.model}
              </h3>
              <p className="text-white/60 text-sm uppercase tracking-wider">
                Starting at {formatCurrency(vehicle.price.daily)}/day
              </p>
            </div>
            
            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Battery size={16} className="text-blue-400" />
                  <span className="text-xs text-white/60 uppercase tracking-wider">Range</span>
                </div>
                <p className="text-lg font-light text-white">{vehicle.specs.range} mi</p>
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Zap size={16} className="text-green-400" />
                  <span className="text-xs text-white/60 uppercase tracking-wider">0-60 mph</span>
                </div>
                <p className="text-lg font-light text-white">{vehicle.specs.acceleration}s</p>
              </div>
            </div>
            
            {/* Clean Energy Impact */}
            <div className="mb-6">
              <p className="text-xs text-green-400 mb-1 uppercase tracking-wider">Clean Energy Impact</p>
              <p className="text-sm text-white/80">{vehicle.carbonSavings?.toLocaleString()} kg CO₂ saved annually</p>
            </div>
            
            {/* CTA */}
            <div className="flex items-center justify-between">
              <div className="text-white/40 text-xs uppercase tracking-wider">
                Learn More
              </div>
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white/5 transition-all duration-300">
                <ArrowRight size={16} className="text-white/60 group-hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default LuxuryVehicleCard;
