import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Car, 
  Zap, 
  MapPin, 
  Calendar, 
  TrendingUp, 
  Leaf, 
  Clock,
  DollarSign,
  Shield,
  Settings,
  Bell,
  HelpCircle
} from "lucide-react";

interface User {
  name: string;
  email: string;
  subscription: string;
  location: string;
  communityRole: string;
  totalRides: number;
  carbonSaved: number;
  memberSince: string;
}

interface DashboardSidebarProps {
  user: User;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ user }) => {
  const menuItems = [
    { icon: Car, label: "Fleet Overview", badge: "3", active: true },
    { icon: Calendar, label: "My Bookings", badge: "2" },
    { icon: MapPin, label: "Locations", badge: null },
    { icon: TrendingUp, label: "Analytics", badge: null },
    { icon: Leaf, label: "Sustainability", badge: "New" },
    { icon: Shield, label: "Insurance", badge: null },
    { icon: DollarSign, label: "Billing", badge: null },
    { icon: Settings, label: "Settings", badge: null },
  ];

  const stats = [
    { label: "Total Rides", value: user.totalRides, icon: Car, color: "text-blue-400" },
    { label: "Carbon Saved", value: `${(user.carbonSaved / 1000).toFixed(1)}t`, icon: Leaf, color: "text-green-400" },
    { label: "Member Since", value: user.memberSince, icon: Clock, color: "text-purple-400" },
  ];

  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-80 h-screen glass-luxury border-r border-white/10 p-6 overflow-y-auto"
    >
      {/* User Profile Section */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-6">
          <Avatar className="w-16 h-16 border-2 border-primary/20">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-primary/10 text-primary text-lg font-bold">
              {user.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white">{user.name}</h3>
            <p className="text-sm text-white/60">{user.email}</p>
            <Badge className="mt-1 bg-primary/20 text-primary border-primary/30">
              {user.subscription}
            </Badge>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-white/70">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{user.location}</span>
          </div>
          <Button variant="ghost" size="sm" className="text-white/60 hover:text-white">
            <Bell className="w-4 h-4" />
          </Button>
        </div>

        <p className="text-xs text-white/50">{user.communityRole}</p>
      </div>

      {/* Quick Stats */}
      <Card className="glass-card mb-6">
        <CardContent className="p-4">
          <h4 className="text-sm font-medium text-white/80 mb-4">Quick Stats</h4>
          <div className="space-y-3">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                  <span className="text-sm text-white/70">{stat.label}</span>
                </div>
                <span className="text-sm font-medium text-white">{stat.value}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Navigation Menu */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-white/60 mb-4 uppercase tracking-wide">
          Navigation
        </h4>
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <motion.button
              key={index}
              whileHover={{ x: 4 }}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                item.active 
                  ? 'bg-primary/20 text-primary border border-primary/30' 
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              {item.badge && (
                <Badge 
                  variant={item.badge === "New" ? "default" : "secondary"}
                  className="text-xs"
                >
                  {item.badge}
                </Badge>
              )}
            </motion.button>
          ))}
        </nav>
      </div>

      {/* Active Subscription */}
      <Card className="glass-card">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium text-white/80">Active Plan</h4>
            <Zap className="w-4 h-4 text-yellow-400" />
          </div>
          <div className="space-y-2">
            <p className="text-lg font-semibold text-white">{user.subscription}</p>
            <p className="text-xs text-white/60">Next billing: Dec 15, 2024</p>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }} />
            </div>
            <p className="text-xs text-white/60">3 of 4 rides used this month</p>
          </div>
          <Button variant="outline" size="sm" className="w-full mt-4 border-white/20 text-white hover:bg-white/10">
            Upgrade Plan
          </Button>
        </CardContent>
      </Card>

      {/* Help Section */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <Button variant="ghost" className="w-full justify-start text-white/60 hover:text-white">
          <HelpCircle className="w-4 h-4 mr-2" />
          Help & Support
        </Button>
      </div>
    </motion.div>
  );
};

export default DashboardSidebar;