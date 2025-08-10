import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { 
  Car, 
  Zap, 
  MapPin, 
  RotateCcw, 
  Camera,
  Play,
  ChevronLeft,
  ChevronRight,
  Battery,
  Fuel,
  Navigation,
  Clock
} from "lucide-react";

interface Vehicle {
  id: string;
  model: string;
  type: string;
  batteryLevel: number;
  location: string;
  status: "available" | "in-use" | "charging" | "maintenance";
  image: string;
  price: number;
  range: number;
  eta: string;
}

const VehicleShowcase3D: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [viewAngle, setViewAngle] = useState(0);
  const [viewMode, setViewMode] = useState<"3d" | "specs" | "map">("3d");

  const vehicles: Vehicle[] = [
    {
      id: "1",
      model: "Tesla Model 3",
      type: "Performance",
      batteryLevel: 87,
      location: "Chicago Downtown",
      status: "available",
      image: "/placeholder.svg",
      price: 45,
      range: 358,
      eta: "3 min"
    },
    {
      id: "2", 
      model: "Tesla Model Y",
      type: "Long Range",
      batteryLevel: 92,
      location: "Millennium Park",
      status: "available",
      image: "/placeholder.svg",
      price: 52,
      range: 326,
      eta: "7 min"
    },
    {
      id: "3",
      model: "Tesla Model S",
      type: "Plaid",
      batteryLevel: 78,
      location: "Navy Pier",
      status: "charging",
      image: "/placeholder.svg",
      price: 68,
      range: 405,
      eta: "12 min"
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRotating) {
      interval = setInterval(() => {
        setViewAngle(prev => (prev + 2) % 360);
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isRotating]);

  const currentVehicle = vehicles[selectedVehicle];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "in-use": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "charging": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "maintenance": return "bg-red-500/20 text-red-400 border-red-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getBatteryColor = (level: number) => {
    if (level > 70) return "text-green-400";
    if (level > 30) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="flex-1 relative">
      {/* Main 3D Vehicle Viewer */}
      <Card className="glass-card h-96 mb-6 overflow-hidden">
        <CardContent className="p-0 h-full relative">
          {/* Vehicle Display Area */}
          <div className="relative h-full bg-gradient-to-br from-background to-black/60">
            {/* Segmented Control */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
              <SegmentedControl
                options={[
                  { label: "3D", value: "3d" },
                  { label: "Specs", value: "specs" },
                  { label: "Map", value: "map" },
                ]}
                value={viewMode}
                onChange={(val) => setViewMode(val)}
              />
            </div>

            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotateY: viewMode === "3d" ? viewAngle : 0 }}
              transition={{ duration: 0.1 }}
              style={{ perspective: "1000px" }}
            >
              <motion.img
                key={currentVehicle.id}
                src={currentVehicle.image}
                alt={currentVehicle.model}
                className="w-80 h-60 object-contain filter drop-shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            {/* Status Overlay */}
            <div className="absolute top-4 left-4">
              <Badge className={getStatusColor(currentVehicle.status)}>
                {currentVehicle.status.charAt(0).toUpperCase() + currentVehicle.status.slice(1)}
              </Badge>
            </div>

            <div className="absolute top-4 right-4 flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsRotating(!isRotating)}
                className="bg-black/30 backdrop-blur-sm text-foreground hover:bg-black/50"
                disabled={viewMode !== "3d"}
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="bg-black/30 backdrop-blur-sm text-foreground hover:bg-black/50"
              >
                <Camera className="w-4 h-4" />
              </Button>
            </div>

            {/* Vehicle Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedVehicle(prev => prev > 0 ? prev - 1 : vehicles.length - 1)}
                className="bg-black/30 backdrop-blur-sm text-foreground hover:bg-black/50"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <div className="flex space-x-2">
                {vehicles.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedVehicle(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === selectedVehicle ? 'bg-primary' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedVehicle(prev => prev < vehicles.length - 1 ? prev + 1 : 0)}
                className="bg-black/30 backdrop-blur-sm text-foreground hover:bg-black/50"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Vehicle Details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentVehicle.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="glass-card mb-6">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{currentVehicle.model}</h3>
                  <p className="text-white/60">{currentVehicle.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">${currentVehicle.price}</p>
                  <p className="text-sm text-white/60">per hour</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Battery className={`w-5 h-5 ${getBatteryColor(currentVehicle.batteryLevel)}`} />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Battery</p>
                    <p className="font-semibold text-white">{currentVehicle.batteryLevel}%</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Fuel className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Range</p>
                    <p className="font-semibold text-white">{currentVehicle.range} mi</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Location</p>
                    <p className="font-semibold text-white">{currentVehicle.location}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">ETA</p>
                    <p className="font-semibold text-white">{currentVehicle.eta}</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button 
                  className="flex-1 bg-primary hover:bg-primary/80"
                  disabled={currentVehicle.status !== "available"}
                >
                  <Car className="w-4 h-4 mr-2" />
                  {currentVehicle.status === "available" ? "Book Now" : "Unavailable"}
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Navigation className="w-4 h-4 mr-2" />
                  Navigate
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="h-16 border-white/20 text-white hover:bg-white/10">
          <Play className="w-5 h-5 mr-2" />
          Virtual Tour
        </Button>
        <Button variant="outline" className="h-16 border-white/20 text-white hover:bg-white/10">
          <Camera className="w-5 h-5 mr-2" />
          Damage Report
        </Button>
      </div>
    </div>
  );
};

export default VehicleShowcase3D;