
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CardDemo from "@/components/ui/cards-demo-1";
import AnimatedBackground from "@/components/AnimatedBackground";
import AIAssistant from "@/components/AIAssistant";
import VehicleCardsCarousel from "@/components/VehicleCardsCarousel";
import { vehicles } from "@/data/vehicles";
import { Location } from "@/types/locations";
import LocationsHero from "@/components/locations/LocationsHero";
import LocationsGrid from "@/components/locations/LocationsGrid";
import LocationDetails from "@/components/locations/LocationDetails";

// Location data
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

  return (
    <AnimatedBackground intensity="low">
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-24 pb-16">
          {/* Hero Section */}
          <LocationsHero mousePosition={mousePosition} />
          
          {/* Locations Grid */}
          <LocationsGrid 
            locations={locations} 
            selectedLocation={selectedLocation} 
            onSelectLocation={setSelectedLocation}
          />
          
          {/* Selected Location Details */}
          {selectedLocation && (
            <LocationDetails location={selectedLocation} vehicles={vehicles} />
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
