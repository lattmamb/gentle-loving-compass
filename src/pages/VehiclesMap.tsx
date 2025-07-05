import React, { useState } from "react";
import UnifiedHeader from "@/components/ui/unified-header";
import Footer from "@/components/Footer";
import { UnityFleetMap } from "@/components/map/UnityFleetMap";
import { MapFilters } from "@/components/map/MapFilters";
import { Button } from "@/components/ui/button";
import { List, Map } from "lucide-react";
import { Link } from "react-router-dom";

const VehiclesMap = () => {
  const [filters, setFilters] = useState({
    vehicles: true,
    hubs: true,
    riders: true,
    routes: true
  });

  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <UnifiedHeader />
      
      <main className="pt-16 h-screen relative">
        {/* Header Controls */}
        <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-start">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-white">Live Fleet Map</h1>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" asChild>
                <Link to="/vehicles">
                  <List className="w-4 h-4 mr-2" />
                  List View
                </Link>
              </Button>
              <Button size="sm">
                <Map className="w-4 h-4 mr-2" />
                Map View
              </Button>
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="h-full w-full">
          <UnityFleetMap 
            className="w-full h-full"
            showFilters={true}
            onVehicleSelect={setSelectedVehicle}
          />
        </div>

        {/* Real-time Stats Overlay */}
        <div className="absolute bottom-4 left-4 z-20">
          <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white min-w-64">
            <h3 className="font-semibold mb-3">Live Fleet Statistics</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Available Vehicles:</span>
                <span className="text-green-400 font-medium">12</span>
              </div>
              <div className="flex justify-between">
                <span>In Transit:</span>
                <span className="text-blue-400 font-medium">5</span>
              </div>
              <div className="flex justify-between">
                <span>Active Riders:</span>
                <span className="text-purple-400 font-medium">8</span>
              </div>
              <div className="flex justify-between">
                <span>Charging Hubs:</span>
                <span className="text-orange-400 font-medium">5</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VehiclesMap;