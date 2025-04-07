
import React, { useState } from "react";
import { Vehicle } from "@/types";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { VehicleCardImage } from "./VehicleCardImage";
import { VehicleCardContent } from "./VehicleCardContent";

interface VehicleCardProps {
  vehicle: Vehicle;
  className?: string;
  featured?: boolean;
}

export default function VehicleCard({
  vehicle,
  className,
  featured = false,
}: VehicleCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse position values for subtle effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smoothed spring physics for the card
  const springConfig = { damping: 15, stiffness: 150 };
  const contentX = useSpring(x, springConfig);
  const contentY = useSpring(y, springConfig);
  
  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate normalized mouse position between -0.5 and 0.5
    const xValue = (e.clientX - rect.left) / width - 0.5;
    const yValue = (e.clientY - rect.top) / height - 0.5;
    
    // Update the motion values
    x.set(xValue * 5); // Reduce the effect for subtlety
    y.set(yValue * 5);
  };

  return (
    <motion.div
      className={cn(
        "overflow-hidden rounded-lg",
        featured ? "col-span-2 md:col-span-2" : "",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
      }}
    >
      <Card className="border-white/10 overflow-hidden h-full bg-gradient-to-b from-gray-800 to-gray-900 shadow-xl">
        <VehicleCardImage 
          image={vehicle.image} 
          status={vehicle.status}
          model={vehicle.model}
          type={vehicle.type}
          contentX={contentX}
          contentY={contentY}
          isHovered={isHovered}
        />
        
        <VehicleCardContent 
          vehicle={vehicle} 
          contentX={contentX}
          contentY={contentY}
        />
      </Card>
    </motion.div>
  );
}
