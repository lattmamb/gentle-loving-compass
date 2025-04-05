
import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Location } from "@/types/locations";

interface MapVisualizationProps {
  location: Location;
}

const MapVisualization = ({ location }: MapVisualizationProps) => {
  return (
    <div className="w-full h-80 relative overflow-hidden rounded-xl neo-elevated">
      {/* Simple visualization using coordinates as positioning */}
      <div 
        className="absolute inset-0 bg-[#141821] overflow-hidden"
        style={{
          backgroundImage: `url(${location.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <div 
              key={`h-line-${i}`}
              className="absolute h-px bg-white/10 w-full"
              style={{ top: `${i * 10}%` }}
            />
          ))}
          
          {Array.from({ length: 10 }).map((_, i) => (
            <div 
              key={`v-line-${i}`}
              className="absolute w-px bg-white/10 h-full"
              style={{ left: `${i * 10}%` }}
            />
          ))}
        </div>
        
        {/* Location marker */}
        <motion.div 
          className="absolute"
          style={{ 
            left: '50%', 
            top: '50%',
            x: '-50%',
            y: '-50%'
          }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: 1 
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-blue-500/20 animate-pulse" />
            <div className="absolute -inset-2 rounded-full bg-blue-500/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <MapPin size={30} className="text-blue-500" />
          </div>
        </motion.div>
        
        {/* Location name */}
        <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md p-3 rounded-lg">
          <h3 className="font-bold text-white">{location.name}</h3>
          <p className="text-sm text-white/80">{location.address}</p>
        </div>
      </div>
    </div>
  );
};

export default MapVisualization;
