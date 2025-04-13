
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { vehicles } from "@/data/vehicles";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import AIAssistant from "@/components/AIAssistant";
import { motion } from "framer-motion";
import { useVehicleFilters } from "@/hooks/useVehicleFilters";
import SearchBar from "@/components/vehicles/SearchBar";
import FilterContent from "@/components/vehicles/FilterContent";
import VehicleGrid from "@/components/vehicles/VehicleGrid";

const VehiclesList = () => {
  const {
    filteredVehicles,
    searchQuery,
    setSearchQuery,
    priceRange,
    setPriceRange,
    selectedTypes,
    selectedFeatures,
    isFiltersVisible,
    vehicleTypes,
    allFeatures,
    toggleType,
    toggleFeature,
    resetFilters,
    toggleFiltersVisibility
  } = useVehicleFilters(vehicles);

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
            
            <SearchBar 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              toggleFilters={toggleFiltersVisibility}
            />
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
                  isMobile={true}
                  onClose={toggleFiltersVisibility}
                />
              </motion.div>
            )}
            
            {/* Vehicle Grid */}
            <div className="flex-1">
              <VehicleGrid 
                vehicles={filteredVehicles}
                resetFilters={resetFilters}
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default VehiclesList;
