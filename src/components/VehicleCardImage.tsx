
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface VehicleCardImageProps {
  image: string;
  status: "available" | "booked" | "maintenance";
  model: string;
  contentX: any;
  contentY: any;
  isHovered: boolean;
}

export function VehicleCardImage({ 
  image, 
  status, 
  model, 
  contentX, 
  contentY,
  isHovered 
}: VehicleCardImageProps) {
  return (
    <div className="relative w-full pt-[56.25%]">
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={image || "https://placehold.co/600x400?text=Tesla+Model"}
          alt={model}
          className="w-full h-full object-cover"
          style={{
            x: contentX && contentX.get ? contentX.get() * -1.5 : 0,
            y: contentY && contentY.get ? contentY.get() * -1.5 : 0,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
        />
      </div>
      <motion.div 
        className="absolute top-4 right-4 z-10"
        style={{
          x: contentX,
          y: contentY,
        }}
      >
        <Badge
          className={cn(
            "text-xs font-medium rounded-full px-3 py-1",
            status === "available"
              ? "bg-green-500/20 text-green-400 border-green-500/50"
              : "bg-amber-500/20 text-amber-400 border-amber-500/50"
          )}
        >
          {status === "available" ? "Available" : "Booked"}
        </Badge>
      </motion.div>
    </div>
  );
}
