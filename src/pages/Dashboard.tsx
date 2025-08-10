
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import VehicleShowcase3D from "@/components/dashboard/VehicleShowcase3D";
import RightDataPanel from "@/components/dashboard/RightDataPanel";
import EnhancedMapBackground from "@/components/dashboard/EnhancedMapBackground";
import KPICards from "@/components/dashboard/KPICards";

const Dashboard = () => {
  // Mock user data for dashboard
  const mockUser = {
    name: "Alex Chen",
    email: "alex.chen@unityfleet.com",
    subscription: "Unity FlexRide Pro",
    location: "Carbondale, IL",
    communityRole: "Fleet Coordinator",
    totalRides: 47,
    carbonSaved: 2847,
    memberSince: "2024"
  };

  useEffect(() => {
    document.title = "Unity Fleet Dashboard – Clean, Modern EV Operations";
    const desc = "Live Illinois EV fleet metrics, bookings, and smart operations.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', desc);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex relative overflow-hidden">
      {/* Background Map */}
      <EnhancedMapBackground 
        className="absolute inset-0 z-0 opacity-30" 
        interactive={false}
        showVehicles={true}
      />
      
      {/* Main Dashboard Layout */}
      <div className="relative z-10 flex w-full h-screen">
        {/* Left Sidebar */}
        <DashboardSidebar user={mockUser} />
        
        {/* Central Content Area */}
        <div className="flex-1 flex flex-col p-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="glass-luxury p-4 rounded-lg border border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Unity Fleet Dashboard</h1>
                  <p className="text-muted-foreground">Illinois Clean Energy Transportation Network</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Active Fleet</p>
                    <p className="text-xl font-bold text-primary">247 Vehicles</p>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* KPI Cards */}
          <KPICards />
          
          {/* Main Content */}
          <div className="flex-1 overflow-hidden">
            <VehicleShowcase3D />
          </div>
        </div>
        
        {/* Right Data Panel */}
        <RightDataPanel />
      </div>
    </div>
  );
};

export default Dashboard;
