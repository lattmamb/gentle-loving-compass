
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Zap, Leaf, TrendingDown, Battery, Sun, Wind } from "lucide-react";

interface EnergySource {
  id: string;
  name: string;
  type: "solar" | "wind" | "grid" | "battery";
  capacity: number;
  currentOutput: number;
  efficiency: number;
  cost: number;
}

const EnergyOptimization: React.FC = () => {
  const [energySources, setEnergySources] = useState<EnergySource[]>([
    { id: "solar-1", name: "Solar Farm Alpha", type: "solar", capacity: 250, currentOutput: 187, efficiency: 94.2, cost: 0.02 },
    { id: "wind-1", name: "Wind Farm Beta", type: "wind", capacity: 180, currentOutput: 142, efficiency: 88.7, cost: 0.03 },
    { id: "battery-1", name: "Grid Storage", type: "battery", capacity: 500, currentOutput: 230, efficiency: 96.1, cost: 0.04 },
    { id: "grid-1", name: "Clean Grid", type: "grid", capacity: 300, currentOutput: 85, efficiency: 85.3, cost: 0.08 }
  ]);

  const [optimizationStats, setOptimizationStats] = useState({
    totalConsumption: 644,
    renewablePercent: 78.3,
    costSavings: 2847,
    carbonOffset: 15.7,
    efficiency: 91.4
  });

  const [energyData, setEnergyData] = useState<Array<{time: string, consumption: number, renewable: number, cost: number}>>([]);

  useEffect(() => {
    // Simulate real-time energy data
    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString();
      
      setEnergyData(prev => {
        const newData = [...prev, {
          time: timeStr,
          consumption: 500 + Math.random() * 200,
          renewable: 400 + Math.random() * 150,
          cost: 0.02 + Math.random() * 0.06
        }].slice(-20);
        return newData;
      });

      // Update energy sources
      setEnergySources(prev => prev.map(source => ({
        ...source,
        currentOutput: Math.max(0, Math.min(source.capacity, source.currentOutput + (Math.random() - 0.5) * 20)),
        efficiency: Math.max(70, Math.min(100, source.efficiency + (Math.random() - 0.5) * 2))
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getSourceIcon = (type: string) => {
    switch (type) {
      case "solar": return Sun;
      case "wind": return Wind;
      case "battery": return Battery;
      case "grid": return Zap;
      default: return Zap;
    }
  };

  const getSourceColor = (type: string) => {
    switch (type) {
      case "solar": return "text-yellow-400";
      case "wind": return "text-blue-400";
      case "battery": return "text-green-400";
      case "grid": return "text-purple-400";
      default: return "text-white";
    }
  };

  const handleOptimizeSource = (sourceId: string) => {
    setEnergySources(prev => prev.map(source => 
      source.id === sourceId 
        ? { ...source, efficiency: Math.min(100, source.efficiency + 5) }
        : source
    ));
  };

  const chartConfig = {
    consumption: { label: "Total Consumption", color: "#8b5cf6" },
    renewable: { label: "Renewable Energy", color: "#22c55e" },
    cost: { label: "Cost per kWh", color: "#f59e0b" }
  };

  return (
    <Card className="neo-blur border-white/10">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          <div className="flex items-center">
            <Leaf className="w-6 h-6 mr-2 text-green-400" />
            Energy Optimization AI
          </div>
          <Badge className="bg-green-600/20 text-green-400 border-green-500/30">
            {optimizationStats.renewablePercent}% Renewable
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Energy Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{optimizationStats.totalConsumption}</div>
            <div className="text-xs text-white/60">kWh Current</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{optimizationStats.renewablePercent}%</div>
            <div className="text-xs text-white/60">Renewable</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">${optimizationStats.costSavings}</div>
            <div className="text-xs text-white/60">Daily Savings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{optimizationStats.carbonOffset}t</div>
            <div className="text-xs text-white/60">CO₂ Offset</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">{optimizationStats.efficiency}%</div>
            <div className="text-xs text-white/60">Efficiency</div>
          </div>
        </div>

        {/* Energy Sources */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-white flex items-center">
            <Zap className="w-4 h-4 mr-2 text-yellow-400" />
            Energy Sources Status
          </h4>
          {energySources.map((source) => {
            const IconComponent = getSourceIcon(source.type);
            return (
              <motion.div
                key={source.id}
                className="p-4 rounded-lg bg-white/5 border border-white/10"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <IconComponent className={`w-5 h-5 ${getSourceColor(source.type)}`} />
                    <div>
                      <div className="text-white font-medium">{source.name}</div>
                      <div className="text-white/60 text-sm capitalize">{source.type} Energy</div>
                    </div>
                  </div>
                  <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30">
                    ${source.cost.toFixed(3)}/kWh
                  </Badge>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-3">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{source.currentOutput}</div>
                    <div className="text-xs text-white/60">Current kW</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-400">{source.capacity}</div>
                    <div className="text-xs text-white/60">Max kW</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">{source.efficiency.toFixed(1)}%</div>
                    <div className="text-xs text-white/60">Efficiency</div>
                  </div>
                </div>

                {/* Output Visualization */}
                <div className="space-y-2 mb-3">
                  <div className="flex justify-between text-xs text-white/60">
                    <span>Output Level</span>
                    <span>{((source.currentOutput / source.capacity) * 100).toFixed(1)}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${
                        source.type === "solar" ? "bg-yellow-500" :
                        source.type === "wind" ? "bg-blue-500" :
                        source.type === "battery" ? "bg-green-500" : "bg-purple-500"
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${(source.currentOutput / source.capacity) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleOptimizeSource(source.id)}
                  className="border-white/10 text-white hover:bg-white/5 text-xs"
                >
                  <TrendingDown className="w-3 h-3 mr-1" />
                  Optimize
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Real-time Energy Chart */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-white flex items-center">
            <TrendingDown className="w-4 h-4 mr-2 text-blue-400" />
            Real-time Energy Flow
          </h4>
          <ChartContainer config={chartConfig} className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={energyData}>
                <XAxis 
                  dataKey="time" 
                  tick={{ fill: 'rgba(255, 255, 255, 0.7)', fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  tick={{ fill: 'rgba(255, 255, 255, 0.7)', fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line 
                  type="monotone" 
                  dataKey="consumption" 
                  stroke="var(--color-consumption)" 
                  strokeWidth={2}
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="renewable" 
                  stroke="var(--color-renewable)" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>

        {/* Optimization Controls */}
        <div className="flex space-x-2">
          <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 flex-1">
            <Leaf className="w-4 h-4 mr-2" />
            Maximize Green
          </Button>
          <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 flex-1">
            <TrendingDown className="w-4 h-4 mr-2" />
            Minimize Cost
          </Button>
          <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 flex-1">
            <Battery className="w-4 h-4 mr-2" />
            Balance Load
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnergyOptimization;
