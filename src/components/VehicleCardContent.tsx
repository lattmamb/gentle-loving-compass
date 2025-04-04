
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
  contentX: any;
  contentY: any;
}

export function VehicleCardContent({ vehicle, contentX, contentY }: VehicleCardContentProps) {
  return (
    <>
      <CardContent 
        className="p-6"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div 
          className="flex justify-between items-start mb-4"
          style={{
            x: contentX,
            y: contentY,
            z: 20,
          }}
        >
          <h3 className="text-xl font-bold text-gradient-blue">Tesla {vehicle.model}</h3>
          <div className="text-right">
            <p className="text-xs text-white/60">From</p>
            <p className="text-lg font-bold text-white">
              {formatCurrency(vehicle.price.daily)}
              <span className="text-xs text-white/60 ml-1">/day</span>
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-3 gap-4 my-6"
          style={{
            x: contentX,
            y: contentY,
            z: 30,
          }}
        >
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
        </motion.div>
      </CardContent>
      
      <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
        <motion.div
          style={{
            x: contentX,
            y: contentY,
            z: 40,
          }}
          className="flex gap-3 w-full"
        >
          <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 w-1/2">
            <Link to={`/vehicles/${vehicle.id}`}>Details</Link>
          </Button>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 w-1/2">
            <Link to={`/book/${vehicle.id}`}>Book Now</Link>
          </Button>
        </motion.div>
      </CardFooter>
    </>
  );
}
