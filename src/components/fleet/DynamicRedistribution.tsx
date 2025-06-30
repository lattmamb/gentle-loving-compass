
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, TrendingUp, Users, Navigation, Shuffle } from "lucide-react";

interface LocationDemand {
  id: string;
  name: string;
  currentVehicles: number;
  demandLevel: "low" | "medium" | "high" | "critical";
  predictedDemand: number;
  suggestedVehicles: number;
  distance: number;
}

interface RedistributionTask {
  id: string;
  fromLocation: string;
  toLocation: string;
  vehicleCount: number;
  priority: "low" | "medium" | "high";
  estimatedTime: number;
  reason: string;
  status: "pending" | "in-progress" | "completed";
}

const DynamicRedistribution: React.FC = () => {
  const [locations, setLocations] = useState<LocationDemand[]>([
    {
      id: "loc-chi",
      name: "Chicago Loop",
      currentVehicles: 45,
      demandLevel: "high",
      predictedDemand: 78,
      suggestedVehicles: 65,
      distance: 0
    },
    {
      id: "loc-nap",
      name: "Naperville",
      currentVehicles: 23,
      demandLevel: "medium",
      predictedDemand: 34,
      suggestedVehicles: 28,
      distance: 28
    },
    {
      id: "loc-spr",
      name: "Springfield",
      currentVehicles: 18,
      demandLevel: "critical",
      predictedDemand: 42,
      suggestedVehicles: 35,
      distance: 200
    },
    {
      id: "loc-rck",
      name: "Rockford",
      currentVehicles: 31,
      demandLevel: "low",
      predictedDemand: 16,
      suggestedVehicles: 20,
      distance: 90
    }
  ]);

  const [redistributionTasks, setRedistributionTasks] = useState<RedistributionTask[]>([
    {
      id: "task-1",
      fromLocation: "Rockford",
      toLocation: "Springfield",
      vehicleCount: 8,
      priority: "high",
      estimatedTime: 45,
      reason: "Critical demand spike predicted",
      status: "pending"
    },
    {
      id: "task-2",
      fromLocation: "Naperville",
      toLocation: "Chicago Loop",
      vehicleCount: 5,
      priority: "medium",
      estimatedTime: 25,
      reason: "Rush hour optimization",
      status: "in-progress"
    }
  ]);

  const [systemStats, setSystemStats] = useState({
    totalRedistributions: 1247,
    activeTransfers: 13,
    efficiencyGain: 23.7,
    demandAccuracy: 89.4
  });

  const getDemandColor = (level: string) => {
    switch (level) {
      case "critical": return "bg-red-600/20 text-red-400 border-red-500/30";
      case "high": return "bg-orange-600/20 text-orange-400 border-orange-500/30";
      case "medium": return "bg-yellow-600/20 text-yellow-400 border-yellow-500/30";
      case "low": return "bg-green-600/20 text-green-400 border-green-500/30";
      default: return "bg-gray-600/20 text-gray-400 border-gray-500/30";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-600/20 text-red-400 border-red-500/30";
      case "medium": return "bg-yellow-600/20 text-yellow-400 border-yellow-500/30";
      case "low": return "bg-blue-600/20 text-blue-400 border-blue-500/30";
      default: return "bg-gray-600/20 text-gray-400 border-gray-500/30";
    }
  };

  const handleExecuteRedistribution = (taskId: string) => {
    setRedistributionTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, status: "in-progress" } : task
    ));
  };

  const handleOptimizeAll = () => {
    console.log("Executing global optimization...");
    // In real implementation, this would trigger AI optimization
  };

  useEffect(() => {
    // Simulate real-time demand updates
    const interval = setInterval(() => {
      setLocations(prev => prev.map(loc => ({
        ...loc,
        predictedDemand: Math.max(5, Math.min(100, loc.predictedDemand + Math.floor((Math.random() - 0.5) * 10)))
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="neo-blur border-white/10">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          <div className="flex items-center">
            <Shuffle className="w-6 h-6 mr-2 text-blue-400" />
            Dynamic Redistribution AI
          </div>
          <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30">
            {systemStats.efficiencyGain}% Efficiency Gain
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* System Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{systemStats.activeTransfers}</div>
            <div className="text-xs text-white/60">Active Transfers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{systemStats.totalRedistributions}</div>
            <div className="text-xs text-white/60">Total Moves</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{systemStats.efficiencyGain}%</div>
            <div className="text-xs text-white/60">Efficiency Gain</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{systemStats.demandAccuracy}%</div>
            <div className="text-xs text-white/60">Demand Accuracy</div>
          </div>
        </div>

        {/* Location Demand Analysis */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-white flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-green-400" />
            Real-time Demand Analysis
          </h4>
          {locations.map((location) => (
            <motion.div
              key={location.id}
              className="p-4 rounded-lg bg-white/5 border border-white/10"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <Navigation className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="text-white font-medium">{location.name}</div>
                    <div className="text-white/60 text-sm">{location.distance} miles from hub</div>
                  </div>
                </div>
                <Badge className={getDemandColor(location.demandLevel)}>
                  {location.demandLevel.toUpperCase()}
                </Badge>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-3">
                <div className="text-center">
                  <div className="text-lg font-bold text-white">{location.currentVehicles}</div>
                  <div className="text-xs text-white/60">Current</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-orange-400">{location.predictedDemand}</div>
                  <div className="text-xs text-white/60">Predicted</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">{location.suggestedVehicles}</div>
                  <div className="text-xs text-white/60">Suggested</div>
                </div>
              </div>

              {/* Demand Visualization */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-white/60">
                  <span>Demand Level</span>
                  <span>{location.predictedDemand}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${
                      location.demandLevel === "critical" ? "bg-red-500" :
                      location.demandLevel === "high" ? "bg-orange-500" :
                      location.demandLevel === "medium" ? "bg-yellow-500" : "bg-green-500"
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(100, location.predictedDemand)}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Redistribution Tasks */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-white flex items-center">
            <ArrowRight className="w-4 h-4 mr-2 text-purple-400" />
            Active Redistribution Tasks
          </h4>
          {redistributionTasks.map((task) => (
            <motion.div
              key={task.id}
              className="p-4 rounded-lg bg-white/5 border border-white/10"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-purple-400" />
                  <div>
                    <div className="text-white font-medium">
                      {task.fromLocation} → {task.toLocation}
                    </div>
                    <div className="text-white/60 text-sm">{task.vehicleCount} vehicles</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getPriorityColor(task.priority)}>
                    {task.priority.toUpperCase()}
                  </Badge>
                  <Badge className={
                    task.status === "completed" ? "bg-green-600/20 text-green-400 border-green-500/30" :
                    task.status === "in-progress" ? "bg-blue-600/20 text-blue-400 border-blue-500/30" :
                    "bg-gray-600/20 text-gray-400 border-gray-500/30"
                  }>
                    {task.status}
                  </Badge>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="text-sm">
                  <span className="text-white/60">Reason: </span>
                  <span className="text-white">{task.reason}</span>
                </div>
                <div className="text-sm">
                  <span className="text-white/60">ETA: </span>
                  <span className="text-blue-400 font-medium">{task.estimatedTime} minutes</span>
                </div>
              </div>

              {task.status === "pending" && (
                <Button
                  size="sm"
                  onClick={() => handleExecuteRedistribution(task.id)}
                  className="bg-blue-600 hover:bg-blue-700 text-xs"
                >
                  Execute Transfer
                </Button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            onClick={handleOptimizeAll}
            className="border-white/10 text-white hover:bg-white/5 flex-1"
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Optimize All
          </Button>
          <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 flex-1">
            <MapPin className="w-4 h-4 mr-2" />
            View Map
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DynamicRedistribution;
