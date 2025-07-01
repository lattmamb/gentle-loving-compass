
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import VehicleShowcase from "@/components/automotive/VehicleShowcase";
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
        
        <VehicleShowcase 
          vehicles={vehicles} 
          onVehicleSelect={handleVehicleSelect}
        />
      </div>
    </section>
  );
};

export default VehicleShowcaseSection;
