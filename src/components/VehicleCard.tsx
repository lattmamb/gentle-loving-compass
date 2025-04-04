
import React, { useState } from "react";
import { Vehicle } from "@/types";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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
  
  // Mouse position values for 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smoothed spring physics for the card rotation
  const springConfig = { damping: 15, stiffness: 150 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), springConfig);
  
  // Parallax effect for the content inside the card
  const contentX = useSpring(useTransform(x, [-0.5, 0.5], [5, -5]), springConfig);
  const contentY = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), springConfig);
  
  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate normalized mouse position between -0.5 and 0.5
    const xValue = (e.clientX - rect.left) / width - 0.5;
    const yValue = (e.clientY - rect.top) / height - 0.5;
    
    // Update the motion values
    x.set(xValue);
    y.set(yValue);
  };

  return (
    <motion.div
      className={cn(
        "group overflow-hidden rounded-lg border-white/10",
        featured ? "col-span-2 md:col-span-2" : "",
        className
      )}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        scale: 1.02,
      }}
      animate={{
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
      }}
    >
      <Card className="neo-elevated border-white/10 overflow-hidden h-full">
        <VehicleCardImage 
          image={vehicle.image} 
          status={vehicle.status}
          model={vehicle.model}
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
