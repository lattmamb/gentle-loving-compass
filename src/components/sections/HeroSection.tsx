
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Car, MapPin } from "lucide-react";
import BackgroundBoxesDemo from "@/components/ui/background-boxes-demo";
import FoamButton from "@/components/foam/FoamButton";

const HeroSection: React.FC = () => {
  return (
    <section className="relative">
      <BackgroundBoxesDemo />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center gap-4"
      >
        <Link to="/vehicles">
          <FoamButton variant="primary" size="lg">
            <span className="flex items-center space-x-2">
              <Car className="w-5 h-5" />
              <span>Explore Vehicles</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </span>
          </FoamButton>
        </Link>
        <Link to="/dashboard">
          <FoamButton variant="secondary" size="lg">
            <span className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>My Dashboard</span>
            </span>
          </FoamButton>
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;
