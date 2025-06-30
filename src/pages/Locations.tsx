
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { illinoisLocations, transitRoutes } from "@/data/locations";
import { MapPin, Battery, Zap, Wind, Sun } from "lucide-react";
import AIAssistant from "@/components/AIAssistant";
import { motion } from "framer-motion";

const Locations = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const getEnergyIcon = (source: string) => {
    switch (source) {
      case "solar": return <Sun className="h-4 w-4 text-yellow-400" />;
      case "wind": return <Wind className="h-4 w-4 text-blue-400" />;
      case "grid": return <Zap className="h-4 w-4 text-purple-400" />;
      default: return <Battery className="h-4 w-4 text-green-400" />;
    }
  };

  const getEnergyColor = (source: string) => {
    switch (source) {
      case "solar": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50";
      case "wind": return "bg-blue-500/20 text-blue-400 border-blue-500/50";
      case "grid": return "bg-purple-500/20 text-purple-400 border-purple-500/50";
      default: return "bg-green-500/20 text-green-400 border-green-500/50";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Illinois Clean Energy Network
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover our premium charging stations and transit routes across Illinois, 
              powered by renewable energy sources including wind and solar.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6">Charging Stations</h2>
              <div className="space-y-4">
                {illinoisLocations.map((location) => (
                  <Card 
                    key={location.id} 
                    className={`backdrop-blur-xl border-white/10 cursor-pointer transition-all duration-300 ${
                      selectedLocation === location.id 
                        ? 'bg-blue-500/10 border-blue-500/30' 
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                    onClick={() => setSelectedLocation(location.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-white/90">
                            {location.name}
                          </h3>
                          <p className="text-white/70 flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {location.address}, {location.city}
                          </p>
                        </div>
                        <Badge className={getEnergyColor(location.energySource)}>
                          {getEnergyIcon(location.energySource)}
                          <span className="ml-1 capitalize">{location.energySource}</span>
                        </Badge>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-4">
                          <div>
                            <p className="text-sm text-white/60">Available</p>
                            <p className="font-medium text-green-400">
                              {location.availableSpots}/{location.totalSpots}
                            </p>
                          </div>
                          {location.fastCharging && (
                            <Badge variant="outline" className="border-yellow-500/50 text-yellow-400">
                              <Zap className="h-3 w-3 mr-1" />
                              Fast Charging
                            </Badge>
                          )}
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-white/10 text-white hover:bg-white/10"
                        >
                          Get Directions
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6">Transit Routes</h2>
              <div className="space-y-4">
                {transitRoutes.map((route) => (
                  <Card key={route.id} className="backdrop-blur-xl bg-white/5 border-white/10">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-white/90">{route.name}</CardTitle>
                      <p className="text-white/70 text-sm">{route.description}</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-white/60">Duration</p>
                          <p className="font-medium">{route.duration}</p>
                        </div>
                        <div>
                          <p className="text-sm text-white/60">Frequency</p>
                          <p className="font-medium">{route.frequency}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-sm text-white/60 mb-2">Route Stops</p>
                        <div className="flex flex-wrap gap-2">
                          {route.stops.map((stop, index) => (
                            <Badge 
                              key={index} 
                              variant="outline" 
                              className="border-white/20 text-white/80"
                            >
                              {stop}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="text-sm">
                          <span className="text-green-400 font-medium">100% Electric</span>
                          <span className="text-white/60"> • Clean Energy Powered</span>
                        </div>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          Book Route
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Interactive Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Illinois Clean Energy Network Map</h2>
            <div className="relative h-[400px] rounded-lg overflow-hidden bg-gradient-to-br from-blue-900/20 to-green-900/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">🗺️</div>
                  <h3 className="text-lg font-bold mb-2">Interactive Map Coming Soon</h3>
                  <p className="text-white/70 mb-4 max-w-md mx-auto">
                    Real-time station availability, route planning, and energy source tracking across Illinois.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Request Beta Access
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default Locations;
