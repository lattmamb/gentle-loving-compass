
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
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Vehicle Not Found</h1>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link to="/vehicles">Browse Vehicles</Link>
          </Button>
        </div>
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
          <VehicleBreadcrumbs vehicleModel={vehicle.model} />
          
          <div className="mb-12">
            <VehicleHero 
              vehicle={vehicle} 
              selectedColor={selectedColor} 
              setSelectedColor={setSelectedColor} 
            />
          </div>
          
          <VehicleTabs 
            vehicle={vehicle} 
            selectedTab={selectedTab} 
            setSelectedTab={setSelectedTab} 
          />
          
          <RelatedVehicles vehicles={relatedVehicles} />
        </div>
      </main>
      
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default VehicleDetail;
