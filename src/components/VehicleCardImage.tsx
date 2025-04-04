
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface VehicleCardImageProps {
  image: string;
  status: "available" | "booked" | "maintenance";
  model: string;
  type?: string;
  contentX?: any;
  contentY?: any;
  isHovered?: boolean;
}

export function VehicleCardImage({ 
  image, 
  status, 
  model,
  type,
  contentX, 
  contentY,
  isHovered = false
}: VehicleCardImageProps) {
  return (
    <div className="relative w-full pt-[56.25%] bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={image || "https://placehold.co/600x400?text=Tesla+Model"}
          alt={model}
          className="w-full h-full object-cover opacity-60"
          style={{
            x: contentX ? contentX.get() * -1.5 : 0,
            y: contentY ? contentY.get() * -1.5 : 0,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
        />
        
        {/* Overlay for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>
      
      {/* Model name overlay */}
      <div className="absolute top-4 left-4 z-10">
        <div className="text-sm font-medium text-blue-400">{type || "Model " + model}</div>
      </div>
      
      {/* Status badge */}
      {status && (
        <motion.div 
          className="absolute top-4 right-4 z-10"
          style={{
            x: contentX,
            y: contentY,
          }}
        >
          <Badge
            className={cn(
              "text-xs font-medium rounded-full px-2 py-0.5",
              status === "available"
                ? "bg-green-500/20 text-green-400 border-green-500/50"
                : "bg-amber-500/20 text-amber-400 border-amber-500/50"
            )}
          >
            {status === "available" ? "Available" : "Booked"}
          </Badge>
        </motion.div>
      )}
    </div>
  );
}
