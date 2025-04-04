
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Vehicle } from "@/types";
import { cn, formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

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
        transition: { duration: 0.2 },
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
        <div className="relative w-full pt-[56.25%]">
          <div className="absolute inset-0 overflow-hidden">
            <motion.img
              src={vehicle.image || "https://placehold.co/600x400?text=Tesla+Model"}
              alt={vehicle.model}
              className="w-full h-full object-cover"
              style={{
                x: useTransform(contentX, v => v * -1.5),
                y: useTransform(contentY, v => v * -1.5),
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
              x: useTransform(contentX, v => v * 1.5),
              y: useTransform(contentY, v => v * 1.5),
            }}
          >
            <Badge
              className={cn(
                "text-xs font-medium rounded-full px-3 py-1",
                vehicle.status === "available"
                  ? "bg-green-500/20 text-green-400 border-green-500/50"
                  : "bg-amber-500/20 text-amber-400 border-amber-500/50"
              )}
            >
              {vehicle.status === "available" ? "Available" : "Booked"}
            </Badge>
          </motion.div>
        </div>
        
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
              x: useTransform(contentX, v => v * 1.2),
              y: useTransform(contentY, v => v * 1.2),
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
              x: useTransform(contentX, v => v * 1.5),
              y: useTransform(contentY, v => v * 1.5),
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
      </Card>
    </motion.div>
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
    <div className="flex flex-col items-center text-center rounded-lg p-2 neo-pressed">
      <span className="text-lg mb-1">{icon}</span>
      <p className="font-medium text-white/90 text-sm">{value} {unit}</p>
      <p className="text-xs text-white/60">{label}</p>
    </div>
  );
}
