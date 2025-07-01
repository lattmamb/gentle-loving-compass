
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { vehicles } from "@/data/vehicles";
import { Button } from "@/components/ui/button";
import { ColorVariant } from "@/types";
import AIAssistant from "@/components/AIAssistant";
import VehicleHero from "@/components/vehicles/VehicleHero";
import VehicleBreadcrumbs from "@/components/vehicles/VehicleBreadcrumbs";
import VehicleTabs from "@/components/vehicles/VehicleTabs";
import RelatedVehicles from "@/components/vehicles/RelatedVehicles";
import { motion } from "framer-motion";

const VehicleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const vehicle = vehicles.find(v => v.id === id);
  const [selectedTab, setSelectedTab] = useState("overview");
  const [selectedColor, setSelectedColor] = useState<ColorVariant>(
    vehicle?.colorVariants[0] || { name: "", color: "", image: "" }
  );

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <motion.div 
          className="text-center luxury-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold mb-4 text-gradient">Vehicle Not Found</h1>
          <p className="text-white/70 mb-6">The vehicle you're looking for doesn't exist or has been removed.</p>
          <Button asChild className="tesla-button">
            <Link to="/vehicles">Browse Vehicles</Link>
          </Button>
        </motion.div>
      </div>
    );
  }

  const relatedVehicles = vehicles
    .filter(v => v.id !== vehicle.id && v.type === vehicle.type)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <VehicleBreadcrumbs vehicleModel={vehicle.model} />
            
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <VehicleHero 
                vehicle={vehicle} 
                selectedColor={selectedColor} 
                setSelectedColor={setSelectedColor} 
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <VehicleTabs 
                vehicle={vehicle} 
                selectedTab={selectedTab} 
                setSelectedTab={setSelectedTab} 
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <RelatedVehicles vehicles={relatedVehicles} />
            </motion.div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default VehicleDetail;
