
import React from "react";
import { motion } from "framer-motion";
import { formatCurrency } from "@/lib/utils";
import { Stat } from "@/components/ui/stat";
import { Vehicle } from "@/types";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";

interface VehicleCardContentProps {
  vehicle: Vehicle;
  contentX?: any;
  contentY?: any;
  onSwipe?: (direction: string) => void;
}

export function VehicleCardContent({ 
  vehicle, 
  contentX, 
  contentY,
  onSwipe
}: VehicleCardContentProps) {
  return (
    <>
      <CardContent 
        className="p-4"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div 
          className="flex justify-between items-start"
          style={{
            x: contentX,
            y: contentY,
            z: 20,
          }}
        >
          <h3 className="text-2xl font-bold text-white">Tesla {vehicle.model}</h3>
        </motion.div>
        
        <motion.div 
          className="text-sm text-white/70 mt-1"
          style={{
            x: contentX,
            y: contentY,
            z: 20,
          }}
        >
          From {formatCurrency(vehicle.price.daily)}<span className="text-xs text-white/60">/day</span>
        </motion.div>
      </CardContent>
      
      <CardFooter className="px-4 pb-4 pt-0 flex justify-between">
        <motion.div
          style={{
            x: contentX,
            y: contentY,
            z: 40,
          }}
          className="flex gap-3 w-full"
        >
          <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 w-1/2 h-9 rounded-md px-2">
            <Link to={`/vehicles/${vehicle.id}`}>
              <span className="text-xs">Details</span>
            </Link>
          </Button>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 w-1/2 h-9 rounded-md px-2">
            <Link to={`/book/${vehicle.id}`}>
              <span className="text-xs">Book Now</span>
            </Link>
          </Button>
        </motion.div>
      </CardFooter>
    </>
  );
}
