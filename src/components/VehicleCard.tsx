
import React from "react";
import { Link } from "react-router-dom";
import { Vehicle } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Battery, Gauge, Clock, ShieldCheck, HeartPulse, Shield, Zap, Flame } from "lucide-react";

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  // Determine status badge styling
  const getStatusBadge = () => {
    switch (vehicle.status) {
      case "available":
        return { 
          color: vehicle.id === "model-3" ? "bg-red-600/90" : "bg-emerald-600/90", 
          icon: vehicle.id === "model-3" ? <Flame size={12} className="mr-1" /> : <ShieldCheck size={12} className="mr-1" />,
          label: vehicle.id === "model-3" ? "Ready to Drive" : "Available Now"
        };
      case "booked":
        return { 
          color: "bg-amber-600/90", 
          icon: <HeartPulse size={12} className="mr-1" />,
          label: "Reserved"
        };
      case "maintenance":
        return { 
          color: "bg-blue-600/90", 
          icon: <Shield size={12} className="mr-1" />,
          label: "In Service"
        };
      default:
        return { 
          color: "bg-blue-600/90", 
          icon: null,
          label: vehicle.status
        };
    }
  };

  const statusBadge = getStatusBadge();
  
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
          <div className={`absolute top-4 left-4 ${statusBadge.color} backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full flex items-center`}>
            {statusBadge.icon}
            {statusBadge.label}
          </div>
          
          {/* Color variants preview */}
          <div className="absolute bottom-4 left-4 flex space-x-1">
            {vehicle.colorVariants.slice(0, 5).map((variant, index) => (
              <div 
                key={index}
                className={`w-4 h-4 rounded-full border ${
                  isModel3 && variant.color === "#a82a2a" ? "border-red-300 w-5 h-5 ring-2 ring-red-500/30" : "border-white/50"
                }`}
                style={{ backgroundColor: variant.color }}
                title={variant.name}
              />
            ))}
          </div>
          
          {/* Special highlight for Model 3 */}
          {isModel3 && (
            <>
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-red-500/20 via-red-500/10 to-transparent rounded-full blur-xl"></div>
              <div className="absolute -left-10 bottom-0 w-[150px] h-20 bg-gradient-to-tr from-red-500/20 to-transparent rounded-full blur-xl"></div>
            </>
          )}
        </div>
        
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
      </motion.div>
    </Link>
  );
};

export default VehicleCard;
