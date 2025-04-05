
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BatteryCharging, Clock, Coffee, Map, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface ChargingHubProps {
  name: string;
  location: string;
  image: string;
  stationCount: number;
  chargingSpeed: string;
  amenities: string[];
  status: "operational" | "coming-soon";
  coordinates: {
    lat: number;
    lng: number;
  };
}

const chargingHubs: ChargingHubProps[] = [
  {
    name: "Taylorville Hub",
    location: "1200 Main Street, Taylorville, IL",
    image: "https://images.unsplash.com/photo-1593941707882-a5bfb6f5a70c?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stationCount: 6,
    chargingSpeed: "250kW DC Fast Charging",
    amenities: ["Lounge", "Coffee Bar", "Wi-Fi", "Restrooms"],
    status: "operational",
    coordinates: {
      lat: 39.548401,
      lng: -89.294544
    }
  },
  {
    name: "Pana Energy Center",
    location: "456 Oak Drive, Pana, IL",
    image: "https://images.unsplash.com/photo-1558389158-f468349e733a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stationCount: 4,
    chargingSpeed: "150kW DC Fast Charging",
    amenities: ["Workspace", "Vending Machines", "Wi-Fi"],
    status: "operational",
    coordinates: {
      lat: 39.388127,
      lng: -89.080109
    }
  },
  {
    name: "Decatur Supercharger",
    location: "789 Energy Way, Decatur, IL",
    image: "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stationCount: 8,
    chargingSpeed: "350kW Ultra-Fast Charging",
    amenities: ["Lounge", "Café", "Workspace", "Restrooms", "Shop"],
    status: "coming-soon",
    coordinates: {
      lat: 39.840262,
      lng: -88.954270
    }
  }
];

const ChargingHubCard = ({ hub }: { hub: ChargingHubProps }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7 }}
    >
      <Card className="overflow-hidden h-full border-white/10 bg-white/5 backdrop-blur">
        <div className="relative h-48">
          <img 
            src={hub.image} 
            alt={hub.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4">
            <Badge className={hub.status === "operational" ? "bg-green-500/80" : "bg-amber-500/80"}>
              {hub.status === "operational" ? "Operational" : "Coming Soon"}
            </Badge>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-xl font-bold text-white">{hub.name}</h3>
            <div className="flex items-center text-white/80 text-sm">
              <Map size={14} className="mr-1" />
              {hub.location}
            </div>
          </div>
        </div>
        
        <CardHeader className="pb-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <BatteryCharging size={18} className="text-green-400 mr-2" />
              <span className="text-white/90">{hub.stationCount} Stations</span>
            </div>
            <div className="flex items-center">
              <Zap size={18} className="text-blue-400 mr-2" />
              <span className="text-white/90">{hub.chargingSpeed}</span>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="mt-2">
            <div className="text-sm text-white/70 mb-1">Amenities:</div>
            <div className="flex flex-wrap gap-2">
              {hub.amenities.map((amenity, index) => (
                <Badge key={index} variant="outline" className="text-white/80 border-white/20">
                  {amenity}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
        
        <CardFooter>
          <Button asChild variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
            <Link to={`/charging-hubs/${hub.name.toLowerCase().replace(/\s+/g, '-')}`}>
              View Details
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default function ChargingHubsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  
  return (
    <section ref={sectionRef} className="py-24 px-6 relative overflow-hidden" id="charging-hubs">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black z-0"></div>
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
            backgroundSize: "120% 120%"
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 font-semibold uppercase tracking-wider text-sm">
            Charging Infrastructure
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Unity Link Charging Hubs
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Our strategic charging hub network combines fast EV charging with community spaces,
            powered by renewable energy and smart infrastructure.
          </p>
        </motion.div>

        {/* Key features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { 
              icon: <Zap size={24} />, 
              title: "Fast Charging", 
              description: "Up to 350kW charging speeds to get you back on the road quickly" 
            },
            { 
              icon: <Coffee size={24} />, 
              title: "Lounge Areas", 
              description: "Comfortable spaces to work, relax, or meet while your vehicle charges" 
            },
            { 
              icon: <Clock size={24} />, 
              title: "24/7 Access", 
              description: "Round-the-clock availability for all your charging needs" 
            },
            { 
              icon: <BatteryCharging size={24} />, 
              title: "Solar Powered", 
              description: "Sustainable energy from our SPEC solar installations" 
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur p-6 rounded-lg border border-white/10 flex flex-col items-center text-center"
            >
              <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-white/70 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Charging hubs grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chargingHubs.map((hub, index) => (
            <ChargingHubCard key={index} hub={hub} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/charging-hubs">
              View All Charging Locations
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
