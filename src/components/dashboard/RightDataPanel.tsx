import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Zap, 
  TrendingUp, 
  MapPin, 
  Clock,
  Battery,
  Leaf,
  DollarSign,
  Users,
  Calendar,
  Navigation,
  ChevronRight,
  AlertTriangle,
  CheckCircle,
  Activity
} from "lucide-react";

const RightDataPanel: React.FC = () => {
  const [liveData, setLiveData] = useState({
    activeFleet: 247,
    chargingStations: 89,
    carbonSaved: 12847,
    energyGenerated: 5432,
    activeMiles: 156,
    revenue: 28450
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => ({
        ...prev,
        activeMiles: prev.activeMiles + Math.floor(Math.random() * 3),
        carbonSaved: prev.carbonSaved + Math.floor(Math.random() * 2),
        energyGenerated: prev.energyGenerated + Math.floor(Math.random() * 5),
        revenue: prev.revenue + Math.floor(Math.random() * 50)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const recentBookings = [
    { id: "1", customer: "Sarah Chen", vehicle: "Model 3", time: "2 min ago", status: "active" },
    { id: "2", customer: "Mike Johnson", vehicle: "Model Y", time: "5 min ago", status: "completed" },
    { id: "3", customer: "Emma Davis", vehicle: "Model S", time: "8 min ago", status: "pending" },
  ];

  const alerts = [
    { type: "warning", message: "Model 3 #247 needs charging", time: "3 min ago" },
    { type: "info", message: "New charging station online", time: "12 min ago" },
    { type: "success", message: "Fleet efficiency up 5%", time: "25 min ago" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-500/20 text-green-400";
      case "completed": return "bg-blue-500/20 text-blue-400";
      case "pending": return "bg-yellow-500/20 text-yellow-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "warning": return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case "success": return <CheckCircle className="w-4 h-4 text-green-400" />;
      default: return <Activity className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-80 h-screen glass-luxury border-l border-white/10 p-6 overflow-y-auto space-y-6"
    >
      {/* Live Fleet Status */}
      <Card className="glass-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-white flex items-center">
            <Activity className="w-5 h-5 mr-2 text-primary" />
            Live Fleet Status
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">{liveData.activeFleet}</p>
              <p className="text-xs text-white/60">Active Vehicles</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-400">{liveData.chargingStations}</p>
              <p className="text-xs text-white/60">Charging Stations</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white/70">Fleet Utilization</span>
                <span className="text-white">76%</span>
              </div>
              <Progress value={76} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white/70">Battery Health</span>
                <span className="text-white">94%</span>
              </div>
              <Progress value={94} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-time Metrics */}
      <Card className="glass-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-white flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
            Live Metrics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Leaf className="w-4 h-4 text-green-400" />
                <span className="text-sm text-white/70">Carbon Saved</span>
              </div>
              <span className="text-sm font-semibold text-white">{(liveData.carbonSaved / 1000).toFixed(1)}t</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-white/70">Energy Generated</span>
              </div>
              <span className="text-sm font-semibold text-white">{liveData.energyGenerated} kWh</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Navigation className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-white/70">Active Miles</span>
              </div>
              <span className="text-sm font-semibold text-white">{liveData.activeMiles} mi</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <DollarSign className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-white/70">Revenue Today</span>
              </div>
              <span className="text-sm font-semibold text-white">${(liveData.revenue / 1000).toFixed(1)}k</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Bookings */}
      <Card className="glass-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-white flex items-center justify-between">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-blue-400" />
              Recent Bookings
            </div>
            <Button variant="ghost" size="sm" className="text-white/60 hover:text-white">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentBookings.map((booking) => (
            <motion.div
              key={booking.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div>
                <p className="text-sm font-medium text-white">{booking.customer}</p>
                <p className="text-xs text-white/60">{booking.vehicle} • {booking.time}</p>
              </div>
              <Badge className={getStatusColor(booking.status)}>
                {booking.status}
              </Badge>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      {/* System Alerts */}
      <Card className="glass-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-white flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
            System Alerts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {alerts.map((alert, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-white/5">
              {getAlertIcon(alert.type)}
              <div className="flex-1">
                <p className="text-sm text-white">{alert.message}</p>
                <p className="text-xs text-white/50">{alert.time}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="glass-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-white">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button className="w-full justify-start bg-primary/20 text-primary hover:bg-primary/30">
            <Users className="w-4 h-4 mr-2" />
            Add New Customer
          </Button>
          <Button variant="outline" className="w-full justify-start border-white/20 text-white hover:bg-white/10">
            <MapPin className="w-4 h-4 mr-2" />
            Add Charging Station
          </Button>
          <Button variant="outline" className="w-full justify-start border-white/20 text-white hover:bg-white/10">
            <Battery className="w-4 h-4 mr-2" />
            Fleet Maintenance
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RightDataPanel;