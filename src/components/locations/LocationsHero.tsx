
import React from "react";
import { motion } from "framer-motion";
import ParticleAnimation from "@/components/ParticleAnimation";

interface LocationsHeroProps {
  mousePosition: {
    x: number;
    y: number;
  };
}

const LocationsHero = ({ mousePosition }: LocationsHeroProps) => {
  return (
    <section className="relative py-20 overflow-hidden">
      <ParticleAnimation count={30} speed="slow" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
          style={{
            x: mousePosition.x * -15,
            y: mousePosition.y * -15,
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gradient-blue mb-4">
            Charging Locations
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Find Tesla charging stations and service centers near you
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsHero;
