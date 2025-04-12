import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VehicleCard from "@/components/VehicleCard";
import { vehicles } from "@/data/vehicles";
import { Vehicle } from "@/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import AIAssistant from "@/components/AIAssistant";
import { motion } from "framer-motion";

const VehiclesList = () => {
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>(vehicles);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

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
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row justify-between mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gradient">
                Tesla Vehicles
              </h1>
              <p className="text-white/70 text-lg">
                {filteredVehicles.length} vehicles available for subscription
              </p>
            </div>
            
            <div className="flex items-center mt-4 md:mt-0 space-x-3">
              <div className="relative flex-1">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50">
                  <Search size={18} />
                </div>
                <Input
                  placeholder="Search vehicles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/5 backdrop-blur-md border-white/10 text-white w-full rounded-full"
                />
              </div>
              
              <Button
                variant="outline" 
                className="md:hidden border-white/10 text-white hover:bg-white/10 rounded-full"
                onClick={() => setIsFiltersVisible(!isFiltersVisible)}
              >
                <SlidersHorizontal size={18} className="mr-2" />
                Filters
              </Button>
            </div>
          </motion.div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Desktop Filter Sidebar */}
            <motion.aside 
              className="hidden md:block w-64 shrink-0"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="sticky top-24 neo-blur rounded-2xl p-6">
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
            </motion.aside>
            
            {/* Mobile Filters */}
            {isFiltersVisible && (
              <motion.div 
                className="md:hidden mb-6 neo-blur rounded-2xl p-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Filters</h3>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsFiltersVisible(false)}
                    className="h-8 w-8"
                  >
                    <X size={16} />
                  </Button>
                </div>
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
              </motion.div>
            )}
            
            {/* Vehicle Grid */}
            <div className="flex-1">
              {filteredVehicles.length === 0 ? (
                <motion.div 
                  className="flex flex-col items-center justify-center h-64 text-center neo-blur rounded-2xl p-6"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-5xl mb-4">🔍</div>
                  <h2 className="text-xl font-bold mb-2">No vehicles found</h2>
                  <p className="text-white/70 mb-4">
                    Try adjusting your search criteria to find more options.
                  </p>
                  <Button onClick={resetFilters} className="bg-blue-600 hover:bg-blue-700 rounded-full">
                    Reset Filters
                  </Button>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredVehicles.map((vehicle, index) => (
                    <motion.div
                      key={vehicle.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <VehicleCard vehicle={vehicle} />
                    </motion.div>
                  ))}
                </div>
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
            <label key={type} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="rounded text-blue-600 focus:ring-blue-500 border-white/20 bg-transparent"
                checked={selectedTypes.includes(type)}
                onChange={() => toggleType(type)}
              />
              <span className="ml-2 text-white/80">{type}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="font-medium text-lg mb-3 text-white">Features</h3>
        <div className="space-y-2">
          {allFeatures.slice(0, 5).map((feature) => (
            <label key={feature} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="rounded text-blue-600 focus:ring-blue-500 border-white/20 bg-transparent"
                checked={selectedFeatures.includes(feature)}
                onChange={() => toggleFeature(feature)}
              />
              <span className="ml-2 text-white/80">{feature}</span>
            </label>
          ))}
        </div>
      </div>
      
      <Button 
        variant="outline" 
        onClick={resetFilters}
        className="w-full mt-4 border-white/10 text-white hover:bg-white/10"
      >
        Reset Filters
      </Button>
    </>
  );
}

export default VehiclesList;
