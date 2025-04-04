
import React from "react";
import { Carousel, Card } from "@/components/ui/vehicle-cards-carousel";
import { vehicles } from "@/data/vehicles";
import { motion } from "framer-motion";
import { Vehicle } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

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
  const cards = vehiclesToShow.map((vehicle, index) => (
    <Card key={vehicle.id} vehicle={vehicle} index={index} />
  ));

  return (
    <div className="w-full relative overflow-hidden py-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehiclesToShow.slice(0, 6).map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Card vehicle={vehicle} index={index} />
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8 gap-2">
          <Button 
            variant="outline" 
            size="icon"
            className="h-10 w-10 rounded-full text-white border-white/20 hover:bg-white/10"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="h-10 w-10 rounded-full text-white border-white/20 hover:bg-white/10"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
