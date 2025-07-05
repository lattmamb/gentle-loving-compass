
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { EnhancedVehicleCard } from "@/components/ui/enhanced-vehicle-card";
import { vehicles } from "@/data/vehicles";

const VehicleShowcaseSection: React.FC = () => {
  const navigate = useNavigate();

  const handleVehicleSelect = (vehicle: any) => {
    navigate(`/vehicles/${vehicle.id}`);
  };

  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-6 text-gradient">
            Next-Gen Fleet
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
            Automotive excellence reimagined for the subscription economy. Every vehicle equipped for the autonomous future.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <EnhancedVehicleCard
                vehicle={vehicle}
                variant="featured"
                showRideshareFeatures={true}
                onRent={() => handleVehicleSelect(vehicle)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleShowcaseSection;
