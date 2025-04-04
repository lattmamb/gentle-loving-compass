
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Vehicle } from "@/types";
import { cn, formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import NeomorphicCard3D from "./NeomorphicCard3D";

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
  
  return (
    <NeomorphicCard3D
      className={cn(
        "p-0 overflow-hidden",
        featured ? "col-span-2 md:col-span-2" : "",
        className
      )}
      maxRotation={8}
      glowColor={vehicle.status === "available" ? "rgba(10, 132, 255, 0.3)" : "rgba(255, 200, 0, 0.2)"}
      perspective={1200}
    >
      <div className="relative w-full pt-[56.25%]">
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={vehicle.image || "https://placehold.co/600x400?text=Tesla+Model"}
            alt={vehicle.model}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.05 : 1
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut"
            }}
          />
        </div>
        <div className="absolute top-4 right-4 z-10">
          <Badge
            className={cn(
              "text-xs font-medium rounded-full px-3 py-1 neo-glow",
              vehicle.status === "available"
                ? "bg-green-500/20 text-green-400 border-green-500/50"
                : "bg-amber-500/20 text-amber-400 border-amber-500/50"
            )}
          >
            {vehicle.status === "available" ? "Available" : "Booked"}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gradient-blue">Tesla {vehicle.model}</h3>
          <div className="text-right">
            <p className="text-xs text-white/60">From</p>
            <p className="text-lg font-bold text-white">
              {formatCurrency(vehicle.price.daily)}
              <span className="text-xs text-white/60 ml-1">/day</span>
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 my-6">
          <Stat
            label="Range"
            value={vehicle.specs.range}
            unit="mi"
            icon="⚡"
          />
          <Stat
            label="Top Speed"
            value={vehicle.specs.topSpeed}
            unit="mph"
            icon="🏎️"
          />
          <Stat
            label="0-60"
            value={vehicle.specs.acceleration}
            unit="sec"
            icon="⏱️"
          />
        </div>
      </CardContent>
      
      <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
        <Button asChild variant="outline" className="neo-button border-white/20 text-white hover:bg-white/10">
          <Link to={`/vehicles/${vehicle.id}`}>Details</Link>
        </Button>
        <Button asChild className="neo-button bg-blue-600 hover:bg-blue-700">
          <Link to={`/book/${vehicle.id}`}>Book Now</Link>
        </Button>
      </CardFooter>
    </NeomorphicCard3D>
  );
}

function Stat({
  label,
  value,
  unit,
  icon,
}: {
  label: string;
  value: number;
  unit: string;
  icon: string;
}) {
  return (
    <div className="flex flex-col items-center text-center neo-pressed rounded-lg p-2">
      <span className="text-lg mb-1">{icon}</span>
      <p className="font-medium text-white/90 text-sm">{value} {unit}</p>
      <p className="text-xs text-white/60">{label}</p>
    </div>
  );
}
