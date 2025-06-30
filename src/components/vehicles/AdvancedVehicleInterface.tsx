
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Vehicle } from "@/types";
import { Zap, Brain, Eye, Route, Shield, Wifi } from "lucide-react";

interface AdvancedVehicleInterfaceProps {
  vehicle: Vehicle;
}

const AdvancedVehicleInterface: React.FC<AdvancedVehicleInterfaceProps> = ({ vehicle }) => {
  const [selectedView, setSelectedView] = useState<"hologram" | "neural" | "predictive">("hologram");
  const [autonomyLevel, setAutonomyLevel] = useState(5);
  const [neuralActivity, setNeuralActivity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNeuralActivity(Math.random() * 100);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="neo-blur border-white/10 p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Neural Vehicle Interface</h3>
            <p className="text-white/60">Advanced AI Integration • Level {autonomyLevel} Autonomy</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-green-400">Neural Active</span>
          </div>
        </div>
      </div>

      {/* View Selector */}
      <div className="flex space-x-1 bg-white/5 rounded-lg p-1">
        {[
          { id: "hologram", label: "Holographic", icon: Eye },
          { id: "neural", label: "Neural Map", icon: Brain },
          { id: "predictive", label: "Predictive", icon: Route }
        ].map(({ id, label, icon: Icon }) => (
          <Button
            key={id}
            variant={selectedView === id ? "default" : "ghost"}
            onClick={() => setSelectedView(id as typeof selectedView)}
            className={`flex-1 ${selectedView === id ? "bg-blue-600" : "hover:bg-white/10"}`}
          >
            <Icon size={16} className="mr-2" />
            {label}
          </Button>
        ))}
      </div>

      {/* Main Display */}
      <div className="relative h-64 bg-black/30 rounded-lg overflow-hidden border border-white/10">
        <AnimatePresence mode="wait">
          {selectedView === "hologram" && (
            <motion.div
              key="hologram"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative">
                <img
                  src={vehicle.image}
                  alt={vehicle.model}
                  className="w-48 h-32 object-cover rounded-lg opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-transparent rounded-lg" />
                <div className="absolute inset-0 border-2 border-blue-400/50 rounded-lg animate-pulse" />
                
                {/* Holographic Effects */}
                <div className="absolute -inset-4">
                  <div className="w-full h-full border border-blue-400/30 rounded-lg animate-spin-slow" />
                </div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse" />
              </div>
              
              {/* Info Overlays */}
              <div className="absolute top-4 left-4 space-y-2">
                <Badge className="bg-blue-600/80">Range: {vehicle.specs.range}mi</Badge>
                <Badge className="bg-green-600/80">Autonomous: Level {autonomyLevel}</Badge>
              </div>
            </motion.div>
          )}

          {selectedView === "neural" && (
            <motion.div
              key="neural"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute inset-0 p-4"
            >
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-white">Neural Activity</h4>
                  <div className="space-y-2">
                    {["Navigation AI", "Predictive Routing", "Safety Systems", "Energy Optimization"].map((system, index) => (
                      <div key={system} className="flex items-center justify-between">
                        <span className="text-xs text-white/70">{system}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-1 bg-white/10 rounded">
                            <motion.div
                              className="h-full bg-gradient-to-r from-blue-400 to-green-400 rounded"
                              animate={{ width: `${Math.random() * 100}%` }}
                              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                            />
                          </div>
                          <span className="text-xs text-green-400">
                            {Math.floor(Math.random() * 40 + 60)}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-white">System Status</h4>
                  <div className="space-y-2">
                    {[
                      { name: "Lidar Array", status: "Active", color: "green" },
                      { name: "Neural Processing", status: "Optimized", color: "blue" },
                      { name: "V2X Communication", status: "Connected", color: "purple" },
                      { name: "Edge Computing", status: "Real-time", color: "yellow" }
                    ].map(({ name, status, color }) => (
                      <div key={name} className="flex items-center justify-between">
                        <span className="text-xs text-white/70">{name}</span>
                        <Badge className={`bg-${color}-600/80 text-xs`}>{status}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {selectedView === "predictive" && (
            <motion.div
              key="predictive"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0 p-4"
            >
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-white">Predictive Analytics</h4>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">97%</div>
                    <div className="text-xs text-white/60">Route Efficiency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">12min</div>
                    <div className="text-xs text-white/60">Time Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">4.2kg</div>
                    <div className="text-xs text-white/60">CO₂ Reduced</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Next Service</span>
                    <span className="text-green-400">2,847 miles</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Optimal Charging</span>
                    <span className="text-blue-400">Station Alpha-7</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">Traffic Prediction</span>
                    <span className="text-yellow-400">Light at 3:15 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Advanced Controls */}
      <div className="grid grid-cols-3 gap-4">
        <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
          <Shield className="w-4 h-4 mr-2" />
          Security Scan
        </Button>
        <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
          <Wifi className="w-4 h-4 mr-2" />
          Connect V2X
        </Button>
        <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
          <Zap className="w-4 h-4 mr-2" />
          Neural Boost
        </Button>
      </div>

      {/* Real-time Metrics */}
      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-medium text-white">Real-time Neural Activity</h4>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-green-400">Live</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-green-400"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <span className="text-sm text-white font-mono">{neuralActivity.toFixed(1)}%</span>
        </div>
      </div>
    </Card>
  );
};

export default AdvancedVehicleInterface;
