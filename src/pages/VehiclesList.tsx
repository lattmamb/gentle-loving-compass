
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
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Tesla Vehicles
              </h1>
              <p className="text-white/70">
                {filteredVehicles.length} vehicles available for subscription
              </p>
            </div>
            
            <div className="flex items-center mt-4 md:mt-0">
              <div className="relative flex-1 mr-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={18} />
                <Input
                  placeholder="Search vehicles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/5 border-white/10 text-white w-full"
                />
              </div>
              
              {/* Mobile Filter Button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="md:hidden border-white/10 text-white hover:bg-white/10">
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
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Desktop Filter Sidebar */}
            <aside className="hidden md:block w-64 shrink-0">
              <div className="sticky top-24 backdrop-blur-xl bg-white/5 rounded-lg border border-white/10 p-6">
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
            </aside>
            
            {/* Vehicle Grid */}
            <div className="flex-1">
              {filteredVehicles.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-center backdrop-blur-xl bg-white/5 rounded-lg border border-white/10 p-6">
                  <div className="text-5xl mb-4">🔍</div>
                  <h2 className="text-xl font-bold mb-2">No vehicles found</h2>
                  <p className="text-white/70 mb-4">
                    Try adjusting your search criteria to find more options.
                  </p>
                  <Button onClick={resetFilters} className="bg-blue-600 hover:bg-blue-700">
                    Reset Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredVehicles.map((vehicle) => (
                    <VehicleCard key={vehicle.id} vehicle={vehicle} />
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
