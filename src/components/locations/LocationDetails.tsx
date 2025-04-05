
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import NeoCard from "@/components/NeoCard";
import { Button } from "@/components/ui/button";
import MapVisualization from "@/components/locations/MapVisualization";
import { Location } from "@/types/locations";
import { Vehicle } from "@/types";

interface LocationDetailsProps {
  location: Location;
  vehicles: Vehicle[];
}

const LocationDetails = ({ location, vehicles }: LocationDetailsProps) => {
  return (
    <section className="py-16 px-6 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2">
            <NeoCard variant="elevated" glow={true} glowColor="blue" hover3D={true} className="h-full">
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold text-gradient-blue mb-4"
              >
                {location.name} Center
              </motion.h3>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <p className="text-white/80">{location.address}</p>
                
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="neo-pressed rounded-lg p-4 text-center">
                    <p className="text-sm text-white/60">Available Cars</p>
                    <p className="text-2xl font-bold text-white">{location.availableCars}</p>
                  </div>
                  <div className="neo-pressed rounded-lg p-4 text-center">
                    <p className="text-sm text-white/60">Chargers</p>
                    <p className="text-2xl font-bold text-white">12</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Hours of Operation</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-white/60">Monday - Friday</p>
                      <p className="text-white">9:00 AM - 9:00 PM</p>
                    </div>
                    <div>
                      <p className="text-white/60">Saturday - Sunday</p>
                      <p className="text-white">10:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 neo-button">
                    Book a Service <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </NeoCard>
          </div>
          
          <div className="w-full md:w-1/2">
            {/* Map Visualization */}
            <MapVisualization location={location} />
            
            <div className="mt-6">
              <h4 className="text-xl font-bold text-white mb-4">Available Vehicles</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {vehicles.slice(0, 4).map((vehicle, idx) => (
                  <motion.div
                    key={vehicle.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                  >
                    <NeoCard variant="pressed" className="p-3 flex gap-3" hover3D={true} maxRotation={5}>
                      <div className="w-16 h-16 rounded overflow-hidden">
                        <img src={vehicle.image} alt={vehicle.model} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium text-white">Tesla {vehicle.model}</h5>
                        <p className="text-xs text-white/60">{vehicle.specs.range} mi range</p>
                      </div>
                    </NeoCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationDetails;
