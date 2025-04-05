
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import NeomorphicCard3D from "@/components/NeomorphicCard3D";
import { Button } from "@/components/ui/button";
import { Location } from "@/types/locations";

interface LocationCardProps {
  location: Location;
  isSelected: boolean;
  onClick: (location: Location) => void;
  index: number;
}

const LocationCard = ({ location, isSelected, onClick, index }: LocationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <NeomorphicCard3D
        maxRotation={10}
        className="overflow-hidden p-0 cursor-pointer h-60"
        onClick={() => onClick(location)}
      >
        <div
          className={cn(
            "group w-full h-full overflow-hidden relative flex flex-col justify-end p-4",
            `bg-[url(${location.image})] bg-cover bg-center`,
            "before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/80 before:to-transparent before:z-10",
            isSelected ? "ring-2 ring-blue-500" : ""
          )}
        >
          <div className="text relative z-20">
            <h3 className="font-bold text-xl text-white">{location.name}</h3>
            <p className="font-normal text-sm text-white/80 my-1">{location.address}</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm text-white/70">{location.availableCars} vehicles available</span>
              <Button variant="outline" size="sm" className="neo-button bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20">
                Details
              </Button>
            </div>
          </div>
          
          {/* Overlay animation on hover */}
          <motion.div 
            className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              backgroundImage: `url(${location.hoverImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </div>
      </NeomorphicCard3D>
    </motion.div>
  );
};

export default LocationCard;
