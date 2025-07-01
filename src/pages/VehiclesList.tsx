
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { vehicles } from "@/data/vehicles";
import { motion } from "framer-motion";
import { Search, Filter, Zap, Gauge, Route, MapPin, Battery } from "lucide-react";
import FoamCard from "@/components/foam/FoamCard";
import FoamButton from "@/components/foam/FoamButton";

const VehiclesList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const filteredVehicles = vehicles
    .filter(vehicle => 
      vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedType === "all" || vehicle.type.toLowerCase() === selectedType.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price":
          return a.price.monthly - b.price.monthly;
        case "range":
          return b.specs.range - a.specs.range;
        case "name":
        default:
          return a.model.localeCompare(b.model);
      }
    });

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-light mb-6 text-gradient">
              Fleet Collection
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
              Discover our revolutionary electric vehicle subscription fleet, each equipped with cutting-edge technology and autonomous-ready features.
            </p>
          </motion.div>

          {/* Advanced Filters */}
          <FoamCard className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                <input
                  type="text"
                  placeholder="Search vehicles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500/50 outline-none text-white placeholder-white/50"
                />
              </div>
              
              <div className="flex items-center space-x-4">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500/50 outline-none text-white"
                >
                  <option value="all">All Types</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="truck">Truck</option>
                  <option value="sports">Sports</option>
                </select>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500/50 outline-none text-white"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="range">Sort by Range</option>
                </select>
              </div>
            </div>
          </FoamCard>

          {/* Vehicle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FoamCard variant="interactive" className="h-full">
                  <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.model}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        vehicle.status === 'available' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
                      }`}>
                        {vehicle.status === 'available' ? 'Available Now' : 'Coming Soon'}
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                        <MapPin className="w-3 h-3 text-white" />
                        <span className="text-xs text-white">{vehicle.location?.split(' ').slice(0, 2).join(' ')}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-medium text-gradient mb-1">
                        Tesla {vehicle.model}
                      </h3>
                      <p className="text-white/60">{vehicle.type}</p>
                    </div>
                    
                    {/* Specs */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="foam-block p-2 text-center">
                        <Route className="w-4 h-4 mx-auto mb-1 text-blue-400" />
                        <div className="text-sm font-medium">{vehicle.specs.range}</div>
                        <div className="text-xs text-white/50">Range</div>
                      </div>
                      <div className="foam-block p-2 text-center">
                        <Zap className="w-4 h-4 mx-auto mb-1 text-yellow-400" />
                        <div className="text-sm font-medium">{vehicle.specs.acceleration}s</div>
                        <div className="text-xs text-white/50">0-60</div>
                      </div>
                      <div className="foam-block p-2 text-center">
                        <Gauge className="w-4 h-4 mx-auto mb-1 text-green-400" />
                        <div className="text-sm font-medium">{vehicle.specs.topSpeed}</div>
                        <div className="text-xs text-white/50">Top Speed</div>
                      </div>
                    </div>
                    
                    {/* Pricing */}
                    <div className="foam-block p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-sm text-white/60">Starting at</div>
                          <div className="text-lg font-light text-gradient">
                            ${vehicle.price.daily}/day
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-white/60">Monthly</div>
                          <div className="text-lg font-light text-gradient">
                            ${vehicle.price.monthly}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Carbon Savings */}
                    {vehicle.carbonSavings && (
                      <div className="flex items-center space-x-2 text-sm text-green-400">
                        <Battery className="w-4 h-4" />
                        <span>{vehicle.carbonSavings} kg CO₂ saved annually</span>
                      </div>
                    )}
                    
                    {/* Actions */}
                    <div className="flex space-x-3">
                      <Link to={`/vehicles/${vehicle.id}`} className="flex-1">
                        <FoamButton variant="primary" className="w-full">
                          View Details
                        </FoamButton>
                      </Link>
                      <Link to={`/book/${vehicle.id}`}>
                        <FoamButton variant="secondary">
                          Subscribe
                        </FoamButton>
                      </Link>
                    </div>
                  </div>
                </FoamCard>
              </motion.div>
            ))}
          </div>
          
          {filteredVehicles.length === 0 && (
            <FoamCard className="text-center py-12">
              <h3 className="text-2xl font-light text-gradient mb-4">No Vehicles Found</h3>
              <p className="text-white/60 mb-6">
                Try adjusting your search criteria or explore our full collection.
              </p>
              <FoamButton 
                variant="primary" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedType("all");
                }}
              >
                Reset Filters
              </FoamButton>
            </FoamCard>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VehiclesList;
