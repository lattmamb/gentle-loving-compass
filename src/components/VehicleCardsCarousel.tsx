
import React, { useState } from "react";
import { Carousel, Card } from "@/components/ui/vehicle-cards-carousel";
import { vehicles } from "@/data/vehicles";
import { motion, useAnimation } from "framer-motion";
import { Vehicle } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useSwipeable } from "react-swipeable";

interface VehicleCardsCarouselProps {
  title?: string;
  subtitle?: string;
  vehiclesToShow?: Vehicle[];
}

export default function VehicleCardsCarousel({ 
  title = "Experience Tesla Electrified",
  subtitle = "Browse through our premium Tesla collection with flexible subscription options",
  vehiclesToShow = vehicles
}: VehicleCardsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const maxIndex = Math.ceil(vehiclesToShow.length / 3) - 1;
  
  const goToNext = () => {
    if (currentIndex < maxIndex) {
      controls.start({ x: "-100%", transition: { duration: 0.5 } })
        .then(() => {
          setCurrentIndex((prev) => prev + 1);
          controls.set({ x: "100%" });
          controls.start({ x: 0, transition: { duration: 0.5 } });
        });
    }
  };
  
  const goToPrev = () => {
    if (currentIndex > 0) {
      controls.start({ x: "100%", transition: { duration: 0.5 } })
        .then(() => {
          setCurrentIndex((prev) => prev - 1);
          controls.set({ x: "-100%" });
          controls.start({ x: 0, transition: { duration: 0.5 } });
        });
    }
  };
  
  const handlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrev(),
    preventScrollOnSwipe: true,
    trackMouse: true
  });
  
  const cards = vehiclesToShow.map((vehicle, index) => (
    <Card 
      key={vehicle.id} 
      vehicle={vehicle} 
      index={index}
      onSwipe={(direction) => {
        if (direction === "left") goToNext();
        if (direction === "right") goToPrev();
      }}
    />
  ));

  const startIndex = currentIndex * 3;
  const visibleVehicles = vehiclesToShow.slice(startIndex, startIndex + 6);

  return (
    <div className="w-full relative overflow-hidden py-8" {...handlers}>
      {/* Dark blue background with subtle gradients */}
      <div className="absolute inset-0 bg-[#11151e] z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent opacity-30" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400">
            {title}
          </h2>
          <p className="text-lg text-white/70 mt-2 max-w-2xl">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visibleVehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card 
                vehicle={vehicle} 
                index={index}
                onSwipe={(direction) => {
                  if (direction === "left") goToNext();
                  if (direction === "right") goToPrev();
                }} 
              />
            </motion.div>
          ))}
        </motion.div>
        
        <div className="flex justify-center mt-8 gap-2">
          <Button 
            variant="outline" 
            size="icon"
            onClick={goToPrev}
            disabled={currentIndex === 0}
            className="h-10 w-10 rounded-full text-white border-white/20 hover:bg-white/10 disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            className="h-10 w-10 rounded-full text-white border-white/20 hover:bg-white/10 disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Mobile swipe indicators */}
        <div className="mt-4 text-center text-white/50 text-xs block md:hidden">
          Swipe left or right to navigate
        </div>
      </div>
    </div>
  );
}
