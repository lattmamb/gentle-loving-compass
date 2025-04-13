
import React from "react";
import { Vehicle } from "@/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import VehicleSpecItem from "./VehicleSpecItem";

interface VehicleTabsProps {
  vehicle: Vehicle;
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}

const VehicleTabs: React.FC<VehicleTabsProps> = ({
  vehicle,
  selectedTab,
  setSelectedTab,
}) => {
  return (
    <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-12">
      <TabsList className="bg-white/5 border border-white/10">
        <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600">
          Overview
        </TabsTrigger>
        <TabsTrigger value="features" className="data-[state=active]:bg-blue-600">
          Features & Specs
        </TabsTrigger>
        <TabsTrigger value="reviews" className="data-[state=active]:bg-blue-600">
          Reviews
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview">
        <div className="backdrop-blur-xl bg-white/5 p-6 rounded-xl border border-white/10 mt-6">
          <h3 className="text-xl font-bold mb-4">About Tesla {vehicle.model}</h3>
          <p className="text-white/70 mb-4">
            The Tesla {vehicle.model} represents the cutting edge of electric vehicle technology, 
            combining exceptional range, performance, and advanced technology in a sleek package.
          </p>
          
          <h4 className="font-bold mb-2 mt-6">Key Highlights</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {vehicle.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <div className="mr-3 text-blue-400">
                  <Check size={16} />
                </div>
                <span className="text-white/80">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </TabsContent>
      
      <TabsContent value="features">
        <div className="backdrop-blur-xl bg-white/5 p-6 rounded-xl border border-white/10 mt-6">
          <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-3 border-b border-white/10 pb-2">Performance</h4>
              <VehicleSpecItem label="Acceleration 0-60 mph" value={`${vehicle.specs.acceleration} sec`} />
              <VehicleSpecItem label="Top Speed" value={`${vehicle.specs.topSpeed} mph`} />
              <VehicleSpecItem label="Range" value={`${vehicle.specs.range} miles (EPA est.)`} />
              <VehicleSpecItem label="Drive" value="Dual Motor All-Wheel Drive" />
            </div>
            
            <div>
              <h4 className="font-bold mb-3 border-b border-white/10 pb-2">Features</h4>
              <VehicleSpecItem label="Autopilot" value="Included" />
              <VehicleSpecItem label="Supercharging" value="Pay-Per-Use" />
              <VehicleSpecItem label="Warranty" value="4 years / 50,000 miles" />
              <VehicleSpecItem label="Seating" value="5 adults" />
            </div>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="reviews">
        <div className="backdrop-blur-xl bg-white/5 p-6 rounded-xl border border-white/10 mt-6 text-center">
          <h3 className="text-xl font-bold mb-2">Customer Reviews</h3>
          <p className="text-white/70">Coming soon. Be the first to review this vehicle!</p>
          <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
            Leave a Review
          </Button>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default VehicleTabs;
