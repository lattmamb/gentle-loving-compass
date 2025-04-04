
import React, { useRef } from "react";
import { vehicles } from "@/data/vehicles";
import { Vehicle } from "@/types";
import VehicleCard from "./VehicleCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Vehicles</h2>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon"
              onClick={scrollLeft}
              className="hidden md:flex border-white/20 text-white hover:bg-white/10 rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={scrollRight}
              className="hidden md:flex border-white/20 text-white hover:bg-white/10 rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </Button>
          </div>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar"
        >
          {featuredVehicles.map((vehicle) => (
            <div 
              key={vehicle.id} 
              className="min-w-[320px] md:min-w-[400px] w-4/5 md:w-[400px] flex-shrink-0 snap-center"
            >
              <VehicleCard vehicle={vehicle} />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link to="/vehicles">View All Vehicles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
