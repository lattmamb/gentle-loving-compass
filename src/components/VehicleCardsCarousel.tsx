
import React from "react";
import { Carousel, Card } from "@/components/ui/vehicle-cards-carousel";
import { vehicles } from "@/data/vehicles";
import { motion } from "framer-motion";
import { Vehicle } from "@/types";

interface VehicleCardsCarouselProps {
  title?: string;
  subtitle?: string;
  vehiclesToShow?: Vehicle[];
}

export default function VehicleCardsCarousel({ 
  title = "Experience Tesla Electrified",
  subtitle = "Browse through our premium Tesla collection",
  vehiclesToShow = vehicles
}: VehicleCardsCarouselProps) {
  const cards = vehiclesToShow.map((vehicle, index) => (
    <Card key={vehicle.id} vehicle={vehicle} index={index} />
  ));

  return (
    <div className="w-full relative overflow-hidden py-12 md:py-20">
      {/* Background glow effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-2"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gradient-blue">
            {title}
          </h2>
          <p className="text-lg text-white/70 mt-4 max-w-2xl">
            {subtitle}
          </p>
        </motion.div>

        <Carousel items={cards} />
      </div>
    </div>
  );
}
