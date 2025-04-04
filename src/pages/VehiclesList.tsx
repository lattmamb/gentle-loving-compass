
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VehicleCard from "@/components/VehicleCard";
import { vehicles } from "@/data/vehicles";
import { Vehicle } from "@/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Search, SlidersHorizontal } from "lucide-react";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import AIAssistant from "@/components/AIAssistant";
import VehicleHeroSection from "@/components/VehicleHeroSection";
import { Checkbox } from "@/components/ui/checkbox";
import NeoCard from "@/components/NeoCard";
import { motion } from "framer-motion";

const VehiclesList = () => {
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>(vehicles);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const vehicleTypes = Array.from(new Set(vehicles.map(v => v.type)));
  const allFeatures = Array.from(
    new Set(vehicles.flatMap(v => v.features))
  );

  useEffect(() => {
    let filtered = [...vehicles];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        v => v.model.toLowerCase().includes(query) || v.type.toLowerCase().includes(query)
      );
    }

    // Filter by price
    filtered = filtered.filter(
      v => v.price.daily >= priceRange[0] && v.price.daily <= priceRange[1]
    );

    // Filter by vehicle type
    if (selectedTypes.length > 0) {
      filtered = filtered.filter(v => selectedTypes.includes(v.type));
    }

    // Filter by features
    if (selectedFeatures.length > 0) {
      filtered = filtered.filter(v => 
        selectedFeatures.every(feature => v.features.includes(feature))
      );
    }

    setFilteredVehicles(filtered);
  }, [searchQuery, priceRange, selectedTypes, selectedFeatures]);

  const toggleType = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const toggleFeature = (feature: string) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  const resetFilters = () => {
    setSearchQuery("");
    setPriceRange([0, 1000]);
    setSelectedTypes([]);
    setSelectedFeatures([]);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <VehicleHeroSection 
        onSearchChange={setSearchQuery}
        searchValue={searchQuery}
      />
      
      <main className="pt-8 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Available Vehicles
              </h2>
              <p className="text-white/70">
                {filteredVehicles.length} vehicles available for subscription
              </p>
            </div>
            
            {/* Mobile Filter Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden neo-button border-white/10 text-white hover:bg-white/10">
                  <SlidersHorizontal size={18} className="mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] backdrop-blur-xl bg-black/90 border-white/10">
                <SheetHeader>
                  <SheetTitle className="text-white">Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterContent 
                    vehicleTypes={vehicleTypes} 
                    selectedTypes={selectedTypes} 
                    toggleType={toggleType}
                    allFeatures={allFeatures}
                    selectedFeatures={selectedFeatures}
                    toggleFeature={toggleFeature}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    resetFilters={resetFilters}
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Desktop Filter Sidebar */}
            <aside className="hidden md:block w-64 shrink-0">
              <NeoCard 
                variant="elevated"
                glow={true}
                className="sticky top-24 h-auto"
              >
                <FilterContent 
                  vehicleTypes={vehicleTypes} 
                  selectedTypes={selectedTypes} 
                  toggleType={toggleType}
                  allFeatures={allFeatures}
                  selectedFeatures={selectedFeatures}
                  toggleFeature={toggleFeature}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  resetFilters={resetFilters}
                />
              </NeoCard>
            </aside>
            
            {/* Vehicle Grid */}
            <div className="flex-1">
              {filteredVehicles.length === 0 ? (
                <NeoCard 
                  variant="pressed"
                  className="flex flex-col items-center justify-center h-64 text-center"
                >
                  <div className="text-5xl mb-4">🔍</div>
                  <h2 className="text-xl font-bold mb-2">No vehicles found</h2>
                  <p className="text-white/70 mb-4">
                    Try adjusting your search criteria to find more options.
                  </p>
                  <Button onClick={resetFilters} className="bg-blue-600 hover:bg-blue-700 neo-button">
                    Reset Filters
                  </Button>
                </NeoCard>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                >
                  {filteredVehicles.map((vehicle, index) => (
                    <motion.div
                      key={vehicle.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                      <VehicleCard vehicle={vehicle} />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <AIAssistant />
    </div>
  );
};

function FilterContent({
  vehicleTypes,
  selectedTypes,
  toggleType,
  allFeatures,
  selectedFeatures,
  toggleFeature,
  priceRange,
  setPriceRange,
  resetFilters
}: {
  vehicleTypes: string[];
  selectedTypes: string[];
  toggleType: (type: string) => void;
  allFeatures: string[];
  selectedFeatures: string[];
  toggleFeature: (feature: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  resetFilters: () => void;
}) {
  return (
    <>
      <div className="mb-6">
        <h3 className="font-medium text-lg mb-3 text-white">Price Range (Daily)</h3>
        <div className="mb-2">
          <Slider
            defaultValue={priceRange}
            min={0}
            max={1000}
            step={50}
            value={priceRange}
            onValueChange={(value) => setPriceRange(value as number[])}
            className="py-4"
          />
        </div>
        <div className="flex justify-between text-sm text-white/70">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="font-medium text-lg mb-3 text-white">Vehicle Type</h3>
        <div className="space-y-2">
          {vehicleTypes.map((type) => (
            <label key={type} className="flex items-center cursor-pointer group">
              <Checkbox
                checked={selectedTypes.includes(type)}
                onCheckedChange={() => toggleType(type)}
                className="ui-checkbox"
              />
              <span className="ml-2 text-white/80 group-hover:text-white transition-colors">{type}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="font-medium text-lg mb-3 text-white">Features</h3>
        <div className="space-y-2">
          {allFeatures.slice(0, 5).map((feature) => (
            <label key={feature} className="flex items-center cursor-pointer group">
              <Checkbox
                checked={selectedFeatures.includes(feature)}
                onCheckedChange={() => toggleFeature(feature)}
                className="ui-checkbox"
              />
              <span className="ml-2 text-white/80 group-hover:text-white transition-colors">{feature}</span>
            </label>
          ))}
        </div>
      </div>
      
      <Button 
        variant="outline" 
        onClick={resetFilters}
        className="w-full mt-4 neo-button border-white/10 text-white hover:bg-white/10"
      >
        Reset Filters
      </Button>
    </>
  );
}

export default VehiclesList;
