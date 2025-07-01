
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DashboardWelcome from "@/components/dashboard/DashboardWelcome";
import DashboardTabs from "@/components/dashboard/DashboardTabs";
import FleetIntelligenceDashboard from "@/components/fleet/FleetIntelligenceDashboard";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock user data for dashboard
  const mockUser = {
    name: "Alex Chen",
    email: "alex@example.com",
    subscription: "Unity FlexRide",
    location: "Carbondale, IL",
    communityRole: "Community Coordinator",
    totalRides: 47,
    carbonSaved: 2847,
    memberSince: "2024"
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <DashboardWelcome user={mockUser} />
            
            <div className="grid grid-cols-1 gap-8 mb-12">
              <DashboardTabs />
            </div>

            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="luxury-card mb-8">
                <h2 className="text-2xl font-light mb-4 text-gradient">Fleet Overview</h2>
                <p className="text-white/70 mb-6">
                  Real-time insights into your community's transportation network
                </p>
              </div>
              <FleetIntelligenceDashboard />
            </motion.div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
