
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Zap, TrendingUp, MapPin, Activity, Globe, Cpu } from "lucide-react";

interface FleetMetrics {
  totalVehicles: number;
  activeVehicles: number;
  utilization: number;
  efficiency: number;
  carbonSaved: number;
  neuralOptimization: number;
}

const FleetIntelligenceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<FleetMetrics>({
    totalVehicles: 247,
    activeVehicles: 189,
    utilization: 76.5,
    efficiency: 94.2,
    carbonSaved: 12847,
    neuralOptimization: 87.3
  });

  const [realTimeData, setRealTimeData] = useState<Array<{time: string, efficiency: number, neural: number}>>([]);

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString();
      
      setRealTimeData(prev => {
        const newData = [...prev, {
          time: timeStr,
          efficiency: 85 + Math.random() * 15,
          neural: 80 + Math.random() * 20
        }].slice(-20); // Keep last 20 data points
        return newData;
      });

      setMetrics(prev => ({
        ...prev,
        utilization: Math.max(50, Math.min(100, prev.utilization + (Math.random() - 0.5) * 5)),
        efficiency: Math.max(80, Math.min(100, prev.efficiency + (Math.random() - 0.5) * 3)),
        neuralOptimization: Math.max(70, Math.min(100, prev.neuralOptimization + (Math.random() - 0.5) * 4))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const chartConfig = {
    efficiency: { label: "Fleet Efficiency", color: "#3b82f6" },
    neural: { label: "Neural Optimization", color: "#8b5cf6" }
  };

  const pieData = [
    { name: "Active", value: metrics.activeVehicles, color: "#22c55e" },
    { name: "Charging", value: 32, color: "#eab308" },
    { name: "Maintenance", value: 18, color: "#f97316" },
    { name: "Standby", value: metrics.totalVehicles - metrics.activeVehicles - 50, color: "#6b7280" }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">Fleet Neural Intelligence</h2>
          <p className="text-white/60">Real-time autonomous fleet monitoring and optimization</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm text-green-400">Neural Network Active</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="neo-blur border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm">Total Fleet</p>
                <p className="text-2xl font-bold text-white">{metrics.totalVehicles}</p>
                <p className="text-green-400 text-xs">+12 this week</p>
              </div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="neo-blur border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm">Active Vehicles</p>
                <p className="text-2xl font-bold text-white">{metrics.activeVehicles}</p>
                <p className="text-white/60 text-xs">{((metrics.activeVehicles / metrics.totalVehicles) * 100).toFixed(1)}% utilization</p>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <Activity className="w-6 h-6 text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="neo-blur border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm">Neural Efficiency</p>
                <p className="text-2xl font-bold text-white">{metrics.neuralOptimization.toFixed(1)}%</p>
                <p className="text-purple-400 text-xs">AI-optimized</p>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Cpu className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="neo-blur border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm">Carbon Saved</p>
                <p className="text-2xl font-bold text-white">{(metrics.carbonSaved / 1000).toFixed(1)}t</p>
                <p className="text-green-400 text-xs">This month</p>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Real-time Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="neo-blur border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Activity className="w-5 h-5 mr-2 text-blue-400" />
              Real-time Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={realTimeData}>
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
                    dataKey="efficiency" 
                    stroke="var(--color-efficiency)" 
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="neural" 
                    stroke="var(--color-neural)" 
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="neo-blur border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-green-400" />
              Fleet Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Neural Network Status */}
      <Card className="neo-blur border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center justify-between">
            <div className="flex items-center">
              <Cpu className="w-5 h-5 mr-2 text-purple-400" />
              Neural Network Status
            </div>
            <Badge className="bg-green-600/80">All Systems Optimal</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-white">Processing Nodes</h4>
              {[
                { name: "Route Optimization", load: 87, status: "active" },
                { name: "Predictive Maintenance", load: 62, status: "active" },
                { name: "Energy Management", load: 91, status: "active" },
                { name: "Safety Analysis", load: 78, status: "active" }
              ].map(({ name, load, status }) => (
                <div key={name} className="flex items-center justify-between">
                  <span className="text-sm text-white/70">{name}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${load}%` }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                    <span className="text-xs text-green-400">{load}%</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-medium text-white">Network Health</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/70">Latency</span>
                  <Badge className="bg-green-600/80">12ms</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/70">Throughput</span>
                  <Badge className="bg-blue-600/80">98.7%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/70">Accuracy</span>
                  <Badge className="bg-purple-600/80">99.2%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/70">Uptime</span>
                  <Badge className="bg-green-600/80">99.98%</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-medium text-white">Quick Actions</h4>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start border-white/10 text-white hover:bg-white/5">
                  <Zap className="w-4 h-4 mr-2" />
                  Boost Neural Processing
                </Button>
                <Button variant="outline" className="w-full justify-start border-white/10 text-white hover:bg-white/5">
                  <Activity className="w-4 h-4 mr-2" />
                  Run Fleet Analysis
                </Button>
                <Button variant="outline" className="w-full justify-start border-white/10 text-white hover:bg-white/5">
                  <Globe className="w-4 h-4 mr-2" />
                  Update Neural Models
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FleetIntelligenceDashboard;
