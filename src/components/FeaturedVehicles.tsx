
import React, { useRef } from "react";
import { vehicles } from "@/data/vehicles";
import { Vehicle } from "@/types";
import VehicleCard from "./VehicleCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, CarFront, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedVehicles() {
  // Ensure the Model 3 is prominently featured alongside Model S Plaid
  const modelSPlaid = vehicles.find(v => v.id === "model-s");
  const model3 = vehicles.find(v => v.id === "model-3");
  const otherVehicles = vehicles.filter(v => v.id !== "model-s" && v.id !== "model-3").slice(0, 2);
  
  // Arrange featured vehicles with Model S Plaid first, then Model 3, then others
  const featuredVehicles: Vehicle[] = [];
  
  if (modelSPlaid) featuredVehicles.push(modelSPlaid);
  if (model3) featuredVehicles.push(model3);
  featuredVehicles.push(...otherVehicles);
  
  // If somehow the main vehicles aren't found, use first 4 vehicles
  if (featuredVehicles.length < 2) {
    featuredVehicles.push(...vehicles.slice(0, 4 - featuredVehicles.length));
  }
  
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
              {modelSPlaid && (
                <span className="bg-blue-500/20 text-blue-400 text-sm px-2 py-1 rounded-full flex items-center">
                  <Zap size={12} className="mr-1" /> New Plaid
                </span>
              )}
              {model3 && (
                <span className="bg-red-500/20 text-red-400 text-sm px-2 py-1 rounded-full flex items-center">
                  <Zap size={12} className="mr-1" /> Model 3
                </span>
              )}
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
          {featuredVehicles.map((vehicle, index) => (
            <div 
              key={vehicle.id} 
              className={`min-w-[320px] md:min-w-[400px] w-4/5 md:w-[400px] flex-shrink-0 snap-center ${
                vehicle.model.includes("Plaid") ? "relative z-10 transform -rotate-1" : ""
              } ${
                vehicle.id === "model-3" ? "relative z-10 transform rotate-1" : ""
              }`}
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
