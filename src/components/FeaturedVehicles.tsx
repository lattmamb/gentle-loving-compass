
import React, { useRef } from "react";
import { vehicles } from "@/data/vehicles";
import { Vehicle } from "@/types";
import VehicleCard from "./VehicleCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, CarFront } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedVehicles() {
  const featuredVehicles: Vehicle[] = vehicles.slice(0, 4);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };
  
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  
  return (
    <section className="py-28 px-6 relative">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-blue-900/5 to-black/20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
              <CarFront className="text-blue-400" />
              <span>Featured Vehicles</span>
            </h2>
            <p className="text-white/60 mt-2">Experience the best of electric transportation</p>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon"
              onClick={scrollLeft}
              className="hidden md:flex border-white/20 text-white hover:bg-white/10 rounded-full"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={scrollRight}
              className="hidden md:flex border-white/20 text-white hover:bg-white/10 rounded-full"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {featuredVehicles.map((vehicle) => (
            <div 
              key={vehicle.id} 
              className="min-w-[320px] md:min-w-[400px] w-4/5 md:w-[400px] flex-shrink-0 snap-center"
            >
              <VehicleCard vehicle={vehicle} />
            </div>
          ))}
        </motion.div>
        
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button asChild className="bg-blue-600 hover:bg-blue-700 rounded-full px-8">
            <Link to="/vehicles">View All Vehicles</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
