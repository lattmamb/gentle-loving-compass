
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Battery, Zap, Leaf, Wind, MapPin, Clock } from "lucide-react";

interface LuxuryDashboardProps {
  userCarbonSavings?: number;
  milesElectric?: number;
  activeBookings?: number;
  nextPayment?: Date;
}

const LuxuryDashboard: React.FC<LuxuryDashboardProps> = ({
  userCarbonSavings = 2847,
  milesElectric = 12450,
  activeBookings = 2,
  nextPayment = new Date("2025-02-01")
}) => {
  const stats = [
    {
      icon: <Leaf className="h-6 w-6 text-green-400" />,
      label: "Carbon Saved",
      value: `${userCarbonSavings.toLocaleString()} kg`,
      trend: "+12% this month",
      color: "green"
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-400" />,
      label: "Electric Miles",
      value: milesElectric.toLocaleString(),
      trend: "+450 miles",
      color: "blue"
    },
    {
      icon: <Wind className="h-6 w-6 text-yellow-400" />,
      label: "Clean Energy",
      value: "78%",
      trend: "Illinois Grid",
      color: "yellow"
    },
    {
      icon: <Battery className="h-6 w-6 text-purple-400" />,
      label: "Active Routes",
      value: activeBookings.toString(),
      trend: "Chicago Metro",
      color: "purple"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 rounded-3xl"
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-light text-white mb-2">
              Good morning, Alex
            </h2>
            <p className="text-white/70">
              Your clean energy impact across Illinois continues to grow
            </p>
          </div>
          <div className="glass-luxury p-4 rounded-2xl">
            <MapPin className="h-8 w-8 text-blue-400" />
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="luxury-card h-full">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-${stat.color}-400/20`}>
                    {stat.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-light text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/60">
                      {stat.trend}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white/80 mb-2">
                    {stat.label}
                  </h3>
                  <div className="luxury-progress">
                    <div 
                      className="luxury-progress-bar"
                      style={{ width: `${Math.random() * 40 + 60}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Current Route Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="glass-card p-8 rounded-3xl"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-light text-white">Current Route</h3>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full charging-pulse" />
            <span className="text-sm text-green-400">Active</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-luxury p-4 rounded-xl">
            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-blue-400" />
              <div>
                <p className="text-sm text-white/60">Next Departure</p>
                <p className="text-lg font-medium text-white">8:15 AM</p>
              </div>
            </div>
          </div>
          
          <div className="glass-luxury p-4 rounded-xl">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-green-400" />
              <div>
                <p className="text-sm text-white/60">Route</p>
                <p className="text-lg font-medium text-white">Naperville → Chicago</p>
              </div>
            </div>
          </div>
          
          <div className="glass-luxury p-4 rounded-xl">
            <div className="flex items-center space-x-3">
              <Battery className="h-5 w-5 text-yellow-400" />
              <div>
                <p className="text-sm text-white/60">Vehicle</p>
                <p className="text-lg font-medium text-white">Model S • 96%</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LuxuryDashboard;
