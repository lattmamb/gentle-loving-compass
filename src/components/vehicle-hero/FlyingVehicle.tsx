
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface FlyingVehicleProps {
  mousePosition: { x: number; y: number };
}

export default function FlyingVehicle({ mousePosition }: FlyingVehicleProps) {
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Images for the carousel
  const vehicles = [
    "/flying-car.png",  // The user will need to upload this image
    "/unity-fleet.webp"
  ];

  // Auto-rotate the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % vehicles.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [vehicles.length]);

  // Scale factor for vehicles based on screen size
  const vehicleScale = isMobile ? 0.8 : 1;
  
  return (
    <motion.div 
      className="relative w-full h-[300px] md:h-[400px] mt-10 md:mt-20 perspective-2000 transform-style-3d"
      initial={{ opacity: 0, y: 20, scale: 0.9, z: -50 }}
      animate={{ opacity: 1, y: 0, scale: 1, z: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      <Carousel className="w-full">
        <CarouselContent>
          {vehicles.map((vehicle, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <motion.div 
                className="absolute inset-0 flex justify-center transform-style-3d"
                style={{
                  transformStyle: "preserve-3d",
                  rotateX: mousePosition.y * 10,
                  rotateY: mousePosition.x * 10,
                  scale: vehicleScale,
                  opacity: index === currentIndex ? 1 : 0,
                  pointerEvents: index === currentIndex ? 'auto' : 'none',
                  zIndex: index === currentIndex ? 10 : 0,
                }}
                animate={{ 
                  y: [0, -15, 0],
                  rotateZ: [0, -1, 0, 1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img 
                  src={vehicle} 
                  alt={`Electric Vehicle ${index + 1}`}
                  className="h-full object-contain"
                  style={{ 
                    filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.5))",
                    transformStyle: "preserve-3d",
                    maxHeight: "100%",
                  }}
                />
                
                {/* Realistic shadow reflection */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-12 w-3/4 bg-gradient-radial from-black/30 to-transparent opacity-50 blur-xl rounded-full"></div>
                
                {/* Animated glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.8, 1.1, 0.8],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="absolute -bottom-2 left-0 right-0 flex justify-center gap-2 z-20">
          {vehicles.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-blue-500 scale-125' : 'bg-gray-400/50'
              }`}
              aria-label={`View vehicle ${idx + 1}`}
            />
          ))}
        </div>
      </Carousel>

      {/* Navigation arrows for desktop */}
      {!isMobile && (
        <>
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + vehicles.length) % vehicles.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white rounded-full p-2 backdrop-blur-sm z-20 hover:bg-black/50 transition-colors"
            aria-label="Previous vehicle"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % vehicles.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white rounded-full p-2 backdrop-blur-sm z-20 hover:bg-black/50 transition-colors"
            aria-label="Next vehicle"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}
    </motion.div>
  );
}
