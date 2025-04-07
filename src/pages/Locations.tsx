
import React, { useState, useEffect, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CardDemo from "@/components/ui/cards-demo-1";
import { motion, useMotionValue, useTransform } from "framer-motion";
import NeoCard from "@/components/NeoCard";
import { vehicles } from "@/data/vehicles";
import { cn } from "@/lib/utils";
import AIAssistant from "@/components/AIAssistant";
import VehicleCardsCarousel from "@/components/VehicleCardsCarousel";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import ParticleAnimation from "@/components/ParticleAnimation";
import NeomorphicCard3D from "@/components/NeomorphicCard3D";

interface Location {
  id: string;
  name: string;
  address: string;
  image: string;
  hoverImage: string;
  availableCars: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}

const locations: Location[] = [
  {
    id: "loc1",
    name: "San Francisco",
    address: "123 Market St, San Francisco, CA",
    image: "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    hoverImage: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif",
    availableCars: 15,
    coordinates: {
      lat: 37.7749,
      lng: -122.4194
    }
  },
  {
    id: "loc2",
    name: "Los Angeles",
    address: "456 Hollywood Blvd, Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?q=80&w=1770&auto=format&fit=crop",
    hoverImage: "https://i.giphy.com/media/3o7aTuy3b4TwuUSUzm/giphy.gif",
    availableCars: 22,
    coordinates: {
      lat: 34.0522,
      lng: -118.2437
    }
  },
  {
    id: "loc3",
    name: "New York",
    address: "789 Broadway, New York, NY",
    image: "https://images.unsplash.com/photo-1522083165195-3424ed129620?q=80&w=1760&auto=format&fit=crop",
    hoverImage: "https://i.giphy.com/media/l0HlQ7LRalQqdWfao/giphy.gif",
    availableCars: 18,
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  {
    id: "loc4",
    name: "Seattle",
    address: "321 Pike St, Seattle, WA",
    image: "https://images.unsplash.com/photo-1535581652167-3a26c90bbf86?q=80&w=1587&auto=format&fit=crop",
    hoverImage: "https://i.giphy.com/media/3o7TKtsBMu4xzIV808/giphy.gif",
    availableCars: 12,
    coordinates: {
      lat: 47.6062,
      lng: -122.3321
    }
  },
  {
    id: "loc5",
    name: "Miami",
    address: "555 Ocean Dr, Miami, FL",
    image: "https://images.unsplash.com/photo-1589083130544-0d6a2926e519?q=80&w=1587&auto=format&fit=crop",
    hoverImage: "https://i.giphy.com/media/l41YeHXBZxfl1aXES/giphy.gif",
    availableCars: 20,
    coordinates: {
      lat: 25.7617,
      lng: -80.1918
    }
  },
  {
    id: "loc6",
    name: "Austin",
    address: "678 Tesla Rd, Austin, TX",
    image: "https://images.unsplash.com/photo-1545503532-2d854c780ff7?q=80&w=1470&auto=format&fit=crop",
    hoverImage: "https://i.giphy.com/media/3o7TKoQ4zqs7xV4nL2/giphy.gif",
    availableCars: 25,
    coordinates: {
      lat: 30.2672,
      lng: -97.7431
    }
  }
];

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Track mouse movement for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // Set first location as default selected
    if (locations.length > 0 && !selectedLocation) {
      setSelectedLocation(locations[0]);
    }
  }, []);

  // Create a simple map visualization using coordinates
  const MapVisualization = useMemo(() => {
    if (!selectedLocation) return null;
    
    return (
      <div className="w-full h-80 relative overflow-hidden rounded-xl neo-elevated">
        {/* Simple visualization using coordinates as positioning */}
        <div 
          className="absolute inset-0 bg-[#141821] overflow-hidden"
          style={{
            backgroundImage: `url(${selectedLocation.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Grid lines */}
          <div className="absolute inset-0">
            {Array.from({ length: 10 }).map((_, i) => (
              <div 
                key={`h-line-${i}`}
                className="absolute h-px bg-white/10 w-full"
                style={{ top: `${i * 10}%` }}
              />
            ))}
            
            {Array.from({ length: 10 }).map((_, i) => (
              <div 
                key={`v-line-${i}`}
                className="absolute w-px bg-white/10 h-full"
                style={{ left: `${i * 10}%` }}
              />
            ))}
          </div>
          
          {/* Location marker */}
          <motion.div 
            className="absolute"
            style={{ 
              left: '50%', 
              top: '50%',
              x: '-50%',
              y: '-50%'
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: 1 
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-blue-500/20 animate-pulse" />
              <div className="absolute -inset-2 rounded-full bg-blue-500/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <MapPin size={30} className="text-blue-500" />
            </div>
          </motion.div>
          
          {/* Location name */}
          <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md p-3 rounded-lg">
            <h3 className="font-bold text-white">{selectedLocation.name}</h3>
            <p className="text-sm text-white/80">{selectedLocation.address}</p>
          </div>
        </div>
      </div>
    );
  }, [selectedLocation]);

  return (
    <AnimatedBackground intensity="low">
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-24 pb-16">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <ParticleAnimation count={30} speed="slow" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
                style={{
                  x: mousePosition.x * -15,
                  y: mousePosition.y * -15,
                }}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-gradient-blue mb-4">
                  Charging Locations
                </h1>
                <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
                  Find Tesla charging stations and service centers near you
                </p>
              </motion.div>
            </div>
          </section>
          
          {/* Locations Grid */}
          <section className="py-10 px-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gradient-blue">Available Locations</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {locations.map((location, index) => (
                  <motion.div
                    key={location.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <NeomorphicCard3D
                      maxRotation={10}
                      className="overflow-hidden p-0 cursor-pointer h-60"
                      onClick={() => setSelectedLocation(location)}
                    >
                      <div
                        className={cn(
                          "group w-full h-full overflow-hidden relative flex flex-col justify-end p-4",
                          `bg-[url(${location.image})] bg-cover bg-center`,
                          "before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/80 before:to-transparent before:z-10",
                          selectedLocation?.id === location.id ? "ring-2 ring-blue-500" : ""
                        )}
                      >
                        <div className="text relative z-20">
                          <h3 className="font-bold text-xl text-white">{location.name}</h3>
                          <p className="font-normal text-sm text-white/80 my-1">{location.address}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-sm text-white/70">{location.availableCars} vehicles available</span>
                            <Button variant="outline" size="sm" className="neo-button bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20">
                              Details
                            </Button>
                          </div>
                        </div>
                        
                        {/* Overlay animation on hover */}
                        <motion.div 
                          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            backgroundImage: `url(${location.hoverImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        >
                          <div className="absolute inset-0 bg-black/50" />
                        </motion.div>
                      </div>
                    </NeomorphicCard3D>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Selected Location Details */}
          {selectedLocation && (
            <section className="py-16 px-6 bg-black/20">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="w-full md:w-1/2">
                    <NeoCard variant="elevated" glow={true} glowColor="blue" hover3D={true} className="h-full">
                      <motion.h3 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-2xl font-bold text-gradient-blue mb-4"
                      >
                        {selectedLocation.name} Center
                      </motion.h3>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                      >
                        <p className="text-white/80">{selectedLocation.address}</p>
                        
                        <div className="grid grid-cols-2 gap-4 py-4">
                          <div className="neo-pressed rounded-lg p-4 text-center">
                            <p className="text-sm text-white/60">Available Cars</p>
                            <p className="text-2xl font-bold text-white">{selectedLocation.availableCars}</p>
                          </div>
                          <div className="neo-pressed rounded-lg p-4 text-center">
                            <p className="text-sm text-white/60">Chargers</p>
                            <p className="text-2xl font-bold text-white">12</p>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <h4 className="text-lg font-semibold text-white mb-2">Hours of Operation</h4>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <p className="text-white/60">Monday - Friday</p>
                              <p className="text-white">9:00 AM - 9:00 PM</p>
                            </div>
                            <div>
                              <p className="text-white/60">Saturday - Sunday</p>
                              <p className="text-white">10:00 AM - 7:00 PM</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="pt-4">
                          <Button className="w-full bg-blue-600 hover:bg-blue-700 neo-button">
                            Book a Service <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </motion.div>
                    </NeoCard>
                  </div>
                  
                  <div className="w-full md:w-1/2">
                    {/* Map Visualization */}
                    {MapVisualization}
                    
                    <div className="mt-6">
                      <h4 className="text-xl font-bold text-white mb-4">Available Vehicles</h4>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {vehicles.slice(0, 4).map((vehicle, idx) => (
                          <motion.div
                            key={vehicle.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                          >
                            <NeoCard variant="pressed" className="p-3 flex gap-3" hover3D={true} maxRotation={5}>
                              <div className="w-16 h-16 rounded overflow-hidden">
                                <img src={vehicle.image} alt={vehicle.model} className="w-full h-full object-cover" />
                              </div>
                              <div className="flex-1">
                                <h5 className="font-medium text-white">Tesla {vehicle.model}</h5>
                                <p className="text-xs text-white/60">{vehicle.specs.range} mi range</p>
                              </div>
                            </NeoCard>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          
          {/* Demo Card Section */}
          <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gradient-blue">Featured Locations</h2>
              
              <div className="flex flex-wrap gap-6 justify-center">
                <CardDemo />
                <CardDemo />
                <CardDemo />
              </div>
            </div>
          </section>
          
          {/* Available vehicles carousel */}
          <VehicleCardsCarousel 
            title="Vehicles Near You"
            subtitle="Browse available Tesla vehicles at your selected location"
            vehiclesToShow={vehicles.filter(v => v.status === "available").slice(0, 4)}
          />
        </main>
        
        <Footer />
        <AIAssistant />
      </div>
    </AnimatedBackground>
  );
}
