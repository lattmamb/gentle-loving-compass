
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DashboardWelcome from "@/components/dashboard/DashboardWelcome";
import DashboardTabs from "@/components/dashboard/DashboardTabs";
import FleetIntelligenceDashboard from "@/components/fleet/FleetIntelligenceDashboard";
import PersonalizedMatcher from "@/components/ai/PersonalizedMatcher";
import VoiceInterface from "@/components/voice/VoiceInterface";
import NeuralFleetNetwork from "@/components/fleet/NeuralFleetNetwork";
import PredictiveMaintenanceSystem from "@/components/fleet/PredictiveMaintenanceSystem";
import DynamicRedistribution from "@/components/fleet/DynamicRedistribution";
import EnergyOptimization from "@/components/fleet/EnergyOptimization";

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
          <DashboardWelcome user={mockUser} />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-3">
              <DashboardTabs />
            </div>
            <div>
              <VoiceInterface />
            </div>
          </div>

          {/* Phase 3: Neural Fleet Management Systems */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12">
            <NeuralFleetNetwork />
            <PredictiveMaintenanceSystem />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12">
            <DynamicRedistribution />
            <EnergyOptimization />
          </div>
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12">
            <PersonalizedMatcher />
            <FleetIntelligenceDashboard />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
