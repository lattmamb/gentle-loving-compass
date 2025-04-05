
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
        className="p-4 bg-gradient-to-b from-blue-900/30 to-blue-800/10"
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
          className="text-sm text-blue-200 mt-1"
          style={{
            x: contentX,
            y: contentY,
            z: 20,
          }}
        >
          From {formatCurrency(vehicle.price.daily)}<span className="text-xs text-blue-200/80">/day</span>
        </motion.div>
      </CardContent>
      
      <CardFooter className="px-4 pb-4 pt-0 flex justify-between bg-gradient-to-t from-blue-900/40 to-transparent">
        <motion.div
          style={{
            x: contentX,
            y: contentY,
            z: 40,
          }}
          className="flex gap-3 w-full"
        >
          <Button asChild variant="outline" className="border-white/40 text-white hover:bg-white/20 w-1/2 h-9 rounded-md px-2">
            <Link to={`/vehicles/${vehicle.id}`}>
              <span className="text-xs">Details</span>
            </Link>
          </Button>
          <Button asChild className="bg-blue-500 hover:bg-blue-600 w-1/2 h-9 rounded-md px-2">
            <Link to={`/book/${vehicle.id}`}>
              <span className="text-xs">Book Now</span>
            </Link>
          </Button>
        </motion.div>
      </CardFooter>
    </>
  );
}
