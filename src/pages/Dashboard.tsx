
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DashboardWelcome from "@/components/dashboard/DashboardWelcome";
import DashboardTabs from "@/components/dashboard/DashboardTabs";
import FleetIntelligenceDashboard from "@/components/fleet/FleetIntelligenceDashboard";
import PersonalizedMatcher from "@/components/ai/PersonalizedMatcher";
import VoiceInterface from "@/components/voice/VoiceInterface";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <DashboardWelcome />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-3">
              <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div>
              <VoiceInterface />
            </div>
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
